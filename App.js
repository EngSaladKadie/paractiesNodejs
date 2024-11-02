const http = require('http');
const { json } = require('stream/consumers');
const PORT = 5000;
const HOSTNMA = "localhost";
const server= http.createServer((req, res) => {
    if(req.startWith("/taskes")){
        teskRoutes(req, res)
    }
    else{
        res.writeHead(404,"NOT FOUND",{"Content-type":"application/json})"})
        res.end(json({"message":"page not found"}))
    }
        
})

server.listen(PORT, HOSTNMA, () => {            
    console.log(`Server running at http://${HOSTNMA}:${PORT}`);
})