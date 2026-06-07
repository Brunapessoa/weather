import ForecastCard from "./ForecastCard";

function ForecastList({ forecast, cityImg }) {

    return(
        <div className={`w-90 h-130 m-auto mt-15 p-10 rounded-lg bg-cover ${cityImg ? '' : 'bg-gray-600/50'} text-white`}
            style={cityImg ? { backgroundImage: `url(${cityImg})`} : {}}>        
                <div className="grid grid-cols-3 px-2 py-2 rounded-sm bg-gray-800/70 text-white">
                    <div className="text-center">Date</div>
                    <div className="text-right">Max</div>
                    <div className="text-right">Min</div>
                </div>
                <ul className="grid grid-cols-1 w-full m-auto">
                        {forecast.map((day) => (
                        <ForecastCard key={day.date} nextDay={day}/>
                        ))}
                </ul>
        </div>
    )
}

export default ForecastList;