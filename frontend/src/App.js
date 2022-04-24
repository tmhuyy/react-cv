import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from './components/Forms/PersonalDetail/PersonalDetail';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Forms/Profile/Profile';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Header/>
      {/* <Routes>
        <Route path="/" element={<Personal />}></Route>
        <Route path="/profile" element={ <Profile/> }></Route>
        <Route path="/education" element={ }></Route>
        <Route path="/" element={ }></Route> 
        <Route path="/how-to-use" element=""></Route>
        <Route path="/register" element={ <Register/> }></Route>
      </Routes> */}
      <Footer/>
    </Router>
  );
}

export default App;
