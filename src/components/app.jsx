import RefCounter from "./ref-counter"
import DebouncedButtons from "./debounced-button"
import Stopwatch from "./stopwatch"
import Chat from "./chat"

export default function App() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="flex flex-col gap-5">
        <RefCounter />
        <div className="divider"></div>
        <Stopwatch />
        <div className="divider"></div>
        <DebouncedButtons />
        <div className="divider"></div>
        <Chat />
      </div>
    </div>
  )
}
