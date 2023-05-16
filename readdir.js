const fs = require ("fs");

fs.readdir("./",(error,listFiles)=>{
    if(error == null){
       console.log(listFiles);
        
    }
});

