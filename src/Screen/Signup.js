import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {Link as RLink} from "react-router-dom"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState, } from 'react';
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Signup() {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorCode,setErrorCode] = useState("")
    const [errorMessage,setErrorMessage] = useState("")


 const handleSubmit = () =>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
        localStorage.setItem('uid',user.uid)
        console.log(user.uid)
        navigate('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorCode(errorCode);
    setErrorMessage(errorMessage);
    // ..
  });
 }
  return (
   
    <CssVarsProvider>
    <main>
      <Header/>
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FormControl>
        {errorCode}
        {errorMessage}
        <Button onClick={handleSubmit}sx={{ mt: 1 /* margin top */ }}>Log in</Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
         <RLink to = '/login'>Already have an account?</RLink>
        </Typography>
      </Sheet>
      <Footer/>
    </main>
  </CssVarsProvider>
  );
}
