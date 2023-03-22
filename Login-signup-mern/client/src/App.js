
import './App.css';
// import Header from "./components/Header.js";
import Login from "./components/Login"
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Error from "./components/Error.js"

function App() {
  return (
    <div className="App">

     {/* <Header/> */}
    
     <Routes>
     <Route path='/'  element={<Login/> }/>
     <Route path='/register'  element={<Register/> }/>
     <Route path='/Dashboard'  element={<Dashboard/> }/>
     <Route path='*'  element={<Error/> }/>


     </Routes>
    </div>
  );
}

export default App;
