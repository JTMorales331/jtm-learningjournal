import {Routes, Route} from 'react-router-dom'

import blogData from './data'
import './server'

// components
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'

// Pages
import About from './Pages/About'
import Home from './Pages/Home'

function App() {

  const blogs = blogData.map((blog, index) => {
    return (
      <Blog
        key={index}
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
          <Route path='/about' element={<About blogs={blogs}/>}/>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
