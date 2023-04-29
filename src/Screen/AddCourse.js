import React from 'react'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import {db} from "../firebase"
import { doc, setDoc } from "firebase/firestore"; 

export default function AddCourse() {
    const [course,setCourse] = useState("");
    const [startingNo,setStartingNo] = useState(0)
    const [endingNo,setEndingNo] = useState(0)

  const handleSubmit = async() =>{
      console.log("hello")
      for(let i = startingNo ; i <= endingNo;i++){
        
// Add a new document in collection "cities"
await setDoc(doc(db, course,i.toString() ), {
    name: 0
  })
    }
    console.log("hello")


  }
    return (

    <div>
         <FormControl>
          <FormLabel>Add Course:</FormLabel>
          <Input
            // html input attribute
            name="Course"
            type="text"
            placeholder="Enter The name of the Course"
            value={course}
            onChange={(e)=>setCourse(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Add Course:</FormLabel>
          <Input
            // html input attribute
            name="startingNo"
            type="text"
            placeholder="Enter the starting uid Number"
            value={startingNo}
            onChange={(e)=>setStartingNo(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Add Course:</FormLabel>
          <Input
            // html input attribute
            name="endingNumber"
            type="text"
            placeholder="Enter Ending uid number"
            value={endingNo}
            onChange={(e)=>setEndingNo(e.target.value)}
          />
        </FormControl>
          <Button onClick={handleSubmit}sx={{ mt: 1 /* margin top */ }}>Add Course</Button>
    </div>
  )
}
