import Typewriter from "./Typewriter";
import logo from "../../images/logo.png";

export function DesktopMain() {
  return (
    <>
      <div id="home-div">
        <div id="welcome-text">
          <img id="logo-front" src={logo} alt="" />
          <h1 id="sosspot">THE SOCIAL SPOT</h1>
          <Typewriter />
        </div>
      </div>
    </>
  );
}
