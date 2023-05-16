import React from 'react';

const Booking = ({booking}) => {
    const {_id, title, date, userEmail} = booking;

    const handleDelete = id => {

        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className='flex justify-between bg-slate-100 my-2 p-3 px-10'>
            <h1>{title}</h1>
            <h1>{date}</h1>
            <h1>{userEmail}</h1>
            <button onClick={() => handleDelete (_id)} className='bg-red-600 px-4 text-white'>Delete</button>
        </div>
    );
};

export default Booking;