// react shi
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

// Services
import { getBlogData } from './services/Posts'

import './server'

// components
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'

// Pages
import About from './Pages/About'
import Home from './Pages/Home'

function App() {

  const [blogs, setBlogs] = useState([])

  // fetches blog data using Posts/getBlogData()
  useEffect(() => {
    async function fetchData() {
      try{
        const data = await getBlogData()
        setBlogs(data.blogs)
      } catch (err) {
        console.err('Failed to fetch blogs: ', err)
      }
    }
    fetchData()
  }, [])

  const blogComponents = blogs.map((blog) => {
    return (
      <Blog
        key={blog.id}
        blogImg={blog.img}
        blogDate={blog.date}
        blogTitle={blog.title}
      >
        {blog.content}
      </Blog>
    )
  })
  
  return (
    <>
      <Header />
      
      <main>
        <Routes>
          
          {/* Home */}
          <Route path='/' element={<Home />} />

          {/* About */}
          <Route path='/about' element={<About blogs={blogComponents} />}/>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
