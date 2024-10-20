import { useState } from 'react';
import './Country.css'
export default function Country ({country, handleCountryVisited})
{
    const {name, flags} = country;

    console.log(country)
    console.log(handleCountryVisited)

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
            {visited ? "I have visited" : "I want to go"}
        </div>
    )
}