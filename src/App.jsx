import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";

function App() {

  const [city, setCity] = useState("Paris");

  const [view, setView] = useState('today')

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  
  const fetchWeather = async (city) => {
    
    setLoading(true);
    
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&days=5`);
      
      await new Promise((resolve) => setTimeout(resolve, 5000))

      const data = await response.json()
      
      console.log(data.location);
      
      setWeather(data)
    } catch (err) {
      
      setError(err.message)
      
    } finally {
      
      setLoading(false)
    }
  }
  
      useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
          
          fetchWeather(coords)
        }, 
        () => {
          fetchWeather(city)
        }
      )
    }, []
  )


  return (
    <>
    <header className="relative h-[20vh] flex flex-col justify-start items-start pl-10 pt-16 text-white ">
      <h1 className="font-[Montserrat] font-semibold text-5xl [text-shadow:0_2px_10px_rgb(0_0_0_/70%)]">Weatherly</h1>
      <p className="font-[Montserrat] font-medium mt-2 [text-shadow:0_2px_10px_rgb(0_0_0_/70%)]">Forecast you can trust.</p>
    </header>
    <main>
      <SearchBar onSearch={(newCity) => {
          setCity(newCity)
          fetchWeather(newCity)
        }} />

          {loading && <p className="font-[Montserrat] font-medium text-2xl w-full text-center my-20 [text-shadow:0_2px_10px_rgb(0_0_0_/70%)] text-white">Loading...</p>}
          {/* { <pre>{JSON.stringify(weather, null, 2)}</pre> } */}
          {weather && view === 'today' && <CurrentWeather weather={weather} />} 
          {/* O weather && garante que o componente só renderiza quando os dados já chegaram. */}
          {weather && view ==='forecast' && <ForecastList forecast={weather.forecast.forecastday} />}  
      <div className="mt-5 flex justify-center text-white" >
          <button type="button" onClick={() => setView('today')}
          className="font-[Montserrat] font-medium [text-shadow:0_2px_10px_rgb(0_0_0_/70%)] pr-5 cursor-pointer">Today</button>
          <>|</>
          <button type="button" onClick={() => setView('forecast')}
          className="font-[Montserrat] font-medium [text-shadow:0_2px_10px_rgb(0_0_0_/70%)] pl-5 cursor-pointer">Next 5 days</button>      
      </div>
    </main>
    </> 
)
}

export default App
