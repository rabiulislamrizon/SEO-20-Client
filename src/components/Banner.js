import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (




    <>


      <div className="banner-part " id="banner-part">
        <div className="banner-bg-left position-a inline">
          <svg className="icon-one" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 374.47" style={{ enableBackground: 'new 0 0 612 374.47' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".bl{fill-rule:evenodd;clip-rule:evenodd;fill:#f4faff;}" }} /><path className="bl" d="M0,0v374.47c15.64-24.01,71.03-107.52,307.77-116.59C557.25,248.32,607.47,23.29,612,0H0z" />
          </svg>
        </div>
        <div className="banner-bg-right position-a inline">
          <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -41.246 548 537.821" enableBackground="new 0 -41.246 548 537.821" xmlSpace="preserve">
            <path fill="#F4FAFF" d="M548,87.172L547.997-41c0,0-35.497-3-61.733,11.957C460.508-14.36,443.807,0.445,443.807,0.445
					c-5.521,3.332-23.672,30.155-28.238,44.176c-8.505,26.12-0.608,112.381-63.176,125.136c-62.57,12.756-111.775,11.542-133.036,50.42
					c-21.26,38.877-29.159,78.971-29.765,91.121c-0.608,12.149-73.502,9.719-113.598,41.307C36.629,383.621,10.148,399.414,0,496.575
					h548V87.172z" />
          </svg>
        </div>
        <div className="section-icons">
          <div className="shape">
            <svg className="banner-shape-one position-a inline shape-zoom" id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62">
              <defs><style dangerouslySetInnerHTML={{ __html: ".cls-2{fill:none;stroke:#e7e8fc;stroke-miterlimit:10;stroke-width:10px;fill-rule:evenodd;}" }} /></defs><path className="cls-2" d="M332,620a26,26,0,1,1-26,26A26,26,0,0,1,332,620Z" transform="translate(-301 -615)" />
            </svg>
          </div>
          <div className="shape">
            <svg className="banner-shape-two position-a inline shape-rotate" id="Layer_4" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.83 33.83"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-3{fill:#fff;stroke:#d3e1fd;stroke-miterlimit:10;stroke-width:4px;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-3" d="M895,191v27H868Z" transform="translate(-863.17 -186.17)" />
            </svg>
          </div>
          <div className="shape">
            <svg className="banner-shape-three position-a inline shape-rotate" id="Layer_5" data-name="Layer 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.3 56.3"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-4{fill:none;stroke:#ffd3d8;stroke-miterlimit:10;stroke-width:5px;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-4" d="M766.87,597.9l22.23-27,27,22.23-22.23,27Z" transform="translate(-763.35 -567.35)" />
            </svg>
          </div>
          <div className="shape">
            <svg className="banner-shape-four position-a inline rotate3d" id="Layer_6" data-name="Layer 6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-5{fill:#ffd3d8;fill-rule:evenodd;}" }} /></defs><title /><path className="cls-5" d="M561.5,474a7.5,7.5,0,1,1-7.5,7.5A7.5,7.5,0,0,1,561.5,474Z" transform="translate(-554 -474)" />
            </svg>
          </div>
        </div>
        <div className="container">

          {
            banners.map(b => <div className="row">
              <div className="col-xs-12 col-lg-6 center-content order-2 order-lg-1">
                <div className="banner-content fadeInLeft ">
                  <p className="banner-heading mb-0"> <span>{b.bannerText}</span></p>
                  <h1 className="head-one">{b.bannerHeading}</h1>
                  <p className="banner-p">{b.bannerDetails}</p>
                  <a href={b.buttonURL} className="started-btn animall">{b.buttonText}</a>
                </div>
              </div>
              <div className="col-xs-12 col-lg-6 img-box order-1 order-lg-2 fadeInRight ">
                <div className="banner-image text-center">
                  <img src={b.imageOne} alt="banner-img" className="position-r" />
                </div>
              </div>
            </div>)
          }

        </div>
      </div>

      








    </>
  );
};

export default Banner;
