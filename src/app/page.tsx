import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import PostLists from './components/posts-lists'
import { type Database } from './types/database'
import { type Post } from './types/posts'
import { ComposePost } from './components/compose-post'
export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  if (session === null) {
    redirect('/login')
  }
  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className='max-w-[800px] w-full mx-auto border-l border-r border-white/80 min-h-screen'>
        <ComposePost userAvatarUrl={session?.user?.user_metadata?.avatar_url}/>
        <PostLists posts={posts as Post[]}/>
      </section>
      <AuthButtonServer/>
    </main>
  )
}
