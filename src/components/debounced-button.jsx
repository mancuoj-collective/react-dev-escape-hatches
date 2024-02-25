import { useRef } from "react"

function DebouncedButton({ onClick, children }) {
  const timeRef = useRef(null)

  function handleClick() {
    clearTimeout(timeRef.current)
    timeRef.current = setTimeout(() => {
      onClick()
    }, 1000)
  }

  return (
    <button className="btn join-item" onClick={handleClick}>
      {children}
    </button>
  )
}

export default function DebouncedButtons() {
  return (
    <div className="join">
      <DebouncedButton onClick={() => alert("Spaceship launched!")}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Soup boiled!")}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Lullaby sung!")}>
        Sing a lullaby
      </DebouncedButton>
    </div>
  )
}
