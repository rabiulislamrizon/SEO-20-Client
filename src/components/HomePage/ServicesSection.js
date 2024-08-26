import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (



    <>
      <div className="our-services-part py-120 pt-0-md pb-60-md " id="services-sec">
        <div className="our-services-part-inner bg-color-md">
          <div className="service-shape">
            <div className="shape">
              <svg className="service-shape-one position-a inline shape-fade" id="Layer_7" data-name="Layer 7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.83 33.83"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-6{fill:transparent;stroke:#e9f0fe;stroke-miterlimit:10;stroke-width:4px;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-6" d="M895,191v27H868Z" transform="translate(-863.17 -186.17)" /></svg>
            </div>
            <div className="shape">
              <svg className="service-shape-two position-a inline shape-rotate" id="Layer_8" data-name="Layer 8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.3 56.3"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-7{fill:none;stroke:#ffe9eb;stroke-miterlimit:10;stroke-width:5px;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-7" d="M766.87,597.9l22.23-27,27,22.23-22.23,27Z" transform="translate(-763.35 -567.35)" />
              </svg>
            </div>
            <div className="shape">
              <svg className="service-shape-three position-a inline rotate3d" id="Layer_9" data-name="Layer 9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-8{fill:#ffd3d8;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-8" d="M561.5,474a7.5,7.5,0,1,1-7.5,7.5A7.5,7.5,0,0,1,561.5,474Z" transform="translate(-554 -474)" /></svg>
            </div>
            <div className="shape">
              <svg className="service-shape-four position-a inline shape-rotate" id="Layer_10" data-name="Layer 10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.3 56.3"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-7{fill:none;stroke:#ffe9eb;stroke-miterlimit:10;stroke-width:5px;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-7" d="M766.87,597.9l22.23-27,27,22.23-22.23,27Z" transform="translate(-763.35 -567.35)" />
              </svg>
            </div>
            <div className="shape">
              <svg className="service-shape-six position-a inline shape-zoom" id="Layer_11" data-name="Layer 11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-2{fill:none;stroke:#e7e8fc;stroke-miterlimit:10;stroke-width:10px;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-2" d="M332,620a26,26,0,1,1-26,26A26,26,0,0,1,332,620Z" transform="translate(-301 -615)" />
              </svg>
            </div>
            <div className="shape">
              <svg className="service-shape-seven position-a inline shape-zoom" id="Layer_12" data-name="Layer 12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-8{fill:#ffd3d8;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-8" d="M561.5,474a7.5,7.5,0,1,1-7.5,7.5A7.5,7.5,0,0,1,561.5,474Z" transform="translate(-554 -474)" /></svg>
            </div>
          </div>
          <div className="container">
            {
              service.map(a => <div className="section-title fadeIn ">
                <span className="section-span">{a.servicesubHeading}</span>
                <h2 className="head-two">{a.serviceHeading}</h2>
              </div>)
            }
            <div className="service-detail-grp">
              <div className="row">
                {
                  items.map(e => <div className="col-lg-4 col-sm-6 animall fadeInUp  delay1">
                    <div className="services-detail">
                      <img src={e.serviceIcon} alt="sevice-img" />
                      <h3 className="head-three">{e.serviceTitle}</h3>
                      <p>{e.serviceDetails}</p>
                    </div>
                  </div>)
                }
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {
            about.map(c => <div className="row pt-100" id="about-part">
              <div className="col-xs-12 col-lg-5 position-r">
                <div className="aboutus-img-mainpart">
                  <div className="aboutus-img">
                    <img src={c.aboutImgOne} alt="aboutus-image" className="about-bg d-none d-lg-block d-xl-block" />
                    <img src={c.aboutImgOne} alt="aboutus-image" className="about-bg d-block d-lg-none d-xl-none" />
                  </div>
                  <div className="about-pink-shape fadeInDown hidden">
                    <svg className="service-shape-five inline" version="1.1" id="Layer_13" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 416.56 489.99" style={{ enableBackground: 'new 0 0 416.56 489.99' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".ab2{fill-rule:evenodd;clip-rule:evenodd;fill:#FAD5E2;}" }} /><path className="ab2" d="M265.26,14.85c99.22,56.79,190.61,285.01,133.82,384.23c-56.79,99.22-195.65,115.01-294.87,58.22
                  C4.99,400.5-29.41,274.03,27.38,174.81S166.04-41.94,265.26,14.85z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-lg-7 pt-85">
                <div className="section-title pb-3 text-left">
                  <span className="section-span">{c.aboutText}</span>
                  <h2 className="head-two">{c.aboutHeading}</h2>
                </div>
                <div className="aboutus-detail">
                  <p>{c.aboutDetails}</p>
                  <ul>
                    <li>{c.pointOne}</li>
                    <li>{c.pointTwo}</li>
                    <li>{c.pointThree}</li>
                  </ul>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </>

  );
};

export default ServicesSection;
