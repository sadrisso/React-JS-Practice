import { useState } from 'react';
import './Country.css'


export default function Country ({country, handleCountryVisited, handleFlagChnage})
{
    const {name, flags} = country;

    console.log(country)

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return(
        <div className={`${visited ? "visited" : "country"}`}>
            <h1>{name?.common}</h1>
            <img src={flags?.png} alt="" />
            <button onClick={() => handleCountryVisited(country)}>Mark as Visited</button>
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            <button onClick={() => handleFlagChnage(country.flags.png)}>Add Flag</button>
            <br />
            {visited ? "I have visited" : "I want to go"}
        </div>
    )
}