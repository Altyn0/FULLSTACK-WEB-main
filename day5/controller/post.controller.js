import express from "express";

const postController = express.Router();

postController.get("", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

postController.get(":postId", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

postController.post("", (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  postController.put(":postId", (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  postController.delete(":postId", (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
