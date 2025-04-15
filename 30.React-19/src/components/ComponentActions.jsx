import {useState} from "react"
import { fetchPosts } from "../actions/action"

export default function ComponentActions() {

  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    try {
      const fetchedPosts = await fetchPosts()
      setPosts(fetchedPosts)
      setError(null)
    }catch(error){
      setError(error.message)
    }
  }


  return (
    <div>
      <form action={handleSubmit}>
        <button type="submit">Affichier les articles</button>
      </form>

      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
