import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Localizacion from './components/Localizacion'
import Footer from './components/Footer'
import MarcoReferencia from './components/MarcoReferencia/MarcoReferencia'
import Geomorfologia from './components/MarcoReferencia/Geomorfologia'
import Geologia from './components/MarcoReferencia/Geologia'
import Hidrologia from './components/MarcoReferencia/Hidrologia'
import UnidadesSuperficiales from './components/MarcoReferencia/UnidadesSuperficiales'

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
            <Route path='geologia' element={<Geologia />} />
            <Route path='unidades-superficiales' element={<UnidadesSuperficiales />} />
            <Route path='usos-del-suelo' element={<div>Usos del suelo</div>} />
            <Route path='hidrologia' element={<Hidrologia/>} />
          </Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
