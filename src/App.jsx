import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";

function App() {

  const [city, setCity] = useState("London");

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  
  useEffect(() => {

    fetchWeather(city)
  }, []
)
  
  const fetchWeather = async (city) => {
      
          setLoading(true);
      
          try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&days=5`);
      
            const data = await response.json()
      
            setWeather(data)
          } catch (err) {
      
            setError(err.message)
      
          } finally {
      
            setLoading(false)
          }
          }

  return (
    <>
    <header className="block w-full m-0 p-0 shadow-blue-400 shadow-md">
      <img src="/img-header-6.png" alt="weather app logo" className="w-full"/>
    </header>
    <main>
      <SearchBar onSearch={(newCity) => {
          setCity(newCity)
          fetchWeather(newCity)
      }} />
      {/* { <pre>{JSON.stringify(weather, null, 2)}</pre> } */}
      {weather && <CurrentWeather weather={weather} />} 
      {/* O weather && garante que o componente só renderiza quando os dados já chegaram. */}
      {weather && <ForecastList forecast={weather.forecast.forecastday} />}
    </main>


    </> 

)
}

export default App
