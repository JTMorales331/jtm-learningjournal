import {Link} from 'react-router-dom'

export default function BlogsLayout({blogComponents}) {

  

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