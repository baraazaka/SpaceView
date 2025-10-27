import React, { useState } from "react";
import styles from "./Explore.module.css";
import SearchBar from "./SearchBar.jsx"; 
import planets from "./PlanetsData.js"; 
import PlanetCard from "./PlanetCard.jsx";
import axios from "axios";

export default function Explore() {
  const [planetData, setPlanetData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // دالة عرض حالة التحميل أو الخطأ
  const renderStates = () => {
    if (loading) return <p style={{ color: "#00bfff" }}>Loading...</p>;
    if (error) return <p style={{ color: "#ff7b7b" }}>{error}</p>;
    return null;
  };

const handleSearch = (planetKey) => {
  console.log("search requested for:", planetKey);

  if (!planetKey || !planets[planetKey]) {
    setError("Planet not found!");
    setPlanetData(null);
    return;
  }

  setError("");
  setPlanetData(planets[planetKey]);
};


  
  return (
    <section className={styles.exploreSection}>
      <div className={styles.containerExplore}>
        <h1 className={styles.title}>Explore the Universe 🌌</h1>
        <p className={styles.subtitle}>
          Type a planet name (e.g. mars) to fetch real data.
        </p>

        <SearchBar planets={planets} onSearch={handleSearch} />

        {renderStates()}

        {planetData && <PlanetCard data={planetData} />}
      </div>
    </section>
  );
}
