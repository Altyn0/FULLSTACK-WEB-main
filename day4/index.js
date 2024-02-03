import express, { query } from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: String,
  title: String,
  body: String,
  date: Date,
});

const BlogModel = mongoose.model("blog", BlogPost);

async function connectDb() {
  await mongoose.connect(
    // "mongodb+srv://admin:1234@cluster0.0l3njxy.mongodb.net/mindx"
        "mongodb://localhost:27017"
  );
}

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("hello");
});

//Restul Api
//get all without id in query params
server.get("/blogs", async (req, res) => {
  try {
    const query = req.query;
    const blogs = await BlogModel.find(query);
    res.status(200).send(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).send("lỗi rồi thằng lồn");
  }
});
///get one with id - api lấy details
server.get("/blogs/:blogId", async (req, res) => {
    try {
      const blogId = req.params.blogId;
      const blog = await BlogModel.findById(blogId)
      res.status(200).send(blog);
    } catch (error) {
      console.log(error);
      res.status(500).send("lỗi rồi thằng lồn");
    }
  });

server.post("/blogs", async (req, res) => {
  try {
    const body = req.body;

        //validate input
        if(!body.author) throw new Error("Author field is required");
        if(!body.title) throw new Error("Title field is required");
        if(!body.body) throw new Error("body field is required");
        if(!body.date) throw new Error("date field is required");

    const newBlog =  await BlogModel.create({
        author: body.author,
        title: body.title,
        body: body.body,
        date: body.date,
      });

    res.status(201).send(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

server.put("/blogs/:blogId", async (req, res) => {
  try {
    const blogs = await BlogModel.updateOne({});
    res.status(200).send(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).send("lỗi rồi thằng lồn");
  }
});

server.delete("/blogs", async (req, res) => {
  try {
    // const newBlog = new BlogModel({
    //   author: "nam",
    //   title: "Hello",
    //   body: "Hello World From KhoaDaDen",
    //   date: new Date(),
    // });
    // await newBlog.save();
    
    const newBlog =  await BlogModel.deleteOne({ });
    res.status(201).send(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).send("lỗi rồi thằng lồn");
  }
});

connectDb().then(
  server.listen(3000, () => {
    console.log("KhoaDaDen");
  })
);
