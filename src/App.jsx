import './App.css'
import { Routes, Route} from 'react-router-dom'
import PagClimaHome from './assets/components/pags/pagClimaHome';
import PagClima from './assets/components/pags/pagClima';
import {WeatherProvider} from './assets/components/js/WeatherContext'

function App() {

  return (
      <>
        <WeatherProvider>
          <Routes>
              <Route path='/' element={<PagClimaHome/>}/>
              <Route path='/PagClima' element={<PagClima/>}/>
          </Routes>
        </WeatherProvider>
      </>
  )
}

export default App
