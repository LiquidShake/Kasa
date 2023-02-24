import React from 'react';
import Header from "../components/general/Header"
import Banner from "../components/general/Banner"
import DisplayCards from "../components/home/DisplayCards"
import Footer from "../components/general/Footer"

export default function Home() {
    return(
        <>
            <Header />
            <Banner cover="./images/montagnes-ocean.png" title="Chez vous, partout et ailleurs"/>
            <DisplayCards />
            <Footer />
        </>
    )
}