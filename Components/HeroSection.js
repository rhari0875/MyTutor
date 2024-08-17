import React from 'react';
import Draggable from 'react-draggable';
import './style.css';
import FileUpload from '../Frontend/FileUpload/FileUpload';

const HeroSection = ({ setfunc }) => (
  <section className="hero-section" id="Home">
  <Draggable>
    <h2 className="headline">Welcome to MyTutor</h2>
    </Draggable>
    <Draggable>
    <p className="subheadline">Your AI-powered study companion</p>
    </Draggable>
    <FileUpload setfunc={setfunc} /> 
  </section>
);

export default HeroSection;
