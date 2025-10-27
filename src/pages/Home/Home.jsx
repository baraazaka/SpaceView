import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import planet from "../../assets/planet.png";

export default function Home() {
  return (
    <>
      <section className={styles.HomeSection}>
        <div className={styles.containerHome}>
            <span className={styles.title}><span>S</span>pace<span>V</span>iew</span>
          <div className={styles.rowHome}>
            
            <div className={styles.leftHome}>
              <p>
                <span className={styles.WelcomeHome}>Welcome to the world of space</span><br/> This is where space exploration
                and exploration are explored. <br/>To begin your journey into space,<br/>
                click the  <span className={styles.buttonSpan} >button</span> below.
              </p>
              <Link className={styles.buttonHome} to="/explore"> Explore now</Link>
            </div>
            <div className={styles.planetContainer}>
              <img src={planet} alt="planet" className={styles.planet} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
