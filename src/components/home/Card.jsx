import React from 'react';

const Card = ({ id, title, cover }) => {
    return(
        <li key={id} className='housing'>
            <img src={cover} alt={title}  className='housing_figure_cover'/>
            <h2 className='housing_title'><a href={'/housing/' + id}>{title}</a></h2>
        </li>
    )
}

export default Card;