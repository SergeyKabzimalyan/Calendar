import React from 'react';
import {Link} from "react-router-dom";
import './style.scss'

const Home = () => {
    return (
        <div className="home">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/auth/sign-in">Sign In</Link></li>
                        <li><Link to="/auth/sign-up">Sign Up</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="content">
                    <h1>Welcome to Our Website!</h1>
                    <p>Plan your day with our calendar.</p>
                </div>
            </main>
        </div>
    );
};

export default Home;