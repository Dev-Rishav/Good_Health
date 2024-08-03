// import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage"
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Post from "./Components/Post";
import About from './Components/About';
import Team from './Components/Team'
import Login from './Components/Login'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={ <LandingPage/>} />
          <Route path="/post/:title" element={< Post/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/team" element={< Team/>} />
          <Route path="/login" element={< Login/>} />
        </Routes>

     </Router>

     

    </>
  )
}

export default App
