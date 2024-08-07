import { useState } from "react"


function App() {
  
  const [color, setColor] = useState("Black")
  return (
    <div className="w-full h-screen duration-200 text-red-600" style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center top-12 px-2 inset-x-2 w-60 rounded border-2 text-black font-sans font-bold" style={{backgroundColor: "white"}}><kbd className="font-bold" style={{color: color}}>{color}</kbd> </div>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center shadow-lg gap-3 rounded-2xl px-3 py-2">
          <button onClick={() => setColor("Red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Red"}}>Red</button>
          <button onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("Black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Black"}}>Black</button>
          <button onClick={() => setColor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Pink"}}>Pink</button>
          <button onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Purple"}}>Purple</button>
          <button onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Orange"}}>Orange</button>
          <button onClick={() => setColor("Gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Gray"}}>Gray</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
