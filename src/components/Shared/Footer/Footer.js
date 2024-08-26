import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Subscribers Request is Sent');
      });


  }




  return (


    <>
      {
        logo.map(l => <footer className="footer-part">
          <div className="container pb-100 pb-60-md">
            <div className="row">
              {
                footerSocial.map(s => <div className="col-12 col-md-4">
                  <a href="/"><img src={l.logo} alt="logo" /></a>
                  <p className="footer-p">{s.aboutText}</p>
                  <div className="social-media">
                    <a href={s.fblink}><i className="fa fa-facebook" /></a>
                    <a href={s.inslink}><i className="fa fa-instagram" /></a>
                    <a href={s.youlink}><i className="fa fa-youtube" /></a>
                  </div>
                </div>)
              }
              <div className="col-12 col-md-4">
                <h3 className="head-three">Usefull Link</h3>
                <div className="head-line" />
                <ul className="footer-menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="#services-sec">Services</a></li>
                  <li><a href="#pricing-sec">Pricing</a></li>
                  <li><a href="#testimonial-sec">Testimonials</a></li>
                  <li><a href="#contact-sec">Contact</a></li>
                </ul>
              </div>
              {
                footerAddress.map(a => <div className="col-12 col-md-4">
                  <h3 className="head-three">Contact with us</h3>
                  <div className="head-line" />

                  <ul className="footer-menu">
                    <li>LOCATION : {a.location}</li>
                    <li>MOBILE : {a.phoneNumber}</li>
                    <li>EMAIL :  {a.emailAddress}</li>
                  </ul>
                </div>)
              }
            </div>
          </div>
          <div className="bottom-footer">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {
                    footerCopyright.map(c => <div className="w-100">
                      <p className="mb-0">{c.copyrightText}</p>
                    </div>)
                  }
                </div>
              </div>
            </div>
          </div>
        </footer>)
      }
    </>
  );
};

export default Footer;
