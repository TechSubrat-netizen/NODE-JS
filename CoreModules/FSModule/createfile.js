 const  fs=require('fs');
 //Using Async;
 fs.writeFile('./file1.txt',"Hey my name is Akash",'utf-8',(error)=>{
    if(error){
        console.log(error);
        
    }
    else{
        console.log("File is created");
        
    }
 })
 //using sync method
 fs.writeFileSync('./file2.txt',"File 2 i ready",'utf-8')
