const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
  comment("Connected to the server")
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data)
  const name = data.name
  const message = data.message
  const type = data.type
  
  if(type === "text"){
    textOther(name, message)
  }
};

socket.onclose = () => {
  comment("Unable to connect to the server")
};