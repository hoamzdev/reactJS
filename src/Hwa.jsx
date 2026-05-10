

import demoPic from './assets/hero.png';
import Header from "./components/Header.jsx";
import TabButton from './components/TabButton.jsx';
import { useState } from 'react'
const data = [
  {
    image: demoPic,
    title: 'title',
    des: 'lorem'
  },
  {
    image: demoPic,
    title: 'title',
    des: 'lorem'
  },
  {
    image: demoPic,
    title: 'title',
    des: 'lorem'
  },
  {
    image: demoPic,
    title: 'title',
    des: 'lorem'
  }
]


let name = 'Hoa';

const isLogin = true

function DynamicValue() {
  return (<>
    <h2>Xin chao {name}</h2>
    <p>{1 + 2}</p>
    <p>{isLogin ? "Okeee" : "Not okee"}</p>
  </>)
}

function DisplayPicture() {
  return (<>
    <img src={demoPic} alt='image demo' style={{ width: '100px', height: '100px' }}></img>
  </>)
}

//ctrl + D -> sua o moi noi

//component
function MainImage({ image, title, des }) {
  return (<>
    <li>
      <img src={image} />
      <h2>{title}</h2>
      <p>{des}</p>
    </li>
  </>)
}

function Hwa() {

  const [count, setCount] = useState(0)
  const [click, setOnClicked] = useState()
  let content = <p>Vui long click to show description</p>
  if (click) {
    content = <p>Da nhan vao nut click</p>
  }
  return (
    <>
      <h1>Day la tieu de</h1>
      <p>Lorem ipsum dolor sit</p>
      <Header />
      <br />
      {/* cach 1 */}
      {/* {!click ? (
        <p>Vui long click to show description</p>
      ) : (
        <p>Da nhan vao nut click</p>
      )} */}
      {/* cach 2 */}
      {/* {!click && <p>Vui long click to show description</p>}
      {click && <p>Da nhan vao nut click</p>} */}
      {/*cach 3*/}
      {content}
      <br />
      <DynamicValue />
      <br />
      {/* <DisplayPicture /> */}
      <div className='test'>
        <ul>
          <MainImage
            {...data[0]}
          />
          <MainImage
            {...data[1]}
          />
          <MainImage
            {...data[2]}
          />
          <MainImage
            {...data[3]}
          />
        </ul>

        <br />

        <TabButton label={count} onClick={() => setCount(1000)}></TabButton>
        <br />
        <TabButton label='click here' onClick={() => setOnClicked(true)}></TabButton>

      </div>
    </>
  );
}

export default Hwa