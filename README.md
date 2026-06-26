# HelpDesk IA - GitHub Pages

Version statique du chatbot HelpDesk IA pour GitHub Pages.

Cette version fonctionne sans serveur Python : les articles, tickets et assets sont embarqués dans `app.js`, et les réponses sont calculées directement dans le navigateur.

## Publication GitHub Pages

Le site est prévu pour être publié à cette adresse :

```text
https://jonathanlouisa.github.io/agentIA/
```

Le workflow `.github/workflows/pages.yml` déploie automatiquement GitHub Pages à chaque push sur `main`.

## Limites

- Pas de backend Python.
- Pas de vraie base SQLite côté serveur.
- Les ajouts depuis l'interface sont conservés uniquement dans le stockage local du navigateur.
- Pour une version production avec base centrale et modèle IA externe, utiliser un hébergement serveur comme Alwaysdata, Render, Railway ou Azure.
