/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Official JAMB UTME Comprehensive Syllabus Directory (Updated for 2026/2027)
 * Based on Joint Admissions and Matriculation Board (JAMB) IBASS Guidelines
 */

export type SubjectCategory = 'Compulsory' | 'Sciences' | 'Social Sciences / Commercial' | 'Arts & Humanities' | 'Vocational & Technical' | 'Languages';

export interface SyllabusModule {
  title: string;
  topics: string[];
  objectives: string[];
}

export interface JambSubjectSyllabus {
  id: string;
  name: string;
  category: SubjectCategory;
  compulsory?: boolean;
  totalTopics: number;
  recommendedTextbooks: string[];
  modules: SyllabusModule[];
  keyExamTips: string[];
}

export const JAMB_SYLLABUS_DATA: JambSubjectSyllabus[] = [
  // 1. USE OF ENGLISH (Compulsory for all candidates)
  {
    id: 'english',
    name: 'Use of English',
    category: 'Compulsory',
    compulsory: true,
    totalTopics: 18,
    recommendedTextbooks: [
      'A-Z OF ENGLISH (Complete Guide to Use of English, Grammatical Structures & Oral Forms) - Dele Ashade',
      'The Life Changer (Prescribed Novel) - Khadija Abubakar Jalli',
      'The Invisible Teacher - Dele Ashade',
      'Round-Up English - Idowu, O. et al.',
      'A-One in English - B.A. Epega',
    ],
    keyExamTips: [
      '60 questions in total: 10 on Comprehension/Summary, 10 on Prescribed Novel, 25 on Lexis & Structure, 15 on Oral Forms.',
      'Carefully read the novel "The Life Changer"; focus on themes of morality, university freedom, peer influence, and deceit.',
      'Pay close attention to vowel contrasts (short vs long vowels, monophthongs vs diphthongs) and primary stress.',
    ],
    modules: [
      {
        title: 'Section A: Comprehension and Summary',
        topics: [
          'Description of Tone, Mood, and Attitude in Literary/Expository Texts',
          'Deduction of Inferences and Implied Meanings',
          'Central Idea and Supporting Details Identification',
          'Contextual Vocabulary and Word Substitution in Passages',
          'Precis and Concise Summary Techniques',
        ],
        objectives: [
          'Identify main points and supporting ideas in unseen passages.',
          'Infer moods, attitudes, and ideological undertones of the author.',
          'Extract precise summaries without extraneous material.',
        ],
      },
      {
        title: 'Section B: Lexis and Structure',
        topics: [
          'Synonyms and Antonyms (Near and Opposite in Meaning)',
          'Homophones, Homonyms, and Easily Confused Words',
          'Idiomatic Expressions, Proverbs, and Collocations',
          'Sentence Patterns, Concord, and Agreement',
          'Tense Aspects, Modal Auxiliaries, and Conditionals',
          'Prepositions, Phrasal Verbs, and Particles',
          'Clauses (Relative, Adverbial, Noun) and Syntactic Functions',
        ],
        objectives: [
          'Select the word or phrase most nearly opposite or similar in meaning.',
          'Apply rules of grammatical concord accurately.',
          'Distinguish idioms and appropriate collocations in standard English.',
        ],
      },
      {
        title: 'Section C: Prescribed Literary Text (The Life Changer)',
        topics: [
          'Plot Overview, Setting, and Background of Lafayette Community & Campus',
          'Character Analysis: Ummi, Salma, Habib, Labaran, Dr. Dibo, Tomiwa, Bintu',
          'Major Themes: Academic integrity, bribery, vanity, parenting, resilience',
          'Narrative Techniques: Flashback, story within a story, dialogue',
          'Key Episodes: The Disciplinary Committee Hearing, The Fake Kidnapping, Drug Scandal',
        ],
        objectives: [
          'Identify key dialogues, speaker intents, and plot chronology.',
          'Examine moral dilemmas and solutions illustrated in the novel.',
        ],
      },
      {
        title: 'Section D: Oral Forms & Phonetics',
        topics: [
          'Vowels: Pure Vowels (Short and Long Monophthongs) and Diphthongs',
          'Consonants: Voiced and Voiceless Plosives, Fricatives, Affricates, and Clusters',
          'Rhymes and Homophonic Pair Matching',
          'Primary Word Stress and Syllabification (Nouns vs Verbs Stress Shift)',
          'Intonation Contours: Rising and Falling Tunes in Declarative & Interrogative Sentences',
        ],
        objectives: [
          'Differentiate sounds that contrast meaning in spoken English.',
          'Identify syllable bearing primary stress in multi-syllabic words.',
        ],
      },
    ],
  },

  // 2. MATHEMATICS
  {
    id: 'mathematics',
    name: 'Mathematics',
    category: 'Sciences',
    totalTopics: 22,
    recommendedTextbooks: [
      'HIDDEN FACTS IN MATHEMATICS (A Comprehensive SSCE & UTME Master Guide) - M.A. Otumudia',
      'New General Mathematics for Senior Secondary Schools (Books 1 - 3) - Channon, Smith & Head',
      'Essential Mathematics for Senior Secondary Schools - A. Oluwasanmi',
      'Further Mathematics Project (Books 1 - 3) - Tuttuh-Adegun, M.R. et al.',
    ],
    keyExamTips: [
      'Master the 8-key shortcuts on the CBT interface (A, B, C, D for options; N for next, P for previous).',
      'Calculators provided in JAMB CBT are basic onscreen four-function calculators (no scientific trig buttons), so learn standard angles (30°, 45°, 60°).',
      'Expect heavy representation of Quadratic equations, Calculus, Coordinate Geometry, and Probability.',
    ],
    modules: [
      {
        title: 'Module 1: Number and Numeration',
        topics: [
          'Number Bases: Conversion between bases 2 to 10 and basic arithmetic operations',
          'Modular Arithmetic: Addition, subtraction, multiplication in modulo systems',
          'Fractions, Decimals, Approximations, and Significant Figures',
          'Indices, Logarithms (laws and operations), and Surds (simplification & rationalization)',
          'Sets: Notation, union, intersection, complement, Venn diagrams (2 and 3 sets)',
        ],
        objectives: [
          'Manipulate numbers in different bases and solve modular linear equations.',
          'Rationalize binomial surds and evaluate logarithmic expressions without tables.',
        ],
      },
      {
        title: 'Module 2: Algebra and Sequences',
        topics: [
          'Polynomials: Factor & Remainder theorems, roots, partial fractions',
          'Variation: Direct, inverse, joint, and partial variation',
          'Simultaneous and Quadratic Equations (formula, factorisation, completing the square)',
          'Linear and Quadratic Inequalities with Graphical solutions',
          'Arithmetic Progression (AP) and Geometric Progression (GP) - nth terms and sum to infinity',
          'Matrices and Determinants: 2x2 and 3x3 matrices, inverse, Cramer\'s rule',
        ],
        objectives: [
          'Factorize cubic polynomials using factor theorem.',
          'Calculate sum of AP and infinite GP series.',
          'Solve systems of linear equations using matrix determinants.',
        ],
      },
      {
        title: 'Module 3: Geometry and Trigonometry',
        topics: [
          'Euclidean Geometry: Angles on a line, polygons, circle theorems (cyclic quadrilaterals, tangents)',
          'Coordinate Geometry: Distance formula, mid-point, gradient, equation of lines, parallel & perpendicular lines',
          'Trigonometry: Ratios of special angles (0°, 30°, 45°, 60°, 90°), sine and cosine rules',
          'Angles of Elevation and Depression, Bearings and Distances',
          'Mensuration: Perimeter, area, volume of prisms, pyramids, cones, spheres, cylinders',
        ],
        objectives: [
          'Prove and apply circle theorem angles subtended at circumference and center.',
          'Determine distance and bearings using trigonometric rules.',
        ],
      },
      {
        title: 'Module 4: Calculus',
        topics: [
          'Limits and Continuity of algebraic functions',
          'Differentiation: First principles, power rule, product rule, quotient rule, chain rule',
          'Applications of Differentiation: Maxima, minima, rates of change, tangents and normals',
          'Integration: Indefinite and definite integrals of polynomial and simple trigonometric functions',
          'Applications of Integration: Area under curves and volume of revolution',
        ],
        objectives: [
          'Differentiate composite functions and calculate turning points.',
          'Evaluate definite integrals and calculate area bounded by curves.',
        ],
      },
      {
        title: 'Module 5: Statistics and Probability',
        topics: [
          'Representation of Data: Histograms, bar charts, pie charts, cumulative frequency (Ogive)',
          'Measures of Central Tendency: Mean, median, mode for grouped and ungrouped data',
          'Measures of Dispersion: Range, mean deviation, variance, standard deviation',
          'Permutations and Combinations: Fundamental counting principles and arrangements',
          'Probability: Mutually exclusive, independent, and conditional events',
        ],
        objectives: [
          'Calculate standard deviation and quartile deviation for grouped datasets.',
          'Solve real-life probability problems using tree diagrams and addition/multiplication laws.',
        ],
      },
    ],
  },

  // 3. PHYSICS
  {
    id: 'physics',
    name: 'Physics',
    category: 'Sciences',
    totalTopics: 20,
    recommendedTextbooks: [
      'NEW SCHOOL PHYSICS for Senior Secondary Schools - M.W. Anyakoha',
      'Senior Secondary Physics - P.N. Okeke & M.W. Anyakoha',
      'Principles of Physics - Nelkon & Parker',
      'Calculations in Fundamental Physics - Olumuyiwa & Akande',
    ],
    keyExamTips: [
      'Memorize SI units and dimensions for all physical quantities; dimension analysis appears every year.',
      'Know your ray diagrams for concave/convex mirrors and lenses.',
      'Practice projectile motion formula shortcuts: H_max = u²sin²θ/2g, T = 2usinθ/g, R = u²sin2θ/g.',
    ],
    modules: [
      {
        title: 'Module 1: Mechanics and Properties of Matter',
        topics: [
          'Measurement and Units: Fundamental & derived units, dimensions, vernier caliper and micrometer screw gauge',
          'Scalars and Vectors: Vector resolution, resultant of coplanar forces',
          'Motion: Linear motion, equations of uniformly accelerated motion, graphical analysis (v-t graphs)',
          'Projectiles: Trajectory, time of flight, maximum height, horizontal range',
          'Newton\'s Laws of Motion, Conservation of Linear Momentum, Impulse, Collisions',
          'Work, Energy, Power: Mechanical energy conservation, efficiency of simple machines (pulleys, levers, inclined plane)',
          'Elasticity: Hooke\'s Law, Young\'s modulus, tensile stress and strain',
          'Hydrostatics: Density, pressure in fluids, Archimedes\' principle, flotation, surface tension, capillarity, viscosity',
        ],
        objectives: [
          'Derive dimensions of physical quantities and verify equation validity.',
          'Apply projectile equations to objects launched at angles.',
          'Solve mechanical advantage, velocity ratio, and efficiency of machine systems.',
        ],
      },
      {
        title: 'Module 2: Thermal Physics',
        topics: [
          'Temperature and its Measurement: Thermometric properties, scales (Celsius, Kelvin, Fahrenheit)',
          'Thermal Expansion: Linear, superficial, and cubical expansivity of solids and liquids',
          'Quantity of Heat: Specific heat capacity, heat capacity, method of mixtures, electrical method',
          'Latent Heat: Specific latent heat of fusion and vaporization, evaporative cooling',
          'Gas Laws: Boyle\'s Law, Charles\' Law, Pressure Law, Ideal Gas equation (PV = nRT)',
          'Heat Transfer: Conduction, convection, radiation, blackbody radiation, thermos flask',
        ],
        objectives: [
          'Calculate final mixture temperature using conservation of thermal energy.',
          'Relate temperature changes to kinetic energy of gas molecules.',
        ],
      },
      {
        title: 'Module 3: Waves and Optics',
        topics: [
          'Wave Motion: Transverse and longitudinal waves, wave equation y = A sin(ωt ± kx), wave speed v = fλ',
          'Wave Properties: Reflection, refraction, diffraction, interference, polarization',
          'Sound Waves: Speed of sound, resonance tubes, vibration of strings and pipes (open and closed)',
          'Light Reflection: Plane mirrors, spherical mirrors (concave/convex), mirror formula 1/f = 1/u + 1/v',
          'Light Refraction: Snell\'s Law, refractive index, critical angle, total internal reflection, prisms',
          'Lenses and Optical Instruments: Lens maker\'s formula, magnifying glass, microscope, astronomical telescope',
        ],
        objectives: [
          'Compute fundamental and harmonic frequencies of open and closed air columns.',
          'Determine image characteristics, position, and magnification in optical systems.',
        ],
      },
      {
        title: 'Module 4: Electricity and Magnetism',
        topics: [
          'Electrostatics: Electric charges, Coulomb\'s Law, electric field intensity, electric potential',
          'Capacitors: Parallel plate capacitance, series and parallel combination, energy stored in capacitors',
          'Current Electricity: Ohm\'s law, electrical resistance, resistivity, EMF, internal resistance, Kirchhoff\'s laws',
          'Electrical Energy and Power: Joule\'s law, electrical heating, cost of electricity consumption',
          'Magnetism: Magnetic fields, magnetic poles, terrestrial magnetism (angle of dip and declination)',
          'Electromagnetic Induction: Faraday\'s and Lenz\'s laws, mutual/self-inductance, AC generator, step-up and step-down transformers',
          'Alternating Current (AC) Circuits: R-L-C circuits, impedance, resonance frequency, power factor',
        ],
        objectives: [
          'Calculate equivalent resistance and current in complex resistor networks.',
          'Compute resonance frequency and power in AC series circuits.',
        ],
      },
      {
        title: 'Module 5: Modern Physics and Nuclear Energy',
        topics: [
          'Atomic Models: Thomson, Rutherford, and Bohr models of the atom, line emission spectra',
          'Photoelectric Effect: Work function, threshold frequency, Einstein\'s photoelectric equation E = hf - W',
          'X-rays: Production, properties, and applications; Bragg\'s law',
          'Radioactivity: Alpha, beta, gamma decay, half-life calculations, radioactive series',
          'Nuclear Reactions: Fission and fusion, mass defect, binding energy (E = mc²)',
          'Semiconductors and Electronics: Intrinsic and extrinsic semiconductors (p-type and n-type), p-n junction diode, rectification',
        ],
        objectives: [
          'Solve half-life decay equations and evaluate remaining radioactive mass.',
          'Explain energy quantization and calculate kinetic energy of photoelectrons.',
        ],
      },
    ],
  },

  // 4. CHEMISTRY
  {
    id: 'chemistry',
    name: 'Chemistry',
    category: 'Sciences',
    totalTopics: 19,
    recommendedTextbooks: [
      'NEW SCHOOL CHEMISTRY for Senior Secondary Schools - Osei Yaw Ababio',
      'Senior Secondary Chemistry (Books 1 - 3) - S.T. Bajah et al.',
      'Understanding Chemistry for Schools and Colleges - G.O. Ojokuku',
      'Essential Chemistry for Senior Secondary Schools - I.A. Odesina',
    ],
    keyExamTips: [
      'Know the periodic table trends (ionization energy, electronegativity, atomic radius).',
      'Master IUPAC nomenclature for organic functional groups (alkanes, alkenes, alkynes, alkanols, alkanoic acids, esters).',
      'Pay special attention to mole calculations, stoichiometry, and Faraday\'s laws of electrolysis.',
    ],
    modules: [
      {
        title: 'Module 1: Separation Techniques & Nature of Matter',
        topics: [
          'Particulate Nature of Matter: Elements, compounds, mixtures, atomic structure, isotopes',
          'Separation Techniques: Filtration, distillation (fractional/simple), chromatography, crystallization, sublimation',
          'Atomic Structure: Sub-atomic particles, electronic configuration, quantum numbers (s, p, d, f orbitals)',
          'Periodic Table: Periodicity of properties (ionization energy, electron affinity, electronegativity, atomic radii)',
          'Chemical Bonding: Ionic, covalent, coordinate, metallic, and hydrogen bonding',
        ],
        objectives: [
          'Select appropriate separation technique for diverse homogenous and heterogeneous mixtures.',
          'Deduce periodic group and period from electronic configurations.',
        ],
      },
      {
        title: 'Module 2: Stoichiometry and Chemical Reactions',
        topics: [
          'Mole Concept: Avogadro\'s number, molar mass, empirical and molecular formulas',
          'Chemical Equations: Balancing equations, stoichiometry of reactants and products',
          'States of Matter: Kinetic theory of gases, Graham\'s law of diffusion, ideal gas equation',
          'Chemical Energetics: Exothermic and endothermic reactions, enthalpy of formation/combustion, Hess\'s Law',
          'Rates of Chemical Reactions: Factors affecting rates (temperature, concentration, surface area, catalyst)',
          'Chemical Equilibrium: Le Chatelier\'s principle, equilibrium constant (Kc and Kp)',
        ],
        objectives: [
          'Calculate empirical formula from percentage composition by mass.',
          'Predict shifts in equilibrium position caused by temperature and pressure variations.',
        ],
      },
      {
        title: 'Module 3: Acids, Bases, Salts and Redox Systems',
        topics: [
          'Acids, Bases and Salts: Arrhenius and Bronsted-Lowry theories, pH and pOH scale, indicators',
          'Titration: Acid-base titrations, standard solutions, back titration, buffer solutions',
          'Solubility: Solubility curves, solubility product (Ksp), common ion effect',
          'Oxidation-Reduction: Oxidation numbers, balancing redox equations, half-reactions',
          'Electrolysis: Electrolytic vs electrochemical cells, Faraday\'s 1st and 2nd laws, electroplating, extraction of aluminum',
        ],
        objectives: [
          'Calculate mass of substance deposited during electrolysis using Faraday\'s constants.',
          'Balance complicated redox equations in acidic and basic media.',
        ],
      },
      {
        title: 'Module 4: Inorganic Chemistry & Non-Metals',
        topics: [
          'Hydrogen and Water: Preparation, water hardness (temporary/permanent) and softening methods',
          'Halogens: Chlorine, bromine, iodine; bleaching powder, preparation of hydrogen chloride',
          'Oxygen and Sulfur: Allotropes, contact process for sulfuric acid, industrial uses',
          'Nitrogen and Phosphorus: Haber process for ammonia, Ostwald process for nitric acid, fertilizers',
          'Carbon and its Compounds: Diamond, graphite, destructive distillation of coal, oxides of carbon',
          'Metals and Metallurgy: Alkali metals, alkaline earth metals, transition metals, iron extraction in blast furnace',
        ],
        objectives: [
          'Explain industrial manufacturing steps in Haber, Contact, and Solvay processes.',
          'Identify confirmatory qualitative tests for cations and anions.',
        ],
      },
      {
        title: 'Module 5: Organic Chemistry and Industrial Processes',
        topics: [
          'Hydrocarbons: Alkanes (substitution, cracking), Alkenes (addition, polymerization), Alkynes',
          'Aromatic Hydrocarbons: Benzene structure, resonance, electrophilic substitution',
          'Alkanols and Alkanoic Acids: Fermentation, esterification, saponification',
          'Fats, Oils, and Soaps: Saturated and unsaturated lipids, detergents vs soaps',
          'Synthetic Polymers and Giant Molecules: Addition and condensation polymerization, plastics, nylon, proteins, carbohydrates',
          'Environmental Pollution: Greenhouse gases, acid rain, oil spillage, ozone layer depletion',
        ],
        objectives: [
          'Name organic structures systematically according to IUPAC conventions.',
          'Distinguish condensation polymers from addition polymers with structural examples.',
        ],
      },
    ],
  },

  // 5. BIOLOGY
  {
    id: 'biology',
    name: 'Biology',
    category: 'Sciences',
    totalTopics: 18,
    recommendedTextbooks: [
      'MODERN BIOLOGY for Senior Secondary Schools - Sarojini T. Ramalingam',
      'Senior Secondary Biology (Books 1 - 3) - Ndu, F.O.C. et al.',
      'College Biology - Idodo Umeh',
      'Handbook of Practical Biology - E.O. Akintola',
    ],
    keyExamTips: [
      'Review anatomical diagrams of flowers, mammalian heart, eye, ear, nephron, and reflex arc.',
      'Understand Mendelian inheritance genetics crosses (monohybrid and dihybrid ratios 3:1, 9:3:3:1).',
      'Know the ecological pyramid relationships, nitrogen cycle, and carbon cycle.',
    ],
    modules: [
      {
        title: 'Module 1: Cell Biology and Organization of Life',
        topics: [
          'Characteristics of Living Organisms and Levels of Organization (Cell, Tissue, Organ, System)',
          'Cell Structure and Functions: Organelles, plant vs animal cells, prokaryotes vs eukaryotes',
          'Cell Activities: Diffusion, osmosis, plasmolysis, turgidity, active transport',
          'Cell Division: Mitosis (stages and significance in growth) and Meiosis (gametogenesis)',
          'Classification of Living Things: Kingdoms Monera, Protista, Fungi, Plantae, Animalia',
        ],
        objectives: [
          'Compare ultrastructure of plant and animal cells under electron microscope.',
          'Demonstrate osmosis using living tissue (e.g. potato osmometer).',
        ],
      },
      {
        title: 'Module 2: Plant and Animal Physiology',
        topics: [
          'Nutrition: Autotrophic (photosynthesis light & dark stages) and Heterotrophic nutrition',
          'Digestive System: Alimentary canal, enzymes, dentition, balanced diet, deficiencies',
          'Transport Systems: Vascular bundles in plants (xylem, phloem, transpiration), mammalian circulatory system',
          'Respiration: Aerobic and anaerobic respiration, glycolysis, Krebs cycle, mammalian lungs and gills in fish',
          'Excretion and Homeostasis: Kidneys (nephron function, ultrafiltration, osmoregulation), liver, skin',
          'Support and Movement: Skeletons (hydrostatic, exoskeleton, endoskeleton), bones, joints, muscles',
        ],
        objectives: [
          'Trace the biochemical pathways of light and dark reactions in photosynthesis.',
          'Explain ultrafiltration and selective reabsorption in the nephron.',
        ],
      },
      {
        title: 'Module 3: Coordination, Reproduction and Development',
        topics: [
          'Nervous System: Neurons, reflex action, brain structure, spinal cord, sympathetic & parasympathetic systems',
          'Sense Organs: Eye (structure, accommodation, defects and corrections), Ear (hearing and balance)',
          'Endocrine System: Hormones in animals (pituitary, thyroid, adrenal, pancreas) and plants (auxins, gibberellins)',
          'Reproduction in Plants: Flower structure, pollination, fertilization, fruit/seed dispersal',
          'Reproduction in Animals: Male and female reproductive systems, menstrual cycle, fertilization, gestation',
        ],
        objectives: [
          'Differentiate hormonal from nervous coordination mechanisms.',
          'Describe visual defects (myopia, hypermetropia, astigmatism) and their corrective lenses.',
        ],
      },
      {
        title: 'Module 4: Ecology and Environmental Biology',
        topics: [
          'Ecological Concepts: Biomes, habitats (aquatic, terrestrial), niche, population dynamics',
          'Energy Flow in Ecosystems: Food chains, food webs, trophic levels, ecological pyramids',
          'Nutrient Cycling: Water cycle, carbon cycle, nitrogen cycle (nitrogen fixation, nitrification, denitrification)',
          'Ecological Succession: Primary and secondary succession, climax community',
          'Pollution and Conservation: Air, water, soil pollution; natural resource conservation and national parks',
        ],
        objectives: [
          'Construct food webs and calculate energy transfer efficiency between trophic levels.',
          'Detail microorganisms involved in the nitrogen cycle transformations.',
        ],
      },
      {
        title: 'Module 5: Heredity, Variation and Evolution',
        topics: [
          'Mendelian Genetics: Law of segregation, law of independent assortment, dominant and recessive traits',
          'Inheritance Patterns: Monohybrid crosses, sex-linked traits (hemophilia, color blindness), ABO blood groups, Rhesus factor',
          'Chromosomes and DNA: Structure of DNA, RNA, replication, mutations (gene and chromosomal)',
          'Variation: Morphological (height, fingerprints) and physiological (blood group, tongue rolling) variation',
          'Theories of Evolution: Lamarck\'s theory, Darwin\'s natural selection, modern synthesis, evidence for evolution',
        ],
        objectives: [
          'Predict offspring genotypes and phenotypes using Punnett squares for co-dominant and sex-linked traits.',
          'Evaluate Darwinian evidence for natural selection in peppered moths and antibiotic resistance.',
        ],
      },
    ],
  },

  // 6. ECONOMICS
  {
    id: 'economics',
    name: 'Economics',
    category: 'Social Sciences / Commercial',
    totalTopics: 17,
    recommendedTextbooks: [
      'Comprehensive Economics for Senior Secondary Schools - J.U. Anyaele',
      'Economics: A Complete Course for West Africa - C.E. Ande',
      'Fundamentals of Economics - R.A.I. Anyanwuocha',
      'Principles of Economics - Stanlake, G.F.',
    ],
    keyExamTips: [
      'Be ready to calculate elasticity of demand (price, income, cross elasticity) and interpret elasticity curves.',
      'Understand national income accounting identities (GDP, GNP, NNP, disposable income).',
      'Master the cost and revenue curves: MC cuts AC and AVC at their minimum points.',
    ],
    modules: [
      {
        title: 'Module 1: Basic Economic Concepts & Theory of Consumer Behavior',
        topics: [
          'Scarcity, Choice, Scale of Preference, and Opportunity Cost',
          'Economic Systems: Capitalism, Socialism, Mixed Economy, and their solutions to resource allocation',
          'Production Possibility Curve (PPC) and efficiency',
          'Theory of Consumer Behavior: Utility concept, total and marginal utility, law of diminishing marginal utility',
          'Indifference Curves: Budget line, consumer equilibrium, income and substitution effects',
        ],
        objectives: [
          'Construct and interpret scale of preference and production possibility frontiers.',
          'Determine consumer equilibrium using the equimarginal principle (MUx/Px = MUy/Py).',
        ],
      },
      {
        title: 'Module 2: Price Determination, Demand and Supply',
        topics: [
          'Theory of Demand: Law of demand, demand schedule, shift vs movement along demand curve',
          'Theory of Supply: Law of supply, supply determinants, elasticity of supply',
          'Elasticity of Demand: Price, income, and cross elasticity formulas and interpretations',
          'Market Equilibrium: Equilibrium price and quantity, effects of changes in demand/supply',
          'Price Controls: Maximum and minimum price legislation (price ceilings and floors), rationing, subsidies',
        ],
        objectives: [
          'Calculate price and income elasticity of demand from algebraic and tabular data.',
          'Demonstrate graphical consequences of government price fixing.',
        ],
      },
      {
        title: 'Module 3: Theory of Production and Market Structures',
        topics: [
          'Factors of Production: Land, labour, capital, entrepreneurship and their rewards',
          'Division of Labour and Specialization: Advantages and limitations',
          'Laws of Returns: Short-run production, total product (TP), marginal product (MP), average product (AP)',
          'Cost and Revenue Concepts: Fixed, variable, total, average, and marginal costs and revenues',
          'Market Structures: Perfect competition, monopoly, monopolistic competition, oligopoly',
        ],
        objectives: [
          'Calculate profit-maximizing output where MC = MR under perfect competition and monopoly.',
          'Distinguish short-run and long-run equilibrium characteristics across market models.',
        ],
      },
      {
        title: 'Module 4: Macroeconomics, Money and Public Finance',
        topics: [
          'National Income Accounting: GDP, GNP, NNP, NI, personal and disposable income, calculation methods (output, income, expenditure)',
          'Money and Banking: Functions of money, value of money, Central Bank monetary policy tools, commercial banks credit creation',
          'Inflation and Deflation: Demand-pull, cost-push inflation, measurement, consequences, control measures',
          'Public Finance: Government revenue sources, progressive/regressive taxation, national budget (deficit, surplus), national debt',
        ],
        objectives: [
          'Calculate GDP and per capita income using circular flow accounting methods.',
          'Explain how monetary and fiscal policies stabilize inflationary gaps.',
        ],
      },
      {
        title: 'Module 5: International Trade & Economic Development',
        topics: [
          'International Trade: Absolute and comparative advantage theories, terms of trade, tariffs and protectionism',
          'Balance of Payments (BOP): Current account, capital account, BOP deficit correction measures',
          'Economic Integration: ECOWAS, AfCFTA, OPEC, IMF, World Bank, African Development Bank',
          'Economic Growth vs Economic Development: Indicators, Millennium Development Goals, poverty alleviation strategies',
        ],
        objectives: [
          'Compute gains from trade based on Ricardian comparative cost advantage.',
          'Identify structural causes of balance of payments disequilibrium in developing economies.',
        ],
      },
    ],
  },

  // 7. GOVERNMENT
  {
    id: 'government',
    name: 'Government',
    category: 'Arts & Humanities',
    totalTopics: 16,
    recommendedTextbooks: [
      'Government for Senior Secondary Schools - B.A. Adelaja',
      'Essential Government for Senior Secondary Schools - Dibie, C.C.',
      'Comprehensive Government for Senior Secondary Schools - J.U. Anyaele',
      'Nigerian Government and Politics - Oyediran, O.',
    ],
    keyExamTips: [
      'Know the major pre-colonial political systems in Nigeria: Oyo Empire (checks and balances), Hausa-Fulani (centralized emirate), Igbo (acephalous/segmentary).',
      'Study constitutional milestones: Clifford (1922), Richards (1946), Macpherson (1951), Lyttelton (1954), Independence (1960), Republican (1963).',
      'Remember the functions of the 3 arms of government and separation of powers.',
    ],
    modules: [
      {
        title: 'Module 1: Elements of Government and Political Concepts',
        topics: [
          'Definition of Government: Structure, functions, and government as an academic discipline',
          'Basic Political Concepts: State, sovereignty, power, authority, legitimacy, political socialization',
          'Forms of Government: Democracy, autocracy, monarchy, aristocracy, theocracy, totalitarianism',
          'Organs of Government: Legislature (unicameral/bicameral), Executive, Judiciary, independence of the judiciary',
          'Rule of Law, Fundamental Human Rights, and Constitutionalism',
        ],
        objectives: [
          'Distinguish state sovereignty from governmental authority.',
          'Assess mechanisms for upholding the independence of the judiciary in constitutional democracies.',
        ],
      },
      {
        title: 'Module 2: Political Ideologies and Political Systems',
        topics: [
          'Ideologies: Capitalism, socialism, communism, fascism, feudalism, communalism',
          'Constitutions: Written and unwritten, rigid and flexible constitutions',
          'Structure of Government: Unitary, federal, and confederal systems of government',
          'Systems of Government: Parliamentary (Cabinet) system vs Presidential system',
          'Political Parties: Party systems (one-party, two-party, multi-party), pressure groups, public opinion',
        ],
        objectives: [
          'Compare parliamentary and presidential executives regarding executive-legislative relations.',
          'Analyze role of pressure groups in influencing public policy.',
        ],
      },
      {
        title: 'Module 3: Pre-Colonial Administration in Nigeria',
        topics: [
          'Pre-Colonial Hausa-Fulani System: Emirate system, Hakimi, Alkali courts, centralized administration',
          'Pre-Colonial Yoruba System: Oyo Empire, Alaafin, Oyomesi (council of state), Ogboni cult, checks and balances',
          'Pre-Colonial Igbo System: Segmentary/acephalous structure, Ama-ala, Ofo titleholders, age grades, Umuada',
        ],
        objectives: [
          'Contrast decentralized pre-colonial Igbo politics with centralized Hausa-Fulani emirate structure.',
          'Explain institutional checks exercised by the Oyomesi over the Alaafin in old Oyo.',
        ],
      },
      {
        title: 'Module 4: Colonial Administration and Constitutional Development',
        topics: [
          'Indirect Rule: Principles, British colonial policy, success in North, partial success in West, failure in Eastern Nigeria (Aba Women\'s Riot of 1929)',
          'Clifford Constitution (1922): Introduction of elective principle, creation of Legislative Council',
          'Richards Constitution (1946): Regionalism, integration of North and South in legislative council',
          'Macpherson Constitution (1951): Central executive council, quasifederalism, constitutional breakdown',
          'Lyttelton Constitution (1954): Formal federalism, premier offices, regional civil service and judiciary',
          'Independence (1960) and Republican (1963) Constitutions',
          'The 1979 and 1999 Constitutions of the Federal Republic of Nigeria',
        ],
        objectives: [
          'Identify limitations of the elective principle under the Clifford Constitution.',
          'Analyze the landmark provisions establishing federalism under the 1954 Lyttelton Constitution.',
        ],
      },
      {
        title: 'Module 5: Nigerian Foreign Policy and International Organizations',
        topics: [
          'Principles of Nigerian Foreign Policy: Afrocentrism, non-alignment, sovereign equality',
          'Nigeria and Regional Organizations: ECOWAS, African Union (AU), NEPAD',
          'Nigeria and Global Organizations: United Nations (UN), Commonwealth of Nations, OPEC',
          'Major Political Crises in Nigeria: Census crisis (1962/63), Action Group crisis (1962), Nigerian Civil War (1967-1970)',
        ],
        objectives: [
          'Appraise Nigeria\'s peacekeeping roles and anti-apartheid campaigns in Africa.',
          'Identify structural objectives of ECOWAS and AfCFTA.',
        ],
      },
    ],
  },

  // 8. LITERATURE IN ENGLISH
  {
    id: 'literature',
    name: 'Literature in English',
    category: 'Arts & Humanities',
    totalTopics: 15,
    recommendedTextbooks: [
      'A Glossary of Literary Terms - M.H. Abrams',
      'Exam Focus: Literature in English for WASSCE & UTME - J.O.J. Nwachukwu-Agbada',
      'The Lion and the Jewel - Wole Soyinka',
      'Look Back in Anger - John Osborne',
      'Fences - August Wilson',
    ],
    keyExamTips: [
      'Master the elements of poetry: rhyme scheme, meter, imagery, persona, tone, diction.',
      'Know the difference between dramatic irony, situational irony, and verbal irony.',
      'Memorize characters, quotes, and central conflicts in prescribed African and Non-African drama/prose.',
    ],
    modules: [
      {
        title: 'Module 1: Literary Appreciation & Literary Devices',
        topics: [
          'Elements of Drama: Conflict, plot, characterization, dialogue, soliloquy, aside, hubris, catharsis, dramatic irony',
          'Elements of Poetry: Stanzaic forms (sonnet, ode, ballad, elegy, epic), rhyme, meter, rhythm, enjambment',
          'Elements of Prose: Narrative voice (first person, third person omniscient), theme, setting, atmosphere',
          'Figures of Speech: Metaphor, simile, personification, hyperbole, metonymy, synecdoche, oxymoron, paradox',
        ],
        objectives: [
          'Identify figures of speech and poetic devices in unseen excerpts.',
          'Analyze dramatic techniques and character motivations.',
        ],
      },
      {
        title: 'Module 2: Prescribed African Drama & Poetry',
        topics: [
          'The Lion and the Jewel (Wole Soyinka): Tradition vs Modernity, Lakunle, Baroka, Sidi',
          'Let Me Die Alone (John K. Kargbo): Themes of power, female leadership, betrayal',
          'African Poems: "Black Woman" (Leopold Sedar Senghor), "The Leader and the Led" (Niyi Osundare), "Song of the Women of My Land" (Oumar Farouk Sesay)',
        ],
        objectives: [
          'Examine thematic conflicts between traditional African values and Westernization.',
          'Interpret symbolic diction and imagery in prescribed African verse.',
        ],
      },
      {
        title: 'Module 3: Prescribed Non-African Drama & Poetry',
        topics: [
          'Look Back in Anger (John Osborne): Anger, post-war British disillusionment, Jimmy Porter, Alison',
          'Fences (August Wilson): Race, baseball metaphor, father-son conflict, Troy Maxson',
          'Non-African Poems: "The Good-Morrow" (John Donne), "Caged Bird" (Maya Angelou), "Do Not Go Gentle into That Good Night" (Dylan Thomas)',
        ],
        objectives: [
          'Analyze racial barriers and familial fracture in August Wilson\'s Fences.',
          'Evaluate metaphysical conceits in John Donne\'s love poetry.',
        ],
      },
      {
        title: 'Module 4: Prescribed African and Non-African Prose',
        topics: [
          'Unexpected Joy at Dawn (Alex Agyei-Agyiri): Migration, Xenophobia, Alien Compliance Order 1969',
          'Second Class Citizen (Buchi Emecheta): Gender oppression, racial prejudice in London, Adah Obi\'s determination',
          'Wuthering Heights (Emily Brontë): Obsessive love, revenge, Heathcliff and Catherine Earnshaw',
        ],
        objectives: [
          'Trace Adah\'s heroic struggle against domestic abuse and patriarchal constraints in Second Class Citizen.',
          'Examine Gothic elements and generational revenge in Wuthering Heights.',
        ],
      },
    ],
  },

  // 9. COMMERCE
  {
    id: 'commerce',
    name: 'Commerce',
    category: 'Social Sciences / Commercial',
    totalTopics: 15,
    recommendedTextbooks: [
      'Comprehensive Commerce for Senior Secondary Schools - J.U. Anyaele',
      'Senior Secondary Commerce (Books 1 - 3) - E.U. Ahukannah',
      'Essential Commerce for Senior Secondary Schools - O.A. Longe',
    ],
    keyExamTips: [
      'Distinguish home trade from foreign trade documents (consular invoice, bill of lading, indent, consular bill).',
      'Understand functions of commercial banks, stock exchange, and insurance principles (utmost good faith, insurable interest, indemnity).',
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Commerce & Production',
        topics: [
          'Scope of Commerce: History, branches, importance, trade and aids to trade',
          'Production: Primary, secondary, tertiary production; factors of production and rewards',
          'Occupation: Industrial, commercial, service occupations',
        ],
        objectives: ['Classify commercial activities and examine interdependence of production stages.'],
      },
      {
        title: 'Module 2: Trade (Home & International)',
        topics: [
          'Home Trade: Wholesale trade (functions, middlemen elimination debates), Retail trade (small/large-scale retailing)',
          'Foreign Trade: Import, export, entrepôt trade, balance of trade, balance of payments',
          'Trade Documents: Proforma invoice, bill of lading, charter party, certificate of origin, dock warrant',
          'Customs and Excise: Bonded warehouse, customs tariff, port authority operations',
        ],
        objectives: ['Differentiate international shipping and payment instruments.'],
      },
      {
        title: 'Module 3: Business Organizations & Capital',
        topics: [
          'Sole Proprietorship, Partnership (deeds, dissolution, types of partners)',
          'Limited Liability Companies: Private vs public companies, formation, prospectus, memorandum and articles of association',
          'Public Corporations and Cooperative Societies: Privatization, commercialization, nationalization',
          'Business Capital: Share capital, loan capital, working capital, debentures, reserves',
        ],
        objectives: ['Evaluate rights and liabilities across corporate ownership structures.'],
      },
      {
        title: 'Module 4: Banking, Insurance and Stock Exchange',
        topics: [
          'Banking: Commercial banking, central bank functions, clearing house, electronic banking',
          'Insurance: Principles (indemnity, insurable interest, subrogation, proximate cause), life and non-life assurance',
          'The Stock Exchange: Primary vs secondary capital markets, bulls, bears, stags, brokers, jobbers',
          'Consumer Protection: Consumer rights, agencies (FCCPC, NAFDAC, SON)',
        ],
        objectives: ['Apply insurance compensation principles in indemnification calculations.'],
      },
    ],
  },

  // 10. PRINCIPLES OF ACCOUNTS (FINANCIAL ACCOUNTING)
  {
    id: 'accounts',
    name: 'Principles of Accounts',
    category: 'Social Sciences / Commercial',
    totalTopics: 16,
    recommendedTextbooks: [
      'Business Accounting (Books 1 & 2) - Frank Wood & Alan Sangster',
      'Essential Financial Accounting - R.A. Ibrahim',
      'Comprehensive Financial Accounting - A.O. Longe & R.A. Kazeem',
    ],
    keyExamTips: [
      'Master the accounting equation: Assets = Capital + Liabilities.',
      'Know the difference between Capital Expenditure and Revenue Expenditure.',
      'Understand adjustments in final accounts: Accruals, Prepayments, Bad Debts, and Depreciation.',
    ],
    modules: [
      {
        title: 'Module 1: Accounting Principles & Double Entry System',
        topics: [
          'Nature and Scope of Accounting: Users of accounting information, accounting conventions (going concern, accruals, prudence)',
          'The Accounting Equation and Balance Sheet representation',
          'Books of Prime Entry: Sales day book, purchases day book, returns day books, journal proper',
          'The Cash Book: Single, double, and three-column cash books; petty cash book (imprest system)',
          'The Ledger and Double Entry Rules: Real, personal, and nominal accounts',
        ],
        objectives: ['Post transactions through prime entry books into appropriate ledger folios.'],
      },
      {
        title: 'Module 2: Trial Balance, Errors and Bank Reconciliation',
        topics: [
          'The Trial Balance: Preparation, uses, and limitations',
          'Correction of Errors: Errors not affecting trial balance agreement (omission, commission, principle, compensation)',
          'The Suspense Account: Rectification of single-entry and extraction errors',
          'Bank Reconciliation Statement: Causes of divergence, adjusted cash book, reconciliation preparation',
        ],
        objectives: ['Prepare bank reconciliation statements eliminating timing discrepancies.'],
      },
      {
        title: 'Module 3: Final Accounts of a Sole Trader',
        topics: [
          'Trading, Profit and Loss Account (Statement of Profit or Loss)',
          'Balance Sheet (Statement of Financial Position)',
          'Year-End Adjustments: Accruals, prepayments, provision for bad and doubtful debts, discounts',
          'Depreciation of Non-Current Assets: Straight line, reducing balance, sum-of-years digits methods',
        ],
        objectives: ['Compute net profit and prepare properly classified financial position statements.'],
      },
      {
        title: 'Module 4: Partnership & Company Accounts',
        topics: [
          'Partnership Accounts: Profit and loss appropriation account, partners\' capital and current accounts, goodwill on admission',
          'Company Accounts: Share capital (ordinary, preference), share issues, debentures, published accounts',
          'Incomplete Records and Single Entry: Conversion to double entry',
          'Departmental and Manufacturing Accounts: Production cost, prime cost, factory overheads',
        ],
        objectives: ['Draft manufacturing statements isolating prime costs and factory costs of production.'],
      },
    ],
  },

  // 11. CHRISTIAN RELIGIOUS STUDIES (CRS)
  {
    id: 'crs',
    name: 'Christian Religious Studies',
    category: 'Arts & Humanities',
    totalTopics: 14,
    recommendedTextbooks: [
      'The Holy Bible (Revised Standard Version)',
      'Christian Religious Knowledge for Senior Secondary Schools - Quarcoopome, T.N.O.',
      'Essential Christian Religious Studies - O.A. Adeoti',
    ],
    keyExamTips: [
      'Know the historical biblical narratives: Sovereignty of God, Leadership qualities of Moses, Joshua, and Deborah.',
      'Focus on the Gospels: Parables of the Kingdom, Miracles of Jesus, the Passion, and Resurrection.',
      'Study Paul\'s epistles on Justification by Faith, Spiritual Gifts, and Christian Living.',
    ],
    modules: [
      {
        title: 'Module 1: The Sovereignty of God & Early Leadership in Israel',
        topics: [
          'Creation: First and second creation accounts in Genesis, sovereignty over the universe',
          'Leadership: Moses leading the Exodus, Joshua\'s courage, Deborah\'s faith and victory',
          'God\'s Care and Guidance: The crossing of the Red Sea, provision of manna and water',
          'Parental Responsibility: Eli and Samuel\'s parental failures, Asa\'s reforms',
        ],
        objectives: ['Contrast creation accounts and trace divine deliverance through chosen leaders.'],
      },
      {
        title: 'Module 2: Kingship, Prophecy and Religious Reforms',
        topics: [
          'The Monarchy: Saul\'s disobedience, David\'s submission to God, Solomon\'s wisdom and decline',
          'Religious Tension: Elijah and the Prophets of Baal on Mount Carmel',
          'True Religion and Social Justice: Amos and Hosea\'s prophetic messages',
          'Religious Reforms: Josiah\'s discovery of the Book of the Law and national reformation',
        ],
        objectives: ['Analyze prophetic demands for social justice versus empty ceremonial religion.'],
      },
      {
        title: 'Module 3: The Earthly Ministry of Jesus Christ',
        topics: [
          'The Annunciation, Birth, and Baptism of Jesus by John the Baptist',
          'The Temptation of Jesus in the wilderness: Spiritual victory over flesh and pride',
          'The Call of the Disciples: Demands and rewards of discipleship',
          'Miracles of Jesus: Nature miracles, healing miracles, raising of the dead',
          'The Parables: Good Samaritan, Prodigal Son, Sower, Wheat and Tares',
          'The Passion, Crucifixion, Resurrection, and Ascension of Christ',
        ],
        objectives: ['Interpret the theological significance of Christ\'s resurrection and moral lessons of the parables.'],
      },
      {
        title: 'Module 4: The Early Church and Paul\'s Epistles',
        topics: [
          'The Holy Spirit and the Day of Pentecost: Peter\'s sermon and the birth of the Church',
          'Fellowship, Trials and Persecution: Stephen\'s martyrdom, Saul\'s conversion',
          'Justification by Faith (Romans): Abraham as the father of faith, peace with God',
          'The Fruit of the Spirit and Spiritual Gifts (1 Corinthians 12 & 13, Galatians 5)',
          'Christian Living in the Community: Humility, civic duties, subjection to constituted authority',
        ],
        objectives: ['Apply Pauline teachings on spiritual unity, love, and justification to contemporary life.'],
      },
    ],
  },

  // 12. ISLAMIC RELIGIOUS STUDIES (IRS)
  {
    id: 'irs',
    name: 'Islamic Religious Studies',
    category: 'Arts & Humanities',
    totalTopics: 14,
    recommendedTextbooks: [
      'The Glorious Qur\'an (Text, Translation and Commentary) - A. Yusuf Ali',
      'Studies in Islam - B.A. Lemu',
      'Islamic Religious Knowledge for WASSCE & UTME - M.A. Muhibbu-Din',
    ],
    keyExamTips: [
      'Memorize the selected Surahs (Al-Fatihah, Al-Baqarah 1-5, Ayat al-Kursi, An-Nas, Al-Falaq, Al-Ikhlas) with translations and lessons.',
      'Understand the 6 articles of faith (Iman) and 5 pillars of Islam (Arkan al-Islam).',
      'Study Hadith 1 to 10 of An-Nawawi\'s collection thoroughly.',
    ],
    modules: [
      {
        title: 'Module 1: The Glorious Qur\'an and Revelation',
        topics: [
          'Revelation of the Qur\'an: Preservation, compilation under Caliph Abu Bakr and standardization under Uthman',
          'Study of Selected Surahs: Surah Al-Fatihah, Al-Alaq (1-5), Al-Qadr, Al-Ikhlas, Al-Falaq, An-Nas',
          'Tafsir (Exegesis): Principles, historical background, and legal implications of divine verses',
        ],
        objectives: ['Recite and deduce moral and spiritual principles from prescribed chapters.'],
      },
      {
        title: 'Module 2: Hadith & Sunnah',
        topics: [
          'Definition of Hadith, Sanad (chain of transmitters), and Matn (text)',
          'Classification of Hadith: Sahih, Hasan, Da\'if, Mawdu',
          'Study of An-Nawawi\'s Hadith Collections: Hadith 1 (Intentions), Hadith 2 (Islam, Iman, Ihsan), Hadith 3, 5, 7, 9',
        ],
        objectives: ['Distinguish authentic traditions from fabricated narratives and articulate ethical applications.'],
      },
      {
        title: 'Module 3: Tawhid (Monotheism) and Fiqh (Jurisprudence)',
        topics: [
          'Articles of Faith (Iman): Belief in Allah, Angels, Books, Prophets, Day of Judgment, Qadar (Predestination)',
          'Shirk and its Manifestations: Major and minor association of partners with Allah',
          'Pillars of Islam: Taharah (Purification, Wudu, Ghusl, Tayammum), Salat, Zakat, Sawm (Ramadan), Hajj',
          'Islamic Family Law: Marriage (Nikah), Divorce (Talaq), Inheritance (Mirath)',
        ],
        objectives: ['Demonstrate canonical requirements of worship and inheritance shares.'],
      },
      {
        title: 'Module 4: Islamic History and Civilizations',
        topics: [
          'The Jahiliyyah (Pre-Islamic Arabia): Social, religious, and economic realities',
          'Prophet Muhammad\'s (SAW) Life: Call to prophethood, persecution in Makkah, Hijrah to Madinah, Treaty of Hudaybiyyah',
          'The Rightly Guided Caliphs (Khulafa\'ur-Rashidun): Abu Bakr, Umar, Uthman, Ali and their achievements',
          'Islam in West Africa: Spread via trans-Saharan trade, Usman dan Fodio\'s Jihad in Northern Nigeria',
        ],
        objectives: ['Evaluate socio-political transformations instigated by Islam in the Sokoto Caliphate.'],
      },
    ],
  },

  // 13. GEOGRAPHY
  {
    id: 'geography',
    name: 'Geography',
    category: 'Sciences',
    totalTopics: 16,
    recommendedTextbooks: [
      'Senior Secondary Geography - N.P. Iloeje',
      'Certificate Physical and Human Geography - Goh Cheng Leong',
      'General Geography in Diagrams - R.B. Bunnett',
    ],
    keyExamTips: [
      'Practice map reading: Scales, grid references, contours, gradient calculation, drainage patterns.',
      'Know the earth\'s structure, plate tectonics, vulcanicity, and rock types (igneous, sedimentary, metamorphic).',
      'Study climatic zones (Köppen classification) and factors affecting weather.',
    ],
    modules: [
      {
        title: 'Module 1: Practical Geography & Map Reading',
        topics: [
          'Map Scale: Representative fraction, linear, statement scale; scale conversions and reduction/enlargement',
          'Direction and Bearings: True bearing, magnetic bearing, back bearing',
          'Relief Representation: Contours, spot heights, trigonometric stations, gradient calculations',
          'Drainage Patterns: Dendritic, trellis, radial, rectangular, centripetal drainage networks',
          'Interpretation of Topographical Maps and Human Settlement distributions',
        ],
        objectives: ['Calculate slope gradients and interpret physical/human landscape features on maps.'],
      },
      {
        title: 'Module 2: Physical Geography of the Earth',
        topics: [
          'The Earth in the Solar System: Shape, size, rotation (day & night), revolution (seasons, solstices)',
          'Earth\'s Internal Structure: Crust (sial & sima), mantle, core; Continental Drift and Plate Tectonics',
          'Rocks: Formation, classification (igneous, sedimentary, metamorphic), economic importance',
          'Internal Landform Processes: Earthquakes, vulcanicity (intrusive/extrusive landforms), folding and faulting',
          'External Landform Processes: Weathering (physical, chemical, biological), mass wasting, action of rivers, wind, and waves',
        ],
        objectives: ['Explain landform evolution resulting from fluvial, aeolian, and tectonic forces.'],
      },
      {
        title: 'Module 3: Climatology and Biogeography',
        topics: [
          'Weather and Climate: Elements, meteorological instruments, factors influencing climate',
          'Atmospheric Pressure and Winds: Planetary wind systems, ITCZ, tropical continental vs tropical maritime air masses',
          'Climatic Types: Equatorial, Savanna (Sudan/Sahel), Tropical Desert, Mediterranean, Tundra',
          'Vegetation Belts: Tropical rainforest, Savanna grasslands, mangrove swamps, desert scrub',
        ],
        objectives: ['Analyze climatic graphs and link climate zones to characteristic vegetation adaptations.'],
      },
      {
        title: 'Module 4: Regional Geography of Nigeria & World Trade',
        topics: [
          'Nigeria: Location, size, relief, drainage basins (Niger-Benue), mineral and agricultural resources',
          'Population in Nigeria: Density, distribution patterns, rural-urban migration, urbanization problems',
          'Economic Activities in Nigeria: Agriculture, manufacturing, petroleum industry, tourism',
          'Transportation and International Trade across West Africa',
        ],
        objectives: ['Appraise geographical determinants of economic development across Nigerian geopolitical zones.'],
      },
    ],
  },

  // 14. AGRICULTURAL SCIENCE
  {
    id: 'agricultural_science',
    name: 'Agricultural Science',
    category: 'Sciences',
    totalTopics: 15,
    recommendedTextbooks: [
      'Comprehensive Agricultural Science - O.A. Iwena',
      'Senior Secondary Agricultural Science - J.O. Adeniyi et al.',
      'Essential Agricultural Science - O.A. Akinsanya',
    ],
    keyExamTips: [
      'Understand soil chemistry: Soil pH, macro/micronutrients, soil texture triangle.',
      'Memorize animal anatomy: Ruminant vs non-ruminant digestive systems.',
      'Know common crop and livestock diseases (pathogen, symptoms, control measures).',
    ],
    modules: [
      {
        title: 'Module 1: General Agriculture & Soil Science',
        topics: [
          'Meaning, Scope and Importance of Agriculture to National Economy',
          'Agricultural Ecology: Ecological zones in Nigeria, biotic and abiotic factors',
          'Land and its Uses: Agricultural and non-agricultural land use, land tenure systems in Nigeria',
          'Soil Formation and Composition: Weathering of rocks, soil profile, texture, structure',
          'Soil Fertility: Macro and micro nutrients, organic manure, inorganic fertilizers, nitrogen/carbon cycles',
        ],
        objectives: ['Analyze soil physical properties and calculate fertilizer requirements.'],
      },
      {
        title: 'Module 2: Crop Production and Protection',
        topics: [
          'Classification of Crops: Botanical, agronomic, life-cycle classifications',
          'Husbandry of Selected Crops: Cereals (maize, rice), legumes (cowpea), tubers (cassava, yam), tree crops (cocoa, oil palm)',
          'Crop Propagation and Nursery Practices: Sexual and asexual methods (budding, grafting, layering)',
          'Weeds and Weed Control: Common weeds, cultural, biological, and chemical control',
          'Crop Pests and Diseases: Insect pests, fungal, bacterial, and viral diseases and integrated pest management',
        ],
        objectives: ['Formulate pest and disease management plans for commercial cash crops.'],
      },
      {
        title: 'Module 3: Animal Science and Livestock Management',
        topics: [
          'Anatomy and Physiology of Farm Animals: Digestive system (ruminant vs monogastric), circulatory and reproductive systems',
          'Livestock Management: Cattle, sheep, goats, pigs, and poultry housing and brooding',
          'Animal Nutrition: Feeds, feedstuffs, balanced rations, nutrient deficiencies',
          'Animal Health: Endoparasites and ectoparasites, viral (Newcastle, rinderpest), bacterial (anthrax), and protozoan (trypanosomiasis) diseases',
        ],
        objectives: ['Distinguish ruminant from non-ruminant digestion and formulate balanced livestock feeds.'],
      },
      {
        title: 'Module 4: Agricultural Economics, Farm Mechanization & Extension',
        topics: [
          'Farm Machinery: Tractors, implements (ploughs, harrows, ridges), maintenance',
          'Agricultural Economics: Factors of production, law of diminishing returns in agriculture, farm budgeting',
          'Agricultural Marketing: Channels, marketing boards, problems of agricultural distribution',
          'Agricultural Extension: Methods of disseminating farm innovations to rural farmers',
        ],
        objectives: ['Prepare farm enterprise budgets and evaluate extension communication techniques.'],
      },
    ],
  },

  // 15. HISTORY
  {
    id: 'history',
    name: 'History',
    category: 'Arts & Humanities',
    totalTopics: 14,
    recommendedTextbooks: [
      'History of West Africa (Vols. 1 & 2) - J.F.A. Ajayi & M. Crowder',
      'Groundwork of Nigerian History - O. Ikime',
      'A History of Nigeria - Toyin Falola & Matthew M. Heaton',
    ],
    keyExamTips: [
      'Focus on trans-Saharan trade impacts and the Sokoto Jihad of 1804.',
      'Know the amalgamation of Northern and Southern protectorates by Lord Lugard in 1914.',
      'Study nationalist movements (Herbert Macaulay, Nnamdi Azikiwe, Obafemi Awolowo, Ahmadu Bello).',
    ],
    modules: [
      {
        title: 'Module 1: Pre-Colonial Nigerian State Systems',
        topics: [
          'Nok Culture, Igbo-Ukwu, Ife, and Benin Bronzes: Archaeological discoveries and significance',
          'The Kanem-Borno Empire: Saifawa dynasty, Mai Idris Alooma\'s reforms',
          'The Hausa States: Origins, Bayajidda legend, Islamization, trans-Saharan trade impact',
          'The Yoruba Kingdoms: Old Oyo Empire, Ile-Ife as cultural cradle, socio-political institutions',
          'The Kingdom of Benin: Oba dynasty, relations with early European explorers (Portuguese)',
          'The Niger Delta States and Eastern Hinterland: City-states (Bonny, Calabar), Aro Confederacy',
        ],
        objectives: ['Appraise technological, artistic, and economic sophistication of early Nigerian civilizations.'],
      },
      {
        title: 'Module 2: 19th Century Transformations and the Jihad',
        topics: [
          'The 1804 Sokoto Jihad: Causes, Usman dan Fodio, consequences and establishment of Sokoto Caliphate',
          'The Fall of Old Oyo Empire: Internal rebellions, Afonja, Fulani incursions, Yoruba wars',
          'The Abolition of the Trans-Atlantic Slave Trade and Rise of Legitimate Commerce (Palm Oil Trade)',
          'Christian Missionary Enterprise: CMS, Roman Catholics, education, and linguistic orthographies',
        ],
        objectives: ['Evaluate religious, political, and economic catalysts of 19th-century West African transformations.'],
      },
      {
        title: 'Module 3: Colonial Conquest, Nationalism and Independence',
        topics: [
          'British Imperial Expansion: Berlin Conference (1884/85), Royal Niger Company, conquest of Lagos, Benin, Sokoto',
          'Amalgamation of 1914: Lord Frederick Lugard, administrative integration',
          'Colonial Economic Exploitation: Taxation, railway construction, cash crop monopolies',
          'Nationalist Movements: Early resistance (Herbert Macaulay, NYM), post-WWII militancy (Zikist movement, NCNC, AG, NPC)',
          'Decolonization and Independence on October 1, 1960',
        ],
        objectives: ['Trace ideological evolution of nationalist agitations culminating in independence.'],
      },
    ],
  },

  // 16. COMPUTER STUDIES
  {
    id: 'computer_studies',
    name: 'Computer Studies',
    category: 'Sciences',
    totalTopics: 14,
    recommendedTextbooks: [
      'Computer Studies for Senior Secondary Schools - S.C. Okoronkwo',
      'Modern Computer Studies for Schools - O.A. Adebayo',
      'Fundamentals of Computer Science - French, C.S.',
    ],
    keyExamTips: [
      'Understand computer generations (vacuum tubes, transistors, ICs, microprocessors, AI).',
      'Know number base conversions in computing: Binary, Octal, Hexadecimal, ASCII.',
      'Be familiar with basic networking (LAN, WAN, topologies: star, bus, ring) and cybersecurity concepts.',
    ],
    modules: [
      {
        title: 'Module 1: Fundamentals of Computing & Hardware Architecture',
        topics: [
          'Evolution and Generations of Computers (First to Fifth Generation)',
          'Classification of Computers: By type (analog, digital, hybrid), by size (micro, mini, mainframe, supercomputer)',
          'Computer Hardware Components: CPU (ALU, CU, Registers), Motherboard, Memory (RAM, ROM, Cache)',
          'Input and Output Devices: Keyboard, optical scanner, biometric readers, monitors, printers (laser, inkjet)',
          'Secondary Storage Media: HDD, SSD, optical discs, flash drives, cloud storage',
        ],
        objectives: ['Analyze hardware configurations and explain machine execution cycles.'],
      },
      {
        title: 'Module 2: Software, Operating Systems & File Management',
        topics: [
          'System Software: Operating systems (functions, types: GUI, CLI, batch, multi-user), utility programs, device drivers',
          'Application Software: Word processors, spreadsheets, presentation software, DBMS',
          'File Organization: Sequential, random, indexed sequential access; file paths, file extensions',
          'Number Systems: Binary, octal, decimal, hexadecimal conversions and binary arithmetic',
        ],
        objectives: ['Perform binary logic operations and conversion across machine number systems.'],
      },
      {
        title: 'Module 3: Data Communication, Networks & Internet',
        topics: [
          'Computer Networks: LAN, MAN, WAN, PAN; Network topologies (Star, Bus, Ring, Mesh, Tree)',
          'Network Hardware: Hubs, switches, routers, modems, network interface cards (NIC), transmission media (twisted pair, fiber optic)',
          'The Internet and World Wide Web: Protocols (TCP/IP, HTTP, FTP, SMTP), browsers, search engines, email architecture',
          'Cybersecurity and Ethics: Malware (viruses, trojans, worms), phishing, encryption, firewalls, digital copyright laws',
        ],
        objectives: ['Design efficient local network topologies and outline internet defense countermeasures.'],
      },
      {
        title: 'Module 4: Algorithms, Flowcharts and Programming Basics',
        topics: [
          'Algorithm Development and Flowcharting: Symbols, pseudo-code, tracing logic errors',
          'Programming Languages: Machine language, assembly language, high-level languages (Python, Java, C++, Visual Basic)',
          'Data Types and Variables: Integers, floats, strings, booleans, arrays',
          'Control Structures: Conditional statements (if-else), looping constructs (for, while)',
        ],
        objectives: ['Construct structured flowcharts and translate pseudocode into modular high-level program logic.'],
      },
    ],
  },

  // 17. CIVIC EDUCATION
  {
    id: 'civic_education',
    name: 'Civic Education',
    category: 'Arts & Humanities',
    totalTopics: 12,
    recommendedTextbooks: [
      'Civic Education for Senior Secondary Schools - R.W. Okunloye et al.',
      'Comprehensive Civic Education - M.A. Adeleke',
      'The 1999 Constitution of the Federal Republic of Nigeria',
    ],
    keyExamTips: [
      'Focus on values: Honesty, integrity, contentment, discipline, patriotism.',
      'Know the functions of anti-graft and regulatory agencies: EFCC, ICPC, NDLEA, NAFDAC, FRSC.',
      'Study human rights violations, youth empowerment programs, and democratic citizenship responsibilities.',
    ],
    modules: [
      {
        title: 'Module 1: Democratic Values and Citizenship',
        topics: [
          'Meaning and Importance of Civic Education',
          'National Values: Honesty, integrity, discipline, contentment, justice, tolerance',
          'Citizenship: Acquisition (birth, registration, naturalization), rights, duties, and obligations',
          'Nationalism and Patriotism: National symbols, national anthem, pledge, national unity challenges',
        ],
        objectives: ['Examine civic rights and obligations essential for sustainable nation-building.'],
      },
      {
        title: 'Module 2: Human Rights, Rule of Law & Democracy',
        topics: [
          'Universal Declaration of Human Rights (UDHR): Core principles and international covenants',
          'Fundamental Human Rights in the Nigerian Constitution (Chapter IV)',
          'Rule of Law: Meaning, principles, limitations (emergency state, immunity clauses)',
          'Democracy and Electoral Process: Importance of free and fair elections, INEC, voting procedures',
        ],
        objectives: ['Identify remedies against violations of civil liberties and evaluate voting protocols.'],
      },
      {
        title: 'Module 3: Social Issues, Agencies and Youth Empowerment',
        topics: [
          'Cultism: Causes, effects, preventative measures',
          'Drug Abuse and Human Trafficking: National Drug Law Enforcement Agency (NDLEA), NAPTIP',
          'Corruption and Anti-Graft Agencies: EFCC, ICPC, Code of Conduct Bureau',
          'Road Safety and the Federal Road Safety Corps (FRSC)',
          'Youth Empowerment: Skill acquisition, enterprise development, poverty eradication',
        ],
        objectives: ['Formulate community initiatives countering drug abuse, cultism, and public corruption.'],
      },
    ],
  },

  // 18. HAUSA
  {
    id: 'hausa',
    name: 'Hausa',
    category: 'Languages',
    totalTopics: 12,
    recommendedTextbooks: [
      'Kamusun Hausa Na Jami\'ar Bayero - CSNL/BUK',
      'Harshe Da Adabin Hausa - M.K.M. Galadanci',
      'Exam Focus Hausa Language - Aliyu, M.',
    ],
    keyExamTips: [
      'Master Hausa grammar rules: Sarrafa harshe (grammar, sentence structure, morphophonemics).',
      'Study prescribed Hausa literature: Zube (prose), Waka (poetry), and Wasan Kwaikwayo (drama).',
      'Review cultural practices (Al\'adun gargajiya): aure (marriage), haihuwa (birth), sarakuna (royalty).',
    ],
    modules: [
      {
        title: 'Bangare na 1: Harshe (Language and Grammar)',
        topics: [
          'Ka\'idojin Rubutu da Nahawu: Haruffa, sauti (wasulla da bakake), ka\'idojin rubutu',
          'Ginin Kalmomi da Rabe-raben Kalmomi: Suna, wakilin suna, aiki, sifa, bayanau',
          'Ginin Jimla: Jimla mai sauki, sarkakiya, jimlar tambaya, jimlar umarni',
          'Karin Magana, Habaici, Zaurance, da Kirari',
        ],
        objectives: ['Gane ka\'idojin rubutun Hausa na zamani da amfani da karin magana a cikin jimla.'],
      },
      {
        title: 'Bangare na 2: Adabi da Al\'adu (Literature & Culture)',
        topics: [
          'Zube (Prose): Nazarin kagaggun labarai da litattafan da aka kayyade',
          'Waka (Poetry): Nazarin baitoci, ma\'aunin waka, salon sarrafa harshe a wakokin baka da rubutattu',
          'Wasan Kwaikwayo (Drama): Jigo, yanayin zama, rikici, halaye da matakan warware matsala',
          'Al\'adun Gargajiya: Bukukuwan aure, haihuwa, nada sarauta, sana\'o\'in gargajiya da magungunan gargajiya',
        ],
        objectives: ['Fassara da fashin baki a kan rubutaccen adabi da adabin baka na Hausa.'],
      },
    ],
  },

  // 19. YORUBA
  {
    id: 'yoruba',
    name: 'Yoruba',
    category: 'Languages',
    totalTopics: 12,
    recommendedTextbooks: [
      'Eko Ede Yoruba Titun - A. Babalola',
      'Ijinle Ede ati Litireso Yoruba - O.O. Olatunji',
      'Yoruba Metalanguage - B. Bamgbose',
    ],
    keyExamTips: [
      'Practice Yoruba tone marking (ami ohun: do, re, mi) and vowel harmony (faweli airanmu ati aranmu).',
      'Know Yoruba traditional greetings, deities (orisa), lineage poetry (oriki), and chieftaincy institutions.',
    ],
    modules: [
      {
        title: 'Abala Kinni: Ede ati Girama Yoruba',
        topics: [
          'Fonoloji: Faweli (airanmu ati aranmu), konsonanti, iro ohun (do, re, mi), ami ohun ati pipa faweli po',
          'Gbolohun ati Itupalẹ Ede: Oro oruko, oro aropo-oruko, oro ise, oro asapejuwe, orisi gbolohun',
          'Akaye, Akotan, Aroko kiko, ati Owe pelu Akanlo Ede Yoruba',
        ],
        objectives: ['Fi ami ohun to peye si orisirisi oro Yoruba ki o si se itupale gbolohun.'],
      },
      {
        title: 'Abala Kejì: Litireso ati Asa Yoruba',
        topics: [
          'Asa ati Ise Yoruba: Asa ibi, igbeyawo, isinku, ogun jija, ebi, egbe ati oye jije',
          'Esin ati Igbagbo Yoruba: Olodumare, awon Orisa (Ogun, Sango, Oya, Obatala), eegun, oro, egungun',
          'Litireso Alo-ohun: Oriki, ewi alohun (ijala, esa, rara), alo apamo ati alo apagbe',
          'Litireso Apetuko: Itupale iwe iroyin/itan aroso, eré onítàn, ati ewi apileko ti JAMB yan',
        ],
        objectives: ['Gbeyewo ewi apileko ati alohun pelu titumo asa ati ise Yoruba.'],
      },
    ],
  },

  // 20. IGBO
  {
    id: 'igbo',
    name: 'Igbo',
    category: 'Languages',
    totalTopics: 12,
    recommendedTextbooks: [
      'Utoasusu Igbo Maka SSS - E. Nolue Emenanjo',
      'Ogbara Ohuru Utoasusu Igbo - F.C. Ogbalu',
      'Igbo Metalanguage - SPILC',
    ],
    keyExamTips: [
      'Master Igbo vowel harmony (Udaume ndi na-asu n\'ike na ndi na-adighi asu n\'ike: uda mfe na uda aro).',
      'Understand Igbo cultural rites: Ichi ozo, igba nkwu (traditional marriage), iri ji ohuru (new yam festival).',
    ],
    modules: [
      {
        title: 'Ngalaba Nke Mbu: Asusu na Utoasusu Igbo',
        topics: [
          'Udaume na Mgbochiume: Nchikota udaume (vowel harmony), ndakorita udaume, akara udaolu (tones)',
          'Usoro Mkpuruedemede Igbo (Abidii): Mkpuruedemede iri ato na isii',
          'Nkebiokwu na Ahiriokwu: Nkowa aha, nnọchiaha, ngwaa, nkowa ngwaa, usoro ahiriokwu',
          'Ilu, Agwugwo, Akpaalaokwu na Nchikota na Ntughari Asusu',
        ],
        objectives: ['Jiri akara udaolu kowaa ihe di iche n\'etiti okwu ma mee nchiko ahiriokwu.'],
      },
      {
        title: 'Ngalaba Nke Abuo: Agumagu na Omenala Igbo',
        topics: [
          'Omenala na Ekoloji: Echichi (ozo), alumdi na nwunye, oru ugbo, emume iri ji ohuru, ekele',
          'Nkwenye na Okpukpe: Chukwu Abiama, arusi, agbara, mmuo ndi nna nna, ogbanje',
          'Agumagu Odinala: Abụ odinala, akuko ifo, mbem, uri, egwu onwa',
          'Agumagu Ederede: Ntule akwukwo akuko, egwuregwu, na abụ ederede nke JAMB họpụtara',
        ],
        objectives: ['Tulee akwukwo agumagu ederede na odinala Igbo nke a hoputara.'],
      },
    ],
  },

  // 21. FRENCH
  {
    id: 'french',
    name: 'French',
    category: 'Languages',
    totalTopics: 12,
    recommendedTextbooks: [
      'Le Nouveau Bescherelle: L\'art de conjuguer',
      'Nouvelle Grammaire du Français - Larousse',
      'French for Secondary Schools - Ajiboye, T.',
    ],
    keyExamTips: [
      'Practice regular and irregular verb conjugations across present, passé composé, imparfait, and futur simple.',
      'Understand gender agreement of adjectives and pronouns (direct and indirect object pronouns).',
    ],
    modules: [
      {
        title: 'Section A: Grammar, Structure & Vocabulary',
        topics: [
          'Verb Conjugation: Present, Passé Composé, Imparfait, Futur Simple, Subjunctive',
          'Nouns and Adjectives: Gender, pluralization, agreement, comparative and superlative forms',
          'Pronouns: Direct, indirect object, y, en, relative pronouns (qui, que, dont, où)',
          'Prepositions, Adverbs, Conjunctions and Negation rules (ne...pas, ne...jamais, ne...rien)',
          'Thematic Vocabulary: Family, education, profession, technology, environment, travel',
        ],
        objectives: ['Demonstrate accurate morphological agreement and syntax in written French.'],
      },
      {
        title: 'Section B: Reading Comprehension and Culture',
        topics: [
          'Comprehension of literary, journalistic, and social French texts',
          'Idiomatic Expressions, Proverbs and Colloquialisms',
          'Francophone Civilizations: France, West African Francophone nations, African Francophone literature',
        ],
        objectives: ['Infer contextual nuances and answer textual inference questions from authentic French passages.'],
      },
    ],
  },

  // 22. MUSIC
  {
    id: 'music',
    name: 'Music',
    category: 'Vocational & Technical',
    totalTopics: 12,
    recommendedTextbooks: [
      'The Rudiments and Theory of Music - Associated Board of the Royal Schools of Music (ABRSM)',
      'Music in West Africa - Nketia, J.H.K.',
      'A Handbook of African and Western Music - Onyiuke, Y.S.',
    ],
    keyExamTips: [
      'Master reading treble and bass clefs, time signatures, key signatures, and interval inversions.',
      'Know the history and characteristics of Western musical periods (Baroque, Classical, Romantic, Modern) and African music traditions.',
    ],
    modules: [
      {
        title: 'Module 1: Rudiments & Music Theory',
        topics: [
          'Notation: Treble and bass clefs, pitch names, ledger lines, note values and rests',
          'Scales: Major, minor (harmonic and melodic), pentatonic, and chromatic scales',
          'Key Signatures and Transposition up to 4 sharps and flats',
          'Time Signatures: Simple (duple, triple, quadruple) and compound time',
          'Intervals: Major, minor, perfect, augmented, diminished intervals and inversions',
          'Chords and Harmony: Triads (tonic, subdominant, dominant), cadences (perfect, imperfect, plagal, interrupted)',
        ],
        objectives: ['Construct and identify musical scales, chords, and cadences on staves.'],
      },
      {
        title: 'Module 2: History and Literature of Western and African Music',
        topics: [
          'African Music: Musical instruments (aerophones, chordophones, idiophones, membranophones)',
          'Role of Music in Traditional African Society: Ceremonies, storytelling, healing, rites of passage',
          'Western Music Eras and Composers: Baroque (Bach, Handel), Classical (Haydn, Mozart, Beethoven), Romantic (Chopin, Tchaikovsky)',
          'Prominent Nigerian Composers: Fela Sowande, Akin Euba, Lazarus Ekwueme, Fela Anikulapo Kuti',
        ],
        objectives: ['Classify traditional African musical instruments and correlate Western stylistic periods.'],
      },
    ],
  },

  // 23. VISUAL ARTS (FINE ART)
  {
    id: 'visual_arts',
    name: 'Visual Arts (Fine Arts)',
    category: 'Vocational & Technical',
    totalTopics: 12,
    recommendedTextbooks: [
      'A History of African Art - Frank Willett',
      'Art for Senior Secondary Schools - S.C. Egonwa',
      'Visual Arts: A Resource for Educators - Wangboje, S.I.',
    ],
    keyExamTips: [
      'Study color theory: Primary, secondary, tertiary colors, complementary colors, tints, and shades.',
      'Know the historical Nigerian art traditions: Nok terracottas, Ife bronzes, Igbo-Ukwu, Benin court art, Esie stone carvings.',
    ],
    modules: [
      {
        title: 'Module 1: Fundamentals of Visual Art & Design Principles',
        topics: [
          'Elements of Art: Line, shape, form, texture, space, value, and color',
          'Principles of Design: Balance, harmony, proportion, rhythm, emphasis, unity, variety',
          'Color Theory: Primary, secondary, tertiary colors; warm and cool colors; monochromatic, complementary, and analogous schemes',
          'Drawing and Painting Media: Charcoal, pastel, watercolor, gouache, oil, acrylics; perspective (one-point, two-point)',
          'Sculpture, Ceramics and Printmaking Techniques: Pinch, coil, slab, relief, intaglio, screen printing',
        ],
        objectives: ['Apply principles of design to spatial compositions and color harmonies.'],
      },
      {
        title: 'Module 2: Art History (Nigerian, African & Western)',
        topics: [
          'Traditional Nigerian Art Cultures: Nok, Igbo-Ukwu, Ife, Benin, Tsoede, Esie, Owo',
          'Traditional African Art: Ashanti gold weights, Dan masks, Dogon wood carvings, Egyptian antiquities',
          'Contemporary Nigerian Artists: Aina Onabolu, Ben Enwonwu, Bruce Onobrakpeya, Yusuf Grillo, Twins Seven-Seven',
          'Western Art Movements: Renaissance (Da Vinci, Michelangelo), Impressionism, Cubism (Picasso), Surrealism',
        ],
        objectives: ['Compare stylistic and technological achievements of classical Nigerian art traditions.'],
      },
    ],
  },

  // 24. HOME ECONOMICS
  {
    id: 'home_economics',
    name: 'Home Economics',
    category: 'Vocational & Technical',
    totalTopics: 13,
    recommendedTextbooks: [
      'Comprehensive Home Economics for SSS - C.A. Anozie',
      'Food and Nutrition for West Africa - F.T. Oguntona',
      'Clothing and Textiles for SSS - M.A. Anyakoha',
    ],
    keyExamTips: [
      'Focus on food nutrients: Proteins, carbs, lipids, vitamins, minerals, deficiency diseases (kwashiorkor, scurvy, rickets).',
      'Understand sewing machine operation, pattern drafting, and fabric care labels.',
    ],
    modules: [
      {
        title: 'Module 1: Food and Nutrition',
        topics: [
          'Nutrients: Classification, functions, food sources, deficiency diseases',
          'Meal Planning: Special groups (infants, adolescents, pregnant/lactating mothers, convalescents, elderly)',
          'Food Preservation and Storage: Canning, freezing, drying, smoking, fermentation',
          'Kitchen Equipment and Safety: Layout, sanitation, safety precautions, maintenance of appliances',
        ],
        objectives: ['Formulate nutritious diet plans addressing pathological dietary deficiencies.'],
      },
      {
        title: 'Module 2: Clothing and Textiles',
        topics: [
          'Textile Fibers: Natural (cotton, wool, silk, linen) and synthetic fibers (nylon, polyester, rayon)',
          'Sewing Equipment: Parts of the sewing machine, stitches (temporary and permanent), seams',
          'Pattern Drafting and Garment Construction: Measurements, darts, pleats, gathers, necklines, sleeves',
          'Laundering and Fabric Care: Stain removal, fabric labeling, wardrobe planning',
        ],
        objectives: ['Identify textile fiber burning tests and execute garment construction techniques.'],
      },
      {
        title: 'Module 3: Home Management & Family Living',
        topics: [
          'Management Process: Planning, organizing, implementing, and evaluating family resources',
          'Family Housing and Interior Decoration: House types, furniture arrangement, color schemes, lighting',
          'Consumer Education: Consumer rights, wise shopping habits, family budgeting',
          'Child Development and Family Relationships: Physical and emotional development stages, conflict resolution',
        ],
        objectives: ['Construct balanced family budgets and apply consumer protection principles.'],
      },
    ],
  },

  // 25. PHYSICAL AND HEALTH EDUCATION (PHE)
  {
    id: 'phe',
    name: 'Physical & Health Education',
    category: 'Vocational & Technical',
    totalTopics: 13,
    recommendedTextbooks: [
      'Physical and Health Education for Senior Secondary Schools - M.O. Ajisafe',
      'Essential Physical and Health Education - A.O. Fagbemi',
      'Foundations of Health Education - WHO / Nigerian Educational Research Council',
    ],
    keyExamTips: [
      'Understand human anatomy: Skeletal, muscular, respiratory, and circulatory systems during exercise.',
      'Know the rules and dimensions for major athletics (track & field) and ball games (football, basketball, volleyball).',
      'Study First Aid procedures (CPR, management of fractures, sprains, dislocations, bleeding).',
    ],
    modules: [
      {
        title: 'Module 1: Physical Education, Athletics and Sports',
        topics: [
          'History and Philosophy of Physical Education in Nigeria and Ancient Greece (Olympics)',
          'Athletics (Track Events): Sprints, middle distance, long distance, relays, hurdles; starting techniques',
          'Athletics (Field Events): Jumps (high jump, long jump, triple jump, pole vault), Throws (shot put, discus, javelin)',
          'Ball Games: Football, basketball, volleyball, handball, tennis (rules, officiating, court dimensions)',
          'Gymnastics and Martial Arts: Floor activities, vaults, self-defense principles',
        ],
        objectives: ['Detail technical rules and field specifications for standard sports events.'],
      },
      {
        title: 'Module 2: Human Anatomy, Physiology and Exercise Science',
        topics: [
          'Skeletal and Muscular Systems: Bone types, joints, major muscle groups, muscle contractions',
          'Circulatory and Respiratory Responses to Exercise: Aerobic vs anaerobic exercise, VO2 max, cardiac output',
          'Physical Fitness: Components (health-related vs skill-related), fitness testing and conditioning programs',
          'Sports Injuries and First Aid: Sprains, strains, fractures, CPR, PRICE protocol',
        ],
        objectives: ['Explain cardiovascular and metabolic adaptations resulting from athletic training.'],
      },
      {
        title: 'Module 3: Health Education, Disease Prevention and Community Health',
        topics: [
          'Concept of Health: Physical, mental, social, and emotional dimensions of wellness',
          'Communicable Diseases: Vectors, causal agents, transmission, prevention (malaria, cholera, tuberculosis, HIV/AIDS)',
          'Non-Communicable Diseases: Hypertension, diabetes, cancer, cardiovascular diseases',
          'Nutrition and Health: Food hygiene, malnutrition, eating disorders (anorexia, bulimia)',
          'Pollution, Waste Disposal, and Public Health Organizations (WHO, UNICEF, NPHCDA)',
        ],
        objectives: ['Formulate community interventions for communicable and lifestyle disease prevention.'],
      },
    ],
  },
];
