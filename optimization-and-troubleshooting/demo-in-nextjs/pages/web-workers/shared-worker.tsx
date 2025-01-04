import { useState } from "react";

export default function SharedWorkerComponent() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    const worker = new SharedWorker(new URL("@/workers/shared-worker", import.meta.url));
    worker.port.start();
    worker.port.postMessage({ message: "Hello from SharedWorker!" });

    worker.port.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
  };

  return (
    <div>
      <h2>Shared Worker Example</h2>
      <button onClick={handleSendMessage}>Send Message</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
