import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
let posts = [];
let titles = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get(['/', '/home', '#'], (req, res) => {
    res.render("index.ejs");
});

app.get("/read",(req, res) => {
    res.render("partials/read.ejs", {posts: posts, titles: titles});
});

app.get("/write",(req, res) => {
    res.render("partials/write.ejs");
});

app.post("/submit", (req, res) => {
    const blog = req.body.blog;
    const title = req.body.title;
    titles.push(title);
    posts.push(blog);
    res.redirect("/read");
});

app.post("/delete-blog", (req, res) => {
    const id = parseInt(req.body.id);
    console.log("The id got is: " + id);
    titles.splice(id, 1);
    posts.splice(id, 1);
    res.redirect("/read");
});


app.listen(port, () =>{
    console.log(`The server is up and running on ${port}`);
});

