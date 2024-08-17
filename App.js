import './App.css';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Summarization from './Frontend/Summarization/Summarization';
import Quiz from './Frontend/Quiz/Quiz';
import FlashCards from './Frontend/FlashCards/FlashCards';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import FeaturesSection from './Pages/Features';
import ContactSection from './Pages/ContactSection';


function App() {
  const [responseData, setResponseData] = useState(null);

  const setdata = (data) => {
    setResponseData(data);
  };
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home setfunc={setdata}/>} />
        <Route path="/summarization" element={<Summarization response={responseData}/>} />
        <Route path="/quiz" element={<Quiz response={responseData}/>} />
        <Route path="/flashcards" element={<FlashCards response={responseData}/>} />
        <Route path="/features" element={<FeaturesSection/>}/>
        <Route path="/contact" element={<ContactSection/>}/>
        
        
      </Routes>
    </Router>
   
    
  );
}

export default App;
