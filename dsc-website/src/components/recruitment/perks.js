import React from "react"
import perkRec from "../../data/perk-recruitment"

const Perks = () => {
  const perk_list = perkRec.map((item, index) => {
    return (
      <div
        className="content"
        key={index}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration={1000}
        data-aos-offset={1600}
      >
        <img src={`images/${item.img}`} className="image" />
        <h3
          className="box"
          dangerouslySetInnerHTML={{ __html: item.body }}
        ></h3>
      </div>
    )
  })

  return (
    <div
      id="third"
      className="long-slide background-white"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-duration={1000}
      data-aos-offset={1600}
    >
      <h1
        className="center"
        style={{
          marginBottom: `96px`,
        }}
      >
        What's in it for you?
      </h1>
      <div
        className="column"
        style={{
          marginBottom: `96px`,
        }}
      >
        {perk_list}
      </div>

      <h1 className="center">and it's all free! 💸</h1>
    </div>
  )
}

export default Perks
