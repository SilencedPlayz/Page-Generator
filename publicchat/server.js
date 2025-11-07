import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 8080});

wss.on('connection', (ws)=>{
  console.log("Connection has been made")
  
  ws.send(JSON.stringify({
    type: "text",
    message: "Sheeeshh",
    name: "Server"
  }))
  
  ws.on("message", (msg)=>{
    console.log(`Client says: ${msg.toString()}`)
    console.log(`Server echo: ${msg}`)
  })
  
  ws.on("close", ()=>{
    console.log("Connection has been lost")
  })
})