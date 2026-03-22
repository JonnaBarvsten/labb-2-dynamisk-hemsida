export default function Home(){
    return (
      <main>
        <section id="home">
            <div className="home-group">
            <article className="home-card">
                <h2>Välkommen</h2>
                <p>Vad roligt att du har hittat hit! Jag är en passionerad .NET-utvecklare under utbildning med ett stort intresse för att skapa smarta och användarvänliga lösningar. Här kan du följa min resa, utforska mina projekt och lära känna personen bakom koden</p>
            </article>

            <article className="home-card">
                <h2>Information om sidan</h2>
                <p>Den här sidan är skapad för att visa min utveckling och de tekniker jag behärskar, från C# och .NET till frontend-design. Utforska gärna mitt CV och mina projekt och du, glöm inte att kika efter dolda funktioner! Letar du efter en engagerad student för LIA-perioden november–april? Då har du kommit helt rätt.</p>
            </article>
            </div>

            <div id="modal-popup" className="modal-overlay">
                <article className="modal-content">
                    <button className="close-btn">&times;</button>
                    <h3>Hej!</h3>
                    <p>Välkommen till mig sida</p>
                </article>
            </div>
               
        </section>
      </main>
    )
}