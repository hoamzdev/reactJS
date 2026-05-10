
let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
function Header() {
  return (
    <>
      <h2>heheheheeh</h2>
      <p>Hom nay la <strong>{today}</strong>. Thoi gian hien tai la {":"} <strong>{time}</strong></p>
    </>
  )
}


export default Header;