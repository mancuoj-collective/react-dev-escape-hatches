import { useRef, useState } from "react"

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)
  let secondsPassed = 0

  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000
  }

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  return (
    <div className="flex">
      <div className="stat">
        <div className="stat-title">Time Passed</div>
        <div className="stat-value">{secondsPassed.toFixed(3)}</div>
      </div>
      <div className="join join-vertical">
        <button className="btn join-item" onClick={handleStart}>
          Start
        </button>
        <button className="btn join-item" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  )
}
