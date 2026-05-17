import { useParams } from "react-router-dom"

export default function Blog() {
  const { id } = useParams();
  return <div className="app">
    <p>Blog {id}</p>
  </div>
}