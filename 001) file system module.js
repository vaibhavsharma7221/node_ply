
const fs = require('fs');
const dir ='./public';
let tempcounter = 1;
let newfilename =`new ${tempcounter}.html`;
console.clear();


for(let i=0;i<5;i++){

fs.readdir(dir,(err,files)=>{
    console.log(files);
    console.log(files.length);
    console.log(err);
    
    tempcounter=files.length+1+i;
    newfilename = `new ${tempcounter}.html`;
    createnewfile(newfilename);
})
}
function createnewfile(myfilename){
    const html =`<h1> hello ${tempcounter}</h1>`;
    fs.appendFile(dir +'/'+ myfilename,html,(err)=>{
        if(err) throw err;
        
        console.log(`Save File ${myfilename}`);
    })
}
