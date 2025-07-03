(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();function r(){const i=document.querySelector(".bg-effects"),s=document.createElement("div");s.className="bg-grid",i.appendChild(s)}function c(){const i=document.querySelectorAll(".faq-question");i.forEach(s=>{s.addEventListener("click",()=>{const t=s.nextElementSibling,n=s.querySelector(".faq-icon");i.forEach(e=>{if(e!==s){const a=e.nextElementSibling,o=e.querySelector(".faq-icon");a.classList.remove("active"),o.classList.remove("active")}}),t.classList.toggle("active"),n.classList.toggle("active")})})}function l(){const i=document.querySelector(".email-form"),s=document.querySelector(".email-input"),t=document.querySelector(".btn-notify");i.addEventListener("submit",n=>{n.preventDefault();const e=s.value.trim();e&&d(e)?(t.textContent="Inscrit !",t.style.background="#10b981",s.value="",setTimeout(()=>{t.textContent="Être notifié",t.style.background="#2563eb"},3e3)):(s.style.borderColor="#ef4444",setTimeout(()=>{s.style.borderColor="rgba(255, 255, 255, 0.15)"},2e3))})}function d(i){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)}function f(){document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",t=>{t.preventDefault();const n=s.getAttribute("href"),e=document.querySelector(n);e&&e.scrollIntoView({behavior:"smooth",block:"start"})})})}function u(){const i=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>100?(i.style.background="rgba(10, 10, 10, 0.98)",i.style.borderBottomColor="rgba(255, 255, 255, 0.12)"):(i.style.background="rgba(10, 10, 10, 0.95)",i.style.borderBottomColor="rgba(255, 255, 255, 0.08)")})}document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("app");i.innerHTML=`
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
        <h1>Website analytics made simple.</h1>
        <p>Deepseyes is currently in development. Stay tuned for updates!</p>
        <a href="#fonctionnalites" class="btn-primary">Explore Features</a>
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
            <i class="fas fa-chart-network"></i>
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
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Sécurité & confidentialité renforcées</h3>
          <p>Vos recherches et données sont protégées par un chiffrement de bout en bout et des protocoles sécurisés.</p>
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
  `,r(),c(),l(),f(),u()});
