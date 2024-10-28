import axios from 'axios'
import '../server'

// get blog posts
export async function getBlogData() {
  const res = await axios.get('/api/blogs')
  console.log("Fetched data:", res.data); // Add this line
  return res.data
}