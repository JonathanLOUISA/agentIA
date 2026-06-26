const STORAGE_KEY = "helpdesk-static-state";

const seed = {
  articles: [
    {
      article_id: "KB-001",
      title: "Connexion VPN impossible",
      category: "Réseau",
      tags: "vpn reseau teletravail authentification mfa",
      content:
        "Symptômes fréquents:\n- Le client VPN reste bloqué sur connexion.\n- Le mot de passe est accepté mais le second facteur MFA n'arrive pas.\n- L'utilisateur accède à Internet mais pas aux applications internes.\n\nProcédure niveau 1:\n1. Vérifier que l'utilisateur a Internet hors VPN.\n2. Contrôler la date et l'heure du poste.\n3. Demander à l'utilisateur de fermer puis relancer le client VPN.\n4. Faire oublier le profil VPN puis reconnecter l'utilisateur si le client le permet.\n5. Vérifier que le compte n'est pas verrouillé et que le MFA est actif.\n6. Tester l'accès à une application interne connue.\n\nEscalade:\n- Escalader au niveau 2 réseau si plusieurs utilisateurs sont touchés.\n- Escalader sécurité si le MFA affiche une demande non reconnue par l'utilisateur.",
    },
    {
      article_id: "KB-002",
      title: "Réinitialisation du mot de passe",
      category: "Identité",
      tags: "mot de passe password compte verrouille mfa identite",
      content:
        "Contrôles avant action:\n- Vérifier l'identité de l'utilisateur selon la procédure interne.\n- Confirmer le nom du compte et le service.\n- Vérifier si le compte est verrouillé ou expiré.\n\nProcédure niveau 1:\n1. Déverrouiller le compte si nécessaire.\n2. Lancer une réinitialisation temporaire du mot de passe.\n3. Demander à l'utilisateur de changer le mot de passe à la première connexion.\n4. Vérifier la synchronisation MFA et l'accès messagerie.\n\nBonnes pratiques:\n- Ne jamais demander le mot de passe actuel.\n- Ne jamais envoyer un mot de passe en clair dans un canal non approuvé.",
    },
    {
      article_id: "KB-003",
      title: "Imprimante réseau hors ligne",
      category: "Poste de travail",
      tags: "imprimante printer impression reseau spooler",
      content:
        "Symptômes fréquents:\n- L'imprimante apparaît hors ligne.\n- Les documents restent bloqués dans la file d'attente.\n- L'impression fonctionne pour certains utilisateurs mais pas pour tous.\n\nProcédure niveau 1:\n1. Vérifier que l'imprimante est allumée et connectée au réseau.\n2. Contrôler l'adresse IP affichée sur l'imprimante.\n3. Vider la file d'attente locale si un document est bloqué.\n4. Redémarrer le service de spouleur d'impression sur le poste.\n5. Supprimer puis réinstaller l'imprimante depuis le serveur d'impression.\n\nEscalade:\n- Escalader au support proximité si l'imprimante ne répond pas au ping.\n- Escalader infrastructure si le serveur d'impression est indisponible.",
    },
    {
      article_id: "KB-004",
      title: "Messagerie Outlook ou Teams inaccessible",
      category: "Collaboration",
      tags: "outlook teams messagerie microsoft 365 connexion cache",
      content:
        "Procédure niveau 1:\n1. Vérifier si l'incident touche Outlook, Teams ou les deux.\n2. Tester l'accès web à la messagerie.\n3. Demander à l'utilisateur de redémarrer l'application.\n4. Effacer le cache Teams si Teams ne démarre pas correctement.\n5. Vérifier que la licence utilisateur est active.\n6. Créer un ticket applicatif si le service web fonctionne mais pas le client local.\n\nInformation à collecter:\n- Message d'erreur exact.\n- Heure de début.\n- Capture d'écran.\n- Impact sur un seul utilisateur ou plusieurs utilisateurs.",
    },
    {
      article_id: "KB-005",
      title: "Poste Windows lent",
      category: "Poste de travail",
      tags: "pc lent windows performance disque memoire antivirus",
      content:
        "Procédure niveau 1:\n1. Redémarrer le poste si le dernier démarrage date de plus de 7 jours.\n2. Ouvrir le gestionnaire des tâches et identifier CPU, mémoire ou disque saturé.\n3. Vérifier l'espace disque disponible.\n4. Contrôler l'état antivirus.\n5. Désactiver les applications de démarrage non nécessaires selon la politique interne.\n6. Planifier une intervention si le disque, la mémoire ou la batterie présente une alerte.\n\nEscalade:\n- Escalader au support poste de travail si le disque reste à 100%.\n- Escalader sécurité si un processus inconnu consomme anormalement les ressources.",
    },
    {
      article_id: "KB-006",
      title: "Suspicion de phishing",
      category: "Sécurité",
      tags: "phishing mail suspect securite incident credential",
      content:
        "Réponse immédiate:\n1. Demander à l'utilisateur de ne pas cliquer sur les liens et de ne pas ouvrir les pièces jointes.\n2. Si un lien a été ouvert, demander si des identifiants ont été saisis.\n3. Faire transférer le message à l'équipe sécurité selon le canal interne.\n4. Réinitialiser le mot de passe si des identifiants ont été saisis.\n5. Créer un incident sécurité avec l'expéditeur, l'objet, l'heure de réception et les actions déjà réalisées.\n\nEscalade:\n- Escalader sécurité immédiatement si plusieurs utilisateurs ont reçu le même message.\n- Escalader sécurité si des identifiants, données client ou fichiers internes ont été transmis.",
    },
    {
      article_id: "KB-007",
      title: "Wi-Fi entreprise indisponible",
      category: "Réseau",
      tags: "wifi wi-fi sans fil borne reseau authentification",
      content:
        "Procédure niveau 1:\n1. Vérifier si l'utilisateur voit le SSID entreprise.\n2. Tester avec un second appareil si possible.\n3. Oublier le réseau Wi-Fi puis reconnecter l'utilisateur.\n4. Vérifier que le compte n'est pas verrouillé.\n5. Redémarrer la carte Wi-Fi du poste.\n6. Identifier la zone du bâtiment et le nombre d'utilisateurs impactés.\n\nEscalade:\n- Escalader réseau si une zone complète est touchée.\n- Escalader proximité si le poste ne voit aucun réseau Wi-Fi.",
    },
    {
      article_id: "KB-008",
      title: "Demande d'installation logiciel",
      category: "Catalogue de services",
      tags: "logiciel installation licence droits demande validation",
      content:
        "Traitement niveau 1:\n1. Vérifier que le logiciel est présent dans le catalogue autorisé.\n2. Vérifier la licence disponible.\n3. Confirmer la validation du manager si elle est requise.\n4. Installer via le portail logiciel ou créer une demande d'installation.\n5. Documenter la version installée dans le ticket.\n\nEscalade:\n- Escalader achat si aucune licence n'est disponible.\n- Escalader sécurité si le logiciel n'est pas référencé.",
    },
  ],
  tickets: [
    {
      ticket_id: "INC-1001",
      requester: "Alice Martin",
      category: "Réseau",
      status: "Résolu",
      priority: "P3",
      summary: "VPN bloqué après changement de mot de passe",
      resolution: "Profil VPN recréé et MFA resynchronisé.",
      updated_at: "2026-06-26T08:56:15+00:00",
    },
    {
      ticket_id: "INC-1002",
      requester: "Karim Benali",
      category: "Poste de travail",
      status: "Ouvert",
      priority: "P2",
      summary: "Imprimante PRN-2 hors ligne au service Finance",
      resolution: "En attente de vérification réseau sur site.",
      updated_at: "2026-06-26T08:56:15+00:00",
    },
    {
      ticket_id: "INC-1003",
      requester: "Sophie Leroy",
      category: "Identité",
      status: "En cours",
      priority: "P3",
      summary: "Compte verrouillé après tentatives MFA",
      resolution: "Compte déverrouillé, validation identité en cours.",
      updated_at: "2026-06-26T08:56:15+00:00",
    },
  ],
  assets: [
    {
      asset_id: "PC-042",
      name: "Laptop Dell Latitude",
      asset_type: "Poste",
      owner: "Alice Martin",
      status: "En service",
      notes: "Windows 11, antivirus actif, garantie jusqu'en 2027.",
    },
    {
      asset_id: "PRN-2",
      name: "Imprimante Finance",
      asset_type: "Imprimante",
      owner: "Finance",
      status: "Incident ouvert",
      notes: "Adresse IP connue 10.20.30.42, ticket lié INC-1002.",
    },
    {
      asset_id: "AP-1F-07",
      name: "Borne Wi-Fi étage 1",
      asset_type: "Réseau",
      owner: "Infrastructure",
      status: "En service",
      notes: "Zone open space nord, dernier contrôle OK.",
    },
  ],
};

const stopwords = new Set([
  "avec",
  "dans",
  "des",
  "pour",
  "que",
  "qui",
  "sur",
  "une",
  "vous",
  "mon",
  "pas",
  "les",
  "est",
  "the",
  "and",
  "for",
  "with",
]);

function createSessionId() {
  const bytes = new Uint8Array(16);
  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) bytes[index] = Math.floor(Math.random() * 256);
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0"));
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex
    .slice(8, 10)
    .join("")}-${hex.slice(10, 16).join("")}`;
}

function loadStore() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (stored?.articles && stored?.tickets && stored?.assets) return stored;
  } catch {
    // Ignore invalid local state.
  }
  const initial = structuredClone(seed);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

const store = loadStore();
const state = {
  sessionId: localStorage.getItem("helpdesk-session-id") || createSessionId(),
};
localStorage.setItem("helpdesk-session-id", state.sessionId);

const elements = {
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  modeLabel: document.querySelector("#mode-label"),
  messageList: document.querySelector("#message-list"),
  chatForm: document.querySelector("#chat-form"),
  chatInput: document.querySelector("#chat-input"),
  clearChat: document.querySelector("#clear-chat"),
  quickActions: document.querySelectorAll(".quick-actions button"),
  sourceList: document.querySelector("#source-list"),
  answerMode: document.querySelector("#answer-mode"),
  articleSearch: document.querySelector("#article-search"),
  articleList: document.querySelector("#article-list"),
  articleForm: document.querySelector("#article-form"),
  toggleArticleForm: document.querySelector("#toggle-article-form"),
  cancelArticle: document.querySelector("#cancel-article"),
  ticketSearch: document.querySelector("#ticket-search"),
  ticketStatus: document.querySelector("#ticket-status"),
  ticketList: document.querySelector("#ticket-list"),
  ticketForm: document.querySelector("#ticket-form"),
  toggleTicketForm: document.querySelector("#toggle-ticket-form"),
  cancelTicket: document.querySelector("#cancel-ticket"),
  refreshConfig: document.querySelector("#refresh-config"),
  statArticles: document.querySelector("#stat-articles"),
  statTickets: document.querySelector("#stat-tickets"),
  statAssets: document.querySelector("#stat-assets"),
  configLlm: document.querySelector("#config-llm"),
  configDb: document.querySelector("#config-db"),
  configAdmin: document.querySelector("#config-admin"),
};

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function tokenize(value) {
  return normalize(value)
    .match(/[a-z0-9][a-z0-9_-]{1,}/g)
    ?.filter((token) => token.length > 2 && !stopwords.has(token)) || [];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function debounce(callback, delay = 250) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

function setView(viewId) {
  elements.views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  elements.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
}

function appendMessage(role, text, options = {}) {
  const article = document.createElement("article");
  article.className = `message ${role}${options.loading ? " loading" : ""}`;
  article.innerHTML = `
    <div class="avatar" aria-hidden="true">${role === "user" ? "US" : "IA"}</div>
    <div class="bubble">${escapeHtml(text)}</div>
  `;
  elements.messageList.appendChild(article);
  elements.messageList.scrollTop = elements.messageList.scrollHeight;
  return article;
}

function articleDocument(article) {
  return {
    type: "Article",
    id: article.article_id,
    title: article.title,
    category: article.category,
    content: article.content,
    body: `${article.title}\n${article.category}\n${article.tags}\n${article.content}`,
    meta: { tags: article.tags },
  };
}

function ticketDocument(ticket) {
  const body = `Ticket ${ticket.ticket_id}\nDemandeur: ${ticket.requester}\nCatégorie: ${ticket.category}\nStatut: ${ticket.status}\nPriorité: ${ticket.priority}\nRésumé: ${ticket.summary}\nRésolution: ${ticket.resolution}`;
  return {
    type: "Ticket",
    id: ticket.ticket_id,
    title: ticket.summary,
    category: ticket.category,
    content: body,
    body,
    meta: { status: ticket.status, priority: ticket.priority, requester: ticket.requester },
  };
}

function assetDocument(asset) {
  const body = `Asset ${asset.asset_id}\nNom: ${asset.name}\nType: ${asset.asset_type}\nResponsable: ${asset.owner}\nStatut: ${asset.status}\nNotes: ${asset.notes}`;
  return {
    type: "Asset",
    id: asset.asset_id,
    title: asset.name,
    category: asset.asset_type,
    content: body,
    body,
    meta: { owner: asset.owner, status: asset.status },
  };
}

function structuredFacts(message) {
  const facts = [];
  const expansions = [];
  for (const id of new Set(message.toUpperCase().match(/\bINC-\d+\b/g) || [])) {
    const ticket = store.tickets.find((item) => item.ticket_id === id);
    if (ticket) {
      facts.push(
        `${ticket.ticket_id}: statut ${ticket.status}, priorité ${ticket.priority}, demandeur ${ticket.requester}, résumé: ${ticket.summary}, résolution: ${ticket.resolution.replace(/\.$/, "")}.`,
      );
      expansions.push(`${ticket.category} ${ticket.summary} ${ticket.resolution}`);
    }
  }
  for (const id of new Set(message.toUpperCase().match(/\b(?:PC|PRN|AP)-[A-Z0-9-]+\b/g) || [])) {
    const asset = store.assets.find((item) => item.asset_id === id);
    if (asset) {
      facts.push(
        `${asset.asset_id}: ${asset.name}, type ${asset.asset_type}, responsable ${asset.owner}, statut ${asset.status}, notes: ${asset.notes.replace(/\.$/, "")}.`,
      );
      expansions.push(`${asset.asset_type} ${asset.name} ${asset.status} ${asset.notes}`);
    }
  }
  return { facts, expansions };
}

function scoreDocument(query, tokens, document) {
  const queryText = normalize(query);
  const title = normalize(document.title);
  const body = normalize(document.body);
  const id = normalize(document.id);
  const category = normalize(document.category || "");
  const tags = normalize(String(document.meta?.tags || ""));
  let score = 0;
  if (id && queryText.includes(id)) score += 80;
  for (const token of tokens) {
    if (title.includes(token)) score += 8;
    if (category.includes(token)) score += 5;
    if (tags.includes(token)) score += 5;
    if (id.includes(token)) score += 14;
    score += Math.min(body.split(token).length - 1, 6) * 1.3;
  }
  return score;
}

function excerpt(text, tokens) {
  const compact = text.replace(/\s+/g, " ").trim();
  if (compact.length <= 280) return compact;
  const normalized = normalize(compact);
  const positions = tokens.map((token) => normalized.indexOf(token)).filter((pos) => pos >= 0);
  const center = positions.length ? Math.min(...positions) : 0;
  const start = Math.max(center - 70, 0);
  const end = Math.min(start + 280, compact.length);
  return `${start > 0 ? "... " : ""}${compact.slice(start, end).trim()}${end < compact.length ? " ..." : ""}`;
}

function retrieve(message) {
  const { facts, expansions } = structuredFacts(message);
  const effectiveQuery = [message, ...expansions].join(" ");
  const tokens = tokenize(effectiveQuery);
  const documents = [
    ...store.articles.map(articleDocument),
    ...store.tickets.map(ticketDocument),
    ...store.assets.map(assetDocument),
  ];
  const sources = documents
    .map((document) => ({ document, score: scoreDocument(effectiveQuery, tokens, document) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(({ document, score }) => ({
      type: document.type,
      id: document.id,
      title: document.title,
      category: document.category,
      excerpt: excerpt(document.content, tokens),
      score: Number(score.toFixed(1)),
      meta: document.meta,
      content: document.content,
    }));
  return { sources, facts };
}

function actionLines(content) {
  const preferred = [];
  const fallback = [];
  let collecting = false;
  for (const rawLine of content.split("\n")) {
    let line = rawLine.trim();
    if (!line) continue;
    if (line.endsWith(":")) {
      const heading = normalize(line.slice(0, -1));
      collecting = ["procedure", "traitement", "reponse immediate", "controles avant action"].some((term) =>
        heading.includes(term),
      );
      if (["symptomes", "escalade", "bonnes pratiques", "information a collecter"].some((term) => heading.includes(term))) {
        collecting = false;
      }
      continue;
    }
    line = line.replace(/^[-*]\s*/, "").replace(/^\d+\.\s*/, "");
    if (line.length >= 12) {
      fallback.push(line);
      if (collecting) preferred.push(line);
    }
  }
  return (preferred.length ? preferred : fallback).slice(0, 6);
}

function selectArticle(message, sources) {
  const articles = sources.filter((source) => source.type === "Article");
  if (!articles.length) return null;
  const terms = ["vpn", "imprimante", "wifi", "wi-fi", "phishing", "outlook", "teams", "mot de passe", "mfa", "logiciel", "lent"];
  const messageText = normalize(message);
  for (const term of terms) {
    const normalizedTerm = normalize(term);
    if (!messageText.includes(normalizedTerm)) continue;
    const matches = articles.filter((source) =>
      normalize(`${source.title} ${source.category} ${source.meta?.tags || ""} ${source.excerpt}`).includes(normalizedTerm),
    );
    if (matches.length) return matches.sort((a, b) => b.score - a.score)[0];
  }
  return articles.sort((a, b) => b.score - a.score)[0];
}

function answer(message, sources, facts) {
  if (!sources.length && !facts.length) {
    return "Je n'ai pas trouvé de procédure fiable dans la base. Je créerais un ticket avec le message d'erreur exact, l'utilisateur impacté, l'heure de début, le poste concerné et les actions déjà testées.";
  }

  const parts = [];
  const asksTicketStatus = /\bINC-\d+\b/i.test(message) && ["statut", "etat", "suivi"].some((term) => normalize(message).includes(term));
  if (facts.length) {
    parts.push("Voici ce que la base indique:");
    parts.push(...facts.slice(0, 4).map((fact) => `- ${fact}`));
    if (asksTicketStatus) {
      parts.push("Pour un simple suivi, cette information suffit. Pour traiter l'incident, demande le détail du symptôme.");
      return parts.join("\n");
    }
  }

  const best = selectArticle(message, sources) || sources[0];
  if (best.type === "Article") {
    parts.push(`Procédure recommandée: ${best.title}.`);
    const actions = actionLines(best.content);
    if (actions.length) {
      parts.push("À faire maintenant:");
      parts.push(...actions.map((line, index) => `${index + 1}. ${line}`));
    }
  } else {
    parts.push(`Élément le plus pertinent trouvé: ${best.type} ${best.id} - ${best.title}.`);
    parts.push(best.excerpt);
  }

  if (normalize(best.category || "").includes("securite") || normalize(message).includes("phishing")) {
    parts.push("Comme le sujet touche à la sécurité, il faut escalader sans délai si des identifiants ou données internes ont été exposés.");
  } else {
    parts.push("Si le problème persiste après ces contrôles, crée ou mets à jour le ticket avec les symptômes, captures d'écran et tests réalisés.");
  }
  return parts.join("\n");
}

function renderSources(sources = []) {
  elements.sourceList.classList.toggle("empty", sources.length === 0);
  if (!sources.length) {
    elements.sourceList.textContent = "Aucune source sélectionnée.";
    return;
  }
  elements.sourceList.innerHTML = sources
    .map(
      (source) => `
        <article class="source-card">
          <header>
            <div>
              <h4>${escapeHtml(source.id)} · ${escapeHtml(source.title)}</h4>
              <p>${escapeHtml(source.type)} · ${escapeHtml(source.category || "Général")}</p>
            </div>
            <span class="tag">${Number(source.score || 0).toFixed(1)}</span>
          </header>
          <p>${escapeHtml(source.excerpt || "")}</p>
        </article>
      `,
    )
    .join("");
}

async function sendChatMessage(message) {
  appendMessage("user", message);
  const loading = appendMessage("assistant", "Recherche dans la base locale...", { loading: true });
  elements.chatInput.value = "";
  const result = retrieve(message);
  const text = answer(message, result.sources, result.facts);
  await new Promise((resolve) => setTimeout(resolve, 250));
  loading.remove();
  appendMessage("assistant", text);
  renderSources(result.sources.map(({ content, ...source }) => source));
  elements.answerMode.textContent = "Local";
}

function loadConfig() {
  elements.modeLabel.textContent = "GitHub Pages";
  elements.answerMode.textContent = "Local";
  elements.statArticles.textContent = store.articles.length;
  elements.statTickets.textContent = store.tickets.length;
  elements.statAssets.textContent = store.assets.length;
  elements.configLlm.textContent = "Version statique GitHub Pages. Les réponses sont calculées dans le navigateur.";
  elements.configDb.textContent = "Base embarquée en JavaScript et ajouts conservés dans le stockage local du navigateur.";
  elements.configAdmin.textContent = "Pas de backend public dans cette version statique.";
}

function loadArticles() {
  const query = normalize(elements.articleSearch.value.trim());
  const items = store.articles.filter((item) => normalize(`${item.article_id} ${item.title} ${item.category} ${item.tags} ${item.content}`).includes(query));
  elements.articleList.innerHTML = items
    .map(
      (item) => `
        <article class="article-card">
          <header>
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.article_id)} · ${escapeHtml(item.category)}</p>
            </div>
            <span class="tag">${escapeHtml(item.tags || "KB")}</span>
          </header>
          <p>${escapeHtml(item.content)}</p>
        </article>
      `,
    )
    .join("");
}

function ticketStatusClass(status) {
  if (status === "Résolu") return "done";
  if (status === "Ouvert" || status === "En cours") return "open";
  return "";
}

function loadTickets() {
  const query = normalize(elements.ticketSearch.value.trim());
  const status = elements.ticketStatus.value;
  const items = store.tickets.filter((item) => {
    const matchesQuery = normalize(`${item.ticket_id} ${item.requester} ${item.category} ${item.summary} ${item.resolution}`).includes(query);
    return matchesQuery && (!status || item.status === status);
  });
  elements.ticketList.innerHTML = items
    .map(
      (item) => `
        <article class="ticket-row">
          <header>
            <div>
              <h3>${escapeHtml(item.ticket_id)} · ${escapeHtml(item.summary)}</h3>
              <p>${escapeHtml(item.requester)} · ${escapeHtml(item.category)}</p>
            </div>
            <span class="status ${ticketStatusClass(item.status)}">${escapeHtml(item.status)}</span>
          </header>
          <div class="ticket-meta">
            <span class="priority">${escapeHtml(item.priority)}</span>
            <span class="tag">${escapeHtml(item.updated_at)}</span>
          </div>
          <p>${escapeHtml(item.resolution || "Résolution non renseignée.")}</p>
        </article>
      `,
    )
    .join("");
}

function createArticle(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(elements.articleForm).entries());
  store.articles.unshift({
    article_id: `KB-${String(store.articles.length + 1).padStart(3, "0")}`,
    title: data.title.trim(),
    category: data.category.trim() || "Support",
    tags: data.tags.trim(),
    content: data.content.trim(),
  });
  saveStore();
  elements.articleForm.reset();
  elements.articleForm.classList.add("hidden");
  loadArticles();
  loadConfig();
}

function createTicket(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(elements.ticketForm).entries());
  store.tickets.unshift({
    ticket_id: `INC-${String(1000 + store.tickets.length + 1)}`,
    requester: data.requester.trim(),
    category: data.category.trim() || "Support",
    status: data.status,
    priority: data.priority,
    summary: data.summary.trim(),
    resolution: data.resolution.trim(),
    updated_at: new Date().toISOString(),
  });
  saveStore();
  elements.ticketForm.reset();
  elements.ticketForm.classList.add("hidden");
  loadTickets();
  loadConfig();
}

function wireEvents() {
  elements.navItems.forEach((item) => item.addEventListener("click", () => setView(item.dataset.view)));
  elements.chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = elements.chatInput.value.trim();
    if (message) sendChatMessage(message);
  });
  elements.clearChat.addEventListener("click", () => {
    state.sessionId = createSessionId();
    localStorage.setItem("helpdesk-session-id", state.sessionId);
    elements.messageList.innerHTML = "";
    appendMessage("assistant", "Nouvelle conversation prête.");
    renderSources([]);
  });
  elements.quickActions.forEach((button) => {
    button.addEventListener("click", () => {
      elements.chatInput.value = button.dataset.prompt;
      elements.chatInput.focus();
    });
  });
  elements.articleSearch.addEventListener("input", debounce(loadArticles));
  elements.ticketSearch.addEventListener("input", debounce(loadTickets));
  elements.ticketStatus.addEventListener("change", loadTickets);
  elements.toggleArticleForm.addEventListener("click", () => elements.articleForm.classList.toggle("hidden"));
  elements.cancelArticle.addEventListener("click", () => elements.articleForm.classList.add("hidden"));
  elements.articleForm.addEventListener("submit", createArticle);
  elements.toggleTicketForm.addEventListener("click", () => elements.ticketForm.classList.toggle("hidden"));
  elements.cancelTicket.addEventListener("click", () => elements.ticketForm.classList.add("hidden"));
  elements.ticketForm.addEventListener("submit", createTicket);
  elements.refreshConfig.addEventListener("click", loadConfig);
}

function boot() {
  wireEvents();
  renderSources([]);
  loadConfig();
  loadArticles();
  loadTickets();
}

boot();
