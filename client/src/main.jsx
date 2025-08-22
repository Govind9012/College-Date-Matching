import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Maintenance from './components/Maintenance/Maintenance.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>
      <Route path='' element={<Maintenance />}/>
      <Route path='about' element = {<Maintenance />}/>
      <Route path='Find-Date' element={<Maintenance />}/>
      <Route path='Uses' element={<Maintenance />}/>
      <Route path='Purchases' element={<Maintenance />}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
