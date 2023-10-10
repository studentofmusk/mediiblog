const express = require('express');
const { GetHead, GetBlog, GetBlogList } = require('../Controller/User.controller');
const user_routes = express();

user_routes.get('/get-head', GetHead);
user_routes.get('/get-blog', GetBlog);
user_routes.get('/get-bloglist', GetBlogList);

module.exports = user_routes;