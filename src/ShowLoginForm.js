import React from 'react';
import { Link } from 'react-router-dom';

export function ShowLoginForm() {
    return (
      <div className="app-div">
        <h1 className="app-title">Login</h1>
        <form className="app-form">
          <label className="app-label" htmlFor="username">Username:</label><br/>
          <input className="app-input" type="text" id="username" name="username" required />
          
          <label className="app-label" htmlFor="password">Password:</label><br/>
          <input className="app-input" type="password" id="password" name="password" required />
          <br/>
          <button className="app-button" type="submit">Login</button>
        </form>
        <br/>
        <p className="app-text">Don't have an account? <Link to="/register" className="app-link">Register here</Link></p>
      </div>
    );
  }