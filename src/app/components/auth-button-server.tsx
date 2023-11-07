import { AuthButton } from './auth-button-client'
import supabaseServer from '../supabaseServer'

export async function AuthButtonServer () {
  const { data: { session } } = await supabaseServer().auth.getSession()

  return <AuthButton session ={session} />
}
