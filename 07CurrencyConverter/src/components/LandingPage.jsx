import react from 'react';


function LandingPage({onButtonClick}) {

    return (
        <div>
            <h1>Currency Converter</h1>
            <p>Welcome to the Currency Converter app.</p>
            <button 
            onClick={onButtonClick}>Start Converting</button>
        </div>
    );
}

export default LandingPage;