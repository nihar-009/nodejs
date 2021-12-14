import fetch from "node-fetch";
import fs from "fs";
import http from  "http";
const server = http.createServer((req,res)=>{
    if(req.url == "/about"){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res)=>{
                console.log("res" ,res )
        })
        res.end("hello, from the about side");
        return ;
    } else if (req.url == "/"){
        res.end("hello, from the home side");
        return;
    } else {
        res.writeHead(404);
        res.end("route is not define")
        return;
    }

});
const test = process.env.PORT || 5000;
server.listen(test, "localhost", () => {
    console.log("get request from " + test);
});