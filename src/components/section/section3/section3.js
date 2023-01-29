import React from 'react'
import Advantages from '../../module/advantages/advantages'
import styles from './section3.module.css'

const Section3 = () => {
    return (
        <div className={`${styles.section3}`}>
            <div className={`${styles.sectionTitle}`}>
                <h3 className="text-center fw-bold">
                    Keunggulan Kami
                </h3>
                <p className="text-center">
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.
                </p>
            </div>
            <div>
                <Advantages />
            </div>
        </div>
    )
}

export default Section3