import { Route, Routes } from "react-router-dom";

import "./App.css"
import Home from "./components/Home";
import Login from "./components/pages/Login";
import  Userhome from "./components/Userhome"



function App() {
  return (
    <main className="pb-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userhome" element={<Userhome />} />
      </Routes>
    </main>
  );
}

export default App;