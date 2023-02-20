import React, { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);


  //return all countrie
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })
    // console.log(allCountries);

    //removing duplicating country
    const uniqueCountru = ['Location (any)', ...new Set(allCountries)];
    // console.log(uniqueCountru);
    setCountries(uniqueCountru);
  }, [])


  //return all properties
  useEffect(() => {
    const allproperty = houses.map((house) => {
      return house.type;
    })
    // console.log(allCountries);

    //removing duplicating country
    const UniqueProperty = ['Location (any)', ...new Set(allproperty)];
    // console.log(UniqueProperty);
    setProperties(UniqueProperty);
  }, []);

  const handlClick = () => {
    console.log(country, property, price);
  }
  return <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handlClick,
  }}>
    {children}</HouseContext.Provider>;
};

export default HouseContextProvider;
