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
    <header className="relative h-[20vh] flex flex-col justify-start items-start pl-10 pt-16 text-white ">
      <h1 className="font-[Montserrat] font-semibold text-5xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_70%)]">Weatherly</h1>
      <p className="font-[Montserrat] font-medium mt-2 [text-shadow:_0_2px_10px_rgb(0_0_0_/_70%)]">Forecast you can trust.</p>
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
