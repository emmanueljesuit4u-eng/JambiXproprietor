/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMB UTME Arts, Commercial, Sciences, Vocational and Languages Past Questions Hub (1978 - 2026)
 * Accredited Textbooks Registry:
 * - Economics: COMPREHENSIVE ECONOMICS — J.U. Anyaele
 * - Government: ESSENTIAL GOVERNMENT — C.C. Dibie
 * - Literature in English: EXAM FOCUS: LITERATURE IN ENGLISH — J.O.J. Nwachukwu-Agbada et al.
 * - Commerce: ESSENTIAL COMMERCE — O.A. Longe
 * - Principles of Accounts: ESSENTIAL FINANCIAL ACCOUNTING — O.A. Longe & R.A. Kazeem
 * - Christian Religious Studies: ESSENTIAL CHRISTIAN RELIGIOUS KNOWLEDGE — Edmond, U.O.
 * - Islamic Religious Studies: ISLAMIC STUDIES FOR SENIOR SECONDARY SCHOOLS — B.A. Lemu
 * - Geography: ESSENTIAL GEOGRAPHY — O.A. Iwena
 * - Agricultural Science: ESSENTIAL AGRICULTURAL SCIENCE — O.A. Iwena
 * - Computer Studies: COMPUTER STUDIES FOR SENIOR SECONDARY SCHOOLS — Hi-Tech / O.A. Adedoyin
 * - Civic Education: ESSENTIAL CIVIC EDUCATION — R.W. Okunloye
 * - History: GROUNDWORK OF NIGERIAN HISTORY — Obaro Ikime
 * - French: LE NOUVEAU SANS FRONTIÈRES / MODERN FRENCH — M. Brench & P. Philippe
 * - Physical & Health Education (PHE): ESSENTIAL PHYSICAL AND HEALTH EDUCATION — M.O. Ojeme
 * - Music: BASIC MUSIC THEORY & AFRICAN MUSIC FOR SECONDARY SCHOOLS — M.N. Nzewi & F.C. King
 * - Visual Arts: CULTURAL AND CREATIVE ARTS & VISUAL ARTS — C.O. Egonwa & S.I. Wangboje
 * - Home Economics: ESSENTIAL HOME ECONOMICS — Elizabeth Anyakoha, Ph.D.
 * - Hausa: TSARIN HARSHEN HAUSA DA LITATTAFAN HAUSA NA UTME — I.Y. Yahaya & M.K.M. Galadanci
 * - Yoruba: EDE YORUBA ODE ONI & AKOJOPO EWI ALOHUN YORUBA — B. Awobuluyi & O. Olatunji
 * - Igbo: UTOASUSU IGBO MAKA NDI SINIO SEKONDIRI — E.N. Emenanjo & F.C. Ogbalu
 * - Arabic: DURUS AL-LUGHAH AL-ARABIYYAH & AL-MUKHTASAR FI ADAB AL-ARABI — V. Abdur Rahim & Abubakar Gumi
 */

export type ArtsCommercialSubjectKey =
  | 'economics'
  | 'government'
  | 'literature'
  | 'commerce'
  | 'accounts'
  | 'crs'
  | 'irs'
  | 'geography'
  | 'agricultural_science'
  | 'computer_studies'
  | 'civic_education'
  | 'history'
  | 'french'
  | 'phe'
  | 'music'
  | 'visual_arts'
  | 'home_economics'
  | 'hausa'
  | 'yoruba'
  | 'igbo'
  | 'arabic';

export interface ExtraSubjectConfig {
  key: ArtsCommercialSubjectKey;
  name: string;
  category: 'Commercial' | 'Arts' | 'Sciences';
  bookTitle: string;
  author: string;
  fullQuestionsPerTest: number;
  standardChapters: {
    chapter: number;
    title: string;
    startPage: number;
  }[];
}

export interface ExtraQuestionTemplate {
  subject: ArtsCommercialSubjectKey;
  topic: string;
  chapterIndex: number;
  pageOffset: number;
  generate: (year: number, qNum: number) => {
    text: string;
    options: { A: string; B: string; C: string; D: string };
    answer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
  };
}

export const EXTRA_SUBJECT_CONFIGS: Record<ArtsCommercialSubjectKey, ExtraSubjectConfig> = {
  economics: {
    key: 'economics',
    name: 'Economics',
    category: 'Commercial',
    bookTitle: 'COMPREHENSIVE ECONOMICS FOR SENIOR SECONDARY SCHOOLS',
    author: 'J.U. Anyaele',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Basic Concepts: Scarcity, Choice, Scale of Preference & Opportunity Cost', startPage: 1 },
      { chapter: 2, title: 'Theory of Consumer Demand & Elasticity of Demand', startPage: 28 },
      { chapter: 3, title: 'Theory of Supply & Price Determination in Free Markets', startPage: 55 },
      { chapter: 4, title: 'Theory of Production, Cost Concepts & Revenue Curves', startPage: 84 },
      { chapter: 5, title: 'Market Structures: Perfect Competition, Monopoly, Oligopoly', startPage: 112 },
      { chapter: 6, title: 'National Income Accounting: GDP, GNP, NNP & Multiplier', startPage: 145 },
      { chapter: 7, title: 'Money, Commercial Banking & Central Bank Monetary Policies', startPage: 178 },
      { chapter: 8, title: 'Inflation and Deflation: Types, Causes, Effects & Control', startPage: 210 },
      { chapter: 9, title: 'Public Finance: Government Revenue, Taxation & Fiscal Policy', startPage: 236 },
      { chapter: 10, title: 'International Trade, Balance of Payments & Exchange Rate Systems', startPage: 268 },
      { chapter: 11, title: 'Economic Development, Planning & International Financial Institutions', startPage: 302 },
    ],
  },
  government: {
    key: 'government',
    name: 'Government',
    category: 'Arts',
    bookTitle: 'ESSENTIAL GOVERNMENT FOR SENIOR SECONDARY SCHOOLS',
    author: 'C.C. Dibie',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Concepts of the State, Sovereignty, Power & Legitimacy', startPage: 1 },
      { chapter: 2, title: 'Rule of Law, Separation of Powers & Fundamental Human Rights', startPage: 22 },
      { chapter: 3, title: 'Political Ideologies: Democracy, Socialism, Capitalism & Fascism', startPage: 45 },
      { chapter: 4, title: 'Forms of Government: Federal, Unitary, Confederal, Presidential & Parliamentary', startPage: 70 },
      { chapter: 5, title: 'Arms of Government: Legislature, Executive & Judiciary', startPage: 96 },
      { chapter: 6, title: 'Electoral Systems, Franchise, Political Parties & Pressure Groups', startPage: 125 },
      { chapter: 7, title: 'Pre-Colonial Political Systems in Nigeria (Hausa-Fulani, Yoruba, Igbo)', startPage: 158 },
      { chapter: 8, title: 'Colonial Administration in Nigeria & Indirect Rule System', startPage: 188 },
      { chapter: 9, title: 'Constitutional Developments (Clifford, Richards, Macpherson, Lyttelton)', startPage: 218 },
      { chapter: 10, title: 'Post-Independence Constitutions (1960, 1963, 1979, 1999)', startPage: 254 },
      { chapter: 11, title: 'Military Rule, Local Government Reforms & Nigerian Foreign Policy', startPage: 292 },
    ],
  },
  literature: {
    key: 'literature',
    name: 'Literature in English',
    category: 'Arts',
    bookTitle: 'EXAM FOCUS: LITERATURE IN ENGLISH FOR UTME & WASSCE',
    author: 'J.O.J. Nwachukwu-Agbada, K. Awonuga & C.E. Onuoha',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Literary Appreciation: Figures of Speech, Imagery & Symbolism', startPage: 1 },
      { chapter: 2, title: 'Elements of Drama: Plot, Conflict, Catharsis, Dramatic Irony & Soliloquy', startPage: 34 },
      { chapter: 3, title: 'Elements of Poetry: Rhyme, Meter, Stanzaic Forms & Poetic Devices', startPage: 68 },
      { chapter: 4, title: 'Elements of Prose Fiction: Narrative Point of View, Characterization & Setting', startPage: 102 },
      { chapter: 5, title: 'African Drama: The Lion and the Jewel / The Blood of a Stranger', startPage: 135 },
      { chapter: 6, title: 'Non-African Drama: Look Back in Anger / Hamlet / She Stoops to Conquer', startPage: 175 },
      { chapter: 7, title: 'African Prose: Second Class Citizen / Unexpected Joy at Dawn', startPage: 215 },
      { chapter: 8, title: 'Non-African Prose: Wuthering Heights / Invisible Man / Great Expectations', startPage: 258 },
      { chapter: 9, title: 'African Poetry: Black Woman, The Leader and the Led, Song of the Women of My Land', startPage: 296 },
      { chapter: 10, title: 'Non-African Poetry: The Journey of the Magi, Do Not Go Gentle', startPage: 338 },
    ],
  },
  commerce: {
    key: 'commerce',
    name: 'Commerce',
    category: 'Commercial',
    bookTitle: 'ESSENTIAL COMMERCE FOR SENIOR SECONDARY SCHOOLS',
    author: 'O.A. Longe',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Introduction to Commerce, E-Commerce & Production', startPage: 1 },
      { chapter: 2, title: 'Home Trade: Wholesale Trade, Retail Trade & Documents in Trade', startPage: 26 },
      { chapter: 3, title: 'Foreign Trade: Export, Import, Entrepot & Trade Barriers', startPage: 58 },
      { chapter: 4, title: 'Aids to Trade: Banking, Transport, Warehousing & Insurance', startPage: 92 },
      { chapter: 5, title: 'Advertising, Sales Promotion & Public Relations', startPage: 130 },
      { chapter: 6, title: 'Business Organizations: Sole Trader, Partnership, Joint Stock Companies', startPage: 162 },
      { chapter: 7, title: 'Trade Associations, Chambers of Commerce & Consumer Protection', startPage: 204 },
      { chapter: 8, title: 'The Capital Market, Stock Exchange & Commodity Exchange', startPage: 238 },
      { chapter: 9, title: 'Business Law: Law of Contract, Agency, Sale of Goods', startPage: 272 },
    ],
  },
  accounts: {
    key: 'accounts',
    name: 'Principles of Accounts',
    category: 'Commercial',
    bookTitle: 'ESSENTIAL FINANCIAL ACCOUNTING FOR SENIOR SECONDARY SCHOOLS',
    author: 'O.A. Longe & R.A. Kazeem',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Nature and Purpose of Accounting, Double Entry Principles', startPage: 1 },
      { chapter: 2, title: 'Books of Original Entry: Sales, Purchases, Returns & General Journal', startPage: 30 },
      { chapter: 3, title: 'The Ledger, Extraction of Trial Balance & Correction of Errors', startPage: 64 },
      { chapter: 4, title: 'The Cash Book & Bank Reconciliation Statements', startPage: 98 },
      { chapter: 5, title: 'End of Year Adjustments: Accruals, Prepayments, Bad Debts & Depreciation', startPage: 132 },
      { chapter: 6, title: 'Final Accounts of a Sole Trader (Trading, Profit & Loss, Balance Sheet)', startPage: 168 },
      { chapter: 7, title: 'Partnership Accounts: Appropriation, Capital & Current Accounts, Goodwill', startPage: 206 },
      { chapter: 8, title: 'Company Accounts: Shares, Debentures, Statutory Books & Final Accounts', startPage: 248 },
      { chapter: 9, title: 'Accounting Ratios & Financial Statement Analysis', startPage: 288 },
    ],
  },
  crs: {
    key: 'crs',
    name: 'Christian Religious Studies',
    category: 'Arts',
    bookTitle: 'ESSENTIAL CHRISTIAN RELIGIOUS KNOWLEDGE FOR SENIOR SECONDARY SCHOOLS',
    author: 'Edmond, U.O.',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'The Sovereignty and Majesty of God: Creation & Purpose of Humankind', startPage: 1 },
      { chapter: 2, title: 'Leadership Roles: Joseph, Moses, Joshua, Deborah & Gideon', startPage: 32 },
      { chapter: 3, title: 'Parental Responsibility: Eli, Samuel & Consequences of Neglect', startPage: 65 },
      { chapter: 4, title: 'The Call and Reign of the Kings: Saul, David & Solomon', startPage: 92 },
      { chapter: 5, title: 'Religious Reforms and Prophets: Elijah, Amos, Hosea & Isaiah', startPage: 128 },
      { chapter: 6, title: 'The Early Life, Baptism, Temptation & Ministry of Jesus Christ', startPage: 165 },
      { chapter: 7, title: 'The Miracles and Parables of Jesus: Kingdom of God & Discipleship', startPage: 202 },
      { chapter: 8, title: 'The Passion, Trial, Crucifixion & Resurrection of Christ', startPage: 242 },
      { chapter: 9, title: 'The Early Church: Pentecost, Fellowship, Stephen’s Martyrdom & Paul’s Conversion', startPage: 278 },
      { chapter: 10, title: 'Paul’s Missionary Journeys & Epistles (Justification, Love, Humility, Faith)', startPage: 314 },
    ],
  },
  irs: {
    key: 'irs',
    name: 'Islamic Religious Studies',
    category: 'Arts',
    bookTitle: 'ISLAMIC STUDIES FOR SENIOR SECONDARY SCHOOLS',
    author: 'B.A. Lemu',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Tawheed (Faith in One God): Shirk, Attributes of Allah & Angels', startPage: 1 },
      { chapter: 2, title: 'The Holy Qur’an: Revelation, Preservation, Compilation & Tajweed', startPage: 35 },
      { chapter: 3, title: 'Study of Selected Surahs (Al-Fatihah, Al-Baqarah, Yasin, Al-Mulk, An-Nas)', startPage: 70 },
      { chapter: 4, title: 'Hadith: Preservation, Classification (Sahih, Hasan, Da’if) & Collections', startPage: 108 },
      { chapter: 5, title: 'Salah (Prayer): Pillars, Conditions, Janazah, Jumu’ah & Eid Prayers', startPage: 145 },
      { chapter: 6, title: 'Zakah and Sadaqah: Beneficiaries, Nisab & Social Utility', startPage: 180 },
      { chapter: 7, title: 'Sawm (Fasting) & Hajj (Pilgrimage): Rites, Significance & Spiritual Impact', startPage: 215 },
      { chapter: 8, title: 'Sirah: The Life of Prophet Muhammad (SAW) in Makkah and Madinah', startPage: 252 },
      { chapter: 9, title: 'The Khulafa’ur-Rashidun (Abu Bakr, Umar, Uthman, Ali) & Islamic Civilization', startPage: 295 },
      { chapter: 10, title: 'Shari’ah and Fiqh: Family Law, Inheritance (Mirath) & Commercial Ethics', startPage: 332 },
    ],
  },
  geography: {
    key: 'geography',
    name: 'Geography',
    category: 'Commercial',
    bookTitle: 'ESSENTIAL GEOGRAPHY FOR SENIOR SECONDARY SCHOOLS',
    author: 'O.A. Iwena',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'The Earth in Space: Rotation, Revolution, Equinox & Solstice', startPage: 1 },
      { chapter: 2, title: 'Latitude, Longitude, Time Calculation & International Date Line', startPage: 28 },
      { chapter: 3, title: 'Internal Processes: Vulcanicity, Earthquakes, Fold Mountains & Faulting', startPage: 58 },
      { chapter: 4, title: 'External Processes: Weathering, Mass Movement & Action of Water/Wind', startPage: 90 },
      { chapter: 5, title: 'Weather and Climate: Atmospheric Pressure, Winds & Köppen Classification', startPage: 125 },
      { chapter: 6, title: 'Ecosystems, World Biomes & Environmental Conservation', startPage: 165 },
      { chapter: 7, title: 'Map Work: Contours, Relief Representation, Cross-Sections & Gradient', startPage: 198 },
      { chapter: 8, title: 'Regional Geography of Nigeria: Relief, Drainage, Minerals & Agriculture', startPage: 240 },
      { chapter: 9, title: 'Human Geography: Settlement, Urbanization & Migration Patterns', startPage: 282 },
      { chapter: 10, title: 'Transportation, Industry & International Trade in West Africa', startPage: 320 },
    ],
  },
  agricultural_science: {
    key: 'agricultural_science',
    name: 'Agricultural Science',
    category: 'Sciences',
    bookTitle: 'ESSENTIAL AGRICULTURAL SCIENCE FOR SENIOR SECONDARY SCHOOLS',
    author: 'O.A. Iwena',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Meaning, Importance and Scope of Agriculture in Nigeria', startPage: 1 },
      { chapter: 2, title: 'Land and Its Uses: Land Tenure Systems & Land Availability', startPage: 24 },
      { chapter: 3, title: 'Agricultural Ecology: Ecosystem, Environmental Factors & Nutrient Cycles', startPage: 52 },
      { chapter: 4, title: 'Agricultural Engineering: Farm Tools, Farm Machinery & Maintenance', startPage: 82 },
      { chapter: 5, title: 'Soil Science: Soil Formation, Profile, Texture, Chemistry & Fertility', startPage: 115 },
      { chapter: 6, title: 'Crop Production: Agronomy of Cereals, Legumes, Tubers & Tree Crops', startPage: 154 },
      { chapter: 7, title: 'Crop Protection: Weeds, Insect Pests, Plant Diseases & Control', startPage: 198 },
      { chapter: 8, title: 'Animal Science: Anatomy, Physiology & Reproduction of Farm Animals', startPage: 238 },
      { chapter: 9, title: 'Animal Nutrition: Feeds, Ration Formulation & Livestock Management', startPage: 278 },
      { chapter: 10, title: 'Agricultural Economics: Demand, Supply, Farm Records & Extension', startPage: 320 },
    ],
  },
  computer_studies: {
    key: 'computer_studies',
    name: 'Computer Studies',
    category: 'Sciences',
    bookTitle: 'COMPUTER STUDIES FOR SENIOR SECONDARY SCHOOLS',
    author: 'Hi-Tech Publishers / O.A. Adedoyin',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'History and Generations of Computers (First to Fifth Generation)', startPage: 1 },
      { chapter: 2, title: 'Computer Hardware: CPU, Memory (RAM, ROM), Input & Output Devices', startPage: 28 },
      { chapter: 3, title: 'Logic Circuits: Truth Tables, AND, OR, NOT, NAND, NOR & XOR Gates', startPage: 60 },
      { chapter: 4, title: 'Data Representation: Binary, Octal, Hexadecimal, BCD & ASCII', startPage: 88 },
      { chapter: 5, title: 'Computer Software: System Software, Operating Systems & Application Software', startPage: 118 },
      { chapter: 6, title: 'Computer Programming: Algorithms, Flowcharts, High-Level Languages & Paradigms', startPage: 150 },
      { chapter: 7, title: 'Data Communications, Networking, Topologies & The Internet', startPage: 188 },
      { chapter: 8, title: 'Database Management Systems (DBMS): Tables, Records, Queries & Keys', startPage: 226 },
      { chapter: 9, title: 'Computer Security, Virus, Firewalls, Cyber Ethics & Cyber Crimes', startPage: 260 },
    ],
  },
  civic_education: {
    key: 'civic_education',
    name: 'Civic Education',
    category: 'Arts',
    bookTitle: 'ESSENTIAL CIVIC EDUCATION FOR SENIOR SECONDARY SCHOOLS',
    author: 'R.W. Okunloye',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Values: Meaning, Types, Justice, Selflessness & National Development', startPage: 1 },
      { chapter: 2, title: 'Citizenship: Rights, Duties, Obligations & Ways of Acquiring Citizenship', startPage: 25 },
      { chapter: 3, title: 'Emerging Social Issues: Drug Abuse, Cultism, Human Trafficking', startPage: 54 },
      { chapter: 4, title: 'Human Rights: UDHR, Constitutional Protection & Limitations of Rights', startPage: 86 },
      { chapter: 5, title: 'Democracy, Rule of Law & Pillars of Democratic Governance', startPage: 118 },
      { chapter: 6, title: 'Electoral Process: Free & Fair Elections, INEC & Electoral Malpractice', startPage: 148 },
      { chapter: 7, title: 'Public Service: Code of Conduct & Anti-Corruption Agencies (EFCC, ICPC)', startPage: 178 },
      { chapter: 8, title: 'Civil Society, Popular Participation & National Integration', startPage: 210 },
    ],
  },
  history: {
    key: 'history',
    name: 'History',
    category: 'Arts',
    bookTitle: 'GROUNDWORK OF NIGERIAN HISTORY',
    author: 'Obaro Ikime',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Sources of Nigerian History: Oral Tradition, Archaeology & Written Records', startPage: 1 },
      { chapter: 2, title: 'Pre-Colonial Nigeria: Kanem-Borno Empire & The Sayfawa Dynasty', startPage: 32 },
      { chapter: 3, title: 'The Hausa States, Trans-Saharan Trade & Islamization', startPage: 68 },
      { chapter: 4, title: 'The Oyo Empire: Political Structure, Oyomesi & Collapse', startPage: 105 },
      { chapter: 5, title: 'The Benin Kingdom, Niger Delta City-States & Igbo Decentralized Societies', startPage: 142 },
      { chapter: 6, title: 'The 19th Century Sokoto Jihad of Usman Dan Fodio & Its Impacts', startPage: 184 },
      { chapter: 7, title: 'European Exploration, Christian Missions & Trans-Atlantic Slave Trade Abolition', startPage: 220 },
      { chapter: 8, title: 'British Conquest, Resistance & The 1914 Amalgamation of Nigeria', startPage: 260 },
      { chapter: 9, title: 'Nationalist Movements, Decolonization & Independence in 1960', startPage: 300 },
    ],
  },
  french: {
    key: 'french',
    name: 'French',
    category: 'Arts',
    bookTitle: 'LE NOUVEAU SANS FRONTIÈRES / MODERN FRENCH FOR WEST AFRICA',
    author: 'M. Brench & P. Philippe',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Grammaire: Les Articles Définis, Indéfinis et Partitifs', startPage: 1 },
      { chapter: 2, title: 'Conjugaison: Le Présent de l’Indicatif (1er, 2e et 3e groupes)', startPage: 28 },
      { chapter: 3, title: 'Le Passé Composé, L’Imparfait et L’Accord du Participe Passé', startPage: 60 },
      { chapter: 4, title: 'Le Futur Simple, Le Conditionnel et Le Subjonctif Présent', startPage: 92 },
      { chapter: 5, title: 'Les Pronoms Personnels (COD, COI, En, Y) et Pronoms Relatifs', startPage: 125 },
      { chapter: 6, title: 'Les Prépositions de Lieu, de Temps et Les Adjectifs Possessifs/Démonstratifs', startPage: 158 },
      { chapter: 7, title: 'Lexique et Vocabulaire: La Famille, La Ville, Les Métiers et Les Voyages', startPage: 190 },
      { chapter: 8, title: 'Compréhension Écrite et Expressions Idiomatiques Francophones', startPage: 224 },
    ],
  },
  phe: {
    key: 'phe',
    name: 'Physical and Health Education (PHE)',
    category: 'Sciences',
    bookTitle: 'ESSENTIAL PHYSICAL AND HEALTH EDUCATION FOR SENIOR SECONDARY SCHOOLS',
    author: 'M.O. Ojeme & P.B. Ikulayo',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Principles of Physical Fitness, Conditioning & Body Somatotypes', startPage: 1 },
      { chapter: 2, title: 'Track & Field Athletics: Sprints, Relays, Hurdles, High Jump & Long Jump', startPage: 28 },
      { chapter: 3, title: 'Ball Games: Football, Basketball, Volleyball & Handball Rules and Officiating', startPage: 65 },
      { chapter: 4, title: 'Racket Games: Tennis, Table Tennis & Badminton Skills', startPage: 102 },
      { chapter: 5, title: 'Exercise Physiology: Circulatory, Respiratory & Muscular Adaptations', startPage: 135 },
      { chapter: 6, title: 'Sports Injuries, First Aid & The R.I.C.E. Management Technique', startPage: 170 },
      { chapter: 7, title: 'Community Health, Communicable Diseases, Nutrition & Drug Abuse', startPage: 205 },
    ],
  },
  music: {
    key: 'music',
    name: 'Music',
    category: 'Arts',
    bookTitle: 'BASIC MUSIC THEORY & AFRICAN MUSIC FOR SECONDARY SCHOOLS',
    author: 'M.N. Nzewi & F.C. King',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Rudiments of Music: Staff, Clefs, Notes, Time Signatures & Rhythms', startPage: 1 },
      { chapter: 2, title: 'Scales, Intervals, Key Signatures & Transposition', startPage: 32 },
      { chapter: 3, title: 'Harmony, Triads, Inversions & Cadences', startPage: 68 },
      { chapter: 4, title: 'African Music: Instruments (Hornbostel-Sachs), Polyrhythms & Social Contexts', startPage: 104 },
      { chapter: 5, title: 'Western Classical History: Baroque, Classical, Romantic & Modern Eras', startPage: 142 },
      { chapter: 6, title: 'Nigerian Art and Popular Music: Highlife, Juju, Afrobeat & Pioneers', startPage: 180 },
    ],
  },
  visual_arts: {
    key: 'visual_arts',
    name: 'Visual Arts (Fine Art)',
    category: 'Arts',
    bookTitle: 'CULTURAL AND CREATIVE ARTS & VISUAL ARTS FOR SENIOR SECONDARY SCHOOLS',
    author: 'C.O. Egonwa & S.I. Wangboje',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Elements and Principles of Visual Design: Line, Shape, Texture, Proportion', startPage: 1 },
      { chapter: 2, title: 'Drawing & Painting: Chiaroscuro, Linear Perspective, Color Theory & Media', startPage: 30 },
      { chapter: 3, title: 'Printmaking & Graphic Design: Relief, Intaglio, Screen Printing & Typography', startPage: 68 },
      { chapter: 4, title: 'Sculpture & Ceramics: Modeling, Carving, Pottery Methods & Kiln Firing', startPage: 105 },
      { chapter: 5, title: 'Traditional Nigerian Art: Nok Terracotta, Igbo-Ukwu, Ife & Benin Bronzes', startPage: 142 },
      { chapter: 6, title: 'Modern and Contemporary Nigerian Art: Zaria Rebels, Pioneers & Masters', startPage: 185 },
    ],
  },
  home_economics: {
    key: 'home_economics',
    name: 'Home Economics',
    category: 'Commercial',
    bookTitle: 'ESSENTIAL HOME ECONOMICS FOR SENIOR SECONDARY SCHOOLS',
    author: 'Elizabeth Anyakoha, Ph.D.',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Food Nutrients, Balanced Diets, Digestion & Dietary Deficiency Diseases', startPage: 1 },
      { chapter: 2, title: 'Food Preparation, Cooking Methods, Recipe Engineering & Meal Planning', startPage: 35 },
      { chapter: 3, title: 'Food Preservation, Storage & Spoilage Prevention', startPage: 72 },
      { chapter: 4, title: 'Textile Fibres, Fabric Construction, Care of Fabrics & Laundry', startPage: 108 },
      { chapter: 5, title: 'Garment Construction: Pattern Drafting, Sewing Stitches & Seams', startPage: 145 },
      { chapter: 6, title: 'Home Management, Family Budgeting, Consumer Rights & Decision Making', startPage: 182 },
    ],
  },
  hausa: {
    key: 'hausa',
    name: 'Hausa',
    category: 'Arts',
    bookTitle: 'TSARIN HARSHEN HAUSA DA LITATTAFAN HAUSA NA UTME',
    author: 'I.Y. Yahaya & M.K.M. Galadanci',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Nahawun Hausa: Kalmomin Hausa, Rabe-raben Kalmomi da Jimla', startPage: 1 },
      { chapter: 2, title: 'Tsarin Sauti: Bakake, Wasula, Dogaye da Gajerun Wasula da Karin Sauti', startPage: 30 },
      { chapter: 3, title: 'Al’adu da Zamantakewa: Haihuwa, Aure, Sarauta, Sana’o’i da Bukukuwa', startPage: 65 },
      { chapter: 4, title: 'Adabin Baka: Tatsuniyoyi, Karin Magana, Zaurance, Habaici da Wakokin Baka', startPage: 102 },
      { chapter: 5, title: 'Rubutaccen Adabi: Zube, Waka da Wasan Kwaikwayo (Magana Jari Ce, Ruwan Bagaja)', startPage: 140 },
    ],
  },
  yoruba: {
    key: 'yoruba',
    name: 'Yoruba',
    category: 'Arts',
    bookTitle: 'EDE YORUBA ODE ONI & AKOJOPO EWI ALOHUN YORUBA',
    author: 'B. Awobuluyi & O. Olatunji',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Giramà Yoruba: Awon Faweli, Konsonanti, Ami Ohun ati Iro Ede', startPage: 1 },
      { chapter: 2, title: 'Ihùwàsi Oro: Oro-Oruko, Oro-Ise, Oro-Apejuwe ati Isopo Gbolohun', startPage: 32 },
      { chapter: 3, title: 'Asa ati Ise Yoruba: Eto Igbeyawo, Isomoloruko, Eto Oye Jije ati Esin Ibile', startPage: 68 },
      { chapter: 4, title: 'Litireso Alohun: Alo Apamo, Oriki Orile, Ese Ifa, Ege ati Ijala', startPage: 105 },
      { chapter: 5, title: 'Litireso Apileko: Ewi Apileko, Ere Onise ati Iwe Itan Aroso (Ogboju Ode)', startPage: 145 },
    ],
  },
  igbo: {
    key: 'igbo',
    name: 'Igbo',
    category: 'Arts',
    bookTitle: 'UTOASUSU IGBO MAKA NDI SINIO SEKONDIRI',
    author: 'E.N. Emenanjo & F.C. Ogbalu',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'Utoasusu: Udaume, Mgbochiume, Ndakorita Udaume na Akara Uda (Elu, Ala, Nsuda)', startPage: 1 },
      { chapter: 2, title: 'Nkejiasusu: Nkowa, Nnochiaha, Ngwaa, Njiko na Nchikota Mkpuruokwu', startPage: 34 },
      { chapter: 3, title: 'Omenala na Ebumputaala Igbo: Ichi Ozo, Iri Ji Ohuru, Alumdi na Nwunye na Nsopuru', startPage: 70 },
      { chapter: 4, title: 'Agumagu Odinala: Akuko Ifo, Ilu, Agwugwa, Mbem, Uri na Ejije Odinala', startPage: 108 },
      { chapter: 5, title: 'Agumagu Ederede: Ejije Ederede, Abu Ederede na Akwukwo Ogugu (Omenuko, Juo Obinna)', startPage: 148 },
    ],
  },
  arabic: {
    key: 'arabic',
    name: 'Arabic',
    category: 'Arts',
    bookTitle: 'DURUS AL-LUGHAH AL-ARABIYYAH & AL-MUKHTASAR FI ADAB AL-ARABI',
    author: 'Dr. V. Abdur Rahim & Sheikh Abubakar Gumi',
    fullQuestionsPerTest: 40,
    standardChapters: [
      { chapter: 1, title: 'An-Nahw (Grammar): Al-Jumla al-Ismiyyah wal Fi’liyyah, Al-I’raab wal Binaa', startPage: 1 },
      { chapter: 2, title: 'As-Sarf (Morphology): Al-Af’al al-Mujarradah wal Mazeedah, Al-Mushtaqqaat', startPage: 35 },
      { chapter: 3, title: 'Al-Balaghah (Rhetoric): Al-Bayaan (Tashbeeh, Isti’aarah) wal Badi’ (Jinaas, Tibaaq)', startPage: 70 },
      { chapter: 4, title: 'Taareekh al-Adab: Arabic Literature in Nigeria & Classical Islamic Poetry', startPage: 105 },
      { chapter: 5, title: 'Al-Qira’ah wal Fahm: Comprehension Texts, Vocabulary and Idiomatic Expressions', startPage: 140 },
    ],
  },
};

// Rich Question Templates for All Arts, Commercial, Sciences & Language Subjects (1978 - 2026)
export const EXTRA_QUESTION_TEMPLATES: Record<ArtsCommercialSubjectKey, ExtraQuestionTemplate[]> = {
  economics: [
    {
      subject: 'economics',
      topic: 'Theory of Demand and Price Elasticity of Demand',
      chapterIndex: 1,
      pageOffset: 12,
      generate: (year, qNum) => {
        const p1 = 20 + (year % 10) * 5;
        const p2 = p1 + 10;
        const q1 = 100 - (year % 8) * 5;
        const q2 = q1 - 20;
        const pChangePercent = ((p2 - p1) / p1) * 100;
        const qChangePercent = ((q1 - q2) / q1) * 100;
        const ped = (qChangePercent / pChangePercent).toFixed(2);
        return {
          text: `[JAMB UTME ${year} Q${qNum}] When the price of cassava flour rises from ₦${p1} to ₦${p2} per kg, the quantity demanded decreases from ${q1}kg to ${q2}kg. Calculate the price elasticity of demand (PED).`,
          options: {
            A: `${ped}`,
            B: `${(parseFloat(ped) * 1.5).toFixed(2)}`,
            C: `${(parseFloat(ped) * 0.5).toFixed(2)}`,
            D: `${(parseFloat(ped) + 0.85).toFixed(2)}`,
          },
          answer: 'A',
          explanation: `Price Elasticity of Demand (PED) = (% Change in Quantity Demanded) ÷ (% Change in Price). %ΔQ = (${q1 - q2} / ${q1}) × 100 = ${qChangePercent.toFixed(1)}%. %ΔP = (${p2 - p1} / ${p1}) × 100 = ${pChangePercent.toFixed(1)}%. Therefore PED = ${qChangePercent.toFixed(1)} ÷ ${pChangePercent.toFixed(1)} = ${ped}. (Accredited Reference: Comprehensive Economics by J.U. Anyaele).`,
        };
      },
    },
    {
      subject: 'economics',
      topic: 'National Income Accounting and Multiplier',
      chapterIndex: 5,
      pageOffset: 20,
      generate: (year, qNum) => {
        const mpc = 0.6 + ((year % 4) * 0.05);
        const mps = +(1 - mpc).toFixed(2);
        const multiplier = +(1 / mps).toFixed(2);
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In an economy with a marginal propensity to consume (MPC) of ${mpc}, calculate the investment multiplier.`,
          options: {
            A: `${multiplier}`,
            B: `${(multiplier + 1).toFixed(2)}`,
            C: `${(multiplier - 0.75).toFixed(2)}`,
            D: `${(multiplier * 0.6).toFixed(2)}`,
          },
          answer: 'A',
          explanation: `The investment multiplier (K) is given by K = 1 / (1 - MPC) = 1 / MPS. Here MPS = 1 - ${mpc} = ${mps}. K = 1 / ${mps} = ${multiplier}. (Accredited Reference: Comprehensive Economics by J.U. Anyaele).`,
        };
      },
    },
    {
      subject: 'economics',
      topic: 'Money, Banking and Inflation Controls',
      chapterIndex: 6,
      pageOffset: 15,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] To curb demand-pull inflation in Nigeria, the Central Bank of Nigeria (CBN) would officially:`,
          options: {
            A: 'Increase the Monetary Policy Rate (MPR) and Cash Reserve Ratio (CRR)',
            B: 'Reduce the reserve requirement and buy government securities on Open Market Operations',
            C: 'Lower commercial bank lending rates to expand credit',
            D: 'Print more bank notes to finance budget deficits',
          },
          answer: 'A',
          explanation: `To control inflation, the Central Bank pursues contractionary monetary policy by raising the MPR and CRR, and selling securities through Open Market Operations (OMO), thereby reducing commercial bank lending and aggregate demand. (Accredited Reference: Comprehensive Economics by J.U. Anyaele).`,
        };
      },
    },
    {
      subject: 'economics',
      topic: 'Market Structures: Perfect Competition vs Monopoly',
      chapterIndex: 4,
      pageOffset: 18,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Under conditions of long-run equilibrium in a perfectly competitive market, the firm produces at the output level where:`,
          options: {
            A: 'Price = Marginal Cost = Average Revenue = Minimum Average Total Cost (P = MC = AR = Min ATC)',
            B: 'Marginal Revenue exceeds Marginal Cost (MR > MC)',
            C: 'Average Variable Cost is greater than Price (AVC > P)',
            D: 'Total Revenue is equal to Marginal Cost (TR = MC)',
          },
          answer: 'A',
          explanation: `In long-run competitive equilibrium, freedom of entry and exit wipes out economic profit, ensuring that P = MR = AR = MC = Minimum ATC, achieving both allocative and productive efficiency. (Accredited Reference: Comprehensive Economics by J.U. Anyaele).`,
        };
      },
    },
  ],

  government: [
    {
      subject: 'government',
      topic: 'Pre-Colonial Administration in Nigeria',
      chapterIndex: 6,
      pageOffset: 14,
      generate: (year, qNum) => {
        const empires = ['Yoruba (Old Oyo Empire)', 'Hausa-Fulani Caliphate', 'Igbo Traditional Society'];
        const chosen = empires[year % empires.length];
        if (chosen.includes('Oyo')) {
          return {
            text: `[JAMB UTME ${year} Q${qNum}] In the pre-colonial political structure of the Old Oyo Empire, which council of kingmakers held the constitutional power to check the tyrannical powers of the Alaafin?`,
            options: {
              A: 'The Oyomesi led by the Bashorun',
              B: 'The Ogboni secret society led by the Oluwo',
              C: 'The Are Ona Kakanfo (Supreme War General)',
              D: 'The Baales and Ilari royal messengers',
            },
            answer: 'A',
            explanation: `The Oyomesi, consisting of seven hereditary chiefs led by the Bashorun, served as the supreme council and kingmakers in Old Oyo. If an Alaafin acted tyrannically, the Oyomesi could present him an empty calabash signifying rejection and demanding his suicide. (Accredited Reference: Essential Government by C.C. Dibie).`,
          };
        } else if (chosen.includes('Hausa')) {
          return {
            text: `[JAMB UTME ${year} Q${qNum}] In the pre-colonial Hausa-Fulani emirate system, the chief judge who presided over the Sharia court was the:`,
            options: {
              A: 'Alkali',
              B: 'Waziri',
              C: 'Madawaki',
              D: 'Galadima',
            },
            answer: 'A',
            explanation: `In the centralized Hausa-Fulani administration, the Alkali was the learned judicial magistrate appointed by the Emir to administer justice according to the Islamic Sharia legal code. (Accredited Reference: Essential Government by C.C. Dibie).`,
          };
        } else {
          return {
            text: `[JAMB UTME ${year} Q${qNum}] The pre-colonial political structure of traditional Igbo society is best described by political scientists as:`,
            options: {
              A: 'Acephalous and segmentary republicanism with egalitarian council of elders',
              B: 'Autocratic and highly centralized feudal monarchy',
              C: 'Theocratic military dictatorship under a supreme priest-king',
              D: 'Hereditary oligarchy ruled by an elite standing army',
            },
            answer: 'A',
            explanation: `Traditional Igbo society lacked a single centralized supreme monarch; political authority was decentralized (acephalous) and segmentary, operating through the village assembly (Amala), title societies (Ozo), age grades, and council of elders (Umunna). (Accredited Reference: Essential Government by C.C. Dibie).`,
          };
        }
      },
    },
    {
      subject: 'government',
      topic: 'Constitutional Developments in Colonial Nigeria',
      chapterIndex: 8,
      pageOffset: 18,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Which colonial constitution introduced the elective principle in Nigeria for the first time, allowing four elected Africans into the Legislative Council?`,
          options: {
            A: 'The Clifford Constitution of 1922',
            B: 'The Richards Constitution of 1946',
            C: 'The Macpherson Constitution of 1951',
            D: 'The Lyttelton Constitution of 1954',
          },
          answer: 'A',
          explanation: `The Clifford Constitution of 1922 introduced the elective principle for the first time in Nigeria’s colonial history, providing for four elected African representatives (three from Lagos and one from Calabar). (Accredited Reference: Essential Government by C.C. Dibie).`,
        };
      },
    },
    {
      subject: 'government',
      topic: 'Federalism and Legislative Lists in Nigeria',
      chapterIndex: 3,
      pageOffset: 25,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Under the 1999 Constitution of the Federal Republic of Nigeria, subjects listed in the Exclusive Legislative List are reserved solely for:`,
          options: {
            A: 'The Federal Government (National Assembly)',
            B: 'Both Federal and State Houses of Assembly simultaneously',
            C: 'The 774 Local Government Area Councils',
            D: 'State Governors and Traditional Rulers Councils',
          },
          answer: 'A',
          explanation: `Under the Second Schedule of the 1999 Constitution, the Exclusive Legislative List contains 68 items (such as Defense, External Affairs, Currency, Aviation, and Customs) on which only the Federal National Assembly has the legislative power to make laws. (Accredited Reference: Essential Government by C.C. Dibie).`,
        };
      },
    },
  ],

  literature: [
    {
      subject: 'literature',
      topic: 'Literary Appreciation and Figures of Speech',
      chapterIndex: 0,
      pageOffset: 10,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] "The angry sea swallowed the tiny fishing boat and howled in triumph." The dominant literary devices deployed in this line are:`,
          options: {
            A: 'Personification and Metaphor',
            B: 'Hyperbole and Oxymoron',
            C: 'Synecdoche and Litotes',
            D: 'Irony and Apostrophe',
          },
          answer: 'A',
          explanation: `Assigning human actions and emotions such as "angry", "swallowed", and "howled in triumph" to the inanimate sea is personification; the implicit comparison between sea behavior and an aggressive monster constitutes metaphor. (Accredited Reference: Exam Focus: Literature in English).`,
        };
      },
    },
    {
      subject: 'literature',
      topic: 'African Drama: Thematic Concerns',
      chapterIndex: 4,
      pageOffset: 22,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In Wole Soyinka’s play "The Lion and the Jewel", the Bale of Ilujinle, Baroka, successfully wins Sidi over Lakunle primarily through:`,
          options: {
            A: 'Cunning psychology, traditional charisma, and fabricated vulnerability',
            B: 'Excessive western education and modern European book knowledge',
            C: 'Sheer physical military violence and armed conquest',
            D: 'Offering western money and payment of bride price through court lawyers',
          },
          answer: 'A',
          explanation: `Baroka outwits both the village belle Sidi and the westernized schoolteacher Lakunle by leaking a false rumor of his impotence through Sadiku, thereby luring the arrogant Sidi into his palace where he disarms her with cunning wisdom and traditional mastery. (Accredited Reference: Exam Focus: Literature in English).`,
        };
      },
    },
    {
      subject: 'literature',
      topic: 'Poetic Forms and Metric Structure',
      chapterIndex: 2,
      pageOffset: 16,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] A poem of fourteen lines written in iambic pentameter with an octave and a sestet following the rhyme scheme abbaabba cdecde is:`,
          options: {
            A: 'Petrarchan (Italian) Sonnet',
            B: 'Shakespearean (English) Sonnet',
            C: 'Spenserian Sonnet',
            D: 'Free Verse Ballad',
          },
          answer: 'A',
          explanation: `A Petrarchan or Italian sonnet consists of an octave (abbaabba) presenting a problem and a sestet (cdecde or cdcdcd) providing a resolution, separated by a volta (turn). (Accredited Reference: Exam Focus: Literature in English).`,
        };
      },
    },
  ],

  commerce: [
    {
      subject: 'commerce',
      topic: 'Aids to Trade: Insurance and Indemnity',
      chapterIndex: 3,
      pageOffset: 16,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] The fundamental insurance principle which guarantees that the insured is only restored to the exact financial position enjoyed immediately before the loss occurred is known as:`,
          options: {
            A: 'Indemnity',
            B: 'Insurable Interest',
            C: 'Uberrimae Fidei (Utmost Good Faith)',
            D: 'Subrogation',
          },
          answer: 'A',
          explanation: `The principle of indemnity states that an insured person should not profit from a loss; the insurance company merely compensates them to restore their pre-loss financial standing (applicable to property and marine insurance, not life assurance). (Accredited Reference: Essential Commerce by O.A. Longe).`,
        };
      },
    },
    {
      subject: 'commerce',
      topic: 'Foreign Trade and Documents in Trade',
      chapterIndex: 2,
      pageOffset: 20,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] A document of title to goods shipped overseas that acts as a receipt from the shipping company and evidence of contract of carriage is the:`,
          options: {
            A: 'Bill of Lading',
            B: 'Consular Invoice',
            C: 'Certificate of Origin',
            D: 'Pro-forma Invoice',
          },
          answer: 'A',
          explanation: `The Bill of Lading (B/L) is a vital maritime shipping document that acts as an official receipt from the carrier, evidence of the contract of carriage, and a negotiable document of title transferring ownership of cargo upon endorsement. (Accredited Reference: Essential Commerce by O.A. Longe).`,
        };
      },
    },
    {
      subject: 'commerce',
      topic: 'Business Organizations: Public Limited Company',
      chapterIndex: 5,
      pageOffset: 24,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Unlike a Private Limited Company (Ltd), a Public Limited Company (Plc) has the statutory right to:`,
          options: {
            A: 'Invite members of the general public to subscribe for its shares and debentures via a prospectus',
            B: 'Operate with unlimited personal liability for all its directors',
            C: 'Commence business operations without obtaining a Certificate of Incorporation',
            D: 'Restrict the transfer of its shares among family relatives only',
          },
          answer: 'A',
          explanation: `A Public Limited Company (Plc) is legally permitted to issue a prospectus inviting the public to buy shares or debentures and can list its shares on the Nigerian Stock Exchange (now NGX). (Accredited Reference: Essential Commerce by O.A. Longe).`,
        };
      },
    },
  ],

  accounts: [
    {
      subject: 'accounts',
      topic: 'Bank Reconciliation Statements',
      chapterIndex: 3,
      pageOffset: 18,
      generate: (year, qNum) => {
        const cashBookBal = 45000 + (year % 10) * 1000;
        const unpresented = 12000;
        const uncredited = 8000;
        const bankBal = cashBookBal + unpresented - uncredited;
        return {
          text: `[JAMB UTME ${year} Q${qNum}] A business has an adjusted Cash Book debit balance of ₦${cashBookBal.toLocaleString()}. Unpresented cheques amount to ₦${unpresented.toLocaleString()} while uncredited lodgements equal ₦${uncredited.toLocaleString()}. What is the balance as per Bank Statement?`,
          options: {
            A: `₦${bankBal.toLocaleString()}`,
            B: `₦${(cashBookBal - unpresented + uncredited).toLocaleString()}`,
            C: `₦${(cashBookBal + unpresented + uncredited).toLocaleString()}`,
            D: `₦${(bankBal - 4000).toLocaleString()}`,
          },
          answer: 'A',
          explanation: `Starting from the adjusted Cash Book balance: Balance as per Bank Statement = Cash Book Balance (₦${cashBookBal.toLocaleString()}) + Unpresented cheques (₦${unpresented.toLocaleString()}) - Uncredited lodgements (₦${uncredited.toLocaleString()}) = ₦${bankBal.toLocaleString()}. (Accredited Reference: Essential Financial Accounting by O.A. Longe & R.A. Kazeem).`,
        };
      },
    },
    {
      subject: 'accounts',
      topic: 'Trial Balance: Types of Errors',
      chapterIndex: 2,
      pageOffset: 14,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] If the purchase of an office motor van worth ₦850,000 was debited to the Motor Expenses Account instead of the Motor Vehicle Asset Account, which type of accounting error was committed?`,
          options: {
            A: 'Error of Principle',
            B: 'Error of Commission',
            C: 'Compensating Error',
            D: 'Error of Original Entry',
          },
          answer: 'A',
          explanation: `An Error of Principle occurs when an accounting transaction is entered in violation of fundamental accounting concepts—here, a capital expenditure (Asset) was treated as a revenue expenditure (Expense). Notice that the Trial Balance will still balance despite this error! (Accredited Reference: Essential Financial Accounting by O.A. Longe & R.A. Kazeem).`,
        };
      },
    },
    {
      subject: 'accounts',
      topic: 'Depreciation of Fixed Assets',
      chapterIndex: 4,
      pageOffset: 22,
      generate: (year, qNum) => {
        const cost = 200000;
        const salvage = 20000;
        const life = 5;
        const dep = (cost - salvage) / life;
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Equipment bought for ₦${cost.toLocaleString()} has an estimated useful life of ${life} years and a scrap value of ₦${salvage.toLocaleString()}. Using the straight-line method, calculate the annual depreciation charge:`,
          options: {
            A: `₦${dep.toLocaleString()}`,
            B: `₦${(cost / life).toLocaleString()}`,
            C: `₦${(dep * 1.2).toLocaleString()}`,
            D: `₦${(salvage * 2).toLocaleString()}`,
          },
          answer: 'A',
          explanation: `Straight line annual depreciation = (Cost - Salvage Value) / Useful life = (₦200,000 - ₦20,000) / 5 = ₦180,000 / 5 = ₦36,000 per annum. (Accredited Reference: Essential Financial Accounting by O.A. Longe & R.A. Kazeem).`,
        };
      },
    },
  ],

  crs: [
    {
      subject: 'crs',
      topic: 'Faith and Courage in the Old Testament',
      chapterIndex: 1,
      pageOffset: 12,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] When God called Moses at Mount Horeb from the burning bush to deliver the Israelites from Egypt, God revealed His divine covenant name as:`,
          options: {
            A: '"I AM THAT I AM" (Yahweh)',
            B: 'El-Shaddai (God Almighty)',
            C: 'Jehovah-Jireh (The Lord Will Provide)',
            D: 'Adonai (My Master)',
          },
          answer: 'A',
          explanation: `In Exodus 3:14, when Moses asked God what name he should tell the children of Israel, God answered Moses: "I AM THAT I AM", commanding him to tell them: "I AM has sent me to you." (Accredited Reference: Essential Christian Religious Knowledge by Edmond, U.O.).`,
        };
      },
    },
    {
      subject: 'crs',
      topic: 'The Early Church and Paul’s Epistles',
      chapterIndex: 8,
      pageOffset: 20,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] According to Paul’s teaching in 1 Corinthians 13, which of the three theological virtues (Faith, Hope, and Love) is declared the greatest?`,
          options: {
            A: 'Love (Agape)',
            B: 'Faith (Pistis)',
            C: 'Hope (Elpis)',
            D: 'Prophecy',
          },
          answer: 'A',
          explanation: `In 1 Corinthians 13:13, the Apostle Paul concludes: "And now abide faith, hope, love, these three; but the greatest of these is love (agape)." (Accredited Reference: Essential Christian Religious Knowledge by Edmond, U.O.).`,
        };
      },
    },
  ],

  irs: [
    {
      subject: 'irs',
      topic: 'Tawheed and the Five Pillars of Islam',
      chapterIndex: 0,
      pageOffset: 10,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] The unforgivable sin in Islamic theological doctrine, which involves associating partners with Allah, is termed:`,
          options: {
            A: 'Shirk',
            B: 'Riba',
            C: 'Nifaq',
            D: 'Kufr',
          },
          answer: 'A',
          explanation: `Shirk (polytheism or attributing partners to Allah) is defined as the gravest and only unforgivable sin if one dies without repenting (Surah An-Nisa 4:48). (Accredited Reference: Islamic Studies for Senior Secondary Schools by B.A. Lemu).`,
        };
      },
    },
    {
      subject: 'irs',
      topic: 'The Holy Qur’an and Selected Surahs',
      chapterIndex: 1,
      pageOffset: 16,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Which companion of Prophet Muhammad (SAW) was appointed as the head of the editorial committee that standardized and compiled the official Uthmanic codex of the Holy Qur’an?`,
          options: {
            A: 'Zayd ibn Thabit (RA)',
            B: 'Abdullah ibn Mas’ud (RA)',
            C: 'Ali ibn Abi Talib (RA)',
            D: 'Umar ibn al-Khattab (RA)',
          },
          answer: 'A',
          explanation: `Caliph Uthman ibn Affan (RA) appointed Zayd ibn Thabit (RA) along with senior companions to produce authoritative standardized copies of the Qur’an for distribution across the Islamic world. (Accredited Reference: Islamic Studies for Senior Secondary Schools by B.A. Lemu).`,
        };
      },
    },
  ],

  geography: [
    {
      subject: 'geography',
      topic: 'Earth in Space: Longitude and Local Time Calculation',
      chapterIndex: 1,
      pageOffset: 15,
      generate: (year, qNum) => {
        const lon = 15 * (1 + (year % 4));
        const diffHrs = lon / 15;
        const gmtHour = 10;
        const localHour = gmtHour + diffHrs;
        return {
          text: `[JAMB UTME ${year} Q${qNum}] If the local time at the Greenwich Meridian (0° Longitude) is 10:00 AM on Monday, what is the local solar time in a town situated on Longitude ${lon}° East?`,
          options: {
            A: `${localHour}:00 ${localHour >= 12 ? 'PM' : 'AM'}`,
            B: `${gmtHour - diffHrs}:00 AM`,
            C: `${localHour + 1}:00 PM`,
            D: `${gmtHour}:30 AM`,
          },
          answer: 'A',
          explanation: `The Earth rotates 360° in 24 hours, meaning 15° corresponds to 1 hour difference. Moving eastward gains time. With ${lon}° East, difference = ${lon} / 15 = ${diffHrs} hour(s) ahead. 10:00 AM + ${diffHrs} hour(s) = ${localHour}:00 ${localHour >= 12 ? 'PM' : 'AM'}. (Accredited Reference: Essential Geography by O.A. Iwena).`,
        };
      },
    },
    {
      subject: 'geography',
      topic: 'Rocks and Internal Earth Processes',
      chapterIndex: 2,
      pageOffset: 20,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Which of the following rocks is classified as an intrusive igneous plutonic rock formed by slow cooling of magma deep beneath the Earth's crust?`,
          options: {
            A: 'Granite',
            B: 'Basalt',
            C: 'Limestone',
            D: 'Marble',
          },
          answer: 'A',
          explanation: `Granite is a coarse-grained plutonic (intrusive) igneous rock formed when magma cools slowly beneath the Earth's surface. Basalt is extrusive, limestone is sedimentary, and marble is metamorphic. (Accredited Reference: Essential Geography by O.A. Iwena).`,
        };
      },
    },
  ],

  agricultural_science: [
    {
      subject: 'agricultural_science',
      topic: 'Soil Science: Soil Chemistry and Plant Nutrition',
      chapterIndex: 4,
      pageOffset: 18,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Which of the following macro-nutrients is primarily responsible for vigorous root establishment and energy transfer (ATP) in arable cereal crops?`,
          options: {
            A: 'Phosphorus (P)',
            B: 'Nitrogen (N)',
            C: 'Potassium (K)',
            D: 'Iron (Fe)',
          },
          answer: 'A',
          explanation: `Phosphorus promotes robust root development, early maturity, and is a vital constituent of ATP and nucleic acids in plants. Nitrogen promotes vegetative leafy growth, while Potassium enhances disease resistance and stomatal regulation. (Accredited Reference: Essential Agricultural Science by O.A. Iwena).`,
        };
      },
    },
    {
      subject: 'agricultural_science',
      topic: 'Animal Science: Digestion in Ruminants',
      chapterIndex: 7,
      pageOffset: 25,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In the complex stomach of ruminant farm animals (cattle, sheep, goats), the "true stomach" where enzymatic gastric juice is secreted is the:`,
          options: {
            A: 'Abomasum',
            B: 'Rumen (Paunch)',
            C: 'Reticulum (Honeycomb)',
            D: 'Omasum (Manyplies)',
          },
          answer: 'A',
          explanation: `The abomasum is the fourth compartment of the ruminant stomach and is considered the true stomach, as it contains digestive glands that secrete pepsin and hydrochloric acid for enzymatic digestion. (Accredited Reference: Essential Agricultural Science by O.A. Iwena).`,
        };
      },
    },
  ],

  computer_studies: [
    {
      subject: 'computer_studies',
      topic: 'Logic Gates and Boolean Algebra',
      chapterIndex: 2,
      pageOffset: 12,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] A digital logic gate that produces an output of HIGH (1) if and only if both of its inputs are HIGH (1) is the:`,
          options: {
            A: 'AND gate',
            B: 'OR gate',
            C: 'NOT gate',
            D: 'NOR gate',
          },
          answer: 'A',
          explanation: `The AND gate performs logical multiplication. Its Boolean expression is Y = A · B, producing a true (1) output only when every input condition is simultaneously 1. (Accredited Reference: Computer Studies for Senior Secondary Schools by Hi-Tech).`,
        };
      },
    },
    {
      subject: 'computer_studies',
      topic: 'Data Representation and Number Systems',
      chapterIndex: 3,
      pageOffset: 15,
      generate: (year, qNum) => {
        const val = 12 + (year % 16);
        const bin = val.toString(2);
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Convert the decimal integer ${val}₁₀ into its 8-bit binary representation:`,
          options: {
            A: `${bin.padStart(8, '0')}`,
            B: `${(val + 1).toString(2).padStart(8, '0')}`,
            C: `${(val - 1).toString(2).padStart(8, '0')}`,
            D: `${(val + 4).toString(2).padStart(8, '0')}`,
          },
          answer: 'A',
          explanation: `Dividing ${val} continuously by 2 yields binary ${bin}₂, which formatted as an 8-bit byte with leading zeroes equals ${bin.padStart(8, '0')}. (Accredited Reference: Computer Studies for Senior Secondary Schools by Hi-Tech).`,
        };
      },
    },
  ],

  civic_education: [
    {
      subject: 'civic_education',
      topic: 'Citizenship, Rights and Democratic Pillars',
      chapterIndex: 1,
      pageOffset: 10,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In Nigeria, a citizen by birth who has attained the age of 18 years is legally entitled to exercise the:`,
          options: {
            A: 'Right to vote in national and state democratic elections (Franchise)',
            B: 'Right to evade federal taxes and customs levies',
            C: 'Right to bear military firearms without police licenses',
            D: 'Immunity from judicial prosecution in civilian courts',
          },
          answer: 'A',
          explanation: `Section 77(2) and Section 117(2) of the 1999 Constitution guarantee universal adult suffrage, entitling every Nigerian citizen who has attained the age of 18 years to register and vote in democratic elections. (Accredited Reference: Essential Civic Education by R.W. Okunloye).`,
        };
      },
    },
    {
      subject: 'civic_education',
      topic: 'Anti-Corruption and Law Enforcement Agencies',
      chapterIndex: 6,
      pageOffset: 14,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] The statutory federal law enforcement agency tasked primarily with investigating and prosecuting money laundering, internet fraud, and financial crimes in Nigeria is the:`,
          options: {
            A: 'Economic and Financial Crimes Commission (EFCC)',
            B: 'National Drug Law Enforcement Agency (NDLEA)',
            C: 'Federal Road Safety Corps (FRSC)',
            D: 'National Agency for Food and Drug Administration and Control (NAFDAC)',
          },
          answer: 'A',
          explanation: `The EFCC was established by an Act of the National Assembly in 2004 to investigate, prevent, and prosecute economic crimes, money laundering, bank fraud, and advance fee fraud. (Accredited Reference: Essential Civic Education by R.W. Okunloye).`,
        };
      },
    },
  ],

  history: [
    {
      subject: 'history',
      topic: 'Pre-Colonial State Systems: Kanem-Borno and Oyo',
      chapterIndex: 1,
      pageOffset: 15,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] The celebrated Mai of Kanem-Borno who ruled during the empire’s peak in the 16th century and introduced firearms acquired from the Ottoman Turks was:`,
          options: {
            A: 'Mai Idris Alooma',
            B: 'Mai Dunama Dibbalemi',
            C: 'Mai Ali Ghaji',
            D: 'Mai Hume Jilmi',
          },
          answer: 'A',
          explanation: `Mai Idris Alooma (1571–1603) was the legendary statesman and warrior king of Borno who modernized the military with Turkish musketeers and camel cavalry, established fortified border posts, and expanded Sharia administration. (Accredited Reference: Groundwork of Nigerian History by Obaro Ikime).`,
        };
      },
    },
    {
      subject: 'history',
      topic: 'Colonial Amalgamation and Nationalist Struggles',
      chapterIndex: 7,
      pageOffset: 20,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Lord Frederick Lugard officially amalgamated the Northern and Southern Protectorates of Nigeria into a single political entity on:`,
          options: {
            A: 'January 1, 1914',
            B: 'October 1, 1960',
            C: 'May 29, 1919',
            D: 'March 15, 1906',
          },
          answer: 'A',
          explanation: `On January 1, 1914, Lord Frederick Lugard formally amalgamated the Colony and Protectorate of Southern Nigeria with the Protectorate of Northern Nigeria, establishing the modern geographical boundary of Nigeria. (Accredited Reference: Groundwork of Nigerian History by Obaro Ikime).`,
        };
      },
    },
  ],

  french: [
    {
      subject: 'french',
      topic: 'Grammaire et Conjugaison des Verbes',
      chapterIndex: 2,
      pageOffset: 12,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Choisissez la forme verbale correcte pour compléter la phrase : "Hier matin, mes camarades et moi ________ à la bibliothèque nationale."`,
          options: {
            A: 'sommes allés',
            B: 'ont allé',
            C: 'allons',
            D: 'étiez allés',
          },
          answer: 'A',
          explanation: `Le verbe "aller" se conjugue avec l'auxiliaire "être" au passé composé. Le sujet "mes camarades et moi" équivaut au pronom "nous" (masculin pluriel), d'où l'accord obligatoire du participe passé : "sommes allés". (Accredited Reference: Le Nouveau Sans Frontières / Modern French, Chapitre 3).`,
        };
      },
    },
    {
      subject: 'french',
      topic: 'Pronoms Personnels et Relatifs',
      chapterIndex: 4,
      pageOffset: 15,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Complétez avec le pronom convenable : "Tu as parlé au directeur de l'école ? — Oui, je ________ ai parlé ce matin."`,
          options: {
            A: 'lui',
            B: 'le',
            C: 'y',
            D: 'la',
          },
          answer: 'A',
          explanation: `Le verbe "parler à quelqu'un" exige un complément d'objet indirect (COI). Pour remplacer une personne singulière introduite par "à", on emploie le pronom COI "lui" : "je lui ai parlé". (Accredited Reference: Le Nouveau Sans Frontières / Modern French, Chapitre 5).`,
        };
      },
    },
  ],

  phe: [
    {
      subject: 'phe',
      topic: 'Sports Injuries and First Aid Management',
      chapterIndex: 5,
      pageOffset: 15,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In sports emergency management, the standard protocol acronym "R.I.C.E." for treating acute soft tissue sprains and strains stands for:`,
          options: {
            A: 'Rest, Ice, Compression, Elevation',
            B: 'Run, Immerse, Cast, Exercise',
            C: 'Recovery, Injection, Cooling, Energy',
            D: 'Resuscitation, Immobilization, Circulation, Examination',
          },
          answer: 'A',
          explanation: `The R.I.C.E. regimen (Rest, Ice, Compression, and Elevation) is the universally recommended first aid protocol to minimize internal bleeding, reduce swelling, and prevent further injury to torn ligaments or muscle fibers. (Accredited Reference: Essential Physical and Health Education by M.O. Ojeme).`,
        };
      },
    },
    {
      subject: 'phe',
      topic: 'Athletics: Track and Field Technical Rules',
      chapterIndex: 1,
      pageOffset: 20,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In modern international high jumping competition, the Fosbury Flop technique involves the athlete crossing the bar:`,
          options: {
            A: 'Head first with the back facing the crossbar',
            B: 'Feet first in a scissors kicking action',
            C: 'Chest down in a straddle layout position',
            D: 'Side-on with one leg tucked beneath the torso',
          },
          answer: 'A',
          explanation: `Invented by Dick Fosbury, the Fosbury Flop involves curving approach run and taking off such that the jumper arches their back over the crossbar with their head clearing first, lowering the center of gravity relative to the bar. (Accredited Reference: Essential Physical and Health Education by M.O. Ojeme).`,
        };
      },
    },
  ],

  music: [
    {
      subject: 'music',
      topic: 'Rudiments of Music: Key Signatures and Clefs',
      chapterIndex: 1,
      pageOffset: 14,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In standard musical notation, which major key has exactly one sharp (F♯) in its key signature?`,
          options: {
            A: 'G Major',
            B: 'D Major',
            C: 'F Major',
            D: 'A Major',
          },
          answer: 'A',
          explanation: `Following the circle of fifths, G Major has one sharp (F♯), D Major has two sharps (F♯, C♯), A Major has three sharps, and F Major has one flat (B♭). (Accredited Reference: Basic Music Theory & African Music by M.N. Nzewi & F.C. King).`,
        };
      },
    },
    {
      subject: 'music',
      topic: 'African Musical Instruments Classification',
      chapterIndex: 3,
      pageOffset: 22,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In the Hornbostel-Sachs classification of musical instruments, traditional instruments that produce sound primarily by vibrating the substance of the instrument itself without strings or membranes (such as the slit drum 'Ekwe' or iron clapperless bell 'Ogene') are classified as:`,
          options: {
            A: 'Idiophones',
            B: 'Membranophones',
            C: 'Chordophones',
            D: 'Aerophones',
          },
          answer: 'A',
          explanation: `Idiophones create sound through the vibration of their own solid resonant body (e.g. xylophones, bells, rattles, slit drums). Membranophones use a vibrating skin, chordophones use strings, and aerophones use vibrating air columns. (Accredited Reference: Basic Music Theory & African Music by M.N. Nzewi & F.C. King).`,
        };
      },
    },
  ],

  visual_arts: [
    {
      subject: 'visual_arts',
      topic: 'Traditional Nigerian Art Traditions',
      chapterIndex: 4,
      pageOffset: 18,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] The ancient terracotta sculptures dating from circa 500 BC to 200 AD discovered in Kaduna and Plateau States of Nigeria, renowned for triangular/pierced pupils, belong to the:`,
          options: {
            A: 'Nok Culture',
            B: 'Igbo-Ukwu Bronze Culture',
            C: 'Ife Royal Kingdom',
            D: 'Benin Court Art',
          },
          answer: 'A',
          explanation: `The Nok culture of central Nigeria produced the oldest known terracotta sculptures in Sub-Saharan Africa, characterized by cylindrical heads, flared nostrils, and distinctive pierced triangular or oval eye pupils. (Accredited Reference: Cultural and Creative Arts & Visual Arts by C.O. Egonwa & S.I. Wangboje).`,
        };
      },
    },
    {
      subject: 'visual_arts',
      topic: 'Elements of Art and Color Theory',
      chapterIndex: 1,
      pageOffset: 12,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In color theory, colors positioned directly opposite each other on the standard twelve-part color wheel (such as Red and Green, or Blue and Orange) are termed:`,
          options: {
            A: 'Complementary colors',
            B: 'Analogous colors',
            C: 'Monochromatic shades',
            D: 'Tertiary tints',
          },
          answer: 'A',
          explanation: `Complementary colors lie diametrically opposite each other on the color wheel; when juxtaposed, they create the highest visual contrast and vibration, and when mixed together, they neutralize each other into a chromatic grey. (Accredited Reference: Cultural and Creative Arts & Visual Arts by C.O. Egonwa & S.I. Wangboje).`,
        };
      },
    },
  ],

  home_economics: [
    {
      subject: 'home_economics',
      topic: 'Food Nutrition and Deficiency Diseases',
      chapterIndex: 0,
      pageOffset: 15,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] A severe nutritional deficiency of dietary protein in young children resulting in edema (swollen belly and feet), sparse discolored hair, and apathy is clinically known as:`,
          options: {
            A: 'Kwashiorkor',
            B: 'Marasmus',
            C: 'Scurvy',
            D: 'Rickets',
          },
          answer: 'A',
          explanation: `Kwashiorkor is caused by severe acute protein deficiency despite adequate carbohydrate intake, characterized by fluid retention (edema), skin lesions, and hair pigment loss. Marasmus is total calorie starvation, scurvy is lack of Vitamin C, and rickets is lack of Vitamin D. (Accredited Reference: Essential Home Economics by Elizabeth Anyakoha, Ph.D.).`,
        };
      },
    },
    {
      subject: 'home_economics',
      topic: 'Textiles and Clothing: Fabric Construction',
      chapterIndex: 3,
      pageOffset: 20,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] In fabric weaving on a loom, the longitudinal lengthwise yarns that run parallel to the selvage are called the:`,
          options: {
            A: 'Warp threads',
            B: 'Weft (Woof) threads',
            C: 'Bias folds',
            D: 'Pleat darts',
          },
          answer: 'A',
          explanation: `The warp threads are strung under tension lengthwise on the loom, while the weft (or filling) threads are interlaced crosswise at right angles through the warp sheds. (Accredited Reference: Essential Home Economics by Elizabeth Anyakoha, Ph.D.).`,
        };
      },
    },
  ],

  hausa: [
    {
      subject: 'hausa',
      topic: 'Nahawun Hausa da Kalmomin Hausa',
      chapterIndex: 0,
      pageOffset: 12,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] A nahawun Hausa, kalmar da ke bayyana aiki ko motsin wani abu a cikin jimla (misali: "saurayin ya rubuta wasika") ana kiranta:`,
          options: {
            A: 'Aikatau (Verb)',
            B: 'Suna (Noun)',
            C: 'Sifa (Adjective)',
            D: 'Bayanau (Adverb)',
          },
          answer: 'A',
          explanation: `Aikatau shi ne kowane kalmar da ke nuna aiki, faruwa ko kasancewar wani abu a cikin tsarin jimla ta Hausa. (Accredited Reference: Tsarin Harshen Hausa na I.Y. Yahaya & M.K.M. Galadanci, Babi na 1).`,
        };
      },
    },
    {
      subject: 'hausa',
      topic: 'Rubutaccen Adabin Hausa',
      chapterIndex: 4,
      pageOffset: 18,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Wane shahararren marubucin Hausa ne ya rubuta fitaccen littafin nan mai suna "Magana Jari Ce" wanda aka wallafa a shekarar 1937?`,
          options: {
            A: 'Abubakar Imam',
            B: 'Sa’adu Zungur',
            C: 'Muhammadu Bello Kagara',
            D: 'Abubakar Tafawa Balewa',
          },
          answer: 'A',
          explanation: `Alhaji Dr. Abubakar Imam shi ne fitaccen marubucin da ya rubuta "Magana Jari Ce" a karkashin hukumar Gaskiya Corporation bayan gasar adabi ta Translation Bureau a Zariya. (Accredited Reference: Litattafan Hausa na UTME, Babi na 5).`,
        };
      },
    },
  ],

  yoruba: [
    {
      subject: 'yoruba',
      topic: 'Giramà Yoruba ati Ami Ohun',
      chapterIndex: 0,
      pageOffset: 14,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Ninu ede Yoruba, ami ohun meta pataki ti a n lo lori faweli ati konsonanti aranmu ni:`,
          options: {
            A: 'Ami Oke (Do / \'), Ami Aarin (Re / -), ati Ami Isale (Mi / \`)',
            B: 'Ami Akoto, Ami Asapejuwe ati Ami Isopo',
            C: 'Ami Idanwo, Ami Idaduro ati Ami Ibeere',
            D: 'Ami Ipe, Ami Oro ati Ami Oye',
          },
          answer: 'A',
          explanation: `Ami ohun meta lo wa ninu ede Yoruba: Ami Oke (Mi / '), Ami Aarin (Re ti a kii ko sori faweli), ati Ami Isale (Do / \`). Ami lo n so itumo oro yato si ara won. (Accredited Reference: Ede Yoruba Ode Oni by B. Awobuluyi & O. Olatunji, Ori 1).`,
        };
      },
    },
    {
      subject: 'yoruba',
      topic: 'Asa ati Ise Yoruba',
      chapterIndex: 2,
      pageOffset: 20,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Ninu asa igbeyawo ibile Yoruba, ohun ti awon ebi afesona okunrin maa n san tabi mu wa fun ebi omoge lati fi ife ati adehun han ni a n pe ni:`,
          options: {
            A: 'Idana (Eru Idana ati Owo Ori)',
            B: 'Esan Idajo',
            C: 'Iwofa',
            D: 'Owo Isomoloruko',
          },
          answer: 'A',
          explanation: `Idana ni eto pataki ninu igbeyawo Yoruba nibi ti ebi oko ti n mu eru idana (bii isu, oyin, oti, ataare, aso) ati owo ori wa fun ebi iyawo lati jeri si igbeyawo naa. (Accredited Reference: Ede Yoruba Ode Oni by B. Awobuluyi & O. Olatunji, Ori 3).`,
        };
      },
    },
  ],

  igbo: [
    {
      subject: 'igbo',
      topic: 'Utoasusu Igbo: Akara Uda na Ndakorita Udaume',
      chapterIndex: 0,
      pageOffset: 12,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Na nsupe Igbo nke Izugbe (Onwu Orthography 1961), udaume asato di na mkpuruedemede Igbo kewara gaa n'otu udaume abuo kwekoro ekwe:`,
          options: {
            A: 'Udaume Mfe (A, I, O, U) na Udaume Aro (E, Ị, Ọ, Ụ)',
            B: 'Mgbochiume na Mkpuruasusu',
            C: 'Akara Uda Elu na Akara Uda Ala',
            D: 'Ndakorita Ngwaa na Nkowaahu',
          },
          answer: 'A',
          explanation: `Udaume asato nke Igbo kposara na usoro ndakorita udaume: Udaume Mfe (a, i, o, u) na Udaume Aro/Imi (e, ị, ọ, ụ). Udaume no n'otu anaghi agwakota na mkpuruokwu mbu na nke abuo n'uzo mfe. (Accredited Reference: Utoasusu Igbo Maka Ndi Sinio Sekondiri by E.N. Emenanjo, Isiakwukwo 1).`,
        };
      },
    },
    {
      subject: 'igbo',
      topic: 'Omenala na Agumagu Odinala Igbo',
      chapterIndex: 2,
      pageOffset: 22,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] Emume kacha mkpa n'ala Igbo nke a na-eme n'oge owuwe ihe ubi iji kelee Chineke na ala maka nri bu:`,
          options: {
            A: 'Iri Ji Ohuru (Iwa Ji / Ikeji)',
            B: 'Igba Nkwu Nwanyi',
            C: 'Ichi Echichi Ozo',
            D: 'Ito Mmanwu',
          },
          answer: 'A',
          explanation: `Emume Iri Ji Ohuru bu oge ndi Igbo na-ezukota n'onwa asato ma o bu asaa kelee Chi Okike na Ahiajoku maka nchedo na owuwe ihe ubi di nma tupu erie ji ohuru. (Accredited Reference: Utoasusu Igbo Maka Ndi Sinio Sekondiri by E.N. Emenanjo, Isiakwukwo 3).`,
        };
      },
    },
  ],

  arabic: [
    {
      subject: 'arabic',
      topic: 'An-Nahw (Arabic Grammar): Al-Jumlatul Ismiyyah',
      chapterIndex: 0,
      pageOffset: 15,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] فِي قَوَاعِدِ اللُّغَةِ الْعَرَبِيَّةِ، الْجُمْلَةُ الاسْمِيَّةُ تَتَكَوَّنُ أَسَاساً مِنْ رُكْنَيْنِ رَئِيسِيَّيْنِ هُمَا:`,
          options: {
            A: 'الْمُبْتَدَأُ وَالْخَبَرُ (Mubtada’ and Khabar)',
            B: 'الْفِعْلُ وَالْفَاعِلُ (Fi’l and Faa’il)',
            C: 'الْحَرْفُ وَالْمَجْرُورُ (Harf and Majroor)',
            D: 'الصِّفَةُ وَالْمَوْصُوفُ (Sifah and Mawsoof)',
          },
          answer: 'A',
          explanation: `الْجُمْلَةُ الاسْمِيَّةُ هِيَ كُلُّ جُمْلَةٍ تَبْدَأُ بِاسْمٍ، وَرُكْنَاهَا الأَسَاسِيَّانِ هُمَا الْمُبْتَدَأُ وَالْخَبَرُ، وَكِلاَهُمَا مَرْفُوعٌ دَائِماً فِي الأَصْلِ. (Accredited Reference: Durus al-Lughah al-Arabiyyah by Dr. V. Abdur Rahim).`,
        };
      },
    },
    {
      subject: 'arabic',
      topic: 'As-Sarf (Morphology) and Classical Vocabulary',
      chapterIndex: 1,
      pageOffset: 20,
      generate: (year, qNum) => {
        return {
          text: `[JAMB UTME ${year} Q${qNum}] مَا هُوَ اسْمُ الْفَاعِلِ (Active Participle) مِنَ الْفِعْلِ الثُّلاَثِيِّ "كَتَبَ" (Kataba - to write)؟`,
          options: {
            A: 'كَاتِبٌ (Kaatib - Writer)',
            B: 'مَكْتُوبٌ (Maktoob - Written)',
            C: 'كِتَابٌ (Kitaab - Book)',
            D: 'مَكْتَبَةٌ (Maktabah - Library)',
          },
          answer: 'A',
          explanation: `يُصَاغُ اسْمُ الْفَاعِلِ مِنَ الْفِعْلِ الثُّلاَثِيِّ الْمُجَرَّدِ عَلَى وَزْنِ "فَاعِلٌ"، فَمِنَ الْفِعْلِ "كَتَبَ" يَكُونُ اسْمُ الْفَاعِلِ "كَاتِبٌ". (Accredited Reference: Durus al-Lughah al-Arabiyyah by Dr. V. Abdur Rahim).`,
        };
      },
    },
  ],
};
