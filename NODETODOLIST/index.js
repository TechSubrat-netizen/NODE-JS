const http=require('http');
const fs=require('fs')
const app=http.createServer((req,res)=>{
    if(req.method=='GET' && req. url=='/'){
        let data=fs.readFileSync('./Pages/index.html')
        res.end(data)
    }
    // sending Task to the json
    else if(req.method=='POST' && req.url=='/taskData'){
        req.on('data',(data)=>{
           let {task}=JSON.parse(data.toString())
           console.log(task);
           const todoTask=JSON.parse(fs.readFileSync('./JSON/todo.json','utf-8'))
           todoTask.push({
            task,
            id:Math.trunc(Math.random()*10000)
           })
           fs.writeFileSync('./JSON/todo.json',JSON.stringify(todoTask))
           res.writeHeader(200)

        
           res.end(JSON.stringify({message:"DataRecieved"}))
           
        })
    }
    // Get task from the json
    else if( req.method=='GET' && req.url=='/taskData'){
        fs.readFileSync('./JSON/todo.json','utf-8',((error,data)=>{
               if(error)console.log(error);
               
               res.end(JSON.stringify(data))
               
        })) 
    }
   
})
app.listen("4000","localhost",()=>{
    console.log("server started at http://localhost:4000");
    
})