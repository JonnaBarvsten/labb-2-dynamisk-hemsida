import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/JonnaBarvsten/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  const projectConfig = {
    "XmasGames": { img: "images/game.png" },
    "FourFinance": { img: "images/four-inance.jpg" },
    "Ericsson_Team_AI_Hackathon": { img: "images/hackaton.png" },
    "CV-": { img: "images/console-cv.png" }
  };

  const closeModal = () => setActiveModal(null);

  return (
    <main id="portfolio">
      <div className="portfolio-group">
        
        {repos
          .filter(repo => projectConfig[repo.name]) 
          .map((repo) => (
            <div key={repo.id}>
              <article className="project-card">
                <figure>
                  <img src={projectConfig[repo.name].img} alt={repo.name} />
                </figure>
                <button className="info-btn" onClick={() => setActiveModal(repo.id)}>
                  Info
                </button>
              </article>

              {activeModal === repo.id && (
                <div className="modal-overlay open">
                  <article className="modal-content">
                    <button className="close-btn" onClick={closeModal}>&times;</button>
                    <h3>{repo.name}</h3>
                    <p>{repo.description || "Beskrivning saknas på GitHub."}</p>
                    <br />
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="info-btn">
                      Gå till projektet
                    </a>
                  </article>
                </div>
              )}
            </div>
          ))}

      </div>
    </main>
  )
}