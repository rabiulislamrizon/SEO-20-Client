import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Message is Send Thanks');
        navigate('/#')
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (


    <><div className="contactus-part bg-color-md pt-100" id="contact-sec">
      <div className="section-title">
        <span className="section-span">CONTACT US</span>
        <h2 className="head-two">Lets create something awesome together</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="img-box">
              <img src="images/contact-img.svg" className="contanim" alt="contact-img" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-detail">
              <form onSubmit={handleMessage}>
                <div className="row">
                  <div className="col-xs-12 col-md">
                    <input type="text" className="form-control" name='name' placeholder="Name" required />
                  </div>
                  <div className="col-xs-12 col-md">
                    <input type="text" className="form-control" name='email' placeholder="Email" required />
                  </div>
                  <div className="col-xs-12 col-md">
                    <input type="text" className="form-control" name='number' placeholder="Phone" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name='subject' placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <input name="messageStatus" value="UnRead" hidden placeholder="Message Status" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows={4} placeholder="Message" name='message' required defaultValue={""} />
                </div>
                <button type="submit" className="send">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>





  );
};

export default ContactUs;