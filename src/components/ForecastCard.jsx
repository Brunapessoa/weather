function ForecastCard({ nextDay }) {

    return (
            <li className=" text-white [text-shadow:0_2px_10px_rgb(0_0_0_/70%)] my-2 ">
                <div className="grid grid-cols-3 bg-gray-800/70 px-2 py-5 rounded-sm text-md">
                    <div className="text-center">         
                        {nextDay.date}
                    </div>
                    <div className="text-right"> 
                        {nextDay.day.maxtemp_c}<span className="text-xs align-top">°C</span> 
                    </div>
                    <div className="text-right"> 
                        {nextDay.day.mintemp_c}<span className="text-xs align-top">°C</span> 
                    </div>
                </div>
            </li>
    )
}

export default ForecastCard;5