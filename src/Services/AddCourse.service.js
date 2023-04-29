import { db } from "../firebase";
import { collection,getDocs,where,addDoc, query,doc,orderBy,limit } from "firebase/firestore";
const collRef = collection(db,"users")
class CourseService{
    addCourse = (newData,start) =>{
        return addDoc(collRef,newData)
    }
    getData = async () => {
      
      const q = await query(collRef, where('users', '==', uid), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log('No matching documents.');
        return null;
      } else {
        let allData=[];
        allData = querySnapshot.docs.map(doc => doc.data());
        return allData;
      }
    }
         
    
}

export default new dataService();
// , orderBy('date', 'desc')
    
    for(let i = startingNo ; i <= endingNo;i++){
      setDoc(doc(db, course, i), {
          rollno : 0
        });
  }