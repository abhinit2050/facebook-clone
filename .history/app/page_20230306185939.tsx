import { Inter } from 'next/font/google'
import Login from './Login/page';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  )
}


TODO