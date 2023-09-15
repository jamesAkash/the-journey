import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

export default function CountriesList({ cities, isLoading }) {
  //   const countries = cities?.map((city) => city.country);
  //   const countries = cities.reducer((acc,cur)=>
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        {
          country: city.country,
          emoji: city.emoji,
          id: arr.length + 1,
        },
      ];
    else return arr;
  }, []);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
