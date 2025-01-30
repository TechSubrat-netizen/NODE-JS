const { error } = require('console');
const fs= require('fs');
// to create a file
// Asynchronus way
// fs.writeFile('./aka.txt','Hello aryan','utf-8',(error)=>{
//     if(error)console.log(error);
//     else console.log("File is created");
// })
fs.readFile('./aka.txt','utf-8',(error,data)=>{
    if(error) console.log(error);
    else console.log(data);
    
})
// fs .appendFile('./aka.txt','My name is subu','utf-8',(error)=>{
//     if(error) console.log(error);
//     else console.log("file is updated");
    
    
// })
