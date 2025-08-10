# 🚀 Guide de Déploiement Deepseyes

## 📋 Checklist de déploiement

### ✅ Étapes à suivre :

1. **Le build a été généré** ✓
2. **Tous les fichiers sont dans le dossier `dist/`** ✓
3. **Prêt pour l'upload sur cPanel** ✓

## 📁 Fichiers à uploader

**IMPORTANT :** Uploadez TOUT le contenu du dossier `dist/` dans votre `public_html`

### Structure des fichiers générés :
```
dist/
├── index.html              ← Page d'accueil
├── faq.html                ← Page FAQ avec recherche
├── demo.html               ← Page démo interactive
├── tools.html              ← Page outils
├── nettrace.html           ← Page NetTrace
├── assets/
│   ├── index-[hash].js     ← JavaScript minifié
│   └── index-[hash].css    ← CSS minifié
├── Logo_Deepseyes_Transparent.png
└── vite.svg
```

## 🎯 Instructions cPanel

### Méthode 1 : Gestionnaire de fichiers cPanel
1. Connectez-vous à votre cPanel
2. Ouvrez **"Gestionnaire de fichiers"**
3. Naviguez vers le dossier **`public_html`**
4. **Supprimez** tous les anciens fichiers (si existants)
5. **Sélectionnez tous les fichiers** du dossier `dist/`
6. **Glissez-déposez** ou utilisez "Téléverser"
7. **Vérifiez** que `index.html` est bien à la racine

### Méthode 2 : FTP (FileZilla)
1. Connectez-vous via FTP à votre serveur
2. Naviguez vers `/public_html/`
3. Uploadez tout le contenu de `dist/`
4. Vérifiez les permissions (755 pour dossiers, 644 pour fichiers)

## 🔍 Vérification post-déploiement

Après l'upload, testez ces URLs :
- `https://votre-domaine.com/` (accueil)
- `https://votre-domaine.com/faq.html` (FAQ)
- `https://votre-domaine.com/demo.html` (démo)
- `https://votre-domaine.com/tools.html` (outils)
- `https://votre-domaine.com/nettrace.html` (NetTrace)

## ⚠️ Points d'attention

- **Ne pas** uploader le dossier `dist/` lui-même, mais son **contenu**
- **Vérifier** que les liens entre pages fonctionnent
- **Tester** la recherche FAQ
- **Contrôler** que les images s'affichent
- **Valider** la responsivité mobile

## 🆘 En cas de problème

### Erreur 404 sur les pages
- Vérifiez que tous les fichiers `.html` sont à la racine
- Contrôlez les permissions des fichiers

### CSS/JS ne se charge pas
- Vérifiez que le dossier `assets/` est présent
- Contrôlez les permissions du dossier `assets/`

### Images manquantes
- Vérifiez que `Logo_Deepseyes_Transparent.png` est présent
- Contrôlez les permissions des images

## 📞 Support

Si vous rencontrez des difficultés :
1. Vérifiez la console du navigateur (F12)
2. Contrôlez les logs d'erreur cPanel
3. Testez d'abord en local avec `npm run preview`

---

**✅ Votre site Deepseyes est maintenant prêt pour la production !**