import React from 'react'
import styles from './section5.module.css'

const Section5 = () => {
    return (
        <div className={`${styles.section5}`}>
            <div className={`${styles.sectionLeft}`}>
                <div className={`${styles.bgRed}`}>
                </div>
                <div className={`${styles.fishAndPhone}`}>
                    <div className={`${styles.phoneContainer}`}>
                        <img
                            alt=""
                            src="/assets/img/phone-3.png"
                        />
                    </div>
                    <div className={`${styles.fishContainer}`}>
                        <img
                            alt=""
                            src="/assets/img/fish-3.png"
                        />
                    </div>

                </div>
            </div>
            <div className={`${styles.sectionRight}`}>
                <div className={`${styles.sectionText}`}>
                    <h1>
                        Lacak status pengiriman
                        anda
                    </h1>
                    <p>
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown.
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section5