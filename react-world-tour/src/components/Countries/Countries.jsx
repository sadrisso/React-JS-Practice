import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


export default function Countries()
{
    const [countries, setCountries] = useState([]);
    const url = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setCountries(data))
    }, [])

    console.log(countries)

    const [countriesVisited, setCountriesVisited] = useState([]);

    const handleCountryVisited = (country) => {
        console.log("add this to your visited country")
        const newVisitedCountries = [...countriesVisited, country];
        setCountriesVisited(newVisitedCountries)
    }


    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
            <h4>Visited Countries: {countriesVisited.length}</h4>
            <ol>
                {countriesVisited.map((country) => <li>{country.name.common}</li>)}
            </ol>
            <div className="country-container">
                {
                    countries.map((country) => <Country
                    key={country?.ccn3}
                    country={country}
                    handleCountryVisited={handleCountryVisited}>
                    </Country>)
                }
            </div>
        </div>
    )
}
