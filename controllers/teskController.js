const {IncominForm} = require('formidable')
const { readTaasksFromFile, writeTasksTofile } = require("../utils/fileHandller");
const formidable = require('formidable');

exports.getTasks= (req ,res)=>{
    const tasks= readTaasksFromFile();
    res.writeHead(200, {'content-type':'application/json'});
    res.end(JSON.stringify(tasks));


}
exports.createTask =(req,res)=>{
    const form = new formidable();
    form.parse(req,(err,field ,files)=>{
        if (err) {
            res.writeHead(404, 'not found',{'content-type':'aplication/json'});
            res.end(JSON.stringify({
                message:"parse form  not found"
            }))
            return 
            
        }
        const tasks = readTaasksFromFile()
        const newTasks={
            id: Date.now(),
            title: field.title,
            describtion: field?.describtion || '',
            status: field?.status || 'pending',
            image:  files.image ? `/uploads/${files.image.name}`: null,

        }
        tasks.push(newTasks)
        writeTasksTofile(tasks)
        if(files.image){
            copyFileSync(files.image.path, path.join(__dirname, '../uploads',files.image.name));
            res.end(JSON.stringify(newTasks));
        }
    })
}

exports.updateTask=(req ,res)=>{
    res.end(JSON.stringify({
        message:'not emplemented'
    }))
}

exports.deleteTask=(req ,res)=>{
    res.end(JSON.stringify({
        message:'not emplemented'
    }))
}