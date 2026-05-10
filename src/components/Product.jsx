

export default function Product({ urlImage, title }) {
  return (
    <div>
      <img src={urlImage} style={{ width: "83.44px", height: "83.44px" }}></img>
      <p>{title}</p>
    </div>
  )
}