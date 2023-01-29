import React from 'react'
import styles from './advantages.module.css'

const Advantages = () => {
    return (
        <div className={`${styles.advantages}`}>
            <div className={`${styles.card}`}>
                <div className={`${styles.logoContainer}`}>
                    <img
                        alt="icon"
                        src="/assets/icons/worldwide.png"
                    />
                </div>
                <h5>
                    Kirim Ke Berbagai Negara
                </h5>
                <p className='text-center'>
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>
            <div className={`${styles.card}`}>
                <div className={`${styles.logoContainer}`}>
                    <img
                        alt="icon"
                        src="/assets/icons/easy.png"
                    />
                </div>
                <h5>
                    Mudah Di Gunakan
                </h5>
                <p className='text-center'>
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>
            <div className={`${styles.card}`}>
                <div className={`${styles.logoContainer}`}>
                    <img
                        alt="icon"
                        src="/assets/icons/safe.png"
                    />
                </div>
                <h5>
                    Pengiriman Aman
                </h5>
                <p className='text-center'>
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>
        </div>
    )
}

export default Advantages