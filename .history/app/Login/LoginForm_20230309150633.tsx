import Link from "next/link";

type LoginFormProps = {
  handleSubmit : ()
}



export const LoginForm = ({handleSubmit} : LoginFormProps) =>  {
      return (
      <form className="form" onSubmit={handleSubmit()}>
        <input className="email-input" type="email" placeholder="Email address or phone number" />
        <input className="password-input" type="email" placeholder="Password" />
        <button className=' loginButton' type='submit'>
          Log in
          </button>
        <Link href="#" className="forgottenPassword"> Forgotten password?</Link>
      </form>
  );
    }
  
