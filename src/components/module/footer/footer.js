import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.company}`}>
                    <div className={`${styles.logoContainer}`}>
                        <img
                            alt='logo'
                            src='/assets/img/logo.png'
                        />
                    </div>
                    <p>
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.
                    </p>
                    <div className={`${styles.social}`}>
                        <div className={`${styles.iconContainer}`}>
                            <img
                                alt='facebook'
                                src='/assets/icons/facebook.png'
                            />
                        </div>
                        <div className={`${styles.iconContainer}`}>
                            <img
                                alt='twitter'
                                src='/assets/icons/twitter.png'
                            />
                        </div>
                        <div className={`${styles.iconContainer}`}>
                            <img
                                alt='instagram'
                                src='/assets/icons/instagram.png'
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.menuAndContact}`}>
                    <div className={`${styles.menu}`}>
                        <h5>
                            Menu Bantuan
                        </h5>
                        <p>
                            Keunggulan
                        </p>
                        <p>
                            Fitur Aplikasi
                        </p>
                        <p>
                            Testimoni
                        </p>
                    </div>
                    <div className={`${styles.contact}`}>
                        <h5>
                            Informasi Kontak
                        </h5>
                        <p>
                            0812-9797-1227
                        </p>
                        <p>
                            0812-9797-1227
                        </p>
                        <p>
                            Jbgtranshipping@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${styles.copyright}`}>
                <p>
                    All rights reserved@2022
                </p>
            </div>
        </div>
    )
}

export default Footer