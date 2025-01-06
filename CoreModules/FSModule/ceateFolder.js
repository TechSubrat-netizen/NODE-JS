const fs=require('fs');
fs.mkdir('./NodeFolder',(error)=>{
    if(error) console.log(error);
    else console.log("Folder is created");
    
    
})