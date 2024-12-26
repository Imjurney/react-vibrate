import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const vibrateInterval = useRef<boolean>(false);

  const startVibrate = () => {
    vibrateInterval.current = window.navigator.vibrate(200);
  };

  const stopVibrate = () => {
    if (vibrateInterval.current) {
      window.navigator.vibrate(0);
    }
  };

  return (
    <>
      <button type="button" onClick={startVibrate}>
        vibrate start
      </button>
      <button type="button" onClick={stopVibrate}>
        vibrate stop
      </button>
    </>
  );
}

export default App;
