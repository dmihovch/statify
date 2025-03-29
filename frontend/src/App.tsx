
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ArtistStats from './pages/ArtistStats'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/artists" element={<ArtistStats />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
