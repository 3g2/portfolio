import React from "react"

const Popup = props => {
  return props.pop_up_state ? (
    <div className="pop_up">
      <div className="pop_up_inner">{props.children}</div>
    </div>
  ) : null
}

export default Popup
