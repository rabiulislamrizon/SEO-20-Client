import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (



    <><div className="pricing-plan-part bg-color-md position-r pb-150 over-hidden" id="pricing-sec">
      <div className="price-bg">
        <svg className="d-none-md price-plan-bg position-a inline" version="1.1" id="Layer_29" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1053.94 1117.15" style={{ enableBackground: 'new 0 0 1053.94 1117.15' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".st0{fill-rule:evenodd;clip-rule:evenodd;fill:#F7F7FB;}" }} /><path className="st0" d="M532.59,330.22C476.18,251.01,139.35,8.79,0,0.24v1116.28c207.9,13.88,956.06-209.34,1042.38-260.28 C1139.37,799.01,595.58,418.65,532.59,330.22z" />
        </svg>
      </div>
      <div className="bg-shape">
        <svg className="price-shape1 position-a inline shape-rotate" version="1.1" id="Layer_30" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.65 36.65" style={{ enableBackground: 'new 0 0 36.65 36.65' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".p2{fill:transparent;stroke:#eaedfe;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><rect x="2.5" y="2.5" className="p2" width={31} height={31} />
        </svg>
        <svg className="price-shape2 position-a inline" version="1.1" id="Layer_31" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.83 36.83" style={{ enableBackground: 'new 0 0 36.83 36.83' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".p3{fill:none;stroke:#e9f4f7;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} />
          <path className="p3" d="M34.33,18.41c0,8.79-7.12,15.91-15.91,15.91S2.5,27.2,2.5,18.41C2.5,9.62,9.63,2.5,18.41,2.5S34.33,9.62,34.33,18.41z" />
        </svg>
        <svg className="price-shape3 position-a inline shape-fade" version="1.1" id="Layer_32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 46.95 41.35" style={{ enableBackground: 'new 0 0 46.95 41.35' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".w5{fill:none;stroke:#edf4f2;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><polygon className="w5" points="33.95,20.66 23.45,2.5 12.98,20.67 2.5,38.85 23.47,38.83 44.45,38.82 " />
        </svg>
        <svg className="price-shape4 position-a inline shape-fade" version="1.1" id="Layer_33" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 46.95 41.35" style={{ enableBackground: 'new 0 0 46.95 41.35' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".w5{fill:none;stroke:#edf4f2;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><polygon className="w5" points="33.95,20.66 23.45,2.5 12.98,20.67 2.5,38.85 23.47,38.83 44.45,38.82 " />
        </svg>
        <svg className="price-shape5 position-a inline shape-rotate" version="1.1" id="Layer_34" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.68 20.91" style={{ enableBackground: 'new 0 0 36.68 20.91' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".w6{fill:none;stroke:#f7e9f3;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><path className="w6" d="M2.5,18.41C2.5,9.62,9.59,2.5,18.34,2.5c8.75,0,15.84,7.12,15.84,15.91" />
        </svg>
        <svg className="price-shape6 position-a inline shape-rotate" version="1.1" id="Layer_35" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20.25 20.25" style={{ enableBackground: 'new 0 0 20.25 20.25' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".w3{fill:#EBF0FD;stroke:#e6ebfd;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><g>
          <line className="w3" x1="17.75" y1="17.28" x2="2.5" y2="2.97" /><line className="w3" x1="2.97" y1="17.75" x2="17.28" y2="2.5" /></g>
        </svg>
        <svg className="price-shape7 position-a inline shape-rotate" version="1.1" id="Layer_36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 46.95 41.35" style={{ enableBackground: 'new 0 0 46.95 41.35' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".w5{fill:none;stroke:#edf4f2;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><polygon className="w5" points="33.95,20.66 23.45,2.5 12.98,20.67 2.5,38.85 23.47,38.83 44.45,38.82 " />
        </svg>
        <svg className="price-shape8 position-a inline shape-fade" version="1.1" id="Layer_37" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63.14 17.25" style={{ enableBackground: 'new 0 0 63.14 17.25' }} xmlSpace="preserve"> <style type="text/css" dangerouslySetInnerHTML={{ __html: ".w4{fill:none;stroke:#FEF2F4;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><g><path className="w4" d="M17.04,14.75C10.13,14.75,11.32,2.5,2.5,2.5" /><path className="w4" d="M46.11,14.75c-6.91,0-5.72-12.25-14.54-12.25" /><path className="w4" d="M17.04,14.75c6.91,0,5.72-12.25,14.54-12.25" /><path className="w4" d="M60.64,2.5" /><path className="w4" d="M46.11,14.75c6.91,0,5.72-12.25,14.54-12.25" /></g>
        </svg>
        <svg className="price-shape9 position-a inline shape-rotate" version="1.1" id="Layer_38" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.65 36.65" style={{ enableBackground: 'new 0 0 36.65 36.65' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".p2{fill:transparent;stroke:#eaedfe;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><rect x="2.5" y="2.5" className="p2" width={31} height={31} />
        </svg>
        <svg className="price-shape10 position-a inline shape-fade" version="1.1" id="Layer_39" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63.14 17.25" style={{ enableBackground: 'new 0 0 63.14 17.25' }} xmlSpace="preserve"> <style type="text/css" dangerouslySetInnerHTML={{ __html: ".w4{fill:none;stroke:#FEF2F4;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><g><path className="w4" d="M17.04,14.75C10.13,14.75,11.32,2.5,2.5,2.5" /><path className="w4" d="M46.11,14.75c-6.91,0-5.72-12.25-14.54-12.25" /><path className="w4" d="M17.04,14.75c6.91,0,5.72-12.25,14.54-12.25" /><path className="w4" d="M60.64,2.5" /><path className="w4" d="M46.11,14.75c6.91,0,5.72-12.25,14.54-12.25" /></g>
        </svg>
        <svg className="price-shape11 position-a inline shape-zoom" version="1.1" id="Layer_40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.83 36.83" style={{ enableBackground: 'new 0 0 36.83 36.83' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".p3{fill:none;stroke:#effbf7;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} />
          <path className="p3" d="M34.33,18.41c0,8.79-7.12,15.91-15.91,15.91S2.5,27.2,2.5,18.41C2.5,9.62,9.63,2.5,18.41,2.5S34.33,9.62,34.33,18.41z" />
        </svg>
        <svg className="price-shape12 position-a inline shape-fade" version="1.1" id="Layer_41" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63.14 17.25" style={{ enableBackground: 'new 0 0 63.14 17.25' }} xmlSpace="preserve"> <style type="text/css" dangerouslySetInnerHTML={{ __html: ".w4{fill:none;stroke:#FEF2F4;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><g><path className="w4" d="M17.04,14.75C10.13,14.75,11.32,2.5,2.5,2.5" /><path className="w4" d="M46.11,14.75c-6.91,0-5.72-12.25-14.54-12.25" /><path className="w4" d="M17.04,14.75c6.91,0,5.72-12.25,14.54-12.25" /><path className="w4" d="M60.64,2.5" /><path className="w4" d="M46.11,14.75c6.91,0,5.72-12.25,14.54-12.25" /></g>
        </svg>
        <svg className="price-shape13 position-a inline shape-rotate" version="1.1" id="Layer_42" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.65 36.65" style={{ enableBackground: 'new 0 0 36.65 36.65' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".p2{fill:transparent;stroke:#eaedfe;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><rect x="2.5" y="2.5" className="p2" width={31} height={31} />
        </svg>
        <svg className="price-shape14 position-a inline shape-rotate" version="1.1" id="Layer_43" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20.25 20.25" style={{ enableBackground: 'new 0 0 20.25 20.25' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".w3{fill:#EBF0FD;stroke:#e6ebfd;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} /><g>
          <line className="w3" x1="17.75" y1="17.28" x2="2.5" y2="2.97" /><line className="w3" x1="2.97" y1="17.75" x2="17.28" y2="2.5" /></g>
        </svg>
        <svg className="price-shape15 position-a inline shape-zoom" version="1.1" id="Layer_44" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.83 36.83" style={{ enableBackground: 'new 0 0 36.83 36.83' }} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{ __html: ".p3{fill:none;stroke:#effbf7;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" }} />
          <path className="p3" d="M34.33,18.41c0,8.79-7.12,15.91-15.91,15.91S2.5,27.2,2.5,18.41C2.5,9.62,9.63,2.5,18.41,2.5S34.33,9.62,34.33,18.41z" />
        </svg>
      </div>
      <div className="section-title  pt-100 pt-0-md">
        <span className="section-span">OUR PRICING PLAN</span>
        <h2 className="head-two">Choose a package tailored to your needs</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 mx-auto">
            <div className="pricing-boxes">
              <div className="row">

                {
                  pricing.map(b => b.packageName === 'Basic' && <div className="col-xs-12 col-lg-4 p-lg-0 fadeInRight ">
                    <div className="plan-detail animall">
                      <span className="plan-heading">{b.packageName} Plan</span>
                      <h3 className="heading-three">${b.packagePrice}</h3>
                      <ul className="plan-list">
                        <li>{b.packagePointOne}</li>
                        <li>{b.packagePointTwo}</li>
                        <li>{b.packagePointThree}</li>
                        <li>{b.packagePointFour}</li>
                        <li>{b.packagePointFive}</li>
                      </ul>

                      <Link to={`/order-now/${b._id}`} className="purchase-btn">{b.packageButtonText}</Link>
                    </div>
                  </div>)}

                {
                  pricing.map(p => p.packageName === 'Premium' && <div className="col-xs-12 col-lg-4 p-lg-0">
                    <div className="plan-detail zi-2 active animall">
                      <span className="plan-heading">{p.packageName} Plan</span>
                      <h3 className="heading-three">${p.packagePrice}</h3>
                      <ul className="plan-list">
                        <li>{p.packagePointOne}</li>
                        <li>{p.packagePointTwo}</li>
                        <li>{p.packagePointThree}</li>
                        <li>{p.packagePointFour}</li>
                        <li>{p.packagePointFive}</li>
                        <li>{p.packagePointSix}</li>
                      </ul>

                      <Link to={`/order-now/${p._id}`} className="purchase-btn">{p.packageButtonText}</Link>

                    </div>
                  </div>)}

                {
                  pricing.map(s => s.packageName === 'Standard' && <div className="col-xs-12 col-lg-4 p-lg-0 ">
                    <div className="plan-detail animall">
                      <span className="plan-heading">{s.packageName} Plan</span>
                      <h3 className="heading-three">${s.packagePrice}</h3>
                      <ul className="plan-list">
                        <li>{s.packagePointOne}</li>
                        <li>{s.packagePointTwo}</li>
                        <li>{s.packagePointThree}</li>
                        <li>{s.packagePointFour}</li>
                        <li>{s.packagePointFive}</li>
                      </ul>

                      <Link to={`/order-now/${s._id}`} className="purchase-btn">{s.packageButtonText}</Link>
                    </div>
                  </div>)}



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PricingSection;