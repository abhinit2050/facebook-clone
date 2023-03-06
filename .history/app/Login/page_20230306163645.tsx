import './Login.scss'

export default function page() {
  return (
    <>
    <div className='Login'>
     <h1>facebook</h1>

     <h5>Facebook helps you connect and share with the people in your life. </h5>

     <div className="form">
        <form >
            <input className='email-input' type="email"placeholder='Email address or phone number ' />
        </form>
     </div>
    </div>
    </>
  )
}
