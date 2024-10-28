export default function BlogsLayout({blogs}) {

  const blogComponents = blogs.map((blog) => {
    return (
      <div className="blog-card" key={blog.id}>
        <img src={blog.img} alt={`picture of ${blog.title}`} />

        <div className="blog-date">{blog.date}</div>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
      </div>
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