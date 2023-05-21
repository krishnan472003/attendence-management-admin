import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import{auth} from "../firebase"

const linkStyle = {
    textDecoration: 'none',
    margin: '0 10px',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '5px',
    outline: 'none', // remove button outline
  };
  
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'darkblue',
    opacity: '0.9' // remove header line
  };
  
  const topicStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
    margin: '10px',
  };
  
export default function Header() {
    const navigate = useNavigate()
    const [uid,setUid] = useState("")
    useEffect(()=>{
      setUid(localStorage.getItem('uid'));
    },[uid])
    
    const handleLogout = () =>{
        signOut(auth)
          .then(() => {
            localStorage.removeItem('uid');
            navigate('/login');
          })
          .catch((error) => {
            console.log(error);
          });
        }
  return (
    <header style={headerStyle}>
        <h1 style={topicStyle}>ATTENDANCE MANAGEMENT SYSTEM</h1>
        <nav>
        {uid?<><button onClick={handleLogout} style={linkStyle}>logout</button>
      <Link to = "/addcourse" style={linkStyle}>Add course</Link>
      <Link to = "/generator" style={linkStyle}>attendence</Link>

      </>:<>
        <Link to="/signup"style={linkStyle}>Signup</Link>
        <Link to="/login"style={linkStyle}>Login</Link>
        <Link to="/"style={linkStyle}>Home</Link>
        </>

}
        </nav>
      </header>
  )
}
