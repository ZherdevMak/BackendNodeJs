const fs = require("fs");

exports.readJSONfromFile = (filePath) => {
    return new Promise((resolve, reject)=> {
        fs.readFile(filePath, function(err, buf) {
            if (err) reject(err)
            resolve(JSON.parse(buf.toString()))
        })
    })
}

exports.writeJSONtoFile = (filePath,data) => {
    return new Promise((res,rej) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) rej(err);
            console.log("Successfully Written to File.")
            res()
        })
    })
}