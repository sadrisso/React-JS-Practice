import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header />
            <div className="h-[810px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;