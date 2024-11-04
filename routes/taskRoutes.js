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
        res.writeHead(405,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'page not allowed'}));
    }
}