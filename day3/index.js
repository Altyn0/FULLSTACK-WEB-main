import express from "express";
import axios from "axios";

const server = express();

// axios.get("http://localhost:8000/users").then((res)=>console.log(res.data))

server.get("/users", async (request, response) => {
  const { data } = await axios.get("http://localhost:8000/users");
  response.status(200).send(data);
});

server.get("/post1", async (request, response) => {
  try {
    //thêm try catch cho các đoạn code bị lỗi và có khả năng làm server bị crash.
    const { data } = await axios.get("http://localhost:9000/posts");
    response.status(200).send(data);
  } catch (error) {
    console.log("Server Error ! ")
    response.status(500).send("Server Error!")
  }
});

server.get("/posts", async (request, response) => {
  const { data } = await axios.get("http://localhost:8000/posts");
  response.status(200).send(data);
});

server.listen(3000, () => {
  console.log("Khoa Active");
});
