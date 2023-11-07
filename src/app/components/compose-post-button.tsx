/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostButton () {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      type='submit'
      className='bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end'>
      {pending ? 'Posteando...' : 'Postear'}
    </button>
  )
}
