'use server'
import { revalidatePath } from 'next/cache'
import supabaseAction from '../supabaseAction'

export const addPost = async (formData: FormData) => {
  const content = formData.get('content')
  if (content === null) return
  const { data: { user } } = await supabaseAction().auth.getUser()
  if (user === null) return
  await supabaseAction().from('posts').insert({ content, user_id: user.id })

  revalidatePath('/')
}
