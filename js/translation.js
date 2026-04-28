// Système de traduction bilingue FR/EN
let currentLang = localStorage.getItem('language') || 'fr';

const translations = {
  fr: {
    // Navigation
    'nav-accueil': 'Accueil',
    'nav-apropos': 'A propos',
    'nav-expertise': 'Expertise',
    'nav-publications': 'Publications & Réflexions',
    'nav-articles': 'Articles & Analyses',
    'nav-podcast': 'Podcast',
    'nav-recherches': 'Recherches académiques',
    'nav-contact': 'Contact',
    
    // Boutons communs
    'btn-back': '← Retour à l\'accueil',
    'btn-back-articles': '← Retour aux articles',
    'btn-back-main': '← Retour à la page principale',
    
    // Page d'accueil (index2.html) - Hero section
    'hero-subtitle1': 'Conseillère en solutions technologiques',
    'hero-subtitle2': 'Solutions data pour la performance et la croissance',
    'hero-badge-makila': 'Makila AI',
    'hero-badge2': 'BI • Analytics • Stratégie',
    'hero-badge3': 'Français • Anglais (bilingue)',
    'viz-title': 'Dashboard Analytics en Temps Réel',
    'hero-main': 'Donner du sens aux données pour mieux décider',
    'hero-cta1': 'Explorer les publications',
    'hero-cta2': 'Me Contacter',
    
    // À Propos section
    'section-apropos': 'À Propos',
    'apropos-p1': 'Conseillère en solutions technologiques spécialisée en données et intelligence d\'affaires, j\'accompagne les organisations dans la transformation de leurs données en décisions stratégiques. Mon parcours combine une <strong>double formation de niveau maîtrise en économie (Université de Montréal) et en intelligence d\'affaires (HEC Montréal)</strong>, ainsi que plus de <strong>cinq années d\'expérience</strong> dans des fonctions analytiques et décisionnelles.',
    'apropos-p2': 'Au fil de mes expériences professionnelles et de mes échanges avec des dirigeants, recruteurs et professionnels, j\'ai développé un intérêt marqué pour la manière dont les organisations analysent l\'information, structurent leur réflexion et prennent des décisions dans des contextes économiques complexes et incertains. J\'ai constaté que les difficultés rencontrées ne tiennent pas uniquement à un manque d\'outils ou de données, mais très souvent à un <strong>manque de clarté sur les enjeux, les priorités décisionnelles et l\'usage réel de l\'information</strong>.',
    'apropos-p3': 'À travers mon travail, mes publications et ce site, je propose une approche analytique, structurée et accessible, orientée impact. Mon objectif est d\'aider les organisations à mieux comprendre leur situation, à poser les bonnes questions et à avancer de manière cohérente, en alignant données, stratégie et besoins réels.',
    
    // Expertise section
    'section-expertise': 'Expertise',
    'expertise-1': 'Aide à la décision basée sur l\'analyse des données',
    'expertise-2': 'Business Intelligence et tableaux de bord décisionnels (Power BI, KPIs)',
    'expertise-3': 'Analyse de données pour enjeux stratégiques et opérationnels',
    'expertise-4': 'Conseil en solutions technologiques et analytiques',
    
    // Pourquoi ce site section
    'section-pourquoi': 'Pourquoi ce site',
    'pourquoi-p1': 'Les organisations évoluent aujourd\'hui dans des environnements économiques et informationnels de plus en plus complexes. Les données sont disponibles, les outils sont nombreux, mais les décisions restent souvent difficiles à structurer et à arbitrer au quotidien.',
    'pourquoi-p2': 'Ce site a été créé pour proposer un espace de réflexion clair et accessible, à la croisée de l\'économie et de l\'intelligence des affaires. J\'y partage des analyses et des observations visant à mieux comprendre les enjeux organisationnels, à clarifier les priorités décisionnelles et à donner du sens à l\'information existante.',
    'pourquoi-p3': 'Ces réflexions s\'adressent autant aux dirigeants et entrepreneurs qu\'aux organisations à la recherche de profils capables d\'analyser des situations complexes, de structurer la réflexion et de contribuer à des décisions éclairées.',
    
    // Ce que vous trouverez ici section
    'section-trouverez': 'Ce que vous trouverez ici',
    'trouverez-1': 'Une analyse structurée des enjeux économiques et organisationnels',
    'trouverez-2': 'Une lecture claire du rôle des données, des outils et des fonctions analytiques',
    'trouverez-3': 'Une approche humaine et pragmatique, adaptée aux réalités des PME et des environnements en croissance',
    
    // Publications & Réflexions section
    'section-publications': 'Publications & Réflexions',
    'publications-intro': 'Retrouvez ici mes analyses, réflexions et contributions dans les domaines de l\'économie, de l\'intelligence des affaires et de l\'analyse de données.',
    'articles-title': 'Articles & Analyses',
    'articles-desc': 'Les articles publiés ici abordent des enjeux liés à l\'économie, à l\'intelligence des affaires, aux données et à la prise de décision. Ils s\'adressent aux organisations et aux professionnels qui souhaitent dépasser les approches purement techniques pour adopter une réflexion plus structurée, plus cohérente et mieux adaptée à leur contexte.',
    'article3-title': 'Vous ne savez pas quoi faire avec vos données? Voici le guide simple qui vous montre exactement par où commencer.',
    'article3-desc': 'Guide simple en 7 étapes pour aider une PME à centraliser, nettoyer, analyser et utiliser ses données pour mieux décider.',

    'article4-title': 'Femmes en données et intelligence artificielle (IA) : au-delà de la représentation, une perspective qui façonne l\'avenir',
    'article4-desc': 'Une réflexion sur l\'expérience des femmes en Data et en IA, et sur l\'impact de la diversité des perspectives sur les décisions et les systèmes.',

    'article5-title': 'Intelligence Artificielle (IA) en entreprise : comprendre les familles d\'IA pour décider avec rigueur et gouvernance',
    'article5-desc': 'Un cadre clair pour distinguer les grandes familles d\'IA en entreprise (prédictive, prescriptive, générative, agentique, émotionnelle, explicable) et choisir avec rigueur et gouvernance.',

    // Page article4.html
    'article4-date': '4 février 2026',
    'article4-reading-time': '⏱️ 8 min de lecture',
    'article4-author': 'Djeny Mainvil MSc.',
    'article4-img-alt': 'Femmes en données et intelligence artificielle (IA)',
    'article4-bio-name': 'Djeny Mainvil MSc.',
    'article4-bio-title': 'Analyste BI & Économiste | Double maîtrise en intelligence d\'affaires et sciences économiques | Power BI • SAS/R • Modélisation de données • Tableaux de bord | Passionnée par les données, la performance et la prise de décision.',
    'article4-highlight1': 'Selon un rapport publié en 2024 et mis en avant par Forbes, seulement <strong>29% de la main-d\'œuvre en IA sont des femmes</strong>, contre 71% d\'hommes.',
    'article4-intro-p1': 'Travailler en Data et en intelligence artificielle (IA) aujourd\'hui, c\'est faire partie d\'un domaine qui se développe rapidement tout en connaissant une transformation profonde. Dans ce contexte, la « Data » et l\'IA dépassent les rôles strictement techniques et englobent toutes les personnes qui contribuent à transformer les données en compréhension, en insights et en décisions éclairées. Les technologies progressent, les opportunités se multiplient, et les décisions guidées par les données prennent une place de plus en plus centrale dans la stratégie des organisations. Pourtant, malgré cette croissance, les chiffres rappellent que l\'équilibre n\'est pas encore atteint. Cette statistique ne remet pas en question les compétences; elle reflète plutôt un paysage professionnel encore en évolution dans des domaines à forte valeur stratégique.',
    'article4-intro-p2': 'Être une femme dans ce contexte ne peut toutefois pas se réduire à un pourcentage. C\'est une expérience professionnelle vécue, souvent façonnée par des dynamiques subtiles : la manière de prendre la parole dans des réunions très techniques, la façon dont une interprétation est reçue, ou la clarté supplémentaire parfois nécessaire pour qu\'une contribution soit pleinement reconnue. En parallèle, un changement important est en cours. De plus en plus de femmes en Data et en IA ne sont pas seulement présentes : elles participent activement à façonner la manière dont les données sont utilisées, interprétées et traduites en décisions qui comptent. Leur présence enrichit le domaine en reliant la technologie au contexte et à l\'impact humain. La question devient alors : comment continuer à bâtir un écosystème Data et IA où les compétences, les perspectives et les contributions de chacun trouvent pleinement leur place ?',
    'article4-h2-1': 'La réalité sur le terrain',
    'article4-s1-p1': 'Travailler en Data et en IA, c\'est évoluer dans des environnements où la rigueur intellectuelle est élevée et où la crédibilité se construit en continu. C\'est un domaine en constante évolution, où les analyses doivent être solides, le raisonnement clair, et les décisions qui en découlent capables d\'influencer des orientations stratégiques majeures. Dans ce cadre, l\'expertise technique est essentielle, mais la manière dont les professionnels se positionnent dans les échanges l\'est tout autant. Pour beaucoup de femmes, cela peut impliquer une attention accrue à la façon dont les idées sont formulées, dont les interprétations sont défendues, ou à la manière d\'intervenir dans des conversations très techniques. Il ne s\'agit pas toujours de barrières explicites, mais d\'une série de micro-situations qui demandent confiance, préparation et capacité à faire entendre sa voix dans des contextes où la rapidité et l\'assurance visible sont souvent valorisées.',
    'article4-s1-p2': 'Avec le temps, ces expériences façonnent des professionnelles qui développent une conscience aiguë du contexte plus large dans lequel les données existent. Elles renforcent la capacité à relier l\'analyse aux priorités organisationnelles et à l\'impact humain — une compétence essentielle dans un domaine où les chiffres ne parlent jamais seuls. Cette réalité consolide des compétences clés comme l\'écoute active, la pensée analytique, la clarté dans la communication et la capacité à traduire la complexité technique en décisions compréhensibles. Au-delà des défis, cette expérience construit une posture professionnelle capable d\'offrir une perspective plus globale et plus responsable sur la manière dont la Data et l\'IA sont utilisées.',
    'article4-h2-2': 'Une contribution qui transforme le secteur',
    'article4-s2-p1': 'Au-delà de la représentation, la présence croissante des femmes en Data et en IA contribue à faire évoluer la manière d\'aborder les problèmes. Dans des environnements où la performance technique a longtemps été au centre, on observe une attention grandissante portée au contexte, à l\'usage réel des solutions et aux conséquences des décisions guidées par les données. Cette perspective ne remplace pas la rigueur analytique; elle la complète. Elle encourage des discussions plus larges sur la pertinence des indicateurs retenus, la qualité des données utilisées et la manière dont les résultats sont interprétés par les décideurs.',
    'article4-s2-p2': 'De plus, la diversité des points de vue joue un rôle clé dans la conception de systèmes d\'IA et de solutions data plus responsables. Lorsque des parcours, expériences et sensibilités variés sont présents à la table, les biais potentiels sont plus susceptibles d\'être repérés, questionnés et corrigés. Cela mène à des modèles plus justes, à des produits plus inclusifs et à de meilleures décisions ancrées dans la réalité des utilisateurs. Ainsi, la contribution des femmes dans ces domaines dépasse l\'équité : elle améliore directement la qualité, la pertinence et l\'impact des solutions fondées sur les données.',
    'article4-h2-3': 'Une évolution déjà en cours',
    'article4-toc': 'Contenu de l\'article',
    'article4-s3-p1': 'Le domaine de la Data et de l\'IA continue d\'évoluer à une vitesse remarquable, et les profils qui le façonnent évoluent eux aussi. Les nouvelles générations de femmes qui entrent dans ces secteurs apportent des niveaux de confiance différents, une plus grande visibilité des modèles inspirants et une compréhension plus large du rôle que les données peuvent jouer dans les organisations. Parallèlement, les entreprises reconnaissent de plus en plus que la performance technique seule ne suffit pas. Elles recherchent des professionnelles capables de relier analyse, stratégie, communication et impact — des compétences qui deviennent centrales à mesure que la Data influence des décisions plus complexes.',
    'article4-s3-p2': 'Cette évolution crée des opportunités significatives. À mesure que l\'adoption de l\'IA s\'accélère, la demande augmente pour des profils qui combinent rigueur analytique et compréhension des réalités humaines et organisationnelles. Cela ouvre un espace où différentes façons de penser, de collaborer et de résoudre des problèmes peuvent coexister et se renforcer. L\'avenir du secteur dépend donc non seulement de la technologie, mais aussi de la diversité des perspectives qui aident à concevoir, analyser et appliquer les solutions.',
    'article4-h2-4': 'Conclusion',
    'article4-c-p1': 'Être une femme en Data et en IA aujourd\'hui, c\'est travailler dans un domaine exigeant tout en contribuant à une transformation plus large. Au-delà des statistiques et des constats, il s\'agit d\'un mouvement qui redéfinit la manière dont la Data est comprise, utilisée et intégrée aux décisions. La technologie progresse grâce aux outils, mais plus encore grâce aux personnes et aux perspectives qui la façonnent. Cet article est une invitation à réfléchir à cette évolution et à donner de l\'espace à une expérience professionnelle encore trop peu discutée, malgré son impact croissant.',
    'article4-c-p2': 'Dans un secteur où les femmes demeurent sous-représentées, il est essentiel de reconnaître que l\'intelligence, les compétences et l\'expérience sont déjà là. Les défis ne devraient pas limiter la présence; ils devraient renforcer la légitimité d\'occuper ces espaces. La Data et l\'intelligence artificielle façonnent l\'avenir des organisations et de la société. Plus les femmes prennent leur place dans les analyses, les décisions et les rôles stratégiques, plus cet avenir devient riche, équilibré et pertinent.',

    // Page article5.html
    'article5-date': '16 février 2026',
    'article5-reading-time': '⏱️ 13 min de lecture',
    'article5-author': 'Djeny Mainvil MSc.',
    'article5-img-alt': 'Intelligence artificielle en entreprise',
    'article5-bio-name': 'Djeny Mainvil MSc.',
    'article5-bio-title': 'Analyste BI & Économiste | Maîtrise 2X en Intelligence d\'affaires et Sciences économiques | Power BI • SAS/R • Data Modeling • Dashboarding | Passionnée par les données, la performance et la prise de décision.',
    'article5-highlight1': 'Selon l’OCDE, un système d’IA est un système capable d’inférer, à partir de données, des prédictions, recommandations ou décisions influençant un environnement réel ou virtuel.',
    'article5-intro-p1': 'Aujourd’hui, le terme « Intelligence Artificielle » est devenu un véritable mot-valise. Pour beaucoup, l’IA se résume à ChatGPT, aux chatbots, à la génération de texte ou encore à l’optimisation logistique. Ces exemples donnent une vision d’ensemble du sujet, mais restent souvent fragmentés. Toutefois, investir sans distinguer clairement les différents types d’IA, leurs objectifs réels et leurs implications stratégiques peut conduire à des choix inefficaces, voire risqués.',
    'article5-intro-p2': 'L’IA n’est donc pas une machine qui « pense » ; c’est un système qui apprend à produire des résultats à partir de données. En d’autres termes, c’est une technologie conçue pour exécuter des tâches qui nécessiteraient normalement une forme d’intelligence humaine, en s’appuyant sur des modèles mathématiques et probabilistes avancés.',
    'article5-intro-p3': 'De plus, il est important de comprendre que l’IA ne se divise pas selon une seule logique. Les experts la classifient généralement selon trois angles complémentaires : par niveau d’intelligence (ANI, AGI, ASI), par famille technologique (symbolique, probabiliste, apprentissage automatique, apprentissage profond) et par usage métier (prédictive, prescriptive, générative, agentique, etc.). Ces différentes lectures permettent de distinguer ce qui relève de la capacité théorique, de l’architecture technique et de l’application concrète en entreprise.',
    'article5-intro-p4': 'Toutefois, pour garder une vision stratégique claire et applicable aux organisations, cet article se concentre sur les grandes familles technologiques et leurs usages métier les plus pertinents : IA prédictive, prescriptive, générative, agentique, émotionnelle et explicable. L’objectif est de relier la technologie à la prise de décision, plutôt que de rester uniquement dans une classification académique.',
    'article5-h2-1': 'IA Prédictive (Machine Learning) : Anticiper pour mieux décider',
    'article5-pred-p1': 'L’IA prédictive repose sur l’apprentissage automatique (Machine Learning). Elle analyse des données historiques afin d’identifier des schémas récurrents, puis calcule des probabilités futures à partir des tendances observées. Aujourd’hui, c’est la forme d’intelligence artificielle la plus répandue en entreprise. Concrètement, elle soutient la prise de décision stratégique en réduisant l’incertitude.',
    'article5-pred-li1': 'Quel client présente un risque élevé de désengagement ou de départ ?',
    'article5-pred-li2': 'Quelle demande anticiper pour le prochain trimestre ?',
    'article5-pred-li3': 'Quel prospect a la plus forte probabilité de conversion ?',
    'article5-pred-p2': 'Des entreprises comme Netflix utilisent le machine learning pour recommander du contenu personnalisé en fonction des comportements d’utilisation. Dans l’univers CRM, des plateformes comme Salesforce intègrent des systèmes de scoring prédictif afin d’aider les équipes commerciales à prioriser les opportunités les plus prometteuses. Toutefois, ce type d’IA ne remplace pas le décideur : il améliore la qualité des décisions en fournissant une estimation probabiliste structurée.',
    'article5-highlight2': 'Comme l’a souligné Layla Nasr, CEO de Makila AI, lors du Sommet de l\'innovation TECH RH (2026) : « Il n’y a pas d’IA magique, il faut toujours l’humain pour valider que les résultats ont du sens. »',
    'article5-pred-p3': 'Pour une PME, l’IA prédictive représente souvent un point d’entrée stratégique : les gains sont mesurables (amélioration des revenus, réduction du churn, meilleure allocation des ressources) et le retour sur investissement est généralement plus rapide. Mais lorsque les décisions deviennent systémiques, impliquent des arbitrages multiples et nécessitent une optimisation sous contraintes, l’IA prescriptive devient pertinente.',
    'article5-h2-2': 'IA Prescriptive : Optimiser les décisions complexes',
    'article5-pres-p1': 'Si l’IA prédictive répond à « ce qui risque d’arriver », l’IA prescriptive répond à « que devrions-nous faire ? ». Elle combine modèles prédictifs, contraintes opérationnelles et algorithmes d’optimisation mathématique pour proposer la meilleure action possible.',
    'article5-pres-p2': 'Elle est particulièrement puissante dans les environnements ERP : gestion des stocks, planification de production, logistique, pricing dynamique. UPS a communiqué publiquement sur ses outils d’optimisation de routes visant à réduire les kilomètres parcourus et la consommation de carburant. Ce type d’IA crée de la valeur par optimisation systémique, pas seulement par automatisation.',
    'article5-pres-li1': 'Des données structurées et fiables',
    'article5-pres-li2': 'Une modélisation explicite des contraintes',
    'article5-pres-li3': 'Une gouvernance solide',
    'article5-pres-p3': 'Pour les grandes entreprises, l’IA prescriptive est un levier stratégique majeur. Pour les PME, elle devient pertinente à mesure que la complexité opérationnelle et le volume transactionnel augmentent. Contrairement au prédictif qui estime une probabilité, le prescriptif simule plusieurs scénarios et recommande l’option qui maximise un objectif défini tout en respectant les limites opérationnelles.',
    'article5-h2-3': 'IA Générative (GenAI) : Accélérer la production intellectuelle',
    'article5-gen-p1': 'L’IA générative repose principalement sur des modèles avancés de Deep Learning, notamment l’architecture Transformers qui domine les grands modèles de langage (LLM). Elle peut produire du texte, des images, du code, des résumés, des rapports ou des analyses à partir d’un prompt. En entreprise, son intérêt est surtout organisationnel et opérationnel.',
    'article5-gen-li1': 'Résumer des réunions',
    'article5-gen-li2': 'Générer des brouillons de courriels commerciaux',
    'article5-gen-li3': 'Produire des rapports analytiques',
    'article5-gen-li4': 'Automatiser des réponses support',
    'article5-gen-li5': 'Transformer des données en explications narratives',
    'article5-gen-p2': 'Cependant, des cadres de référence comme celui du NIST insistent sur la gestion des risques : biais, confidentialité, sécurité des données et traçabilité des décisions automatisées. Une IA générative doit être supervisée par l’humain en contexte professionnel afin de garantir cohérence métier et conformité.',
    'article5-gen-p3': 'En 2025, la GenAI est considérée comme une tendance majeure dans l’évolution des ERP. Selon des analyses de Gartner, la majorité des fournisseurs ERP ont déjà intégré des capacités d’IA et de machine learning. Gartner prévoit que d’ici 2027, moins de 30% des fonctionnalités IA dans les ERP seront exclusivement activées par la GenAI, ce pourcentage pouvant dépasser 50% lorsqu’elle est combinée à des architectures agentiques.',
    'article5-h2-4': 'Agentic AI : Vers l’autonomie opérationnelle',
    'article5-agent-p1': 'L’Agentic AI (ou IA agentique) représente une évolution majeure. Contrairement à un simple chatbot, un agent IA est capable de poursuivre un objectif défini, planifier une séquence d’actions, analyser le contexte et exécuter des décisions de manière coordonnée, parfois sans intervention humaine directe.',
    'article5-agent-p2': 'Dans un environnement CRM, l’agent IA peut qualifier des leads, prioriser les prospects, générer des relances adaptées au profil et à l’historique d’interaction, produire des résumés d’appels en temps réel, et soutenir le représentant humain dans la préparation d’arguments personnalisés. Il devient un copilote opérationnel intégré au processus métier.',
    'article5-h3-1': 'Cas de Pandora et de l’agent IA « Gemma »',
    'article5-agent-case-p1': 'Pandora faisait face à une forte croissance de ses ventes en ligne et à une explosion des demandes clients à l’international. L’entreprise a déployé un agent IA nommé Gemma, intégré à son environnement CRM (Commerce Cloud + Data Cloud). L’agent pouvait répondre aux questions produits, recommander des articles adaptés, gérer certaines demandes de service et traiter des interactions sans intervention humaine.',
    'article5-agent-case-p2': 'Résultats mesurés :',
    'article5-agent-li1': '60% des demandes résolues de manière autonome',
    'article5-agent-li2': '22% des ventes traitées via Commerce Cloud',
    'article5-agent-li3': 'Amélioration du score de satisfaction client',
    'article5-agent-p3': 'L’agent IA n’est pas seulement un projet technologique : c’est aussi un projet organisationnel. Bien encadré, il devient un levier d’efficacité et de scalabilité; mal gouverné, il peut générer des erreurs décisionnelles, des risques de conformité et une perte de confiance.',
    'article5-h2-5': 'Emotion AI : Comprendre les signaux humains',
    'article5-emotion-p1': 'L’Emotion AI, aussi appelée affective computing, vise à identifier et interpréter des signaux émotionnels à partir de données comportementales et parfois biométriques, telles que la voix, le texte ou les expressions faciales. Dans un contexte CRM, elle peut aider à détecter la frustration lors d’un appel, analyser le ton d’un courriel, ou mesurer le sentiment global à partir d’avis clients.',
    'article5-emotion-p2': 'Cependant, l’Emotion AI soulève des enjeux éthiques majeurs : les émotions sont influencées par la culture, le contexte et l’individu. Une mauvaise interprétation peut mener à des décisions inappropriées ou discriminatoires. L’analyse de la voix ou du visage touche directement à la vie privée et nécessite une gouvernance rigoureuse, alignée avec les exigences de transparence et de protection des données.',
    'article5-h2-6': 'IA Explicable (Explainable AI) : Rendre les décisions compréhensibles',
    'article5-xai-p1': 'Dans des secteurs fortement réglementés (finance, santé, assurance), produire une prédiction ne suffit pas : une décision automatisée doit pouvoir être justifiée, documentée et comprise. L’IA explicable (XAI) vise à rendre visibles les facteurs qui influencent un modèle, clarifier le poids des variables et permettre aux décideurs de comprendre le raisonnement algorithmique.',
    'article5-xai-p2': 'L’explicabilité renforce la conformité, la confiance des utilisateurs et la qualité des audits. Pour une PME, elle peut devenir un levier de crédibilité auprès de partenaires, investisseurs ou institutions, en démontrant que l’usage de l’IA est maîtrisé, responsable et aligné avec les exigences de transparence.',
    'article5-h2-7': 'PME vs Grandes entreprises : La vraie différence stratégique',
    'article5-sme-p1': 'Le choix du type d’IA dépend du contexte et des priorités stratégiques. Pour une PME, l’approche la plus pertinente est souvent progressive, orientée vers des gains rapides et mesurables. L’IA prédictive est fréquemment le meilleur point de départ (revenus, churn, anomalies, demande), tandis que l’IA générative améliore rapidement la productivité (rédaction, résumés, support, pré-analyse).',
    'article5-sme-p2': 'Pour les organisations plus structurées, disposant de volumes de données importants et de processus complexes, l’IA prescriptive et les agents autonomes deviennent pertinents à condition que la qualité des données et la gouvernance soient solides. Dans des environnements réglementés ou orientés expérience client, l’Emotion AI et l’IA explicable prennent davantage de sens, car l’enjeu est autant la performance que la robustesse et la maîtrise du risque.',
    'article5-h2-8': 'Conclusion',
    'article5-concl-p1': 'L’erreur la plus fréquente n’est pas de ne pas adopter l’IA, mais de l’adopter sans comprendre précisément son type, son objectif et son niveau de risque. L’IA est un levier stratégique qui transforme la manière dont une organisation décide, opère et crée de la valeur. La question n’est donc pas « Faut-il adopter l’IA ? », mais plutôt « Quelle IA, pour quel objectif stratégique, avec quel niveau de gouvernance ? ».',
    
    // Podcast section
    'podcast-title': 'Podcast',
    'podcast-desc': 'Écoutez mes interventions et discussions sur des sujets liés à l\'analytique, aux données et aux stratégies numériques.',
    'podcast1-title': 'Comment les entreprises captent l\'attention sur TikTok et Instagram Reels',
    'podcast1-desc': 'Comment les entreprises utilisent l\'analytique pour maximiser leur visibilité et leur chiffre d\'affaires sur les réseaux sociaux.',
    
    // Recherches académiques section
    'recherches-title': 'Recherches académiques',
    'recherches-desc': 'Retrouvez ici mes travaux de recherche et contributions académiques dans le domaine de l\'économie, de l\'intelligence des affaires et de l\'analyse de données.',
    
    // Contact section
    'section-contact': 'Contact',
    'contact-subtitle': 'Échanger autour d\'enjeux liés aux données, à la BI ou aux solutions technologiques.',
    
    // Sidebar sections
    'sidebar-etudes': 'Études',
    'domaine-1': 'Maîtrise en Intelligence des Affaires (HEC)',
    'domaine-2': 'Maîtrise en sciences économiques (Université de Montréal)',
    'domaine-3': 'Baccalauréat en sciences économiques (Université Quisqueya)',
    'sidebar-outils': 'Outils & Compétences',
    'sidebar-audience': 'À qui s\'adresse ce site',
    'audience-1': 'Dirigeants et entrepreneurs',
    'audience-2': 'PME et organisations en structuration',
    'audience-3': 'Recruteurs et gestionnaires',
    'audience-4': 'Professionnels et équipes en intelligence des affaires',
    
    // Footer
    'footer-tagline': 'Analyser. Clarifier. Décider.',
    'footer-subtitle': 'Économiste & Analyste des Affaires',
    'footer-location': 'Montréal, Canada',
    'footer-copyright': '&copy; 2026 Djeny Mainvil. Tous droits réservés.',
    
    // Page recherches.html
    'recherches-page-title': 'Recherches Académiques',
    'recherches-page-subtitle': 'Retrouvez ici mes travaux de recherche et contributions académiques dans le domaine de l\'économie, de l\'intelligence des affaires et de l\'analyse de données.',
    'recherches-cta-text': 'Pour consulter les documents complets,',
    'recherches-hec-title': 'HEC Montréal - Rapport de Stage',
    'recherches-hec-work': 'Optimisation de la performance marketing et commerciale dans une PME industrielle par l\'intelligence d\'affaires : intégration de données multi-sources et développement de tableaux de bord Power BI',
    'recherches-hec-context': 'Résumé :',
    'recherches-hec-context-text': 'Ce projet supervisé s\'inscrit dans une démarche rigoureuse et méthodologique visant à développer une solution décisionnelle efficace à travers la création de tableaux de bord Power BI, en réponse aux besoins spécifiques du département des ventes de l\'entreprise Sycodal. Dès la première étape, une analyse des besoins d\'affaires a été menée en étroite collaboration avec le directeur des ventes et les membres de l\'équipe commerciale. Cette phase initiale a permis d\'identifier des indicateurs clés essentiels au suivi de la performance commerciale, à la mesure de l\'efficacité des campagnes marketing et à l\'amélioration globale du processus décisionnel.',
    'recherches-hec-p2': 'Dans un deuxième temps, un inventaire détaillé des systèmes d\'information de l\'entreprise a été réalisé. Les données issues de plateformes telles que Dynacom, HubSpot et Scoro ont été explorées à travers une connexion directe à Azure SQL. L\'analyse de la structure relationnelle des données a permis de concevoir un modèle robuste, reposant sur une architecture en étoile, facilitant les croisements analytiques entre les dimensions critiques (clients, produits, périodes, etc.) et les faits transactionnels.',
    'recherches-hec-p3': 'De plus, un processus rigoureux de transformation et de nettoyage des données a été effectué à l\'aide de Power Query afin d\'en assurer la qualité, la cohérence et la fiabilité. Sur cette base, des mesures dynamiques ont été développées en Data Analysis Expressions (DAX) pour produire des visualisations pertinentes, alignées avec les priorités stratégiques de l\'entreprise. Une attention particulière a été portée à l\'expérience utilisateur, notamment par l\'intégration de filtres interactifs, de seuils de performance personnalisés et de la classification Récence, Fréquence, Monétaire (RFM) des clients, permettant d\'orienter les actions commerciales de façon ciblée.',
    'recherches-hec-p4': 'Enfin, les rapports ont été soumis à des tests auprès des utilisateurs finaux afin de valider leur pertinence et leur convivialité. Des ajustements ont été réalisés à la suite des rétroactions, et une documentation complète a été élaborée pour assurer la continuité, la maintenance et l\'évolutivité du projet. Ce travail témoigne d\'une application concrète et approfondie des savoir-faire acquis dans le cadre de la maîtrise en intelligence d\'affaires, en réponse à des enjeux réels d\'entreprise.',
    'recherches-udem-title': 'Université de Montréal - Rapport de Recherche',
    'recherches-udem-work': 'Crise de la Covid-19 et réallocation de l\'emploi aux États-Unis et au Canada',
    'recherches-udem-context': 'Résumé :',
    'recherches-udem-context-text': 'Ce rapport de recherche met en exergue le lien entre réallocation de l\'emploi et la crise de la COVID-19 particulièrement aux États-Unis et au Canada. En effet, d\'une crise sanitaire à une crise de l\'emploi, la pandémie de la COVID-19 a affecté toutes les structures du marché du travail. Des emplois ont été créés, d\'autres détruits, incitant ainsi à une réallocation de la main-d\'œuvre. Nous avons pour objectif d\'analyser soigneusement l\'évolution du niveau d\'emploi au cours de ces deux dernières décennies tout en comparant la crise de 2008 et de la COVID-19 à partir de la statistique descriptive et accompagné d\'une régression économétrique par la méthode des Moindres carrés ordinaires (MCO). Ce travail permet de comprendre comment réagit le PIB et le chômage en fonction de la réallocation de l\'emploi aux États-Unis.',
    'recherches-memoire-title': 'Université Quisqueya - Mémoire',
    'recherches-memoire-work': 'Investissements directs étrangers (IDE) dans le secteur de la télécommunication et demande de formation technique en Haïti : le cas des étudiants de Canado Technique (2014-2019)',
    'recherches-memoire-context': 'Résumé :',
    'recherches-memoire-context-text': 'Ce mémoire de sortie porte sur le lien existant entre les investissements directs étrangers dans le secteur de la télécommunication et les déterminants de la demande d\'éducation, particulièrement en formation technique. En effet, son objectif est d\'analyser soigneusement l\'évolution de la demande de formation technique pour les filières de technologies et télécommunication et les déterminants qui sont à la base de la décision de poursuivre ses études. Pour ce faire, nous avons effectué une étude de cas auprès du centre de Canado Technique qui nous a permis de mieux comprendre les raisons pour lesquelles nos enquêtés décident de poursuivre leurs études en formation technique. Parmi les principaux facteurs retenus et analysés, nous pouvons relever : le développement personnel, un emploi rapide et le nombre d\'années d\'études plus court. Ces résultats permettent de voir le rôle que jouent les investissements directs étrangers, particulièrement la Digicel et la Natcom, dans le choix d\'investissement en capital humain des répondants. Le centre Canado technique pourrait s\'inspirer de ce travail pour améliorer l\'accord entre son offre de formation par rapport à la demande effectuée par les étudiants tout en tenant compte des débouchés qu\'offre le marché de l\'emploi en Haïti.',
    
    // Page article1.html
    'article1-title': 'Scientifique des données, analyste de données et analyste en intelligence d\'affaires : quelles différences, pour quels usages ?',
    'article1-desc': 'Une analyse claire des différents rôles analytiques et de leurs contributions spécifiques aux organisations.',
    'article1-date': '18 décembre 2025',
    'article1-reading-time': '10 min de lecture',
    'article1-author': 'Djeny Mainvil MSc.',
    'article1-p1': 'Avec la place croissante de la donnée dans les organisations, le recrutement de profils spécialisés en analyse et exploitation des données est devenu un enjeu stratégique pour de nombreuses entreprises. Cette dynamique s\'accompagne toutefois d\'une confusion persistante quant aux rôles à pourvoir. Scientifique des données, analyste de données et analyste en intelligence d\'affaires sont souvent présentés comme des intitulés proches, voire interchangeables, alors qu\'ils correspondent à des fonctions distinctes et à des contributions différentes dans le processus décisionnel.',
    'article1-p2': 'Dans les pratiques de recrutement, cette confusion se traduit par des offres d\'emploi aux attentes très larges, dans lesquelles un même profil est censé analyser les données, produire des tableaux de bord, anticiper les tendances futures et soutenir la stratégie globale de l\'entreprise. Cette accumulation d\'attentes peut conduire à une sous-utilisation des compétences, à des frustrations internes et à un décalage entre les résultats attendus et la valeur effectivement créée. Pourquoi cette confusion persiste chez certains recruteurs?',
    'article1-highlight1': 'Le problème ne réside ni dans la rareté des talents ni dans la complexité intrinsèque de ces métiers, mais dans un point plus fondamental : l\'absence de clarté sur la finalité du rôle au sein de l\'organisation.',
    'article1-p3': 'Avant même de s\'interroger sur les technologies ou les compétences techniques requises, une question structurante devrait être posée : quelle décision l\'entreprise cherche-t-elle réellement à améliorer grâce aux données ? C\'est à partir de cette interrogation que les différences entre scientifique des données, analyste de données et analyste en intelligence d\'affaires cessent d\'être théoriques pour devenir opérationnelles et utiles. De ce fait, l\'analyse proposée dans cet article s\'inscrit dans la continuité des cadres de l\'analytique d\'affaires et de la science de la décision, où les rôles sont examinés à partir de leur contribution aux décisions plutôt qu\'à partir de leurs seuls intitulés.',
    'article1-h2-1': 'Comprendre la confusion sans opposer les rôles',
    'article1-p4': 'La confusion entre les rôles liés aux données ne doit pas être interprétée comme une erreur systématique. Elle reflète plutôt la nature même de ces fonctions, qui évoluent dans un écosystème étroitement interconnecté. Dans la pratique, les frontières entre analyste de données, analyste en intelligence d\'affaires et scientifique des données sont rarement rigides, en particulier dans les petites et moyennes organisations où les ressources sont limitées et où un même professionnel peut être amené à assumer plusieurs responsabilités.',
    'article1-p5': 'Cette proximité fonctionnelle contribue naturellement à brouiller les distinctions. Les outils utilisés se recoupent, les compétences analytiques sont en partie partagées et les objectifs poursuivis sont souvent communs. Il devient alors compréhensible, tant pour les recruteurs que pour les entrepreneurs, de percevoir ces rôles comme partiellement interchangeables, voire comme différentes déclinaisons d\'une même fonction analytique.',
    'article1-p6': 'Toutefois, cette apparente interchangeabilité ne signifie pas absence de différences. Elle masque plutôt des variations subtiles mais importantes dans la manière dont chaque rôle contribue au processus décisionnel. Selon le contexte, l\'organisation peut chercher à comprendre ce qui se passe, à structurer l\'information pour mieux piloter la performance ou à explorer des scénarios futurs. Ces intentions coexistent et expliquent pourquoi les rôles liés aux données sont à la fois étroitement liés, complémentaires et difficiles à distinguer de manière stricte. Reconnaître cette continuité permet de dépasser une lecture hiérarchique ou concurrentielle des métiers et d\'aborder l\'analytique comme une chaîne de valeur, dans laquelle chaque fonction apporte une contribution spécifique à différents moments de la prise de décision.',
    'article1-h2-2': 'L\'Analyste de données : comprendre la réalité avant d\'agir',
    'article1-p7': 'Dans les cadres académiques et professionnels de l\'analytique décisionnelle, le rôle de l\'Analyste de données est associé à une fonction fondamentale : transformer des données brutes en une compréhension fiable de la réalité observée. Il intervient principalement lorsque l\'organisation cherche à répondre à des questions portant sur ce qui s\'est produit, à expliquer des écarts de performance ou à identifier des tendances. Cette étape de compréhension est essentielle, car elle constitue la base factuelle sur laquelle reposent les décisions ultérieures.',
    'article1-highlight2': 'Exemple concret : Lorsqu\'une entreprise constate une baisse de ses ventes sur un trimestre donné, l\'Analyste de données ne se limite pas à constater le résultat. Il analyse les données disponibles afin d\'identifier où la baisse s\'est produite, à quel moment, sur quels segments de clients ou de produits, et en quoi cette évolution diffère des périodes précédentes.',
    'article1-p8': 'L\'objectif n\'est pas encore de décider, mais de clarifier la situation de manière rigoureuse et partagée, afin de fournir une lecture commune et exploitable de la réalité.',
    'article1-p9': 'Ainsi, l\'Analyste de données occupe une position d\'interface entre les données et les besoins métiers. Il traduit des problématiques opérationnelles en analyses mesurables et restitue les résultats dans un langage accessible aux décideurs, contribuant à réduire l\'incertitude informationnelle au moment de la décision. Ce rôle s\'inscrit naturellement dans une logique de complémentarité avec les autres fonctions liées aux données : les analyses produites alimentent des outils de pilotage plus structurés et peuvent servir de socle à des approches analytiques plus avancées. L\'Analyste de données participe ainsi à une chaîne de valeur continue, dont l\'objectif n\'est pas la sophistication technique, mais l\'amélioration progressive de la qualité des décisions.',
    'article1-h2-3': 'L\'Analyste en intelligence d\'affaires : structurer l\'information pour piloter la décision',
    'article1-p10': 'En analytique d\'affaires, le rôle de l\'Analyste en intelligence d\'affaires se distingue par sa contribution directe au pilotage de l\'organisation. Là où l\'Analyste de données aide à comprendre la réalité observée, l\'Analyste en intelligence d\'affaires intervient pour structurer cette information dans le temps et la rendre utilisable de manière récurrente par les décideurs. Son objectif principal n\'est pas l\'analyse ponctuelle, mais la mise en place de repères décisionnels stables.',
    'article1-p11': 'L\'Analyste en intelligence d\'affaires se concentre donc sur la définition et la cohérence des indicateurs clés de performance, la conception de tableaux de bord et l\'organisation des flux d\'information à destination des gestionnaires. Il agit à l\'interface entre la donnée et la gouvernance, en s\'assurant que les indicateurs suivis sont alignés avec les priorités stratégiques de l\'entreprise. Cette structuration permet aux décideurs de passer plus rapidement de l\'information à l\'action, sans dépendre d\'analyses ad hoc.',
    'article1-p12': 'Comme les autres rôles data, l\'Analyste en intelligence d\'affaires ne fonctionne pas en isolation. Il s\'appuie sur les analyses produites en amont et contribue à créer un langage commun autour de la performance. En ce sens, il joue un rôle charnière dans la chaîne de valeur analytique : il transforme la compréhension en capacité de pilotage, tout en préparant le terrain pour des analyses plus avancées surtout lorsque l\'organisation gagne en maturité.',
    'article1-h2-4': 'Le Scientifique des données : anticiper lorsque l\'organisation est prête',
    'article1-p13': 'En analytique avancée, le rôle du Scientifique des données apparaît lorsque l\'organisation cherche à aller au-delà de la compréhension et du pilotage pour explorer des scénarios futurs. Il intervient principalement dans des contextes où les données sont suffisamment structurées, fiables et historisées pour permettre des analyses prédictives ou prescriptives. Ce rôle répond ainsi à des besoins d\'anticipation qui dépassent l\'analyse descriptive ou le suivi de la performance.',
    'article1-p14': 'Le Scientifique des données mobilise des méthodes de modélisation statistique et algorithmique afin d\'identifier des relations complexes, de formuler des prévisions ou d\'optimiser certaines décisions. Il répond à des questions de type : que pourrait-il se produire ? quel scénario est le plus probable ? ou comment améliorer un résultat donné sous certaines contraintes ? Son apport est particulièrement pertinent lorsque les décisions à soutenir sont répétitives, à fort volume ou à fort enjeu, et lorsqu\'une automatisation partielle de la décision devient envisageable.',
    'article1-highlight3': 'Point important : Ce rôle ne constitue pas une étape « supérieure » dans une hiérarchie des métiers liés aux données. Sa valeur dépend fortement du contexte organisationnel et du niveau de maturité analytique atteint.',
    'article1-p15': 'En l\'absence de données de qualité, de processus clairs ou de décisions bien définies, même les modèles les plus sophistiqués peinent à produire un impact concret. De ce fait, le Scientifique des données s\'inscrit dans une continuité logique avec les rôles d\'Analyste de données et d\'Analyste en intelligence d\'affaires, qui fournissent les fondations nécessaires à son intervention. Il contribue ainsi à la chaîne de valeur analytique en apportant une capacité d\'anticipation et de simulation, non pour remplacer les autres fonctions, mais pour les prolonger et transformer une compréhension stable en avantage prospectif.',
    'article1-h2-5': 'Comprendre les différences sans opposer les rôles',
    'article1-p16': 'À ce stade de la réflexion, une question s\'impose et mérite d\'être posée explicitement : faut-il, pour bien exploiter la donnée, recruter un Analyste de données, un Analyste en intelligence d\'affaires et un Scientifique des données ? Formulée ainsi, cette interrogation révèle une attente importante chez les recruteurs et les entrepreneurs : celle de trouver une configuration idéale, voire exhaustive, des rôles liés aux données. Pourtant, la pertinence d\'une telle approche dépend moins du nombre de profils recrutés que de la clarté des fonctions analytiques réellement nécessaires à l\'organisation.',
    'article1-p17': 'Les rôles d\'Analyste de données, d\'Analyste en intelligence d\'affaires et de Scientifique des données peuvent correspondre à des fonctions distinctes mais complémentaires au sein du processus décisionnel. Ils peuvent coexister dans certaines organisations, se recouper dans d\'autres ou être partiellement incarnés par une même personne, notamment lorsque la taille ou la maturité de l\'entreprise ne justifie pas une spécialisation stricte. La question centrale n\'est donc pas de savoir s\'il faut recruter les trois, mais encore une fois de déterminer quelles fonctions doivent être assurées, à quel moment, et selon quel degré de priorité.',
    'article1-p18': 'Par exemple, dans une organisation en phase de structuration, la priorité peut être donnée à la compréhension et au pilotage, fonctions généralement associées aux rôles d\'Analyste de données et d\'Analyste en intelligence d\'affaires. À mesure que les données deviennent plus fiables et que les décisions à soutenir sont mieux définies, des capacités d\'anticipation et de modélisation peuvent alors devenir pertinentes. Cette progression n\'est ni linéaire ni obligatoire : elle dépend du contexte, des objectifs et des contraintes propres à chaque organisation. Ainsi, raisonner en termes de titres de postes conduit souvent à une fausse alternative ; l\'enjeu réel consiste à aligner les besoins décisionnels de l\'entreprise avec les fonctions analytiques à couvrir, qu\'elles soient réparties entre plusieurs profils ou concentrées dans un rôle plus hybride.',
    'article1-h2-6': 'Recruter un rôle en data : déplacer la question pour mieux décider',
    'article1-p19': 'À l\'issue de cette analyse, une conclusion s\'impose : le recrutement d\'un rôle lié aux données ne peut être réduit à un simple choix d\'intitulé de poste. Chercher à déterminer s\'il faut embaucher un Analyste de données, un Analyste en intelligence d\'affaires ou un Scientifique des données revient souvent à poser la question trop tard dans le raisonnement. Ce choix n\'a de sens qu\'une fois clarifiée la fonction analytique que l\'organisation souhaite réellement renforcer et la décision qu\'elle cherche à améliorer.',
    'article1-p20': 'Plutôt que de partir des profils disponibles sur le marché, il est plus pertinent pour les recruteurs et les entrepreneurs de raisonner à partir de quelques questions structurantes :',
    'article1-li1': 'Quelle décision l\'entreprise cherche-t-elle à améliorer aujourd\'hui ?',
    'article1-li2': 'S\'agit-il de mieux comprendre sa performance, de structurer son pilotage ou d\'anticiper certains résultats futurs ?',
    'article1-li3': 'À quel niveau de fréquence et avec quel degré de complexité ces décisions sont-elles prises ?',
    'article1-p21': 'Les réponses à ces questions permettent de déterminer quelles fonctions analytiques sont prioritaires, indépendamment du titre du poste.',
    'article1-p22': 'Cette approche présente un avantage majeur : elle reconnaît la réalité organisationnelle dans laquelle les rôles liés aux données sont souvent hybrides, évolutifs et interdépendants. Une même personne peut, à un moment donné, assurer des fonctions de compréhension, de pilotage et, dans certains cas, d\'anticipation, tandis que dans d\'autres contextes ces fonctions peuvent être réparties entre plusieurs profils. L\'enjeu n\'est donc pas de viser une structure idéale ou exhaustive, mais de garantir une cohérence fonctionnelle entre les besoins décisionnels de l\'entreprise et les compétences mobilisées.',
    'article1-h2-7': 'Conclusion',
    'article1-p23': 'Clarifier les différences entre Analyste de données, Analyste en intelligence d\'affaires et Scientifique des données ne vise pas à rigidifier les rôles, mais à offrir un cadre de lecture plus précis aux décideurs. Ce cadre permet de mieux recruter, mieux organiser et, surtout, mieux utiliser la donnée comme un levier au service de décisions éclairées.',
    'article1-p24': 'Il met également en évidence une autre question souvent abordée trop tôt dans les organisations : celle des outils. En effet, les plateformes de visualisation, Progiciel de Gestion Intégré (PGI), statistiques ou solutions d\'intelligence artificielle ne créent de valeur que lorsqu\'ils sont mis au service de fonctions analytiques clairement définies et d\'un usage cohérent avec le niveau de maturité décisionnelle de l\'entreprise. Aborder les logiciels comme un prolongement des rôles, et non comme une fin en soi, constitue ainsi la suite logique de cette réflexion, qui fera l\'objet du prochain article.',

    // Page article2.html
    'article2-title': 'Power BI, Progiciels de Gestion Intégrés (PGI) et outils d\'intelligence artificielle : comprendre le rôle des logiciels dans l\'analytique',
    'article2-desc': 'Comment les outils technologiques s\'intègrent dans une démarche analytique cohérente.',
    'article2-date': '22 décembre 2025',
    'article2-reading-time': '⏱️ 10 min de lecture',
    'article2-author': 'Djeny Mainvil MSc.',
    'article2-highlight1': '« Nous avons Power BI, mais il est peu utilisé. »',
    'article2-highlight2': '« Les données sont là, mais elles sont dispersées. »',
    'article2-highlight3': '« L\'ERP est en place, pourtant les décisions restent complexes. »',
    'article2-intro': 'Ces phrases, souvent prononcées par des entrepreneurs ou des dirigeants de PME, sont devenues familières pour celles et ceux qui travaillent en analytique ou en transformation organisationnelle. Cependant, elles ne traduisent pas un manque de technologie ni un retard en matière d\'outils. Elles révèlent plutôt un décalage entre les solutions déployées et la manière dont les décisions sont concrètement formulées et arbitrées au sein des organisations. Autrement dit, dans un contexte où les solutions analytiques, les progiciels de gestion intégrés et les technologies d\'intelligence artificielle sont de plus en plus accessibles, la question n\'est plus celle de la disponibilité des outils, mais bien celle de leur rôle réel dans la dynamique décisionnelle.',
    'article2-p1': 'Dans cette perspective, de nombreuses entreprises continuent d\'aborder les logiciels comme des solutions autonomes, supposées créer de la valeur dès leur implantation. Or, cette approche conduit fréquemment à des environnements technologiques riches, mais insuffisamment structurés sur le plan décisionnel : les données sont collectées, visualisées ou automatisées, sans que soit clairement précisé l\'usage auquel elles doivent répondre. Le problème ne réside alors pas dans un manque d\'information, mais dans la difficulté à transformer cette information en repères stables et véritablement actionnables. Il est donc vraiment important de comprendre que les logiciels ne créent de valeur que lorsqu\'ils prolongent une fonction clairement identifiée : un progiciel de gestion intégré structure l\'exécution, un outil de business intelligence soutient le pilotage, et les technologies d\'intelligence artificielle permettent, dans certains contextes, d\'anticiper ou d\'optimiser des décisions répétitives.',
    'article2-p2': 'Encore faut-il interroger la manière dont cette réflexion est généralement amorcée dans les organisations ? Avant d\'examiner le rôle spécifique de chaque catégorie de logiciels, il convient donc de s\'arrêter sur la façon dont la question des outils est le plus souvent posée ainsi que les limites que cette approche comporte.',
    'article2-h2-1': 'Pourquoi la question des outils est souvent mal posée?',
    'article2-p3': 'Dans de nombreuses organisations, la réflexion sur les outils analytiques débute presque systématiquement par une question technologique : quel logiciel adopter ? Cette démarche, bien qu\'intuitive, inverse l\'ordre logique du raisonnement. Elle repose sur l\'hypothèse implicite que la valeur découlera de l\'outil lui-même, alors qu\'en pratique, un logiciel ne fait que matérialiser une intention décisionnelle déjà définie. Cette logique est renforcée par la manière dont les technologies sont présentées, chacune étant associée à un bénéfice précis. Pris séparément, ces arguments sont pertinents lorsqu\'ils ne sont pas rattachés à des décisions concrètes, ils aboutissent à des usages dispersés et peu structurés.',
    'article2-p4': 'À cela s\'ajoute une assimilation fréquente entre données, information et décision. En effet, collecter des données, produire des tableaux de bord ou automatiser certaines analyses ne garantit pas, en soi, une meilleure prise de décision. Sans clarification préalable de ce qui doit être décidé, à quelle fréquence et par qui, les outils demeurent périphériques au processus décisionnel. Ils produisent de l\'information, parfois en abondance, sans pour autant créer des repères suffisamment stables pour orienter l\'action. Ainsi, poser la question des logiciels avant celle de leur fonction revient à confondre le moyen et la finalité : ce n\'est qu\'en identifiant d\'abord le type de décision à soutenir que le rôle des outils devient réellement intelligible.',
    'article2-h2-2': 'Le rôle des progiciels de gestion intégrés (PGI) : structurer l\'exécution avant la décision',
    'article2-p5': 'Dans la manière dont une organisation gère et structure son information, les progiciels de gestion intégrés (PGI) ou ERP en anglais jouent un rôle fondamental, mais parfois mal compris. Un PGI regroupe et articule l\'ensemble des logiciels qui soutiennent les activités opérationnelles internes de l\'entreprise : ventes, achats, finances, ressources humaines, opérations ou logistique. Dans cette même logique, les systèmes de gestion de la relation client (CRM) occupent une place comparable, avec un périmètre orienté vers les activités commerciales et relationnelles. PGI et CRM partagent ainsi une fonction essentielle : structurer l\'exécution, capter les événements au moment où ils se produisent et assurer la cohérence de l\'information à l\'échelle de l\'organisation. Leur vocation première n\'est pas l\'aide directe à la décision, mais l\'intégration des processus et la fiabilisation des données opérationnelles sur lesquelles reposent les usages ultérieurs.',
    'article2-p6': 'C\'est précisément à ce niveau que se situe leur valeur réelle. En centralisant les données et en réduisant les silos, les PGI ainsi que le CRM qui est destiné aux activités orientées client, rendent l\'information traçable, comparable et exploitable dans le temps. Les attentes deviennent problématiques lorsque ces systèmes sont perçus comme des outils décisionnels à part entière. Les fonctions qu\'ils proposent sont utiles pour le suivi opérationnel, mais demeurent limitées pour soutenir des arbitrages managériaux plus complexes. Ainsi, dans une lecture fonctionnelle et managériale, PGI et CRM sécurisent non seulement les processus mais créent également les conditions nécessaires à un pilotage fiable. Ce n\'est qu\'une fois cette base opérationnelle solidement établie que d\'autres outils peuvent intervenir pour structurer, analyser et mettre en perspective l\'information issue de l\'exécution.',
    'article2-h2-3': 'Le rôle des outils de BI : structurer le pilotage et créer des repères décisionnels',
    'article2-p7': 'Dans la continuité des PGI, les outils de business intelligence (BI) interviennent à une étape distincte du processus décisionnel : celle du pilotage. Leur rôle n\'est pas de produire la donnée, mais de mettre en forme l\'information issue des systèmes opérationnels afin de la rendre lisible, comparable et exploitable dans le temps. Des solutions largement répandues comme Power BI ou Tableau permettent ainsi de transformer des données transactionnelles en indicateurs structurés, organisés autour d\'axes de performance pertinents pour l\'organisation. Contrairement aux analyses ponctuelles, le pilotage s\'inscrit dans une logique récurrente : il vise à suivre l\'évolution des résultats, à identifier des écarts et à soutenir des décisions prises de manière régulière.',
    'article2-p8': 'L\'enjeu central des outils de BI n\'est donc pas la visualisation en elle-même, mais la capacité à créer des repères décisionnels partagés. En structurant l\'information autour de tableaux de bord communs, ils favorisent une lecture homogène de la performance entre les équipes et les niveaux de management, et ancrent les discussions sur une base factuelle commune. Toutefois, les limites apparaissent lorsque ces outils sont déployés sans clarification préalable des indicateurs à suivre ou des décisions à soutenir : les tableaux de bord se multiplient alors sans réel impact. Dans cette approche, la BI occupe ainsi une position intermédiaire essentielle : elle transforme l\'information opérationnelle en support de pilotage, sans se substituer ni à l\'analyse approfondie ni à l\'anticipation. C\'est cette stabilité du pilotage qui conditionne ensuite l\'utilisation pertinente de technologies plus avancées, notamment les outils d\'intelligence artificielle.',
    'article2-h2-4': 'Le rôle des outils d\'intelligence artificielle : anticiper, optimiser et gagner en efficacité',
    'article2-p9': 'Les outils d\'intelligence artificielle interviennent à un stade plus avancé du processus décisionnel, mais leur rôle ne peut être compris qu\'à la lumière de l\'objectif qu\'ils servent. Contrairement aux PGI, qui structurent l\'exécution, et aux outils de business intelligence, qui organisent le pilotage, les technologies d\'IA sont mobilisées lorsque l\'organisation cherche à anticiper des évolutions, optimiser des choix ou améliorer l\'efficacité de certaines activités. Selon le contexte, il peut s\'agir d\'exploiter des données pour formuler des prévisions, de détecter des situations atypiques, de recommander des actions sous contraintes, ou encore d\'automatiser des tâches et des interactions à l\'aide d\'agents intelligents. Leur apport ne réside donc pas uniquement dans l\'analyse des données existantes, mais aussi dans leur capacité à soutenir le travail humain en accélérant, en simplifiant ou en fiabilisant certaines décisions ou opérations.',
    'article2-p10': 'Cette diversité d\'usages explique pourquoi la valeur de l\'IA est étroitement liée à la maturité de l\'organisation. Lorsque les données issues des PGI sont fiables et que les repères de pilotage sont stabilisés par les outils de BI, certaines applications de l\'IA peuvent produire un impact décisionnel significatif. À l\'inverse, dans des contextes où les données sont moins structurées, l\'IA est parfois mobilisée avant tout comme un levier d\'efficacité opérationnelle, par exemple pour automatiser des tâches, assister les équipes ou fluidifier des processus. Dans ce cadre de réflexion, l\'intelligence artificielle ne constitue donc ni un point de départ ni une solution universelle. Elle prolonge un processus organisationnel déjà clarifié, en apportant des capacités d\'anticipation, d\'optimisation ou de soutien opérationnel là où les objectifs sont suffisamment définis. Son rôle n\'est pas de remplacer le jugement humain, mais de l\'appuyer différemment selon la nature des décisions et des activités à soutenir.',
    'article2-h2-5': 'Choisir ses outils : une question de trajectoire décisionnelle',
    'article2-p11': 'Lorsqu\'il s\'agit de structurer l\'environnement technologique, de nombreux dirigeants se demandent jusqu\'où aller : faut-il investir simultanément dans un PGI, des outils de BI et des solutions d\'intelligence artificielle pour espérer tirer de la valeur des données ? Il est important de prendre en compte que la cohérence d\'un environnement analytique repose moins sur l\'étendue des outils que sur leur capacité à répondre à des besoins décisionnels clairement identifiés. En effet, certaines organisations doivent avant tout sécuriser l\'exécution et fiabiliser leurs données, un objectif principalement soutenu par un PGI. D\'autres cherchent surtout à structurer leur pilotage et à suivre leur performance dans le temps, ce qui rend les outils de BI prioritaires. Les technologies d\'intelligence artificielle, quant à elles, prennent tout leur sens lorsque les décisions à optimiser ou à anticiper sont déjà suffisamment cadrées.',
    'article2-p12': 'Cette diversité de situations explique pourquoi il n\'existe pas de modèle technologique standard. Les fonctions couvertes par les outils peuvent se compléter, se recouvrir ou évoluer avec le temps. Une entreprise peut disposer d\'un PGI et d\'outils de BI sans être prête à mobiliser l\'IA de manière pertinente, tandis qu\'une autre, plus spécialisée, peut tirer un avantage concret d\'approches avancées sans infrastructure lourde. L\'enjeu n\'est donc pas de viser une configuration idéale, mais de construire une trajectoire cohérente. Plutôt que de se demander quels outils adopter, il devient alors plus utile de s\'interroger sur les décisions que l\'organisation cherche à mieux maîtriser aujourd\'hui, et sur les fonctions analytiques nécessaires pour y parvenir. C\'est donc ce raisonnement qui permet aux outils de s\'inscrire durablement dans la stratégie, sans dépendre d\'effets de mode.',
    'article2-h2-6': 'Conclusion',
    'article2-p13': 'Au fil de cet article, une idée revient de manière récurrente : les logiciels, aussi performants soient-ils, ne créent pas de valeur par eux-mêmes. Les progiciels de gestion intégrés et les outils CRM organisent le quotidien de l\'entreprise et fiabilisent l\'information opérationnelle. Les outils de business intelligence permettent de suivre la performance et de donner des repères clairs pour le pilotage. Les technologies d\'intelligence artificielle, quant à elles, peuvent aider à anticiper, à optimiser ou à gagner en efficacité, lorsque les conditions sont réunies. Chacun joue un rôle précis, à condition d\'être utilisé pour ce qu\'il est réellement conçu à faire.',
    'article2-p14': 'Cette lecture invite à changer la manière dont les décisions technologiques sont souvent abordées. Plutôt que de partir des outils disponibles ou des promesses associées aux nouvelles solutions, il devient plus utile de commencer par les questions que l\'organisation cherche à mieux gérer au quotidien. Quelles décisions doivent être prises plus sereinement ? Quelles activités gagneraient à être mieux structurées, mieux suivies ou partiellement automatisées ? C\'est en partant de ces besoins concrets que les choix technologiques prennent tout leur sens.',
    'article2-p15': 'Clarifier le rôle des PGI, des outils de BI et des solutions d\'intelligence artificielle revient donc à mieux comprendre comment ces outils peuvent s\'articuler dans la durée. Lorsqu\'ils sont pensés comme des appuis au service de décisions clairement identifiées, les logiciels cessent d\'être des investissements abstraits pour devenir de véritables leviers de pilotage, d\'anticipation et d\'efficacité au sein de l\'organisation.',

    // Page article3.html
    'article3-date': '23 janvier 2026',
    'article3-reading-time': '⏱️ 12 min de lecture',
    'article3-author': 'Djeny Mainvil MSc.',
    'article3-img-alt': 'Guide simple pour commencer avec ses données',
    'article3-highlight-quote': '<strong>« Nous avons des données… mais nous ne savons pas quoi en faire. »</strong>',
    'article3-highlight-sub': 'Ce guide simple vous montre par où commencer, étape par étape, sans jargon technique et sans investissement démesuré.',
    'article3-p1': 'De nos jours, beaucoup de petites et moyennes entreprises se retrouvent dans la même situation : elles possèdent une quantité importante d’informations… mais ne savent pas comment les utiliser. Les fichiers s’accumulent, les logiciels ne communiquent pas entre eux, les équipes travaillent chacun avec leurs propres chiffres, et les décisions reposent trop souvent sur l’intuition plutôt que sur des faits. Pourtant, tirer parti de ses données n’est ni réservé aux grandes organisations ni aussi complexe qu’on l’imagine.',
    'article3-p2': 'Ce guide a été conçu pour accompagner les PME qui souhaitent commencer simplement, étape par étape, sans jargon technique et sans investissement démesuré. L’objectif est clair : vous montrer comment structurer vos données, comprendre votre réalité opérationnelle, et transformer progressivement ces informations en décisions concrètes et éclairées. Que vous soyez dirigeant, gestionnaire ou employé curieux, vous trouverez ici un chemin accessible pour passer de la confusion… à la clarté. Au fil de ces sept étapes, vous découvrirez comment centraliser vos données, identifier vos besoins, nettoyer l’essentiel, choisir les bons indicateurs et mettre en place des tableaux de bord utiles, jusqu’à instaurer une culture d’amélioration continue. Ce serait ici votre nouvelle façon de piloter votre entreprise, plus agile, plus précise et surtout plus performante.',

    'article3-h2-1': 'Étape 1 : Centraliser ses données dans un seul endroit (Progiciel de Gestion Intégré (PGI) ou équivalent)',
    'article3-s1-p1': 'Pour la majorité des PME, les données existent déjà… mais elles sont souvent dispersées dans différents logiciels, fichiers Excel ou même dans des courriels. Cette dispersion crée un problème simple : chacun travaille avec sa propre version de la vérité. Avant même de penser à l’analyse ou aux tableaux de bord, une entreprise doit d’abord centraliser ses informations dans un seul endroit. C’est ce qu’on appelle un progiciel de gestion intégrés (PGI ou ERP en anglais) ou un système équivalent. L’objectif n’est pas d’avoir un outil complexe, mais un espace unique où les ventes, les stocks, la comptabilité et parfois même les ressources humaines peuvent cohabiter proprement.',
    'article3-s1-p2': 'Centraliser ses données ne signifie pas toujours investir immédiatement dans une plateforme coûteuse. Pour certaines PME, un CRM bien structuré ou une combinaison simple d’outils existants peut suffire pour débuter. L’important est que les informations soient cohérentes, faciles d’accès et surtout mises à jour au même endroit. À cette étape, le rôle le plus crucial n’est pas la technologie, mais la personne responsable de maintenir la qualité des données : quelqu’un qui s’assure que les entrées sont complètes, que les fichiers ne se multiplient pas et que les chiffres reflètent réellement la réalité de l’entreprise.',
    'article3-s1-p3': 'Lorsque la centralisation est en place, tout change : les équipes parlent enfin le même langage, les erreurs diminuent et les décisions deviennent plus claires. C’est un peu comme passer d’un tiroir rempli de papiers éparpillés à un classeur bien rangé. C’est aussi cette base solide qui rend ensuite possible l’analyse automatique, la visualisation dans Power BI et la création d’indicateurs fiables. En résumé, centraliser ses données, c’est poser la première pierre d’une démarche data durable et accessible, même pour une petite entreprise qui débute.',
    'article3-h3-1': 'Toutefois, qui peut s’occuper de la centralisation des données dans une PME ?',
    'article3-s1-p4': 'Dans une PME, la centralisation des données peut être prise en charge par plusieurs profils, selon la taille et la maturité de l’entreprise. Pour les petites organisations, ce rôle est souvent assuré par une personne interne qui connaît bien les opérations, par exemple un coordonnateur administratif, un responsable des ventes, ou même le gestionnaire TI. L’important n’est pas d’être un expert en analyse, mais d’avoir une bonne compréhension des processus internes et une rigueur dans la gestion de l’information. Cette personne devient le “gardien” des données : elle vérifie que les informations sont bien saisies, complètes et toujours au bon endroit.',
    'article3-s1-p5': 'Cependant, dans certaines situations, faire appel à un spécialiste externe devient un véritable accélérateur. Les consultants en ERP, analystes de données ou intégrateurs technologiques peuvent aider à structurer, nettoyer et unifier les données plus rapidement que si l’entreprise le fait seule. Ils apportent un regard neutre, connaissent les outils adaptés au budget de la PME et évitent de nombreuses erreurs qui coûtent du temps par la suite. Ce soutien est particulièrement utile si l’entreprise souhaite implanter un système plus robuste comme un ERP ou un CRM. Cela dit, même si un expert externe peut mettre en place la structure et les connexions nécessaires, la centralisation devient ensuite une responsabilité interne. La PME doit désigner quelqu’un qui s’assurera du respect des règles d’entrée, de la mise à jour régulière et de la cohérence des données.',

    'article3-h2-2': 'Étape 2 : Faire un inventaire simple des données disponibles',
    'article3-s2-p1': 'Une fois que l’entreprise a centralisé ses outils, la deuxième étape consiste à faire l’inventaire des données déjà existantes. Cette étape est très accessible, même pour une PME qui débute, et pourtant elle est essentielle. Il s’agit simplement de comprendre ce que l’entreprise possède : quelles informations elle collecte, dans quels formats et à quelle fréquence. Cet inventaire ressemble un peu à ouvrir les tiroirs d’une maison : on découvre parfois des données très utiles qui dormaient dans des fichiers Excel oubliés, des rapports PDF, ou des logiciels sous-utilisés.',
    'article3-s2-p2': 'Cet exercice est important parce qu\'il permet de voir rapidement les forces et les faiblesses. Certaines données seront complètes et bien structurées (ex. comptabilité), alors que d’autres seront très partielles ou incohérentes (ex. liste clients, inventaire, dossiers RH). En les répertoriant, une PME comprend non seulement ce qu’elle a, mais aussi ce qui lui manque pour répondre à ses questions d’affaires. Par exemple : « Pouvons-nous réellement analyser nos ventes par type de client si on ne note jamais ce type dans le CRM ? » L’inventaire révèle ainsi les premiers “trous” à combler.',
    'article3-s2-p3': 'Enfin, cet inventaire aide énormément à planifier la suite : choisir les bons indicateurs, savoir quels fichiers nettoyer, et déterminer si certains processus doivent être améliorés. Cette étape guide toutes les prochaines décisions. Elle ne demande grande expertise technique : juste une personne curieuse, organisée et qui connaît bien les opérations. En une ou deux heures, une PME peut déjà obtenir une vue claire de son patrimoine informationnel. Et c’est cette clarté qui prépare un terrain solide pour une analyse fiable et des décisions basées sur des données réelles.',

    'article3-h2-3': 'Étape 3 : Nettoyer et organiser les données (l’étape la plus importante)',
    'article3-s3-p1': 'Une fois que l’entreprise sait quelles données elle possède, il faut passer à l’étape la plus sous‑estimée : le nettoyage. En effet, c’est ici que beaucoup de PME se rendent compte que leurs informations ne sont ni complètes ni cohérentes. Un même client écrit de trois façons différentes, des dates incorrectes, des produits sans code, des champs vides… Ce n’est pas un échec : c’est la réalité de presque toutes les organisations. Nettoyer, c’est comme ranger un entrepôt avant d’essayer d’y trouver quelque chose. Tant que les données sont en désordre, aucune analyse ne pourra être fiable, même avec les meilleurs outils.',
    'article3-s3-p2': 'De plus, une analyste de données serait bien placée pour faire le nettoyage et appliquer les bonnes méthodes. Cela consiste à uniformiser les noms, corriger les erreurs, compléter les informations manquantes, et parfois fusionner plusieurs fichiers pour n’en faire qu’un. Des outils simples comme Excel, Power Query (intégré dans Excel), ou Power BI permettent déjà de transformer des données « brutes » en données solides. À ce stade, la PME commence à voir ses informations sous un angle beaucoup plus clair : les fichiers deviennent structurés, les colonnes sont standardisées, et les doublons disparaissent.',
    'article3-s3-p3': 'Ce travail peut paraître invisible, mais c’est lui qui détermine le succès de tout le reste. Des données bien nettoyées permettent ensuite de créer des tableaux de bord précis, d’automatiser la mise à jour et d’obtenir des indicateurs fiables pour les décisions stratégiques. À l’inverse, sauter cette étape mène à des erreurs d’interprétation et à des décisions basées sur des données fausses. En résumé, le nettoyage est la colonne vertébrale d’un projet data : ce n’est pas l’étape la plus glamour, mais c’est celle qui transforme réellement un amas d’informations en un actif précieux pour l’entreprise.',

    'article3-h2-4': 'Étape 4 : Choisir les indicateurs qu’on veut suivre (KPI)',
    'article3-s4-p1': 'Après avoir nettoyé les données, il est temps de décider ce que l’on veut réellement mesurer. C’est une étape clé, car beaucoup de PME se sentent submergées : elles ont l’impression qu’il faut tout analyser, tout suivre, tout mesurer. En réalité, commencer petit est la meilleure stratégie. Un bon indicateur (KPI) n’est pas un chiffre compliqué ; c’est un nombre simple qui répond à une question importante : Que devons-nous savoir pour gérer l’entreprise plus efficacement ? En choisissant seulement quelques indicateurs essentiels, on évite de se perdre dans des informations inutiles.',
    'article3-s4-p2': 'Pour une PME, les KPI doivent être directement liés aux objectifs concrets de l’entreprise. Par exemple : Si le défi principal est d’augmenter les ventes, on suivra par exemple le chiffre d’affaires mensuel, la performance des produits ou le taux de clients récurrents. Si le défi se situe dans les opérations, les indicateurs seront plutôt le niveau de stock, les délais de livraison ou le taux de commandes en retard. Dans les RH, on suivra la rotation du personnel, l’absentéisme ou la répartition par ancienneté. L’important est que chaque KPI raconte quelque chose de pertinent pour « votre réalité » !',
    'article3-s4-p3': 'Lorsque les bons indicateurs sont choisis, ils deviennent un véritable tableau de bord mental pour l’équipe. Ils permettent de prendre des décisions plus rapides, de détecter les tendances plus tôt et de réagir avant que les problèmes ne deviennent coûteux. Surtout, ces indicateurs créent une culture commune : tout le monde parle des mêmes chiffres, comprend les mêmes signaux et se mobilise autour des mêmes priorités. Choisir les bons KPI, c’est comme choisir ses instruments dans un cockpit : vous n’avez pas besoin de tout surveiller, seulement ce qui vous permet de piloter l’entreprise avec confiance.',

    'article3-h2-5': 'Étape 5 : Construire ses premiers tableaux de bord',
    'article3-s5-p1': 'Une fois les indicateurs définis, il est temps de donner vie aux données en les transformant en tableaux de bord visuels. C’est souvent ici que les dirigeants commencent réellement à « voir » ce que les données racontent. Construire un tableau de bord: c’est créer un espace visuel où l’information la plus importante est présentée de manière claire, intuitive et facile à comprendre. Des outils comme Power BI, Looker Studio ou Tableau permettent aujourd’hui à n’importe quelle PME de créer des graphiques interactifs sans avoir besoin d’un expert en programmation mais une analyste d’affaires.',
    'article3-s5-p2': 'L’objectif d’un tableau de bord n’est pas d’impressionner, mais de simplifier la prise de décision. Un bon tableau de bord montre immédiatement si un indicateur va bien ou mal, si une tendance s’améliore ou se détériore, ou si un problème se répète. Par exemple, une courbe qui illustre le chiffre d’affaires mensuel permet de voir les saisons fortes et les périodes plus faibles. Une carte qui montre les ventes par région aide à identifier où concentrer les efforts. Un graphique sur la rotation du personnel donne un signal clair sur la stabilité des équipes. Plus les visuels sont simples, plus ils sont utiles.',
    'article3-s5-p3': 'En construisant ces premiers tableaux, quelque chose d’important se produit : l’entreprise change sa manière de réfléchir. Les décisions deviennent plus factuelles, les discussions plus concrètes, et les priorités s’alignent sur la réalité plutôt que sur des impressions. Les tableaux de bord deviennent alors un outil quotidien non pas pour produire de beaux graphiques, mais pour guider l’action. C’est souvent à cette étape que la PME réalise que la donnée n’est pas un luxe réservé aux grandes entreprises : c’est un levier accessible, puissant et transformateur pour toute organisation, même la plus petite.',

    'article3-h2-6': 'Étape 6: Interpréter les résultats',
    'article3-s6-p1': 'Construire des tableaux de bord est une grande avancée, mais la vraie valeur apparaît au moment où l’analyste d’affaires prend le temps d’interpréter les résultats. Trop souvent, les PME regardent leurs graphiques sans vraiment s’arrêter pour poser les bonnes questions. Interpréter, c’est comprendre pourquoi un chiffre monte ou descend, ce que cela signifie pour l’entreprise et comment réagir. Cette étape transforme les données en insights : des explications, des causes, des signaux faibles. C’est un moment d’analyse partagé, où chacun apporte son contexte terrain pour donner du sens aux chiffres.',
    'article3-s6-p2': 'Interpréter les tableaux de bord doit devenir une routine simple, accessible et surtout collaborative. Il peut s’agir d’une rencontre mensuelle où l’on passe en revue les indicateurs clés : les ventes, la productivité, les opérations, ou les ressources humaines selon les priorités de l’entreprise. Les questions les plus puissantes sont les plus simples : Qu’est-ce qui surprend ? Qu’est-ce qui s’améliore ? Qu’est-ce qui se détériore ? En croisant les données avec la réalité du terrain, l’équipe identifie les tendances à surveiller, les points urgents à corriger et les opportunités à saisir. L’objectif n’est pas d’avoir raison, mais de comprendre vite.',
    'article3-s6-p3': 'Cette étape est aussi celle où se prennent les décisions concrètes. Une fois le problème identifié, l’équipe décide d’une action : ajuster les horaires, revoir un processus, optimiser les stocks, reformuler un produit, ou renforcer le suivi client. Interpréter les données ne signifie pas faire de longues analyses : c’est décider rapidement de petits changements qui améliorent l’entreprise en continu. Et plus la PME répète cet exercice, plus elle développe une culture où les décisions reposent sur des faits, pas sur des intuitions.',

    'article3-h2-7': 'Étape 7: Automatiser et améliorer continuellement',
    'article3-s7-p1': 'Une fois que les tableaux de bord sont en place et que les décisions commencent à s’appuyer sur les données, la prochaine étape est de rendre ce processus fluide, automatique et durable. Au début, beaucoup de PME mettent à jour leurs données manuellement, exportent des fichiers Excel ou rafraîchissent leurs rapports à la main. C’est normal pour démarrer, mais ce n’est pas viable à long terme. Automatiser, c’est connecter vos systèmes (ERP, CRM, comptabilité, fichiers propres) à votre outil d’analyse de façon à ce que les tableaux de bord se mettent à jour tout seuls sans intervention humaine. Cela fait gagner du temps, évite les erreurs et garantit que tout le monde travaille toujours avec les informations les plus récentes.',
    'article3-s7-p2': 'Automatiser ne signifie pas installer une grande solution technologique du premier coup. Il s’agit plutôt d’un ensemble de petites améliorations progressives. Cela peut commencer par des connexions simples entre votre ERP et Power BI, ou par l’utilisation de Power Query pour rafraîchir automatiquement des fichiers récurrents. Plus les données circulent de manière fluide, moins l’équipe perd du temps à manipuler des fichiers, et plus elle peut se concentrer sur l’analyse et la prise de décision. Cette automatisation aide aussi à repérer plus rapidement les anomalies, un KPI qui chute, un stock qui augmente soudainement, un taux d’absentéisme qui dérape car les mises à jour sont en temps réel.',
    'article3-s7-p3': 'Enfin, adopter une logique d’amélioration continue, c’est comprendre que la donnée n’est pas un projet ponctuel, mais un cycle de progression. Chaque mois, l’entreprise peut revenir sur ses processus, améliorer la qualité des données, ajouter de nouveaux indicateurs ou simplifier ceux qui ne sont plus utiles. Au fil des mois, la culture interne évolue : les employés développent une meilleure discipline dans l’entrée de données, les gestionnaires prennent des décisions plus rapidement, et l’entreprise gagne en maturité. Ce n’est pas la taille de la PME qui détermine sa transformation, mais sa constance. Avec des automatismes simples et un rythme régulier d’amélioration, la donnée devient un véritable moteur de croissance stable, fiable et accessible à tous.',

    'article3-h2-8': 'Conclusion',
    'article3-c-p1': 'Commencer à utiliser ses données n’est pas une transformation technologique : c’est une transformation progressive, humaine et accessible. En suivant ces étapes simples : centraliser, inventorier, nettoyer, choisir, visualiser, interpréter et automatiser, une PME peut passer d’un environnement dispersé à une gestion claire, structurée et guidée par des faits. Chaque étape renforce la suivante, et chacune crée une nouvelle habitude qui rend l’entreprise plus mature et plus performante.',
    'article3-c-p2': 'Ce parcours ne demande pas de devenir expert, ni d’investir dans des outils complexes. Il demande surtout de la constance, de la curiosité et une volonté d’améliorer les pratiques existantes. Avec le temps, la donnée devient plus qu’un actif : elle devient un avantage compétitif. Elle permet de voir les tendances avant les autres, de détecter les problèmes plus rapidement et de prendre des décisions avec confiance.',
    'article3-c-p3': 'En fin de compte, la vraie question n’est plus : “Que faire avec nos données ?” Mais plutôt : “Que pourrions‑nous accomplir si nous les utilisions pleinement ?” Et la bonne nouvelle, c’est que tout commence par un premier pas simple, concret et à votre portée. À long terme, selon vos besoins, l’entreprise pourra même aller plus loin en développant des prévisions ou en gérant des données plus complexes, un travail qui peut être pris en charge par une scientifique des données.',

    // ============================================================
    // Préloader & Navigation courte (toutes les pages)
    // ============================================================
    'preloader-subtitle': 'ÉCONOMISTE & ANALYSTE DES AFFAIRES',
    'nav-home': 'Accueil',
    'nav-publications-short': 'Publications',
    'nav-mandats': 'Mandats',
    'nav-services': 'Services',
    'nav-apropos-short': 'À propos',
    'nav-contact-short': 'Contact',
    'btn-back-mandats': '← Retour aux mandats',

    // ============================================================
    // professional.html — page principale
    // ============================================================
    'pro-hero-title': 'Vous avez des données, mais sont-elles exploitables ?',
    'pro-hero-subtitle': 'Je suis Djeny et j’accompagne les startups et PME dans la structuration de leurs indicateurs clés et la création de tableaux de bord stratégiques, afin de transformer leurs données en décisions éclairées et mesurables.',
    'pro-hero-credential': 'M.Sc. Intelligence d’affaires · Économie · Montréal',
    'pro-hero-cta1': 'Planifier un échange stratégique',

    'pro-section-publications': 'Publications',
    'pro-section-publications-intro': 'Articles, analyses et recherches sur la performance, les KPI et la prise de décision.',
    'pro-pub-counter-articles': '5 articles',
    'pro-pub-counter-podcasts': '1 podcast',
    'pro-pub-counter-recherches': '3 recherches',

    'pro-section-approche-title': 'Ce que je propose',
    'pro-section-approche-lead': 'J’interviens à titre indépendant pour transformer vos données en leviers de décision.',
    'pro-service-1-title': 'Indicateurs stratégiques',
    'pro-service-1-text': 'Clarifier vos indicateurs stratégiques pour une lecture immédiate de la performance.',
    'pro-service-2-title': 'Structuration de KPI',
    'pro-service-2-text': 'Structurer vos KPI en fonction de vos objectifs réels et de vos priorités d’affaires.',
    'pro-service-3-title': 'Tableaux de bord',
    'pro-service-3-text': 'Concevoir des tableaux de bord exécutifs clairs et actionnables.',
    'pro-service-4-title': 'Interprétation',
    'pro-service-4-text': 'Simplifier l’interprétation de vos données pour faciliter la prise de décision.',
    'pro-service-5-title': 'Diagnostic',
    'pro-service-5-text': 'Identifier les décisions clés, les angles morts et les indicateurs réellement utiles.',
    'pro-audience-title': 'J’accompagne principalement',
    'pro-audience-1-label': 'Startups',
    'pro-audience-1-desc': 'En phase de structuration',
    'pro-audience-2-label': 'PME',
    'pro-audience-2-desc': 'En croissance',
    'pro-audience-3-label': 'Dirigeants',
    'pro-audience-3-desc': 'Vision consolidée de la performance',
    'pro-audience-4-label': 'Équipes',
    'pro-audience-4-desc': 'Cadre analytique clair',

    'pro-section-positionnement-title': 'À propos',
    'pro-about-p1': 'Prendre des décisions sans une lecture claire des données, c’est avancer sans visibilité. Aujourd’hui, en tant que conseillère en solutions technologiques chez Makila AI, j’accompagne les entreprises dans des contextes variés (RH, finance, marketing) en intervenant à chaque étape : de l’identification des besoins à la structuration des données, jusqu’à leur valorisation à travers des tableaux de bord, des analyses avancées et des modèles prédictifs. Mon approche vise toujours le même objectif : transformer les données en décisions utiles, concrètes et alignées avec les enjeux d’affaires.',
    'pro-about-p2': 'Par ailleurs, mon parcours entre l’Université de Montréal et HEC Montréal m’a permis de développer une double expertise en économie et en intelligence d’affaires, que j’applique aujourd’hui dans des environnements réels et exigeants. Cette expérience, enrichie notamment par un mandat à l’international en Thaïlande, m’a permis de développer une vision à la fois analytique, adaptable et orientée résultats.',
    'pro-about-p3': 'Aujourd’hui, je mets aussi cette expertise au service d’organisations, en particulier celles en croissance qui souhaitent structurer leurs données, améliorer leurs processus et prendre des décisions plus éclairées. Avec rigueur, curiosité et engagement, je poursuis un objectif simple : créer un impact réel à travers une utilisation intelligente des données.',
    'pro-about-img-alt': 'Portrait professionnel de Djeny Mainvil',

    'pro-section-mandats-title': 'Comment j’interviens concrètement.',
    'pro-section-mandats-text': 'Trois types de mandats clés, adaptés à la réalité opérationnelle des dirigeants et des équipes analytiques.',
    'pro-mandats-aside-title': 'Focus',
    'pro-mandats-aside-text': 'Chaque mandat cible un besoin précis&nbsp;: clarifier, structurer ou gouverner l’information décisionnelle.',
    'pro-feature-1-eyebrow': 'Pilotage stratégique',
    'pro-feature-1-title': 'Rapport d’analyse de performance — tableau de bord des ventes.',
    'pro-feature-1-text': 'Indicateurs clés (Book-to-Bill, top produits, cartographie clients) pour orienter la stratégie commerciale de Sycodal.',
    'pro-feature-2-eyebrow': 'Gouvernance analytique',
    'pro-feature-2-title': 'Analyse RH exploratoire à partir d’un système hérité.',
    'pro-feature-2-text': 'Nettoyage, modélisation et indicateurs fiables (effectif, salaire moyen, ancienneté) dans le respect strict de la confidentialité.',
    'pro-feature-3-eyebrow': 'Consultation internationale',
    'pro-feature-3-title': 'Repenser l’impact — Projet SOS Kitchen Thaïlande.',
    'pro-feature-3-text': 'Diagnostic opérationnel, engagement bénévole et modèles de financement durables au service d’une mission à fort impact social.',

    'pro-cta-title': 'Clarifions votre performance.',
    'pro-cta-text': 'Un échange stratégique permet d’identifier rapidement les leviers d’amélioration et les zones de manque de visibilité.',
    'pro-cta-button': 'Réserver une conversation confidentielle',
    'pro-cta-aside-title': 'Format',
    'pro-cta-aside-text': 'Conversation confidentielle, cadrée, orientée décisions.',

    // ============================================================
    // mandat1.html — Tableau de bord des ventes
    // ============================================================
    'mandat1-title': 'Rapport d’analyse de performance — Tableau de bord des ventes',
    'mandat1-eyebrow': 'Mandat · Pilotage stratégique',
    'mandat1-meta1': 'Projet : Sycodal',
    'mandat1-meta2': 'Power BI · Analyse commerciale',
    'mandat1-img-alt': 'Tableau de bord des ventes — performance et analyse client',
    'mandat1-intro': 'Dans le cadre de ce projet de tableau de bord des ventes, j’ai développé une analyse approfondie de la performance produit et de l’acquisition client, avec un accent particulier sur la prise de décision stratégique. Les données ont été spécifiquement générées et adaptées pour répondre aux exigences du prototype demandé.',
    'mandat1-h2-1': 'Adaptation et représentation des données',
    'mandat1-p1': 'Pour garantir la pertinence des données, j’ai intégré dans la base des indicateurs clés tels que les quantités facturées et réservées, ce qui permet le calcul du <strong>Book-to-Bill Rate</strong>. Cette métrique est essentielle pour évaluer l’efficacité commerciale : un taux supérieur à 1 indique une forte demande pour les produits et met en évidence des opportunités d’optimiser les capacités de production et de livraison.',
    'mandat1-p2': 'J’ai également généré une date d’adhésion pour chaque client afin de faciliter le calcul des <strong>nouveaux clients par mois</strong>, enrichissant ainsi l’analyse de l’acquisition. Ces adaptations permettent au tableau de bord d’offrir une vision instantanée de la santé financière de l’entreprise.',
    'mandat1-h2-2': 'Insights et prise de décision',
    'mandat1-p3': 'Les visualisations proposées facilitent une analyse rapide et efficace de la performance produit. Par exemple, en identifiant les <strong>5 produits les plus contributeurs au chiffre d’affaires</strong>, Sycodal peut orienter ses efforts marketing et ses stratégies d’inventaire vers les articles les plus rentables.',
    'mandat1-p4': 'De plus, la comparaison des revenus mensuels avec les objectifs de vente permet d’identifier rapidement les écarts et d’ajuster en temps opportun les stratégies d’affaires. Cela favorise une réponse proactive aux fluctuations du marché.',
    'mandat1-h2-3': 'Analyse géographique',
    'mandat1-p5': 'La carte géographique aide à repérer les zones à forte concentration de clients, ce qui est essentiel pour optimiser les visites commerciales et la distribution. En ciblant les régions à forte demande, Sycodal peut maximiser ses efforts de vente et améliorer le service client en répondant rapidement aux besoins locaux.',
    'mandat1-h2-4': 'Analyse de la satisfaction client',
    'mandat1-p6': 'Bien que le tableau de bord apporte déjà des insights de valeur, l’ajout d’une analyse de la satisfaction client permettrait d’enrichir davantage la compréhension des préférences et des axes d’amélioration. Cela renforcerait la fidélisation à long terme, un aspect crucial pour maximiser les profits dans un environnement concurrentiel.',
    'mandat1-highlight': 'Ce tableau de bord n’est pas un simple outil de suivi : c’est un <strong>instrument stratégique</strong> qui permet à Sycodal de prendre des décisions éclairées, d’adapter ses opérations et de maximiser son efficacité dans un marché dynamique.',
    'mandat1-h2-5': 'Conclusion',
    'mandat1-p7': 'Grâce à une analyse continue des données, l’entreprise peut anticiper les tendances et s’assurer que ses efforts s’alignent avec ses objectifs de croissance et de satisfaction client. Les données ont été soigneusement adaptées aux spécificités du prototype demandé, garantissant des insights pertinents et actionnables pour la stratégie commerciale de Sycodal.',

    // ============================================================
    // mandat2.html — Analyse RH exploratoire
    // ============================================================
    'mandat2-title': 'Analyse RH exploratoire à partir d’un système hérité',
    'mandat2-eyebrow': 'Mandat · Gouvernance analytique',
    'mandat2-meta1': 'Données RH · Power BI',
    'mandat2-meta2': 'Nettoyage, modélisation, indicateurs fiables',
    'mandat2-img1-alt': 'Analyse RH exploratoire — aperçu du tableau de bord',
    'mandat2-img2-alt': 'Modèle de données RH — relations entre tables',
    'mandat2-h2-1': 'Contexte',
    'mandat2-p1': 'Ce travail s’inscrit dans une analyse exploratoire visant à démontrer la valeur qu’une solution de Business Intelligence peut apporter à partir de données RH extraites d’un système hérité. Les données fournies représentent un échantillon de l’effectif de l’entreprise et incluent des informations relatives aux employés, aux départements et aux unités d’affaires.',
    'mandat2-p2': 'L’objectif est d’analyser la structure et la qualité réelles des données, d’identifier ce qui est analytiquement fiable, et de produire des indicateurs concrets et actionnables, tout en respectant strictement les contraintes de confidentialité.',
    'mandat2-h2-2': 'Importation et nettoyage des données',
    'mandat2-p3': 'La première étape a consisté à nettoyer et préparer les données afin d’assurer leur cohérence et leur fiabilité pour l’analyse. Les types de données ont été standardisés, en particulier pour les identifiants, les dates et les montants financiers, et des contrôles ont été effectués pour identifier les lignes vides et les doublons exacts.',
    'mandat2-p4': 'Les intitulés de poste ont été nettoyés et les incohérences typographiques corrigées (par exemple, en remplaçant « Sr. Manger » par « Sr. Manager »). Les noms de colonnes techniques ont été renommés pour améliorer la lisibilité du modèle, et les informations sensibles telles que les noms complets des employés ont été supprimées conformément aux bonnes pratiques de confidentialité des données.',
    'mandat2-p5': 'Lors de l’analyse exploratoire, une attention particulière a été portée à la compréhension de la granularité des données. Il a été observé que différents employés peuvent partager le même <strong>EEID</strong>, ce qui signifie que cet identifiant ne représente pas un employé unique, mais plutôt un identifiant de niveau enregistrement.',
    'mandat2-p6': 'Pour déterminer avec précision le nombre d’employés, une validation croisée des noms, de l’âge, du genre et des dates d’embauche a été réalisée. Cette analyse a révélé des cas où des employés portant des noms identiques présentaient des caractéristiques démographiques et temporelles incompatibles avec l’hypothèse qu’il s’agissait du même individu. Par exemple, des employés partageant le même nom pouvaient avoir des âges sensiblement différents et des années d’embauche très éloignées, ce qui exclut des scénarios tels que des réembauches ou des changements de poste internes.',
    'mandat2-highlight': 'Sur la base de ces observations, il a été conclu que, dans le périmètre de cet ensemble de données, <strong>chaque ligne représente un employé distinct</strong>. Cette conclusion s’appuie sur des observations factuelles et constitue une hypothèse de travail explicite pour la suite de l’analyse.',
    'mandat2-h2-3': 'Modélisation des données',
    'mandat2-p7': 'Sur la base de cette compréhension, plusieurs colonnes calculées ont été créées pour enrichir l’ensemble de données sans introduire d’hypothèses risquées. Une colonne <strong>Statut</strong> a été ajoutée pour identifier si un employé est actif ou inactif, selon la présence d’une date de sortie. Une colonne <strong>Ancienneté (années)</strong> a également été calculée pour mesurer la durée d’emploi, permettant l’analyse de l’expérience globale de l’effectif.',
    'mandat2-p8': 'De plus, une <strong>table de dates</strong> dédiée a été créée pour soutenir l’analyse temporelle. Les relations ont ensuite été établies de manière simple et cohérente, reliant la table principale des employés aux tables des départements, des unités d’affaires et des dates par leurs identifiants respectifs.',
    'mandat2-p9': 'Ce modèle relationnel permet une navigation fluide entre les analyses et garantit que les indicateurs calculés peuvent être analysés de manière cohérente par département, unité d’affaires, pays ou toute autre dimension organisationnelle pertinente.',
    'mandat2-p10': 'Du point de vue des calculs, seuls les indicateurs jugés fiables compte tenu des données disponibles ont été retenus. L’<strong>effectif total</strong> est calculé comme le nombre de lignes dans l’ensemble de données, conformément à l’hypothèse validée selon laquelle chaque ligne correspond à un employé distinct dans cet échantillon.',
    'mandat2-p11': 'Des indicateurs agrégés tels que le <strong>salaire moyen</strong>, le <strong>pourcentage moyen de bonus</strong> et l’<strong>ancienneté moyenne</strong> ont été calculés pour offrir une vue concise et significative de la structure de rémunération et de l’expérience de l’effectif.',

    // ============================================================
    // mandat3.html — SOS Kitchen Thaïlande
    // ============================================================
    'mandat3-title': 'Repenser l’impact : Projet SOS Kitchen Thaïlande',
    'mandat3-eyebrow': 'Mandat · Consultation internationale',
    'mandat3-meta1': 'Bangkok, Thaïlande',
    'mandat3-meta2': 'Juillet 2025',
    'mandat3-meta3': 'Équipe multidisciplinaire',
    'mandat3-img1-alt': 'Projet SOS Kitchen Thaïlande — consultation internationale',
    'mandat3-img2-alt': 'Travail terrain — SOS Kitchen Thaïlande',
    'mandat3-intro': 'Dans le cadre d’un mandat de consultation internationale, j’ai eu l’opportunité de faire partie d’une équipe multidisciplinaire visant à renforcer l’impact et l’efficacité opérationnelle de <strong>SOS Kitchen Thailand</strong>, une organisation engagée dans la récupération de surplus alimentaires et leur redistribution auprès des communautés dans le besoin.',
    'mandat3-h2-1': 'Diagnostic opérationnel',
    'mandat3-p1': 'En collaboration, nous avons réalisé une analyse approfondie des opérations, depuis l’approvisionnement jusqu’à la livraison finale, afin d’identifier les principales inefficacités et les leviers d’amélioration. Notre réflexion s’est articulée autour de trois axes stratégiques : le renforcement de la capacité opérationnelle, l’optimisation de l’engagement des bénévoles et le développement de modèles de financement plus durables.',
    'mandat3-h2-2': 'Solutions proposées',
    'mandat3-p2': 'En tant qu’équipe, nous avons proposé des solutions innovantes, notamment un <strong>modèle de partenariat corporatif en responsabilité sociale (CSR)</strong> pour répondre aux enjeux de main-d’œuvre, une <strong>plateforme digitale</strong> visant à mobiliser des bénévoles flexibles («&nbsp;Rescue Runners&nbsp;»), ainsi qu’un <strong>concept de financement</strong> transformant les achats du quotidien en impact social («&nbsp;Your snack, their meal&nbsp;»).',
    'mandat3-h2-3': 'Apprentissages',
    'mandat3-p3': 'Cette expérience m’a permis de contribuer à une initiative à fort impact social, tout en appliquant une approche stratégique et axée sur les données dans un contexte réel. Elle a renforcé mon engagement à utiliser la donnée, la collaboration et l’innovation pour bâtir des systèmes plus efficaces, inclusives et durables.',
    'mandat3-credits-title': 'Projet réalisé en juillet 2025 sur le terrain en collaboration avec :',
    'mandat3-souvenirs-title': 'Souvenirs du terrain',
    'mandat3-souvenirs-text': 'Quelques moments capturés lors du mandat à Bangkok : cuisine, logistique de redistribution et échanges avec les équipes locales.'
  },
  en: {
    // Navigation
    'nav-accueil': 'Home',
    'nav-apropos': 'About',
    'nav-expertise': 'Expertise',
    'nav-publications': 'Publications & Insights',
    'nav-articles': 'Articles & Analysis',
    'nav-podcast': 'Podcast',
    'nav-recherches': 'Academic Research',
    'nav-contact': 'Contact',
    
    // Boutons communs
    'btn-back': '← Back to home',
    'btn-back-articles': '← Back to articles',
    'btn-back-main': '← Back to main page',
    
    // Home page (index2.html) - Hero section
    'hero-subtitle1': 'Technology Solutions Advisor',
    'hero-subtitle2': 'Data solutions for performance and growth',
    'hero-badge-makila': 'Makila AI',
    'hero-badge2': 'BI • Analytics • Strategy',
    'hero-badge3': 'French • English (bilingual)',
    'viz-title': 'Real-Time Analytics Dashboard',
    'hero-main': 'Making sense of data for better decisions',
    'hero-cta1': 'Explore publications',
    'hero-cta2': 'Contact Me',
    
    // About section
    'section-apropos': 'About',
    'apropos-p1': 'Technology solutions advisor specialized in data and business intelligence, I support organizations in transforming their data into strategic decisions. My background combines a <strong>double master\'s degree in economics (University of Montreal) and business intelligence (HEC Montreal)</strong>, as well as more than <strong>five years of experience</strong> in analytical and decision-making roles.',
    'apropos-p2': 'Throughout my professional experiences and exchanges with leaders, recruiters and professionals, I have developed a strong interest in how organizations analyze information, structure their thinking and make decisions in complex and uncertain economic contexts. I have found that the difficulties encountered are not only due to a lack of tools or data, but very often to a <strong>lack of clarity on the issues, decision-making priorities and the actual use of information</strong>.',
    'apropos-p3': 'Through my work, my publications and this website, I propose an analytical, structured and accessible approach, oriented towards impact. My goal is to help organizations better understand their situation, ask the right questions and move forward coherently, by aligning data, strategy and real needs.',
    
    // Expertise section
    'section-expertise': 'Expertise',
    'expertise-1': 'Data-driven decision support',
    'expertise-2': 'Business Intelligence and decision-making dashboards (Power BI, KPIs)',
    'expertise-3': 'Data analysis for strategic and operational issues',
    'expertise-4': 'Consulting in technological and analytical solutions',
    
    // Why this site section
    'section-pourquoi': 'Why this website',
    'pourquoi-p1': 'Organizations today operate in increasingly complex economic and informational environments. Data is available, tools are numerous, but decisions often remain difficult to structure and make on a daily basis.',
    'pourquoi-p2': 'This website was created to provide a clear and accessible space for reflection, at the intersection of economics and business intelligence. I share analyses and observations aimed at better understanding organizational issues, clarifying decision-making priorities and making sense of existing information.',
    'pourquoi-p3': 'These reflections are addressed equally to leaders and entrepreneurs as to organizations looking for profiles capable of analyzing complex situations, structuring reflection and contributing to informed decisions.',
    
    // What you will find here section
    'section-trouverez': 'What you will find here',
    'trouverez-1': 'A structured analysis of economic and organizational issues',
    'trouverez-2': 'A clear reading of the role of data, tools and analytical functions',
    'trouverez-3': 'A human and pragmatic approach, adapted to the realities of SMEs and growing environments',
    
    // Publications & Insights section
    'section-publications': 'Publications & Insights',
    'publications-intro': 'Find here my analyses, reflections and contributions in the fields of economics, business intelligence and data analysis.',
    'articles-title': 'Articles & Analysis',
    'articles-desc': 'The articles published here address issues related to economics, business intelligence, data and decision-making. They are intended for organizations and professionals who wish to go beyond purely technical approaches to adopt more structured, more coherent thinking that is better adapted to their context.',
    'article3-title': 'Not sure what to do with your data? Here\'s a simple guide showing exactly where to start.',
    'article3-desc': 'A simple 7-step guide to help SMEs centralize, clean, analyze, and use data to make better decisions.',

    'article4-title': 'Women in Data and Artificial Intelligence (AI): More than representation, a perspective that shapes the future',
    'article4-desc': 'A reflection on women\'s lived experience in Data and AI, and how diverse perspectives strengthen decisions, systems, and impact.',

    'article5-title': 'Artificial Intelligence (AI) in business: understanding AI families to decide with rigor and governance',
    'article5-desc': 'A clear framework to distinguish key AI families in organizations (predictive, prescriptive, generative, agentic, emotion, explainable) and choose with rigor and governance.',

    // Page article4.html
    'article4-date': 'February 4, 2026',
    'article4-reading-time': '⏱️ 8 min read',
    'article4-author': 'Djeny Mainvil MSc.',
    'article4-img-alt': 'Women in Data and Artificial Intelligence (AI)',
    'article4-bio-name': 'Djeny Mainvil MSc.',
    'article4-bio-title': 'BI Analyst & Economist | Double Master\'s degree in Business Intelligence and Economic Sciences | Power BI • SAS/R • Data Modeling • Dashboarding | Passionate about data, performance, and decision-making.',
    'article4-highlight1': 'According to a report published in 2024 and highlighted by Forbes, only <strong>29% of the AI workforce are women</strong>, compared to 71% men.',
    'article4-intro-p1': 'Working in Data and AI today means being part of a field that is not only expanding rapidly but also undergoing profound transformation. In this context, “Data and AI” goes beyond technical roles and includes everyone who helps transform data into understanding, insight, and informed decisions. Technologies are advancing, opportunities are multiplying, and data-driven decisions are playing an increasingly central role in organizational strategy. Yet, despite this growth, the numbers remind us that balance has not yet been reached. This statistic does not question competence; rather, it reflects a professional landscape that is still evolving in fields of high strategic value.',
    'article4-intro-p2': 'Being a woman in this context, however, cannot be reduced to a percentage. It is a lived professional experience, often shaped by subtle dynamics: how one takes the floor in highly technical meetings, how an interpretation is received, or the extra clarity sometimes required for a contribution to be fully acknowledged. At the same time, an important shift is underway. More and more women in Data and AI are not merely present, they are actively shaping how Data is used, interpreted, and translated into decisions that matter. Their presence enriches the field by connecting technology with context and human impact. The question then becomes: how can we continue building a data and AI ecosystem where skills, perspectives, and contributions from everyone find their full place?',
    'article4-h2-1': 'The Reality on the ground',
    'article4-s1-p1': 'Working in Data and AI means operating in environments where intellectual rigor is high and credibility is continuously built. It is a domain in constant evolution, where analyses must be robust, reasoning clear, and resulting decisions capable of influencing major strategic directions. In this setting, technical expertise is essential, but how professionals position themselves in discussions is just as critical. For many women, this can involve heightened awareness of how ideas are framed, how interpretations are defended, or how to intervene in highly technical conversations. These are not always explicit barriers, but rather a series of micro-situations that require confidence, preparation, and the ability to make one’s voice heard in contexts where speed and visible assurance are often valued.',
    'article4-s1-p2': 'Over time, these experiences shape professionals who develop a strong awareness of the broader context in which Data exists. They strengthen the ability to connect analysis with organizational priorities and human impact which is an essential skill in a field where numbers never speak on their own. This reality reinforces key competencies such as active listening, analytical thinking, clarity in communication, and the ability to translate technical complexity into understandable decisions. Beyond the challenges, this experience builds a professional posture capable of offering a more comprehensive and responsible perspective on how Data and AI are used.',
    'article4-h2-2': 'A contribution that transforms the field',
    'article4-s2-p1': 'Beyond representation, the growing presence of women in Data and AI contributes to evolving how problems are approached. In environments where technical performance has long been the primary focus, there is increasing attention given to context, real-world use of solutions, and the consequences of data-driven decisions. This perspective does not replace analytical rigor; it complements it. It encourages broader discussions about the relevance of selected indicators, the quality of the Data being used, and how results are interpreted by decision-makers.',
    'article4-s2-p2': 'Moreover, diversity of perspectives plays a key role in designing more responsible AI systems and Data solutions. When varied backgrounds, experiences, and sensitivities are present at the table, potential biases are more likely to be identified, questioned, and corrected. This leads to fairer models, more inclusive products, and better decisions grounded in users’ realities. Therefore, the contribution of women in these fields goes beyond equity; it directly enhances the quality, relevance, and impact of data-driven solutions.',
    'article4-h2-3': 'An evolution already underway',
    'article4-toc': 'Article contents',
    'article4-s3-p1': 'The field of Data and AI continues to evolve at remarkable speed, and so do the profiles shaping it. New generations of women entering these sectors bring different levels of confidence, greater visibility of role models, and a broader understanding of the role Data can play in organizations. At the same time, companies are increasingly recognizing that technical performance alone is not enough. Organizations are seeking professionals who can connect analysis, strategy, communication, and impact skills that are becoming central as Data influences more complex decisions.',
    'article4-s3-p2': 'This evolution creates meaningful opportunities. As AI adoption expands, there is growing demand for professionals who combine analytical rigor with an understanding of human and organizational realities. It opens a space where different ways of thinking, collaborating, and solving problems can coexist and reinforce one another. The future of the field therefore depends not only on technology itself, but on the diversity of perspectives that help design, analyze, and apply it.',
    'article4-h2-4': 'Conclusion',
    'article4-c-p1': 'Being a woman in Data and AI today means working in a demanding field while also contributing to a broader transformation. Beyond statistics and observations, this is part of a movement reshaping how Data is understood, used, and integrated into decisions. Technology advances through tools, but even more through the people and perspectives that shape it. This article is an invitation to reflect on that evolution and to give space to a professional experience that is still not discussed enough, despite its growing impact.',
    'article4-c-p2': 'In a sector where women remain underrepresented, it is essential to recognize that the intelligence, skills, and experience are already there. Challenges should not limit presence, they should strengthen the legitimacy of occupying these spaces. Data and artificial intelligence are shaping the future of organizations and society. The more women take their place in analyses, decisions, and strategic roles, the richer, more balanced, and more relevant that future becomes.',

    // Page article5.html
    'article5-date': 'February 16, 2026',
    'article5-reading-time': '⏱️ 13 min read',
    'article5-author': 'Djeny Mainvil MSc.',
    'article5-img-alt': 'Artificial intelligence in business',
    'article5-bio-name': 'Djeny Mainvil MSc.',
    'article5-bio-title': 'BI Analyst & Economist | Two Master\'s degrees in Business Intelligence and Economic Sciences | Power BI • SAS/R • Data Modeling • Dashboarding | Passionate about data, performance, and decision-making.',
    'article5-highlight1': 'According to the OECD, an AI system is a system capable of inferring, from data, predictions, recommendations, or decisions that influence a real or virtual environment.',
    'article5-intro-p1': 'Today, the term “Artificial Intelligence” has become a catch-all. For many people, AI is reduced to ChatGPT, chatbots, text generation, or logistics optimization. These examples provide a broad view of the topic but often remain fragmented. However, investing without clearly distinguishing the different types of AI, their true objectives, and their strategic implications can lead to inefficient, and sometimes risky, choices.',
    'article5-intro-p2': 'AI is therefore not a machine that “thinks”; it is a system that learns to produce results from data. In other words, it is a technology designed to perform tasks that would normally require a form of human intelligence, relying on advanced mathematical and probabilistic models.',
    'article5-intro-p3': 'It is also important to understand that AI is not divided according to a single logic. Experts generally classify it through three complementary lenses: level of intelligence (ANI, AGI, ASI), technological family (symbolic, probabilistic, machine learning, deep learning), and business use (predictive, prescriptive, generative, agentic, etc.). These perspectives help distinguish what relates to theoretical capability, technical architecture, and concrete business application.',
    'article5-intro-p4': 'To keep a strategic and usable view for organizations, this article focuses on the major technological families and the most relevant business uses: predictive, prescriptive, generative, agentic, emotion, and explainable AI. The goal is to connect technology to decision-making rather than stay within a purely academic classification.',
    'article5-h2-1': 'Predictive AI (Machine Learning): anticipate to decide better',
    'article5-pred-p1': 'Predictive AI relies on machine learning. It analyzes historical data to identify recurring patterns, then estimates future probabilities based on observed trends. Today, it is the most widespread form of AI in business. Concretely, it supports strategic decision-making by reducing uncertainty.',
    'article5-pred-li1': 'Which customer is at high risk of disengagement or churn?',
    'article5-pred-li2': 'What demand should we anticipate for next quarter?',
    'article5-pred-li3': 'Which prospect has the highest probability of conversion?',
    'article5-pred-p2': 'Companies like Netflix use machine learning to recommend personalized content based on usage behavior. In CRM, platforms like Salesforce integrate predictive scoring to help sales teams prioritize the most promising opportunities. However, this type of AI does not replace decision-makers: it improves decision quality by providing a structured probabilistic estimate.',
    'article5-highlight2': 'As Layla Nasr, CEO of Makila AI, noted at the TECH RH Innovation Summit (2026): “There is no magic AI, you always need humans to validate that results make sense.”',
    'article5-pred-p3': 'For SMEs, predictive AI is often the most strategic entry point: gains are measurable (revenue improvement, churn reduction, better resource allocation) and ROI is typically faster. But when decisions become systemic, involve multiple trade-offs, and require constrained optimization, prescriptive AI becomes relevant.',
    'article5-h2-2': 'Prescriptive AI: optimize complex decisions',
    'article5-pres-p1': 'If predictive AI answers “what is likely to happen”, prescriptive AI answers “what should we do?”. It combines predictive models, operational constraints, and mathematical optimization algorithms to propose the best possible action.',
    'article5-pres-p2': 'It is especially powerful in ERP environments: inventory management, production planning, logistics, dynamic pricing. UPS has publicly shared route-optimization tools that reduce miles driven and fuel consumption. This type of AI creates value through systemic optimization, not just simple automation.',
    'article5-pres-li1': 'Structured and reliable data',
    'article5-pres-li2': 'Explicit modeling of constraints',
    'article5-pres-li3': 'Strong governance',
    'article5-pres-p3': 'For large organizations, prescriptive AI is a major strategic lever. For SMEs, it becomes relevant as operational complexity and transaction volume grow. Unlike predictive AI, which estimates a probability, prescriptive AI simulates multiple scenarios and recommends the option that maximizes a defined objective while respecting operational limits.',
    'article5-h2-3': 'Generative AI (GenAI): accelerate knowledge work',
    'article5-gen-p1': 'Generative AI mainly relies on advanced deep learning models, especially the Transformer architecture that dominates large language models (LLMs). It can produce text, images, code, summaries, reports, or analyses from a prompt. In business, its value is primarily organizational and operational.',
    'article5-gen-li1': 'Summarize meetings',
    'article5-gen-li2': 'Draft sales emails',
    'article5-gen-li3': 'Produce analytical reports',
    'article5-gen-li4': 'Automate support replies',
    'article5-gen-li5': 'Turn data into narrative explanations',
    'article5-gen-p2': 'However, reference frameworks such as NIST emphasize risk management: bias, confidentiality, data security, and traceability of automated decisions. Generative AI should be supervised by humans in professional settings to ensure business coherence and compliance.',
    'article5-gen-p3': 'In 2025, GenAI is seen as a major trend in the evolution of ERPs. According to Gartner analyses, most ERP vendors have already integrated AI and machine-learning capabilities. Gartner forecasts that by 2027, less than 30% of AI features in ERPs will be exclusively powered by GenAI, a share that could exceed 50% when combined with agentic architectures.',
    'article5-h2-4': 'Agentic AI: toward operational autonomy',
    'article5-agent-p1': 'Agentic AI is a major evolution. Unlike a simple chatbot, an AI agent can pursue a defined goal, plan a sequence of actions, analyze context, and execute coordinated decisions, sometimes without direct human intervention.',
    'article5-agent-p2': 'In a CRM environment, the AI agent can qualify leads, prioritize prospects, generate follow-ups tailored to profile and interaction history, produce real-time call summaries, and support the human representative in preparing personalized arguments. It becomes an operational copilot embedded in the business process.',
    'article5-h3-1': 'Pandora case and the AI agent “Gemma”',
    'article5-agent-case-p1': 'Pandora faced strong growth in online sales and a surge in international customer requests. The company deployed an AI agent named Gemma, integrated into its CRM environment (Commerce Cloud + Data Cloud). The agent could answer product questions, recommend items aligned with customer profiles, handle some service requests, and resolve interactions without human intervention.',
    'article5-agent-case-p2': 'Measured results:',
    'article5-agent-li1': '60% of requests resolved autonomously',
    'article5-agent-li2': '22% of sales processed via Commerce Cloud',
    'article5-agent-li3': 'Improved customer satisfaction score',
    'article5-agent-p3': 'An AI agent is not only a technology project; it is also an organizational one. When well governed, it becomes a lever for efficiency and scalability; when poorly governed, it can create decision errors, compliance risks, and a loss of trust.',
    'article5-h2-5': 'Emotion AI: understand human signals',
    'article5-emotion-p1': 'Emotion AI (also called affective computing) aims to identify and interpret emotional signals from behavioral and sometimes biometric data such as voice, text, or facial expressions. In CRM, it can help detect frustration during a call, analyze the tone of an email, or measure overall sentiment from reviews and post-purchase feedback.',
    'article5-emotion-p2': 'However, Emotion AI raises major ethical challenges: emotions are influenced by culture, context, and the individual. Misinterpretation can lead to inappropriate or discriminatory decisions. Voice and facial analysis directly impact privacy and require rigorous governance aligned with transparency and data-protection requirements.',
    'article5-h2-6': 'Explainable AI (XAI): make decisions understandable',
    'article5-xai-p1': 'In highly regulated sectors (finance, healthcare, insurance), producing a prediction is not enough. An automated decision must be justifiable, documented, and understandable. Explainable AI (XAI) aims to make the factors influencing a model visible, clarify variable importance, and help decision-makers understand the algorithmic reasoning.',
    'article5-xai-p2': 'Explainability strengthens compliance, user trust, and audit quality. For SMEs, it can also become a credibility lever with partners, investors, or institutions by demonstrating that AI use is controlled, responsible, and aligned with transparency expectations.',
    'article5-h2-7': 'SMEs vs large organizations: the real strategic difference',
    'article5-sme-p1': 'Choosing the right type of AI depends first on context and strategic priorities. For SMEs, the most relevant approach is often progressive and focused on quick, measurable wins. Predictive AI is frequently the best starting point (revenue, churn, anomalies, demand), while generative AI can quickly boost productivity (writing, summaries, support, first-pass analysis).',
    'article5-sme-p2': 'For more structured organizations with large data volumes and complex processes, prescriptive AI and autonomous agents become relevant provided data quality and governance are solid. In regulated or customer-experience-driven environments, Emotion AI and XAI make more sense because the challenge is as much about performance as it is about robustness and risk control.',
    'article5-h2-8': 'Conclusion',
    'article5-concl-p1': 'The most common mistake today is not failing to adopt AI, but adopting it without clearly understanding its type, objective, and risk level. AI is a strategic lever that changes how an organization decides, operates, and creates value. The question is therefore not “Should we adopt AI?”, but rather “Which AI, for which strategic objective, and with what level of governance?”.',
    
    // Podcast section
    'podcast-title': 'Podcast',
    'podcast-desc': 'Listen to my talks and discussions on topics related to analytics, data and digital strategies.',
    'podcast1-title': 'How companies capture attention on TikTok and Instagram Reels',
    'podcast1-desc': 'How companies use analytics to maximize their visibility and revenue on social media.',
    
    // Academic research section
    'recherches-title': 'Academic Research',
    'recherches-desc': 'Find here my research work and academic contributions in the field of economics, business intelligence and data analysis.',
    
    // Contact section
    'section-contact': 'Contact',
    'contact-subtitle': 'Discuss issues related to data, BI or technology solutions.',
    
    // Sidebar sections
    'sidebar-etudes': 'Education',
    'domaine-1': 'Master\'s in Business Intelligence (HEC)',
    'domaine-2': 'Master\'s in Economics (University of Montreal)',
    'domaine-3': 'Bachelor\'s in Economics (Quisqueya University)',
    'sidebar-outils': 'Tools & Skills',
    'sidebar-audience': 'Who this website is for',
    'audience-1': 'Leaders and entrepreneurs',
    'audience-2': 'SMEs and organizations in structuring phase',
    'audience-3': 'Recruiters and managers',
    'audience-4': 'Professionals and business intelligence teams',
    
    // Footer
    'footer-tagline': 'Analyze. Clarify. Decide.',
    'footer-subtitle': 'Economist & Business Analyst',
    'footer-location': 'Montréal, Canada',
    'footer-copyright': '&copy; 2026 Djeny Mainvil. All rights reserved.',
    
    // Page recherches.html
    'recherches-page-title': 'Academic Research',
    'recherches-page-subtitle': 'Find here my research work and academic contributions in the field of economics, business intelligence, and data analysis.',
    'recherches-cta-text': 'To access the full documents,',
    'recherches-hec-title': 'HEC Montreal - Internship Report',
    'recherches-hec-work': 'Optimization of marketing and sales performance in an industrial SME through business intelligence: integration of multi-source data and development of Power BI dashboards',
    'recherches-hec-context': 'Summary:',
    'recherches-hec-context-text': 'This supervised project is part of a rigorous and methodological approach aimed at developing an effective decision-making solution through the creation of Power BI dashboards, in response to the specific needs of the sales department of the company Sycodal. From the first step, a business needs analysis was conducted in close collaboration with the sales director and members of the sales team. This initial phase identified key indicators essential for monitoring sales performance, measuring the effectiveness of marketing campaigns, and improving the overall decision-making process.',
    'recherches-hec-p2': 'Secondly, a detailed inventory of the company\'s information systems was carried out. Data from platforms such as Dynacom, HubSpot, and Scoro were explored through a direct connection to Azure SQL. The analysis of the relational data structure enabled the design of a robust model, based on a star architecture, facilitating analytical crossovers between critical dimensions (customers, products, periods, etc.) and transactional facts.',
    'recherches-hec-p3': 'In addition, a rigorous data transformation and cleaning process was performed using Power Query to ensure quality, consistency, and reliability. On this basis, dynamic measures were developed in Data Analysis Expressions (DAX) to produce relevant visualizations aligned with the company\'s strategic priorities. Particular attention was paid to the user experience, notably through the integration of interactive filters, customized performance thresholds, and the Recency, Frequency, Monetary (RFM) classification of customers, allowing targeted commercial actions.',
    'recherches-hec-p4': 'Finally, the reports were submitted to end-user testing to validate their relevance and user-friendliness. Adjustments were made following feedback, and comprehensive documentation was developed to ensure continuity, maintenance, and scalability of the project. This work demonstrates a concrete and in-depth application of the skills acquired as part of the master\'s degree in business intelligence, in response to real business challenges.',
    'recherches-udem-title': 'University of Montreal - Research Report',
    'recherches-udem-work': 'COVID-19 Crisis and Employment Reallocation in the United States and Canada',
    'recherches-udem-context': 'Summary:',
    'recherches-udem-context-text': 'This research report highlights the link between employment reallocation and the COVID-19 crisis, particularly in the United States and Canada. Indeed, from a health crisis to an employment crisis, the COVID-19 pandemic affected all structures of the labor market. Jobs were created, others destroyed, thus prompting a reallocation of the workforce. Our objective is to carefully analyze the evolution of employment levels over the past two decades while comparing the 2008 crisis and COVID-19 using descriptive statistics and econometric regression using the Ordinary Least Squares (OLS) method. This work helps understand how GDP and unemployment react according to employment reallocation in the United States.',
    'recherches-memoire-title': 'Quisqueya University - Thesis',
    'recherches-memoire-work': 'Foreign Direct Investment (FDI) in the telecommunications sector and demand for technical training in Haiti: the case of Canado Technical students (2014-2019)',
    'recherches-memoire-context': 'Summary:',
    'recherches-memoire-context-text': 'This graduation thesis focuses on the link between foreign direct investment in the telecommunications sector and the determinants of education demand, particularly in technical training. Indeed, its objective is to carefully analyze the evolution of demand for technical training in technology and telecommunications fields and the determinants that underlie the decision to pursue studies. To do this, we conducted a case study at the Canado Technical center which allowed us to better understand the reasons why our respondents decide to pursue their studies in technical training. Among the main factors identified and analyzed, we can note: personal development, rapid employment, and shorter years of study. These results show the role played by foreign direct investment, particularly Digicel and Natcom, in the human capital investment choices of respondents. The Canado Technical center could draw inspiration from this work to improve the agreement between its training offer and the demand made by students while taking into account the opportunities offered by the job market in Haiti.',
    
    // Page article1.html
    'article1-title': 'Data Scientist, Data Analyst, and Business Intelligence Analyst: What Differences, for What Uses?',
    'article1-desc': 'A clear analysis of the different analytics roles and their specific contributions to organizations.',
    'article1-date': 'December 18, 2025',
    'article1-reading-time': '10 min read',
    'article1-author': 'Djeny Mainvil MSc.',
    'article1-p1': 'With the growing importance of data in organizations, recruiting specialized profiles in data analysis and exploitation has become a strategic challenge for many companies. This dynamic is accompanied by persistent confusion regarding the roles to be filled. Data scientist, data analyst, and business intelligence analyst are often presented as similar or even interchangeable titles, when they actually correspond to distinct functions and different contributions to the decision-making process.',
    'article1-p2': 'In recruitment practices, this confusion translates into job offers with very broad expectations, in which the same profile is supposed to analyze data, produce dashboards, anticipate future trends, and support the company\'s overall strategy. This accumulation of expectations can lead to underutilization of skills, internal frustrations, and a gap between expected results and the value actually created. Why does this confusion persist among some recruiters?',
    'article1-highlight1': 'The problem lies neither in the scarcity of talent nor in the intrinsic complexity of these professions, but in a more fundamental point: the lack of clarity on the purpose of the role within the organization.',
    'article1-p3': 'Even before questioning the technologies or required technical skills, a structuring question should be asked: what decision is the company really trying to improve through data? It is from this question that the differences between data scientist, data analyst, and business intelligence analyst cease to be theoretical and become operational and useful. Therefore, the analysis proposed in this article follows the frameworks of business analytics and decision science, where roles are examined based on their contribution to decisions rather than just their titles.',
    'article1-h2-1': 'Understanding Confusion Without Opposing Roles',
    'article1-p4': 'The confusion between data-related roles should not be interpreted as a systematic error. Rather, it reflects the very nature of these functions, which evolve in a closely interconnected ecosystem. In practice, the boundaries between data analyst, business intelligence analyst, and data scientist are rarely rigid, especially in small and medium-sized organizations where resources are limited and where the same professional may be required to assume multiple responsibilities.',
    'article1-p5': 'This functional proximity naturally contributes to blurring distinctions. The tools used overlap, analytical skills are partly shared, and the pursued objectives are often common. It then becomes understandable, both for recruiters and entrepreneurs, to perceive these roles as partially interchangeable, or even as different variations of the same analytical function.',
    'article1-p6': 'However, this apparent interchangeability does not mean absence of differences. Rather, it masks subtle but important variations in how each role contributes to the decision-making process. Depending on the context, the organization may seek to understand what is happening, structure information to better manage performance, or explore future scenarios. These intentions coexist and explain why data-related roles are both closely linked, complementary, and difficult to distinguish strictly. Recognizing this continuity allows moving beyond a hierarchical or competitive reading of professions and approaching analytics as a value chain, in which each function makes a specific contribution at different moments of decision-making.',
    'article1-h2-2': 'The Data Analyst: Understanding Reality Before Acting',
    'article1-p7': 'In academic and professional frameworks of decision analytics, the role of the Data Analyst is associated with a fundamental function: transforming raw data into a reliable understanding of observed reality. They intervene primarily when the organization seeks to answer questions about what has happened, explain performance gaps, or identify trends. This comprehension stage is essential, as it constitutes the factual basis on which subsequent decisions rest.',
    'article1-highlight2': 'Concrete Example: When a company notices a decline in sales over a given quarter, the Data Analyst does not simply note the result. They analyze available data to identify where the decline occurred, when, on which customer or product segments, and how this evolution differs from previous periods.',
    'article1-p8': 'The goal is not yet to decide, but to clarify the situation rigorously and in a shared manner, in order to provide a common and actionable reading of reality.',
    'article1-p9': 'Thus, the Data Analyst occupies an interface position between data and business needs. They translate operational issues into measurable analyses and present results in language accessible to decision-makers, helping to reduce informational uncertainty at the moment of decision. This role naturally fits into a logic of complementarity with other data-related functions: the analyses produced feed more structured management tools and can serve as a foundation for more advanced analytical approaches. The Data Analyst thus participates in a continuous value chain, whose objective is not technical sophistication, but the progressive improvement of decision quality.',
    'article1-h2-3': 'The Business Intelligence Analyst: Structuring Information to Guide Decision-Making',
    'article1-p10': 'In business analytics, the role of the Business Intelligence Analyst is distinguished by their direct contribution to organizational management. Where the Data Analyst helps understand observed reality, the Business Intelligence Analyst intervenes to structure this information over time and make it usable recurrently by decision-makers. Their main objective is not ad hoc analysis, but the establishment of stable decision-making benchmarks.',
    'article1-p11': 'The Business Intelligence Analyst therefore focuses on defining and ensuring the consistency of key performance indicators, designing dashboards, and organizing information flows for managers. They act at the interface between data and governance, ensuring that the indicators tracked are aligned with the company\'s strategic priorities. This structuring allows decision-makers to move more quickly from information to action, without depending on ad hoc analyses.',
    'article1-p12': 'Like other data roles, the Business Intelligence Analyst does not work in isolation. They rely on analyses produced upstream and contribute to creating a common language around performance. In this sense, they play a pivotal role in the analytical value chain: they transform understanding into management capability, while preparing the ground for more advanced analyses, especially when the organization gains maturity.',
    'article1-h2-4': 'The Data Scientist: Anticipating When the Organization Is Ready',
    'article1-p13': 'In advanced analytics, the role of the Data Scientist appears when the organization seeks to go beyond understanding and management to explore future scenarios. They intervene mainly in contexts where data are sufficiently structured, reliable, and historicized to allow predictive or prescriptive analyses. This role thus responds to anticipation needs that go beyond descriptive analysis or performance monitoring.',
    'article1-p14': 'The Data Scientist mobilizes statistical and algorithmic modeling methods to identify complex relationships, formulate forecasts, or optimize certain decisions. They answer questions such as: what could happen? what scenario is most probable? or how to improve a given result under certain constraints? Their contribution is particularly relevant when the decisions to support are repetitive, high-volume or high-stakes, and when partial automation of the decision becomes conceivable.',
    'article1-highlight3': 'Important Point: This role does not constitute a "superior" step in a hierarchy of data-related professions. Its value depends strongly on the organizational context and the level of analytical maturity achieved.',
    'article1-p15': 'In the absence of quality data, clear processes, or well-defined decisions, even the most sophisticated models struggle to produce concrete impact. Therefore, the Data Scientist fits into a logical continuity with the roles of Data Analyst and Business Intelligence Analyst, who provide the necessary foundations for their intervention. They thus contribute to the analytical value chain by bringing anticipation and simulation capability, not to replace other functions, but to extend them and transform stable understanding into prospective advantage.',
    'article1-h2-5': 'Understanding Differences Without Opposing Roles',
    'article1-p16': 'At this stage of reflection, a question arises and deserves to be posed explicitly: must one, to properly exploit data, recruit a Data Analyst, a Business Intelligence Analyst, and a Data Scientist? Formulated this way, this question reveals an important expectation among recruiters and entrepreneurs: that of finding an ideal, even exhaustive, configuration of data-related roles. However, the relevance of such an approach depends less on the number of profiles recruited than on the clarity of analytical functions actually necessary for the organization.',
    'article1-p17': 'The roles of Data Analyst, Business Intelligence Analyst, and Data Scientist can correspond to distinct but complementary functions within the decision-making process. They can coexist in some organizations, overlap in others, or be partially embodied by the same person, particularly when the size or maturity of the company does not justify strict specialization. The central question is therefore not whether to recruit all three, but once again to determine which functions must be ensured, when, and according to what degree of priority.',
    'article1-p18': 'For example, in an organization in the structuring phase, priority may be given to understanding and management, functions generally associated with Data Analyst and Business Intelligence Analyst roles. As data become more reliable and the decisions to support are better defined, anticipation and modeling capabilities may then become relevant. This progression is neither linear nor mandatory: it depends on the context, objectives, and constraints specific to each organization. Thus, reasoning in terms of job titles often leads to a false alternative; the real challenge is to align the company\'s decision-making needs with the analytical functions to be covered, whether distributed among several profiles or concentrated in a more hybrid role.',
    'article1-h2-6': 'Recruiting a Data Role: Shifting the Question to Decide Better',
    'article1-p19': 'At the conclusion of this analysis, one finding emerges: recruiting a data-related role cannot be reduced to a simple choice of job title. Seeking to determine whether to hire a Data Analyst, a Business Intelligence Analyst, or a Data Scientist often amounts to asking the question too late in the reasoning. This choice only makes sense once the analytical function that the organization really wants to strengthen and the decision it seeks to improve have been clarified.',
    'article1-p20': 'Rather than starting from the profiles available on the market, it is more relevant for recruiters and entrepreneurs to reason from a few structuring questions:',
    'article1-li1': 'What decision is the company trying to improve today?',
    'article1-li2': 'Is it about better understanding its performance, structuring its management, or anticipating certain future results?',
    'article1-li3': 'At what level of frequency and with what degree of complexity are these decisions made?',
    'article1-p21': 'The answers to these questions allow determining which analytical functions are priorities, regardless of the job title.',
    'article1-p22': 'This approach has a major advantage: it recognizes the organizational reality in which data-related roles are often hybrid, evolving, and interdependent. The same person can, at a given moment, perform comprehension, management, and, in some cases, anticipation functions, while in other contexts these functions can be distributed among several profiles. The challenge is therefore not to aim for an ideal or exhaustive structure, but to guarantee functional coherence between the company\'s decision-making needs and the skills mobilized.',
    'article1-h2-7': 'Conclusion',
    'article1-p23': 'Clarifying the differences between Data Analyst, Business Intelligence Analyst, and Data Scientist does not aim to rigidify roles, but to offer a more precise reading framework for decision-makers. This framework allows for better recruitment, better organization, and above all, better use of data as a lever in service of informed decisions.',
    'article1-p24': 'It also highlights another question often addressed too early in organizations: that of tools. Indeed, visualization platforms, Enterprise Resource Planning (ERP) systems, statistical tools, or artificial intelligence solutions only create value when they serve clearly defined analytical functions and use consistent with the company\'s decision-making maturity level. Approaching software as an extension of roles, and not as an end in itself, thus constitutes the logical next step of this reflection, which will be the subject of the next article.',

    // Page article2.html
    'article2-title': 'Power BI, Enterprise Resource Planning (ERP) and Artificial Intelligence Tools: Understanding the Role of Software in Analytics',
    'article2-desc': 'How technology tools fit into a coherent analytics approach.',
    'article2-date': 'December 22, 2025',
    'article2-reading-time': '⏱️ 10 min read',
    'article2-author': 'Djeny Mainvil MSc.',
    'article2-highlight1': '"We have Power BI, but it is rarely used."',
    'article2-highlight2': '"The data is there, but it is scattered."',
    'article2-highlight3': '"The ERP is in place, yet decisions remain complex."',
    'article2-intro': 'These remarks—often heard from entrepreneurs and SME leaders—have become familiar to anyone working in analytics or organizational transformation. Yet they do not reflect a lack of technology or outdated tools. Rather, they point to a gap between the solutions that have been deployed and how decisions are actually framed and made within organizations. In other words, as analytics solutions, enterprise resource planning systems, and artificial intelligence technologies become increasingly accessible, the question is no longer whether tools are available, but what role they truly play in the decision-making process.',
    'article2-p1': 'In this perspective, many companies continue to approach software as autonomous solutions, supposed to create value as soon as they are implemented. However, this approach frequently leads to technologically rich environments that are insufficiently structured from a decision-making perspective: data is collected, visualized or automated, without clearly specifying the purpose it must serve. The problem then lies not in a lack of information, but in the difficulty of transforming this information into stable and truly actionable benchmarks. It is therefore really important to understand that software only creates value when it extends a clearly identified function: an integrated management system structures execution, a business intelligence tool supports management, and artificial intelligence technologies allow, in certain contexts, to anticipate or optimize repetitive decisions.',
    'article2-p2': 'Still, we must question how this reflection is generally initiated in organizations? Before examining the specific role of each category of software, it is therefore appropriate to pause on how the question of tools is most often posed and the limitations that this approach entails.',
    'article2-h2-1': 'Why is the question of tools often poorly posed?',
    'article2-p3': 'In many organizations, the reflection on analytical tools almost systematically begins with a technological question: which software to adopt? This approach, although intuitive, reverses the logical order of reasoning. It rests on the implicit assumption that value will flow from the tool itself, when in practice, software only materializes a decision-making intention that has already been defined. This logic is reinforced by the way technologies are presented, each being associated with a specific benefit. Taken separately, these arguments are relevant when they are not linked to concrete decisions, they lead to dispersed and poorly structured uses.',
    'article2-p4': 'To this is added a frequent assimilation between data, information and decision. Indeed, collecting data, producing dashboards or automating certain analyses does not, in itself, guarantee better decision-making. Without prior clarification of what must be decided, at what frequency and by whom, tools remain peripheral to the decision-making process. They produce information, sometimes in abundance, without creating sufficiently stable benchmarks to guide action. Thus, asking the question of software before that of its function amounts to confusing means and ends: it is only by first identifying the type of decision to support that the role of tools becomes truly intelligible.',
    'article2-h2-2': 'The role of Enterprise Resource Planning (ERP) systems: structuring execution before decision',
    'article2-p5': 'In the way an organization manages and structures its information, Enterprise Resource Planning (ERP) systems play a fundamental role, but one that is sometimes poorly understood. An ERP groups and articulates all the software that supports the company\'s internal operational activities: sales, purchasing, finance, human resources, operations or logistics. In this same logic, Customer Relationship Management (CRM) systems occupy a comparable place, with a scope oriented towards commercial and relational activities. ERP and CRM thus share an essential function: to structure execution, capture events as they occur, and ensure the consistency of information across the organization. Their primary vocation is not direct decision support, but the integration of processes and the reliability of operational data on which subsequent uses rest.',
    'article2-p6': 'It is precisely at this level that their real value lies. By centralizing data and reducing silos, ERPs as well as CRMs which are intended for customer-oriented activities, make information traceable, comparable and exploitable over time. Expectations become problematic when these systems are perceived as full-fledged decision-making tools. The functions they offer are useful for operational monitoring, but remain limited in supporting more complex managerial trade-offs. Thus, in a functional and managerial reading, ERP and CRM not only secure processes but also create the necessary conditions for reliable management. It is only once this operational base is solidly established that other tools can intervene to structure, analyze and put into perspective the information resulting from execution.',
    'article2-h2-3': 'The role of BI tools: structuring management and creating decision-making benchmarks',
    'article2-p7': 'Following on from ERPs, business intelligence (BI) tools intervene at a distinct stage of the decision-making process: that of management. Their role is not to produce data, but to format information from operational systems in order to make it readable, comparable and exploitable over time. Widely used solutions such as Power BI or Tableau thus make it possible to transform transactional data into structured indicators, organized around performance axes relevant to the organization. Unlike one-off analyses, management is part of a recurring logic: it aims to monitor the evolution of results, identify gaps and support decisions made on a regular basis.',
    'article2-p8': 'The central issue of BI tools is therefore not visualization itself, but the ability to create shared decision-making benchmarks. By structuring information around common dashboards, they promote a homogeneous reading of performance between teams and management levels, and anchor discussions on a common factual basis. However, limits appear when these tools are deployed without prior clarification of the indicators to be monitored or the decisions to be supported: dashboards then multiply without real impact. In this approach, BI thus occupies an essential intermediate position: it transforms operational information into management support, without replacing either in-depth analysis or anticipation. It is this stability of management that then conditions the relevant use of more advanced technologies, particularly artificial intelligence tools.',
    'article2-h2-4': 'The role of artificial intelligence tools: anticipating, optimizing and gaining efficiency',
    'article2-p9': 'Artificial intelligence tools intervene at a more advanced stage of the decision-making process, but their role can only be understood in light of the objective they serve. Unlike ERPs, which structure execution, and business intelligence tools, which organize management, AI technologies are mobilized when the organization seeks to anticipate developments, optimize choices or improve the efficiency of certain activities. Depending on the context, this may involve exploiting data to formulate forecasts, detecting atypical situations, recommending actions under constraints, or even automating tasks and interactions using intelligent agents. Their contribution therefore does not lie solely in the analysis of existing data, but also in their ability to support human work by accelerating, simplifying or making certain decisions or operations more reliable.',
    'article2-p10': 'This diversity of uses explains why the value of AI is closely linked to the maturity of the organization. When data from ERPs is reliable and management benchmarks are stabilized by BI tools, certain AI applications can produce significant decision-making impact. Conversely, in contexts where data is less structured, AI is sometimes mobilized primarily as a lever for operational efficiency, for example to automate tasks, assist teams or streamline processes. In this framework of reflection, artificial intelligence therefore constitutes neither a starting point nor a universal solution. It extends an already clarified organizational process, by providing anticipation, optimization or operational support capabilities where objectives are sufficiently defined. Its role is not to replace human judgment, but to support it differently depending on the nature of the decisions and activities to be supported.',
    'article2-h2-5': 'Choosing your tools: a question of decision-making trajectory',
    'article2-p11': 'When it comes to structuring the technological environment, many leaders wonder how far to go: should we invest simultaneously in an ERP, BI tools and artificial intelligence solutions to hope to derive value from data? It is important to take into account that the coherence of an analytical environment rests less on the extent of the tools than on their ability to respond to clearly identified decision-making needs. Indeed, some organizations must above all secure execution and make their data reliable, an objective mainly supported by an ERP. Others are mainly looking to structure their management and monitor their performance over time, which makes BI tools a priority. Artificial intelligence technologies, for their part, make full sense when the decisions to be optimized or anticipated are already sufficiently framed.',
    'article2-p12': 'This diversity of situations explains why there is no standard technological model. The functions covered by tools can complement each other, overlap or evolve over time. A company may have an ERP and BI tools without being ready to mobilize AI in a relevant way, while another, more specialized, can derive concrete advantage from advanced approaches without heavy infrastructure. The challenge is therefore not to aim for an ideal configuration, but to build a coherent trajectory. Rather than wondering which tools to adopt, it then becomes more useful to question the decisions that the organization seeks to better master today, and the analytical functions necessary to achieve this. It is therefore this reasoning that allows tools to be sustainably integrated into strategy, without depending on fashions.',
    'article2-h2-6': 'Conclusion',
    'article2-p13': 'Throughout this article, one idea recurs: software, however powerful it may be, does not create value by itself. Enterprise resource planning systems and CRM tools organize the company\'s daily operations and make operational information reliable. Business intelligence tools make it possible to monitor performance and provide clear benchmarks for management. Artificial intelligence technologies, for their part, can help anticipate, optimize or gain efficiency, when the conditions are met. Each plays a specific role, provided it is used for what it is really designed to do.',
    'article2-p14': 'This reading invites us to change the way technological decisions are often approached. Rather than starting from available tools or promises associated with new solutions, it becomes more useful to start with the questions that the organization seeks to better manage on a daily basis. What decisions need to be made more serenely? What activities would benefit from being better structured, better monitored or partially automated? It is by starting from these concrete needs that technological choices make full sense.',
    'article2-p15': 'Clarifying the role of ERPs, BI tools and artificial intelligence solutions therefore means better understanding how these tools can be articulated over time. When they are thought of as supports in the service of clearly identified decisions, software ceases to be abstract investments to become true levers of management, anticipation and efficiency within the organization.',

    // Page article3.html
    'article3-date': 'January 23, 2026',
    'article3-reading-time': '⏱️ 12 min read',
    'article3-author': 'Djeny Mainvil MSc.',
    'article3-img-alt': 'A simple guide to get started with your data',
    'article3-highlight-quote': '<strong>“We have data… but we don’t know what to do with it.”</strong>',
    'article3-highlight-sub': 'This simple guide shows you where to start—step by step—without technical jargon or oversized investments.',
    'article3-p1': 'Today, many small and medium-sized businesses face the same situation: they have a lot of information… but don’t know how to use it. Files pile up, software tools don’t talk to each other, teams work with their own numbers, and decisions too often rely on intuition rather than facts. Yet making use of data is neither reserved for large organizations nor as complex as it seems.',
    'article3-p2': 'This guide was designed to help SMEs start simply, step by step—without technical jargon and without excessive investment. The goal is clear: show you how to structure your data, understand your operational reality, and gradually turn information into concrete, informed decisions. Whether you’re a leader, manager, or a curious employee, you’ll find here an accessible path from confusion… to clarity. Across these seven steps, you’ll learn how to centralize data, identify needs, clean the essentials, choose the right indicators, and build useful dashboards—while establishing a culture of continuous improvement. This becomes your new way of steering the business: more agile, more precise, and ultimately more performant.',

    'article3-h2-1': 'Step 1: Centralize your data in one place (ERP or equivalent)',
    'article3-s1-p1': 'For most SMEs, the data already exists… but it is often scattered across different software tools, Excel files, or even emails. This dispersion creates a simple problem: everyone works with their own version of the truth. Before even thinking about analysis or dashboards, a company must first centralize its information in one place. This is what we call an ERP (Enterprise Resource Planning) system—or an equivalent setup. The goal isn’t to have a complex tool, but a single space where sales, inventory, accounting, and sometimes even HR can coexist cleanly.',
    'article3-s1-p2': 'Centralizing data doesn’t always mean investing immediately in an expensive platform. For some SMEs, a well-structured CRM or a simple combination of existing tools can be enough to start. What matters is that information is consistent, easy to access, and updated in the same place. At this stage, the most crucial role isn’t the technology—it’s the person responsible for maintaining data quality: someone who ensures entries are complete, files don’t multiply, and numbers truly reflect the company’s reality.',
    'article3-s1-p3': 'When centralization is in place, everything changes: teams finally speak the same language, errors decrease, and decisions become clearer. It’s like moving from a drawer full of scattered papers to a well-organized binder. It’s also this solid foundation that later makes automated analysis, Power BI visualization, and reliable indicators possible. In short, centralizing your data is the first brick of a sustainable, accessible data approach—even for a small company just starting out.',
    'article3-h3-1': 'However, who can handle data centralization in an SME?',
    'article3-s1-p4': 'In an SME, data centralization can be handled by different profiles depending on the size and maturity of the company. In smaller organizations, this role is often assumed by an internal person who knows operations well—such as an administrative coordinator, a sales lead, or even the IT manager. The key isn’t being an analysis expert, but understanding internal processes and being rigorous with information management. This person becomes the “data guardian”: ensuring information is properly entered, complete, and always in the right place.',
    'article3-s1-p5': 'However, in some situations, bringing in an external specialist becomes a real accelerator. ERP consultants, data analysts, or technology integrators can help structure, clean, and unify data faster than doing it alone. They bring a neutral perspective, know tools suited to an SME budget, and help avoid time-consuming mistakes later. This support is especially useful if the company wants to implement a more robust system such as an ERP or CRM. That said, even if an external expert sets up the structure and connections, centralization then becomes an internal responsibility. The SME should appoint someone to ensure data-entry rules are respected, updates are performed regularly, and data remains consistent.',

    'article3-h2-2': 'Step 2: Make a simple inventory of available data',
    'article3-s2-p1': 'Once the company has centralized its tools, the second step is to inventory the data that already exists. This step is very accessible—even for a beginner SME—yet it’s essential. It’s simply about understanding what the company has: what information it collects, in what formats, and how often. This inventory is like opening the drawers of a house: you sometimes discover very useful data that has been sitting in forgotten Excel files, PDF reports, or underused software.',
    'article3-s2-p2': 'This exercise matters because it quickly reveals strengths and weaknesses. Some data will be complete and well structured (e.g., accounting), while other data will be partial or inconsistent (e.g., client lists, inventory, HR files). By listing it, an SME understands not only what it has, but also what is missing to answer its business questions. For example: “Can we really analyze sales by customer type if we never record that type in the CRM?” The inventory reveals the first gaps to fill.',
    'article3-s2-p3': 'Finally, this inventory helps plan what comes next: choosing the right indicators, knowing which files to clean, and determining whether some processes should be improved. This step guides all future decisions. It doesn’t require deep technical expertise—just someone curious, organized, and familiar with operations. In one or two hours, an SME can already get a clear view of its information assets. And that clarity prepares solid ground for reliable analysis and data-based decisions.',

    'article3-h2-3': 'Step 3: Clean and organize the data (the most important step)',
    'article3-s3-p1': 'Once the company knows what data it has, it must move to the most underestimated step: cleaning. This is where many SMEs realize their information is neither complete nor consistent. The same customer written three different ways, incorrect dates, products without codes, empty fields… This isn’t a failure—it’s the reality of almost every organization. Cleaning is like organizing a warehouse before trying to find anything in it. As long as data is messy, no analysis will be reliable—even with the best tools.',
    'article3-s3-p2': 'In addition, a data analyst is well positioned to do the cleaning and apply good methods. This includes standardizing names, correcting errors, filling missing information, and sometimes merging multiple files into one. Simple tools like Excel, Power Query (built into Excel), or Power BI can already transform “raw” data into solid data. At this stage, the SME starts seeing its information much more clearly: files become structured, columns are standardized, and duplicates disappear.',
    'article3-s3-p3': 'This work may feel invisible, but it determines the success of everything else. Clean data enables accurate dashboards, automated refreshes, and reliable indicators for strategic decisions. Conversely, skipping this step leads to misinterpretation and decisions based on wrong data. In short, cleaning is the backbone of a data project: not the most glamorous step, but the one that truly turns a pile of information into a valuable asset for the company.',

    'article3-h2-4': 'Step 4: Choose the indicators you want to track (KPIs)',
    'article3-s4-p1': 'After cleaning the data, it’s time to decide what you actually want to measure. This is a key step because many SMEs feel overwhelmed: they think they must analyze everything, track everything, measure everything. In reality, starting small is the best strategy. A good KPI isn’t a complicated number; it’s a simple metric that answers an important question: what do we need to know to manage the business more effectively? By choosing only a few essential indicators, you avoid getting lost in unnecessary information.',
    'article3-s4-p2': 'For an SME, KPIs should be directly tied to concrete business goals. For example: if the main challenge is increasing sales, you might track monthly revenue, product performance, or repeat-customer rate. If the challenge is operations, indicators might be stock levels, delivery lead times, or late-order rate. In HR, you might track turnover, absenteeism, or seniority distribution. What matters is that each KPI says something relevant for your reality.',
    'article3-s4-p3': 'When the right indicators are chosen, they become a real mental dashboard for the team. They help make faster decisions, detect trends earlier, and react before problems become costly. Most importantly, these indicators create a shared culture: everyone talks about the same numbers, understands the same signals, and aligns around the same priorities. Choosing the right KPIs is like choosing instruments in a cockpit: you don’t need to monitor everything—only what helps you steer the business with confidence.',

    'article3-h2-5': 'Step 5: Build your first dashboards',
    'article3-s5-p1': 'Once indicators are defined, it’s time to bring the data to life by turning it into visual dashboards. This is often where leaders truly start to “see” what data is saying. Building a dashboard means creating a visual space where the most important information is presented clearly, intuitively, and in an easy-to-understand way. Tools like Power BI, Looker Studio, or Tableau make it possible for almost any SME to create interactive charts—without needing a programming expert, but with a business analyst.',
    'article3-s5-p2': 'The goal of a dashboard isn’t to impress—it’s to simplify decision-making. A good dashboard immediately shows whether an indicator is doing well or poorly, whether a trend is improving or deteriorating, or whether a problem keeps repeating. For example, a line chart of monthly revenue helps you see seasonality and weak periods. A map of sales by region helps identify where to focus efforts. A chart of employee turnover gives a clear signal about team stability. The simpler the visuals, the more useful they are.',
    'article3-s5-p3': 'As these first dashboards are built, something important happens: the company changes how it thinks. Decisions become more evidence-based, discussions more concrete, and priorities align with reality rather than impressions. Dashboards become a daily tool—not to produce pretty graphs, but to guide action. It’s often at this stage that an SME realizes data is not a luxury reserved for large companies: it’s an accessible, powerful, and transformative lever for any organization, even the smallest.',

    'article3-h2-6': 'Step 6: Interpret the results',
    'article3-s6-p1': 'Building dashboards is a big step forward, but real value appears when the business analyst takes time to interpret results. Too often, SMEs look at charts without pausing to ask the right questions. Interpreting means understanding why a number goes up or down, what it means for the business, and how to respond. This step turns data into insights: explanations, causes, and early signals. It’s a shared analysis moment where everyone brings field context to make the numbers meaningful.',
    'article3-s6-p2': 'Interpreting dashboards should become a simple, accessible, and collaborative routine. It can be a monthly meeting where you review key indicators—sales, productivity, operations, or HR depending on priorities. The most powerful questions are often the simplest: what is surprising? what is improving? what is deteriorating? By combining data with field reality, the team identifies trends to watch, urgent issues to fix, and opportunities to seize. The goal isn’t to be right—it’s to understand quickly.',
    'article3-s6-p3': 'This is also where concrete decisions are made. Once a problem is identified, the team decides on an action: adjust schedules, revise a process, optimize stock, refine a product, or strengthen customer follow-up. Interpreting data doesn’t mean doing long analyses—it means making small decisions quickly and improving continuously. And the more an SME repeats this exercise, the more it develops a culture where decisions rest on facts, not intuition.',

    'article3-h2-7': 'Step 7: Automate and continuously improve',
    'article3-s7-p1': 'Once dashboards are in place and decisions start relying on data, the next step is to make the process smooth, automatic, and sustainable. At first, many SMEs update data manually, export Excel files, or refresh reports by hand. That’s normal to get started, but it’s not viable long term. Automating means connecting your systems (ERP, CRM, accounting, clean files) to your analytics tool so dashboards refresh automatically—without human intervention. This saves time, reduces errors, and ensures everyone always works with the most up-to-date information.',
    'article3-s7-p2': 'Automation doesn’t mean implementing a big technology solution all at once. It’s a series of small, progressive improvements. It can start with simple connections between your ERP and Power BI, or using Power Query to refresh recurring files automatically. The more smoothly data flows, the less time the team spends manipulating files—and the more time it can spend analyzing and deciding. Automation also helps spot anomalies faster: a KPI dropping, stock suddenly rising, absenteeism drifting—because updates happen in near real time.',
    'article3-s7-p3': 'Finally, adopting a continuous improvement mindset means understanding that data isn’t a one-time project—it’s a cycle of progress. Each month, the company can revisit processes, improve data quality, add new indicators, or simplify those that are no longer useful. Over time, the internal culture evolves: employees become more disciplined in data entry, managers decide faster, and the organization gains maturity. It’s not the size of the SME that determines transformation—it’s consistency. With simple automation and a regular rhythm of improvement, data becomes a stable, reliable, and accessible growth engine for everyone.',

    'article3-h2-8': 'Conclusion',
    'article3-c-p1': 'Getting started with data isn’t a technological transformation—it’s a progressive, human, and accessible one. By following these simple steps—centralize, inventory, clean, choose, visualize, interpret, and automate—an SME can move from a scattered environment to clear, structured management guided by facts. Each step strengthens the next, and each one builds a new habit that makes the company more mature and more performant.',
    'article3-c-p2': 'This journey doesn’t require becoming an expert or investing in complex tools. It mainly requires consistency, curiosity, and the willingness to improve existing practices. Over time, data becomes more than an asset: it becomes a competitive advantage. It helps you spot trends earlier, detect problems faster, and make decisions with confidence.',
    'article3-c-p3': 'Ultimately, the real question is no longer: “What should we do with our data?” But rather: “What could we achieve if we fully used it?” The good news is that it all starts with a first step that is simple, concrete, and within reach. In the long term, depending on your needs, the company can go further by building forecasts or managing more complex data—work that can be handled by a data scientist.',

    // ============================================================
    // Preloader & Short navigation (all pages)
    // ============================================================
    'preloader-subtitle': 'ECONOMIST & BUSINESS ANALYST',
    'nav-home': 'Home',
    'nav-publications-short': 'Publications',
    'nav-mandats': 'Mandates',
    'nav-services': 'Services',
    'nav-apropos-short': 'About',
    'nav-contact-short': 'Contact',
    'btn-back-mandats': '← Back to mandates',

    // ============================================================
    // professional.html — main page
    // ============================================================
    'pro-hero-title': 'You have the data — but is it actionable?',
    'pro-hero-subtitle': 'I am Djeny, and I help startups and SMEs structure their key indicators and build strategic dashboards, turning their data into informed and measurable decisions.',
    'pro-hero-credential': 'M.Sc. Business Intelligence · Economics · Montreal',
    'pro-hero-cta1': 'Schedule a strategic conversation',

    'pro-section-publications': 'Publications',
    'pro-section-publications-intro': 'Articles, analyses and research on performance, KPIs and decision-making.',
    'pro-pub-counter-articles': '5 articles',
    'pro-pub-counter-podcasts': '1 podcast',
    'pro-pub-counter-recherches': '3 research papers',

    'pro-section-approche-title': 'What I offer',
    'pro-section-approche-lead': 'I work independently to turn your data into decision levers.',
    'pro-service-1-title': 'Strategic indicators',
    'pro-service-1-text': 'Clarify your strategic indicators for an immediate read on performance.',
    'pro-service-2-title': 'KPI structuring',
    'pro-service-2-text': 'Structure your KPIs around your real objectives and business priorities.',
    'pro-service-3-title': 'Dashboards',
    'pro-service-3-text': 'Design clear and actionable executive dashboards.',
    'pro-service-4-title': 'Interpretation',
    'pro-service-4-text': 'Simplify the interpretation of your data to support decision-making.',
    'pro-service-5-title': 'Diagnostic',
    'pro-service-5-text': 'Identify key decisions, blind spots and the indicators that truly matter.',
    'pro-audience-title': 'I primarily work with',
    'pro-audience-1-label': 'Startups',
    'pro-audience-1-desc': 'In their structuring phase',
    'pro-audience-2-label': 'SMEs',
    'pro-audience-2-desc': 'In growth mode',
    'pro-audience-3-label': 'Executives',
    'pro-audience-3-desc': 'A consolidated view of performance',
    'pro-audience-4-label': 'Teams',
    'pro-audience-4-desc': 'A clear analytical framework',

    'pro-section-positionnement-title': 'About',
    'pro-about-p1': 'Making decisions without a clear read of the data means moving forward with no visibility. Today, as a technology solutions advisor at Makila AI, I support companies across diverse contexts (HR, finance, marketing) at every step: from identifying needs to structuring data, all the way to delivering value through dashboards, advanced analytics and predictive models. My approach always pursues the same goal: turning data into useful, concrete decisions aligned with business priorities.',
    'pro-about-p2': 'In addition, my journey between Université de Montréal and HEC Montréal allowed me to build a dual expertise in economics and business intelligence, which I now apply in real and demanding environments. This experience, enriched by an international mandate in Thailand, has shaped a vision that is at once analytical, adaptable and results-oriented.',
    'pro-about-p3': 'Today, I bring this expertise to organizations — particularly growing ones that want to structure their data, improve their processes and make more informed decisions. With rigor, curiosity and commitment, I pursue a simple goal: create real impact through the intelligent use of data.',
    'pro-about-img-alt': 'Professional portrait of Djeny Mainvil',

    'pro-section-mandats-title': 'How I work in practice.',
    'pro-section-mandats-text': 'Three core types of mandates, tailored to the operational reality of leaders and analytical teams.',
    'pro-mandats-aside-title': 'Focus',
    'pro-mandats-aside-text': 'Each mandate addresses a specific need: clarify, structure or govern decision-making information.',
    'pro-feature-1-eyebrow': 'Strategic steering',
    'pro-feature-1-title': 'Performance analysis report — sales dashboard.',
    'pro-feature-1-text': 'Key indicators (Book-to-Bill, top products, customer mapping) to guide Sycodal’s commercial strategy.',
    'pro-feature-2-eyebrow': 'Analytical governance',
    'pro-feature-2-title': 'Exploratory HR analysis from a legacy system.',
    'pro-feature-2-text': 'Cleaning, modeling and reliable indicators (headcount, average salary, tenure) with strict respect for confidentiality.',
    'pro-feature-3-eyebrow': 'International consulting',
    'pro-feature-3-title': 'Rethinking impact — SOS Kitchen Thailand project.',
    'pro-feature-3-text': 'Operational diagnostic, volunteer engagement and sustainable funding models in service of a high-impact social mission.',

    'pro-cta-title': 'Let us clarify your performance.',
    'pro-cta-text': 'A strategic conversation quickly surfaces the levers for improvement and the blind spots that limit visibility.',
    'pro-cta-button': 'Book a confidential conversation',
    'pro-cta-aside-title': 'Format',
    'pro-cta-aside-text': 'A confidential, focused conversation, oriented toward decisions.',

    // ============================================================
    // mandat1.html — Sales dashboard performance report
    // ============================================================
    'mandat1-title': 'Performance analysis report — Sales dashboard',
    'mandat1-eyebrow': 'Mandate · Strategic steering',
    'mandat1-meta1': 'Project: Sycodal',
    'mandat1-meta2': 'Power BI · Commercial analysis',
    'mandat1-img-alt': 'Sales dashboard — performance and customer analysis',
    'mandat1-intro': 'As part of this sales dashboard project, I developed an in-depth analysis of product performance and customer acquisition, with a particular focus on strategic decision-making. The data was specifically generated and adapted to meet the requirements of the requested prototype.',
    'mandat1-h2-1': 'Data adaptation and representation',
    'mandat1-p1': 'To ensure the relevance of the data, I integrated key indicators into the database such as billed and reserved quantities, which allows the calculation of the <strong>Book-to-Bill Rate</strong>. This metric is essential to assess commercial efficiency: a rate above 1 indicates strong product demand and highlights opportunities to optimize production and delivery capacity.',
    'mandat1-p2': 'I also generated a join date for each customer to facilitate the calculation of <strong>new customers per month</strong>, enriching acquisition analysis. These adaptations enable the dashboard to provide an instant view of the company\'s financial health.',
    'mandat1-h2-2': 'Insights and decision-making',
    'mandat1-p3': 'The visualizations facilitate quick and effective analysis of product performance. For example, by identifying the <strong>top 5 revenue-contributing products</strong>, Sycodal can direct its marketing efforts and inventory strategies toward the most profitable items.',
    'mandat1-p4': 'In addition, comparing monthly revenue against sales targets makes it possible to quickly spot gaps and adjust business strategies in a timely manner. This fosters a proactive response to market fluctuations.',
    'mandat1-h2-3': 'Geographic analysis',
    'mandat1-p5': 'The geographic map helps identify areas with high customer concentration, which is essential to optimize sales visits and distribution. By targeting high-demand regions, Sycodal can maximize its sales efforts and improve customer service by responding quickly to local needs.',
    'mandat1-h2-4': 'Customer satisfaction analysis',
    'mandat1-p6': 'While the dashboard already delivers valuable insights, adding customer satisfaction analysis would further enrich the understanding of preferences and improvement areas. This would strengthen long-term loyalty, a crucial aspect for maximizing profits in a competitive environment.',
    'mandat1-highlight': 'This dashboard isn\'t a simple tracking tool: it\'s a <strong>strategic instrument</strong> that allows Sycodal to make informed decisions, adapt operations and maximize efficiency in a dynamic market.',
    'mandat1-h2-5': 'Conclusion',
    'mandat1-p7': 'Through continuous data analysis, the company can anticipate trends and ensure its efforts align with growth and customer satisfaction objectives. The data was carefully adapted to the requested prototype, ensuring relevant and actionable insights for Sycodal\'s commercial strategy.',

    // ============================================================
    // mandat2.html — HR exploratory analysis
    // ============================================================
    'mandat2-title': 'HR exploratory analysis from a legacy system',
    'mandat2-eyebrow': 'Mandate · Analytical governance',
    'mandat2-meta1': 'HR data · Power BI',
    'mandat2-meta2': 'Cleaning, modeling, reliable indicators',
    'mandat2-img1-alt': 'HR exploratory analysis — dashboard preview',
    'mandat2-img2-alt': 'HR data model — relationships between tables',
    'mandat2-h2-1': 'Context',
    'mandat2-p1': 'This work is part of an exploratory analysis aimed at demonstrating the value that a Business Intelligence solution can bring from HR data extracted from a legacy system. The data provided represents a sample of the company\'s workforce and includes information on employees, departments and business units.',
    'mandat2-p2': 'The objective is to analyze the actual structure and quality of the data, identify what is analytically reliable, and produce concrete and actionable indicators, while strictly respecting confidentiality constraints.',
    'mandat2-h2-2': 'Data import and cleaning',
    'mandat2-p3': 'The first step was to clean and prepare the data to ensure its consistency and reliability for analysis. Data types were standardized, particularly for IDs, dates and financial amounts, and checks were performed to identify empty rows and exact duplicates.',
    'mandat2-p4': 'Job titles were cleaned and typographical inconsistencies corrected (for example, replacing "Sr. Manger" with "Sr. Manager"). Technical column names were renamed to improve model readability, and sensitive information such as employee full names was removed in line with data privacy best practices.',
    'mandat2-p5': 'During exploratory analysis, particular attention was paid to understanding data granularity. It was observed that different employees can share the same <strong>EEID</strong>, meaning this identifier does not represent a unique employee but rather a record-level identifier.',
    'mandat2-p6': 'To accurately determine the number of employees, a cross-validation of names, age, gender and hire dates was carried out. This analysis revealed cases where employees with identical names had demographic and temporal characteristics incompatible with the assumption that they were the same individual. For example, employees sharing the same name could have significantly different ages and very distant hire years, which rules out scenarios such as rehires or internal role changes.',
    'mandat2-highlight': 'Based on these observations, it was concluded that, within the scope of this dataset, <strong>each row represents a distinct employee</strong>. This conclusion is supported by factual observations and constitutes an explicit working hypothesis for the rest of the analysis.',
    'mandat2-h2-3': 'Data modeling',
    'mandat2-p7': 'Building on this understanding, several calculated columns were created to enrich the dataset without introducing risky assumptions. A <strong>Status</strong> column was added to identify whether an employee is active or inactive, based on the presence of an exit date. A <strong>Tenure (years)</strong> column was also calculated to measure the length of employment, enabling analysis of overall workforce experience.',
    'mandat2-p8': 'In addition, a dedicated <strong>date table</strong> was created to support time-based analysis. Relationships were then established in a simple and consistent way, linking the main employee table to the department, business unit and date tables through their respective identifiers.',
    'mandat2-p9': 'This relational model enables smooth navigation between analyses and ensures that calculated indicators can be analyzed consistently by department, business unit, country or any other relevant organizational dimension.',
    'mandat2-p10': 'From a calculation standpoint, only indicators considered reliable given the available data were retained. <strong>Total headcount</strong> is calculated as the number of rows in the dataset, in line with the validated assumption that each row corresponds to a distinct employee in this sample.',
    'mandat2-p11': 'Aggregated indicators such as <strong>average salary</strong>, <strong>average bonus percentage</strong> and <strong>average tenure</strong> were calculated to provide a concise and meaningful view of the compensation structure and workforce experience.',

    // ============================================================
    // mandat3.html — SOS Kitchen Thailand
    // ============================================================
    'mandat3-title': 'Rethinking impact: SOS Kitchen Thailand project',
    'mandat3-eyebrow': 'Mandate · International consulting',
    'mandat3-meta1': 'Bangkok, Thailand',
    'mandat3-meta2': 'July 2025',
    'mandat3-meta3': 'Multidisciplinary team',
    'mandat3-img1-alt': 'SOS Kitchen Thailand project — international consulting',
    'mandat3-img2-alt': 'Field work — SOS Kitchen Thailand',
    'mandat3-intro': 'As part of an international consulting mandate, I had the opportunity to be part of a multidisciplinary team aimed at strengthening the impact and operational effectiveness of <strong>SOS Kitchen Thailand</strong>, an organization committed to recovering food surplus and redistributing it to communities in need.',
    'mandat3-h2-1': 'Operational diagnosis',
    'mandat3-p1': 'Together, we conducted an in-depth analysis of operations, from sourcing to final delivery, in order to identify the main inefficiencies and improvement levers. Our thinking revolved around three strategic axes: strengthening operational capacity, optimizing volunteer engagement, and developing more sustainable funding models.',
    'mandat3-h2-2': 'Proposed solutions',
    'mandat3-p2': 'As a team, we proposed innovative solutions, including a <strong>corporate social responsibility (CSR) partnership model</strong> to address workforce challenges, a <strong>digital platform</strong> aimed at mobilizing flexible volunteers ("Rescue Runners"), and a <strong>funding concept</strong> turning everyday purchases into social impact ("Your snack, their meal").',
    'mandat3-h2-3': 'Takeaways',
    'mandat3-p3': 'This experience allowed me to contribute to a high social impact initiative while applying a strategic, data-driven approach in a real-world context. It strengthened my commitment to using data, collaboration and innovation to build more efficient, inclusive and sustainable systems.',
    'mandat3-credits-title': 'Project carried out in July 2025 in the field in collaboration with:',
    'mandat3-souvenirs-title': 'Field memories',
    'mandat3-souvenirs-text': 'A few moments captured during the mandate in Bangkok: cooking, redistribution logistics and exchanges with local teams.'
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('language', currentLang);
  updateContent();
  updateLanguageButton();
}

function updateLanguageButton() {
  const langButton = document.getElementById('current-lang');
  if (langButton) {
    if (currentLang === 'fr') {
      langButton.textContent = 'EN';
    } else {
      langButton.textContent = 'FR';
    }
  }
}

function updateContent() {
  const lang = translations[currentLang];

  // Mettre à jour l'attribut lang du document
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'fr';
  
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const value = lang[key];
    if (value == null) return;

    // Cas fréquent: l'élément traduit contient un seul lien <a> (ex: listes dans la sidebar)
    // => mettre à jour uniquement le texte du lien pour préserver le href et la structure.
    if (
      element.childElementCount === 1 &&
      element.firstElementChild &&
      element.firstElementChild.tagName === 'A' &&
      element.firstElementChild.childElementCount === 0
    ) {
      element.firstElementChild.textContent = value;
      return;
    }

    // Utiliser innerHTML si la traduction contient du HTML (strong/em/br/etc.)
    if (typeof value === 'string' && /<\/?[a-z][\s\S]*>/i.test(value)) {
      element.innerHTML = value;
      return;
    }

    element.textContent = value;
  });

  // Traduire certains attributs (ex: alt des images)
  document.querySelectorAll('[data-translate-alt]').forEach(element => {
    const key = element.getAttribute('data-translate-alt');
    const value = lang[key];
    if (value == null) return;
    element.setAttribute('alt', value);
  });
}

// Initialiser au chargement de la page
window.addEventListener('DOMContentLoaded', function() {
  updateContent();
  updateLanguageButton();
});

// S'assurer que le contenu est mis à jour même après le chargement complet
window.addEventListener('load', function() {
  updateContent();
});
