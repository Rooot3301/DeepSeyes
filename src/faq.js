import './style.css'

// Search functionality
function initFAQSearch() {
  const searchInput = document.querySelector('.faq-search-input');
  const faqItems = document.querySelectorAll('.faq-item');
  const faqCategories = document.querySelectorAll('.faq-category');
  const searchResults = document.querySelector('.search-results');
  const clearSearch = document.querySelector('.clear-search');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
      // Show all items and categories
      faqItems.forEach(item => {
        item.style.display = 'block';
        // Close any open answers
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        answer.classList.remove('active');
        icon.classList.remove('active');
      });
      faqCategories.forEach(category => category.style.display = 'block');
      searchResults.style.display = 'none';
      clearSearch.style.display = 'none';
      return;
    }

    let hasResults = false;
    let resultCount = 0;

    faqCategories.forEach(category => {
      const categoryItems = category.querySelectorAll('.faq-item');
      let categoryHasResults = false;

      categoryItems.forEach(item => {
        const question = item.querySelector('.faq-question span').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
        
        if (question.includes(query) || answer.includes(query)) {
          item.style.display = 'block';
          categoryHasResults = true;
          hasResults = true;
          resultCount++;
          
          // Auto-expand matching items
          const answerEl = item.querySelector('.faq-answer');
          const icon = item.querySelector('.faq-icon');
          answerEl.classList.add('active');
          icon.classList.add('active');
          
          // Highlight matching text
          highlightText(item, query);
        } else {
          item.style.display = 'none';
        }
      });

      // Show/hide category based on results
      category.style.display = categoryHasResults ? 'block' : 'none';
    });

    // Update search results info
    if (hasResults) {
      searchResults.innerHTML = `<i class="fas fa-search"></i> ${resultCount} résultat${resultCount > 1 ? 's' : ''} trouvé${resultCount > 1 ? 's' : ''} pour "${query}"`;
      searchResults.style.display = 'block';
    } else {
      searchResults.innerHTML = `<i class="fas fa-search"></i> Aucun résultat pour "${query}"`;
      searchResults.style.display = 'block';
    }
    
    clearSearch.style.display = 'block';
  });

  // Clear search functionality
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });

  // Clear search on Escape key
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      clearSearch.click();
    }
  });
}

// Highlight matching text
function highlightText(item, query) {
  const question = item.querySelector('.faq-question span');
  const answer = item.querySelector('.faq-answer p');
  
  // Remove existing highlights
  question.innerHTML = question.textContent;
  answer.innerHTML = answer.textContent;
  
  // Add highlights
  const regex = new RegExp(`(${query})`, 'gi');
  question.innerHTML = question.textContent.replace(regex, '<mark>$1</mark>');
  answer.innerHTML = answer.textContent.replace(regex, '<mark>$1</mark>');
}

// FAQ functionality
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-question');
  
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const icon = item.querySelector('.faq-icon');
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherAnswer = otherItem.nextElementSibling;
          const otherIcon = otherItem.querySelector('.faq-icon');
          otherAnswer.classList.remove('active');
          otherIcon.classList.remove('active');
        }
      });
      
      // Toggle current FAQ item
      answer.classList.toggle('active');
      icon.classList.toggle('active');
    });
  });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
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
}

// Initialize FAQ page
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('faq-app');
  
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

    <!-- FAQ Hero Section -->
    <section class="hero faq-hero">
      <div class="hero-content">
        <h1>Questions Fréquentes</h1>
        <p>Trouvez rapidement les réponses à vos questions sur Deepseyes, notre plateforme d'OSINT assistée par IA.</p>
        
        <!-- Search Bar -->
        <div class="faq-search-container">
          <div class="faq-search-box">
            <i class="fas fa-search search-icon"></i>
            <input type="text" class="faq-search-input" placeholder="Rechercher dans la FAQ..." autocomplete="off">
            <button class="clear-search" style="display: none;">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="search-results" style="display: none;"></div>
        </div>
        
        <div class="faq-quick-nav">
          <a href="#general" class="quick-nav-btn">
            <i class="fas fa-info-circle"></i>
            Général
          </a>
          <a href="#access" class="quick-nav-btn">
            <i class="fas fa-rocket"></i>
            Accès & Alpha
          </a>
          <a href="#security" class="quick-nav-btn">
            <i class="fas fa-shield-alt"></i>
            Sécurité
          </a>
          <a href="#services" class="quick-nav-btn">
            <i class="fas fa-handshake"></i>
            Services
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-main">
      <div class="faq-container">
        
        <!-- Général -->
        <div id="general" class="faq-category">
          <h3 class="faq-category-title">
            <i class="fas fa-info-circle"></i>
            Général
          </h3>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Qu'est-ce que Deepseyes ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>Deepseyes est une plateforme d'OSINT (Open Source Intelligence) assistée par intelligence artificielle. Elle permet d'explorer, analyser et visualiser les informations accessibles publiquement sur Internet afin d'aider à la veille stratégique, à la cybersécurité et aux enquêtes numériques.<br><br>Pensé pour les professionnels comme pour les passionnés, Deepseyes offre des outils puissants, sécurisés et respectueux de l'éthique et du RGPD, afin de révéler l'invisible tout en garantissant la confidentialité des recherches.</p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>À qui s'adresse Deepseyes ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>Deepseyes s'adresse à toute personne ou organisation ayant besoin de rechercher, analyser et comprendre des données publiques de manière rapide et structurée.<br><br>Nos outils sont pensés pour :<br><br><strong>Les professionnels de la cybersécurité :</strong> détection de menaces, veille technique, investigations numériques.<br><br><strong>Les journalistes et enquêteurs :</strong> recherche d'informations vérifiées et traçage de sources.<br><br><strong>Les entreprises et institutions :</strong> veille concurrentielle, analyse de marché, gestion de réputation.<br><br><strong>Les passionnés d'OSINT :</strong> exploration et apprentissage dans un cadre légal et sécurisé.<br><br>Que vous soyez un expert ou un débutant, Deepseyes fournit un environnement clair, éthique et performant pour transformer des données brutes en informations exploitables.</p>
            </div>
          </div>
        </div>

        <!-- Accès & Alpha -->
        <div id="access" class="faq-category">
          <h3 class="faq-category-title">
            <i class="fas fa-rocket"></i>
            Accès & Alpha
          </h3>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Est-ce que l'outil est déjà accessible ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>Pas encore au public.<br><br>Deepseyes est actuellement en phase de développement et prépare le lancement de son alpha privée. Cette première version permettra à un nombre limité d'utilisateurs de tester nos fonctionnalités clés et de contribuer à améliorer la plateforme.<br><br>Vous pouvez dès maintenant réserver votre accès en vous inscrivant à notre liste d'attente — et être informé en avant-première de l'ouverture.</p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>Comment rejoindre l'alpha ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>L'Alpha privée de Deepseyes arrive bientôt.<br><br>Pour en faire partie, vous pourrez prochainement :<br><br><strong>• Vous inscrire via notre formulaire en ligne</strong> pour recevoir une invitation prioritaire.<br><br><strong>• Rejoindre notre serveur Discord dédié</strong>, où les premiers accès seront distribués et où vous pourrez suivre en direct les annonces, mises à jour et tests.<br><br>Les premiers membres du Discord auront plus de chances d'obtenir leur accès rapidement.<br><br><strong>Restez à l'affût : les invitations seront ouvertes très bientôt.</strong></p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>Combien coûtera Deepseyes ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>Deepseyes proposera un modèle freemium :<br><br><strong>• Accès gratuit</strong> aux outils de base pour découvrir et utiliser l'OSINT assisté par IA.<br><br><strong>• Abonnement premium</strong> pour débloquer des fonctionnalités avancées, des analyses plus poussées et des limites élargies.<br><br>Les tarifs exacts seront annoncés à l'ouverture de la bêta, avec des offres préférentielles pour les premiers utilisateurs et les membres de l'Alpha.</p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>Puis-je utiliser Deepseyes sans être expert ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>Oui. Deepseyes est conçu pour être accessible à tous, que vous soyez débutant curieux ou professionnel expérimenté.<br><br><strong>• Interface claire et intuitive</strong> pour se lancer rapidement.<br><br><strong>• Guides intégrés et tutoriels</strong> pour apprendre à utiliser chaque outil pas à pas.<br><br><strong>• Modes d'analyse assistée par IA</strong> pour interpréter facilement les résultats, même sans connaissances techniques poussées.<br><br>Notre objectif : rendre la puissance de l'OSINT compréhensible et exploitable par le plus grand nombre, sans compromis sur la qualité des analyses.</p>
            </div>
          </div>
        </div>

        <!-- Technique & Sécurité -->
        <div id="security" class="faq-category">
          <h3 class="faq-category-title">
            <i class="fas fa-shield-alt"></i>
            Technique & Sécurité
          </h3>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Comment mes données sont-elles protégées ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>La sécurité et la confidentialité de vos données sont une priorité absolue pour Deepseyes.<br><br><strong>• Chiffrement complet</strong> des échanges et du stockage (HTTPS/TLS & chiffrement AES).<br><br><strong>• Aucune revente ni partage</strong> de vos informations personnelles à des tiers.<br><br><strong>• Conformité RGPD :</strong> vos données restent sous votre contrôle et peuvent être supprimées à tout moment sur simple demande.<br><br><strong>• Serveurs sécurisés</strong> avec surveillance en continu et protection contre les intrusions.<br><br>Deepseyes est conçu pour que vos recherches et vos données restent strictement confidentielles.</p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>Y aura-t-il une version mobile ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>Oui. Deepseyes sera accessible depuis un navigateur web sur mobile et tablette dès le lancement, avec une interface optimisée pour les petits écrans.<br><br>Une application mobile dédiée (iOS & Android) est également prévue dans notre feuille de route, afin d'offrir une expérience plus fluide, des notifications en temps réel et un accès rapide aux outils OSINT, même en déplacement.</p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <span>Puis-je intégrer mes propres sources ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>Oui. Deepseyes permettra d'ajouter et connecter vos propres sources de données dès les versions avancées.<br><br><strong>• Import de fichiers</strong> (CSV, JSON, TXT…)<br><br><strong>• Connexion à des flux RSS ou API externes</strong><br><br><strong>• Intégration de bases de données internes</strong> (selon vos droits et votre infrastructure)<br><br>Cette fonctionnalité ne sera pas disponible dès l'Alpha publique, mais elle fait partie de notre feuille de route prioritaire pour offrir un environnement OSINT entièrement personnalisable.</p>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div id="services" class="faq-category">
          <h3 class="faq-category-title">
            <i class="fas fa-handshake"></i>
            Services
          </h3>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Puis-je contacter l'équipe pour du consulting ?</span>
              <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
              <p>Pas pour le moment.<br><br>Deepseyes se concentre actuellement sur le développement et le lancement de la plateforme.<br><br>Cependant, des services de consulting et d'accompagnement personnalisé (veille stratégique, cybersécurité, formation OSINT) sont prévus dans le futur, une fois la version complète disponible.<br><br>Les annonces liées à ces services seront communiquées sur notre site et notre serveur Discord.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section">
      <div class="faq-cta">
        <h2>Vous avez d'autres questions ?</h2>
        <p>Rejoignez notre communauté Discord pour poser vos questions directement à l'équipe et échanger avec d'autres utilisateurs.</p>
        <div class="cta-buttons">
          <a href="https://discord.gg/T7JrFDPWBf" target="_blank" class="btn-primary">
            <i class="fab fa-discord"></i>
            Rejoindre Discord
          </a>
          <a href="/#contact" class="btn-secondary">
            <i class="fas fa-envelope"></i>
            Nous contacter
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
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
          <a href="https://discord.gg/T7JrFDPWBf" target="_blank" class="social-icon"><i class="fab fa-discord"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
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

  // Initialize functionality
  initFAQ();
  initSmoothScroll();
  initFAQSearch();
});