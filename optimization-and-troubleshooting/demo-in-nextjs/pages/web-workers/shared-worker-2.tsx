import { useEffect, useRef, useState } from "react";

export default function SharedWorkerComponent2() {
  const [messages, setMessages] = useState<string[]>([]);
  const workerRef = useRef<SharedWorker | null>(null);

  useEffect(() => {
    // Create the Shared Worker
    const worker = new SharedWorker(
      new URL("@/workers/shared-worker", import.meta.url)
    );

    // Start the worker port
    worker.port.start();

    // Listen for messages from the Shared Worker
    worker.port.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    // Store the worker in a ref so we can use it later
    workerRef.current = worker;

    // Optional cleanup – closes the port on unmount
    return () => {
      worker.port.close();
    };
  }, []);

  const handleSendMessage = () => {
    workerRef.current?.port.postMessage({
      message: "Hello from SharedWorker 2!",
    });
  };

  return (
    <div>
      <h2>Shared Worker Example - 2</h2>
      <button onClick={handleSendMessage}>Send Message</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
