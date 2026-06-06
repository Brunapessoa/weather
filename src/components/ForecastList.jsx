import ForecastCard from "./ForecastCard";

function ForecastList({ forecast }) {

    return(
        <div className="w-3/4 mx-auto">
            {forecast.map((day) => (
                <ForecastCard key={day.date} nextDay={day}/>
            ))}
        </div>
    )
}

export default ForecastList;