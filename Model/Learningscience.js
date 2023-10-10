const mongoose = require('mongoose');

const blogPageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    authorImgSrc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coverpic: {
        type: String,
        required: true
    },
    content: {
        type: [],
        required: true
    }
});

blogPageSchema.methods.updateBlog = async function(title,category,page,author,designation,time,authorImgSrc,description,coverpic,content){
        this.title = title;
        this.category = category;
        this.page = page;
        this.author = author;
        this.designation = designation;
        this.time = time;
        this.authorImgSrc = authorImgSrc;
        this.description = description;
        this.coverpic = coverpic;
        this.content = content;
        await this.save();
    
} 

const Blog = mongoose.model('categories', blogPageSchema);
module.exports = Blog;