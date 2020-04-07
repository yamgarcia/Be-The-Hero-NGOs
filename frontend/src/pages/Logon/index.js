import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

const Logon = () => {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handlelogon(e) {
    e.preventDefault();

    try {
      const res = await api.post("/sessions", { id });
      console.log(res.data.name);

      localStorage.setItem("ngoId", id);
      localStorage.setItem("ngoName", res.data.name);
      history.push("./profile");
    } catch (error) {
      console.log("Logon failed");
      console.error(error.message);
    }
  }

  return (
    <>
      <div className='logon-container'>
        <section className='form'>
          <img src={logoImg} alt='logoImg' />
          <form onSubmit={handlelogon}>
            <h1>Logon</h1>
            <input
              value={id}
              onChange={e => setId(e.target.value)}
              placeholder='Your ID'
            />
            <button className='button' type='submit'>
              Enter
            </button>
            <Link className='back-link' to='/register'>
              I don't have an account
              <FiLogIn size={16} color='#E02041' />
            </Link>
          </form>
        </section>
        <img src={heroesImg} alt='heroesImg' />
      </div>
    </>
  );
};

export default Logon;
