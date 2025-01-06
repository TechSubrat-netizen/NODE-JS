const fs= require('fs')
// Using Async Method
fs.readFile('./file1.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error);
        
    }
    else{
        console.log(data);
        
    }
})
// Using Sync Method
 let result=fs.readFileSync('./file2.txt','utf-8');
 console.log(result);
 