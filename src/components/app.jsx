import RefCounter from "./ref-counter"
import DebouncedButtons from "./debounced-button"
import Stopwatch from "./stopwatch"
import Chat from "./chat"
import VideoPlayer from "./video-player"
import FocusInput from "./focus-input"

export default function App() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="flex w-[800px] flex-col gap-5 p-12">
        <RefCounter />
        <div className="divider"></div>
        <Stopwatch />
        <div className="divider"></div>
        <DebouncedButtons />
        <div className="divider"></div>
        <Chat />
        <div className="divider"></div>
        <VideoPlayer />
        <div className="divider"></div>
        <FocusInput />
      </div>
    </div>
  )
}
