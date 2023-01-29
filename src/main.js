import React from 'react'
import Footer from './components/module/footer/footer'
import Navbar from './components/module/navbar/navbar'
import Section1 from './components/section/section1/section1'
import Section2 from './components/section/section2/section2'
import Section3 from './components/section/section3/section3'
import Section4 from './components/section/section4/section4'
import Section5 from './components/section/section5/section5'
import Section6 from './components/section/section6/section6'
import Section7 from './components/section/section7/section7'
import Section8 from './components/section/section8/section8'

const Main = () => {
    return (
        <>
            <div>
                <Navbar />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Footer />
            </div>
        </>
    )
}

export default Main