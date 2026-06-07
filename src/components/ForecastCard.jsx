function ForecastCard({ nextDay }) {

    return (
            <li className="text-white [text-shadow:0_2px_10px_rgb(0_0_0_/70%)] my-2 ">
                <div className="grid grid-cols-3  bg-gray-800/80 px-2 py-5 rounded-sm text-md">
                    <div className="text-center">         
                        {nextDay.date.split('-').reverse().join('-')}
                    </div>
                    <div className="text-center"> 
                        {Math.round(nextDay.day.maxtemp_c)}° 
                    </div>
                    <div className="text-center"> 
                        {Math.round(nextDay.day.mintemp_c)}° 
                    </div>
                </div>
            </li>
    )
}

export default ForecastCard;5