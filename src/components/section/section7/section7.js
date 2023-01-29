import React from 'react'
import TestimonialCard from '../../module/testimonialCard/testimonialCard'
import styles from './section7.module.css'
import './owlCarousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Section7 = () => {

    const testimonial = [
        {
            name: 'Floyd Miles',
            avatar: '/assets/img/floyd-miles.png',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            name: 'Ronald Richards',
            avatar: '/assets/img/ronald-richards.png',
            text: 'ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            name: 'Savannah Nguyen',
            avatar: '/assets/img/savannah-nguyen.png',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            name: 'Micah Richard',
            avatar: '/assets/img/micah-richard.png',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
    ]

    return (
        <div className={`${styles.section7}`}>
            <div className={`${styles.testiText}`}>
                <h3>
                    Testimonial
                </h3>
                <p>
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text
                </p>
            </div>
            <div className={`${styles.peopleCard}`}>
                <OwlCarousel className='owl-theme' loop margin={4} nav={false}>
                    {testimonial.map((data, idx) => {
                        return (
                            <React.Fragment
                                key={idx}
                            >
                                <TestimonialCard
                                    avatar={data.avatar}
                                    name={data.name}
                                    text={data.text}
                                />
                            </React.Fragment>
                        )
                    })}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Section7