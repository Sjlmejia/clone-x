import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type Database } from './types/database'

export default () => {
  cookies().getAll() // Keep cookies in the JS execution context for Next.js build
  return createServerComponentClient<Database>({ cookies })
}
