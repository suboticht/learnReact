import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const publicPage = [
    {
        path: '/',
        name: 'Dashboard',
        key: '1',
        component: Dashboard 
    },
    {
        path: '/profile',
        name: 'Profile',
        key: '2',
        component: Profile 
    },
]

export default publicPage ;