import React, { useState } from "react";
import "./styles.css";

import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

const NewIncident = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const ngoId = localStorage.getItem("ngoId");
  const history = useHistory();

  async function handleAddIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ngoId
        }
      });
      history.push("/profile");
    } catch (e) {
      alert("Error, could not submit incident");
      console.error(e.message);
    }
  }

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
        <form onSubmit={handleAddIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Give it a title'
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Description'
          />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Value in CAD'
          />

          <button className='button' type='submit'>
            Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
