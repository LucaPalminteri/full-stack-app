import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowBlog from './components/ShowBlog.jsx'
import CreateBlog from './components/CreateBlog.jsx'
import EditBlog from './components/EditBlog.jsx'
import './styles.css'


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ShowBlog />}/>
            <Route path='/create' element={<CreateBlog />} />
            <Route path='/edit/:id' element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
