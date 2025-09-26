import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home'
import AnimatedBackground from './Components/AnimatedBackground'
import Shop from "./Components/Shop";

function App() {

  return (
    <Router>
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App
