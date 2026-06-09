function CurrentWeather({ weather, cityImg }) {

    return (
        <div className={`relative grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-4 w-90 lg:w-140 h-140 m-auto mt-15 p-10 rounded-lg bg-cover ${cityImg ? '' : 'bg-gray-600/70'}`}
            style={cityImg 
            ? { backgroundImage: `url(${cityImg})`} 
            : {backgroundImage: `url(${import.meta.env.BASE_URL}colina.jpg)`, backgroundPosition: 'center 40%'}}>
            <div className="col-span-2 text-center w-fit mx-auto">
                <div className="col-span-2 text-center w-fit mx-auto px-1 py-0.5 rounded-sm text-2xl text-white bg-gray-600/50 [text-shadow:0_2px_10px_rgb(0_0_0_/70%)]">
                {weather.location.name}, {weather.location.region}
                </div>
                {!cityImg && (<p className="absolute top-1/3 left-1/2 -translate-x-1/2 px-1 text-white text-lg bg-gray-600/50 ">No city image available</p>)}

            </div>
            <div className="col-start-2 self-end justify-self-end rounded-sm text-right px-2 py-1 text-white  bg-gray-600/50 [text-shadow:0_2px_10px_rgb(0_0_0_/70%)]
">
                <div className="text-5xl">
                {Math.round(weather.current.temp_c)}<span className="text-lg align-top">°</span>
                </div>
                <div className="w-fit m-auto">
                {weather.current.condition.text}
                </div>
            </div>
            <div className="col-span-2 text-center text-sm py-1 px-2 w-fit mx-auto text-white rounded-sm bg-gray-600/70 [text-shadow:0_2px_10px_rgb(0_0_0_/70%)]">
                Max: {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}° | Min: {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}° 
            </div>
        </div>
    )
}

export default CurrentWeather