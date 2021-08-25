import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from "react"
import { AiFillCheckSquare } from "react-icons/ai"

const SnackBar = forwardRef((props, ref) => {
  const [show_snack_bar, set_show_snack_bar] = useState(false)

  useImperativeHandle(ref, () => ({
    show() {
      set_show_snack_bar(true)
      setTimeout(() => {
        set_show_snack_bar(false)
      }, 150000)
    },
  }))
  return (
    <div
      className="snackbar"
      id={show_snack_bar ? "show_snack_bar" : "hide_snack_bar"}
    >
      <div className="icon">
        <AiFillCheckSquare />
      </div>
      <div className="message">{props.message}</div>
    </div>
  )
})

export default SnackBar
