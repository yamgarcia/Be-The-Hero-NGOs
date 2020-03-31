import React from "react";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

const Logon = () => {
  return (
    <div>
      <div className='logon-container'>
        <section className='form'>
          <img src={logoImg} alt='logoImg' />
          <form action=''>
            <h1>Logon</h1>
            <input placeholder='Your ID' />
            <button type='submit'>Enter</button>

            <a href='/register'>I don't have an account</a>
          </form>
        </section>
      </div>
      <img src={heroesImg} alt='heroesImg' />
    </div>
  );
};

export default Logon;
