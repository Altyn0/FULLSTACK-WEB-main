import express, { request, response } from "express";

const server = express();

server.use(express.json());

const classes = [
  {
    id: 1,
    name: "mindx 1",
    members: 50,
  },
  {
    id: 2,
    name: "mindx 2",
    members: 10,
  },
  {
    id: 3,
    name: "mindx 3",
    members: 20,
  },
];

//request bao gồm: đường dẫn - url, method - phương thức get/post/put/delet, headers, body

server.get("/home", (request, response) => {
  // console.log("requestHeader", request.headers);
  // console.log("requestUrl", request.url);
  // console.log("requestBody", request.body);
  // console.log("requestMethod", request.method);

  response.status(200).send({ name: "mindx" });
});


server.post("/classes",(req,res) => {
    res.status(201).send(classes)
})

server.put("/classes/:id", (req, res) => {
  console.log("params", req.params);
  console.log("body", req.body);
  res.status(204).send(classes);
});

//Request: method - POST, đường dẫn :/users
//Respond: status - 201, data là 1 object user bao gồm tên và tuổi.

server.post("/users", (request, response) => {
  response.status(201).send({ name: "khoa", age: 22 });
});

//request: method - GET, đường dẫn: /classes
//Respond: status - 200 , data là classess

server.get("/classes", (req, res) => {
  const query = req.query;
  // console.log("query",query);
  if (query.memberOver40) {
    const over40 = classes.filter((item) => item.members > 40);
    res.status(200).send(over40);
  } else {
    res.status(200).send(classes);
  }
});

//request: method - POST, đường dẫn: /classes, body là 1 class mới
//Respond: status - 201 , data là NEW classess

// server.get("/classes/over40", (req, res) => {
//   res.status(201).send(classes.filter((item) => item.members > 40));
// });

server.listen(3000, () => {
  console.log("Server Running~");
});
