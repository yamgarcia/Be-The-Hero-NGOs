import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";

const NewIncident = () => {
  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be the hero logo' />
          <h1>Report an Incident</h1>
          <p>Please, describe the incident to help the hero on call</p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' />
            Back to Home
          </Link>
        </section>
        <form>
          <input placeholder='Give it a title' />
          <textarea placeholder='Description' />
          <input placeholder='Value in CAD' />

          <button className='button' type='submit'>
            Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
