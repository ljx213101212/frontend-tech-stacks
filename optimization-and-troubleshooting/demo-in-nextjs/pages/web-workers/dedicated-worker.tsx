import { useState } from "react";


export default function DedicatedWorkerComponent() {
  const [result, setResult] = useState<number | null>(null);

  const handleComputation = () => {
    const worker = new Worker(new URL("@/workers/dedicated-woker", import.meta.url));
    worker.postMessage({ num: 5 });

    worker.onmessage = (event) => {
      setResult(event.data);
      worker.terminate(); // Terminate the worker when done
    };
  };

  return (
    <div>
      <h2>Dedicated Worker Example</h2>
      <button onClick={handleComputation}>Start Computation</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}
