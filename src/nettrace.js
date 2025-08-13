import './style.css'
import { getHeaderHTML, initMobileMenu } from './components/layout.js';

// Initialize NetTrace page
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('nettrace-app');
  
  app.innerHTML = `
    <!-- Background Effects -->
    <div class="bg-effects">
      <div class="bg-grid"></div>
    </div>
    
    <!-- Floating Discord Button -->
    <a href="https://discord.gg/T7JrFDPWBf" target="_blank" class="floating-discord" title="Rejoindre Discord">
      <i class="fab fa-discord"></i>
    </a>
    
    <!-- Header -->
    ${getHeaderHTML()}

    <!-- NetTrace Hero Section -->
    <section class="hero nettrace-hero">
      <div class="hero-content">
        <div class="tool-header-info">
          <div class="tool-icon-large">
            <i class="fas fa-network-wired"></i>
          </div>
          <div class="tool-badges">
            <span class="badge open-source">Open Source</span>
            <span class="badge python">Python</span>
            <span class="badge osint">OSINT</span>
          </div>
        </div>
        <h1>NetTrace</h1>
        <p>Outil complet d'OSINT pour l'analyse de domaines, développé en Python pur sans dépendance à des APIs payantes. Effectuez une reconnaissance passive approfondie sur n'importe quel domaine.</p>
        <div class="hero-buttons">
          <a href="https://github.com/Rooot3301/NETTRACE" target="_blank" class="btn-primary">
            <i class="fab fa-github"></i>
            Télécharger sur GitHub
          </a>
          <a href="#installation" class="btn-secondary">
            <i class="fas fa-download"></i>
            Guide d'installation
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section">
      <h2>🚀 Fonctionnalités</h2>
      <div class="features-grid nettrace-features">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>Analyse complète</h3>
          <ul>
            <li><strong>WHOIS Lookup :</strong> Informations sur le registrar, dates de création/expiration, propriétaire</li>
            <li><strong>Résolution DNS :</strong> Enregistrements A, AAAA, MX, TXT, NS, CNAME</li>
            <li><strong>Extraction de sous-domaines :</strong> Via crt.sh, subfinder, amass (passif uniquement)</li>
            <li><strong>Lien VirusTotal :</strong> Génération automatique du lien d'analyse</li>
            <li><strong>Score de confiance :</strong> Calcul intelligent basé sur plusieurs critères (0-100)</li>
          </ul>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          <h3>Fonctionnalités avancées</h3>
          <ul>
            <li><strong>Export multi-format :</strong> Sauvegarde en JSON ou TXT</li>
            <li><strong>Interface colorée :</strong> Affichage clair avec codes couleur</li>
            <li><strong>Mode verbeux :</strong> Débogage détaillé des opérations</li>
            <li><strong>Gestion d'erreurs :</strong> Fallbacks intelligents en cas d'échec</li>
            <li><strong>Architecture modulaire :</strong> Code propre et extensible</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section id="installation" class="section">
      <h2>📦 Installation</h2>
      <div class="installation-container">
        <div class="install-step">
          <h3>Prérequis</h3>
          <ul>
            <li>Python 3.7 ou supérieur</li>
            <li>pip (gestionnaire de paquets Python)</li>
          </ul>
        </div>

        <div class="install-step">
          <h3>Installation rapide</h3>
          <div class="code-block">
            <pre><code class="language-bash"># Cloner le repository
git clone https://github.com/Rooot3301/NETTRACE.git
cd nettrace

# Installer les dépendances
pip install -r requirements.txt</code></pre>
          </div>
        </div>

        <div class="install-step">
          <h3>Installation des outils externes (optionnel)</h3>
          <p>Pour maximiser la découverte de sous-domaines :</p>
          <div class="code-block">
            <pre><code class="language-bash"># Subfinder (Go requis)
go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest

# Amass (Go requis)
go install -v github.com/OWASP/Amass/v3/...@master</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Usage Section -->
    <section class="section">
      <h2>🎯 Usage</h2>
      <div class="usage-container">
        <div class="usage-section">
          <h3>Commandes de base</h3>
          <div class="code-block">
            <pre><code class="language-bash"># Mode interactif (recommandé)
python nettrace.py --interactive

# Analyse simple
python nettrace.py --domain google.com

# Avec export JSON
python nettrace.py --domain example.com --output rapport.json

# Avec export TXT
python nettrace.py --domain test.com --format txt --output rapport.txt

# Mode verbeux pour débogage
python nettrace.py --domain site.com --verbose</code></pre>
          </div>
        </div>

        <div class="options-table">
          <h3>Options disponibles</h3>
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Description</th>
                <th>Exemple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>--domain, -d</code></td>
                <td>Domaine à analyser (requis)</td>
                <td><code>-d google.com</code></td>
              </tr>
              <tr>
                <td><code>--output, -o</code></td>
                <td>Fichier de sortie</td>
                <td><code>-o rapport.json</code></td>
              </tr>
              <tr>
                <td><code>--format, -f</code></td>
                <td>Format d'export (json/txt)</td>
                <td><code>-f txt</code></td>
              </tr>
              <tr>
                <td><code>--verbose, -v</code></td>
                <td>Mode verbeux</td>
                <td><code>-v</code></td>
              </tr>
              <tr>
                <td><code>--interactive, -i</code></td>
                <td>Mode interactif avec menu</td>
                <td><code>-i</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Interactive Mode Section -->
    <section class="section">
      <h2>🎮 Mode interactif</h2>
      <p>NetTrace propose un mode interactif avec menu pour une utilisation plus conviviale :</p>
      <div class="interactive-demo">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="btn-close"></span>
              <span class="btn-minimize"></span>
              <span class="btn-maximize"></span>
            </div>
            <span class="terminal-title">NetTrace - Mode Interactif</span>
          </div>
          <div class="terminal-content">
            <pre>╔══════════════════════════════════════════════════════════╗
║                    🔍 NETTRACE MENU                     ║
╠══════════════════════════════════════════════════════════╣
║  1. 🎯 Analyser un domaine                               ║
║  2. 📊 Analyser avec rapport automatique                ║
║  3. 📁 Analyser plusieurs domaines (batch)              ║
║  4. ⚙️  Configuration et outils                         ║
║  5. 📖 Aide et exemples                                 ║
║  6. 🚪 Quitter                                          ║
╚══════════════════════════════════════════════════════════╝</pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Confidence Score Section -->
    <section class="section">
      <h2>📊 Score de confiance</h2>
      <p>NetTrace calcule un score de confiance sur 100 points basé sur :</p>
      
      <div class="scoring-container">
        <div class="scoring-criteria">
          <h3>Critères de scoring</h3>
          <table>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Points max</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ancienneté du domaine</td>
                <td>30 pts</td>
                <td>10+ ans (30), 3-10 ans (20), 1-3 ans (10), &lt;1 an (0)</td>
              </tr>
              <tr>
                <td>Enregistrements DNS</td>
                <td>25 pts</td>
                <td>A/MX/NS requis (8 pts chacun), AAAA/TXT optionnels (4 pts)</td>
              </tr>
              <tr>
                <td>Sous-domaines</td>
                <td>20 pts</td>
                <td>50+ (20), 20-49 (15), 5-19 (10), 1-4 (5)</td>
              </tr>
              <tr>
                <td>Informations WHOIS</td>
                <td>15 pts</td>
                <td>Registrar (5), Propriétaire (5), Statut (5)</td>
              </tr>
              <tr>
                <td>Stabilité</td>
                <td>10 pts</td>
                <td>Score basé sur la cohérence des données</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="score-interpretation">
          <h3>Interprétation des scores</h3>
          <div class="score-ranges">
            <div class="score-range high">
              <span class="score-indicator">🟢</span>
              <div class="score-info">
                <strong>80-100 : ÉLEVÉ</strong>
                <p>Domaine établi et fiable</p>
              </div>
            </div>
            <div class="score-range medium">
              <span class="score-indicator">🟡</span>
              <div class="score-info">
                <strong>60-79 : MOYEN</strong>
                <p>Domaine standard avec quelques lacunes</p>
              </div>
            </div>
            <div class="score-range low">
              <span class="score-indicator">🔴</span>
              <div class="score-info">
                <strong>0-59 : FAIBLE</strong>
                <p>Domaine récent ou suspect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Example Output Section -->
    <section class="section">
      <h2>📋 Exemple de sortie</h2>
      <div class="output-example">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="btn-close"></span>
              <span class="btn-minimize"></span>
              <span class="btn-maximize"></span>
            </div>
            <span class="terminal-title">NetTrace Output</span>
          </div>
          <div class="terminal-content">
            <pre>🔍 NETTRACE - OUTIL OSINT D'ANALYSE DE DOMAINES
By: Assistant IA | Version: 1.0

🎯 Analyse du domaine: google.com
============================================================

📋 WHOIS LOOKUP
────────────────
🏢 Registrar: MarkMonitor Inc.
📅 Date de création: 1997-09-15 04:00:00
⏰ Date d'expiration: 2028-09-14 04:00:00
👤 Propriétaire: Google LLC
📊 Statut: clientDeleteProhibited

📋 RÉSOLUTION DNS
──────────────────
🔍 A: 142.250.185.78
🔍 AAAA: 2a00:1450:4007:80c::200e
🔍 MX: 10 smtp.google.com
🔍 TXT: v=spf1 include:_spf.google.com ~all
🔍 NS: ns1.google.com, ns2.google.com

🎯 Score de confiance: 95/100 (ÉLEVÉ)</pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Ethics Section -->
    <section class="section">
      <h2>🔒 Éthique et légalité</h2>
      <div class="ethics-container">
        <div class="ethics-section">
          <h3>Usage responsable</h3>
          <div class="ethics-list">
            <div class="ethics-item allowed">
              <i class="fas fa-check-circle"></i>
              <span>Reconnaissance passive uniquement</span>
            </div>
            <div class="ethics-item allowed">
              <i class="fas fa-check-circle"></i>
              <span>Sources d'information publiques</span>
            </div>
            <div class="ethics-item allowed">
              <i class="fas fa-check-circle"></i>
              <span>Respect des robots.txt et rate limits</span>
            </div>
            <div class="ethics-item forbidden">
              <i class="fas fa-times-circle"></i>
              <span>Pas de scan actif ou intrusif</span>
            </div>
            <div class="ethics-item forbidden">
              <i class="fas fa-times-circle"></i>
              <span>Pas d'exploitation de vulnérabilités</span>
            </div>
          </div>
        </div>

        <div class="privacy-section">
          <h3>Confidentialité</h3>
          <p>NetTrace respecte la vie privée :</p>
          <ul>
            <li>Aucune donnée envoyée à des tiers (sauf requêtes publiques légitimes)</li>
            <li>Pas de tracking ou de logs externes</li>
            <li>Toutes les analyses sont locales</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="section">
      <div class="download-section">
        <h2>Télécharger NetTrace</h2>
        <p>Commencez dès maintenant votre analyse OSINT avec NetTrace</p>
        <div class="download-buttons">
          <a href="https://github.com/Rooot3301/NETTRACE" target="_blank" class="btn-primary large">
            <i class="fab fa-github"></i>
            Télécharger sur GitHub
          </a>
          <a href="https://discord.gg/T7JrFDPWBf" target="_blank" class="btn-secondary large">
            <i class="fab fa-discord"></i>
            Support Discord
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Contact</a>
        </div>
        
        <div class="social-icons">
          <a href="https://discord.gg/T7JrFDPWBf" target="_blank" class="social-icon discord" title="Discord">
            <i class="fab fa-discord"></i>
          </a>
          <a href="https://github.com/Rooot3301" target="_blank" class="social-icon github" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" class="social-icon" title="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-icon" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        
        <div class="copyright">
          <p>Copyright © Deepseyes 2025</p>
        </div>
      </div>
    </footer>
  `;

  // Initialize background effects
  const container = document.querySelector('.bg-effects');
  const grid = document.createElement('div');
  grid.className = 'bg-grid';
  container.appendChild(grid);

  // Initialize smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Initialize mobile menu
  initMobileMenu();
});
// Mobile menu functionality