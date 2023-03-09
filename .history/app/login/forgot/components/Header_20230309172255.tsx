import React from 'react'
import { LoginForm } from '../../LoginForm';
import { Logo } from '../../logo';
import '/'



// guess  backend have to use this somewhere  !!!!
const handleSubmit  = () => {
  console.log("working")
}


export default function forgotHeader(): JSX.Element {
  return (
    <>
     <header className="forgotHeader">
        <div className="left">
        <Logo />
        </div>
        <div className="right">
          <LoginForm handleSubmit={handleSubmit()}/>
        </div>
    </header> 
    </>
  )
}
