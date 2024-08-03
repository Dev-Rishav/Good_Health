// import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage"
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Post from "./Components/Post";
import FAQ from './Components/Faq';
import Team from './Components/Team'
import Login from './Components/Login'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={ <LandingPage/>} />
          <Route path="/post/:title" element={< Post/>} />
          <Route path="/faq" element={< FAQ/>} />
          <Route path="/team" element={< Team/>} />
          <Route path="/login" element={< Login/>} />
        </Routes>

     </Router>

     

    </>
  )
}

export default App
