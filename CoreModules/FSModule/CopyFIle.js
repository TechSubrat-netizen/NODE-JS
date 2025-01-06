const fs=require('fs');

fs.copyFile('./file1.txt','./file3.txt',(error)=>{
    if(error) console.log(error);
    else console.log("File is copied");
    
    
})
fs.link('./file1.txt','./file2.txt',(error)=>{
    if(error)console.log(error);
    else console.log("File is copied");
    
    
})