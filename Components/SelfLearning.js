import React from 'react';
import './SelfLearning.css'; 

const SelfLearning = () => {
  return (
    <section className="self-learning">
      <div className="self-learning-content">
        <h2>Self-Learning</h2>
        <div className="self-learning-text">
          <img 
            src="https://www.practically.com/web/assets/images/practically/practically_shape.png" 
            alt="Practically Shape" 
            className="self-learning-image" 
          />
          <div className="self-learning-text-content">
            <p>"At My Tutor, we understand that studying can sometimes feel mundane, but true learning should be an engaging and enjoyable experience. Our approach ensures that students not only excel academically but also apply their knowledge practically in real-life scenarios. By integrating interactive and stimulating methods, we make learning a thrilling adventure. Our goal is to transform the traditional study routine into a dynamic and enjoyable journey, supporting students every step of the way."</p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-body red-card py-0">
            <img src="https://www.practically.com/web/images/trust-icon.svg" width="50" alt="Trust Icon" />
            <h1 className="pt-md-3 d-inline-flex text-center">100% </h1>
            <h6>Easy to Learn</h6>
          </div>
          <div className="card-body orange-card py-0">
            <img src="data:image/png;base64,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" width="50" alt=" Icon" />
            <h1 className="pt-md-2 d-inline-flex text-center">Helps </h1>
            <h6>For students in Exam scenarios</h6>
          </div>
          <div className="card-body voilet-card py-0 parents">
            <img src="https://www.practically.com/web/images/building-icon.svg" width="65" alt="Building Icon" />
            <h1 className="pt-md-2 d-inline-flex text-center">MoreStudents </h1>
            <h6>Trusted App</h6>
          
          </div>
        </div>
      
        </div>
      
    </section>
  );
};

export default SelfLearning;
