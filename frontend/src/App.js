// import './App.css';
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import CreateCv from "./components/CreateCv/CreateCv";
import Document from "./components/Document/Document";
import Register from "./components/Register/Register";
import axios from "axios";

function App () {
  const [allUsers, setAllUsers] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if(windowSize.width < 500) {
      setMobile(true);
    }
    else {
      setMobile(false);
    }
  }, [windowSize]);
  useEffect(() => {
        async function getData() {
            const res = await axios.get("/v1/users");
            return res;
        }
        getData().then(res => setAllUsers(res.data));
        getData().catch(err => console.log(err));
  }, []);

  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-white to-pink-500 dark:from-blue-900 dark:to-blue-700 text-black dark:text-white md:px-10">
      <Router>
          <NavBar isMobile={isMobile}/>
          <div className="page-container">
            <Routes>
              <Route path="/" element={<HomePage allUsers={ allUsers }/>}></Route>
              <Route path="/create" element={<CreateCv />}></Route>
              <Route path="/document" element={<Document />}></Route>
              <Route path="/cv-builder" element={<Register allUsers={ allUsers }/>}></Route>
            </Routes>
          </div>
      </Router>
    </div>
  );
};

export default App;
