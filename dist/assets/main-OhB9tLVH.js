import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */function q(){const s=document.querySelector(".bg-effects"),e=document.createElement("div");e.className="bg-grid",s.appendChild(e),y(s)}function y(s){const e=document.createElement("canvas");e.className="particle-canvas",s.appendChild(e);const t=e.getContext("2d");let i=[],a;function r(){e.width=window.innerWidth,e.height=window.innerHeight}class o{constructor(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+1,this.opacity=Math.random()*.5+.2}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>e.width)&&(this.vx*=-1),(this.y<0||this.y>e.height)&&(this.vy*=-1),this.x=Math.max(0,Math.min(e.width,this.x)),this.y=Math.max(0,Math.min(e.height,this.y))}draw(){t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fillStyle=`rgba(37, 99, 235, ${this.opacity})`,t.fill()}}function v(){i=[];const l=Math.min(80,Math.floor(e.width*e.height/15e3));for(let n=0;n<l;n++)i.push(new o)}function b(){for(let n=0;n<i.length;n++)for(let c=n+1;c<i.length;c++){const d=i[n].x-i[c].x,u=i[n].y-i[c].y,p=Math.sqrt(d*d+u*u);if(p<120){const g=(1-p/120)*.15;t.beginPath(),t.moveTo(i[n].x,i[n].y),t.lineTo(i[c].x,i[c].y),t.strokeStyle=`rgba(37, 99, 235, ${g})`,t.lineWidth=.5,t.stroke()}}}function f(){t.clearRect(0,0,e.width,e.height),i.forEach(l=>{l.update(),l.draw()}),b(),a=requestAnimationFrame(f)}let m=0,h=0;e.addEventListener("mousemove",l=>{m=l.clientX,h=l.clientY,i.forEach(n=>{const c=m-n.x,d=h-n.y,u=Math.sqrt(c*c+d*d);if(u<100){const p=(100-u)/100*.01;n.vx+=c*p*.01,n.vy+=d*p*.01}})}),r(),v(),f(),window.addEventListener("resize",()=>{r(),v()}),document.addEventListener("visibilitychange",()=>{document.hidden?cancelAnimationFrame(a):f()})}function x(){const s=document.querySelectorAll(".faq-question");s.forEach(e=>{e.addEventListener("click",()=>{const t=e.nextElementSibling,i=e.querySelector(".faq-icon");s.forEach(a=>{if(a!==e){const r=a.nextElementSibling,o=a.querySelector(".faq-icon");r.classList.remove("active"),o.classList.remove("active")}}),t.classList.toggle("active"),i.classList.toggle("active")})})}function S(){const s=document.querySelector(".email-form"),e=document.querySelector(".email-input"),t=document.querySelector(".btn-notify");s.addEventListener("submit",i=>{i.preventDefault();const a=e.value.trim();a&&w(a)?(t.textContent="Inscrit !",t.style.background="#10b981",e.value="",setTimeout(()=>{t.textContent="Être notifié",t.style.background="#2563eb"},3e3)):(e.style.borderColor="#ef4444",setTimeout(()=>{e.style.borderColor="rgba(255, 255, 255, 0.15)"},2e3))})}function w(s){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)}function D(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const i=e.getAttribute("href"),a=document.querySelector(i);a&&a.scrollIntoView({behavior:"smooth",block:"start"})})})}function E(){const s=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>100?(s.style.background="rgba(10, 10, 10, 0.98)",s.style.borderBottomColor="rgba(255, 255, 255, 0.12)"):(s.style.background="rgba(10, 10, 10, 0.95)",s.style.borderBottomColor="rgba(255, 255, 255, 0.08)")})}function A(){const s={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&o.target.classList.add("animate-in")})},s);document.querySelectorAll(".section, .feature-card, .alpha-section, .faq-item").forEach(r=>{r.classList.add("animate-on-scroll"),e.observe(r)}),document.querySelectorAll(".feature-card").forEach((r,o)=>{r.style.animationDelay=`${o*.1}s`}),document.querySelectorAll(".faq-item").forEach((r,o)=>{r.style.animationDelay=`${o*.05}s`})}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("app");s.innerHTML=`
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
          <li><a href="/faq.html">FAQ</a></li>
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
        
        <!-- Général -->
        <div class="faq-category">
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
        <div class="faq-category">
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
        <div class="faq-category">
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
        <div class="faq-category">
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
          <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
        
        <div class="copyright">
          <p>Copyright © Deepseyes 2025</p>
        </div>
      </div>
    </footer>
  `,q(),x(),S(),D(),E(),A()});
