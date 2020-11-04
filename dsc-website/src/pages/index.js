import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <script>
      {`
    var counter = 0;

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    $(document).ready(function() {
        setTimeout(function(){
            $(".logo").fadeOut("slow");
            setTimeout(function(){
                $("#description").fadeIn("slow");
                }
            , 1000)
        }, 1000);
    });

    function debounce(func, wait = 20, immediate = true) {
	    var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const slideUpElements = $(".slide-up");

    function slideIn(e) 
    {
        const currentPosition = window.scrollY + window.innerHeight;

        slideUpElements.each(function(index, element){
            const slideInAt = $(element).offset().top + ($(element).height()/10);
            if(slideInAt < currentPosition)
            {
                $(element).addClass("active");
            }
        })
        
    }

    window.addEventListener('scroll', debounce(slideIn));

    function submitForm()
    {
        counter += 1;

        if(counter == 2)
        {
            $("#fourth").removeClass("background-blue");
            $("#fourth").addClass("background-green");

            $("#presubmission").slideUp();
            $("#postsubmission").slideDown();

            window.scrollTo({
                top: $("#fourth").offset().top,
                left: 0,
                behavior: 'smooth'
            });

            $("iframe").attr("src", "https://docs.google.com/forms/d/e/1FAIpQLSeetsrv2YgjT2QotFUJ3Q2l8CMlmv7pXCErpIR5nTpfdq8ARg/viewform?embedded=true");
        }
    }


    
    `}
    </script>
  </Layout>
)

export default IndexPage
