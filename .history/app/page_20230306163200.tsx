import { Inter } from 'next/font/google'
import { Login } from '.';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  )
}
