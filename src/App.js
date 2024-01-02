import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryInfoApp = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div style={{textAlign: "center"}}>
      <h1>Country Information Live</h1>
      <ul>
        {countries.map((country) => (
          <p style={{fontSize: "20px"}} key={country.cca2}>
            <h2>{country.name.common}</h2>
            <img src={country.flags.svg} alt={`${country.name.common} Flag`} width="100" height="50" />
            <p>Population: {country.population}</p>
            <p>Area: {country.area} square kilometers</p>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default CountryInfoApp;
