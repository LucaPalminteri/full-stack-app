import { useState } from 'react'
import ShowBlog from './components/ShowBlog.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ShowBlog />
    </div>
  )
}

export default App
