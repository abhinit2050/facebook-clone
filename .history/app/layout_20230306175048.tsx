import '../src/styles/reset.scss'

export const metadata = {
  title: 'Facebook-clone',
  description: 'A facebook clone',
}

export default function RootLayout({
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
