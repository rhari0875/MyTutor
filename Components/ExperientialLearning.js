import React from 'react';
import './ExperientialLearning.css'; 

const ExperientialLearning = () => {
  return (
    <section className="experiential-learning">
      <div className="experiential-content">
        <h2 className="experiential-heading">Experiential Learning</h2>
        <p className="experiential-description">
        My Tutor, our experiential learning approach goes beyond conventional methods by incorporating interactive features such as FlashCards, Quizzes, and Summarization. These tools are designed to make learning both engaging and practical, helping students not only understand but also apply their knowledge effectively. Our innovative approach ensures that each learning experience is memorable and impactful, empowering students to master concepts and see their real-world applications."
        </p>
        <div className="experiential-cards">
          <div className="card">
            <img src="https://www.practically.com/web/assets/images/practically/pink_with_boarder.png" alt="Interactive Learning" />
            <h3>Summarization</h3>
            <p>Streamline your learning process with concise and effective summaries that highlight key concepts and facilitate easier review and retention."</p>
          </div>
          <div className="card">
            <img src="https://www.practically.com/web/assets/images/practically/voilet_with_boarder.png" alt="Hands-On Activities" />
            <h3>Quiz</h3>
            <p>Test your knowledge and reinforce learning with interactive quizzes designed to challenge your understanding and track your progress effectively."

            </p>
          </div>
          <div className="card">
            <img src="https://www.practically.com/web/assets/images/practically/green_with_boarder.png" alt="Real-World Applications" />
            <h3>FlashCards</h3>
            <p> Enhance your study sessions with dynamic flashcards that make memorization easier and more engaging, helping you quickly review and retain essential information."

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperientialLearning;
