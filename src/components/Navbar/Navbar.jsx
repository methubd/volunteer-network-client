import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'

const Navbar = () => {
    return (
        <nav className="md:flex md:items-center md:justify-between pt-11">
            <div>
                <img className="w-48" src={logo} alt="" />
            </div>
            <div>
                <Link className="px-4 text-base" to='/'>Home</Link>
                <Link className="px-4 text-base" to='/donation'>Donation</Link>
                <Link className="px-4 text-base" to='/events'>Events</Link>
                <Link className="px-4 text-base" to='/blog'>Blog</Link>
                <Link className="px-5 text-base bg-blue-500 text-white py-3 rounded-md" to='/register'>Register</Link>
                <Link className="px-5 ml-4 text-base bg-gray-700 text-white py-3 rounded-md" to='/admin'>Admin</Link>
            </div>
        </nav>
    );
};

export default Navbar;
