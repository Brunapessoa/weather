function CurrentWeather({ weather }) {



    return (
        <div className="w-fit m-auto mt-15">
            <div className="">
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