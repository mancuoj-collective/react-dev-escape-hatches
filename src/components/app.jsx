import RefCounter from './ref-counter'
import Stopwatch from './stopwatch'

export default function App() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-slate-800 text-slate-200">
      <div className="flex w-64 flex-col gap-5">
        <RefCounter />
        <Stopwatch />
      </div>
    </div>
  )
}
