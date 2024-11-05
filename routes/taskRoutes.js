const { getTasks } = require("../controllers/teskController");
const {createTask ,updateTask, deleteTask} = require('../controllers/teskController')

const taskRoutes=(req,res)=>{
    if(req.method === 'GET'){               
        getTasks(req, res);
    }else if(req.method === 'POST'){
        createTask(req, res);
    }else if(req.method === 'PUT'){ 
        updateTask(req, res);   
    }else if(req.method === 'DELETE'){
        deleteTask(req, res);   
    }else{
        res.writeHead(405,'data not found',{'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'page not allowed'}));
    }
}

module.exports = taskRoutes;