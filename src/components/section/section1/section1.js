import React from 'react'
import AppStore from '../../module/download/appStore'
import GooglePlay from '../../module/download/googlePlay'
import UserAndFeatureCount from '../../module/userAndFeatureCount/userAndFeatureCount'
import styles from './section1.module.css'

const Section1 = () => {
    return (
        <div className={`${styles.section1}`}>
            <div className={`${styles.sectionLeft}`}>
                <div className={`${styles.sectionText}`}>
                    <h1>
                        Kirim berbagai jenis ikan dengan mudah
                    </h1>
                    <p>
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                </div>
                <div className={`${styles.download}`}>
                    <GooglePlay />
                    <AppStore />
                </div>
                <div className={`${styles.counting}`}>
                    <UserAndFeatureCount />
                </div>
            </div>
            <div className={`${styles.sectionRight}`}>
                <div className={`${styles.bgRed}`}>
                </div>
                <div className={`${styles.fishAndPhone}`}>
                    <div className={`${styles.fishContainer}`}>
                        <img
                            alt=""
                            src="/assets/img/fish-1.png"
                        />
                    </div>
                    <div className={`${styles.phoneContainer}`}>
                        <img
                            alt=""
                            src="/assets/img/phone-1.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1