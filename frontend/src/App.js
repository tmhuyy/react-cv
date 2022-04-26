// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./components/Forms/PersonalDetail/PersonalDetail";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Forms/Profile/Profile";
import ContentLP from "./components/ContentLP/ContentLP";

const App = () => {
  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-white to-pink-500 dark:from-blue-900 dark:to-blue-700 text-black dark:text-white">
      <NavBar />
      <Header />
      <ContentLP/>
      {/* <Routes>
        <Route path="/" element={<Personal />}></Route>
        <Route path="/profile" element={ <Profile/> }></Route>
        <Route path="/education" element={ }></Route>
        <Route path="/" element={ }></Route> 
        <Route path="/how-to-use" element=""></Route>
        <Route path="/register" element={ <Register/> }></Route>
      </Routes> */}
      {/* <Footer/> */}
    </div>
  );
};

// const App = () => {
//   return (
//     <div className="h-screen pl-4">
//       sa
//     </div>
//   )
// }

export default App;
