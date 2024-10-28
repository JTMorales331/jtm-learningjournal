import { useEffect, useState } from 'react'

// components
import BlogCard from "./BlogCard"

// Services
import { getBlogData } from '../../services/Posts'

export default function PostLayout() {

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
      <BlogCard
        key={blog.id}
        blogImg={blog.img}
        blogDate={blog.date}
        blogTitle={blog.title}
      >
        {blog.content}
      </BlogCard>
    )
  })

  return (
    <section className='recent-posts'>
        <div className='container'>
          <h4>Recent Posts</h4>
          <div className="blogs">
            {blogComponents}
          </div>
        </div>
      </section>
  )
}