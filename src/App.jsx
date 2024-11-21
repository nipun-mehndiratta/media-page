import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Media } from "./pages/Media"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Media/> }/>
      </Routes>
    </Router>
  )
}

export default App
