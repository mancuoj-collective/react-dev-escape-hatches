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
    <div className="flex gap-3 border p-3">
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}
