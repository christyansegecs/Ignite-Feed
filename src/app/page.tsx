
import { Post } from './components/Post'
import { PostModel } from './components/PostModel'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/christyansegecs.png',
      name: 'Christyan Segecs',
      role: 'Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  }
]

export default function Home() {
  return (
    
      <div>
        <Header />
        
        <div className='wrapper'>
          <Sidebar />
          <main>
            <PostModel />
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt} />
              ) 
            })}
          </main>
        </div>
      </div>
  )
}
