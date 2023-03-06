import Image from 'next/image'
import './Login.scss'
import fbLogo from './'
export default function page() {
  return (
    <>
    <div className='Login'>
     <Image src={}/>

     <h5>Facebook helps you connect and share with the people in your life. </h5>

     <div className="form">
        <form className='form-wrapper'>
            <input className='email-input' type="email" placeholder="Email address or phone number" />
            <input className='password-input' type="email"placeholder='Password' />
        </form>
     </div>
    </div>
    </>
  )
}
