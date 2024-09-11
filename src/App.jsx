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
              <Route path='/WeatherAPI_react_vite_deploy' element={<PagClimaHome/>}/>
              <Route path='/WeatherAPI_react_vite_deploy/PagClima' element={<PagClima/>}/>
          </Routes>
        </WeatherProvider>
      </>
  )
}

export default App
