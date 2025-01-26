import React from 'react'
import { useState } from 'react';
import './CrisisHelp.css';

const CrisisHelp = () => {
  const [open, isOpen] = useState(false);

  const toggleOverlay = () => {
    isOpen(!open);
  }

  return (
    <>
      {/* Floating Button */}
      <button className="help-button" onClick={toggleOverlay}>
        Help
      </button>

    



      {/* Overlay Content */}
      {open && (
        <div className="overlay">
          <div className="overlay-content">
            <ul>
              <li>
              National Suicide Prevention Lifeline: <span id="number">988</span>
              </li>
              <li>
              Crisis Text Line: Text HOME to <span id="number">741741</span>
              </li>
              <li id="specialLineHeight">
              The Trevor Project (For LGBTQ+ Youth): <span id="number">1-866-488-7386</span> // Text <span id="number">START to 678678</span>
              </li>
              <li>
              Veterans Crisis Line: <span id="number">988, then press 1</span>
              </li>
              <li id="specialLineHeight">
              Substance Abuse and Mental Health Services Administration: <span id="number">1-800-662-4357</span>
              </li>
              
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default CrisisHelp
