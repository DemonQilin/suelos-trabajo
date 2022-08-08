import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
