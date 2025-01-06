const { error } = require('console');
const fs=require('fs')

// ----- createing a file----
//Async
// fs.writeFile('./a.txt',"Hello World","utf-8",(error)=>{
//     if(error) console.log(error);
//     else console.log("file created"); 
// })
// Sync

fs.writeFileSync('./b.txt', 'Creating a file in Node.js');
// console.log('File created successfully!');

// -------read a file----
// // async
// fs.readFile('./a.txt','utf-8',(error,data)=>{
//     if(error){console.log(error);
//     }
//     else console.log(data);
    
// })
// //sync
//  let result=fs.readFileSync('b.txt','utf-8')
//  console.log(result);
 //------------------------ Update A FIle-----------------------
//  //async
//  fs.appendFile('./a.txt','Hello Akash','utf-8',(error)=>{
//     if(error)console.log(error);
//     else{console.log("File Updated");
//     }
    
//  })
//  // Sync
//  fs.appendFileSync('./b.txt',"Hey i am a f***** boy",'utf-8')
// -------------------- Delete  a file-------------------------
// // Async
// fs.unlink('./a.txt',(error)=>{
//    if(error)console.log(error);
//    else console.log("File Deleted");
   
   
// })
// // Sync
// fs.unlinkSync('./b.txt')
// ------------------ Copy a File-------------------------
//
// fs.copyFile('./a.txt','./c.txt',(error)=>{
//    if(error)console.log(error);
//    else console.log("File is succesfully copied");
// })
// fs.link('./b.txt','./B.txt',(error)=>{
//    if(error)console.log(error);
//    else console.log("Created");
   
   
// })


// // ----------------------- rename File -------------------
// fs.rename('./a.txt','../B.txt',(error)=>{
//    if(error)console.log(error);
//    else console.log("File is renamed");
   
   
// })
