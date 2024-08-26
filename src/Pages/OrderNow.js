import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [prices, setPrice] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPrice(info));

        // Fetch the list of countries (you can use a third-party API or a static list)
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                const countryList = data.map(country => country.name.common).sort();
                setCountries(countryList);
            });
    }, [id]);

    const handleNewOrder = (event) => {
        event.preventDefault();
        const packagePrice = event.target.packagePrice.value;
        const packageName = event.target.packageName.value;
        const customerEmail = event.target.customerEmail.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const paymentStatus = event.target.paymentStatus.value;
        const orderStatus = event.target.orderStatus.value;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

        const order = {
            packageName,
            packagePrice,
            customerEmail,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
            orderDate: formattedDate,
        };

        const url = `http://localhost:5000/new-order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate('/pending-order');
            });
    };

    return (
        <>
            <HeaderBottom />
            <section id="services" className="services-area pb-90 fix mb-5 mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h2>You Are Buying This SEO Plan</h2>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <form className="contact-form mt-5" onSubmit={handleNewOrder}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg shadow-lg"
                                            name="packageName"
                                            value={prices.packageName || ''}
                                            placeholder="Package Name"
                                            required
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg shadow-lg"
                                            name="packagePrice"
                                            value={prices.packagePrice || ''}
                                            placeholder="Package Price"
                                            required
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            value={user?.email || ''}
                                            name="customerEmail"
                                            className="form-control form-control-lg shadow-lg"
                                            required
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="customerName"
                                            className="form-control form-control-lg shadow-lg"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="customerAddress"
                                            className="form-control form-control-lg shadow-lg"
                                            placeholder="Your Address"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <select
                                            name="customerCountry"
                                            className="form-control form-control-lg shadow-lg"
                                            required
                                        >
                                            <option value="" disabled selected>
                                                Select Your Country
                                            </option>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-field p-relative c-subject mb-20">
                                        <input type="text" hidden id="text" value="UnPaid" name="paymentStatus" required />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-field p-relative c-subject mb-20">
                                        <input type="text" hidden id="text" value="Pending" name="orderStatus" required />
                                    </div>
                                </div>
                                <div className="slider-btn d-flex justify-content-center">
                                    <button className="btn btn-danger" data-animation="fadeInRight" data-delay=".8s">
                                        Place Order Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderNow;
