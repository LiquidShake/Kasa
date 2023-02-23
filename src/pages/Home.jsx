import React from 'react';
import Header from "../components/general/Header"
// import HomeBanner from "../components/home/HomeBanner"
import DisplayCards from "../components/home/DisplayCards"
import Footer from "../components/general/Footer"

const Home = () => {
    return(
        <>
            <Header />
            
            <DisplayCards />
            <Footer />
        </>
    )
}

export default Home