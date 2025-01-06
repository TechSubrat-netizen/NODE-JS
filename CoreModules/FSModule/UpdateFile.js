const { error } = require('console');
const fs= require('fs');
// using async file
fs.appendFile('./file1.txt',"No  my name is Jimmy",'utf-8',(error)=>{
    if(error)console.log(error);
    else console.log("File is updated");
    
    
})
//sync method
fs.appendFileSync('./file2.txt',"file 2 is updated",'utf-8')