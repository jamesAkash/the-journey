import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

export default function CountriesList({ cities, isLoading }) {
  const countries = cities?.map((city) => city.country);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  return (
    <ul className={styles.cityList}>
      {countries.map((country, i) => (
        <p key={i}>{country}</p>
      ))}
    </ul>
  );
}
