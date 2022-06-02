const http = require("http")
const app = require('./app')
// const socketIO = require("socket.io")
const port = process.env.PORT || 8080;

const server = http.createServer(app);

// const io=socketIO(server)

// io.on("connection",()=>{
//     console.log("new connetion")
// })

server.listen(port,(console.log(`server running in port number ${port}`)))