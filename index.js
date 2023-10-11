const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const path = require('path');
const cors = require('cors')


dotenv.config()
app.use(cookieParser());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "./client/out")))
app.use(express.static(path.join(__dirname, "./uploads")))

mongoose.connect(process.env.DB || "mongodb://localhost:27017/mediiblog")
.then(()=>console.log("DB Connected!"))
.catch((err)=>console.log("DB connection Faild due to \n"+err.message))

const admin_routes = require('./Routes/Admin.route');
const user_routes = require('./Routes/User.route');




app.use('/api/admin', admin_routes);
app.use('/api', user_routes);


app.get("/admin", (req, res)=>{
    res.sendFile(path.join(__dirname, "./client/out", 'admin.html'));
});
app.get("/admin/:path", (req, res)=>{
    const Path = req.params.path;
    res.sendFile(path.join(__dirname, "./client/out", `admin/${Path}.html`));
});

app.get("/blog", (req, res)=>{
    res.sendFile(path.join(__dirname, "./client/out", 'blog.html'));
});

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "./client/out", 'index.html'));
});

app.listen(4000, ()=>{
    console.log("server is listening at port 4000");
});