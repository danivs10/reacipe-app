import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import PostCard from './components/post-card'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  console.log(session)

  if (session === null) {
    console.log('asasa')
    redirect('/login')
    console.log('asasa')
  } else {
    console.log('be')
  }

  const { data: posts } = await supabase.from('posts').select('*, user:users(name, avatar_url, user_name)')

  console.log(posts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />

      {posts?.map(post => {
        const {
          id,
          user,
          content
        } = post

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl
        } = user

        return (
          <PostCard
          content={content}
            key={id}
            userName={userName}
            userFullName={userFullName}
            avatarUrl={avatarUrl}/>
        )
      })}
    </main>
  )
}
