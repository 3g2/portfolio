import React from "react"

const Popup = props => {
  return props.pop_up_state ? (
    <div className="pop_up open_pop_up">
      <div className="pop_up_inner">{props.children}</div>
    </div>
  ) : (
    <div className="pop_up close_pop_up">
      <div className="pop_up_inner">{props.children}</div>
    </div>
  )
}

export default Popup
