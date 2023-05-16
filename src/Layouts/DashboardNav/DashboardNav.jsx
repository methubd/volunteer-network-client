import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'
import AddEvent from "../../components/AddEvent/AddEvent";

const DashboardNav = () => {
    return (
        <nav className="grid grid-cols-4 mt-10 place-items-start">
            <div className="">
                <Link to='/'><img className="w-48" src={logo} alt="" /></Link>
                <Link to='/registered-volunteer'>Volunteer register list</Link>
            </div>
            <div className="col-span-3">
                <h1 className="text-2xl font-bold">Add Event</h1>
                <AddEvent></AddEvent>
            </div>
        </nav>
    );
};

export default DashboardNav;
