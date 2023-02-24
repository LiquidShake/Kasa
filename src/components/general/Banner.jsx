import React from 'react'

export default function Banner(props) {
  return (
    <section className="banner">
      <div className="wrapper">
        <img src={props.cover} alt="Bannière" />
        <h1>{props.title}</h1>
      </div>
    </section>
  )
}
