export default function Footer() {
    return (
        <footer>
            <section className="footer-content">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/jonna-barvsten" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/JonnaBarvsten" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

                <div className="contact-info">
                    <p><i className="fas fa-phone"></i> +46-720 02 753</p>
                    <p>
                        <i className="fas fa-envelope"></i> 
                        <a href="mailto:Jonna.Barvsten@gmail.com"> Jonna.Barvsten@gmail.com</a>
                    </p>
                </div>
                
                <p className="footer-journey">&copy; Jonna Barvsten - The .NET Journey</p>
            </section>
        </footer>
    )
}