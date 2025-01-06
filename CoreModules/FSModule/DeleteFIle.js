const { error } = require('console');
const fs= require('fs');
//async
fs.unlink('./file3.txt','utf-8',(error)=>{
    if(error)console.log(error);
    else console.log("File is deleted");
    
    
})
// using sync method
fs.unlinkSync('./file3.txt')