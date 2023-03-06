import Image from "next/image";
import Link from "next/link";
import "./Login.scss";



const handleSubmit  = ( ) => {
  return null
}
export default function page() {
  return (
    <>
      <div className="Login">
        <div className="Container">
          <div className="top-left">
            <div className="logo">
              <img
                className="logoA"
                src="./assets/fbLogo.svg"
                alt="facebook logo"
              />
            </div>

            <h5>
              Facebook helps you connect and share with the people in your life.{" "}
            </h5>
          </div>

          <div className="bottom-right">
          <div className="form-wrapper">
            <form className="form" onSubmit={}>
              <input
                className="email-input"
                type="email"
                placeholder="Email address or phone number"
              />
              <input
                className="password-input"
                type="email"
                placeholder="Password"
                />
              <button className=' loginButton' type='submit' >
                Log in
                </button>


            <Link href="#"  className="forgottenPassword" > Forgotten password?</Link>
            </form>
            <div className="divider"></div>
            <button className=' CreateAccount' type='submit' >
                  Create new Account
            </button>
                </div>

        </div>
      </div>
      </div>
    </>
  );
}
