import { useParams } from 'react-router-dom'
import NotFound from '../NotFound'
import housings from "../../data/logements.json"
import Collapse from '../../components/Collapse'
import Carousel from './Carousel'
import redStar from '../../images/red_star.svg'
import greyStar from '../../images/grey_star.svg'

export default function Housing() {

    const { id } = useParams();
    const currentHousing = housings.find(housing => housing.id === id);
    const scale = [1, 2, 3, 4, 5];

    if (currentHousing === undefined) { 
        return (
            <NotFound />
        )
    }
    
    const scaleValue = currentHousing.rating;
    document.title = `Kasa - ${currentHousing.title}`;

    return (
        <>
            <div className='housingPage wrapper'>
                <Carousel img={currentHousing.pictures}/>
                <div className="general">
                    <div className="housingInfos">
                        <h1>{currentHousing.title}</h1>
                        <p>{currentHousing.location}</p>
                        <ul className='tags'>
                            {currentHousing.tags.map((tag, index) => {
                                return <li key={index}>{tag}</li>
                            })}
                        </ul>
                    </div>
                    <div className="otherInfos">
                        <div className="host">
                            <p>{currentHousing.host.name}</p>
                            <img src={currentHousing.host.picture} alt="profile" />
                        </div>
                        <div className="rating">
                            {scale.map((rangeElem) =>
                                scaleValue >= rangeElem ? 
                                    <span key={rangeElem.toString()}><img src={redStar} alt="etoile rouge" /></span> 
                                    : <span key={rangeElem.toString()}><img src={greyStar} alt="etoile grise" /></span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="collapses">
                    <Collapse 
                        title="Decription" 
                        content={currentHousing.description} 
                    />
                    <Collapse
                        title="Equipements"
                        content={currentHousing.equipments.map((equipement, idx) => {
                            return <p key={idx}>{equipement}</p>
                        })}
                    />
                </div>
            </div>
        </>
    )
}
