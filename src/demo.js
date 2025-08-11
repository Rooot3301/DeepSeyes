import './demo.css'

// Network graph data
const graphData = {
  nodes: [
    { id: "alain-dupond", name: "Alain Dupond", type: "person", x: 0, y: 0 },
    { id: "energiecorp", name: "EnergieCorp", type: "company", x: 100, y: -50 },
    { id: "linkedin", name: "LinkedIn Profile", type: "social", x: -80, y: 60 },
    { id: "email1", name: "a.dupond@energiecorp.fr", type: "email", x: 120, y: 80 },
    { id: "ip1", name: "192.168.1.45", type: "ip", x: -100, y: -80 },
    { id: "startup-x", name: "StartupX", type: "company", x: 150, y: -120 },
    { id: "bodacc", name: "BODACC Entry", type: "document", x: 80, y: 150 }
  ],
  links: [
    { source: "alain-dupond", target: "energiecorp", strength: 0.8 },
    { source: "alain-dupond", target: "linkedin", strength: 0.9 },
    { source: "alain-dupond", target: "email1", strength: 0.7 },
    { source: "energiecorp", target: "startup-x", strength: 0.6 },
    { source: "alain-dupond", target: "bodacc", strength: 0.5 },
    { source: "linkedin", target: "ip1", strength: 0.4 }
  ]
};

// Initialize network graph
function initNetworkGraph() {
  const container = document.getElementById('network-graph');
  const width = container.clientWidth;
  const height = 400;

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)')
    .style('border-radius', '12px');

  const g = svg.append('g');

  // Add zoom behavior
  const zoom = d3.zoom()
    .scaleExtent([0.5, 3])
    .on('zoom', (event) => {
      g.attr('transform', event.transform);
    });

  svg.call(zoom);

  // Create force simulation
  const simulation = d3.forceSimulation(graphData.nodes)
    .force('link', d3.forceLink(graphData.links).id(d => d.id).distance(120))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('center', d3.forceCenter(width / 2, height / 2));

  // Create links
  const link = g.append('g')
    .selectAll('line')
    .data(graphData.links)
    .enter().append('line')
    .attr('stroke', '#2563eb')
    .attr('stroke-opacity', 0.8)
    .attr('stroke-width', d => Math.sqrt(d.strength * 6))
    .style('filter', 'drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3))');

  // Create nodes
  const node = g.append('g')
    .selectAll('circle')
    .data(graphData.nodes)
    .enter().append('circle')
    .attr('r', 10)
    .attr('fill', d => {
      switch(d.type) {
        case 'person': return '#10b981';
        case 'company': return '#f59e0b';
        case 'social': return '#3b82f6';
        case 'email': return '#8b5cf6';
        case 'ip': return '#ef4444';
        case 'document': return '#6b7280';
        default: return '#2563eb';
      }
    })
    .attr('stroke', '#fff')
    .attr('stroke-width', 3)
    .style('filter', 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))')
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

  // Add labels
  const label = g.append('g')
    .selectAll('text')
    .data(graphData.nodes)
    .enter().append('text')
    .text(d => d.name)
    .attr('font-size', '11px')
    .attr('fill', '#ffffff')
    .attr('font-weight', '500')
    .attr('text-anchor', 'middle')
    .attr('dy', -18)
    .style('text-shadow', '0 1px 3px rgba(0, 0, 0, 0.8)')
    .style('pointer-events', 'none');

  // Update positions on simulation tick
  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);

    label
      .attr('x', d => d.x)
      .attr('y', d => d.y);
  });

  // Add hover effects
  node.on('mouseover', function(event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('r', 12)
      .style('filter', 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))');
  })
  .on('mouseout', function(event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('r', 10)
      .style('filter', 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))');
  });

  // Drag functions
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}

// Initialize AI chat
function initAIChat() {
  const chatInput = document.querySelector('.chat-input');
  const chatMessages = document.querySelector('.chat-messages');
  const sendButton = document.querySelector('.send-button');

  // Add example conversation
  const exampleQuery = `🔍 "Recherche des informations disponibles sur Alain Dupond, né en 1978, actif dans le secteur énergétique en Île-de-France."`;
  
  const exampleResponse = `🤖 **Analyse terminée** - Voici ce que j'ai trouvé sur Alain Dupond :

**Profil identifié :**
• Nom complet : Alain Dupond
• Âge estimé : 45 ans (né en 1978)
• Secteur : Énergie & Technologies

**Sources analysées :**
• LinkedIn : Directeur Innovation chez EnergieCorp
• BODACC : Administrateur StartupX (2022-2024)
• Presse locale : Interview Échos Énergétiques (Mars 2024)

**Connexions détectées :**
• 12 contacts professionnels identifiés
• 3 entreprises liées
• 2 brevets déposés (énergies renouvelables)

**Score de confiance :** 87% | **Dernière MAJ :** Il y a 2h`;

  addMessage('user', exampleQuery);
  setTimeout(() => {
    addMessage('ai', exampleResponse);
  }, 1500);

  function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'user' ? '👤' : '🤖';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = text.replace(/\n/g, '<br>');
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  sendButton.addEventListener('click', () => {
    const query = chatInput.value.trim();
    if (query) {
      addMessage('user', query);
      chatInput.value = '';
      
      setTimeout(() => {
        addMessage('ai', '🤖 Analyse en cours... Cette fonctionnalité sera disponible dans la version complète de Deepseyes.');
      }, 1000);
    }
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });
}

// Initialize history
function initHistory() {
  const historyItems = [
    { date: '03/07/2025', query: 'Recherche sur Alain Dupond', status: 'completed' },
    { date: '02/07/2025', query: 'Extraction Twitter – "BlackTech"', status: 'completed' },
    { date: '01/07/2025', query: 'Analyse réseau StartupX', status: 'completed' },
    { date: '30/06/2025', query: 'Veille secteur énergétique', status: 'in-progress' }
  ];

  const historyContainer = document.querySelector('.history-items');
  
  historyItems.forEach(item => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    
    historyItem.innerHTML = `
      <div class="history-date">[${item.date}]</div>
      <div class="history-query">${item.query}</div>
      <div class="history-status ${item.status}">
        ${item.status === 'completed' ? '✓' : '⏳'}
      </div>
    `;
    
    historyContainer.appendChild(historyItem);
  });
}

// Initialize download functionality
function initDownload() {
  const downloadBtn = document.querySelector('.download-btn');
  
  downloadBtn.addEventListener('click', () => {
    // Simulate download
    downloadBtn.innerHTML = '⏳ Génération...';
    downloadBtn.disabled = true;
    
    setTimeout(() => {
      downloadBtn.innerHTML = '✓ Téléchargé';
      setTimeout(() => {
        downloadBtn.innerHTML = '📥 Télécharger le rapport';
        downloadBtn.disabled = false;
      }, 2000);
    }, 2000);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('demo-app');
  
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
    <header class="demo-header">
      <nav class="nav">
        <a href="/" class="logo-container">
          <img src="/Logo_Deepseyes_Transparent.png" alt="Deepseyes" class="logo-image">
          <span class="logo-text">Deepseyes</span>
        </a>
        <div class="nav-right">
          <span class="demo-badge">DÉMO</span>
          <button class="mobile-menu-toggle">
            <i class="fas fa-bars"></i>
          </button>
          <a href="/" class="btn-back">← Retour</a>
        </div>
      </nav>
    </header>

    <!-- Disclaimer -->
    <div class="disclaimer">
      <div class="disclaimer-content">
        <div class="disclaimer-icon">🧪</div>
        <div class="disclaimer-text">
          <strong>Découvrez la puissance de Deepseyes :</strong> une démonstration visuelle des capacités de notre plateforme d'OSINT augmentée par IA. Ceci est une première itération visuelle et est amenée à évoluer.
        </div>
      </div>
    </div>

    <!-- Main Demo Content -->
    <div class="demo-container">
      <!-- Network Graph Section -->
      <section class="demo-section">
        <div class="section-header">
          <h2><i class="fas fa-project-diagram"></i> Réseau d'entités détectées</h2>
          <div class="section-controls">
            <button class="control-btn active">Vue réseau</button>
            <button class="control-btn">Vue liste</button>
          </div>
        </div>
        <div class="graph-container">
          <div id="network-graph"></div>
          <div class="graph-legend">
            <div class="legend-item"><span class="legend-color person"></span> Personnes</div>
            <div class="legend-item"><span class="legend-color company"></span> Entreprises</div>
            <div class="legend-item"><span class="legend-color social"></span> Réseaux sociaux</div>
            <div class="legend-item"><span class="legend-color email"></span> Emails</div>
            <div class="legend-item"><span class="legend-color ip"></span> Adresses IP</div>
            <div class="legend-item"><span class="legend-color document"></span> Documents</div>
          </div>
        </div>
      </section>

      <!-- AI Chat Section -->
      <section class="demo-section">
        <div class="section-header">
          <h2><i class="fas fa-robot"></i> Assistant IA OSINT</h2>
          <div class="status-indicator">
            <span class="status-dot active"></span>
            <span>En ligne</span>
          </div>
        </div>
        <div class="chat-container">
          <div class="chat-messages"></div>
          <div class="chat-input-container">
            <input type="text" class="chat-input" placeholder="Entrez votre requête OSINT ici...">
            <button class="send-button"><i class="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </section>

      <!-- Report Section -->
      <section class="demo-section">
        <div class="section-header">
          <h2><i class="fas fa-file-alt"></i> Rapport synthétique</h2>
          <button class="download-btn">📥 Télécharger le rapport</button>
        </div>
        <div class="report-container">
          <div class="report-card">
            <div class="report-header">
              <div class="report-title">Profil OSINT - Alain Dupond</div>
              <div class="report-date">Généré le 03/07/2025 à 14:32</div>
            </div>
            <div class="report-content">
              <div class="report-field">
                <label>Nom :</label>
                <span>Alain Dupond</span>
              </div>
              <div class="report-field">
                <label>Domaines liés :</label>
                <span>Énergie, Start-up, Lobbying</span>
              </div>
              <div class="report-field">
                <label>Sources analysées :</label>
                <span>LinkedIn, presse locale, BODACC</span>
              </div>
              <div class="report-field">
                <label>Score de risque :</label>
                <span class="risk-moderate">Modéré</span>
              </div>
              <div class="report-field">
                <label>Fiabilité :</label>
                <div class="confidence-bar">
                  <div class="confidence-fill" style="width: 87%"></div>
                  <span class="confidence-text">87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- History Section -->
      <section class="demo-section">
        <div class="section-header">
          <h2><i class="fas fa-history"></i> Historique des conversations</h2>
          <button class="clear-history">Effacer</button>
        </div>
        <div class="history-container">
          <div class="history-items"></div>
        </div>
      </section>
    </div>
  `;

  // Initialize all components
  setTimeout(() => {
    initNetworkGraph();
    initAIChat();
    initHistory();
    initDownload();
  }, 100);
});