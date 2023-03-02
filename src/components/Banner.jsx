import React from 'react'

export default function Banner({cover, title}) {
  return (
    <section className="banner">
      <div className="wrapper">
        <img src={cover} alt="Bannière" />
        <h1>{title}</h1>
      </div>
    </section>
  )
}
