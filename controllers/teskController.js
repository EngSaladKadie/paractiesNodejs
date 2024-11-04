const { readTaasksFromFile } = require("../utils/fileHandller")

exports.getTasks= (req ,res)=>{
    const tasks= readTaasksFromFile();
    res.writeHead(200, {'content-type':'application/json'})
    

}