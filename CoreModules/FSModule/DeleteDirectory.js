const { error } = require('console');
const fs=require('fs');
fs.rmdir('./NodeFolder',(error)=>{
    if(error) console.log(error);
    else console.log("Folder is Deleted");
    
    
})
 