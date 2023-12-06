

import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [viitedCountries, setVisitedCountres] = useState([]);
    const [visitedFlags , setVisitedFlags] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    const handlerVisitedCounties = country=> {
        const newVisitedCountries = [...viitedCountries, country];
        setVisitedCountres(newVisitedCountries);
    }

    const handlerVisitedFlag = flag =>{
        const newVisitedFlags = [...visitedFlags , flag];
        setVisitedFlags(newVisitedFlags)
        console.log(flag);
    }
    return (
        <div >
            <h3>Total:{countries.length}</h3>
            <div> 
                <h5>visited countires:{viitedCountries.length}</h5>
                <ul>
                    {
                       viitedCountries.map(country=><li>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                  visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className="card-container">
                {
                    countries.map(country => <Country country={country} handlerVisitedCounties={handlerVisitedCounties} handlerVisitedFlag = {handlerVisitedFlag} ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;