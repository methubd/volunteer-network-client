import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
        .then(result=> {})
    }

    return (
        <nav className="md:flex md:items-center md:justify-between pt-11">
            <div>
                <Link to='/'><img className="w-48 mx-auto" src={logo} alt="" /></Link>
            </div>
            <div>
                <Link className="px-4 text-base" to='/'>Home</Link>
                <Link className="px-4 text-base" to='/donation'>Donation</Link>
                {user &&
                    <Link className="px-4 text-base" to='/bookings'>Your Bookings</Link>
                }
                
                { user&&
                    <Link className="px-4 text-base" to='/addEvent'>Create New Event</Link>
                }

                    <Link className="px-5 text-base bg-blue-500 text-white py-3 rounded-md" to='/register'>Register</Link>

                {
                    user ? 
                    <button onClick={handleLogout}>
                        <Link className="px-5 ml-4 text-base bg-red-700 text-white py-3 rounded-md" >Logout</Link>
                    </button>
                    :
                    <Link className="px-5 ml-4 text-base bg-gray-700 text-white py-3 rounded-md" to='/login'>Login</Link>

                }
            </div>
        </nav>
    );
};

export default Navbar;
