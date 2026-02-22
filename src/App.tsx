import './App.css'
import { MuscleGroupSelector } from './components/MuscleGroupSelector'

function App() {
  return (
    <main>
      <MuscleGroupSelector />
      <div className="info">
        <p>Uses React with TypeScript and CSS for the interactive muscle group selector.</p>
        <p>Try clicking the muscle groups or the labels to highlight them.</p>
        <p>Original design by <a href="http://ryanmpoe.com">Ryan M. Poe</a> (<a href="https://twitter.com/RyanPoe85">@RyanPoe85</a>) for <a href="http://w8mngr.com/">w8mngr.com</a></p>
      </div>
    </main>
  )
}

export default App
