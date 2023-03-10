
export const metadata = {
  title: 'Facebook-clone ',
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