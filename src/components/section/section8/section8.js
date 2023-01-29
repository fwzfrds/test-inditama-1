import React from 'react'
import AppStore from '../../module/download/appStore'
import GooglePlay from '../../module/download/googlePlay'
import styles from './section8.module.css'

const Section8 = () => {
    return (
        <div className={`${styles.section8}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.contentLeft}`}>
                    <h3>
                        Available and Download Anytime!
                    </h3>
                    <p>
                        A Lorem Ipsum is simply dummy text of the printing and
                    </p>
                    <div className={`${styles.download}`}>
                        <GooglePlay />
                        <AppStore />
                    </div>
                </div>
                <div className={`${styles.contentRight}`}>
                    <div>
                        <img
                            alt="courier"
                            src="/assets/img/man.png"
                        />
                    </div>
                </div>
                <div className={`${styles.bgRed}`}>
                </div>
            </div>
        </div>
    )
}

export default Section8