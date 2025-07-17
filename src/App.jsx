import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import UserPage from './pages/UserPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div>
       <Header/>
         
         <Routes>

             <Route path='/' element={<Home/>}/>
             <Route path='/About' element={<About/>}/>
             <Route path='/UserPage' element={<UserPage/>}/>
             <Route path='*' element={<NotFoundPage/>}/>

         </Routes>
       

       <Footer/>
    </div>
  )
}

export default App
