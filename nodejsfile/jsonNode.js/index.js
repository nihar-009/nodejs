const fs = require('fs');
const info = {
    name: "test",
    age: 25,
    year: 1975
}

// function init(info) {
//     const jsondata = JSON.stringify(info);
//     fs.writeFile("json1.json", jsondata, (err) => {
//         console.log("file is created");
//     });
//     return true;
// }

fs.readFile("json1.json","UTF-8",(err,data)=>{
    console.log("get the data");
    const te = JSON.parse(data);
    console.log(te.age);
})