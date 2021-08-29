import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from "react"
import { AiFillCheckSquare } from "react-icons/ai"
import { MdCancel } from "react-icons/md"

const SnackBar = forwardRef((props, ref) => {
  const [show_snack_bar, set_show_snack_bar] = useState(false)

  useImperativeHandle(ref, () => ({
    show() {
      set_show_snack_bar(true)
      setTimeout(() => {
        set_show_snack_bar(false)
      }, 120000)
    },
  }))
  return (
    <div
      className="snackbar"
      style={{ backgroundColor: props.isValid ? "#00F593" : "#FF0033" }}
      id={show_snack_bar ? "show_snack_bar" : "hide_snack_bar"}
    >
      <div className="icon">
        {props.isValid ? <AiFillCheckSquare /> : <MdCancel />}
      </div>
      <div className="message">{props.message}</div>
    </div>
  )
})

export default SnackBar
