import { useState } from "react"
import TabButton from "./components/TabButton"

function Test() {
  const [show, addRequest] = useState(false);
  const [value, changeValue] = useState('Activate now');
  const [ok, changeState] = useState(false)
  const [clicked, changeClicked] = useState(false)

  return (
    <>
      <h3>Hello world</h3>
      <div className="container">
        {show && (
          <div className="dialog">
            <p>Are you sure?</p>
            <div className="group-btn">
              <button onClick={() => { changeValue('Activated'), addRequest(false); changeState(true) }}>Yes</button>
              <button onClick={() => { changeValue('Activate now'), addRequest(false); }}>No</button>
            </div>
          </div>
        )}
        {!show && !ok && (
          <TabButton onClick={() => addRequest(true)} isClicked={false}>{value}</TabButton>
        )}

        {
          ok && !show && (
            <p>Activated</p>
          )
        }
        <TabButton isClicked={clicked} onClick={() => changeClicked(true)}>Test</TabButton>
      </div>
    </>
  );
}

export default Test
