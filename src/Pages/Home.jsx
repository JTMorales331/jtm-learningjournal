export default function Home({latestBlog, blogsLayout}) {

  console.log(latestBlog)

  const postImg = {
    backgroundImage: `url(${latestBlog.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'
  }
  
  return (
    <>
      <section className="section-home" style={postImg}>
        {/* <img src={latestBlog.img} /> */}
        <div className="container">
          <h1>Home Page</h1>
        </div>
      </section>

      {blogsLayout}
    </>
  )
}