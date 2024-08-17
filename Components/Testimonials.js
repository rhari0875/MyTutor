import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <h2 className="testimonials-heading">Hear more about us from<br/>Students</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="testimonial-text">
            "My Tutor has completely transformed the way I study. The interactive quizzes and flashcards make reviewing material so much more engaging, and the summarization feature helps me grasp key concepts quickly. I feel more confident and prepared for my exams than ever before!"
            </p>
            <h4 className="testimonial-author">Mohammed Sharafath</h4>
            <span className="testimonial-role">Student</span>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
            "The experiential learning approach of My Tutor is a game-changer. The practical application of concepts through quizzes and flashcards has really helped me solidify my understanding. I love how the summaries make it easy to review and retain information efficiently. It's a fantastic tool for any student looking to improve their study habits."
            </p>
            <h4 className="testimonial-author">Vigneash</h4>
            <span className="testimonial-role">Student</span>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
            Using My Tutor has made learning fun and interactive. The flashcards are perfect for quick reviews, and the quizzes keep me motivated. The summarization feature helps me focus on the most important information, making studying less stressful and more productive."
            </p>
            <h4 className="testimonial-author">Dharsan</h4>
            <span className="testimonial-role">Student</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
