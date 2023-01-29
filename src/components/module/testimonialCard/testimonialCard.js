import React from 'react'
import styles from './testimonialCard.module.css'

const TestimonialCard = ({ avatar, name, text, key }) => {
    return (
        <div className={`${styles.testimonialCard}`} key={key}>
            <div className={`${styles.userAndStars}`}>
                <div className={`${styles.user}`}>
                    <img
                        alt={name}
                        src={avatar}
                    />
                    <h5>
                        {name}
                    </h5>
                </div>
                <div className={`${styles.stars}`}>
                    <img
                        alt='star'
                        src='/assets/icons/star.png'
                    />
                    <img
                        alt='star'
                        src='/assets/icons/star.png'
                    />
                    <img
                        alt='star'
                        src='/assets/icons/star.png'
                    />
                    <img
                        alt='star'
                        src='/assets/icons/star.png'
                    />
                    <img
                        alt='star'
                        src='/assets/icons/star.png'
                    />
                </div>
            </div>
            <div className={`${styles.comment}`}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard