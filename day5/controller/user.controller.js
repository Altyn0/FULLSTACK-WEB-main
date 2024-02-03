import express from "express";

const userController = express.Router();

userController.get("", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userController.get(":userId", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userController.post("", (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  userController.put(":userId", (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  userController.delete(":postId", (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
