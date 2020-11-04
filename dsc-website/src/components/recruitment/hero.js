import React from "react"

const Hero = () => {
  return (
    <>
      <div className="slide background-yellow">
        <div className="center">
          <img src={"/images/logo.png"} alt="logo" className="logo" />
        </div>
        <div id="description">
          <h1>Who are we?</h1>
          <h2 className="box">
            <b>Developer Student Club Taft</b> is a community of students in De
            La Salle University – Manila that focuses on
            <b>building technological solutions</b> for the development of
            different communities.
          </h2>
        </div>
      </div>

      <div id="banner" className="slide background-yellow"></div>
    </>
  )
}

export default Hero
