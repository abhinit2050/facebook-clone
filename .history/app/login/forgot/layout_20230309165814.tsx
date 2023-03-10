import header from './components/'
export const metadata = {
    title: 'Facebook-clone |Login Page ? ForgotPassword',
    description: 'forgot Password  ',
  }
  
  export default function forgotPasswordLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <header />
        <body>{children}</body>
      </html>
    )
  }
  