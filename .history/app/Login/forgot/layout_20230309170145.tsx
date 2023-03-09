import React from 'react'
import ForgotHeader from './components/Header'

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
        <ForgotHeader />
        <body>{children}</body>
      </html>
    )
  }
  