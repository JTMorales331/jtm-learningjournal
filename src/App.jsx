// react shi
import {Routes, Route, Link} from 'react-router-dom'
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

  // all blogs from fetchData gets stored here
  const [blogs, setBlogs] = useState([])

  // to feature latestBlog on home page idk if I should transfer it to Home page
  const [latestBlog, setLatestBlog] = useState([])

  // fetches blog data using Posts/getBlogsData()
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


  // all blogs to be mapped and shown below
  const blogComponents = blogs.map((blog) => {
    return (
      <div className="blog-card" key={blog.id}>
        <Link to={`/post/${blog.id}`}>
          <img src={blog.img} alt={`picture of ${blog.title}`} />

          <div className="blog-date">{blog.date}</div>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        
        </Link>
      </div>
    )
  })

  
  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
        
          
          {/* Home */}
          <Route 
            index
            element={<Home latestBlog={latestBlog} blogsLayout={<BlogsLayout blogComponents={blogComponents}/>}  />} 
          />

          {/* Post Detail */}
          <Route 
            path="/post/:id"
            element={<PostDetail blogComponents={blogComponents} />}
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
