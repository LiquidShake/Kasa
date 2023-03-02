import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({img}) => {
    const [slideIdx, setSlideIdx] = useState(0);
    const imgWidth = () => {
        const slideImg = document.querySelector('.carousel_container img');
        if(!slideImg){
            return 0;
        }
        return slideImg.width;
    }

    const goToNext = () => {
        if(slideIdx === img.length - 1){
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    const goToPrev = () => {
        if(slideIdx === 0){
            setSlideIdx(img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    return (
        <div className='carousel'>
            <div className='carousel_container' style={{transform: `translateX(-${slideIdx * imgWidth()}px)`}}>
                {img.map((picture, i) => 
                    <img alt='apercu-logement' src={picture} key={i} />
                )}
            </div>
            
            {img.length > 1 && <>
            <div className='carousel_arrows'>
                <i className='carousel_arrow arrow_prev' onClick={goToPrev}>{<FontAwesomeIcon icon={faAngleLeft} />}</i>
                <i className='carousel_arrow arrow_next' onClick={goToNext}>{<FontAwesomeIcon icon={faAngleRight} />}</i>
            </div>
            <div className='nb_slides'>{slideIdx + 1} / {img.length}</div>
            </>}
        </div>
    )
}

export default Carousel;