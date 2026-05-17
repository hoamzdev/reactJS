import { memo } from "react"

function Content({ handleClickable }) {
  console.log('re-render-children');

  return <div>
    <button type="button" onClick={handleClickable}>Up</button>
  </div>
}

export default memo(Content)