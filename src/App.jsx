// react shi
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

// components
import BlogsLayout from './components/Posts/BlogsLayout'
import BaseLayout from './components/Layouts/BaseLayout'

// Pages
import About from './Pages/About'
import Home from './Pages/Home'

// Services
import {getBlogData} from './services/Posts'

function App() {

  const [blogs, setBlogs] = useState([])

  const [latestBlog, setLatestBlog] = useState([])

  // fetches blog data using Posts/getBlogData()
  useEffect(() => {
    async function fetchData() {
      try{
        const data = await getBlogData()
        setBlogs(data.blogs)
        setLatestBlog(data.blogs[data.blogs.length - 1])
      } catch (err) {
        console.error('Failed to fetch blogs: ', err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log('blogs: ', blogs)
    
    console.log(latestBlog)
  }, [blogs])
  
  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
        
          
          {/* Home */}
          <Route 
            index
            element={<Home latestBlog={latestBlog} blogsLayout={<BlogsLayout blogs={blogs}/>}  />} 
          />

          {/* About */}
          <Route
            path='/about'
            element={<About blogsLayout={<BlogsLayout blogs={blogs} />} />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
