
import {Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ArtistStats from './pages/ArtistStats'
import UserProfilePage from './pages/UserProfilePage'
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react'
import SpotifyCallback from './pages/SpotifyCallback'

function App() {

  const { isLoaded } = useAuth();

  if(!isLoaded){
    return <div>Loading...</div>
  }

  return(

    <>
       <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/spotify-callback" element={<SpotifyCallback/>}/>
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/artist-stats" element={<ArtistStats />}/>
        <Route path="*" element={<Home/>} />
      </Routes>
    </header>
    </>

   
  )
  
}

export default App
