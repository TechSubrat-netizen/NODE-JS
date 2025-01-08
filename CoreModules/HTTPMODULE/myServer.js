 const http=require('http')
const server=http.createServer((req,res)=>{
    console.log("server is created");
    console.log(req.method);
    console.log(req.url);
    if(req.method=='GET' && req.url=='/'){
        res.write("<h1>Hello I am allowing you to give response</h1>")
        res.end()
    }
    
   else if(req.method=='GET' && req.url=='/about'){
    res.end("<h5>About Page</h5>")
   }
    
    
})
server.listen(90,"localhost",()=>{
    console.log("server is started");
    
})