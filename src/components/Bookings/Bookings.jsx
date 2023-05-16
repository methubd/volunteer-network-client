import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Booking from './Booking';
import { AuthContext } from '../../Providers/AuthProvider';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;    
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('volunteerToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setBookings(data)
        })
    }, [])
    

    return (
        <div>
            <h1 className='text-center py-10 text-2xl'>Total Bookings: <span className='font-bold text-red-600'>{bookings.length}</span></h1>
            <div>
                {
                    bookings.map(booking => <Booking
                    key={booking._id}
                    booking = {booking}
                    ></Booking>)
                }
            </div>
        </div>
    );
};

export default Bookings;