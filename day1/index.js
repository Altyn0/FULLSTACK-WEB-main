import foo from "./util.js";
import http from"node:http";

// const name = " MindX!" ;

// console.log(foo + name);

const server = http.createServer((request, response) => {
    switch (request.url) {
        case "/":
            response.end(JSON.stringify({endpoint: request.url, method: request.method}));
            break;
        case "/hello":
            response.end(JSON.stringify("hello Bro"));
            break; 
        default:
            response.end(JSON.stringify("Not Found"));
            break;
    }
});
server.listen(3000);

console.log("Server Running");