import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";


export default function Countries()
{
    const [countries, setCountries] = useState([]);
    const url = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setCountries(data))
    }, [])

    console.log(countries)


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map((country) => <Country country={country}></Country>)
            }
        </div>
    )
}
