import React from 'react'

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'darkblue',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };
  const nameStyle = {
    margin: '0 10px',
    color: 'white',
  };
    
export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={{ ...nameStyle, fontSize: '18px', fontWeight: 'bold' }}>
          KNIGHT CODERS
        </p>
        <p style={nameStyle}>KRISHNAN</p>
        <p style={nameStyle}>SANIKA</p>
        <p style={nameStyle}>KRISH</p>
        <p style={nameStyle}>ONAM</p>
      </footer>
  )
}
