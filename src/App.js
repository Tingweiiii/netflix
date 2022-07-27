import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Home from "./pages/home/Home"
import GlobalStyle from './GlobalStyle'

function App() {

  const [searchTern, setSearchTern] = useState("")

  return (
    <Router>
    <GlobalStyle />
    <Navbar searchTern={searchTern} setSearchTern={setSearchTern} />
      <Routes>
        <Route path="/netflix/" element={<Home />} />
        <Route path="/netflix/movies/" element={<Home type="movies" />} />
        <Route path="/netflix/serise/" element={<Home type="serise" />} />
      </Routes>
    </Router>
  );
}

export default App;
