import React from "react";

import logoImg from "../../assets/logo.svg";

import { Link } from "react-router-dom";

import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";

const Profile = () => {
  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Be the hero logo' />
        <span>Welcome, 'NGO'</span>

        <Link className='button' to='incidents/new'>
          Report an incident
        </Link>
        <button type='button'>
          <FiPower size={18} color='#E02041' />
        </button>
      </header>

      <h1>Reported Incidents</h1>
      <ul>
        <li>
          <strong>Incident:</strong>
          <p>Incident test</p>
          <strong>Description:</strong>
          <p>Description test</p>
          <strong>Value:</strong>
          <p>$120.00</p>
          <button type='button'>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Incident test</p>
          <strong>Description:</strong>
          <p>Description test</p>
          <strong>Value:</strong>
          <p>$120.00</p>
          <button type='button'>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Incident test</p>
          <strong>Description:</strong>
          <p>Description test</p>
          <strong>Value:</strong>
          <p>$120.00</p>
          <button type='button'>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Incident test</p>
          <strong>Description:</strong>
          <p>Description test</p>
          <strong>Value:</strong>
          <p>$120.00</p>
          <button type='button'>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
