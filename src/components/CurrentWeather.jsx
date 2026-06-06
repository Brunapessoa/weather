function CurrentWeather({ weather }) {

    return (
        <div className="bg-white w-fit m-auto mt-15 p-10 rounded-lg">
            <div className="w-fit m-auto">
            {weather.location.name}
            </div>
            <div className="p-10">
            {weather.current.temp_c}
            </div>
            <div className="p-10">
            {weather.current.condition.text}
            </div>
        </div>
    )
}

export default CurrentWeather