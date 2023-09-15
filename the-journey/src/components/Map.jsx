import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h3>
        Position: {lat} {lng}
      </h3>
      <button
        onClick={() =>
          setSearchParams({
            lat: 23,
            lng: 50,
          })
        }
      >
        chnage pos
      </button>
    </div>
  );
}
