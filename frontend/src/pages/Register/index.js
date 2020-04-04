import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import { FiArrowLeft } from "react-icons/fi";

const Register = () => {
  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be the hero logo' />
          <h1>Your Registration</h1>
          <p>Register and enter the platform to help NGOs rescuing animals.</p>
          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' />I already have an ID
          </Link>
        </section>
        <form>
          <input placeholder="NGO's name" />
          <input type='email' placeholder='E-mail' />
          <input placeholder='WhatsApp' />

          <div className='input-group'>
            <input placeholder='City' />
            <input placeholder='State' style={{ width: 180 }} />
          </div>

          <button className='button' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
