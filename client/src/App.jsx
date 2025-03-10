import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Header from './components/Header'


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Signup/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
