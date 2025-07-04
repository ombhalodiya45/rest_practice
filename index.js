const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id:uuidv4(),
        username: "ompatel",
        content: "i love coding"
    },
    {
        id:uuidv4(),
        username: "sheela",
        content: "cooking is my passion"
    },
    {
        id:uuidv4(),
        username: "nayan",
        content: "i like mountains"
    }
];
//to see all the post
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});
//to create new post
app.get("/posts/new", (req, res) => {
    res.render("form.ejs");
});
// all the post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id,username, content });
    res.redirect("/posts");
});

//to find post with id
app.get("/posts/:id", (req, res) => {
    let {id }= req.params;
    console.log(id);
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
});
//for update patch
app.patch("/posts/:id",(req,res)=>{
    let {id }= req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);   
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});
//for edit post
app.get("/posts/:id/edit",(req,res)=>{
    let {id }= req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});   
});
//for delete post
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
    
});

app.listen(port, () => {
    console.log(`listning on ${port}`);
});