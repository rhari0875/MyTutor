import React from 'react';
import '../Components/style.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <section className="features-section" id="features">
        <h3 className="features-title">Features</h3>
        <div className="features-list">
      <div className="feature-item">
        <img src="https://www.practically.com/web/assets/images/practically/pink_with_boarder.png" alt="Smart Flashcards" />
        <h4>Smart Flashcards</h4>
        <p>Automatically generated flashcards from your study materials.</p>
        <button
          className="cta-button"
          onClick={() => navigate('/flashcards')}
        >
          Generate Flashcards
        </button>
      </div>
      <div className="feature-item">
        <img src="https://www.practically.com/web/assets/images/practically/voilet_with_boarder.png" alt="Personalized Quiz" />
        <h4>Personalized Quiz</h4>
        <p>Quizzes tailored to your learning progress and needs.</p>
        <button
          className="cta-button"
          onClick={() => navigate('/quiz')}
        >
          Take Quiz
        </button>
      </div>
      <div className="feature-item">
        <img src="https://www.practically.com/web/assets/images/practically/green_with_boarder.png" alt="Short Summarizing" />
        <h4>Short Summarizing</h4>
        <p>Summarize your entire study material in brief.</p>
        <button
          className="cta-button"
          onClick={() => navigate('/summarization')}
        >
          Get Summarized
        </button>
      </div>
    </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FeaturesSection;
