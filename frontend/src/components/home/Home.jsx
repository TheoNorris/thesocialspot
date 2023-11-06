import { useEffect, useState } from "react";
import { Login } from "./Login";
import { DesktopMain } from "./MainDesktop";

export function HomePage() {
  return (
    <>
      <div className="container">
        <DesktopMain />
        <Login />
      </div>
    </>
  );
}
