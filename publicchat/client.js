const socket = new WebSocket('https://4c247a47-dfba-48e5-9288-a0b46abc340d-00-3v6p32ewl2slk.sisko.replit.dev:3000/');

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
