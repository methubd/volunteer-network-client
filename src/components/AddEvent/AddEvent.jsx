import Swal from "sweetalert2";


const AddEvent = () => {

    const handleAddEvent = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const image = form.image.value;
        const newEvent = {title, date, description, image}

        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Event Successfully Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset();
            }
        })
    }
    return (
        <div className="md:pt-5">
            <form onSubmit={handleAddEvent}>
                <input className="border p-2 md:w-96 mr-1 my-1" type="text" name="title" placeholder="Enter title"  />
                <input className="border p-2 md:w-96 mr-1 my-1 text-gray-500" type="date" name="date"  />
                <textarea className="border p-2 md:w-96 mr-1 my-1 text-gray-500" type="text" name="description" placeholder="Description" /> <br />
                <input className="border p-2 md:w-96 mr-1 my-1 text-gray-500" type="text" name="image" placeholder="Image URL"  /> <br />
                <input className="bg-blue-500 px-5 py-2 text-white cursor-pointer" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddEvent;