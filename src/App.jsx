import { useEffect, useState } from "react"

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
    <h1 className='text-3xl font-bold text-blue-500'>
      Tailwind funcionando!
      </h1>
      <pre>{JSON.stringify(weather, null, 2)}</pre>

    </> 

  )
}

export default App
