const http = require("http");
const fs=require('fs')
const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method == "GET") {
    if (url == "/") {
      // res.write("<h1>This is home page </h1>");
      let data=fs.readFileSync('./pages/index.html')
      res.end(data);
    }
    else if(url=='/about'){
      let data=fs.readFileSync('./pages/about.html')
        res.end(data)
    }
    else if(url=='/login'){
      let data=fs.readFileSync('./pages/login.html')
        res.end(data)
    }
    else if(url=='/CSS/index.css'){
      let data=fs.readFileSync('./CSS/index.css')
      res.end(data)
    }
    else if(url=="/images.jpg"){
      let data=fs.readFileSync('../assests/images.jpg')
      res.end(data)
    }
    else{
        res.end("<h1> page not found 404</h1>")
    }
  }
});
server.listen(500, "localhost", () => {
  console.log("server started");
});
