import"./modulepreload-polyfill-B5Qt9EMX.js";const u={nodes:[{id:"alain-dupond",name:"Alain Dupond",type:"person",x:0,y:0},{id:"energiecorp",name:"EnergieCorp",type:"company",x:100,y:-50},{id:"linkedin",name:"LinkedIn Profile",type:"social",x:-80,y:60},{id:"email1",name:"a.dupond@energiecorp.fr",type:"email",x:120,y:80},{id:"ip1",name:"192.168.1.45",type:"ip",x:-100,y:-80},{id:"startup-x",name:"StartupX",type:"company",x:150,y:-120},{id:"bodacc",name:"BODACC Entry",type:"document",x:80,y:150}],links:[{source:"alain-dupond",target:"energiecorp",strength:.8},{source:"alain-dupond",target:"linkedin",strength:.9},{source:"alain-dupond",target:"email1",strength:.7},{source:"energiecorp",target:"startup-x",strength:.6},{source:"alain-dupond",target:"bodacc",strength:.5},{source:"linkedin",target:"ip1",strength:.4}]};function f(){const t=document.getElementById("network-graph"),i=t.clientWidth,n=400,r=d3.select(t).append("svg").attr("width",i).attr("height",n).style("background","linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)").style("border-radius","12px"),c=r.append("g"),d=d3.zoom().scaleExtent([.5,3]).on("zoom",e=>{c.attr("transform",e.transform)});r.call(d);const a=d3.forceSimulation(u.nodes).force("link",d3.forceLink(u.links).id(e=>e.id).distance(120)).force("charge",d3.forceManyBody().strength(-400)).force("center",d3.forceCenter(i/2,n/2)),v=c.append("g").selectAll("line").data(u.links).enter().append("line").attr("stroke","#2563eb").attr("stroke-opacity",.8).attr("stroke-width",e=>Math.sqrt(e.strength*6)).style("filter","drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3))"),o=c.append("g").selectAll("circle").data(u.nodes).enter().append("circle").attr("r",10).attr("fill",e=>{switch(e.type){case"person":return"#10b981";case"company":return"#f59e0b";case"social":return"#3b82f6";case"email":return"#8b5cf6";case"ip":return"#ef4444";case"document":return"#6b7280";default:return"#2563eb"}}).attr("stroke","#fff").attr("stroke-width",3).style("filter","drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))").call(d3.drag().on("start",p).on("drag",g).on("end",m)),l=c.append("g").selectAll("text").data(u.nodes).enter().append("text").text(e=>e.name).attr("font-size","11px").attr("fill","#ffffff").attr("font-weight","500").attr("text-anchor","middle").attr("dy",-18).style("text-shadow","0 1px 3px rgba(0, 0, 0, 0.8)").style("pointer-events","none");a.on("tick",()=>{v.attr("x1",e=>e.source.x).attr("y1",e=>e.source.y).attr("x2",e=>e.target.x).attr("y2",e=>e.target.y),o.attr("cx",e=>e.x).attr("cy",e=>e.y),l.attr("x",e=>e.x).attr("y",e=>e.y)}),o.on("mouseover",function(e,s){d3.select(this).transition().duration(200).attr("r",12).style("filter","drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))")}).on("mouseout",function(e,s){d3.select(this).transition().duration(200).attr("r",10).style("filter","drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))")});function p(e,s){e.active||a.alphaTarget(.3).restart(),s.fx=s.x,s.fy=s.y}function g(e,s){s.fx=e.x,s.fy=e.y}function m(e,s){e.active||a.alphaTarget(0),s.fx=null,s.fy=null}}function h(){const t=document.querySelector(".chat-input"),i=document.querySelector(".chat-messages"),n=document.querySelector(".send-button"),r='🔍 "Recherche des informations disponibles sur Alain Dupond, né en 1978, actif dans le secteur énergétique en Île-de-France."',c=`🤖 **Analyse terminée** - Voici ce que j'ai trouvé sur Alain Dupond :

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

**Score de confiance :** 87% | **Dernière MAJ :** Il y a 2h`;d("user",r),setTimeout(()=>{d("ai",c)},1500);function d(a,v){const o=document.createElement("div");o.className=`message ${a}-message`;const l=document.createElement("div");l.className="message-avatar",l.innerHTML=a==="user"?"👤":"🤖";const p=document.createElement("div");p.className="message-content",p.innerHTML=v.replace(/\n/g,"<br>"),o.appendChild(l),o.appendChild(p),i.appendChild(o),i.scrollTop=i.scrollHeight}n.addEventListener("click",()=>{const a=t.value.trim();a&&(d("user",a),t.value="",setTimeout(()=>{d("ai","🤖 Analyse en cours... Cette fonctionnalité sera disponible dans la version complète de Deepseyes.")},1e3))}),t.addEventListener("keypress",a=>{a.key==="Enter"&&n.click()})}function y(){const t=[{date:"03/07/2025",query:"Recherche sur Alain Dupond",status:"completed"},{date:"02/07/2025",query:'Extraction Twitter – "BlackTech"',status:"completed"},{date:"01/07/2025",query:"Analyse réseau StartupX",status:"completed"},{date:"30/06/2025",query:"Veille secteur énergétique",status:"in-progress"}],i=document.querySelector(".history-items");t.forEach(n=>{const r=document.createElement("div");r.className="history-item",r.innerHTML=`
      <div class="history-date">[${n.date}]</div>
      <div class="history-query">${n.query}</div>
      <div class="history-status ${n.status}">
        ${n.status==="completed"?"✓":"⏳"}
      </div>
    `,i.appendChild(r)})}function b(){const t=document.querySelector(".download-btn");t.addEventListener("click",()=>{t.innerHTML="⏳ Génération...",t.disabled=!0,setTimeout(()=>{t.innerHTML="✓ Téléchargé",setTimeout(()=>{t.innerHTML="📥 Télécharger le rapport",t.disabled=!1},2e3)},2e3)})}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("demo-app");t.innerHTML=`
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
  `,setTimeout(()=>{f(),h(),y(),b()},100)});
