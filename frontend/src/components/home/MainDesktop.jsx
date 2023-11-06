import Typewriter from "./Typewriter";

export function DesktopMain() {
  return (
    <>
      <div id="home-div">
        <div id="welcome-text">
          <h2 className="squiggle-write">Welcome to</h2>
          <h1>THE SOCIAL SPOT</h1>
          <Typewriter />
        </div>
      </div>
    </>
  );
}
