import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import ContactMe from './pages/ContactMe'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contactme' element={<ContactMe />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
