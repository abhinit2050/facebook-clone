import React from 'react'
import { LoginForm } from '../../LoginForm';
import { Logo } from '../../logo';




export default function forgotHeader(): JSX.Element {
  return (
    <>
     <header className="forgotHeader">
        <div className="left">
        <Logo />
        </div>
        <div className="right">
          <LoginForm handleSubmit={handleSubmit}/>
        </div>
    </header> 
    </>
  )
}
