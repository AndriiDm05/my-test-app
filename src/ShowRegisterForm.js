import React from 'react';
import { Link } from 'react-router-dom';

export function ShowRegisterForm() {
    return (
        <div className="app-div">
            <h1 className="app-title">Register</h1>
            <form className="app-form">
                <label className="app-label" htmlFor="name">Name:</label><br />
                <input className="app-input" type="text" id="name" name="name" required />

                <label className="app-label" htmlFor="email">Email:</label><br />
                <input className="app-input" type="email" id="email" name="email" required />

                <label className="app-label" htmlFor="username">Username:</label><br />
                <input className="app-input" type="text" id="username" name="username" required />
          
                <label className="app-label" htmlFor="password">Password:</label><br />
                <input className="app-input" type="password" id="password" name="password" required />
                <br />
                <button className="app-button" type="submit">Register</button>
            </form>
            <br />
            <p className="app-text">Already have an account? <Link to="/login" className="app-link">Login here</Link></p>
        </div>
    );
}