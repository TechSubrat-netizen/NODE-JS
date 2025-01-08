const http=require('http')
 const server=http.createServer((request,response)=>{
    console.log("server is getting request");
    console.log(request.method,request.url);
    if(request.method==='GET' && request.url==='/'){
      response.write("hello World");
      response.end()
    }
    else if(request.method==='GET' && request.url==='/about'){
      response.end("<h1>About</h1> <a href='/'>Home</a>")
    }
    else if(request.method==='GET' && request.url==='/login'){
      response.end("<h1>Login</h1> <a href='/'>Home</a>")
    }
 })
 server.listen(4000,"localhost",()=>{
    console.log("server started");
    
 })