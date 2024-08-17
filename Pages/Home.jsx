import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Components/style.css'; 

import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
//import ContactSection from './ContactSection';
import Footer from '../Components/Footer';
import SelfLearning from '../Components/SelfLearning';
import ExperientialLearning from '../Components/ExperientialLearning';
import Testimonials from '../Components/Testimonials';


const Home = ({ setfunc }) => {
  //const navigate = useNavigate();
  const location = useLocation();
  const { loguser } = location.state || {};

  return (
    <>
      <Header/>
      <HeroSection setfunc={setfunc} />
      <SelfLearning></SelfLearning>
      <ExperientialLearning></ExperientialLearning>
      <Testimonials></Testimonials>
      <Footer />
    </>
  );
};

export default Home;
