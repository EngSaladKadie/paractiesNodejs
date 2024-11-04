const http= require('http');
const PORT = 9000;
const HOSTNAME= 'localhost';

const server = http.createServer((req, res)=>{
    if(req.url.startsWith('/tasks')){
        taskRoutes(req, res);
    }

})


server.listen(PORT,HOSTNAME, ()=>{
    console.log(`server runing ${PORT}`);
    
})