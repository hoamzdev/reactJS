import { useCallback, useEffect, useRef, useState } from "react"
import Content from "../components/Content";

// export default function Home() {
//   const [count, setCount] = useState(0);
//   const timer = useRef(null);

//   const pRef = useRef(null);

//   useEffect(() => {
//     console.log(pRef.current);
//   })

//   // const e = document.createComment('p');//dung khi ide khong gen goi y -> quen attr cua html

//   const handleClickableStart = () => {
//     if (timer.current != null) return;
//     timer.current = setInterval(() => {
//       setCount((pre) => pre + 1);
//     }, 1000)
//     console.log(`start ${timer.current}`);
//     pRef.current.innerText = "Noi dung sau khi sua";
//   }

//   const handleClickableStop = () => {
//     clearInterval(timer.current);
//     console.log(`stop ${timer.current}`);
//   }

//   return <div className="app">
//     <p ref={pRef} >This is a paragraph {count}</p>
//     <button type="button" onClick={handleClickableStart}>Start</button>
//     <button type="button" onClick={handleClickableStop}>Stop</button>
//   </div>
// }


export default function Home() {
  const [count, setCount] = useState(0);

  const handleClickable = useCallback(() => {
    setCount(pre => pre + 1);
  }, [])
  console.log('re-render-parent');

  return <div className="app">
    <p>{count}</p>
    <Content handleClickable={handleClickable} />
  </div>
}