import ws, { WebSocketServer } from "ws"

const wss = new WebSocketServer({port:8080})

// on connection
wss.on("connection",(stream)=>{
    console.log("someone is connected")
})