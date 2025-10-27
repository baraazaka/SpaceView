import axios from "axios";
import React, { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchNASA = async () => {
      const res = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=J3Kixjn4pb5nhLGTShFRyaJag3zguuhs1diHXq2n"
      );
      setData(res.data);
    };
    fetchNASA();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>{data.title}</h1>
      <img src={data.url} alt={data.title} style={{ width: "70%", borderRadius: "10px" }} />
      <p>{data.explanation}</p>
    </div>
  );
}
