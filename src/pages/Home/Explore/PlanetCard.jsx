import React from "react";
import styles from "./PlanetCard.module.css";

export default function PlanetCard({ data }) {
  return (
    <div className={styles.resultCard}>
      <img src={data.image} alt={data.name} className={styles.resultImage} />
      <div className={styles.resultBody}>
        <h2 className={styles.resultTitle}>{data.name}</h2>
        <p className={styles.resultDesc}>{data.description}</p>
        <ul className={styles.infoList}>
          <li><strong>Distance from Sun:</strong> {data.distance}</li>
          <li><strong>Radius:</strong> {data.radius}</li>
          <li><strong>Average Temperature:</strong> {data.temperature}</li>
        </ul>
      </div>
    </div>
  );
}
