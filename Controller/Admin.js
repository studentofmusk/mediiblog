const bcrypt = require('bcryptjs');
const Admin = require('../Model/Admin');
const jwt = require('jsonwebtoken');
const Blog = require('../Model/Learningscience');
const fs = require('fs');
const path = require('path');

const SECRET_KEY = process.env.SECRET_KEY;
const UPLOADS_DIR = path.join(__dirname, '../uploads');

const Signup = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        let admin = await Admin.findOne({ username });

        if (admin) {
            return res.status(400).json({ message: 'Admin with this username already exists' });
        }

        admin = new Admin({ username, password, email });
        await admin.save();
        res.status(201).send({success:true});

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

const Login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const payload = { adminId: admin.id };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '5h' });
        res.cookie('mediiblog', token, {
            httpOnly: true,
            // secure: true,  // Use this when deploying with HTTPS
            maxAge: 18000000 // 5 hour in milliseconds
        });

        res.status(200).send({success:true, message:"login successful"});

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

const UpdateBlog = async(req, res)=>{
    try {
        const {id, title, category, page, author, designation, time, authorImgSrc, description, coverpic, content } = req.body;

        if(id && title && category && page && author && designation && time && authorImgSrc && description && coverpic && content)
        {
            const blog = await Blog.findById(id);
            if(!blog) throw new Error("Invalid Blog");
            await blog.updateBlog(
                title,
                category,
                page,
                author,
                designation,
                time,
                authorImgSrc,
                description,
                coverpic,
                content
                );
            res.status(200).send({success:true, message:`Updated ID:${id} successful`});

        }else{
            res.status(401).send({success:false, message:"Please fullfill the requirements"})
        }
    } catch (error) {
        res.status(400).send({success:false, message:error.message});
    }
}

  const UploadImage = (req, res) => {
    console.log(req.file);
    if (req.file) {
      res.json({
        success: true,
        file: req.file
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }
  }
  

  const GetUploads = (req, res)=>{
    fs.readdir(UPLOADS_DIR, (err, files) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Failed to read directory' });
        }
        
        // Filter out non-image files if needed
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif';
        });
        res.json({ success: true, files: imageFiles });
    });

  }




module.exports = {
    Signup,
    Login,
    UpdateBlog,
    UploadImage,
    GetUploads
}