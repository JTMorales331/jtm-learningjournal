// react shi
import {Routes, Route} from 'react-router-dom'

import './server'

// components
import Header from './components/Header'
import Footer from './components/Footer'
import PostLayout from './components/Posts/PostLayout'

// Pages
import About from './Pages/About'
import Home from './Pages/Home'

function App() {
  
  return (
    <>
      <Header />
      
      <main>
        <Routes>
          
          {/* Home */}
          <Route path='/' element={<Home />} />

          {/* About */}
          <Route path='/about' element={<About postLayout={<PostLayout />} />}/>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
