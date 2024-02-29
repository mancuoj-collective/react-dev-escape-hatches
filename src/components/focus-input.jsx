import { forwardRef, useImperativeHandle, useRef } from "react"

export default function FocusInput() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <div className="join">
      <MyInput ref={inputRef} />
      <button className="btn btn-outline join-item" onClick={handleClick}>
        Focus the input
      </button>
    </div>
  )
}

const MyInput = forwardRef((props, ref) => {
  return (
    <input
      className="input join-item input-bordered w-full"
      {...props}
      ref={ref}
    />
  )
})

const MyImperativeInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null)
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus()
    },
  }))
  return <input {...props} ref={realInputRef} />
})
