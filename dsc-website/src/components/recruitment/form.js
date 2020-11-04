import React from "react"

const Form = () => {
  return (
    <div id="fourth" className="long-slide background-blue">
      <div
        className="content center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration={1000}
        data-aos-offset={2400}
      >
        <div id="presubmission">
          <h1 className="color-white presubmission">Come aboard.</h1>
          <h2>You've already reached this far. Might as well commit to it.</h2>
          <p>
            If the you cannot access the Google Forms below, click
            <b>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeetdbKdYXGxVovrhZarFmXjQvDjVd7iQxJB82oVlwRc1eaow/viewform">
                &nbsp;here
              </a>
            </b>
            .
          </p>
        </div>

        <div id="postsubmission">
          <h1 className="color-white presubmission">Thank you! ✨</h1>
          <h2>
            While you're here, we'd love to get to know you better and learn
            what you're interested in. Feel free to answer the form below—it
            only takes a few minutes! 🤩
          </h2>
        </div>

        <h2 className="box center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeetdbKdYXGxVovrhZarFmXjQvDjVd7iQxJB82oVlwRc1eaow/viewform?embedded=true"
            onload="submitForm()"
            height="378"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </h2>
      </div>
    </div>
  )
}

export default Form
