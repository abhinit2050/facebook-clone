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


// TODO: almost done with login page for new user , yet to write style for large screen
// TODO: after loginPage we move to homepage 
