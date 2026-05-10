import { useState } from "react"
import Button from "../components/Button"


export default function Exam() {
  const [isVisible, setVisible] = useState(false);

  const handleChangeVisible = () => {
    setVisible(!isVisible)
  }

  return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
    {/* <div className="boxColor" style={{ backgroundColor: color }}></div> */}
    {/* <div className="container"> */}
    {/* <Button onClick={() => handleChangeColor('red')} hoverColor={'red'}>Red</Button> */}
    {/* <Button onClick={() => handleChangeColor('blue')} hoverColor={'blue'}>Blue</Button> */}
    <Button onClick={() => handleChangeVisible()} hoverColor={'black'}>Click Here</Button>

    {
      isVisible && <p>Da hien thi</p>
    }

    {/* </div> */}
  </div>
}