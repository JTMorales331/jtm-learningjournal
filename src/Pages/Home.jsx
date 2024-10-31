import { Link } from "react-router-dom"

export default function Home({latestBlog, blogsLayout}) {

  console.log(latestBlog)

  const postImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)), url(${latestBlog.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    maxHeight: '100%',
    paddingTop: '30%'
  }
  
  return (
    <>
      <Link to={`/post/${latestBlog.id}`}>
        <section className="section-home" style={postImg}>
          <div className="container featured-post">
              <div className="blog-date">{latestBlog.date}</div>
              <h2>{latestBlog.title}</h2>
              <p>{latestBlog.content}</p>
          </div>
        </section>
      </Link>

      {blogsLayout}
    </>
  )
}