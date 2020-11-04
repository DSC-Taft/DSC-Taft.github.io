import React from "react"

import aboutRec from "../../data/about-recruitment"

const About = () => {
  const about_list = aboutRec.map((item, index) => {
    if (index % 2 == 0) {
      return (
        <>
          <div
            className="content"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration={1000}
            data-aos-offset={350 * (index / 2)}
          >
            <h2>{item.title}</h2>
            <h3 className="box">{item.body}</h3>
          </div>

          <div
            className="content"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration={1000}
            data-aos-offset={350 * (index / 2)}
          >
            <img src={`images/${item.img}`} className="image" />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div
            className="content"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration={1000}
            data-aos-offset={(350 * index) / 2}
          >
            <img src={`images/${item.img}`} className="image" />
          </div>

          <div
            className="content"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration={1000}
            data-aos-offset={350 * (index / 2)}
          >
            <h2>{item.title}</h2>
            <h3 className="box">{item.body}</h3>
          </div>
        </>
      )
    }
  })

  return (
    <div id="second" className="long-slide background-grey">
      <h1
        className="center"
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-duration={1000}
        data-aos-offset={200}
        style={{
          marginBottom: `96px`,
        }}
      >
        We're looking for individuals who are:
      </h1>
      <div className="column">{about_list}</div>
    </div>
  )
}

export default About
