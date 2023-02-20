import React, { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  //return all countrie
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // console.log(allCountries);

    //removing duplicating country
    const uniqueCountru = ["Location (any)", ...new Set(allCountries)];
    // console.log(uniqueCountru);
    setCountries(uniqueCountru);
  }, []);

  //return all properties
  useEffect(() => {
    const allproperty = houses.map((house) => {
      return house.type;
    });
    // console.log(allCountries);

    //removing duplicating country
    const UniqueProperty = ["Location (any)", ...new Set(allproperty)];
    // console.log(UniqueProperty);
    setProperties(UniqueProperty);
  }, []);

  const handlClick = () => {
    //setLoading
    setLoading(true);
    //create a funtion that chekes if the string take any
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    //get first value of price and pase it to number
    const minPrice = price.split(" ")[0];

    //get second value of price which is the maximum price
    const maxPrice = price.split(" ")[2];
    console.log(maxPrice);

    const newHouse = housesData.filter((houses) => {
      const housePrice = parseInt(houses.price);

      //if all values are selected
      if (
        houses.country === country &&
        houses.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return houses;
      }

      //if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return houses;
      }

      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return houses.country === country;
      }

      // if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return houses.type === property;
      }

      //if price is not defalult
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return houses;
        }
      }
      // if country &  property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return houses.country === country && houses.type === property;
      }

      // if country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return houses.country === country;
        }
      }

      //property and price is not default
      if (!isDefault(property) && isDefault(country) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return houses.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouse.length < 1 ? setHouses([]) : setHouses(newHouse),
        setLoading(false)
      );
    }, 1000);
  };
  return (
    <HouseContext.Provider
      value={{
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
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
