import Button from "../components/Button";
import Hello from "../components/Hello"
import Product from "../components/Product";

export default function App() {

  const name = 'dvhoa';

  const isShow = true;

  const getName = () => {
    return name;
  }

  //fake data
  const products = [
    {
      urlImage: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b',
      title: 'Thời Trang Nam'
    },
    {
      urlImage: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b',
      title: 'Thời Trang Nam'
    },
    {
      urlImage: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b',
      title: 'Thời Trang Nam'
    },
    {
      urlImage: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b',
      title: 'Thời Trang Nam'
    }
  ]

  return (
    <>
      {/* <div style={{ display: 'flex', gap: '10px' }}>
        <Hello name='Dinh Van Hoa' content="hehehe"></Hello> */}
      {/* <Hello content="hehehe"></Hello> */}
      {/* <TestProps getName={getName}></TestProps> */}
      {/* <Course /> */}

      {/* {
          products.map((product, index) => {
            return (
              <Product
                title={product.title}
                urlImage={product.urlImage}
              ></Product>
            )
          })
        } */}
      {/* </div >
      {
        isShow ?
          <p>Da duoc hien thi</p>
          :
          <p>Da duoc an di</p>
      } */}

      <Button onClick={() => { console.log('clicked') }}>Click</Button>

    </>
  )
}

function Course() {
  const course = ['JAVA', 'HTML', 'CSS'];
  const renderUI = () => {
    return (
      <ul>
        {
          course.map((val, index) => {
            return <li key={index}>{val}</li>
          })
        }
      </ul>
    )
  }
  return renderUI();
}

function TestProps({ getName }) {
  return <div> {getName()}</div>
}

//  App