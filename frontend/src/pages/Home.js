import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import view_recipes_icon from '../assets/icons/view_recipes_icon.png';
import track_completion_icon from '../assets/icons/track_completion_icon.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="home-title animated-title">Hyrule Cookbook</h1>
        <p className="home-subtitle animated-subtitle">
          A minimalist web app that compiles all recipe information for Tears of the Kingdom and helps you keeps track of your cooking progress. No registration/installation required!
        </p>
        <section className="intro-section">
          <div className="feature-cards">
            <div className="feature-card" onClick={() => navigate('/recipes')} role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') navigate('/recipes'); }}>
              <h2>
                View Recipes
                <img src={view_recipes_icon} alt='view_recipes_icon' 
                style={{ width: '1em', height: '1em', verticalAlign: 'top', marginLeft: '0.5em' }} />
              </h2>
            </div>
            <div className="feature-card" onClick={() => navigate('/tracker')} role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') navigate('/tracker'); }}>
              <h2>
                Track Completion
                <img src={track_completion_icon} alt='track_completion_icon' 
                style={{ width: '1.1em', height: '1em', verticalAlign: 'top', marginLeft: '0.5em' }} />
              </h2>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;