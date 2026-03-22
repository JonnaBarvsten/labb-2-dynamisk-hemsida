import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [isRaining, setIsRaining] = useState(false);

  const codeSnippets = ['var', 'public class', 'string', 'int', 'Console.WriteLine', '.NET', 'C#', 'async', 'await', 'List<>', 'EF Core', 'LINQ'];

  useEffect(() => {
    let rainInterval = null;

    // Vi skapar en tydlig funktion för vad som händer vid varje "regndroppe"
    const createCodeDrop = () => {
      const drop = document.createElement('div');
      const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      
      drop.innerText = randomCode;
      drop.className = 'code-rain'; 
      drop.style.left = Math.random() * 95 + "vw";
      
      document.body.appendChild(drop);

      // Ta bort droppen efter 4 sekunder
      setTimeout(() => {
        drop.remove();
      }, 4000);
    };

    if (isRaining) {
      // Här startar vi intervallet – 150ms mellan varje ord
      rainInterval = setInterval(createCodeDrop, 150);
    }

    // Cleanup: Stoppa intervallet när isRaining blir false eller om vi lämnar sidan
    return () => {
      if (rainInterval) {
        clearInterval(rainInterval);
      }
    };
  }, [isRaining]);

  return (
    <header>
      <h1 
        className="logo" 
        style={{ cursor: 'pointer' }} 
        id="logo" 
        onClick={() => setIsRaining(!isRaining)}
      >
        The <span className="highlight">.NET</span> Journey
      </h1>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><NavLink to="/">Hem</NavLink></li>
          <li><NavLink to="/about">Om Mig</NavLink></li>
          <li><NavLink to="/cv">CV</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}