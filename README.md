# HelpDesk IA - GitHub Pages

Version statique du chatbot HelpDesk IA pour GitHub Pages.

Cette version fonctionne sans serveur Python : les articles, tickets et assets sont embarqués dans `app.js`, et les réponses sont calculées directement dans le navigateur.

## Publication GitHub Pages

1. Créer un dépôt GitHub.
2. Envoyer ces fichiers à la racine du dépôt.
3. Aller dans `Settings > Pages`.
4. Source : `Deploy from a branch`.
5. Branch : `main`, folder : `/root`.
6. Ouvrir l'URL `https://<utilisateur>.github.io/<depot>/`.

## Limites

- Pas de backend Python.
- Pas de vraie base SQLite côté serveur.
- Les ajouts depuis l'interface sont conservés uniquement dans le stockage local du navigateur.
- Pour une version production avec base centrale et modèle IA externe, utiliser un hébergement serveur comme Alwaysdata, Render, Railway ou Azure.
