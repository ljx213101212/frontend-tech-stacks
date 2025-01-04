self.onmessage = (event) => {
    const { num } = event.data;
    self.postMessage(num * 2); // Perform computation
  };
  