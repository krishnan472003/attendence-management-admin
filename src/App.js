import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Screen/Home';
import Signup from './Screen/Signup'
import Login from './Screen/Login'
import AddCourse from "./Screen/AddCourse"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/signup' element = {<Signup/>}/>
        <Route exact path='/login' element = {<Login/>}/>
        <Route exact path='/addCourse' element = {<AddCourse/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
