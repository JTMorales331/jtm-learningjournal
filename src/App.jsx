// react shi
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

// components
import Header from './components/Header'
import Footer from './components/Footer'
import BlogsLayout from './components/Posts/BlogsLayout'

// Pages
import About from './Pages/About'
import Home from './Pages/Home'

// Services
import {getBlogData} from './services/Posts'

function App() {

  const [blogs, setBlogs] = useState([])

  // fetches blog data using Posts/getBlogData()
  useEffect(() => {
    async function fetchData() {
      try{
        const data = await getBlogData()
        setBlogs(data.blogs)
      } catch (err) {
        console.error('Failed to fetch blogs: ', err)
      }
    }
    fetchData()
  }, [])
  
  return (
    <>
      <Header />
      
      <main>
        <Routes>
          
          {/* Home */}
          <Route path='/' element={<Home blogsLayout={<BlogsLayout blogs={blogs}/>} />} />

          {/* About */}
          <Route path='/about' element={<About blogsLayout={<BlogsLayout blogs={blogs} />} />}/>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
