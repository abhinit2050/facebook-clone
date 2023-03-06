import { Inter } from 'next/font/google'
import { } from './Login';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  )
}
