import React, { useEffect, useState } from "react";
import Swiper from "swiper"; // Import Swiper

const TestimonialSection = () => {

  const [testimonialtext, setTestimonialText] = useState([]);

  const [testimonials, settestimonials] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => settestimonials(info));
  }, []);
  // Initialize Swiper
  React.useEffect(() => {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  }, []);



  return (
    <>	<div className="testimonial-part bg-color-md" id="testimonial-sec">
      <div className="container">
        {
          testimonialtext.map(d => <div className="section-title">
            <span className="section-span">{d.testimonialText}</span>
            <h2 className="head-two">{d.testimonialHeading}</h2>
          </div>)
        }
        <div className="row" id="testimoni-1">
          <div className="col-12 col-lg-6">
            <div className="testimonial-inner position-r">
              <div>
                <img src="images/testimonail-bg.svg" alt="testimonial-bg" />
              </div>
              <ul className="client-img">
                <li className="fadeIn  delay6">
                  <a href="#" className="client-data testi-img1">
                    <img src="https://i.postimg.cc/3rzZB5fT/testimonial-img1.jpg" alt="testimonial-img" className=" imgborder" />
                  </a>
                </li>
                <li className="fadeIn  delay7">
                  <a href="#" className="client-data testi-img2">
                    <img src="https://i.postimg.cc/VsJRnLRg/testimonial-img2.jpg" alt="testimonial-img" className=" imgborder" />
                  </a>
                </li>
                <li className="fadeIn  delay8">
                  <a href="#" className="client-data testi-img3 active">
                    <img src="https://i.postimg.cc/T15pwsnj/testimonial-img3.jpg" alt="testimonial-img" className=" imgborder" />
                  </a>
                </li>
                <li className="fadeIn delay9">
                  <a href="#" className="client-data testi-img4">
                    <img src="https://i.postimg.cc/xC4X9QNT/testimonial-img4.jpg" alt="testimonial-img" className=" imgborder" />
                  </a>
                </li>
                <li className="fadeIn delay10">
                  <a href="#" className="client-data testi-img5">
                    <img src="https://i.postimg.cc/yWqWSTTM/testimonial-img5.jpg" alt="testimonial-img" className=" imgborder" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6" id="testimoni-2">
            <div className="client-detail-grp">

              {
                testimonials.map(a => <div className="client-detail active" >
                  <img src="images/quote-img.png" alt="quote-img" />
                  <p className="client-msg">{a.desc}</p>
                  <p className="client-name">{a.personName}	&nbsp;&nbsp;-&nbsp;&nbsp;<span>{a.personTitle}</span></p>
                </div>)
              }






            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default TestimonialSection;
