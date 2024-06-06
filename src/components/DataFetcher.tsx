import React from 'react'

interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

export default async function DataFetcher() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/'
  )
  const posts: Posts[] = await res.json()
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {' '}
            ++++++++ {post.body}
          </li>
        ))}
      </ul>
    </div>
  )
}
