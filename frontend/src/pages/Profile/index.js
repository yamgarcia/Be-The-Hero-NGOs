import React from "react";

import logoImg from "../../assets/logo.svg";

import { Link } from "react-router-dom";

import { FiPower } from "react-icons/fi";
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
    </div>
  );
};

export default Profile;
