const fs = require("fs");

const md = `


We can write text to a file with fs.writeFile

`

fs.writeFile("./assets/readme.md", md.trim(), err => {
    if (err) {
        throw err
    }
    console.log("file saved")
})