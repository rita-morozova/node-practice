const fs = require("fs");

fs.readFile("./assets/readme.md", "UTF-8", (err, text) => {
    if (err) {
        throw err
    }
    console.log("file content read")
    console.log(text)
})

