
export const metadata = {
  title: 'Facebook-clone | Login page',
  description: 'Signin into your account ',
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