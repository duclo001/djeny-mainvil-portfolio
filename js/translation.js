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
    
    // Page d'accueil (index2.html) - Hero section
    'hero-subtitle1': 'Conseillère en solutions technologiques',
    'hero-subtitle2': 'Solutions data pour la performance et la croissance',
    'hero-badge-makila': 'Makila AI — Membre',
    'hero-badge2': 'BI • Analytics • Stratégie',
    'hero-badge3': 'Français • Anglais (bilingue)',
    'viz-title': 'Dashboard Analytics en Temps Réel',
    'hero-main': 'Donner du sens aux données pour mieux décider',
    'hero-cta1': 'Explorer les publications',
    'hero-cta2': 'Me Contacter',
    
    // À Propos section
    'section-apropos': 'À Propos',
    'apropos-p1': 'Conseillère en solutions technologiques spécialisée en données et intelligence d\'affaires, j\'accompagne les organisations dans la transformation de leurs données en décisions stratégiques. Mon parcours combine une <strong>double formation de niveau maîtrise en économie (Université de Montreal) et en intelligence d\'affaires (HEC Montréal)</strong>, ainsi que plus de <strong>cinq années d\'expérience</strong> dans des fonctions analytiques et décisionnelles.',
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
    'article3-title': '« Nous avons des données… mais nous ne savons pas quoi en faire »',
    'article3-desc': 'Réflexion sur les défis de la valorisation des données dans les organisations.',
    
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
    'footer-copyright': '&copy; 2026 Djeny Mainvil. Tous droits réservés.',
    
    // Page recherches.html
    'recherches-page-title': 'Recherches Académiques',
    'recherches-page-subtitle': 'Retrouvez ici mes travaux de recherche et contributions académiques dans le domaine de l\'économie, de l\'intelligence des affaires et de l\'analyse de données.',
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
    'article2-p15': 'Clarifier le rôle des PGI, des outils de BI et des solutions d\'intelligence artificielle revient donc à mieux comprendre comment ces outils peuvent s\'articuler dans la durée. Lorsqu\'ils sont pensés comme des appuis au service de décisions clairement identifiées, les logiciels cessent d\'être des investissements abstraits pour devenir de véritables leviers de pilotage, d\'anticipation et d\'efficacité au sein de l\'organisation.'
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
    
    // Home page (index2.html) - Hero section
    'hero-subtitle1': 'Technology Solutions Advisor',
    'hero-subtitle2': 'Data solutions for performance and growth',
    'hero-badge-makila': 'Makila AI — Member',
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
    'article3-title': '"We have data… but we don\'t know what to do with it"',
    'article3-desc': 'Reflection on the challenges of data valorization in organizations.',
    
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
    'footer-copyright': '&copy; 2026 Djeny Mainvil. All rights reserved.',
    
    // Page recherches.html
    'recherches-page-title': 'Academic Research',
    'recherches-page-subtitle': 'Find here my research work and academic contributions in the field of economics, business intelligence, and data analysis.',
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
    'article2-p15': 'Clarifying the role of ERPs, BI tools and artificial intelligence solutions therefore means better understanding how these tools can be articulated over time. When they are thought of as supports in the service of clearly identified decisions, software ceases to be abstract investments to become true levers of management, anticipation and efficiency within the organization.'
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
      langButton.innerHTML = '🇬🇧 EN';
    } else {
      langButton.innerHTML = '🇫🇷 FR';
    }
  }
}

function updateContent() {
  const lang = translations[currentLang];
  
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
