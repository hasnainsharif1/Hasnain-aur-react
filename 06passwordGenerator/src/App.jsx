import React, { useState, useCallback, useEffect, useRef } from 'react'
// import PasswordGenerator from './components/PasswordGenerator';

function App() {
  
  const [length, setLenght] = useState(8);
  const [noAllowed, SetNoAllowed] = useState(false);
  const [characterAllowed, SetCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  

  const generatePassword = useCallback(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(noAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*()-_=+[{]}|;:'\",.<>/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, noAllowed, characterAllowed, setPassword]
  );

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 25);
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }, [password]);
  

  useEffect(()=>{
    generatePassword();
  }, [length, noAllowed, characterAllowed, generatePassword])

  

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-xl  rounded-lg text-center px-4 my-8 text-blue-500 bg-gray-600 p-4 ">
      <h1 className='m-3 text-2xl'>Password Generator</h1>
        <div className='w-full flex shadow rounded-lg overflow-hidden mb-4 gap-1 border-black'>
          <input 
          type="text"
          value={password}
          placeholder='Password...'
          readOnly
          className='outline-none w-full py-1 px-3 '
          ref={passwordRef}
          />
          <button className='bg-white w-auto p-3 bg-blue-600 hover:bg-white hover:text-blue-500  text-white transition-all duration-300 ease-in-out' onClick={copyToClipBoard} >
          Copy
          </button>
          
        </div>
        <div className='w-auto gap-2 flex justify-items-start'>
            <input type="range"
             min="8"
             max="25"
             value={length}
             className='cursor-pointer'
             onChange={(e)=> {setLenght(e.target.value)}}
             />
             <label>Password: {length}</label>
             <input type="checkbox" 
             defaultChecked={noAllowed}
             onChange={()=> {
              SetNoAllowed((prev) => !prev);
             }}/>
             <label>Number</label>
             <input type="checkbox"
             onChange={()=> {
              SetCharacterAllowed((prev) => !prev);
             }} />
             <label>Character</label>
          </div>  
     </div>
    </>
  );
}

export default App
