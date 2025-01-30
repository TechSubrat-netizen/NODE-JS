const http=require('http');
 const fs=require('fs')
 


 const server=http.createServer((req,res)=>{
    let {method,url}=req
  if (method == "GET") {
     if (url == "/") {
       let data=fs.readFileSync('./Pages/index.html')
       res.end(data);
     }
     else if(url=='/about'){
       let data=fs.readFileSync('./Pages/about.html')
         res.end(data)
     }
     else if(url=='/contact'){
      let data=fs.readFileSync('./Pages/contact.html')
        res.end(data)
    }
     else if(url=='/signup'){
       let data=fs.readFileSync('./Pages/signup.html')
         res.end(data)
     }
     else if(url=='/CSS/index.css'){
      let data=fs.readFileSync('./CSS/index.css')
        res.end(data)
    }
    else if(url=='/getData'){
     let user={name:"sradha",add:"Jajpur",pin:755009}
        res.end(JSON.stringify(user))
    }
    else{
      res.end('<h1>Server 404 not found</h1>')
    }
    
     
   }
   else if(method==='POST'){
    if(url==='/sendData'){
      // Collecting the data from request object by adding  a listner
      req.on("data",(data)=>{
        const student=JSON.parse(data.toString())
        console.log(student);
         res.end(JSON.stringify({messsage:'Data Recieved'}))
        
        
      })
    }
    else if(url==='/signup'){
        req.on('data',(data)=>{
          const myDetails=JSON.parse(data.toString())
          console.log(myDetails);
          res.end(JSON.stringify({message:"Form submit  succesfully"}))
          
        })
      }
     
     
    
   }
   

   

 })
 server.listen(2000,"localhost",()=>{
    console.log("server  is running at http://localhost:2000");
    
 })