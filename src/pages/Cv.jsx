import cvData from '../assets/cv.json'

export default function Cv() {
  return (
    <main id="cvpage">
      <div className="cv-group">
       
        <article className="cv-card">
          <h2>UTBILDNING</h2>
          {cvData.education.map((education, index) => (
            <div key={index} className="cv-item">
              <h3>{education.title} | {education.school}</h3>
              <ul>
                {education.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <article className="cv-card">
          <h2>ERFARENHET</h2>
          {cvData.experience.map((job, index) => (
            <div key={index} className="cv-item">
              <h3>{job.role} | {job.company}</h3>
              <ul>
                {job.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <article className="cv-card">
          <h2>IDEELLT ARBETE</h2>
          {cvData.volunteer.map((volunteer, index) => (
            <div key={index} className="cv-item">
              <h3>{volunteer.organisation} | {volunteer.role}</h3>
              <ul>
                {volunteer.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <article className="cv-card">
          <h2>SPRÅK</h2>
          <ul className="language-list">
            {cvData.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </article>

      </div>
    </main>
  )
}