// import './App.css';
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./components/Forms/PersonalDetail/PersonalDetail";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Forms/Profile/Profile";
import ContentLP from "./components/ContentLP/ContentLP";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
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
  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-white to-pink-500 dark:from-blue-900 dark:to-blue-700 text-black dark:text-white md:px-10">
      <Router>
          <NavBar isMobile={isMobile}/>
          <div className="page-container">
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
            </Routes>
          </div>
      </Router>
    </div>
  );
};

export default App;
