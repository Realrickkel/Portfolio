import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RIVLMedia from "./pages/RIVLMedia";
import Apple from "./pages/Apple";
import OnlineID from "./pages/OnlineID";
import JavscriptGame from "./pages/JavscriptGame";
import Review from "./pages/Review";
const App = () => {

  return (
    <Router>
          <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rivlmedia" element={<RIVLMedia />} />
                <Route path="/apple" element={<Apple />} />
                <Route path="/onlineid" element={<OnlineID />} />
                <Route path="/javascriptgame" element={<JavscriptGame />} />
                <Route path="/review" element={<Review />} />
            </Routes>
        </Router>
  )
}

export default App
