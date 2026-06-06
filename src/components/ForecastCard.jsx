function ForecastCard({ nextDay }) {

    return (
        
        <div className="w-full grid grid-cols-3 mt-15">
        <p>         
            {nextDay.date}
        </p>
        <p> 
            {nextDay.day.maxtemp_c}
        </p>
        <p> 
            {nextDay.day.mintemp_c}
            </p>
        </div>



    )
}

export default ForecastCard;