import axios from 'axios'
import '../server'

// get blog posts
export async function getBlogsData() {
  const res = await axios.get('/api/blogs')
  return res.data
}

export async function getBlogData(id) {
  const res = await axios.get(`/api/blogs/${id}`)
  return res.data
}