const Blog = require('../Model/Learningscience');


const GetHead =  async(req, res)=>{
    try {
        const blogs = await Blog.find({}, {category:1, title:1, coverpic:1, author:1, time:1});
        res.status(200).send({success:true, data:blogs})
    } catch (error) {
        res.status(401).send({success:false, message:error.message});
    }
}

const GetBlog = async(req, res)=>{
    try {
        const {id} = req.query;
        const blogData = await Blog.findById(id);
        if(!blogData) res.status(200).redirect("/")
        
        res.status(200).send({success:true, message:"Successfully fetched", data:blogData})

    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}

const GetBlogList = async (req, res)=>{
    try {
        const category = req.query.cat;
        const blogList = await Blog.find({category},{content:0, })
        if(!blogList) res.status(401).send({success:false, message:"Invalid Blog List"});
        res.send({success:true, message:"fetched Successfull", data:blogList});
    } catch (error) {
        res.status(400).send({success:false, message:error.message});
    }
}
module.exports = {GetHead, GetBlog, GetBlogList}