import { useRef } from "react"

export default function RefCounter() {
  let counterRef = useRef(0)

  function handleClick() {
    counterRef.current = counterRef.current + 1
    alert("You clicked " + counterRef.current + " times!")
  }

  return (
    <button onClick={handleClick} className="btn btn-outline">
      Click Me!
    </button>
  )
}
