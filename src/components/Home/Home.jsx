import { useLoaderData } from 'react-router-dom';
import '../MotherCSS.css'
import Events from './Events';

const Home = () => {
    const events = useLoaderData();

    return (
        <div>
            <div className='text-center mt-14 '>
                <h1 className='text-4xl uppercase font-bold py-4'>I grow by helping people in need.</h1>
                <form className='my-4'>
                    <input className='border p-2 md:w-1/3' type="text" placeholder='Search' />
                    <input className='cursor-pointer px-5 text-base bg-blue-500 text-white py-2' type="submit" value='Search' />
                </form>
            </div>
            <div>
                {
                    events.map(event => <Events
                    key={event._id}
                    event = {event}
                    ></Events>)
                }
            </div>
        </div>
    );
};

export default Home;