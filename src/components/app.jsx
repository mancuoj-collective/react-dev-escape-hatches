import Chat from './chat'
import DebouncedButton from './debounced-button'
import RefCounter from './ref-counter'
import Stopwatch from './stopwatch'

export default function App() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-slate-800 text-slate-200">
      <div className="flex w-96 flex-col gap-5">
        <RefCounter />
        <Stopwatch />
        <div className="flex gap-3">
          <DebouncedButton onClick={() => alert('Spaceship launched!')}>Launch the spaceship</DebouncedButton>
          <DebouncedButton onClick={() => alert('Soup boiled!')}>Boil the soup</DebouncedButton>
          <DebouncedButton onClick={() => alert('Lullaby sung!')}>Sing a lullaby</DebouncedButton>
        </div>
        <Chat />
      </div>
    </div>
  )
}
