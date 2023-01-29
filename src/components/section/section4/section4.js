import React from 'react'
import styles from './section4.module.css'

const Section4 = () => {
    return (
        <div className={`${styles.section4}`}>
            <div className={`${styles.sectionLeft}`}>
                <div className={`${styles.sectionText}`}>
                    <h1>
                        Berbagai Metode Pengiriman
                    </h1>
                    <p>
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.
                    </p>
                </div>
            </div>
            <div className={`${styles.sectionRight}`}>
                <div className={`${styles.bgRed}`}>
                </div>
                <div className={`${styles.fishAndPhone}`}>
                    <div className={`${styles.fishContainer}`}>
                        <img
                            alt=""
                            src="/assets/img/fish-2.png"
                        />
                    </div>
                    <div className={`${styles.phoneContainer}`}>
                        <img
                            alt=""
                            src="/assets/img/phone-2.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4