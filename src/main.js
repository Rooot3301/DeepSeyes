import './style.css'

// Background animation
function createBackgroundEffects() {
  const container = document.querySelector('.bg-effects');
  
  // Create grid background
  const grid = document.createElement('div');
  grid.className = 'bg-grid';
  container.appendChild(grid);
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

// Email form handling
function initEmailForm() {
  const form = document.querySelector('.email-form');
  const input = document.querySelector('.email-input');
  const button = document.querySelector('.btn-notify');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    
    if (email && isValidEmail(email)) {
      button.textContent = 'Inscrit !';
      button.style.background = '#10b981';
      input.value = '';
      
      setTimeout(() => {
        button.textContent = 'Être notifié';
        button.style.background = '#2563eb';
      }, 3000);
    } else {
      input.style.borderColor = '#ef4444';
      setTimeout(() => {
        input.style.borderColor = 'rgba(255, 255, 255, 0.15)';
      }, 2000);
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(10, 10, 10, 0.98)';
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.95)';
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll('.section, .feature-card, .alpha-section, .faq-item');
  animatableElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // Add staggered animation for feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Add staggered animation for FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.05}s`;
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create the main app structure
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Background Effects -->
    <div class="bg-effects"></div>
    
    <!-- Header -->
    <header class="header">
      <nav class="nav">
        <a href="#" class="logo-container">
          <img src="/Logo_Deepseyes_Transparent.png" alt="Deepseyes" class="logo-image">
          <span class="logo-text">Deepseyes</span>
        </a>
        <ul class="nav-links">
          <li><a href="#accueil">À propos</a></li>
          <li><a href="#fonctionnalites">Fonctionnalités</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#" class="btn-login">Log In</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="accueil" class="hero">
      <div class="hero-content">
        <h1>Le renseignement intelligent.</h1>
        <p>Deepseyes est en cours de développement. Rejoignez bientôt notre alpha privée.</p>
        <div class="hero-buttons">
          <a href="#fonctionnalites" class="btn-primary">Explore Features</a>
          <a href="/demo.html" class="btn-secondary">Voir la démo</a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="fonctionnalites" class="section">
      <h2>Fonctionnalités</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>Moteur de recherche OSINT intelligent</h3>
          <p>Explorez le web avec des algorithmes d'IA avancés pour découvrir des informations pertinentes et cachées.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          <h3>Visualisation avancée des données</h3>
          <p>Transformez vos données en graphiques interactifs et cartes de relations pour une analyse approfondie.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-bell"></i>
          </div>
          <h3>Système d'alertes personnalisées</h3>
          <p>Recevez des notifications en temps réel sur les sujets qui vous intéressent grâce à notre veille automatisée.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-lock"></i>
          </div>
          <h3>Sécurité & confidentialité renforcées</h3>
          <p>Vos recherches et données sont protégées par un chiffrement de bout en bout et des protocoles sécurisés.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-search-plus"></i>
          </div>
          <h3>Mode investigation contextuelle</h3>
          <p>Activez un environnement dédié à l'enquête. Visualisation en plein écran, filtres d'entités, historique des découvertes, et boîte de notes personnelles. Conçu pour les analystes, journalistes ou professionnels de la cybersécurité.</p>
        </div>
      </div>
    </section>

    <!-- Alpha Section -->
    <section class="section">
      <div class="alpha-section">
        <h2>Rejoindre l'Alpha</h2>
        <p>L'alpha de Deepseyes ouvrira prochainement. Inscrivez-vous pour être informé en avant-première.</p>
        <form class="email-form">
          <input type="email" class="email-input" placeholder="Votre adresse e-mail" required>
          <button type="submit" class="btn-notify">Être notifié</button>
        </form>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
      <h2>Questions Fréquentes</h2>
      <div class="faq-container">
        <div class="faq-item">
          <div class="faq-question">
            <span>Qu'est-ce que Deepseyes ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Une plateforme d'analyse OSINT boostée par l'IA pour collecter et analyser les données publiques du web.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>À qui s'adresse Deepseyes ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Aux professionnels de la cybersécurité, journalistes, analystes, chercheurs, et curieux du renseignement.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Est-ce que l'outil est déjà accessible ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Non, le projet est en phase de développement. Une alpha privée sera bientôt ouverte.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Comment rejoindre l'alpha ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Un formulaire de pré-inscription sera disponible prochainement sur cette page.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Combien coûtera Deepseyes ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Un modèle freemium est prévu avec des abonnements premium pour les fonctions avancées.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Comment mes données sont-elles protégées ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Toutes les données sont chiffrées, traitées localement ou anonymement.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Puis-je utiliser Deepseyes sans être expert ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Oui, une interface intuitive guidera les utilisateurs même débutants.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Y aura-t-il une version mobile ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Une version responsive est prévue dans les futures mises à jour.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Puis-je intégrer mes propres sources ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Oui, l'outil permettra d'ajouter des flux personnalisés ou des cibles spécifiques.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Puis-je contacter l'équipe pour du consulting ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>Oui, des offres de consulting et d'accompagnement sur mesure seront proposées.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Contact</a>
        </div>
        
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
        
        <div class="copyright">
          <p>Copyright © Deepseyes 2025</p>
        </div>
      </div>
    </footer>
  `;

  // Initialize all functionality
  createBackgroundEffects();
  initFAQ();
  initEmailForm();
  initSmoothScroll();
  initHeaderScroll();
  initScrollAnimations();
});