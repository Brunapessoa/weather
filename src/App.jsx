import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";

function App() {

  const [city, setCity] = useState("Paris");

  const [view, setView] = useState('today');

  const [cityImg, setCityImg] = useState(null);

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  
  const fetchWeather = async (city) => {
    
    setLoading(true);
    
    try {
      setError(null)
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&days=5`);
      
      if(!response.ok) {
        throw new Error('City not found. Please check the spelling and try again.')
      }

      const data = await response.json()
      console.log(data.location);
      
      setWeather(data)
      fetchCityImg(data.location.name)

    } catch (err) {

      setWeather(null)
      setError(err.message)
      
    } finally {
      
      setLoading(false)
    }
  }

  const fetchCityImg = async (city) => {

    try {
      setCityImg(null)
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${city} city&content_filter=high&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);

      if (!response.ok) {
        return
      }
      
      const data = await response.json();
      console.log(data);
      

      if (data.results.length > 0) {
        setCityImg(data.results[0].urls.regular)
      } else {
        setCityImg(null)
      }
    } catch {
      setCityImg(null)
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
    <header className="relative h-[20vh] flex flex-col justify-start items-start pl-10 lg:pl-40 pt-16 text-white ">
      <h1 className="font-[Montserrat] font-semibold text-5xl [text-shadow:0_2px_10px_rgb(0_0_0_/70%)]">Weatherly</h1>
      <p className="font-[Montserrat] font-medium mt-2 [text-shadow:0_2px_10px_rgb(0_0_0_/70%)]">Forecast you can trust.</p>
    </header>
    <main className="mt-5 pb-8 lg:pb-10">
      <SearchBar onSearch={(newCity) => {
          setCity(newCity)
          fetchCityImg(newCity)
          fetchWeather(newCity)
          
        }} />

          {loading && <p className="font-[Montserrat] font-medium text-2xl w-full text-center my-20 [text-shadow:0_2px_10px_rgb(0_0_0_/70%)] text-white">Loading...</p>}
          {error && <p className="font-[Montserrat] font-medium text-2xl w-full text-center my-20 mx-auto px-10 [text-shadow:0_2px_10px_rgb(0_0_0_/70%)] text-white">{error}</p>}
          {/* { <pre>{JSON.stringify(weather, null, 2)}</pre> } */}
          {!loading && weather && view === 'today' && <CurrentWeather weather={weather} cityImg={cityImg} />} 
          {/* O weather && garante que o componente só renderiza quando os dados já chegaram. */}
          {!loading && weather && view ==='forecast' && <ForecastList forecast={weather.forecast.forecastday} cityImg={cityImg}/>}  
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
