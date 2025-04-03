
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ArtistStats from './pages/ArtistStats'

function App() {

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/artist-stats" element={<ArtistStats />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
