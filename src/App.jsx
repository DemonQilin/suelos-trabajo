import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Localizacion from './components/Localizacion'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/localizacion' element={<Localizacion />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
