
export default function Button({ children, hoverColor, onClick }) {
  return <div >
    <button className="btn" onClick={onClick} type="button" style={{ '--hover-color': hoverColor }}>{children} </button>
  </div>
}