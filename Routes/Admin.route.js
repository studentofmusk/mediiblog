const express = require('express');
const { Signup, Login, UpdateBlog } = require('../Controller/Admin');
const auth = require('../Middleware/auth');
const admin_routes = express();


admin_routes.post('/signup', Signup);

admin_routes.post('/login', Login);
admin_routes.post('/update-blog', UpdateBlog);

admin_routes.get("/admin-check",auth, (req, res)=>{
    res.status(200).send({success:true, message:"access Grant!"});
})
module.exports = admin_routes;