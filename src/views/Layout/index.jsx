import React from 'react';
import Header from "../../components/Header/index.jsx";
import './style.scss'

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header/>
            <div className='layout-content'>
                {children}
            </div>
        </div>
    );
};

export default Layout;