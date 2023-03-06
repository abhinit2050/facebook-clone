import Image from "next/image";
import Link from "next/link";
import "./Login.scss";
import LoginForm 


const handleSubmit  = ( e:any ) => {
  e.preventDefault()
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
           <LoginForm   handleSubmit={handleSubmit}  />
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
