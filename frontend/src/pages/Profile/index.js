import React, { useState, useEffect } from "react";

import logoImg from "../../assets/logo.svg";

import { Link, useHistory } from "react-router-dom";

import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";

import api from "../../services/api";

const Profile = () => {
  const ngoName = localStorage.getItem("ngoName");
  const ngoId = localStorage.getItem("ngoId");
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ngoId,
        },
      })
      .then((res) => {
        setIncidents(res.data);
      });
  }, [ngoId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ngoId,
        },
      });

      setIncidents(incidents.filter((incidents) => incidents.id !== id));
    } catch (error) {
      alert("Error, try again");
      console.error(error.message);
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Be the hero logo' />
        <span>Welcome, {ngoName}</span>

        <Link className='button' to='incidents/new'>
          Report an incident
        </Link>
        <button onClick={handleLogout} name='Logout' type='button'>
          <FiPower size={18} color='#E02041' />
        </button>
      </header>

      <h1>Reported Incidents</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Incident:</strong>
            <p>{incident.title}</p>

            <strong>Description:</strong>
            <p>{incident.description}</p>

            <strong>Value:</strong>
            <p>
              {Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
              }).format(incident.value)}
            </p>

            <button
              name='delete'
              onClick={() => handleDeleteIncident(incident.id)}
              type='button'
            >
              <FiTrash2 size={20} color='#a8a8b3' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
