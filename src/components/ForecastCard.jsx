function ForecastCard({ nextDay }) {

    return (
            <tr>
                <td>         
                    {nextDay.date}
                </td>
                <td> 
                    {nextDay.day.maxtemp_c}
                </td>
                <td> 
                    {nextDay.day.mintemp_c}
                    </td>
            </tr>
    )
}

export default ForecastCard;