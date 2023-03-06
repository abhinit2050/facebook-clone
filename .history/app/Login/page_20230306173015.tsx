import Image from "next/image";
import "./Login.scss";

export default function page() {
  return (
    <>
      <div className="Login">
        <div className="container">
          <div className="top">
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
          <div className="form">
            <form className="form-wrapper">
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
