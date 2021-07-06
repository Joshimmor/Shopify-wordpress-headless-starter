import React from 'react';
import SlickSlider from './SlickSlider';
import Slider_Data from "./Data/Slider_Data";
import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
    return (
        <div className={styles.HeroWrapper}>
            <SlickSlider Slider_Data={Slider_Data}/>
        </div>
    )
}
