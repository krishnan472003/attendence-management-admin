import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



const bgImageStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  backgroundImage: 'url(./image.png)',
};

export default function Home() {
 
  return (
    <div style={bgImageStyle}>
      <Header/>
      <Footer/>
    </div>
  );
}