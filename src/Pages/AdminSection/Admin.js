import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Admin = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [currentPageOrders, setCurrentPageOrders] = useState(1);
    const [currentPageSubscribers, setCurrentPageSubscribers] = useState(1);
    const [ordersPerPage] = useState(5); // Adjust the number of orders per page
    const [subscribersPerPage] = useState(3); // Adjust the number of subscribers per page

    const [user] = useAuthState(auth);

    const [users, setUsers] = useState([]);
    const [subscription, setSubscription] = useState([]);

    const handleSignOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then((res) => res.json())
            .then((info) => setUsers(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/get-subscribtion`)
            .then((res) => res.json())
            .then((info) => setSubscription(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/subscribers`)
            .then((res) => res.json())
            .then((info) => setSubscribers(info.reverse())); // Reverse the array initially
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info.reverse())); // Reverse the array initially
    }, []);

    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid');
    const totalSalesAmount = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0).toFixed(2);

    // Pagination for Orders
    const indexOfLastOrder = currentPageOrders * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Pagination for Subscribers
    const indexOfLastSubscriber = currentPageSubscribers * subscribersPerPage;
    const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
    const currentSubscribers = subscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber);

    const paginateOrders = (pageNumber) => setCurrentPageOrders(pageNumber);
    const paginateSubscribers = (pageNumber) => setCurrentPageSubscribers(pageNumber);

    const calculateDaysLeft = (endDate) => {
        const today = new Date();
        const end = new Date(endDate);
        const timeDiff = end.getTime() - today.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysDiff > 0 ? daysDiff : 0;
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" className="services-area pt-4 pb-4 mt-4 mb-100 ">
                <div className='d-flex justify-content-end container'><Link className="btn btn-danger " onClick={handleSignOut}>Signout</Link></div>
                <h2 className="text-center mb-4 d-flex justify-content-center">Welcome to Admin Panel</h2>
                
                    {subscription.map(sub => (
                        sub.subscriptionDuration > 1 && (
                            <div className='d-flex justify-content-center'>
                                <div>
                                <h4 key={sub._id} className='text-primary'>
                                You Have {calculateDaysLeft(sub.subscriptionEnd)} days left
                                </h4>
                               <div className='d-flex justify-content-center'>
                               {calculateDaysLeft(sub.subscriptionEnd) < 2 && (
                                    <button className='btn btn-warning'>
                                        Please upgrade now
                                    </button>
                                )}
                               </div>
                                </div>
                            </div>
                        )
                    ))}
                    {users.filter(u => u.userEmail === user?.email).length === 1 && (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    
                                    <div className='total-sales text-center mb-4 d-flex justify-content-center'>
                                        <h3>Total Sales: ${totalSalesAmount}</h3>
                                    </div>
                                    <AdminMenu></AdminMenu>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Orders</h2>
                                    <div className="table-responsive">
    <table className="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Sl.</th>
                <th scope="col">Order Date</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Email</th>
                <th scope="col">Price</th>
                <th scope="col">Order Status</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {currentOrders.map((order, index) => (
                <tr key={order._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{order.orderDate}</td>
                    <td>{order.customerName}</td>
                    <td>{order.customerEmail}</td>
                    <td>${order.packagePrice}</td>
                    <td>{order.orderStatus}</td>
                    <td>{order.paymentStatus}</td>
                    <td><Link className='btn btn-primary' to={`/admin/payment-status/${order._id}`}>Update Order</Link></td>
                </tr>
            ))}
        </tbody>
    </table>
</div>


                                    {/* Bootstrap Pagination for Orders */}
                                    <nav aria-label="Orders Page Navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item ${currentPageOrders === 1 ? 'disabled' : ''}`}>
                                                <a className="page-link" onClick={() => paginateOrders(currentPageOrders - 1)} href="javascript:void(0)" tabIndex="-1">Previous</a>
                                            </li>
                                            {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => (
                                                <li key={i} className={`page-item ${currentPageOrders === i + 1 ? 'active' : ''}`}>
                                                    <a className="page-link" onClick={() => paginateOrders(i + 1)} href="javascript:void(0)">
                                                        {i + 1}
                                                    </a>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPageOrders === Math.ceil(orders.length / ordersPerPage) ? 'disabled' : ''}`}>
                                                <a className="page-link" onClick={() => paginateOrders(currentPageOrders + 1)} href="javascript:void(0)">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="mt-5">Total Subscribers</h3>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sl No.</th>
                                                <th scope="col">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentSubscribers.map((subscribe, index) => (
                                                <tr key={subscribe._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{subscribe.subemail}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Bootstrap Pagination for Subscribers */}
                                    <nav aria-label="Subscribers Page Navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item ${currentPageSubscribers === 1 ? 'disabled' : ''}`}>
                                                <a className="page-link" onClick={() => paginateSubscribers(currentPageSubscribers - 1)} href="javascript:void(0)" tabIndex="-1">Previous</a>
                                            </li>
                                            {Array.from({ length: Math.ceil(subscribers.length / subscribersPerPage) }, (_, i) => (
                                                <li key={i} className={`page-item ${currentPageSubscribers === i + 1 ? 'active' : ''}`}>
                                                    <a className="page-link" onClick={() => paginateSubscribers(i + 1)} href="javascript:void(0)">
                                                        {i + 1}
                                                    </a>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPageSubscribers === Math.ceil(subscribers.length / subscribersPerPage) ? 'disabled' : ''}`}>
                                                <a className="page-link" onClick={() => paginateSubscribers(currentPageSubscribers + 1)} href="javascript:void(0)">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}

                    {users.filter((u) => user.userEmail === u?.email).length === 0 && (
                        <div className="container d-flex justify-content-center">
                            <h4>You don't have any permission</h4>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
};

export default Admin;
