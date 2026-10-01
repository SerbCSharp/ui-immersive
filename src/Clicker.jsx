import { useEffect, useState } from "react";

export default function Clicker() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count") ?? 0),
  );

  useEffect(() => {
    return () => {
      localStorage.removeItem("count");
    };
  }, []);
  //useEffect(() => localStorage.setItem("count", count), [count]);

  const buttonClick = () => {
    setCount(count + 1);
    localStorage.setItem("count", count);
  };
  return (
    <>
      <div>Количество нажатий: {count}</div>
      <button onClick={buttonClick}>Нажми на меня</button>
    </>
  );
}
