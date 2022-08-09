import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Localizacion from './components/Localizacion'
import Footer from './components/Footer'
import MarcoReferencia from './components/MarcoReferencia/MarcoReferencia'
import Geomorfologia from './components/MarcoReferencia/Geomorfologia'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/localizacion' element={<Localizacion />} />
          <Route path='/marco' element={<MarcoReferencia />}>
            <Route path='geomorfologia' element={<Geomorfologia/>}/>
          </Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
