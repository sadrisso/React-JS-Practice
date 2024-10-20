import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


export default function Countries()
{
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then(data => setCountries(data))
    }, [])


    const [countriesVisited, setCountriesVisited] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleCountryVisited = (country) => {
        const newVisitedCountries = [...countriesVisited, country];
        setCountriesVisited(newVisitedCountries)
    }

    const handleFlagChnage = (flag) => {
        console.log("Changing flags..")
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag)
    }


    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
            <h4>Visited Countries: {countriesVisited.length}</h4>
            <ol>
                {countriesVisited.map((country) => <li>{country.name.common}</li>)}
            </ol>
            <div>
                {visitedFlags.map((flag) => <img src={flag} className="flag"></img>)}
            </div>
            <div className="country-container">
                {
                    countries.map((country) => <Country key={country?.ccn3} country={country} handleCountryVisited={handleCountryVisited}
                    handleFlagChnage={handleFlagChnage}></Country>)
                }
            </div>
        </div>
    )
}
