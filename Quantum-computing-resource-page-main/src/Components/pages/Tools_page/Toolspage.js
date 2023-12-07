import React from 'react';
import tools from '../../../Data/Tools/Tools_data'; // Import the tool data from data.js
import './toolspage.css';

const Tools = () => {
  // Sort the tools alphabetically by name
  const sortedTools = [...tools].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="company">
      <div className='tool-container'>
        {sortedTools.map((tool, index) => (
          <div key={index} className='tool-card'>
            <h2>{tool.name}</h2>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              Visit Tool
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
