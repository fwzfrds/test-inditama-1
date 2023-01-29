import React from 'react'
import styles from './section2.module.css'

const Section2 = () => {
    return (
        <div className={`${styles.section2}`}>
            <div className={`${styles.tracking}`}>
                <h4>
                    Lacak Pengiriman Anda
                </h4>
                <p>
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text
                </p>
                <div>
                    <input
                        placeholder='Lacak Pengiriman'
                    />
                    <button>
                        Lacak
                    </button>
                </div>
            </div>
            <div className={`${styles.price}`}>
                <h4>
                    Cek Tarif Pengiriman Anda
                </h4>
                <div className={`${styles.forms}`}>
                    <input 
                        placeholder='Origin'
                    />
                    <input 
                        placeholder='Destination'
                    />
                </div>
                <button>
                    Check
                </button>
            </div>
        </div>
    )
}

export default Section2