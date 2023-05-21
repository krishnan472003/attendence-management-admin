
import QRCode from 'react-qr-code';
import { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import {doc, getDoc, updateDoc} from "firebase/firestore"
import {db} from "../firebase"

function Generator() {
	const [course, setCourse] = useState("");
	const [value,setValue] = useState("");
	const [startingNo,setStartingNo] = useState("")
    const [endingNo,setEndingNo] = useState("")
	const [totalAttendence,setTotalAttendence] = useState(0);
	
	const handleSubmit = async() =>{

		const data = await getDoc(doc(db, course, "details"));
  console.log(data);
  setStartingNo(data.data().startingNo);
  setEndingNo(parseInt(data.data().endingNo));
  setTotalAttendence(parseInt(data.data().totalAttendence)+1)
  console.log(endingNo);
  console.log(startingNo);

  for(let i = parseInt(startingNo);i<=  parseInt(endingNo);i++ ){
			const ref = doc(db, course,i.toString());
			updateDoc(ref,{
			  flag :false
			})
		}
			const a = Math.random();
			setValue(course+"/"+a);
			updateDoc(doc(db, course, "details"),{
				totalAttendence : totalAttendence
			  })	
	}
	
return (
	<div>
	<center>
	<FormControl>
          <FormLabel>Course Name</FormLabel>
          <Input
            // html input attribute
            name="course"
            type="text"
            placeholder="Enter the Course Name"
            value={course}
            onChange={(e)=>setCourse(e.target.value)}
          />
        </FormControl>
		<div>
		<button onClick={handleSubmit}>Search</button>
		</div>
		{value && (
		<QRCode
			value={value}
			bgColor="white"
			fgColor="#070A52"
			size={300}
		/>
		)}
	</center>
	</div>
);
}

export default Generator;