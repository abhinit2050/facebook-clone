
export const metadata = {
    title: 'Facebook-clone ? ForgotPassword',
    description: 'forgot Password  ',
  }
  
  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  