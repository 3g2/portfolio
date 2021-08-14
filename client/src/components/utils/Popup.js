import React from "react"

const Popup = props => {
  return props.pop_up_state ? (
    <div className="pop_up">
      <div className="pop_up_inner">
        <button
          className="close_pop_up"
          onClick={() => {
            props.toggle_pop_up_state(false)
          }}
        >
          CLOSE
        </button>
        {props.children}
      </div>
    </div>
  ) : null
}

export default Popup
