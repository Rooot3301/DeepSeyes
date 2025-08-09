import './style.css'

// Background animation
function createBackgroundEffects() {
  const container = document.querySelector('.bg-effects');
  
  // Create grid background
  const grid = document.createElement('div');
  grid.className = 'bg-grid';
  container.appendChild(grid);

  // Create particle network
  createParticleNetwork(container);
}

// Particle network system
function createParticleNetwork(container) {
  const canvas = document.createElement('canvas');
  canvas.className = 'particle-canvas';
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  
  // Resize canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Particle class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      // Bounce off edges
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      
      // Keep particles in bounds
      this.x = Math.max(0, Math.min(canvas.width, this.x));
      this.y = Math.max(0, Math.min(canvas.height, this.y));
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(37, 99, 235, ${this.opacity})`;
      ctx.fill();
    }
  }
  
  // Initialize particles
  function initParticles() {
    particles = [];
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // Draw connections between nearby particles
  function drawConnections() {
    const maxDistance = 120;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Draw connections
    drawConnections();
    
    animationId = requestAnimationFrame(animate);
  }
  
  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;
  
  canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Attract nearby particles to mouse
    particles.forEach(particle => {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100 * 0.01;
        particle.vx += dx * force * 0.01;
        particle.vy += dy * force * 0.01;
      }
    });
  });
  
  // Initialize and start
  resizeCanvas();
  initParticles();
  animate();
  
  // Handle resize
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
  
  // Pause animation when page is not visible (performance)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
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
          <li><a href="/tools.html">Nos outils</a></li>
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
        
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Conformité RGPD & éthique des données</h3>
          <p>Deepseyes respecte strictement les normes européennes en matière de traitement des données. Aucune donnée sensible n'est conservée, et toutes les analyses sont effectuées dans le respect de la vie privée. Un OSINT éthique, transparent et responsable.</p>
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
            <span>Comment mes données sont-elles protégées ?</span>
            <i class="fas fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-answer">
            <p>La sécurité et la confidentialité de vos données sont une priorité absolue pour Deepseyes.<br><br><strong>• Chiffrement complet</strong> des échanges et du stockage (HTTPS/TLS & chiffrement AES).<br><br><strong>• Aucune revente ni partage</strong> de vos informations personnelles à des tiers.<br><br><strong>• Conformité RGPD :</strong> vos données restent sous votre contrôle et peuvent être supprimées à tout moment sur simple demande.<br><br><strong>• Serveurs sécurisés</strong> avec surveillance en continu et protection contre les intrusions.<br><br>Deepseyes est conçu pour que vos recherches et vos données restent strictement confidentielles.</p>
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
          <a href="https://discord.gg/T7JrFDPWBf" target="_blank" class="social-icon"><i class="fab fa-discord"></i></a>
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