import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Simple Counter</h1>
        <button onClick={()=>{
          console.log("Increment Button")
          setCount(count+1)
        }}>Increment</button>
        <p>Count: {count}</p>
        <button onClick={()=>{
          console.log("Decrement Button")
          if(count<=0) return;
          setCount(count-1)
        }}>Decrement</button>
      </div>
      <p className="footer-text">
  Made with ❤️ by Shivam. This simple React counter lets you increment or decrement the count—just click and watch it change!
</p>
    </>
  )
}

export default App
