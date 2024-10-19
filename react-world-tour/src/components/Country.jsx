export default function Country ({country})
{
    const {name, population, region, startOfWeek, subregion} = country;

    const countryStyle = {
        border: 'solid 2px gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    console.log(country)
    return(
        <div style={countryStyle}>
            <h1>{name.common}</h1>
            <h2>{population}</h2>
            <h3>{region}</h3>
            <h4>{startOfWeek}</h4>
            <h4>{subregion}</h4>
        </div>
    )
}