import { useState } from "react";
import Button from "../components/Button";


export default function Home() {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState();

  const handlerClick = () => {
    setCounter((pre) => pre + 1);
  }

  const handleGetUsername = (e) => {
    //lay ra gia tri user nhap
    setName(e.target.value);
  }
  console.log(name);

  return <div>
    <Button onClick={handlerClick}>Counter</Button>
    <br />
    <p>{count}</p>
    <br />
    <input type="text" onChange={(e) => handleGetUsername(e)} autoComplete="off" />
    <div>name : {name}</div>
  </div>
}