import Header from './components/Header'
import About from './components/About/index'
import Footer from './components/Footer'

import Blog from './components/Blog'
import blogData from './data'

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
        <About>
          <About.Intro
            name="Terry"
            userIcon={'../public/images/profilepic.JPG'}
          >
            I'm mostly doing this for thesis huhuhuhu but i wanna learn broskidesu.
          </About.Intro>
          
          <section className="about-content">
            <About.Content
              title="How I stay committed to learning"
            >
              How I stay committed, you ask? It is all because of anxiety. Yes, my worrisome anxious and overthinking mind could not stop worrying about the unknown future of a pleb such as myself that I'm very scared of not making money at all. I have quit my music and audio life and just dove deep in the front-end development rabbit hole.
            </About.Content>
            <About.Content
              title="How I started"
            >
              I started out studying front-end development when I discovered "React" and how I like the color of the logo which is almost like the similar color as html tags. I am also more keen on creatives than purely logic which may have come from my music and audio background.
            </About.Content>

          </section>

          <section className='recent-posts'>
            <div className='container'>
              <h4>Recent Posts</h4>
              <div className="blogs">
                {blogs}
              </div>
            </div>
          </section>
        </About>
      </main>

      <Footer />
    </>
  )
}

export default App
