import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Screen/Home';
import Signup from './Screen/Signup'
import Login from './Screen/Login'
import AddCourse from "./Screen/AddCourse"
import Generator from './Screen/Generator';
// import Scanner from "./Screen/Scanner"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/signup' element = {<Signup/>}/>
        <Route exact path='/login' element = {<Login/>}/>
        <Route exact path='/addCourse' element = {<AddCourse/>}/>
        <Route exact path='/generator' element = {<Generator/>}/>
        

        </Routes>
      </Router>
    </div>
  );
}

export default App;
