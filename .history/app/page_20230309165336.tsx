import { Inter } from 'next/font/google'
import Login from './login/page';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Llogin />
    </main>
  )
}


// TODO: almost done with login page for new user , yet to write style for large screen
// TODO: after loginPage we move to homepage "all design system based on our suggestion"