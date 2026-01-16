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
    'article1-title': 'Scientifique des données, analyste de données et analyste en intelligence d\'affaires',
    'article1-subtitle': 'Une analyse claire des différents rôles analytiques et de leurs contributions spécifiques aux organisations.',
    'article1-intro': 'Dans le paysage professionnel actuel, les métiers liés aux données se multiplient et se diversifient. Trois rôles émergent de façon récurrente : scientifique des données (Data Scientist), analyste de données (Data Analyst) et analyste en intelligence d\'affaires (Business Intelligence Analyst). Bien qu\'ils partagent un intérêt commun pour les données et l\'analyse, ces trois professions se distinguent par leurs objectifs, leurs méthodes et leurs contributions aux organisations.'
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
    'article1-title': 'Data Scientist, Data Analyst, and Business Intelligence Analyst',
    'article1-subtitle': 'A clear analysis of different analytical roles and their specific contributions to organizations.',
    'article1-intro': 'In today\'s professional landscape, data-related professions are multiplying and diversifying. Three roles emerge recurrently: Data Scientist, Data Analyst, and Business Intelligence Analyst. While they share a common interest in data and analysis, these three professions differ in their objectives, methods, and contributions to organizations.'
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
    if (lang[key]) {
      element.textContent = lang[key];
    }
  });
}

// Initialiser au chargement de la page
window.addEventListener('DOMContentLoaded', function() {
  updateContent();
  updateLanguageButton();
});
