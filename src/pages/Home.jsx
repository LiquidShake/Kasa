import Banner from "../components/general/Banner"
import bannerCover from '../images/montagnes-ocean.png'
import DisplayCards from "../components/home/DisplayCards"

export default function Home() {
    document.title = 'Kasa - Accueil'
    return(
        <>
            <Banner cover={bannerCover} title="Chez vous, partout et ailleurs"/>
            <DisplayCards />
        </>
    )
}