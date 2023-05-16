import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav/DashboardNav";


const Dashboard = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;