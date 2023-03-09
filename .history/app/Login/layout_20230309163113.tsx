
export const metadata = {
  title: 'Facebook-clone | Login page',
  description: 'A facebook clone',
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