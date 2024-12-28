const connections = [];

self.onconnect = (event) => {

  const port = event.ports[0];//
  connections.push(port);

  port.onmessage = (event) => {
    const { message } = event.data;
    connections.forEach((connection) =>  {
        connection.postMessage(`Received: ${message}`)
        connection.postMessage(event.toString());
    }); 
  };
};
