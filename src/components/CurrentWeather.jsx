function CurrentWeather({ weather }) {



    return (
        <div>
            {weather.current.temp_c}
            {weather.current.condition.text}
        </div>
    )
}

export default CurrentWeather