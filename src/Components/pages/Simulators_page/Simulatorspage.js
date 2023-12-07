import React, { useState } from 'react';
import simulatorsByLanguage from '../../../Data/Simulators/Simulators_data';
import './simulatorspage.css';

const Simulator = () => {
  const languages = simulatorsByLanguage.map((languageGroup) => languageGroup.language); // Extract languages from data
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleLanguage = (language) => {
    setSelectedLanguage(selectedLanguage === language ? null : language);
  };

  return (
    <div className="company">
      <div className="simulator-page">
        <div className="language-selection">
          {languages.map((language, index) => (
            <div
              key={index}
              className={`language-button ${selectedLanguage === language ? 'selected' : ''}`}
              onClick={() => toggleLanguage(language)}
            >
              {language}
            </div>
          ))}
        </div>
        {selectedLanguage && (
          <>
          <div className='selected-language'>
           <h3 style={{background:"#007bff"}}> Selected Language:{selectedLanguage}</h3>
           </div>
          <div className="simulator-container">
           
           
           
            {simulatorsByLanguage
              .find((languageGroup) => languageGroup.language === selectedLanguage)
              .simulators.map((simulator, index) => (
                <div key={index} className="simulator-card">
                  <h2 className="simulator-name">{simulator.name}</h2>
                  <a href={simulator.url} target="_blank" rel="noopener noreferrer">
                    Visit Simulator
                  </a>
                </div>
              ))}
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Simulator;
