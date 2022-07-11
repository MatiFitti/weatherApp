import './App.css';
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetail from './Components/TemperatureAndDetail';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './services/WheaterServices';
import { useEffect, useState } from 'react';
import Template from './Components/Template';



function App() {

  const [query, setQuery] = useState({q: 'Mar del Plata'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWheater = async() => {
      await getFormattedWeatherData({...query, units}).then((data) => setWeather(data));
    }
    fetchWheater();

  }, [query, units])

  const formatBackground = () => {
    if(!weather){
      return "from-cyan-700 to-blue-700"
    }
    const threshold = units === 'metric' ? 20 : 60
    if(weather.temp <= threshold) return "from-cyan-700 to-blue-700"

    return 'from-yellow-700 to-orange-700'
  }

  return (
    <div className={`mx-auto max-w-screen-md lg:mt-4 md:mt-4 xl:mt-4 2xl:mt-4 py-5 px-32 bg-gradient-to-br h-fit -mt-3 shadow-xl shadow-gray-400 ${formatBackground()}`}>
      {/* <div className='flex items-center justify-around'> */}
      <div>
        {/* <img src={img} alt="logo" className='w-12 absolute left-1/3' /> */}
        <TopButtons setQuery={setQuery} />
      </div>
      <Inputs  setQuery={setQuery} units={units} setUnits={setUnits} />

      { weather ? (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetail weather={weather} />

          <Forecast title={"hourly forecast"} items={weather.hourly}/>
          <Forecast title={"daily forecast"} items={weather.daily}/>
        </div>
      ) : (
        <Template />
      )}
    </div>
  );
}

export default App;
