// import Navbar from "./Components/Navbar"
import LandingPage from "./components/LandingPage"
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Post from "./pages/Post";
function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={ <LandingPage/>} />
          <Route path="/post/:title" element={< Post/>} />
        </Routes>

     </Router>

     

    </>
  )
}

export default App
