import {useEffect, useState, useTransition} from "react"
import { fetchPosts } from "../server/ServerComponent"

export default function ComponentServer() {

  const [posts, setPosts] = useState([])
  const [isPending, startTransition] = useTransition()

  useEffect(()=> {

    const getPosts = async ()=> {
      const data = await fetchPosts();
      startTransition(()=> {
        setPosts(data)
      })
    }
    getPosts()

  }, [])

  return (
    <div>

      <h1>Liste des posts</h1>
    
      {isPending ? (<p>Loading...</p>) : 
      (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}

        </ul>
      )
      }
    </div>
  )
}
