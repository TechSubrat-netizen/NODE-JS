const  fs=require('fs');
fs.rename('./file1.txt','./myfile.txt',(error)=>{
    if(error) console.log(error);
    else console.log("File is renamed");
    
    
})