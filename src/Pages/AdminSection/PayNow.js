import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const PayNow = () => {

  const [paypal, setPaypal] = useState([]);
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const currentDomain = window.location.origin;

  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((info) => setOrder(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/paypal-email`)
      .then((res) => res.json())
      .then((info) => setPaypal(info));
  }, []);

  return (
    <>
      <HeaderBottom></HeaderBottom>
      <div>
        <section id="services" className="services-area pt-120 pb-90 fix mb-5 vh-50">
          <div className="container">
            <div className="row d-flex justify-content-center"></div>
            <div className="row justify-content-center vh-100">
              <div className="col-lg-8 col-md-12">
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  {paypal.map((e) => (
                    <input key={e.paypalEmail} name="business" hidden value={e.paypalEmail} />
                  ))}

                  <input type="hidden" name="item_number" value="1" />
                  <input
                    type="hidden"
                    name="amount"
                    value={order.packagePrice}
                  />
                  <input type="hidden" name="no_shipping" value="1" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input
                    type="hidden"
                    name="notify_url"
                    value="http://sitename/paypal-payment-gateway-integration-in-php/notify.php"
                  />
                  <input
                    type="hidden"
                    name="cancel_return"
                    value={`${currentDomain}/order-cancelled/${order._id}`}
                  />
                  <input
                    type="hidden"
                    name="return"
                    value={`${currentDomain}/received-payment/${order._id}`}
                  />
                  <input type="hidden" name="cmd" value="_xclick" />

                  <div className="text-center">
                    <input
                      type="submit"
                      name="pay_now"
                      id="pay_now"
                      className="btn btn-danger"
                      value="Pay Now With Paypal"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PayNow;
