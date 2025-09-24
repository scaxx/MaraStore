import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home'
import AnimatedBackground from './Components/AnimatedBackground'

function App() {

  return (
    <Router>
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
