import React from "react";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";

const Logon = () => {
  return (
    <>
      <div className='logon-container'>
        <section className='form'>
          <img src={logoImg} alt='logoImg' />
          <form>
            <h1>Logon</h1>
            <input placeholder='Your ID' />
            <button className='button' type='submit'>
              Enter
            </button>
            <a href='/register'>
              I don't have an account
              <FiLogIn size={16} color='#E02041' />
            </a>
          </form>
        </section>
        <img src={heroesImg} alt='heroesImg' />
      </div>
    </>
  );
};

export default Logon;
