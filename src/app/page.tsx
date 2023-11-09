import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import supabaseServer from './supabaseServer'
export const runtime = 'edge'
export default async function Home () {
  // const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabaseServer().auth.getSession()
  if (session === null) {
    redirect('/login')
  }
  const { data: posts } = await supabaseServer()
    .from('users')
    .select('*')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className='max-w-[800px] w-full mx-auto border-l border-r border-white/80 min-h-screen'>
        prueba
        <pre>
          {
            JSON.stringify(posts, null, 2)
          }
        </pre>
      </section>
      <AuthButtonServer/>
    </main>
  )
}
