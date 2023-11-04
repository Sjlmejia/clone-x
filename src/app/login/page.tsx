import { AuthButtonServer } from '@/app/components/auth-button-server'

const Login = () => {
  return (
    <section className='grid place-content-center min-h-screen'>
      <h1 className='text-xl font-bold mb-4'>Inicia sesion</h1>
      <AuthButtonServer />
    </section>
  )
}

export default Login
