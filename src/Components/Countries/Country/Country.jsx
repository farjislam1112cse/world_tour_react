'use server';

import { useState } from 'react';
import './country.css'
const Country = ({ country ,handlerVisitedCounties , handlerVisitedFlag}) => {
    const { name, flags} = country;
    console.log(country);

    const [visited, setVisited] = useState(false)
   

  
    const handlerVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`card ${visited && "visited"}`}>
           
            <p>Country name : {name.common}</p>
            <p></p>
            <img src={flags.png} alt="" />
            <button onClick={handlerVisited}>
                mark as visited
            </button>
            <p>  {
                visited ? 'done ' : 'i want visit' 
            }
            </p>
            <button onClick={() =>handlerVisitedCounties(country)}>Add to list</button>
            <button onClick={() => handlerVisitedFlag(country.flags.png)}>see flag</button>
        </div>
    );
};

export default Country;
