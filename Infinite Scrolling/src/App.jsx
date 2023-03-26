import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Authentication from "./Components/Authentication";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <Authentication>
              <Home />
            </Authentication>
          }
        ></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
