import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider} from '@clerk/clerk-react'
import { BrowserRouter} from 'react-router-dom'

const CLERK_KEY_PUB= import.meta.env.VITE_CLERK_KEY_PUB;

if(!CLERK_KEY_PUB){
  throw new Error("Missing Publishable Clerk Key")
}

createRoot(document.getElementById('root')!).render(


<StrictMode>
  <ClerkProvider publishableKey={CLERK_KEY_PUB}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
</StrictMode>
  
)
