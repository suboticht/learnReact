import React from 'react';
import Header from "../components/Header";
import SideBar from '../components/SideBar';


const Layout = ({title, children}) => {
    return <div className="defaultLayout flex">
        <div className='side-bar w-64 bg-orange-500'>
            <SideBar />
        </div>
        <div className='main-content flex-1 w-full bg-slate-50'>
            <Header name={title}/>
            <div className='container mx-auto mt-10'>
                {children}
            </div>
        </div>
    </div>
}
export default Layout;
