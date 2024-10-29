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
import {getBlogsData} from './services/Posts'
import PostDetail from './Pages/PostDetail'

function App() {

  const [blogs, setBlogs] = useState([])

  const [latestBlog, setLatestBlog] = useState([])

  // fetches blog data using Posts/getBlogData()
  useEffect(() => {
    async function fetchData() {
      try{
        const data = await getBlogsData()
        setBlogs(data.blogs)
        setLatestBlog(data.blogs[data.blogs.length - 1])
      } catch (err) {
        console.error('Failed to fetch blogs: ', err)
      }
    }
    fetchData()
  }, [])

  
  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
        
          
          {/* Home */}
          <Route 
            index
            element={<Home latestBlog={latestBlog} blogsLayout={<BlogsLayout blogs={blogs}/>}  />} 
          />

          {/* Post Detail */}
          <Route 
            path="/post/:id"
            element={<PostDetail />}
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
