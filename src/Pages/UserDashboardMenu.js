import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import support from './Images/support.png'
import checkout from './Images/checkout.png'
import dollar from './Images/dollar-sign.png'
import "./UserDashboardMenu.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UserDashboardMenu = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info));
    }, []);

    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid' && order.customerEmail === user?.email);
    const totalSpent = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0)



    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <Link to='/my-order'>
                        <div className='single-card text-center'>
                            <div className='icon-img mb-2'>
                                <img src={checkout} alt="Checkout" />
                            </div>
                            <p>My Orders</p>
                        </div>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <Link to='/'>
                        <div className='single-card text-center'>
                            <div className='icon-img mb-2'>
                                <img src={dollar} alt="Total Spent" />
                            </div>
                            <p>Total Spent $ {totalSpent.toFixed(2)} USD</p>
                        </div>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <Link to='/support'>
                        <div className='single-card text-center'>
                            <div className='icon-img mb-2'>
                                <img src={support} alt="Support" />
                            </div>
                            <p>Support</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default UserDashboardMenu;
