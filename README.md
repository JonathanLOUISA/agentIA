# HelpDesk IA - GitHub Pages

Version statique du chatbot HelpDesk IA pour GitHub Pages.

Cette version fonctionne sans serveur Python : les articles, tickets et assets sont embarqués dans `app.js`, et les réponses sont calculées directement dans le navigateur.

## Dépôt GitHub

Le projet a été publié dans ce dépôt :

```text
https://github.com/JonathanLOUISA/agentIA
```

## Publication GitHub Pages

Le site est accessible à cette adresse :

```text
https://jonathanlouisa.github.io/agentIA/
```

Les fichiers du site statique ont été poussés sur la branche `gh-pages`.

Si l'URL devient indisponible ou affiche une erreur 404, vérifier la configuration GitHub Pages dans les paramètres du dépôt :

1. Ouvrir `https://github.com/JonathanLOUISA/agentIA/settings/pages`.
2. Dans **Build and deployment**, choisir **Deploy from a branch**.
3. Sélectionner la branche `gh-pages` et le dossier `/root`.
4. Cliquer sur **Save**.

## Limites

- Pas de backend Python.
- Pas de vraie base SQLite côté serveur.
- Les ajouts depuis l'interface sont conservés uniquement dans le stockage local du navigateur.
- Pour une version production avec base centrale et modèle IA externe, utiliser un hébergement serveur comme Alwaysdata, Render, Railway ou Azure.
