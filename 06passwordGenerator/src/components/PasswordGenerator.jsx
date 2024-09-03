import React from "react";
import { useState, useCallback } from "react";

function PasswordGenerator(){

    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [Password, setPassword] = useState("");

    const generatePassword = useCallback( () => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let num = "0123456789";
        let specialChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

        if(numberAllowed) str += "0123456789";
        if(characterAllowed) str += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

        for(let i=1; i<length; i++){
            let char = Math.floor(Math.random() *str.length + 1);
            pass = str.charAt(char);
        }

        setPassword(pass);

    }, [lenght, numberAllowed, characterAllowed, setPassword ]);
    
    

    return (
        <div>
           <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-8 text-blue-500 bg-gray-600">
                Password Generator

           </div>
        </div>
    );
}

export default PasswordGenerator;