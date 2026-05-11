

export default function Button({ children, onClick }) {
  return <div>
    <button className="btn" onClick={onClick} type="button">{children}</button>
  </div>
}