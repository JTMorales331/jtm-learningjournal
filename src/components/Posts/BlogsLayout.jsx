// components
import BlogCard from "./BlogCard"

export default function BlogsLayout({blogs}) {

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