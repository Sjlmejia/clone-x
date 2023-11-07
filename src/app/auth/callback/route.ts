import supabaseRoute from '@/app/supabaseRoute'
import { NextResponse, type NextRequest } from 'next/server'

// esto es una opcion de Next.js para evitar que cachee de froma
// estatica la ruta, y de que siempre se ejecute en le servidor
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  if (code !== null) {
    await supabaseRoute().auth.exchangeCodeForSession(code)
  }
  return NextResponse.redirect(requestUrl.origin)
}
