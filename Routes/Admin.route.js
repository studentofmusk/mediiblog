const express = require('express');
const { Signup, Login, UpdateBlog, UploadImage, GetUploads, CreateNewBlogPage } = require('../Controller/Admin');
const auth = require('../Middleware/auth');
const admin_routes = express();
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    let customFileName = req.body.filename || Date.now(); // Use the provided filename or fallback to the current timestamp
    let fileExtension = file.originalname.split('.')[1];  // Extract file extension
    cb(null, `${customFileName}.${fileExtension}`);
  }
});
const upload = multer({ storage: storage });

admin_routes.post('/upload', auth, upload.single('image'), UploadImage)

// admin_routes.post('/signup', Signup);
admin_routes.get('/get-uploads', GetUploads );
admin_routes.get('/create-new-page', auth, CreateNewBlogPage);
admin_routes.post('/login', Login);
admin_routes.post('/update-blog', auth, UpdateBlog);

admin_routes.get("/admin-check", auth, (req, res) => {
  res.status(200).send({ success: true, message: "access Grant!" });
})

module.exports = admin_routes;