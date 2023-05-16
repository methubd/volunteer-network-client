import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const EventDetails = () => {
    const event = useLoaderData();
    const {user} = useContext(AuthContext);
    const {_id, title, image, description, date} = event;

    const handleUpdateEvent = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const image = form.image.value;
        const oldEvent = {title, date, description, image}

        fetch(`http://localhost:5000/events/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(oldEvent)
            
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Updated',
                    showConfirmButton: true,
                    timer: 1500
                  })
            }
         })
    }

    //adding event to book now
    const handleBookings = event => {
        event.preventDefault();
        const userEmail = user.email;
        const interestedEvent = {_id, title, date, userEmail}

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(interestedEvent)
        })
        .then (res => res.json())
        .then (data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Booking Successfully Done, Welcome!',
                    showConfirmButton: true,
                    timer: 1500
                  }) 
            }
        } )
    }
    
    
    return (
        <div>
            <div className='text-center bg-blue-100 m-10 rounded-md p-10'>
                <img className='w-auto mx-auto p-10' src={image} alt="" />
                <h1 className='text-3xl font-bold text-gray-600'>{title}</h1>
                <p className='py-2 text-gray-500'>{description}</p>
                <p className='border border-gray-400 rounded-md bg-gray-50 w-1/2 mx-auto'>Content Id: {_id}</p>
                <button onClick={handleBookings} className='bg-blue-500 py-1 px-5 m-5 rounded-md text-white'>Interested to Go...</button>
                <p><small>If you are interested to go, we will contact with you through your login email address.</small></p>
            </div>

            {
            user &&
                <div className='md:p-10 bg-blue-50 m-10 rounded-md text-center'>
                    <h1 className='text-2xl font-bold my-10'>You must can edit this information: ()</h1>
                    <form onSubmit={handleUpdateEvent}>
                        <input className="border p-2 md:w-96 mr-1 my-1" type="text" name="title" placeholder="Enter title" defaultValue={title}  />
                        <br />
                        <input className="border p-2 md:w-96 mr-1 my-1 text-gray-500" type="date" name="date" defaultValue={date}  /> <br />
                        <textarea className="border p-2 md:w-96 mr-1 my-1 text-gray-500" type="text" name="description" placeholder="Description" defaultValue={description? description : ""} /> <br />
                        <input className="border p-2 md:w-96 mr-1 my-1 text-gray-500" type="text" name="image" placeholder="Image URL" defaultValue={image}  /> <br />
                        <input className="bg-blue-500 px-5 py-2 my-5 text-white cursor-pointer" type="submit" value="Update"  />
                    </form>
                </div>                
            }

            
        </div>
    );
};

export default EventDetails;