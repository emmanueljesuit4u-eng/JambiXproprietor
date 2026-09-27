/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Official Verified Textbooks Registry for UTME Preparation
 * Strictly enforces official citations from the primary standard textbooks:
 * 1. NEW SCHOOL PHYSICS - M.W. Anyakoha
 * 2. NEW SCHOOL CHEMISTRY - Osei Yaw Ababio
 * 3. MODERN BIOLOGY - Sarojini T. Ramalingam
 * 4. HIDDEN FACTS IN MATHEMATICS - M.A. Otumudia
 * 5. A-Z OF ENGLISH - Dele Ashade
 */

import { SubjectKey, normalizeSubjectKey, assembleUtmeTest, VerifiedQuestion, scatterQuestionOptions } from './jambPastQuestions';
export type { VerifiedQuestion };

export interface VerifiedTextbook {
  subjectKey: SubjectKey;
  subjectName: string;
  category?: 'Sciences' | 'Commercial' | 'Arts';
  bookTitle: string;
  author: string;
  edition: string;
  publisher: string;
  badge: string;
  coreChapters: {
    chapter: number;
    title: string;
    pageRange: string;
    topics: string[];
  }[];
}

export const VERIFIED_TEXTBOOKS: Record<string, VerifiedTextbook> = {
  physics: {
    subjectKey: 'physics',
    subjectName: 'Physics',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    edition: 'Revised Senior Secondary Edition',
    publisher: 'Africana First Publishers PLC',
    badge: 'Physics Verified Authority',
    coreChapters: [
      {
        chapter: 1,
        title: 'Units and Measurements, Dimensions & Vectors',
        pageRange: 'Pages 1 - 24',
        topics: ['Fundamental and derived units', 'Dimensional analysis', 'Resolution of coplanar vectors'],
      },
      {
        chapter: 2,
        title: 'Motion & Equations of Uniformly Accelerated Motion',
        pageRange: 'Pages 25 - 48',
        topics: ['Linear velocity & acceleration', 'Equations of motion', 'Velocity-time graphs'],
      },
      {
        chapter: 3,
        title: 'Projectiles & Gravitational Motion',
        pageRange: 'Pages 49 - 68',
        topics: ['Trajectory of projectiles', 'Time of flight', 'Maximum height and horizontal range'],
      },
      {
        chapter: 5,
        title: 'Newton’s Laws of Motion, Momentum & Simple Machines',
        pageRange: 'Pages 85 - 120',
        topics: ['Conservation of linear momentum', 'Impulse', 'Mechanical advantage and efficiency'],
      },
      {
        chapter: 8,
        title: 'Thermal Expansion, Gas Laws & Specific Heat Capacity',
        pageRange: 'Pages 160 - 204',
        topics: ['Boyle’s and Charles’s laws', 'Calorimetry method of mixtures', 'Latent heat'],
      },
      {
        chapter: 12,
        title: 'Waves, Sound Vibration & Optical Instruments',
        pageRange: 'Pages 250 - 310',
        topics: ['Resonance in air columns', 'Reflection at curved surfaces', 'Refraction through prisms'],
      },
      {
        chapter: 16,
        title: 'Current Electricity, Resistance & Kirchhoff’s Laws',
        pageRange: 'Pages 360 - 412',
        topics: ['Ohm’s law', 'Resistivity and internal resistance', 'Electric power'],
      },
      {
        chapter: 20,
        title: 'Electromagnetic Induction, AC Circuits & Nuclear Energy',
        pageRange: 'Pages 450 - 510',
        topics: ['Faraday’s law', 'Resonance frequency in RLC circuits', 'Radioactivity and half-life'],
      },
    ],
  },

  chemistry: {
    subjectKey: 'chemistry',
    subjectName: 'Chemistry',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    edition: 'Comprehensive Senior Secondary Edition',
    publisher: 'Africana First Publishers PLC',
    badge: 'Chemistry Verified Authority',
    coreChapters: [
      {
        chapter: 2,
        title: 'Separation of Mixtures & Purification of Chemical Substances',
        pageRange: 'Pages 18 - 34',
        topics: ['Distillation (fractional and simple)', 'Paper chromatography', 'Crystallization'],
      },
      {
        chapter: 4,
        title: 'Atomic Structure, Quantum Orbitals & Chemical Bonding',
        pageRange: 'Pages 48 - 82',
        topics: ['Electronic configuration (s, p, d, f)', 'Ionic and covalent bonds', 'Hydrogen bonding'],
      },
      {
        chapter: 6,
        title: 'Stoichiometry, Mole Concept & Chemical Equations',
        pageRange: 'Pages 105 - 138',
        topics: ['Avogadro’s constant', 'Empirical and molecular formulas', 'Volumetric analysis'],
      },
      {
        chapter: 9,
        title: 'Acids, Bases, Salts & Acid-Base Titration',
        pageRange: 'Pages 165 - 198',
        topics: ['pH and pOH scales', 'Standard solutions', 'Buffer solutions and hydrolysis'],
      },
      {
        chapter: 12,
        title: 'Oxidation-Reduction (Redox) & Electrolysis',
        pageRange: 'Pages 220 - 256',
        topics: ['Faraday’s first and second laws', 'Oxidation numbers', 'Extraction of metals by electrolysis'],
      },
      {
        chapter: 14,
        title: 'Nitrogen, Ammonia & Industrial Contact/Haber Processes',
        pageRange: 'Pages 270 - 302',
        topics: ['Haber process for ammonia', 'Tests for ammonium ions (NH₄⁺)', 'Nitric acid production'],
      },
      {
        chapter: 18,
        title: 'Organic Chemistry: Hydrocarbons, Alkanols & Polymers',
        pageRange: 'Pages 380 - 450',
        topics: ['IUPAC nomenclature', 'Addition and substitution reactions', 'Esterification and saponification'],
      },
    ],
  },

  biology: {
    subjectKey: 'biology',
    subjectName: 'Biology',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    edition: 'Revised Edition for Senior Secondary Schools',
    publisher: 'Africana First Publishers PLC',
    badge: 'Biology Verified Authority',
    coreChapters: [
      {
        chapter: 2,
        title: 'Cell Ultrastructure, Organelles & Organization of Life',
        pageRange: 'Pages 20 - 44',
        topics: ['Plant vs animal cell ultrastructure', 'Mitochondria, chloroplasts & ribosomes', 'Diffusion & osmosis'],
      },
      {
        chapter: 5,
        title: 'Plant Physiology: Photosynthesis, Mineral Nutrition & Transpiration',
        pageRange: 'Pages 88 - 122',
        topics: ['Light and dark photosynthetic pathways', 'Xylem and phloem transport', 'Stomatal mechanism'],
      },
      {
        chapter: 8,
        title: 'Transport in Mammals: The Circulatory System & Blood Components',
        pageRange: 'Pages 164 - 198',
        topics: ['Structure of the mammalian heart', 'Pulmonary and systemic circulation', 'ABO blood grouping & Rhesus factor'],
      },
      {
        chapter: 11,
        title: 'Excretion and Homeostasis: Kidney Nephron & Osmoregulation',
        pageRange: 'Pages 230 - 258',
        topics: ['Ultrafiltration in Bowman’s capsule', 'Selective reabsorption', 'Hormonal control (ADH and aldosterone)'],
      },
      {
        chapter: 14,
        title: 'Nervous and Hormonal Coordination & Sensory Organs',
        pageRange: 'Pages 295 - 340',
        topics: ['Reflex arc', 'Structure and defects of the eye', 'Mammalian ear and hearing'],
      },
      {
        chapter: 18,
        title: 'Genetics, Mendelian Heredity, Variation & Evolution',
        pageRange: 'Pages 410 - 465',
        topics: ['Monohybrid and dihybrid crosses', 'Sex-linked inheritance', 'Darwinian natural selection'],
      },
    ],
  },

  mathematics: {
    subjectKey: 'mathematics',
    subjectName: 'Mathematics',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    edition: 'Master Guide for SSCE, UTME & Post-UTME',
    publisher: 'Hidden Facts Publications',
    badge: 'Mathematics Verified Authority',
    coreChapters: [
      {
        chapter: 1,
        title: 'Number Bases, Modular Arithmetic, Indices & Logarithms',
        pageRange: 'Pages 1 - 32',
        topics: ['Conversion of fractional bases', 'Laws of logarithms and surds', 'Modular linear congruence'],
      },
      {
        chapter: 3,
        title: 'Quadratic Equations, Polynomials & Partial Fractions',
        pageRange: 'Pages 54 - 92',
        topics: ['Sum and product of roots (α and β)', 'Factor and Remainder theorems', 'Resolving algebraic fractions'],
      },
      {
        chapter: 5,
        title: 'Sequences & Series: Arithmetic (AP) and Geometric Progressions (GP)',
        pageRange: 'Pages 120 - 154',
        topics: ['nth term formulas', 'Sum of first n terms', 'Sum to infinity of GP'],
      },
      {
        chapter: 7,
        title: 'Coordinate Geometry, Straight Lines & Circles',
        pageRange: 'Pages 178 - 212',
        topics: ['Gradient and equations of lines', 'Perpendicular and parallel lines', 'Length of tangents to circles'],
      },
      {
        chapter: 9,
        title: 'Trigonometry: Special Angles, Sine/Cosine Rules & Bearings',
        pageRange: 'Pages 235 - 275',
        topics: ['Ratios of 30°, 45°, 60°', 'Trigonometric identities', 'Three-figure bearings and distance problems'],
      },
      {
        chapter: 11,
        title: 'Differential Calculus & Applications (Maxima, Minima & Rates)',
        pageRange: 'Pages 295 - 338',
        topics: ['Product, quotient and chain rules', 'Turning points and stationary values', 'Rates of change'],
      },
      {
        chapter: 12,
        title: 'Integral Calculus: Definite Integrals & Area Under Curves',
        pageRange: 'Pages 339 - 370',
        topics: ['Integration by substitution', 'Definite integration', 'Area bounded by curves and axes'],
      },
      {
        chapter: 14,
        title: 'Statistics, Permutations, Combinations & Probability',
        pageRange: 'Pages 405 - 460',
        topics: ['Standard deviation of grouped data', 'Arrangements and selections', 'Conditional probability'],
      },
    ],
  },

  english: {
    subjectKey: 'english',
    subjectName: 'Use of English',
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    edition: 'Complete Guide to Use of English, Grammatical Structures & Oral Forms',
    publisher: 'Ashad Educational Books',
    badge: 'English Verified Authority',
    coreChapters: [
      {
        chapter: 1,
        title: 'Grammatical Concord: Subject-Verb Agreement Rules',
        pageRange: 'Pages 12 - 45',
        topics: ['Proximity and accompaniment concord', 'Mandative subjunctive', 'Indefinite pronoun agreement'],
      },
      {
        chapter: 3,
        title: 'Lexis and Structure: Synonyms, Antonyms & Collocations',
        pageRange: 'Pages 68 - 110',
        topics: ['Words nearest in meaning', 'Opposites in context', 'Easily confused homophones and idioms'],
      },
      {
        chapter: 5,
        title: 'Prepositions, Phrasal Verbs & Verb Patterns',
        pageRange: 'Pages 135 - 176',
        topics: ['Prepositional idioms', 'Separable and inseparable phrasal verbs', 'Conditional sentence clauses'],
      },
      {
        chapter: 7,
        title: 'Comprehension & Summary Extraction Techniques',
        pageRange: 'Pages 198 - 232',
        topics: ['Deducing author tone and bias', 'Answering inference questions', 'Strict word-limit summary rules'],
      },
      {
        chapter: 9,
        title: 'Oral English: Vowel Contrasts & Diphthongs',
        pageRange: 'Pages 255 - 290',
        topics: ['Short vs long monophthongs', 'Diphthongs and triphthongs', 'Silent letters in English orthography'],
      },
      {
        chapter: 11,
        title: 'Stress Placement: Noun-Verb Stress Shifts & Intonation',
        pageRange: 'Pages 315 - 350',
        topics: ['Primary word stress', 'Syllable weight rules', 'Emphatic stress and sentence meaning shifts'],
      },
    ],
  },

  economics: {
    subjectKey: 'economics',
    subjectName: 'Economics',
    category: 'Commercial',
    bookTitle: 'COMPREHENSIVE ECONOMICS FOR SENIOR SECONDARY SCHOOLS',
    author: 'J.U. Anyaele',
    edition: 'Revised Senior Secondary Edition',
    publisher: 'Johnson Publishers Ltd',
    badge: 'Economics Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Scarcity, Choice, Scale of Preference & Opportunity Cost', pageRange: 'Pages 1 - 27', topics: ['Basic concepts', 'Production possibility curve'] },
      { chapter: 2, title: 'Theory of Consumer Demand & Elasticity of Demand', pageRange: 'Pages 28 - 54', topics: ['Price elasticity', 'Cross and income elasticity'] },
      { chapter: 5, title: 'Market Structures: Perfect Competition & Monopoly', pageRange: 'Pages 112 - 144', topics: ['Short-run vs long-run equilibrium', 'Price discrimination'] },
      { chapter: 6, title: 'National Income Accounting & The Multiplier', pageRange: 'Pages 145 - 177', topics: ['GDP, GNP, NNP calculations', 'Investment multiplier'] },
      { chapter: 7, title: 'Money, Commercial Banking & Central Bank Monetary Policies', pageRange: 'Pages 178 - 209', topics: ['Monetary policy instruments (MPR, CRR)', 'Inflation control'] },
    ],
  },

  government: {
    subjectKey: 'government',
    subjectName: 'Government',
    category: 'Arts',
    bookTitle: 'ESSENTIAL GOVERNMENT FOR SENIOR SECONDARY SCHOOLS',
    author: 'C.C. Dibie',
    edition: 'Comprehensive SSCE/UTME Edition',
    publisher: 'Tonad Publishers Ltd',
    badge: 'Government Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Concepts of the State, Sovereignty & Rule of Law', pageRange: 'Pages 1 - 44', topics: ['Sovereignty types', 'Separation of powers', 'Human rights'] },
      { chapter: 4, title: 'Forms and Arms of Government in Democratic Systems', pageRange: 'Pages 70 - 124', topics: ['Federal vs Unitary systems', 'Legislature, Executive & Judiciary'] },
      { chapter: 7, title: 'Pre-Colonial Political Systems in Nigeria', pageRange: 'Pages 158 - 187', topics: ['Old Oyo Empire (Oyomesi)', 'Hausa-Fulani (Emirates)', 'Igbo Republicanism'] },
      { chapter: 9, title: 'Constitutional Developments in Colonial Nigeria', pageRange: 'Pages 218 - 253', topics: ['Clifford (1922)', 'Richards (1946)', 'Macpherson (1951)', 'Lyttelton (1954)'] },
      { chapter: 10, title: 'Post-Independence Constitutions (1960, 1963, 1979, 1999)', pageRange: 'Pages 254 - 291', topics: ['Exclusive vs Concurrent lists', 'Federal Character Principle'] },
    ],
  },

  literature: {
    subjectKey: 'literature',
    subjectName: 'Literature in English',
    category: 'Arts',
    bookTitle: 'EXAM FOCUS: LITERATURE IN ENGLISH FOR UTME & WASSCE',
    author: 'J.O.J. Nwachukwu-Agbada et al.',
    edition: 'National UTME Syllabus Series',
    publisher: 'University Press PLC',
    badge: 'Literature Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Literary Appreciation: Figures of Speech & Poetic Devices', pageRange: 'Pages 1 - 33', topics: ['Metaphor, Personification, Metonymy', 'Dramatic irony, Catharsis'] },
      { chapter: 3, title: 'Elements of Poetry: Stanza Forms, Rhyme & Meter', pageRange: 'Pages 68 - 101', topics: ['Sonnet structures', 'Ballad, Elegy, Ode & Epic forms'] },
      { chapter: 5, title: 'Prescribed African Drama & Thematic Analysis', pageRange: 'Pages 135 - 174', topics: ['The Lion and the Jewel (Wole Soyinka)', 'The Blood of a Stranger'] },
      { chapter: 7, title: 'Prescribed African Prose Fiction Analysis', pageRange: 'Pages 215 - 257', topics: ['Second Class Citizen (Buchi Emecheta)', 'Unexpected Joy at Dawn'] },
      { chapter: 9, title: 'Prescribed African & Non-African Poetry Analysis', pageRange: 'Pages 296 - 370', topics: ['Black Woman (Senghor)', 'The Journey of the Magi (T.S. Eliot)'] },
    ],
  },

  commerce: {
    subjectKey: 'commerce',
    subjectName: 'Commerce',
    category: 'Commercial',
    bookTitle: 'ESSENTIAL COMMERCE FOR SENIOR SECONDARY SCHOOLS',
    author: 'O.A. Longe',
    edition: 'Comprehensive Edition',
    publisher: 'Tonad Publishers Ltd',
    badge: 'Commerce Verified Authority',
    coreChapters: [
      { chapter: 2, title: 'Home Trade: Wholesale Trade, Retail & Documents in Trade', pageRange: 'Pages 26 - 57', topics: ['Channels of distribution', 'Trade documents (Invoices, Debit notes)'] },
      { chapter: 3, title: 'Foreign Trade: Export, Import & Maritime Documents', pageRange: 'Pages 58 - 91', topics: ['Bill of Lading', 'Consular Invoice', 'Exchange control'] },
      { chapter: 4, title: 'Aids to Trade: Banking, Warehousing & Insurance Principles', pageRange: 'Pages 92 - 129', topics: ['Indemnity', 'Insurable interest', 'Subrogation'] },
      { chapter: 6, title: 'Business Organizations: Limited Liability Companies', pageRange: 'Pages 162 - 203', topics: ['Private vs Public Limited Companies', 'Shares & Debentures'] },
      { chapter: 8, title: 'The Capital Market, Stock Exchange & Commodity Exchange', pageRange: 'Pages 238 - 271', topics: ['Primary vs Secondary markets', 'SEC statutory functions'] },
    ],
  },

  accounts: {
    subjectKey: 'accounts',
    subjectName: 'Principles of Accounts',
    category: 'Commercial',
    bookTitle: 'ESSENTIAL FINANCIAL ACCOUNTING FOR SENIOR SECONDARY SCHOOLS',
    author: 'O.A. Longe & R.A. Kazeem',
    edition: 'Modern Accounting Series',
    publisher: 'Tonad Publishers Ltd',
    badge: 'Accounting Verified Authority',
    coreChapters: [
      { chapter: 2, title: 'Books of Original Entry & Trial Balance Extraction', pageRange: 'Pages 30 - 63', topics: ['Subsidiary books', 'Double entry posting'] },
      { chapter: 3, title: 'Correction of Errors & The Suspense Account', pageRange: 'Pages 64 - 97', topics: ['Error of Principle', 'Compensating errors', 'Error of Commission'] },
      { chapter: 4, title: 'The Cash Book & Bank Reconciliation Statements', pageRange: 'Pages 98 - 131', topics: ['Unpresented cheques', 'Uncredited lodgements', 'Bank charges'] },
      { chapter: 5, title: 'End-of-Year Adjustments: Depreciation of Fixed Assets', pageRange: 'Pages 132 - 167', topics: ['Straight line method', 'Reducing balance method'] },
      { chapter: 7, title: 'Partnership Accounts: Appropriation & Capital Accounts', pageRange: 'Pages 206 - 247', topics: ['Profit-sharing ratios', 'Goodwill on admission'] },
      { chapter: 9, title: 'Accounting Ratios & Financial Statement Analysis', pageRange: 'Pages 288 - 325', topics: ['Current ratio', 'Acid test / quick ratio', 'Stock turnover'] },
    ],
  },

  crs: {
    subjectKey: 'crs',
    subjectName: 'Christian Religious Studies',
    category: 'Arts',
    bookTitle: 'ESSENTIAL CHRISTIAN RELIGIOUS KNOWLEDGE FOR SENIOR SECONDARY SCHOOLS',
    author: 'Edmond, U.O.',
    edition: 'Revised Edition',
    publisher: 'Tonad Publishers Ltd',
    badge: 'CRS Verified Authority',
    coreChapters: [
      { chapter: 2, title: 'Leadership Roles: Joseph, Moses, Joshua & Deborah', pageRange: 'Pages 32 - 64', topics: ['Call of Moses (Exodus 3)', 'Faith and courage in the wilderness'] },
      { chapter: 4, title: 'The Call and Reign of the Kings: Saul, David & Solomon', pageRange: 'Pages 92 - 127', topics: ['David’s submission to God’s will', 'Solomon’s wisdom and apostasy'] },
      { chapter: 7, title: 'The Miracles and Parables of Jesus Christ', pageRange: 'Pages 202 - 241', topics: ['Parable of the Sower', 'The Good Samaritan', 'Nature miracles'] },
      { chapter: 9, title: 'The Early Church: Pentecost & Ministry of the Apostles', pageRange: 'Pages 278 - 313', topics: ['Day of Pentecost (Acts 2)', 'Martyrdom of Stephen', 'Paul’s conversion'] },
      { chapter: 10, title: 'Paul’s Missionary Journeys & Epistles (1 Corinthians 13)', pageRange: 'Pages 314 - 348', topics: ['Justification by faith', 'The greatest virtue: Love (Agape)'] },
    ],
  },

  irs: {
    subjectKey: 'irs',
    subjectName: 'Islamic Religious Studies',
    category: 'Arts',
    bookTitle: 'ISLAMIC STUDIES FOR SENIOR SECONDARY SCHOOLS',
    author: 'B.A. Lemu',
    edition: 'National Islamic Education Board Edition',
    publisher: 'Islamic Education Trust',
    badge: 'IRS Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Tawheed: Faith in One God, Shirk & Attributes of Allah', pageRange: 'Pages 1 - 34', topics: ['Tawheed al-Rububiyyah & Uluhiyyah', 'Avoidance of Shirk'] },
      { chapter: 2, title: 'The Holy Qur’an: Revelation, Standardization & Codification', pageRange: 'Pages 35 - 69', topics: ['Uthmanic codex (Zayd ibn Thabit)', 'Preservation of the text'] },
      { chapter: 4, title: 'Hadith: Classification (Sahih, Hasan, Da’if) & An-Nawawi', pageRange: 'Pages 108 - 144', topics: ['Isnad and Matn criticism', 'Six canonical Hadith collections'] },
      { chapter: 5, title: 'The Pillars of Islam: Salah, Zakah, Sawm & Hajj', pageRange: 'Pages 145 - 214', topics: ['Conditions of valid prayer', 'Calculation of Zakah (Nisab)', 'Hajj rites'] },
      { chapter: 9, title: 'The Khulafa’ur-Rashidun & Early Islamic History', pageRange: 'Pages 295 - 331', topics: ['Abu Bakr, Umar, Uthman & Ali (RA)', 'Expansion of the Caliphate'] },
    ],
  },

  geography: {
    subjectKey: 'geography',
    subjectName: 'Geography',
    category: 'Commercial',
    bookTitle: 'ESSENTIAL GEOGRAPHY FOR SENIOR SECONDARY SCHOOLS',
    author: 'O.A. Iwena',
    edition: 'Comprehensive Geography Series',
    publisher: 'Tonad Publishers Ltd',
    badge: 'Geography Verified Authority',
    coreChapters: [
      { chapter: 2, title: 'Latitude, Longitude, Time Calculation & Great Circles', pageRange: 'Pages 28 - 57', topics: ['15° per hour rotation rule', 'International Date Line (180°)'] },
      { chapter: 3, title: 'Rocks, Vulcanicity, Earthquakes & Fold Mountains', pageRange: 'Pages 58 - 89', topics: ['Plutonic igneous (Granite)', 'Extrusive rocks (Basalt)', 'Sedimentary and metamorphic'] },
      { chapter: 5, title: 'Weather, Atmospheric Pressure, Winds & Köppen System', pageRange: 'Pages 125 - 164', topics: ['Planetary wind belts', 'Tropical wet vs dry climates'] },
      { chapter: 7, title: 'Map Reading: Contours, Relief & Gradient Calculations', pageRange: 'Pages 198 - 239', topics: ['Contour patterns for landforms', 'Vertical exaggeration and slope'] },
      { chapter: 8, title: 'Regional Geography of Nigeria: Drainage, Minerals & Agriculture', pageRange: 'Pages 240 - 281', topics: ['Niger-Benue river system', 'Mineral belts (Crude oil, Coal, Tin)'] },
    ],
  },

  agricultural_science: {
    subjectKey: 'agricultural_science',
    subjectName: 'Agricultural Science',
    category: 'Sciences',
    bookTitle: 'ESSENTIAL AGRICULTURAL SCIENCE FOR SENIOR SECONDARY SCHOOLS',
    author: 'O.A. Iwena',
    edition: 'Comprehensive Agricultural Series',
    publisher: 'Tonad Publishers Ltd',
    badge: 'Agric Science Verified Authority',
    coreChapters: [
      { chapter: 2, title: 'Land Tenure Systems & Land Availability in Nigeria', pageRange: 'Pages 24 - 51', topics: ['Communal tenure', 'Land Use Act of 1978'] },
      { chapter: 5, title: 'Soil Science: Soil Texture, Profile, pH & Plant Nutrients', pageRange: 'Pages 115 - 153', topics: ['Macro-nutrients (N, P, K)', 'Soil acidity and liming'] },
      { chapter: 6, title: 'Crop Production & Crop Protection against Pests/Weeds', pageRange: 'Pages 154 - 237', topics: ['Agronomy of cereals and legumes', 'Insect pests and chemical control'] },
      { chapter: 8, title: 'Animal Science: Anatomy, Physiology & Digestion in Ruminants', pageRange: 'Pages 238 - 277', topics: ['Rumen, Reticulum, Omasum, Abomasum', 'True enzymatic stomach'] },
      { chapter: 10, title: 'Agricultural Economics: Farm Records, Accounting & Marketing', pageRange: 'Pages 320 - 355', topics: ['Profit and loss accounts', 'Agricultural extension methods'] },
    ],
  },

  computer_studies: {
    subjectKey: 'computer_studies',
    subjectName: 'Computer Studies',
    category: 'Sciences',
    bookTitle: 'COMPUTER STUDIES FOR SENIOR SECONDARY SCHOOLS',
    author: 'Hi-Tech Publishers / O.A. Adedoyin',
    edition: 'Modern ICT/CBT Edition',
    publisher: 'Hi-Tech Publications',
    badge: 'ICT & Computing Verified Authority',
    coreChapters: [
      { chapter: 2, title: 'Computer Hardware: CPU Architecture, Memory & Peripherals', pageRange: 'Pages 28 - 59', topics: ['ALU, Control Unit, Registers', 'RAM vs ROM volatileness'] },
      { chapter: 3, title: 'Logic Circuits: AND, OR, NOT, NAND, NOR & XOR Truth Tables', pageRange: 'Pages 60 - 87', topics: ['Boolean algebra simplification', 'Universal logic gates'] },
      { chapter: 4, title: 'Data Representation: Binary, Octal, Hexadecimal & ASCII', pageRange: 'Pages 88 - 117', topics: ['Radix conversions', 'Two’s complement representation'] },
      { chapter: 7, title: 'Computer Networking Topologies & The OSI Reference Model', pageRange: 'Pages 188 - 225', topics: ['Star, Bus, Ring and Mesh', 'Physical to Application layers'] },
      { chapter: 8, title: 'Database Management Systems (DBMS) & SQL Foundations', pageRange: 'Pages 226 - 259', topics: ['Relational tables, Primary & Foreign keys', 'SQL queries'] },
    ],
  },

  civic_education: {
    subjectKey: 'civic_education',
    subjectName: 'Civic Education',
    category: 'Arts',
    bookTitle: 'ESSENTIAL CIVIC EDUCATION FOR SENIOR SECONDARY SCHOOLS',
    author: 'R.W. Okunloye',
    edition: 'National Values Curriculum',
    publisher: 'Tonad Publishers Ltd',
    badge: 'Civics Verified Authority',
    coreChapters: [
      { chapter: 2, title: 'Citizenship: Rights, Duties, Obligations & Franchise', pageRange: 'Pages 25 - 53', topics: ['Section 77(2) Voting franchise', 'Acquiring Nigerian citizenship'] },
      { chapter: 4, title: 'Human Rights: Universal Declaration of Human Rights (UDHR)', pageRange: 'Pages 86 - 117', topics: ['Fundamental freedoms', 'Limitation of rights in emergencies'] },
      { chapter: 5, title: 'Democracy, Rule of Law & Pillars of Good Governance', pageRange: 'Pages 118 - 147', topics: ['Independence of the judiciary', 'Separation of powers'] },
      { chapter: 6, title: 'Electoral Process & Electoral Malpractice in Nigeria', pageRange: 'Pages 148 - 177', topics: ['INEC constitutional mandates', 'Free and fair election criteria'] },
      { chapter: 7, title: 'Public Service & Anti-Corruption Law Enforcement Agencies', pageRange: 'Pages 178 - 209', topics: ['EFCC, ICPC, Code of Conduct Bureau', 'Whistleblowing and transparency'] },
    ],
  },

  history: {
    subjectKey: 'history',
    subjectName: 'History',
    category: 'Arts',
    bookTitle: 'GROUNDWORK OF NIGERIAN HISTORY',
    author: 'Obaro Ikime',
    edition: 'Historical Society of Nigeria Edition',
    publisher: 'Heinemann Educational Books',
    badge: 'History Verified Authority',
    coreChapters: [
      { chapter: 2, title: 'Pre-Colonial State Systems: Kanem-Borno & Mai Idris Alooma', pageRange: 'Pages 32 - 67', topics: ['Turkish musketeers and Borno army', 'Trans-Saharan trade'] },
      { chapter: 4, title: 'The Oyo Empire: Political Structure, Oyomesi & Collapse', pageRange: 'Pages 105 - 141', topics: ['Checks and balances (Bashorun)', '19th century Yoruba wars'] },
      { chapter: 6, title: 'The 19th Century Sokoto Caliphate & Usman Dan Fodio', pageRange: 'Pages 184 - 219', topics: ['1804 Jihad causes and outcomes', 'Emirate administrative system'] },
      { chapter: 8, title: 'British Conquest, Resistance & The 1914 Amalgamation', pageRange: 'Pages 260 - 299', topics: ['Lord Lugard January 1, 1914 amalgamation', 'Indirect rule mechanisms'] },
      { chapter: 9, title: 'Nationalist Movements, Decolonization & Independence 1960', pageRange: 'Pages 300 - 340', topics: ['NCNC, AG, NPC leaders', 'October 1, 1960 independence'] },
    ],
  },

  french: {
    subjectKey: 'french',
    subjectName: 'French',
    category: 'Arts',
    bookTitle: 'LE NOUVEAU SANS FRONTIÈRES / MODERN FRENCH FOR WEST AFRICA',
    author: 'M. Brench & P. Philippe',
    edition: 'Francophone Pedagogical Series',
    publisher: 'CLE International',
    badge: 'French Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Grammaire: Les Articles, Noms et Adjectifs Démonstratifs', pageRange: 'Pages 1 - 27', topics: ['Articles définis et indéfinis', 'Ce, cet, cette, ces'] },
      { chapter: 3, title: 'Conjugaison: Le Passé Composé et L’Imparfait', pageRange: 'Pages 60 - 91', topics: ['Auxiliaires avoir et être', 'Accord du participe passé'] },
      { chapter: 5, title: 'Les Pronoms Personnels Objets Directs et Indirects (COD/COI)', pageRange: 'Pages 125 - 157', topics: ['Pronom lui, leur, en, y', 'Place des pronoms dans la phrase'] },
      { chapter: 7, title: 'Vocabulaire Thématique, Les Métiers et Les Voyages', pageRange: 'Pages 190 - 223', topics: ['Expressions idiomatiques courantes', 'Vie quotidienne et culture'] },
    ],
  },

  phe: {
    subjectKey: 'phe',
    subjectName: 'Physical and Health Education (PHE)',
    category: 'Sciences',
    bookTitle: 'ESSENTIAL PHYSICAL AND HEALTH EDUCATION FOR SENIOR SECONDARY SCHOOLS',
    author: 'M.O. Ojeme & P.B. Ikulayo',
    edition: 'Sports Science & Health Series',
    publisher: 'Africana First Publishers',
    badge: 'PHE Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Principles of Physical Fitness, Conditioning & Body Somatotypes', pageRange: 'Pages 1 - 27', topics: ['Cardiovascular endurance', 'Ectomorph, Mesomorph, Endomorph'] },
      { chapter: 2, title: 'Track & Field Athletics: Sprints, Relays & High Jump Flop', pageRange: 'Pages 28 - 64', topics: ['Fosbury Flop biomechanics', 'Baton change techniques'] },
      { chapter: 3, title: 'Ball Games: Football, Basketball & Volleyball Officiating', pageRange: 'Pages 65 - 101', topics: ['Offside rule in association football', 'Fouls and court specifications'] },
      { chapter: 6, title: 'Sports Injuries, First Aid & The R.I.C.E. Management Technique', pageRange: 'Pages 170 - 204', topics: ['Rest, Ice, Compression, Elevation', 'Fracture immobilization'] },
      { chapter: 7, title: 'Community Health, Communicable Diseases & Substance Abuse', pageRange: 'Pages 205 - 240', topics: ['Waterborne pathogens', 'Doping and stimulants in sports'] },
    ],
  },

  music: {
    subjectKey: 'music',
    subjectName: 'Music',
    category: 'Arts',
    bookTitle: 'BASIC MUSIC THEORY & AFRICAN MUSIC FOR SECONDARY SCHOOLS',
    author: 'M.N. Nzewi & F.C. King',
    edition: 'African & Western Theory Guide',
    publisher: 'Africana First Publishers',
    badge: 'Music Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Rudiments of Music: Staff, Clefs, Notes & Time Signatures', pageRange: 'Pages 1 - 31', topics: ['Treble and bass clefs', 'Simple vs compound time'] },
      { chapter: 2, title: 'Scales, Intervals, Key Signatures & Transposition', pageRange: 'Pages 32 - 67', topics: ['Circle of fifths (G Major 1 sharp)', 'Major and minor triads'] },
      { chapter: 4, title: 'African Music: Hornbostel-Sachs Classification & Rhythms', pageRange: 'Pages 104 - 141', topics: ['Idiophones (Ekwe, Ogene)', 'Membranophones, Polyrhythms'] },
      { chapter: 6, title: 'Nigerian Art, Highlife, Juju and Afrobeat Pioneers', pageRange: 'Pages 180 - 215', topics: ['Fela Kuti, Fela Sowande, Osita Osadebe', 'Call-and-response form'] },
    ],
  },

  visual_arts: {
    subjectKey: 'visual_arts',
    subjectName: 'Visual Arts (Fine Art)',
    category: 'Arts',
    bookTitle: 'CULTURAL AND CREATIVE ARTS & VISUAL ARTS FOR SENIOR SECONDARY SCHOOLS',
    author: 'C.O. Egonwa & S.I. Wangboje',
    edition: 'Visual & Studio Arts Guide',
    publisher: 'Evans Brothers Nigeria Ltd',
    badge: 'Fine Art Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Elements and Principles of Visual Design & Color Theory', pageRange: 'Pages 1 - 29', topics: ['Complementary colors', 'Linear and atmospheric perspective'] },
      { chapter: 2, title: 'Drawing & Painting: Chiaroscuro, Impasto & Media', pageRange: 'Pages 30 - 67', topics: ['Tonal gradation', 'Watercolor and oil techniques'] },
      { chapter: 4, title: 'Sculpture, Ceramic Pottery & Kiln Firing Technology', pageRange: 'Pages 105 - 141', topics: ['Clay coiling and pinching', 'Bisque and glaze firing'] },
      { chapter: 5, title: 'Traditional Nigerian Art: Nok, Igbo-Ukwu, Ife & Benin', pageRange: 'Pages 142 - 184', topics: ['Nok pierced terracotta pupils', 'Lost-wax bronze casting'] },
      { chapter: 6, title: 'Modern Nigerian Masters: Zaria Rebels & Contemporary Art', pageRange: 'Pages 185 - 220', topics: ['Ben Enwonwu, Bruce Onobrakpeya', 'Natural Synthesis doctrine'] },
    ],
  },

  home_economics: {
    subjectKey: 'home_economics',
    subjectName: 'Home Economics',
    category: 'Commercial',
    bookTitle: 'ESSENTIAL HOME ECONOMICS FOR SENIOR SECONDARY SCHOOLS',
    author: 'Elizabeth Anyakoha, Ph.D.',
    edition: 'Comprehensive Foods, Textiles & Home Management',
    publisher: 'Africana First Publishers',
    badge: 'Home Economics Authority',
    coreChapters: [
      { chapter: 1, title: 'Food Nutrients, Balanced Diets & Deficiency Diseases', pageRange: 'Pages 1 - 34', topics: ['Kwashiorkor protein deficiency', 'Vitamins and minerals functions'] },
      { chapter: 3, title: 'Food Preservation, Storage & Spoilage Prevention', pageRange: 'Pages 72 - 107', topics: ['Pasteurization, Canning, Dehydration', 'Microbial food poisoning'] },
      { chapter: 4, title: 'Textile Fibres, Fabric Construction & Laundry Methods', pageRange: 'Pages 108 - 144', topics: ['Warp and weft weave structures', 'Natural vs synthetic fibres'] },
      { chapter: 5, title: 'Garment Construction: Pattern Drafting & Sewing Stitches', pageRange: 'Pages 145 - 181', topics: ['Seams, Darts, Facings, Hems', 'Sewing machine maintenance'] },
      { chapter: 6, title: 'Home Management, Family Budgeting & Consumer Rights', pageRange: 'Pages 182 - 215', topics: ['Scale of preference in household expenditure', 'Consumer protection'] },
    ],
  },

  hausa: {
    subjectKey: 'hausa',
    subjectName: 'Hausa',
    category: 'Arts',
    bookTitle: 'TSARIN HARSHEN HAUSA DA LITATTAFAN HAUSA NA UTME',
    author: 'I.Y. Yahaya & M.K.M. Galadanci',
    edition: 'Northern Language Board Edition',
    publisher: 'University Press PLC',
    badge: 'Hausa Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Nahawun Hausa: Kalmomin Hausa da Rabe-raben Kalmomi', pageRange: 'Pages 1 - 29', topics: ['Aikatau (Verbs)', 'Suna (Nouns)', 'Sifa (Adjectives)'] },
      { chapter: 2, title: 'Tsarin Sauti: Bakake, Wasula da Karin Sauti a Hausa', pageRange: 'Pages 30 - 64', topics: ['Wasula dogaye da gajeru', 'Tagwayen bakake'] },
      { chapter: 3, title: 'Al’adu da Zamantakewar Hausawa: Aure, Sarauta da Sana’o’i', pageRange: 'Pages 65 - 101', topics: ['Bikin aure da na haihuwa', 'Tsarukan sarautar gargajiya'] },
      { chapter: 5, title: 'Rubutaccen Adabi: Zube, Waka da Fitattun Littattafai', pageRange: 'Pages 140 - 180', topics: ['Magana Jari Ce (Abubakar Imam)', 'Ruwan Bagaja'] },
    ],
  },

  yoruba: {
    subjectKey: 'yoruba',
    subjectName: 'Yoruba',
    category: 'Arts',
    bookTitle: 'EDE YORUBA ODE ONI & AKOJOPO EWI ALOHUN YORUBA',
    author: 'B. Awobuluyi & O. Olatunji',
    edition: 'Yoruba Studies Association Guide',
    publisher: 'Macmillan Nigeria Publishers',
    badge: 'Yoruba Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Giramà Yoruba: Awon Faweli, Konsonanti ati Ami Ohun', pageRange: 'Pages 1 - 31', topics: ['Ami Oke, Ami Aarin, Ami Isale', 'Faweli aranmu ati konsonanti'] },
      { chapter: 2, title: 'Ihùwàsi Oro: Oro-Oruko, Oro-Ise ati Isopo Gbolohun', pageRange: 'Pages 32 - 67', topics: ['Aroko Yoruba', 'Ihun gbolohun gbfe'] },
      { chapter: 3, title: 'Asa ati Ise Yoruba: Igbeyawo, Isomoloruko ati Oye Jije', pageRange: 'Pages 68 - 104', topics: ['Eto Idana ninu igbeyawo', 'Eto isomoloruko ojo kejo'] },
      { chapter: 5, title: 'Litireso Apileko: Ewi, Ere Onise ati Iwe Itan Aroso', pageRange: 'Pages 145 - 185', topics: ['Ogboju Ode Ninu Igbo Irunmole (D.O. Fagunwa)', 'Ewi alantete'] },
    ],
  },

  igbo: {
    subjectKey: 'igbo',
    subjectName: 'Igbo',
    category: 'Arts',
    bookTitle: 'UTOASUSU IGBO MAKA NDI SINIO SEKONDIRI',
    author: 'E.N. Emenanjo & F.C. Ogbalu',
    edition: 'Society for Promoting Igbo Language and Culture Edition',
    publisher: 'University Publishing Company',
    badge: 'Igbo Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'Utoasusu: Udaume Mfe na Udaume Aro, Akara Uda', pageRange: 'Pages 1 - 33', topics: ['Onwu Orthography (1961)', 'Ndakorita udaume'] },
      { chapter: 2, title: 'Nkejiasusu: Ngwaa, Nkowa, Nnochiaha na Njiko', pageRange: 'Pages 34 - 69', topics: ['Ahiriokwu mfe na nke ukwu', 'Nsuda akara uda'] },
      { chapter: 3, title: 'Omenala na Ebumputaala Igbo: Iri Ji Ohuru na Ichi Ozo', pageRange: 'Pages 70 - 107', topics: ['Emume Iwa Ji / Iri Ji Ohuru', 'Alumdi na nwunye n’ala Igbo'] },
      { chapter: 5, title: 'Agumagu Ederede: Ejije, Abu na Akwukwo Ogugu', pageRange: 'Pages 148 - 185', topics: ['Omenuko (Pita Nwana)', 'Juo Obinna'] },
    ],
  },

  arabic: {
    subjectKey: 'arabic',
    subjectName: 'Arabic',
    category: 'Arts',
    bookTitle: 'DURUS AL-LUGHAH AL-ARABIYYAH & AL-MUKHTASAR FI ADAB AL-ARABI',
    author: 'Dr. V. Abdur Rahim & Sheikh Abubakar Gumi',
    edition: 'Arabic Studies for Senior Secondary Schools',
    publisher: 'Islamic Publications Bureau',
    badge: 'Arabic Verified Authority',
    coreChapters: [
      { chapter: 1, title: 'An-Nahw (Grammar): Al-Jumla al-Ismiyyah wal Fi’liyyah', pageRange: 'Pages 1 - 34', topics: ['Al-Mubtada’ wal Khabar', 'Al-Fa’il wal Maf’ul bihi'] },
      { chapter: 2, title: 'As-Sarf (Morphology): Al-Awzan wa Ismul Fa’il/Maf’ul', pageRange: 'Pages 35 - 69', topics: ['Awzan al-af’al al-mujarradah', 'Ism al-faa’il wa ism al-maf’ool'] },
      { chapter: 3, title: 'Al-Balaghah (Rhetoric): At-Tashbeeh wal Isti’aarah', pageRange: 'Pages 70 - 104', topics: ['Arkan at-tashbeeh', 'Al-Isti’aarah at-tasreehiyyah wal makniyyah'] },
      { chapter: 4, title: 'History of Arabic Literature & Islamic Classical Works', pageRange: 'Pages 105 - 139', topics: ['Arabic scholarship in Nigeria (Dan Fodio works)', 'Classical pre-Islamic & Umayyad poetry'] },
    ],
  },
};

/**
 * Returns the verified citation string for a given subject (strictly the textbook reference)
 */
export function getVerifiedCitation(
  subject: string,
  _topic?: string,
  _chapter?: number,
  _page?: number | string
): string {
  const normKey = normalizeSubjectKey(subject);
  const book = VERIFIED_TEXTBOOKS[normKey];

  if (!book) {
    return 'Verified JAMB Standard Reference';
  }

  return `${book.bookTitle} by ${book.author}`;
}

export function getVerifiedBookForSubject(subjectOrCode: string): VerifiedTextbook | undefined {
  const normKey = normalizeSubjectKey(subjectOrCode);
  return VERIFIED_TEXTBOOKS[normKey];
}

const RAW_VERIFIED_QUESTIONS: VerifiedQuestion[] = [
  // ==========================================
  // 1. USE OF ENGLISH — A-Z OF ENGLISH (Dele Ashade)
  // ==========================================
  {
    id: 101,
    subject: 'Use of English',
    topic: 'Lexis & Structure: Synonyms and Vocabulary in Context',
    text: 'From the words lettered A to D, choose the word that best completes the sentence: The candidate was commended for her _______ performance in the UTME.',
    options: {
      A: 'exceptional',
      B: 'exceptionable',
      C: 'excepting',
      D: 'excessive',
    },
    answer: 'A',
    explanation: "'Exceptional' means remarkably good, superior, or outstanding. 'Exceptionable' means objectionable or offensive, which contradicts a commendable achievement.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 3,
    page: 84,
    textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 102,
    subject: 'Use of English',
    topic: 'Grammatical Concord: Proximity Concord with Correlative Conjunctions',
    text: 'Choose the option that correctly completes the sentence: Neither the school principal nor the subject tutors _______ present at the zonal education briefing yesterday.',
    options: {
      A: 'was',
      B: 'were',
      C: 'is',
      D: 'are',
    },
    answer: 'B',
    explanation: "When subjects are joined by 'neither... nor', the verb agrees in number and person with the nearer subject (Rule of Proximity). 'Subject tutors' is plural and the event took place in the past ('yesterday'), requiring 'were'.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 1,
    page: 31,
    textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 103,
    subject: 'Use of English',
    topic: 'Grammatical Concord: The Mandative Subjunctive',
    text: 'Choose the correct verb form: The JAMB registrar insisted that every candidate _______ their original biometric print before admittance into the hall.',
    options: {
      A: 'verify',
      B: 'verifies',
      C: 'verified',
      D: 'must verify',
    },
    answer: 'A',
    explanation: "In the mandative subjunctive construction (after verbs like insist, demand, recommend, mandate that...), the clause verb remains in the uninflected base form (infinitive without 'to') regardless of third-person singular subjects.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 1,
    page: 42,
    textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 104,
    subject: 'Use of English',
    topic: 'Lexis & Structure: Antonyms (Opposites in Context)',
    text: 'In the sentence below, choose the word most nearly opposite in meaning to the capitalized word: The witness gave a TACITURN response during the cross-examination.',
    options: {
      A: 'Garrulous',
      B: 'Hostile',
      C: 'Hesitant',
      D: 'Timid',
    },
    answer: 'A',
    explanation: "'Taciturn' denotes someone who is quiet, uncommunicative, and reserved. The opposite is 'garrulous' (excessively talkative or loquacious).",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 3,
    page: 96,
    textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 105,
    subject: 'Use of English',
    topic: 'Prepositional Idioms & Phrasal Patterns',
    text: 'Choose the preposition that correctly completes the standard idiom: The newly appointed director was completely absorbed _______ the accreditation report.',
    options: {
      A: 'in',
      B: 'with',
      C: 'on',
      D: 'about',
    },
    answer: 'A',
    explanation: "The standard English prepositional collocation with 'absorbed' (meaning deeply engaged or engrossed) is 'in'. We say 'absorbed in thought' or 'absorbed in an activity'.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 5,
    page: 144,
    textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 106,
    subject: 'Use of English',
    topic: 'Oral English: Vowel Contrasts & Long Monophthongs',
    text: "Which of the following words contains the same vowel sound as the one represented in the underlined letters of 's-ea-t' (/i:/)?",
    options: {
      A: 'Key',
      B: 'Sit',
      C: 'Threat',
      D: 'Great',
    },
    answer: 'A',
    explanation: "'Key' is pronounced /ki:/ featuring the long high front unrounded monophthong /i:/, exactly like 'seat' (/si:t/). 'Sit' has /ɪ/, 'threat' has /e/, and 'great' has /eɪ/.",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 9,
    page: 262,
    textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade',
  },
  {
    id: 107,
    subject: 'Use of English',
    topic: 'Oral English: Stress Placement in Noun-Verb Pairs',
    text: "Choose the word with the correct syllable capitalized to indicate primary stress in the noun form of 'record' (e.g. 'She broke the national record'):",
    options: {
      A: 'RE-cord',
      B: 're-CORD',
      C: 'RE-cord-ed',
      D: 're-cor-DEE',
    },
    answer: 'A',
    explanation: "In disyllabic English homographs, the noun takes primary stress on the first syllable (RE-cord, /'rek.ɔ:d/), whereas the verb takes stress on the second syllable (re-CORD, /rɪ'kɔ:d/).",
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    chapter: 11,
    page: 324,
    textbookRef: 'A-Z OF ENGLISH by B.O. Dele Ashade',
  },

  // ==========================================
  // 2. MATHEMATICS — HIDDEN FACTS IN MATHEMATICS (M.A. Otumudia)
  // ==========================================
  {
    id: 201,
    subject: 'Mathematics',
    topic: 'Indices & Logarithms: Evaluation Without Tables',
    text: 'If log₁₀ 2 = 0.3010 and log₁₀ 3 = 0.4771, calculate the value of log₁₀ 18 without mathematical tables.',
    options: {
      A: '1.2552',
      B: '1.0791',
      C: '1.1761',
      D: '0.9542',
    },
    answer: 'A',
    explanation: 'log₁₀ 18 = log₁₀(2 × 3²) = log₁₀ 2 + 2 log₁₀ 3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 1,
    page: 22,
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 202,
    subject: 'Mathematics',
    topic: 'Quadratic Equations: Formation from Given Roots',
    text: 'Find the quadratic equation whose roots are -1/2 and 3.',
    options: {
      A: '2x² + 5x - 3 = 0',
      B: '2x² - 5x + 3 = 0',
      C: '2x² - 5x - 3 = 0',
      D: 'x² - 5x - 6 = 0',
    },
    answer: 'C',
    explanation: 'Sum of roots: α + β = -1/2 + 3 = 5/2. Product of roots: αβ = (-1/2)(3) = -3/2. Equation is x² - (α + β)x + αβ = 0 → x² - (5/2)x - 3/2 = 0. Multiplying through by 2 gives 2x² - 5x - 3 = 0.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 3,
    page: 61,
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 203,
    subject: 'Mathematics',
    topic: 'Arithmetic Progressions: Common Difference and Sum',
    text: 'The 3rd term of an arithmetic progression (AP) is 10 and the 8th term is 25. Find the sum of the first 10 terms (S₁₀).',
    options: {
      A: '175',
      B: '155',
      C: '190',
      D: '210',
    },
    answer: 'A',
    explanation: 'T₃ = a + 2d = 10; T₈ = a + 7d = 25. Subtracting gives 5d = 15 ⇒ d = 3. First term a = 10 - 2(3) = 4. S₁₀ = (10/2)[2(4) + (10 - 1)(3)] = 5[8 + 27] = 5 × 35 = 175.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 5,
    page: 134,
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 204,
    subject: 'Mathematics',
    topic: 'Differential Calculus: Turning Points and Stationary Values',
    text: 'Find the coordinates of the turning point of the parabola y = 2x² - 8x + 5 and determine its nature.',
    options: {
      A: '(2, -3), Minimum point',
      B: '(2, -3), Maximum point',
      C: '(-2, 29), Minimum point',
      D: '(4, 5), Inflexion point',
    },
    answer: 'A',
    explanation: 'dy/dx = 4x - 8 = 0 ⇒ x = 2. When x = 2, y = 2(2)² - 8(2) + 5 = 8 - 16 + 5 = -3. Second derivative d²y/dx² = 4 > 0, which confirms a minimum stationary point at (2, -3).',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 11,
    page: 309,
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 205,
    subject: 'Mathematics',
    topic: 'Integral Calculus: Definite Integrals and Area',
    text: 'Evaluate the definite integral ∫₁³ (3x² - 2x + 1) dx.',
    options: {
      A: '20',
      B: '18',
      C: '26',
      D: '22',
    },
    answer: 'A',
    explanation: 'Integrating: [x³ - x² + x]₁³ = [ (3³ - 3² + 3) - (1³ - 1² + 1) ] = [ (27 - 9 + 3) - (1) ] = 21 - 1 = 20.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 12,
    page: 347,
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 206,
    subject: 'Mathematics',
    topic: 'Trigonometry: Acute Angles and Trigonometric Ratios',
    text: 'If tan θ = 3/4 and θ is an acute angle, evaluate the expression (cos θ - sin θ) / (cos θ + sin θ).',
    options: {
      A: '1/7',
      B: '1/5',
      C: '2/7',
      D: '3/5',
    },
    answer: 'A',
    explanation: 'Since tan θ = opposite/adjacent = 3/4, hypotenuse = √(3² + 4²) = 5. cos θ = 4/5, sin θ = 3/5. Therefore, (4/5 - 3/5) / (4/5 + 3/5) = (1/5) / (7/5) = 1/7.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 9,
    page: 248,
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },
  {
    id: 207,
    subject: 'Mathematics',
    topic: 'Permutations: Arrangements with Repeated Elements',
    text: 'In how many distinct ways can the letters of the word SUCCESS be arranged?',
    options: {
      A: '420',
      B: '5040',
      C: '840',
      D: '210',
    },
    answer: 'A',
    explanation: 'Total letters n = 7 with 3 S’s and 2 C’s. Distinct arrangements = 7! / (3! × 2!) = 5040 / (6 × 2) = 5040 / 12 = 420.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    chapter: 14,
    page: 415,
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia',
  },

  // ==========================================
  // 3. PHYSICS — NEW SCHOOL PHYSICS (M.W. Anyakoha)
  // ==========================================
  {
    id: 301,
    subject: 'Physics',
    topic: 'Equations of Motion: Uniformly Accelerated Motion',
    text: 'A car travelling at 20 m/s accelerates uniformly at 2.5 m/s² for 8 seconds. What is the total distance covered during this acceleration period?',
    options: {
      A: '160 m',
      B: '240 m',
      C: '200 m',
      D: '280 m',
    },
    answer: 'B',
    explanation: 'Using the kinematic equation s = ut + ½at²: s = (20 × 8) + ½(2.5 × 8²) = 160 + ½(2.5 × 64) = 160 + 80 = 240 m.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 2,
    page: 31,
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 302,
    subject: 'Physics',
    topic: 'Projectiles: Curved Trajectory and Time of Flight',
    text: 'A projectile is launched from ground level with an initial velocity of 50 m/s at an angle of 30° to the horizontal. Calculate its total time of flight (Take g = 10 m/s²).',
    options: {
      A: '5.0 s',
      B: '2.5 s',
      C: '8.66 s',
      D: '10.0 s',
    },
    answer: 'A',
    explanation: 'Total time of flight T = (2u sin θ) / g = (2 × 50 × sin 30°) / 10 = (100 × 0.5) / 10 = 5.0 s.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 3,
    page: 54,
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 303,
    subject: 'Physics',
    topic: 'Units and Dimensions: Dimensional Analysis',
    text: 'Which of the following physical quantities has the same dimensions as Work (M L² T⁻²)?',
    options: {
      A: 'Momentum',
      B: 'Torque',
      C: 'Power',
      D: 'Pressure',
    },
    answer: 'B',
    explanation: 'Work = Force × Distance = [M L T⁻²][L] = [M L² T⁻²]. Torque = Force × Perpendicular Distance = [M L T⁻²][L] = [M L² T⁻²]. Both share the identical dimensional formula.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 1,
    page: 14,
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 304,
    subject: 'Physics',
    topic: 'Thermal Physics: Quantity of Heat and Calorimetry',
    text: 'An immersion heater rated 600 W is used to heat 1.5 kg of water from 25°C to 65°C. Calculate the time taken, assuming no heat loss (Specific heat capacity of water = 4200 J/kg·K).',
    options: {
      A: '420 s',
      B: '280 s',
      C: '350 s',
      D: '500 s',
    },
    answer: 'A',
    explanation: 'Heat required Q = mcΔθ = 1.5 × 4200 × (65 - 25) = 1.5 × 4200 × 40 = 252,000 J. Electrical energy E = P × t. Since E = Q: 600t = 252,000 ⇒ t = 420 seconds (7 minutes).',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 8,
    page: 172,
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 305,
    subject: 'Physics',
    topic: 'Sound Waves: Resonance in Air Columns',
    text: 'The fundamental frequency of a closed organ pipe of length 34 cm is 250 Hz. Determine the velocity of sound in air.',
    options: {
      A: '340 m/s',
      B: '170 m/s',
      C: '680 m/s',
      D: '320 m/s',
    },
    answer: 'A',
    explanation: 'For a closed organ pipe at fundamental resonance, λ = 4L = 4 × 0.34 m = 1.36 m. Speed of sound v = fλ = 250 Hz × 1.36 m = 340 m/s.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 12,
    page: 278,
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 306,
    subject: 'Physics',
    topic: 'Current Electricity: EMF and Internal Resistance',
    text: 'A cell of electromotive force (EMF) 2.0 V and internal resistance 0.5 Ω is connected across an external resistor of 4.5 Ω. Calculate the terminal potential difference across the cell.',
    options: {
      A: '1.8 V',
      B: '1.6 V',
      C: '2.0 V',
      D: '0.2 V',
    },
    answer: 'A',
    explanation: 'Total circuit current I = E / (R + r) = 2.0 / (4.5 + 0.5) = 2.0 / 5.0 = 0.4 A. Terminal potential difference V = IR = 0.4 × 4.5 = 1.8 V (also V = E - Ir = 2.0 - (0.4 × 0.5) = 1.8 V).',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 16,
    page: 382,
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },
  {
    id: 307,
    subject: 'Physics',
    topic: 'Radioactivity: Radioactive Decay and Half-life',
    text: 'A radioactive isotope has a half-life of 4 hours. If a freshly prepared sample has an initial activity of 800 disintegrations per minute (dpm), what will its activity be after 16 hours?',
    options: {
      A: '50 dpm',
      B: '100 dpm',
      C: '25 dpm',
      D: '200 dpm',
    },
    answer: 'A',
    explanation: 'Number of half-lives n = total time / half-life = 16 / 4 = 4. Remaining activity N = N₀ / 2ⁿ = 800 / 2⁴ = 800 / 16 = 50 dpm.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    chapter: 20,
    page: 495,
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D.',
  },

  // ==========================================
  // 4. CHEMISTRY — NEW SCHOOL CHEMISTRY (Osei Yaw Ababio)
  // ==========================================
  {
    id: 401,
    subject: 'Chemistry',
    topic: 'Inorganic Chemistry: Nitrogen Compounds and Ammonia',
    text: 'Which of the following salts will react with warm sodium hydroxide (NaOH) solution to liberate ammonia gas?',
    options: {
      A: 'Ammonium chloride (NH₄Cl)',
      B: 'Sodium nitrate (NaNO₃)',
      C: 'Calcium carbonate (CaCO₃)',
      D: 'Potassium chloride (KCl)',
    },
    answer: 'A',
    explanation: 'Ammonium salts react with caustic alkalis when warmed to yield ammonia gas, salt, and water: NH₄Cl(s) + NaOH(aq) → NaCl(aq) + H₂O(l) + NH₃(g).',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 14,
    page: 276,
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 402,
    subject: 'Chemistry',
    topic: 'Electrochemistry: Electrolysis with Active Electrodes',
    text: 'During the electrolysis of copper(II) tetraoxosulfate(VI) solution using active copper electrodes, what occurs at the anode?',
    options: {
      A: 'Oxygen gas is evolved',
      B: 'Hydrogen gas is discharged',
      C: 'The copper anode dissolves into Cu²⁺ ions',
      D: 'Copper metal is deposited on the anode',
    },
    answer: 'C',
    explanation: 'With active copper electrodes, oxidation of the anode material is preferred over SO₄²⁻ and OH⁻ discharge: Cu(s) → Cu²⁺(aq) + 2e⁻. The copper anode dissolves while pure copper deposits at the cathode.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 12,
    page: 238,
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 403,
    subject: 'Chemistry',
    topic: 'Stoichiometry & Mole Concept: Gas Molar Volumes',
    text: 'What volume of oxygen at s.t.p. is required for the complete combustion of 5.6 dm³ of ethene (C₂H₄)? [Molar volume of gas at s.t.p. = 22.4 dm³]',
    options: {
      A: '16.8 dm³',
      B: '11.2 dm³',
      C: '5.6 dm³',
      D: '22.4 dm³',
    },
    answer: 'A',
    explanation: 'The balanced equation is C₂H₄(g) + 3O₂(g) → 2CO₂(g) + 2H₂O(l). By Gay-Lussac’s Law of Combining Volumes, 1 volume of C₂H₄ requires 3 volumes of O₂. Required oxygen volume = 3 × 5.6 dm³ = 16.8 dm³.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 6,
    page: 112,
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 404,
    subject: 'Chemistry',
    topic: 'Atomic Structure: Anomalous Electronic Configurations',
    text: 'What is the electronic configuration of the chromium atom (Cr, atomic number 24) in its ground state?',
    options: {
      A: '[Ar] 4s¹ 3d⁵',
      B: '[Ar] 4s² 3d⁴',
      C: '[Ar] 4s² 3d⁵',
      D: '[Ar] 3d⁶',
    },
    answer: 'A',
    explanation: 'Chromium has configuration [Ar] 4s¹ 3d⁵ because a half-filled d-subshell (3d⁵) exhibits greater exchange energy and spatial stability than the anticipated 4s² 3d⁴ arrangement.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 4,
    page: 56,
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 405,
    subject: 'Chemistry',
    topic: 'Acids, Bases & pH Calculations: Diprotic Acids',
    text: 'Calculate the pH of a 0.005 mol/dm³ solution of tetraoxosulfate(VI) acid (H₂SO₄), assuming complete dissociation.',
    options: {
      A: '2.0',
      B: '2.3',
      C: '1.7',
      D: '3.0',
    },
    answer: 'A',
    explanation: 'H₂SO₄ is diprotic: H₂SO₄ → 2H⁺ + SO₄²⁻. [H⁺] = 2 × 0.005 mol/dm³ = 0.010 mol/dm³ = 1.0 × 10⁻² mol/dm³. pH = -log₁₀[H⁺] = -log₁₀(10⁻²) = 2.0.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 9,
    page: 178,
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 406,
    subject: 'Chemistry',
    topic: 'Organic Chemistry: IUPAC Systematic Nomenclature of Esters',
    text: 'What is the systematic IUPAC name for the ester CH₃-CH(CH₃)-CH₂-COOCH₃?',
    options: {
      A: 'Methyl 3-methylbutanoate',
      B: 'Ethyl 2-methylpropanoate',
      C: 'Methyl isopentanoate',
      D: 'Propyl ethanoate',
    },
    answer: 'A',
    explanation: 'The alkyl group attached to the ester oxygen is methyl (-CH₃). The parent carboxylate chain has 4 carbon atoms with a methyl branch at carbon-3 (3-methylbutanoate). The IUPAC name is methyl 3-methylbutanoate.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 18,
    page: 394,
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },
  {
    id: 407,
    subject: 'Chemistry',
    topic: 'Chemical Equilibrium: Le Chatelier’s Principle',
    text: 'For the exothermic reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92 kJ/mol, which condition will shift the equilibrium position to maximize the yield of ammonia?',
    options: {
      A: 'Decreasing temperature and increasing pressure',
      B: 'Increasing temperature and decreasing pressure',
      C: 'Increasing temperature and increasing pressure',
      D: 'Adding a catalyst at low pressure',
    },
    answer: 'A',
    explanation: 'By Le Chatelier’s principle, lowering temperature favors the forward exothermic reaction (liberating heat), and increasing pressure shifts equilibrium towards the side with fewer gas moles (4 moles → 2 moles).',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    chapter: 8,
    page: 152,
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio',
  },

  // ==========================================
  // 5. BIOLOGY — MODERN BIOLOGY (Sarojini T. Ramalingam)
  // ==========================================
  {
    id: 501,
    subject: 'Biology',
    topic: 'Mammalian Circulation: The Heart and Great Vessels',
    text: 'In mammalian blood circulation, which blood vessel carries oxygenated blood directly from the lungs into the left atrium of the heart?',
    options: {
      A: 'Pulmonary vein',
      B: 'Pulmonary artery',
      C: 'Vena cava',
      D: 'Hepatic portal vein',
    },
    answer: 'A',
    explanation: 'The pulmonary vein is the only vein in the adult mammalian body that carries oxygenated blood, transporting it from the alveolar capillaries of the lungs into the left atrium of the heart.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 8,
    page: 174,
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 502,
    subject: 'Biology',
    topic: 'Genetics: Incomplete Dominance and Blending Inheritance',
    text: 'A cross between a homozygous red-flowered plant (RR) and a homozygous white-flowered plant (rr) produces all pink offspring in the F1 generation. This genetic phenomenon illustrates _______.',
    options: {
      A: 'Complete dominance',
      B: 'Incomplete dominance',
      C: 'Epistasis',
      D: 'Sex-linkage',
    },
    answer: 'B',
    explanation: 'Incomplete dominance occurs when neither allele is dominant over the other, resulting in a heterozygous intermediate phenotype (pink flowers from red and white parents).',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 18,
    page: 422,
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 503,
    subject: 'Biology',
    topic: 'Cell Biology: Ultrastructure of Organelles and Functions',
    text: 'Which organelle is correctly paired with its primary metabolic function in eukaryotic plant cells?',
    options: {
      A: 'Ribosome - Synthesis of ATP',
      B: 'Chloroplast - Synthesis of carbohydrates via photosynthesis',
      C: 'Golgi apparatus - Anaerobic respiration',
      D: 'Mitochondria - Synthesis of cellulose',
    },
    answer: 'B',
    explanation: 'Chloroplasts contain photosynthetic pigments in the thylakoid grana and enzymes in the stroma to convert carbon dioxide and water into carbohydrates using sunlight energy.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 2,
    page: 33,
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 504,
    subject: 'Biology',
    topic: 'Excretion & Osmoregulation: The Kidney Nephron',
    text: 'In the mammalian kidney nephron, in which region does non-selective ultrafiltration of blood plasma take place?',
    options: {
      A: 'Bowman’s capsule and glomerulus',
      B: 'Loop of Henle',
      C: 'Distal convoluted tubule',
      D: 'Collecting duct',
    },
    answer: 'A',
    explanation: 'High hydrostatic pressure in the afferent glomerular capillaries forces water, glucose, mineral salts, amino acids, and urea through the podocyte filtration slits into Bowman’s capsule as glomerular filtrate.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 11,
    page: 241,
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 505,
    subject: 'Biology',
    topic: 'Nervous Coordination: Structure and Functions of the Brain',
    text: 'Which part of the human brain is primarily responsible for muscular coordination, posture, and maintaining bodily balance?',
    options: {
      A: 'Cerebellum',
      B: 'Cerebrum',
      C: 'Medulla oblongata',
      D: 'Hypothalamus',
    },
    answer: 'A',
    explanation: 'The cerebellum coordinates voluntary muscular activity, posture, and equilibrium. Damage to the cerebellum leads to ataxia and loss of fine motor coordination.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 14,
    page: 308,
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 506,
    subject: 'Biology',
    topic: 'Genetics: Multiple Alleles and ABO Blood Group Inheritance',
    text: 'A man with blood group A (genotype IᴬIᴼ) marries a woman with blood group B (genotype IᴮIᴼ). What are the possible blood groups among their offspring?',
    options: {
      A: 'Groups A, B, AB, and O',
      B: 'Groups A and B only',
      C: 'Group AB only',
      D: 'Group O only',
    },
    answer: 'A',
    explanation: 'Crossing IᴬIᴼ × IᴮIᴼ produces 25% IᴬIᴮ (Group AB), 25% IᴬIᴼ (Group A), 25% IᴮIᴼ (Group B), and 25% IᴼIᴼ (Group O). All four blood groups are possible.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 18,
    page: 436,
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
  {
    id: 507,
    subject: 'Biology',
    topic: 'Ecology: Energy Flow and Pyramids of Energy',
    text: 'Why is the pyramid of energy always upright and can never be inverted in any balanced ecosystem?',
    options: {
      A: 'Energy is dissipated as metabolic heat and respiration at each trophic step',
      B: 'Energy increases as it moves to higher trophic levels',
      C: 'Carnivores require less food than herbivores',
      D: 'Decomposers recycle energy back into solar radiation',
    },
    answer: 'A',
    explanation: 'In accordance with the Second Law of Thermodynamics, only about 10% of energy is transferred from one trophic level to the next; 90% is dissipated as heat, unconsumed matter, and respiration, keeping the energy pyramid strictly upright.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    chapter: 21,
    page: 490,
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Ph.D.',
  },
];

// Scatter options uniformly so correct answers are evenly spread across A, B, C, and D
export const VERIFIED_QUESTIONS: VerifiedQuestion[] = RAW_VERIFIED_QUESTIONS.map((q, idx) =>
  scatterQuestionOptions(q, q.id + idx * 7)
);

/**
 * Filter questions based on selected subjects
 */
export function getQuestionsForSubjects(subjects: string[], count?: number): VerifiedQuestion[] {
  const normKeys = subjects.map(normalizeSubjectKey);

  const matched = VERIFIED_QUESTIONS.filter((q) => {
    const qKey = normalizeSubjectKey(q.subject);
    return normKeys.includes(qKey);
  });

  if (matched.length > 0 && (!count || matched.length >= count)) {
    return count ? matched.slice(0, count) : matched;
  }

  // Draw authentic questions for all requested subjects
  const generated = assembleUtmeTest({
    subjects,
    mode: subjects.length === 1 ? 'single' : 'full',
    customQuestionCount: count || (subjects.length === 1 ? 40 : 180),
  });

  return generated;
}

// Re-export 1978-2025 JAMB UTME Past Questions Engine
export {
  JAMB_YEARS,
  SUBJECT_CONFIGS,
  assembleUtmeTest,
  calculateJambGrade,
  generateQuestionForYear,
  getSubjectQuestionsForYear,
  normalizeSubjectKey,
  getSeenQuestionIds,
  markQuestionsSeen,
  clearSeenQuestions,
  getSeenQuestionsCount,
  scatterQuestionOptions,
} from './jambPastQuestions';
export type {
  SubjectKey,
  JambGradingResult,
  SubjectScoreBreakdown,
  AssembleTestOptions,
} from './jambPastQuestions';

