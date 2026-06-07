import ForecastCard from "./ForecastCard";

function ForecastList({ forecast, cityImg }) {

    return(
        <div className={`w-90 h-130 m-auto mt-15 p-10 rounded-lg bg-cover ${cityImg ? '' : 'bg-gray-600 opacity-50'}`}
            style={cityImg ? { backgroundImage: `url(${cityImg})`} : {}}>
            <table>
                <thead>
                <tr className="w-fit m-auto text-amber-50 bg-gray-600 opacity-50">
                    <th>Date</th>
                    <th>Max</th>
                    <th>Min</th>
                </tr>
                </thead>
                <tbody className="w-fit m-auto text-amber-50 bg-gray-600 opacity-50">
                        {forecast.map((day) => (
                        <ForecastCard key={day.date} nextDay={day}/>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default ForecastList;