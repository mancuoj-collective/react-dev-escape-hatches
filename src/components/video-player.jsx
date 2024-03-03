import { useRef, useState } from "react"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)

  function handleClick() {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if (nextIsPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <button className="btn btn-outline w-full" onClick={handleClick}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <video
        className="w-full rounded"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}
