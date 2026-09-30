import { useState } from "react";
import Clicker from "./Clicker.jsx";

export default function App() {
  const [hasClicker, setHasClicker] = useState(true);
  const clickerClick = () => {
    setHasClicker(!hasClicker);
  };
  return (
    <>
      <button onClick={clickerClick}>{hasClicker ? "Hide" : "Show"}</button>
      {hasClicker && <Clicker />}
    </>
  );
}
