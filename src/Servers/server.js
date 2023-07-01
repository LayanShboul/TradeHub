const http = require('http');

const server = http.createServer((req,res)=>{
console.log(res);
res.end('Hellooo')

})

server.listen(8000,'127.0.0.1' , ()=>{
    console.log('Listening')
})