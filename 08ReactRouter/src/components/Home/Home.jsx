import React from 'react';
// import floatingImage from '../assets/floating-image.png';

const Home = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center text-white">
    <div className="animate-float">
      <img src={"https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery"} alt="Floating" className="w-32 h-32" />
    </div>
    <p className="mt-4 max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.
    </p>
  </div>
);

export default Home;
