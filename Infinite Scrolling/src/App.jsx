import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from "./Components/Home";
import Login from './Components/Login';
import Error from './Components/Error';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App
