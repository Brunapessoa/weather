import ForecastCard from "./ForecastCard";

function ForecastList({ forecast }) {

    return(
        <div className="bg-white w-90 h-120 m-auto mt-15 p-10 rounded-lg">
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Max</th>
                    <th>Min</th>
                </tr>
                </thead>
                <tbody>
                        {forecast.map((day) => (
                        <ForecastCard key={day.date} nextDay={day}/>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default ForecastList;