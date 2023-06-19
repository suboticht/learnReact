import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const publicPage = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

export default publicPage;