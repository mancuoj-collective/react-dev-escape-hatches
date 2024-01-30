import { useRef } from 'react'

export default function DebouncedButton({ onClick, children }) {
  const timeRef = useRef(null)

  function handleClick() {
    clearTimeout(timeRef.current)
    timeRef.current = setTimeout(() => {
      onClick()
    }, 1000)
  }

  return <button onClick={handleClick}>{children}</button>
}
