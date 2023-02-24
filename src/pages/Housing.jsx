import React from 'react'
import { useParams } from 'react-router-dom';

const Housing = () => {

    const { id } = useParams();

  return (
    <div>{ id }</div>
  )
}


export default Housing;