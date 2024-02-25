import { useRef, useState } from "react"

export default function Chat() {
  const [text, setText] = useState("")
  const textRef = useRef(text)

  function handleChange(e) {
    setText(e.target.value)
    textRef.current = e.target.value
  }

  function handleClick() {
    setTimeout(() => {
      alert("Sending: " + textRef.current)
    }, 3000)
  }

  return (
    <div className="join">
      <input
        className="input join-item input-bordered w-full"
        value={text}
        onChange={handleChange}
      />
      <button className="btn btn-outline join-item" onClick={handleClick}>
        Send
      </button>
    </div>
  )
}
