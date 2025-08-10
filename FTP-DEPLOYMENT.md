# 🚀 Guide de Déploiement FTP - Deepseyes

## 📋 Prérequis FTP

### Informations nécessaires :
- **Serveur FTP** : `ftp.votre-domaine.com` (ou IP)
- **Nom d'utilisateur** : votre username cPanel
- **Mot de passe** : votre mot de passe cPanel
- **Port** : 21 (FTP) ou 22 (SFTP)

## 🔧 Configuration FileZilla

### 1. Ouvrir FileZilla
- Téléchargez FileZilla si pas installé : https://filezilla-project.org/

### 2. Connexion rapide
```
Hôte : ftp.votre-domaine.com
Nom d'utilisateur : votre_username
Mot de passe : votre_password
Port : 21
```
→ Cliquez sur **"Connexion rapide"**

### 3. Alternative : Gestionnaire de sites
- **Fichier** → **Gestionnaire de sites** → **Nouveau site**
- Configurez les paramètres ci-dessus
- **Enregistrer** pour réutiliser

## 📁 Structure des dossiers

### Côté local (votre PC) :
```
votre-projet/
└── dist/                    ← DOSSIER À UPLOADER
    ├── index.html
    ├── faq.html
    ├── demo.html
    ├── tools.html
    ├── nettrace.html
    ├── assets/
    ├── Logo_Deepseyes_Transparent.png
    └── vite.svg
```

### Côté serveur (cPanel) :
```
/public_html/                ← DESTINATION
├── index.html               ← Vos fichiers ici
├── faq.html
├── demo.html
├── tools.html
├── nettrace.html
├── assets/
├── Logo_Deepseyes_Transparent.png
└── vite.svg
```

## 🚀 Étapes de déploiement FTP

### Étape 1 : Connexion
1. **Lancez FileZilla**
2. **Connectez-vous** avec vos identifiants
3. **Naviguez** vers `/public_html/` (côté serveur)

### Étape 2 : Nettoyage (si nécessaire)
1. **Sélectionnez** tous les anciens fichiers dans `public_html`
2. **Clic droit** → **Supprimer**
3. **Confirmez** la suppression

### Étape 3 : Upload
1. **Côté local** : naviguez vers votre dossier `dist/`
2. **Sélectionnez TOUT** le contenu de `dist/` (Ctrl+A)
3. **Glissez-déposez** vers `public_html/` (côté serveur)
4. **Attendez** la fin du transfert

### Étape 4 : Vérification des permissions
1. **Clic droit** sur les dossiers → **Permissions**
2. **Dossiers** : 755 (rwxr-xr-x)
3. **Fichiers** : 644 (rw-r--r--)

## ✅ Checklist FTP

### Avant l'upload :
- [ ] Build généré (`npm run build`)
- [ ] FileZilla installé et configuré
- [ ] Identifiants FTP testés
- [ ] Sauvegarde des anciens fichiers (si nécessaire)

### Pendant l'upload :
- [ ] Connexion FTP établie
- [ ] Navigation vers `/public_html/`
- [ ] Sélection de TOUT le contenu de `dist/`
- [ ] Upload en cours...
- [ ] Vérification des erreurs de transfert

### Après l'upload :
- [ ] `index.html` présent dans `/public_html/`
- [ ] Dossier `assets/` uploadé complètement
- [ ] Images présentes (logo, etc.)
- [ ] Permissions correctes (755/644)
- [ ] Test du site : `https://votre-domaine.com`

## 🔍 Tests post-déploiement

Testez ces URLs dans votre navigateur :
- ✅ `https://votre-domaine.com/` (accueil)
- ✅ `https://votre-domaine.com/faq.html`
- ✅ `https://votre-domaine.com/demo.html`
- ✅ `https://votre-domaine.com/tools.html`
- ✅ `https://votre-domaine.com/nettrace.html`

## 🆘 Résolution de problèmes

### Erreur de connexion FTP :
- Vérifiez l'hôte, username, password
- Essayez le port 22 (SFTP) au lieu de 21
- Contactez votre hébergeur pour les paramètres

### Fichiers manquants :
- Vérifiez que le transfert s'est terminé sans erreur
- Re-uploadez les fichiers manquants
- Contrôlez les permissions

### Site ne s'affiche pas :
- Vérifiez que `index.html` est dans `/public_html/`
- Contrôlez les permissions (755/644)
- Videz le cache de votre navigateur

### CSS/JS ne se charge pas :
- Vérifiez que le dossier `assets/` est complet
- Contrôlez les permissions du dossier `assets/`

## 💡 Conseils FTP

### Pour gagner du temps :
- **Créez un signet** dans FileZilla pour votre site
- **Utilisez la file d'attente** pour les gros uploads
- **Activez la reprise** en cas d'interruption

### Pour la sécurité :
- **Utilisez SFTP** (port 22) si disponible
- **Ne sauvegardez pas** les mots de passe dans FileZilla
- **Fermez** la connexion après usage

---

## 🎉 Votre site est en ligne !

Une fois l'upload terminé, votre site Deepseyes sera accessible à l'adresse :
**`https://votre-domaine.com`**

Félicitations ! 🚀