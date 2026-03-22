export default function About(){
    return(
        
    <main>
          <section id="about-me">
            <div className="about-group">

             <article className="about-me-card" id="images-card">
                <figure>
                    <img src="images/github.png"/>
                </figure>
             </article>

            <article className="about-me-card">
                <h2>Om Mig</h2>
                <p>Min största styrka är min problemlösningsförmåga och min vilja att förstå hur saker hänger ihop. När jag stöter på ett problem försöker jag först analysera, testa och hitta lösningen på egen hand  men jag värdesätter också teamets samlade kunskap och lär mig gärna av erfarna kollegor. Jag är en lagspelare som är van att ta ansvar och arbeta strukturerat. För mig handlar utveckling inte bara om kod, utan om att samarbeta för att driva projekt framåt och skapa lösningar.</p>
              </article>
       

            <article className="about-me-card">
                <h2>Egenskaper</h2>
                <p>Jag studerar till Fullstack .NET-utvecklare och befinner mig just nu på en spännande resa in i programmeringens värld. Just nu söker jag en LIA-plats för perioden 30 november 2026 till 18 april 2027. Som person är jag omtänksam och driven, med en bakgrund där säkerhet och struktur alltid varit i fokus. Jag trivs som bäst när jag får kombinera logiskt tänkande med kreativt skapande, och ser fram emot att få bidra med min energi och noggrannhet i ett riktigt utvecklingsteam.</p>
            </article>

            <article className="about-me-card">
                <h2>Balans</h2>
                <p>För att hålla hjärnan skärpt för kodning behöver jag röra på mig. När jag inte sitter vid datorn hittar du mig förmodligen dansandes eller ute på en långpromenad i naturen. Jag tror stenhårt på att fysisk aktivitet är nyckeln till att orka lösa svåra logiska problem.</p>
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