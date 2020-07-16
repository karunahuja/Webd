const fs=require('fs');
let text=fs.readFileSync("dele.txt","utf-8");
text=text.replace("karu","karun");
console.log(text);
console.log("creating new file");
fs.writeFileSync("karun.txt",text);
