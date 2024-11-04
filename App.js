const http= require('http');
const taskRoutes = require('./routes/taskRoutes');
const PORT = 9000;
const HOSTNAME= 'Localhost';

const server = http.createServer((req, res)=>{
    if(req.url.startsWith('/tasks')){
        taskRoutes(req, res);
    }else{
        res.writeHead(404,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Route not found'}));
    }

})


server.listen(PORT,HOSTNAME, ()=>{
    console.log(`server runing on port ${PORT}`);
    
})