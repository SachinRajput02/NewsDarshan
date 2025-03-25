import React from 'react';
import "./About.css";

export default function About() {
  return (
    <div className="container-about container">
      <h1>About Us</h1>
      <p><strong>NewsDarshan</strong> is a platform where you can read customized news based on your preferences. We provide a variety of news categories to keep you informed on topics that matter to you.</p>
      
      <p>Our website fetches news from <strong>NewsAPI</strong>, ensuring that you always have access to the latest and most relevant news articles.</p>
      
      <p>Currently, this website serves as a project to showcase full-stack web development skills, demonstrating expertise in frontend and backend technologies.</p>
      
      <button type="button" className="btn btn-primary">
        <a href="https://github.com/SachinRajput02/NewsDarshan" target="_blank" rel="noopener noreferrer">
          GitHub Code
        </a>
      </button>
    </div>
  );
}
