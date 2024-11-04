import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

// Services
import {getBlogData} from '../services/Posts'

export default function PostDetail({blogComponents}) {

  // :id gets into params
  const params = useParams()

  const [currentBlog, setCurrentBlog] = useState(null)

  // uses getBlogData(id) service to fetch certain blog data. stores in currentBlog
  useEffect(() => {
    async function fetchData() {
      try{
        const data = await getBlogData(params.id)
        console.log('data fetched!', data)
        setCurrentBlog(data.blog)
      } catch (err) {
        console.error('Failed to fetch blog: ', err)
      }
    }
    fetchData()
  }, [params.id])

  return (
    <section className="section-post-detail">
        { currentBlog ? (
          <div className="container">
            <div className="post-content-wrapper">
              <div className="blog-date">{currentBlog.date}</div>
              <h1>{currentBlog.title}</h1>
              <p>{currentBlog.content}</p>
            </div>
            <div className="img-wrapper">
              <img className="featured-post-img" src={currentBlog.img} />
            </div>
            <div className="blogs">
            {blogComponents}
          </div>
          </div>
          ) : (
            <div className="container">
              <h1>Page Loading...</h1>
            </div>
          )
        }
    </section>
  )
}