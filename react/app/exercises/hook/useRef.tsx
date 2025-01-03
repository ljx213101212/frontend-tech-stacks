import { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
    const [value, setValue] = useState(1)
    const countRef = useRef(value)
  
    const log = () => {
      setTimeout(() => {
        alert(countRef.current)
      }, 3000);
    }

    const closurePitfull = () => {
        setTimeout(() => {
          alert(value)
        }, 3000);
      }
  
    useEffect(() => {
      countRef.current = value
    }, [value])
  
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 space-y-4 py-8">
        {/* Title */}
        <p className="text-xl font-semibold text-blue-600">FunctionComponent</p>
      
        {/* Value Display */}
        <div className="text-lg text-gray-700">
          Value: <span className="font-bold text-gray-900">{value}</span>
        </div>
      
        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={log}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Alert
          </button>

          <button
            onClick={closurePitfull}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Alert 2 (closure pitfull)
          </button>
          <button
            onClick={() => setValue(value + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add
          </button>
        </div>
      </div>      
    )
  }

  export default UseRefComponent;