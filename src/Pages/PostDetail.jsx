import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

// Services
import {getBlogData} from '../services/Posts'

export default function PostDetail() {

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
    <section className="post-detail">
      <div className="container">
        { currentBlog ? (
          <h1>{currentBlog.title}</h1>
          ) : (
            <h1>Page Loading...</h1>
          )
        }
      </div>
    </section>
  )
}