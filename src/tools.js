import './style.css'

// Initialize tools page
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('tools-app');
  
  app.innerHTML = `
    <!-- Background Effects -->
    <div class="bg-effects">
      <div class="bg-grid"></div>
    </div>
    
    <!-- Header -->
    <header class="header">
      <nav class="nav">
        <a href="/" class="logo-container">
          <img src="/Logo_Deepseyes_Transparent.png" alt="Deepseyes" class="logo-image">
          <span class="logo-text">Deepseyes</span>
        </a>
        <ul class="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/#fonctionnalites">Fonctionnalités</a></li>
          <li><a href="/faq.html">FAQ</a></li>
          <li><a href="/tools.html">Nos outils</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <a href="#" class="btn-login">Log In</a>
      </nav>
    </header>

    <!-- Tools Hero Section -->
    <section class="hero tools-hero">
      <div class="hero-content">
        <h1>Nos outils OSINT</h1>
        <p>Découvrez notre collection d'outils open source pour l'intelligence en sources ouvertes, développés par la communauté Deepseyes.</p>
      </div>
    </section>

    <!-- Tools Grid Section -->
    <section class="section">
      <div class="tools-grid">
        <div class="tool-card">
          <div class="tool-header">
            <div class="tool-icon">
              <i class="fas fa-network-wired"></i>
            </div>
            <div class="tool-badge">Open Source</div>
          </div>
          <div class="tool-content">
            <h3>NetTrace</h3>
            <p>Outil complet d'OSINT pour l'analyse de domaines. Effectuez une reconnaissance passive approfondie sans dépendance à des APIs payantes.</p>
            <div class="tool-features">
              <span class="feature-tag">WHOIS Lookup</span>
              <span class="feature-tag">DNS Analysis</span>
              <span class="feature-tag">Subdomain Discovery</span>
              <span class="feature-tag">Confidence Score</span>
            </div>
          </div>
          <div class="tool-actions">
            <a href="/nettrace.html" class="btn-tool-details">
              <i class="fas fa-info-circle"></i>
              En savoir plus
            </a>
            <a href="https://github.com/Rooot3301/NETTRACE" target="_blank" class="btn-tool-download">
              <i class="fab fa-github"></i>
              Télécharger
            </a>
          </div>
        </div>

        <!-- Placeholder for future tools -->
        <div class="tool-card coming-soon">
          <div class="tool-header">
            <div class="tool-icon">
              <i class="fas fa-search"></i>
            </div>
            <div class="tool-badge coming-soon-badge">Bientôt</div>
          </div>
          <div class="tool-content">
            <h3>Outil à venir</h3>
            <p>D'autres outils OSINT sont en cours de développement. Restez connectés pour découvrir nos prochaines créations.</p>
          </div>
          <div class="tool-actions">
            <button class="btn-tool-details disabled">
              <i class="fas fa-clock"></i>
              Bientôt disponible
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Section -->
    <section class="section">
      <div class="community-section">
        <h2>Rejoignez la communauté</h2>
        <p>Contribuez au développement de nos outils, partagez vos idées et collaborez avec d'autres passionnés d'OSINT.</p>
        <div class="community-buttons">
          <a href="https://discord.gg/T7JrFDPWBf" target="_blank" class="btn-primary">
            <i class="fab fa-discord"></i>
            Rejoindre Discord
          </a>
          <a href="https://github.com/Rooot3301" target="_blank" class="btn-secondary">
            <i class="fab fa-github"></i>
            Voir sur GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer enhanced-footer">
      <div class="footer-content">
        <div class="footer-header">
          <h3 class="footer-title">Deepseyes</h3>
          <p class="footer-slogan">L'Intelligence de l'Invisible</p>
        </div>
        
        <div class="footer-links">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Contact</a>
        </div>
        
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
          <a href="https://discord.gg/T7JrFDPWBf" target="_blank" class="social-icon"><i class="fab fa-discord"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
        
        <div class="footer-cta">
          <a href="/" class="btn-footer-cta">Rejoindre l'Alpha</a>
        </div>
        
        <div class="copyright">
          <p>© 2025 Deepseyes. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `;

  // Initialize background effects
  const container = document.querySelector('.bg-effects');
  const grid = document.createElement('div');
  grid.className = 'bg-grid';
  container.appendChild(grid);
});