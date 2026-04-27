import { Routes, Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
