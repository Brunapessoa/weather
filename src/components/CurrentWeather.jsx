function CurrentWeather({ weather, cityImg }) {

    return (
        <div className={`w-90 h-130 m-auto mt-15 p-10 rounded-lg bg-cover ${cityImg ? '' : 'bg-gray-600 opacity-50'}`}
            style={cityImg ? { backgroundImage: `url(${cityImg})`} : {}}>
            <div className="w-fit m-auto text-amber-50 bg-gray-600 opacity-50">
            {weather.location.name}
            </div>
            <div className="w-fit m-auto text-amber-50 bg-gray-600 opacity-50">
            {weather.location.region}
            </div>
            <div className="p-10 text-amber-50  bg-gray-600 opacity-50">
            {weather.current.temp_c}
            </div>
            <div className="w-fit m-auto text-amber-50 bg-gray-600 opacity-50">
            {weather.current.condition.text}
            </div>
        </div>
    )
}

export default CurrentWeather