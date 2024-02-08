import React from 'react';

import styles from "../../styles/home.module.css";

import BG from "../../images/computer.png" 


const Poster = () => (
    <section className={styles.home}>
        <div className={styles.title}>BIG SALE 70%</div>
        <div className={styles.product}>
            <div className={styles.text}>
                <div className={styles.subtitle}>the bestseller of 2024</div>
                <h1 className={styles.head}>LENNON r2d2 mith NVIDIA 5090 TI</h1>
                <button className={styles.button}>Shop Now</button>
            </div>
            <div className={styles.image}>
                <img src={BG} alt="" />
            </div>
        </div>
    </section>
  )


export default Poster