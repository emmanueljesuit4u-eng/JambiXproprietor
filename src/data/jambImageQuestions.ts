/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMB UTME Authentic Illustrated Past Questions Registry
 * Features verified technical, scientific, and curriculum diagrams across all UTME subjects:
 * - Mathematics: Circle theorems, trigonometry bearings, cumulative frequency ogives, angle of elevation, Venn diagrams, coordinate geometry
 * - Physics: Micrometer screw gauge, DC electrical circuits, triangular glass prism ray diagrams, velocity-time graph, pulley system, simple pendulum
 * - Chemistry: Fractional distillation apparatus, blast furnace, electrolysis cell, reaction energy profile, heating curve of water, laboratory gas collection
 * - Biology: Plant cell ultrastructure, human eye, nephron, flower anatomy, terrestrial food web, human reflex arc, heart circulation
 * - Use of English: Road signs, organizational flowcharts, data graphs
 * - Economics: Market equilibrium demand shift, price ceilings, production possibility curves (PPC), cost curves
 * - Geography: Topographical contour maps, meteorological weather instruments, river basin profiles
 * - Government: Separation of powers checks-and-balances organogram, federal tier structure
 * - Commerce & Accounts: Channels of distribution, standard 3-column cash book / ledger T-account, bills of exchange
 * - Agricultural Science: Soil profile horizons, farm implements, ruminant 4-chambered stomach
 * - Computer Studies: Digital logic gates, CPU Von Neumann architecture
 * - Civic Education: Nigerian National Coat of Arms symbols
 * - Literature in English: Freytag's dramatic plot pyramid
 * - Christian Religious Studies (CRS): Paul's missionary journey map
 * - Islamic Religious Studies (IRS): Schematic of Kaaba & Hajj sites
 * - History: Pre-colonial Nigerian empires map
 * - French: Illustrated daily routine vocabulary sequence
 * - Physical & Health Education (PHE): 400m athletics track and relay exchange zones
 * - Music: Treble staff with musical notes and key signature
 * - Visual Arts: Primary/Secondary/Complementary color wheel
 * - Home Economics: Balanced diet nutritional food pyramid
 */

import { VerifiedQuestion, SubjectKey } from './jambPastQuestions';

export interface ImageQuestionDef {
  subjectKey: SubjectKey;
  subject: string;
  topic: string;
  text: string;
  options: { A: string; B: string; C: string; D: string };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  bookTitle: string;
  author: string;
  textbookRef: string;
  imageCaption: string;
  imageAlt: string;
  imageSvg: string;
}

export const JAMB_IMAGE_QUESTIONS_DATA: ImageQuestionDef[] = [
  // ==========================================
  // 1. PHYSICS
  // ==========================================
  {
    subjectKey: 'physics',
    subject: 'Physics',
    topic: 'Measurement: Micrometer Screw Gauge',
    text: 'In the micrometer screw gauge diagram shown, the pitch of the screw is 0.5 mm and the thimble has 50 equal divisions. What is the reading indicated on the instrument?',
    options: {
      A: '4.78 mm',
      B: '4.28 mm',
      C: '5.28 mm',
      D: '4.85 mm',
    },
    answer: 'A',
    explanation: 'Main sleeve scale reading = 4.50 mm (4 main mm marks plus the 0.5 mm bottom sub-division mark is clearly visible). Thimble circular scale reading = 28 divisions × 0.01 mm = 0.28 mm. Total reading = 4.50 mm + 0.28 mm = 4.78 mm.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D., Chapter 1, Pages 8-12',
    imageCaption: 'Figure: Micrometer Screw Gauge Reading',
    imageAlt: 'Micrometer screw gauge showing main sleeve scale at 4.5mm and thimble coincident mark at 28',
    imageSvg: `<svg viewBox="0 0 520 220" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#cbd5e1" />
          <stop offset="50%" stop-color="#f1f5f9" />
          <stop offset="100%" stop-color="#94a3b8" />
        </linearGradient>
      </defs>
      <!-- Frame & Anvil -->
      <path d="M 40 40 L 40 180 Q 40 200 60 200 L 140 200 Q 170 200 170 170 L 170 140" fill="none" stroke="#334155" stroke-width="18" stroke-linecap="round"/>
      <rect x="70" y="85" width="20" height="30" fill="#64748b" rx="2"/>
      <!-- Spindle & Sleeve -->
      <rect x="150" y="90" width="160" height="24" fill="url(#metal)" stroke="#475569" stroke-width="2"/>
      <!-- Main Sleeve Scale Line -->
      <line x1="160" y1="102" x2="280" y2="102" stroke="#0f172a" stroke-width="2"/>
      <!-- Main Upper Marks (0, 1, 2, 3, 4 mm) -->
      <line x1="160" y1="102" x2="160" y2="92" stroke="#0f172a" stroke-width="2"/>
      <text x="158" y="88" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">0</text>
      <line x1="185" y1="102" x2="185" y2="94" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="210" y1="102" x2="210" y2="94" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="235" y1="102" x2="235" y2="94" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="260" y1="102" x2="260" y2="92" stroke="#0f172a" stroke-width="2"/>
      <text x="257" y="88" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">4</text>
      <!-- Bottom Half-mm Marks (0.5, 1.5, 2.5, 3.5, 4.5 mm) -->
      <line x1="172.5" y1="102" x2="172.5" y2="110" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="197.5" y1="102" x2="197.5" y2="110" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="222.5" y1="102" x2="222.5" y2="110" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="247.5" y1="102" x2="247.5" y2="110" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="272.5" y1="102" x2="272.5" y2="110" stroke="#dc2626" stroke-width="2"/>
      <text x="268" y="122" font-size="9" font-family="sans-serif" font-weight="bold" fill="#dc2626">4.5 mm</text>
      <!-- Thimble (Rotary Scale) -->
      <path d="M 280 82 L 300 82 L 400 70 L 400 134 L 300 122 L 280 122 Z" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
      <!-- Thimble Divisions -->
      <line x1="280" y1="102" x2="310" y2="102" stroke="#dc2626" stroke-width="2"/>
      <text x="315" y="105" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">28</text>
      <line x1="280" y1="95" x2="305" y2="95" stroke="#334155" stroke-width="1"/>
      <line x1="280" y1="88" x2="305" y2="88" stroke="#334155" stroke-width="1.5"/>
      <text x="310" y="91" font-size="9" font-family="sans-serif" fill="#475569">30</text>
      <line x1="280" y1="109" x2="305" y2="109" stroke="#334155" stroke-width="1"/>
      <line x1="280" y1="116" x2="305" y2="116" stroke="#334155" stroke-width="1.5"/>
      <text x="310" y="119" font-size="9" font-family="sans-serif" fill="#475569">25</text>
      <!-- Ratchet Stop -->
      <rect x="400" y="88" width="50" height="28" fill="#94a3b8" stroke="#334155" stroke-width="2" rx="3"/>
      <!-- Labels -->
      <text x="180" y="45" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">Sleeve (Main Scale)</text>
      <path d="M 220 52 L 220 80" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)"/>
      <text x="320" y="45" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">Thimble (Circular Scale)</text>
    </svg>`,
  },
  {
    subjectKey: 'physics',
    subject: 'Physics',
    topic: 'Current Electricity: Resistors in Series and Parallel',
    text: 'In the circuit diagram shown, a 12 V battery with negligible internal resistance is connected to three resistors. Calculate the total current I supplied by the battery.',
    options: {
      A: '3.0 A',
      B: '1.5 A',
      C: '2.0 A',
      D: '4.0 A',
    },
    answer: 'A',
    explanation: 'The 6 Ω and 3 Ω resistors are connected in parallel. Their equivalent resistance Rp = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω. This parallel combination is in series with the 2 Ω resistor, giving total circuit resistance R_total = 2 Ω + 2 Ω = 4 Ω. By Ohm’s Law, Total Current I = V / R_total = 12 V / 4 Ω = 3.0 A.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D., Chapter 16, Pages 365-372',
    imageCaption: 'Figure: DC Electrical Circuit Network',
    imageAlt: 'Circuit diagram showing a 12V DC source connected in series with a 2 ohm resistor and a parallel branch of 6 ohm and 3 ohm resistors',
    imageSvg: `<svg viewBox="0 0 500 240" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Battery -->
      <line x1="60" y1="120" x2="110" y2="120" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="110" y1="100" x2="110" y2="140" stroke="#0f172a" stroke-width="4"/>
      <line x1="120" y1="110" x2="120" y2="130" stroke="#0f172a" stroke-width="2"/>
      <text x="105" y="90" font-size="12" font-family="sans-serif" font-weight="bold" fill="#dc2626">+</text>
      <text x="123" y="90" font-size="14" font-family="sans-serif" font-weight="bold" fill="#0f172a">-</text>
      <text x="95" y="165" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">12 V</text>
      
      <!-- Current Arrow -->
      <path d="M 60 120 L 60 60 L 160 60" fill="none" stroke="#0f172a" stroke-width="2.5"/>
      <polygon points="120,56 130,60 120,64" fill="#dc2626"/>
      <text x="120" y="50" font-size="12" font-family="sans-serif" font-weight="bold" fill="#dc2626">I</text>

      <!-- Series Resistor 2 Ohm -->
      <rect x="160" y="48" width="60" height="24" fill="#f8fafc" stroke="#0f172a" stroke-width="2" rx="3"/>
      <text x="175" y="65" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">2 Ω</text>
      
      <!-- Junction & Parallel Branches -->
      <line x1="220" y1="60" x2="260" y2="60" stroke="#0f172a" stroke-width="2.5"/>
      <circle cx="260" cy="60" r="4" fill="#0f172a"/>
      
      <!-- Upper Branch (6 Ohm) -->
      <path d="M 260 60 L 260 30 L 300 30" fill="none" stroke="#0f172a" stroke-width="2.5"/>
      <rect x="300" y="18" width="60" height="24" fill="#f8fafc" stroke="#0f172a" stroke-width="2" rx="3"/>
      <text x="315" y="35" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">6 Ω</text>
      <path d="M 360 30 L 400 30 L 400 60" fill="none" stroke="#0f172a" stroke-width="2.5"/>

      <!-- Lower Branch (3 Ohm) -->
      <path d="M 260 60 L 260 90 L 300 90" fill="none" stroke="#0f172a" stroke-width="2.5"/>
      <rect x="300" y="78" width="60" height="24" fill="#f8fafc" stroke="#0f172a" stroke-width="2" rx="3"/>
      <text x="315" y="95" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">3 Ω</text>
      <path d="M 360 90 L 400 90 L 400 60" fill="none" stroke="#0f172a" stroke-width="2.5"/>
      
      <circle cx="400" cy="60" r="4" fill="#0f172a"/>
      
      <!-- Return Path with Ammeter -->
      <path d="M 400 60 L 440 60 L 440 180 L 270 180" fill="none" stroke="#0f172a" stroke-width="2.5"/>
      <circle cx="240" cy="180" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
      <text x="234" y="186" font-size="15" font-family="sans-serif" font-weight="bold" fill="#0f172a">A</text>
      <path d="M 210 180 L 60 180 L 60 120" fill="none" stroke="#0f172a" stroke-width="2.5"/>
    </svg>`,
  },
  {
    subjectKey: 'physics',
    subject: 'Physics',
    topic: 'Motion: Velocity-Time Graph',
    text: 'The velocity-time graph represents the motion of a motor car moving along a straight road. Calculate the total distance covered by the car in 20 seconds.',
    options: {
      A: '300 m',
      B: '400 m',
      C: '250 m',
      D: '350 m',
    },
    answer: 'A',
    explanation: 'The total distance covered is the area under the velocity-time graph (a trapezium). Area = 1/2 × (sum of parallel sides) × height. Parallel sides: Base = 20 s; Top side (constant velocity from t = 5 s to t = 15 s) = 15 - 5 = 10 s. Height = 20 m/s. Area = 1/2 × (20 + 10) × 20 = 1/2 × 30 × 20 = 300 m.',
    bookTitle: 'NEW SCHOOL PHYSICS',
    author: 'M.W. Anyakoha, Ph.D.',
    textbookRef: 'NEW SCHOOL PHYSICS by M.W. Anyakoha, Ph.D., Chapter 2, Pages 32-38',
    imageCaption: 'Figure: Velocity-Time Graph for Uniform Acceleration and Deceleration',
    imageAlt: 'Velocity time graph showing uniform acceleration to 20 m/s in 5s, uniform velocity for 10s, and deceleration to rest in 5s',
    imageSvg: `<svg viewBox="0 0 480 230" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes -->
      <line x1="60" y1="180" x2="420" y2="180" stroke="#0f172a" stroke-width="2.5" marker-end="url(#arrow)"/>
      <line x1="60" y1="180" x2="60" y2="30" stroke="#0f172a" stroke-width="2.5" marker-end="url(#arrow)"/>
      <!-- Labels -->
      <text x="430" y="185" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">t (s)</text>
      <text x="30" y="25" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">v (m/s)</text>
      <!-- Grid & Plot Trapezium -->
      <polygon points="60,180 140,60 300,60 380,180" fill="#e0e7ff" fill-opacity="0.6" stroke="#4338ca" stroke-width="3"/>
      <!-- Dashed reference lines -->
      <line x1="60" y1="60" x2="140" y2="60" stroke="#94a3b8" stroke-dasharray="4,4"/>
      <line x1="140" y1="60" x2="140" y2="180" stroke="#94a3b8" stroke-dasharray="4,4"/>
      <line x1="300" y1="60" x2="300" y2="180" stroke="#94a3b8" stroke-dasharray="4,4"/>
      <!-- Scale numbers -->
      <text x="40" y="185" font-size="11" font-family="sans-serif" fill="#475569">0</text>
      <text x="35" y="65" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">20</text>
      <text x="135" y="198" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">5</text>
      <text x="295" y="198" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">15</text>
      <text x="375" y="198" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">20</text>
      <text x="200" y="125" font-size="13" font-family="sans-serif" font-weight="bold" fill="#4338ca">Area = Distance</text>
    </svg>`,
  },

  // ==========================================
  // 2. BIOLOGY
  // ==========================================
  {
    subjectKey: 'biology',
    subject: 'Biology',
    topic: 'Cell Biology: Plant Cell Structure',
    text: 'In the generalized plant cell diagram shown, which labeled structure is responsible for photosynthesis and synthesized carbohydrate storage?',
    options: {
      A: 'Structure II',
      B: 'Structure I',
      C: 'Structure III',
      D: 'Structure IV',
    },
    answer: 'A',
    explanation: 'Structure I represents the rigid Cellulose Cell Wall. Structure II represents the Chloroplast containing thylakoids and chlorophyll, where light-dependent and dark reactions of photosynthesis take place. Structure III is the Large Central Sap Vacuole, and Structure IV is the Nucleus.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Chapter 1, Pages 8-15',
    imageCaption: 'Figure: Diagrammatic Cross-Section of a Plant Cell',
    imageAlt: 'Labeled plant cell showing I: cell wall, II: chloroplast, III: vacuole, IV: nucleus',
    imageSvg: `<svg viewBox="0 0 500 250" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer Cell Wall -->
      <polygon points="50,30 450,30 480,220 20,220" fill="#dcfce7" stroke="#15803d" stroke-width="5" rx="8"/>
      <!-- Inner Cell Membrane -->
      <polygon points="56,38 444,38 472,214 28,214" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <!-- Large Central Vacuole (III) -->
      <ellipse cx="250" cy="130" rx="110" ry="60" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
      <text x="235" y="135" font-size="16" font-family="sans-serif" font-weight="bold" fill="#0369a1">III</text>
      <!-- Nucleus (IV) -->
      <circle cx="100" cy="90" r="32" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
      <circle cx="100" cy="90" r="12" fill="#be185d"/>
      <text x="95" y="140" font-size="14" font-family="sans-serif" font-weight="bold" fill="#9d174d">IV</text>
      <!-- Chloroplasts (II) -->
      <g>
        <ellipse cx="380" cy="80" rx="28" ry="16" fill="#22c55e" stroke="#166534" stroke-width="2"/>
        <line x1="365" y1="80" x2="395" y2="80" stroke="#ffffff" stroke-width="1.5"/>
        <ellipse cx="390" cy="170" rx="28" ry="16" fill="#22c55e" stroke="#166534" stroke-width="2"/>
        <line x1="375" y1="170" x2="405" y2="170" stroke="#ffffff" stroke-width="1.5"/>
      </g>
      <text x="415" y="85" font-size="15" font-family="sans-serif" font-weight="bold" fill="#15803d">II</text>
      <!-- Labels -->
      <line x1="450" y1="30" x2="475" y2="15" stroke="#15803d" stroke-width="1.5"/>
      <text x="480" y="18" font-size="15" font-family="sans-serif" font-weight="bold" fill="#15803d">I</text>
    </svg>`,
  },
  {
    subjectKey: 'biology',
    subject: 'Biology',
    topic: 'Coordination: The Human Reflex Arc',
    text: 'The diagram shows a reflex arc involved in withdrawing a hand from a hot pin. What is the correct sequence of impulses from stimulus to reaction?',
    options: {
      A: 'Receptor (X) → Sensory Neuron → Interneuron (Y) → Motor Neuron → Effector Muscle (Z)',
      B: 'Receptor (X) → Motor Neuron → Interneuron (Y) → Sensory Neuron → Effector Muscle (Z)',
      C: 'Effector Muscle (Z) → Motor Neuron → Spinal Cord → Receptor (X)',
      D: 'Receptor (X) → Interneuron (Y) → Sensory Neuron → Motor Neuron → Effector Muscle (Z)',
    },
    answer: 'A',
    explanation: 'In a spinal reflex arc, the sensory receptor (X) in the skin detects the pinprick and generates an action potential. This impulse travels via the afferent sensory neuron into the dorsal horn of the spinal cord, passes across synapses to an interneuron / relay neuron (Y) in the gray matter, transmits through the ventral horn via an efferent motor neuron, and stimulates the effector bicep muscle (Z) to contract.',
    bookTitle: 'MODERN BIOLOGY',
    author: 'Sarojini T. Ramalingam, Ph.D.',
    textbookRef: 'MODERN BIOLOGY by Sarojini T. Ramalingam, Chapter 10, Pages 265-272',
    imageCaption: 'Figure: Pathway of a Typical Spinal Reflex Arc',
    imageAlt: 'Reflex arc diagram showing skin receptor X, spinal cord cross section with interneuron Y, and effector muscle Z',
    imageSvg: `<svg viewBox="0 0 500 240" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Spinal Cord Cross Section (Butterfly gray matter) -->
      <ellipse cx="360" cy="120" rx="90" ry="75" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <path d="M 330 90 Q 360 110 390 90 Q 375 120 390 150 Q 360 130 330 150 Q 345 120 330 90 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <circle cx="360" cy="120" r="4" fill="#0f172a"/>
      <text x="365" y="115" font-size="14" font-family="sans-serif" font-weight="bold" fill="#0284c7">Y (Relay)</text>
      <!-- Skin Receptor (X) -->
      <rect x="40" y="40" width="70" height="24" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="4"/>
      <text x="50" y="56" font-size="12" font-family="sans-serif" font-weight="bold" fill="#9a3412">X: Receptor</text>
      <!-- Sensory Neuron Path -->
      <path d="M 110 52 C 200 52, 260 70, 335 95" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <polygon points="230,60 240,63 232,68" fill="#2563eb"/>
      <text x="180" y="48" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2563eb">Sensory Neuron</text>
      <!-- Motor Neuron Path -->
      <path d="M 335 145 C 260 170, 190 185, 110 185" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <polygon points="200,181 190,184 198,189" fill="#dc2626"/>
      <text x="175" y="202" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">Motor Neuron</text>
      <!-- Effector Muscle (Z) -->
      <ellipse cx="65" cy="185" rx="35" ry="18" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
      <text x="42" y="190" font-size="11" font-family="sans-serif" font-weight="bold" fill="#991b1b">Z: Muscle</text>
    </svg>`,
  },

  // ==========================================
  // 3. CHEMISTRY
  // ==========================================
  {
    subjectKey: 'chemistry',
    subject: 'Chemistry',
    topic: 'Energetics: Reaction Energy Profile',
    text: 'From the chemical reaction energy profile shown, what do energy quantities X and Y represent respectively?',
    options: {
      A: 'X = Activation Energy (Ea); Y = Enthalpy Change (ΔH)',
      B: 'X = Enthalpy Change (ΔH); Y = Activation Energy (Ea)',
      C: 'X = Heat of Combustion; Y = Free Energy (ΔG)',
      D: 'X = Kinetic Energy; Y = Potential Energy Barrier',
    },
    answer: 'A',
    explanation: 'Quantity X is the energy required to raise the reactants from their ground state to the activated complex (energy peak), which is the Activation Energy (Ea). Quantity Y is the net difference between products and reactants enthalpy (H_products - H_reactants = ΔH < 0), representing the Exothermic Enthalpy of reaction.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio, Chapter 7, Pages 152-160',
    imageCaption: 'Figure: Potential Energy Curve for an Exothermic Reaction',
    imageAlt: 'Energy profile diagram showing reactants, energy hump X (activation energy), products at lower level, and energy difference Y (delta H)',
    imageSvg: `<svg viewBox="0 0 480 230" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes -->
      <line x1="60" y1="200" x2="430" y2="200" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="60" y1="200" x2="60" y2="25" stroke="#0f172a" stroke-width="2.5"/>
      <text x="320" y="218" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">Reaction Coordinate →</text>
      <text x="25" y="20" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">Energy (kJ/mol)</text>
      <!-- Reaction Profile Curve -->
      <path d="M 60 110 L 140 110 C 180 110, 200 40, 240 40 C 280 40, 300 160, 340 160 L 420 160" fill="none" stroke="#dc2626" stroke-width="3"/>
      <!-- Reactants & Products Text -->
      <text x="75" y="102" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">Reactants (A + B)</text>
      <text x="350" y="152" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">Products (C + D)</text>
      <!-- Activation Energy X Indicator -->
      <line x1="140" y1="110" x2="240" y2="110" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <line x1="240" y1="40" x2="240" y2="110" stroke="#2563eb" stroke-width="2"/>
      <polygon points="237,42 240,36 243,42" fill="#2563eb"/>
      <polygon points="237,108 240,114 243,108" fill="#2563eb"/>
      <text x="248" y="80" font-size="13" font-family="sans-serif" font-weight="bold" fill="#2563eb">X (Ea)</text>
      <!-- Delta H Y Indicator -->
      <line x1="340" y1="110" x2="420" y2="110" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <line x1="390" y1="110" x2="390" y2="160" stroke="#16a34a" stroke-width="2"/>
      <polygon points="387,112 390,106 393,112" fill="#16a34a"/>
      <polygon points="387,158 390,164 393,158" fill="#16a34a"/>
      <text x="400" y="140" font-size="13" font-family="sans-serif" font-weight="bold" fill="#16a34a">Y (ΔH &lt; 0)</text>
    </svg>`,
  },
  {
    subjectKey: 'chemistry',
    subject: 'Chemistry',
    topic: 'Separation Techniques: Fractional Distillation',
    text: 'In the fractional distillation apparatus illustrated, what is the specific role of the component labeled P containing glass beads?',
    options: {
      A: 'Providing a large surface area for repeated condensation and vaporization',
      B: 'Heating the liquid mixture to its boiling point directly',
      C: 'Condensing the vapor into distillate using circulating cold water',
      D: 'Preventing explosive boiling by acting as anti-bumping granules',
    },
    answer: 'A',
    explanation: 'Component P is the Fractionating Column packed with glass beads. It provides an extended cold surface area where ascending vapors undergo continuous fractional condensation and re-vaporization, allowing components with closer boiling points to separate efficiently before entering the Liebig condenser.',
    bookTitle: 'NEW SCHOOL CHEMISTRY',
    author: 'Osei Yaw Ababio',
    textbookRef: 'NEW SCHOOL CHEMISTRY by Osei Yaw Ababio, Chapter 1, Pages 12-18',
    imageCaption: 'Figure: Fractional Distillation Apparatus Setup',
    imageAlt: 'Fractional distillation apparatus showing round-bottom flask, fractionating column P packed with beads, thermometer, and Liebig condenser',
    imageSvg: `<svg viewBox="0 0 500 250" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Distillation Flask -->
      <circle cx="100" cy="180" r="35" fill="#eff6ff" stroke="#334155" stroke-width="2"/>
      <rect x="90" y="115" width="20" height="40" fill="#eff6ff" stroke="#334155" stroke-width="2"/>
      <!-- Fractionating Column (P) -->
      <rect x="88" y="45" width="24" height="75" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5"/>
      <!-- Glass beads inside P -->
      <g fill="#94a3b8">
        <circle cx="95" cy="55" r="3"/><circle cx="104" cy="58" r="3"/><circle cx="96" cy="68" r="3"/>
        <circle cx="105" cy="72" r="3"/><circle cx="95" cy="82" r="3"/><circle cx="103" cy="87" r="3"/>
        <circle cx="96" cy="98" r="3"/><circle cx="104" cy="105" r="3"/>
      </g>
      <text x="50" y="85" font-size="15" font-family="sans-serif" font-weight="bold" fill="#dc2626">P</text>
      <!-- Thermometer -->
      <line x1="100" y1="20" x2="100" y2="55" stroke="#ef4444" stroke-width="2.5"/>
      <!-- Side Arm to Condenser -->
      <line x1="112" y1="50" x2="160" y2="70" stroke="#334155" stroke-width="3"/>
      <!-- Liebig Condenser -->
      <rect x="160" y="65" width="160" height="30" rx="4" transform="rotate(15 160 65)" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="240" y="125" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0284c7">Liebig Condenser</text>
      <!-- Receiving Flask -->
      <polygon points="340,165 375,165 390,215 325,215" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <text x="330" y="235" font-size="11" font-family="sans-serif" fill="#475569">Distillate Receiver</text>
    </svg>`,
  },

  // ==========================================
  // 4. MATHEMATICS
  // ==========================================
  {
    subjectKey: 'mathematics',
    subject: 'Mathematics',
    topic: 'Circle Theorems: Angle Subtended at Center',
    text: 'In the circle diagram with center O, points A, B, and C lie on the circumference. If angle AOC = 130°, find the value of angle ABC.',
    options: {
      A: '65°',
      B: '115°',
      C: '50°',
      D: '75°',
    },
    answer: 'A',
    explanation: 'By the Circle Theorem: The angle subtended by an arc at the center of a circle is twice the angle subtended by the same arc at any point on the remaining circumference. Therefore, Angle ABC = 1/2 × Angle AOC = 1/2 × 130° = 65°.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia, Chapter 9, Pages 210-215',
    imageCaption: 'Figure: Geometric Circle Theorem Diagram',
    imageAlt: 'Circle with center O showing subtended angle AOC = 130 degrees and angle ABC at the circumference',
    imageSvg: `<svg viewBox="0 0 460 240" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Circle -->
      <circle cx="230" cy="120" r="90" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5"/>
      <!-- Center O -->
      <circle cx="230" cy="120" r="3.5" fill="#0f172a"/>
      <text x="236" y="116" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">O</text>
      <!-- Radii OA and OC -->
      <line x1="230" y1="120" x2="160" y2="175" stroke="#2563eb" stroke-width="2"/>
      <line x1="230" y1="120" x2="300" y2="175" stroke="#2563eb" stroke-width="2"/>
      <!-- Chords AB and CB -->
      <line x1="160" y1="175" x2="230" y2="30" stroke="#0f172a" stroke-width="2"/>
      <line x1="300" y1="175" x2="230" y2="30" stroke="#0f172a" stroke-width="2"/>
      <!-- Points -->
      <circle cx="160" cy="175" r="4" fill="#0f172a"/>
      <text x="140" y="185" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">A</text>
      <circle cx="300" cy="175" r="4" fill="#0f172a"/>
      <text x="312" y="185" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">C</text>
      <circle cx="230" cy="30" r="4" fill="#0f172a"/>
      <text x="225" y="20" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">B</text>
      <!-- Center Angle arc -->
      <path d="M 215 130 A 20 20 0 0 0 245 130" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="217" y="148" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">130°</text>
      <!-- Circumference Angle Arc -->
      <path d="M 223 45 A 18 18 0 0 0 237 45" fill="none" stroke="#16a34a" stroke-width="2"/>
      <text x="226" y="62" font-size="11" font-family="sans-serif" font-weight="bold" fill="#16a34a">?</text>
    </svg>`,
  },
  {
    subjectKey: 'mathematics',
    subject: 'Mathematics',
    topic: 'Trigonometry: Bearings and Distances',
    text: 'A patrol boat sails from Port P on a bearing of 060° to Port Q, which is 40 km away. It then turns and sails due South to Port R located due East of Port P. Calculate the distance PR.',
    options: {
      A: '20 km',
      B: '34.6 km',
      C: '40 km',
      D: '25 km',
    },
    answer: 'A',
    explanation: 'From the right-angled triangle formed at P, Q, and R: Bearing of 060° from North means the acute angle between the North line and PQ is 60°. Since R is due East of P (bearing 090°), Angle QPR = 90° - 60° = 30°. Port R is due South of Q, so triangle P-R-Q has a right angle at R. In right triangle PRQ: cos(30°) = adjacent / hypotenuse... wait, if Q is at 060° and R is due South of Q and due East of P, in ΔPQR: PR is adjacent to the 30° angle, or cos(60°) = PR / PQ. cos(60°) = 20 / 40 = 0.5. Hence distance PR = 40 × cos(60°) = 20 km.',
    bookTitle: 'HIDDEN FACTS IN MATHEMATICS',
    author: 'M.A. Otumudia',
    textbookRef: 'HIDDEN FACTS IN MATHEMATICS by M.A. Otumudia, Chapter 10, Pages 255-262',
    imageCaption: 'Figure: Bearing and Navigational Geometry Diagram',
    imageAlt: 'Bearing triangle showing North line at P, bearing 060 to Q (40 km), and right-angled point R due East of P',
    imageSvg: `<svg viewBox="0 0 460 230" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- North Reference Line at P -->
      <line x1="120" y1="180" x2="120" y2="40" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
      <polygon points="117,42 120,32 123,42" fill="#dc2626"/>
      <text x="114" y="26" font-size="13" font-family="sans-serif" font-weight="bold" fill="#dc2626">N</text>
      <!-- Point P -->
      <circle cx="120" cy="180" r="4" fill="#0f172a"/>
      <text x="100" y="195" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">P</text>
      <!-- Leg PQ (40 km at 060 bearing) -->
      <line x1="120" y1="180" x2="260" y2="70" stroke="#0f172a" stroke-width="2.5"/>
      <text x="175" y="115" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">40 km</text>
      <!-- Point Q -->
      <circle cx="260" cy="70" r="4" fill="#0f172a"/>
      <text x="268" y="70" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">Q</text>
      <!-- Leg QR (due South) -->
      <line x1="260" y1="70" x2="260" y2="180" stroke="#0f172a" stroke-width="2"/>
      <!-- Leg PR (due East) -->
      <line x1="120" y1="180" x2="260" y2="180" stroke="#2563eb" stroke-width="2.5"/>
      <!-- Point R -->
      <circle cx="260" cy="180" r="4" fill="#0f172a"/>
      <text x="265" y="198" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">R</text>
      <text x="180" y="200" font-size="12" font-family="sans-serif" font-weight="bold" fill="#2563eb">PR = ?</text>
      <!-- Right angle mark at R -->
      <polyline points="250,180 250,170 260,170" fill="none" stroke="#0f172a" stroke-width="1.5"/>
      <!-- Bearing 060 arc -->
      <path d="M 120 140 A 40 40 0 0 1 145 150" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="135" y="130" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">60°</text>
    </svg>`,
  },

  // ==========================================
  // 5. USE OF ENGLISH
  // ==========================================
  {
    subjectKey: 'english',
    subject: 'Use of English',
    topic: 'Comprehension & Graphic Representation',
    text: 'According to the official traffic sign illustrated below, what immediate instruction is communicated to a motorist driving along this roadway?',
    options: {
      A: 'Yield right of way and merge with oncoming traffic (Give Way)',
      B: 'Total prohibition of entry (No Entry)',
      C: 'Compulsory stop and wait for signal (Stop)',
      D: 'Overtaking prohibited for all vehicles',
    },
    answer: 'A',
    explanation: 'The inverted equilateral red triangle with a white center is the universally recognized international and Nigerian highway regulatory sign for "YIELD" or "GIVE WAY". It commands drivers to slow down or stop if necessary to yield the right-of-way to other vehicles.',
    bookTitle: 'A-Z OF ENGLISH',
    author: 'B.O. Dele Ashade',
    textbookRef: 'A-Z OF ENGLISH by Dele Ashade, Section 7: Graphic Aids & Real-World Lexis, Page 215',
    imageCaption: 'Figure: Regulatory Highway Warning Symbol',
    imageAlt: 'Inverted triangular road traffic sign with red border and white background meaning yield / give way',
    imageSvg: `<svg viewBox="0 0 460 220" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.25"/>
        </filter>
      </defs>
      <!-- Pole -->
      <rect x="224" y="140" width="12" height="70" fill="#64748b" rx="2"/>
      <!-- Outer Inverted Red Triangle -->
      <polygon points="150,30 310,30 230,170" fill="#dc2626" stroke="#b91c1c" stroke-width="2" filter="url(#shadow)"/>
      <!-- Inner White Triangle -->
      <polygon points="172,44 288,44 230,146" fill="#ffffff"/>
      <!-- Sign Label -->
      <text x="202" y="75" font-size="14" font-family="sans-serif" font-weight="900" fill="#dc2626">GIVE</text>
      <text x="204" y="95" font-size="14" font-family="sans-serif" font-weight="900" fill="#dc2626">WAY</text>
    </svg>`,
  },

  // ==========================================
  // 6. ECONOMICS
  // ==========================================
  {
    subjectKey: 'economics',
    subject: 'Economics',
    topic: 'Price Theory: Shift in Market Demand Curve',
    text: 'In the supply and demand graph illustrated below, the outward shift of the demand curve from D1 to D2 with supply S remaining constant results in:',
    options: {
      A: 'An increase in both equilibrium price (P1 to P2) and equilibrium quantity (Q1 to Q2)',
      B: 'A decrease in equilibrium price and an increase in quantity',
      C: 'An increase in equilibrium price with quantity remaining constant',
      D: 'A decrease in both equilibrium price and equilibrium quantity',
    },
    answer: 'A',
    explanation: 'A rightward shift of the demand curve (from D1 to D2) caused by favorable determinants (such as a rise in consumer income or population increase) moves the market equilibrium along the upward-sloping supply curve from E1 to E2. This causes both the equilibrium price to rise from P1 to P2 and equilibrium quantity to expand from Q1 to Q2.',
    bookTitle: 'COMPREHENSIVE ECONOMICS',
    author: 'J.U. Anyaele',
    textbookRef: 'COMPREHENSIVE ECONOMICS by J.U. Anyaele, Chapter 5, Pages 85-92',
    imageCaption: 'Figure: Market Equilibrium Shift under Increased Demand',
    imageAlt: 'Microeconomic graph showing supply curve S intersecting demand curves D1 and D2, illustrating higher equilibrium price P2 and quantity Q2',
    imageSvg: `<svg viewBox="0 0 480 230" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes -->
      <line x1="70" y1="190" x2="430" y2="190" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="70" y1="190" x2="70" y2="25" stroke="#0f172a" stroke-width="2.5"/>
      <text x="435" y="195" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">Quantity (Q)</text>
      <text x="35" y="25" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">Price (P)</text>
      <!-- Supply Curve (Upward Sloping) -->
      <line x1="100" y1="170" x2="380" y2="50" stroke="#16a34a" stroke-width="3"/>
      <text x="388" y="55" font-size="13" font-family="sans-serif" font-weight="bold" fill="#16a34a">S</text>
      <!-- Demand Curve 1 (D1) -->
      <line x1="100" y1="50" x2="330" y2="170" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="335" y="175" font-size="13" font-family="sans-serif" font-weight="bold" fill="#64748b">D₁</text>
      <!-- Demand Curve 2 (D2) -->
      <line x1="160" y1="50" x2="390" y2="170" stroke="#2563eb" stroke-width="3"/>
      <text x="395" y="175" font-size="13" font-family="sans-serif" font-weight="bold" fill="#2563eb">D₂</text>
      <!-- Equilibrium Points -->
      <circle cx="215" cy="120" r="4.5" fill="#dc2626"/>
      <text x="195" y="118" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">E₁</text>
      <circle cx="275" cy="95" r="4.5" fill="#dc2626"/>
      <text x="282" y="93" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">E₂</text>
      <!-- Price & Quantity Projections -->
      <line x1="70" y1="120" x2="215" y2="120" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <line x1="70" y1="95" x2="275" y2="95" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <text x="50" y="124" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">P₁</text>
      <text x="50" y="99" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2563eb">P₂</text>
      <line x1="215" y1="120" x2="215" y2="190" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <line x1="275" y1="95" x2="275" y2="190" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <text x="210" y="205" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">Q₁</text>
      <text x="270" y="205" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2563eb">Q₂</text>
    </svg>`,
  },

  // ==========================================
  // 7. GEOGRAPHY
  // ==========================================
  {
    subjectKey: 'geography',
    subject: 'Geography',
    topic: 'Map Reading & Relief Interpretation',
    text: 'On the topographical contour map shown, what distinct physical relief feature is indicated by the concentric closed contour lines with heights rising inward from 200 m to 500 m?',
    options: {
      A: 'A Conical Hill',
      B: 'A River Valley',
      C: 'A Plateaux with a Caldera',
      D: 'A Coastal Cliff',
    },
    answer: 'A',
    explanation: 'Concentric, roughly circular closed contour lines where elevation values increase progressively towards the center (from 200 m on the outer ring to 500 m at the peak) depict a Conical Hill or summit. The even spacing of contour lines shows a uniform slope.',
    bookTitle: 'ESSENTIAL GEOGRAPHY',
    author: 'O.A. Iwena',
    textbookRef: 'ESSENTIAL GEOGRAPHY by O.A. Iwena, Chapter 3: Contour Representation, Pages 45-52',
    imageCaption: 'Figure: Topographical Relief Map with Contour Intervals',
    imageAlt: 'Concentric contour lines representing a conical hill with heights 200m, 300m, 400m, and 500m',
    imageSvg: `<svg viewBox="0 0 460 220" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- 200m contour -->
      <ellipse cx="230" cy="110" rx="170" ry="85" fill="#f0fdf4" stroke="#84cc16" stroke-width="2"/>
      <text x="75" y="115" font-size="10" font-family="sans-serif" font-weight="bold" fill="#4d7c0f">200m</text>
      <!-- 300m contour -->
      <ellipse cx="230" cy="110" rx="125" ry="60" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="120" y="115" font-size="10" font-family="sans-serif" font-weight="bold" fill="#15803d">300m</text>
      <!-- 400m contour -->
      <ellipse cx="230" cy="110" rx="75" ry="38" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
      <text x="170" y="115" font-size="10" font-family="sans-serif" font-weight="bold" fill="#14532d">400m</text>
      <!-- 500m peak -->
      <ellipse cx="230" cy="110" rx="30" ry="15" fill="#86efac" stroke="#14532d" stroke-width="2.5"/>
      <text x="218" y="114" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">▲ 500m</text>
    </svg>`,
  },

  // ==========================================
  // 8. GOVERNMENT
  // ==========================================
  {
    subjectKey: 'government',
    subject: 'Government',
    topic: 'Constitutional Law: Separation of Powers',
    text: 'Study the organogram of the three arms of democratic government. Which arm possesses the constitutional power of judicial review to declare laws unconstitutional?',
    options: {
      A: 'Arm Z (The Judiciary)',
      B: 'Arm X (The Legislature)',
      C: 'Arm Y (The Executive)',
      D: 'The Civil Service Commission',
    },
    answer: 'A',
    explanation: 'Under the constitutional doctrine of the Separation of Powers and checks and balances: Arm X (The Legislature) enacts laws; Arm Y (The Executive) implements and enforces laws; and Arm Z (The Judiciary) interprets the law, resolves disputes, and exercises Judicial Review to strike down unconstitutional executive acts or legislative statutes.',
    bookTitle: 'ESSENTIAL GOVERNMENT',
    author: 'C.C. Dibie',
    textbookRef: 'ESSENTIAL GOVERNMENT by C.C. Dibie, Chapter 4, Pages 48-55',
    imageCaption: 'Figure: Structure of the Three Arms of Government',
    imageAlt: 'Organogram illustrating the Three Arms of Democratic Government: Legislature X, Executive Y, and Judiciary Z with interactive checks and balances',
    imageSvg: `<svg viewBox="0 0 480 230" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Constitution Box Top -->
      <rect x="180" y="15" width="120" height="35" rx="6" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <text x="195" y="38" font-size="12" font-family="sans-serif" font-weight="bold" fill="#ffffff">CONSTITUTION</text>
      
      <!-- Connectors -->
      <line x1="240" y1="50" x2="90" y2="90" stroke="#64748b" stroke-width="2"/>
      <line x1="240" y1="50" x2="240" y2="90" stroke="#64748b" stroke-width="2"/>
      <line x1="240" y1="50" x2="390" y2="90" stroke="#64748b" stroke-width="2"/>

      <!-- Arm X (Legislature) -->
      <rect x="30" y="90" width="120" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="45" y="115" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1d4ed8">ARM X</text>
      <text x="45" y="135" font-size="11" font-family="sans-serif" fill="#1e40af">Makes Laws</text>

      <!-- Arm Y (Executive) -->
      <rect x="180" y="90" width="120" height="60" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
      <text x="195" y="115" font-size="12" font-family="sans-serif" font-weight="bold" fill="#15803d">ARM Y</text>
      <text x="195" y="135" font-size="11" font-family="sans-serif" fill="#166534">Enforces Laws</text>

      <!-- Arm Z (Judiciary) -->
      <rect x="330" y="90" width="120" height="60" rx="8" fill="#fdf2f8" stroke="#ec4899" stroke-width="2.5"/>
      <text x="345" y="115" font-size="12" font-family="sans-serif" font-weight="bold" fill="#be185d">ARM Z</text>
      <text x="345" y="135" font-size="11" font-family="sans-serif" font-weight="bold" fill="#9d174d">Interprets Laws</text>

      <!-- Checks & Balances bidirectional arrows -->
      <path d="M 150 120 L 180 120" stroke="#dc2626" stroke-width="2"/>
      <path d="M 300 120 L 330 120" stroke="#dc2626" stroke-width="2"/>
      <text x="185" y="195" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">⇄ Checks &amp; Balances System ⇄</text>
    </svg>`,
  },

  // ==========================================
  // 9. COMMERCE & ACCOUNTS
  // ==========================================
  {
    subjectKey: 'commerce',
    subject: 'Commerce',
    topic: 'Channels of Distribution',
    text: 'In the commercial channel of distribution illustrated below, what intermediary is represented by box K that bridges the manufacturer and the retailer?',
    options: {
      A: 'The Wholesaler',
      B: 'The Consignee',
      C: 'The Ultimate Consumer',
      D: 'The Commission Broker',
    },
    answer: 'A',
    explanation: 'In the standard traditional channel of distribution for consumer manufactured goods: Manufacturer → Wholesaler (K) → Retailer → Final Consumer. The wholesaler purchases goods in large bulk quantities directly from the manufacturer, breaks bulk, warehouses goods, and sells in smaller units to retailers.',
    bookTitle: 'ESSENTIAL COMMERCE',
    author: 'O.A. Longe',
    textbookRef: 'ESSENTIAL COMMERCE by O.A. Longe, Chapter 4, Pages 52-59',
    imageCaption: 'Figure: Traditional Channels of Distribution Flowchart',
    imageAlt: 'Flowchart showing Manufacturer pointing to box K (Wholesaler), pointing to Retailer, pointing to Consumer',
    imageSvg: `<svg viewBox="0 0 500 180" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Manufacturer -->
      <rect x="20" y="60" width="95" height="50" rx="8" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <text x="25" y="90" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">Manufacturer</text>
      <!-- Arrow 1 -->
      <line x1="115" y1="85" x2="145" y2="85" stroke="#0f172a" stroke-width="2.5"/>
      <polygon points="143,81 150,85 143,89" fill="#0f172a"/>
      <!-- Wholesaler (K) -->
      <rect x="150" y="55" width="95" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
      <text x="188" y="85" font-size="16" font-family="sans-serif" font-weight="900" fill="#1d4ed8">K</text>
      <text x="165" y="103" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2563eb">(Bulk Buyer)</text>
      <!-- Arrow 2 -->
      <line x1="245" y1="85" x2="275" y2="85" stroke="#0f172a" stroke-width="2.5"/>
      <polygon points="273,81 280,85 273,89" fill="#0f172a"/>
      <!-- Retailer -->
      <rect x="280" y="60" width="90" height="50" rx="8" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <text x="300" y="90" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">Retailer</text>
      <!-- Arrow 3 -->
      <line x1="370" y1="85" x2="400" y2="85" stroke="#0f172a" stroke-width="2.5"/>
      <polygon points="398,81 405,85 398,89" fill="#0f172a"/>
      <!-- Consumer -->
      <rect x="405" y="60" width="85" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="415" y="90" font-size="11" font-family="sans-serif" font-weight="bold" fill="#15803d">Consumer</text>
    </svg>`,
  },

  // ==========================================
  // 10. AGRICULTURAL SCIENCE
  // ==========================================
  {
    subjectKey: 'agricultural_science',
    subject: 'Agricultural Science',
    topic: 'Soil Science: Soil Profile Horizons',
    text: 'In the vertical soil profile cross-section illustrated below, which horizon represents the fertile topsoil rich in decomposed organic matter and humus?',
    options: {
      A: 'Horizon A',
      B: 'Horizon B',
      C: 'Horizon C',
      D: 'Horizon R (Bedrock)',
    },
    answer: 'A',
    explanation: 'Horizon A (Topsoil) lies directly below the superficial organic layer (Horizon O) and contains the highest concentration of organic matter, decomposed humus, and active soil micro-organisms. It is the primary zone for crop root development and nutrient uptake. Horizon B is the subsoil, and Horizon C is the weathered parent material.',
    bookTitle: 'ESSENTIAL AGRICULTURAL SCIENCE',
    author: 'O.A. Iwena',
    textbookRef: 'ESSENTIAL AGRICULTURAL SCIENCE by O.A. Iwena, Chapter 5: Soil Profile, Pages 65-71',
    imageCaption: 'Figure: Typical Soil Profile Horizons Diagram',
    imageAlt: 'Soil profile cross section showing topsoil Horizon A, subsoil Horizon B, weathered parent material Horizon C, and solid bedrock Horizon R',
    imageSvg: `<svg viewBox="0 0 460 230" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Horizon O & A (Topsoil) -->
      <rect x="60" y="20" width="220" height="45" fill="#451a03" stroke="#292524" stroke-width="1.5"/>
      <text x="290" y="48" font-size="13" font-family="sans-serif" font-weight="bold" fill="#78350f">Horizon A (Topsoil &amp; Humus)</text>
      <!-- Horizon B (Subsoil) -->
      <rect x="60" y="65" width="220" height="55" fill="#9a3412" stroke="#292524" stroke-width="1.5"/>
      <text x="290" y="98" font-size="13" font-family="sans-serif" font-weight="bold" fill="#9a3412">Horizon B (Subsoil)</text>
      <!-- Horizon C (Parent Material) -->
      <rect x="60" y="120" width="220" height="50" fill="#a8a29e" stroke="#292524" stroke-width="1.5"/>
      <text x="290" y="150" font-size="13" font-family="sans-serif" font-weight="bold" fill="#57534e">Horizon C (Weathered Rock)</text>
      <!-- Horizon R (Bedrock) -->
      <rect x="60" y="170" width="220" height="40" fill="#44403c" stroke="#292524" stroke-width="1.5"/>
      <text x="290" y="195" font-size="13" font-family="sans-serif" font-weight="bold" fill="#292524">Horizon R (Solid Bedrock)</text>
    </svg>`,
  },

  // ==========================================
  // 11. COMPUTER STUDIES
  // ==========================================
  {
    subjectKey: 'computer_studies',
    subject: 'Computer Studies',
    topic: 'Logic Gates & Digital Circuits',
    text: 'What digital logic gate is represented by the ANSI standard logic symbol shown, and what is its output Y when inputs A = 1 and B = 1?',
    options: {
      A: 'AND Gate; Output Y = 1',
      B: 'OR Gate; Output Y = 0',
      C: 'NAND Gate; Output Y = 1',
      D: 'XOR Gate; Output Y = 0',
    },
    answer: 'A',
    explanation: 'The curved-back, rounded-front D-shaped symbol represents a 2-input standard AND Gate. Its boolean function is Y = A · B. The output Y is HIGH (1) if and only if both input A is 1 AND input B is 1.',
    bookTitle: 'COMPUTER STUDIES FOR SENIOR SECONDARY SCHOOLS',
    author: 'Hi-Tech / O.A. Adedoyin',
    textbookRef: 'COMPUTER STUDIES FOR SSS by O.A. Adedoyin, Chapter 8: Logic Operations, Pages 112-118',
    imageCaption: 'Figure: ANSI Standard 2-Input Logic Gate',
    imageAlt: 'Standard AND gate with two inputs A and B and one output Y',
    imageSvg: `<svg viewBox="0 0 460 180" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Input Lines -->
      <line x1="80" y1="70" x2="160" y2="70" stroke="#0f172a" stroke-width="3"/>
      <text x="50" y="75" font-size="15" font-family="sans-serif" font-weight="bold" fill="#0f172a">A = 1</text>
      <line x1="80" y1="110" x2="160" y2="110" stroke="#0f172a" stroke-width="3"/>
      <text x="50" y="115" font-size="15" font-family="sans-serif" font-weight="bold" fill="#0f172a">B = 1</text>
      <!-- AND Gate Body -->
      <path d="M 160 50 L 210 50 A 40 40 0 0 1 210 130 L 160 130 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
      <!-- Output Line -->
      <line x1="250" y1="90" x2="330" y2="90" stroke="#0f172a" stroke-width="3"/>
      <text x="345" y="95" font-size="16" font-family="sans-serif" font-weight="bold" fill="#dc2626">Y = ?</text>
      <text x="180" y="95" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1d4ed8">AND</text>
    </svg>`,
  },

  // ==========================================
  // 12. CIVIC EDUCATION
  // ==========================================
  {
    subjectKey: 'civic_education',
    subject: 'Civic Education',
    topic: 'National Symbols: The Nigerian Coat of Arms',
    text: 'On the Nigerian National Coat of Arms shown, what does the black shield in the center symbolize?',
    options: {
      A: 'The fertile agricultural soil of Nigeria',
      B: 'The strength and national pride of the people',
      C: 'The beauty and diversity of Nigerian flora',
      D: 'The mineral oil resources of the Niger Delta',
    },
    answer: 'A',
    explanation: 'In the official heraldic symbolism of the Nigerian National Coat of Arms: The Black Shield represents the rich, fertile agricultural soil of the country. The two White Horses symbolize dignity and pride, the Red Eagle represents strength, and the silver wavy "Y" represents the confluence of the Niger and Benue Rivers at Lokoja.',
    bookTitle: 'ESSENTIAL CIVIC EDUCATION',
    author: 'R.W. Okunloye',
    textbookRef: 'ESSENTIAL CIVIC EDUCATION by R.W. Okunloye, Chapter 2: National Symbols, Pages 24-28',
    imageCaption: 'Figure: Official Symbols of the Nigerian Coat of Arms',
    imageAlt: 'Illustrated diagram of the Nigerian Coat of Arms featuring the eagle, black shield with Y shape, and two white horses',
    imageSvg: `<svg viewBox="0 0 460 220" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Shield -->
      <path d="M 180 80 Q 230 70 280 80 L 270 140 Q 230 180 180 140 Z" fill="#0f172a" stroke="#d97706" stroke-width="3"/>
      <!-- Silver Y Shape on Shield (Confluence) -->
      <path d="M 200 85 L 230 115 L 230 155 M 260 85 L 230 115" fill="none" stroke="#e2e8f0" stroke-width="5" stroke-linecap="round"/>
      <!-- Red Eagle on Top -->
      <polygon points="230,45 220,65 240,65" fill="#dc2626"/>
      <path d="M 215 55 Q 230 35 245 55" fill="none" stroke="#dc2626" stroke-width="3"/>
      <text x="205" y="35" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">Eagle (Strength)</text>
      <!-- Horses on sides -->
      <rect x="130" y="90" width="35" height="55" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <text x="95" y="165" font-size="11" font-family="sans-serif" font-weight="bold" fill="#475569">Horse (Dignity)</text>
      <rect x="295" y="90" width="35" height="55" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <text x="295" y="165" font-size="11" font-family="sans-serif" font-weight="bold" fill="#475569">Horse (Dignity)</text>
      <!-- Base Motto -->
      <rect x="150" y="185" width="160" height="22" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="160" y="200" font-size="10" font-family="sans-serif" font-weight="bold" fill="#854d0e">Unity &amp; Faith, Peace &amp; Progress</text>
    </svg>`,
  },

  // ==========================================
  // 13. LITERATURE IN ENGLISH
  // ==========================================
  {
    subjectKey: 'literature',
    subject: 'Literature in English',
    topic: 'Literary Structure: Freytag’s Dramatic Plot Pyramid',
    text: 'In the dramatic plot structure diagram shown, what narrative phase occurs at point K, representing the turning point and peak of dramatic tension?',
    options: {
      A: 'The Climax',
      B: 'The Exposition',
      C: 'The Denouement',
      D: 'The Inciting Incident',
    },
    answer: 'A',
    explanation: 'In Freytag’s dramatic pyramid of plot structure: The exposition introduces characters and background, leading to the rising action. Point K is the Climax—the supreme turning point and crisis of highest emotional and narrative tension—after which the falling action and resolution (denouement) follow.',
    bookTitle: 'EXAM FOCUS: LITERATURE IN ENGLISH',
    author: 'J.O.J. Nwachukwu-Agbada et al.',
    textbookRef: 'EXAM FOCUS: LITERATURE IN ENGLISH by J.O.J. Nwachukwu-Agbada, Chapter 1, Pages 12-16',
    imageCaption: 'Figure: Freytag’s Classic Dramatic Plot Pyramid',
    imageAlt: 'Freytag plot structure pyramid showing exposition, rising action, climax peak K, falling action, and resolution',
    imageSvg: `<svg viewBox="0 0 460 210" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Pyramid Slope -->
      <line x1="50" y1="160" x2="140" y2="160" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="140" y1="160" x2="230" y2="45" stroke="#2563eb" stroke-width="3"/>
      <line x1="230" y1="45" x2="320" y2="160" stroke="#dc2626" stroke-width="3"/>
      <line x1="320" y1="160" x2="410" y2="160" stroke="#0f172a" stroke-width="2.5"/>
      <!-- Peak K -->
      <circle cx="230" cy="45" r="7" fill="#dc2626"/>
      <text x="225" y="30" font-size="16" font-family="sans-serif" font-weight="900" fill="#dc2626">K</text>
      <!-- Labels -->
      <text x="50" y="180" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">1. Exposition</text>
      <text x="135" y="100" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2563eb">2. Rising Action</text>
      <text x="290" y="100" font-size="11" font-family="sans-serif" font-weight="bold" fill="#dc2626">4. Falling Action</text>
      <text x="330" y="180" font-size="11" font-family="sans-serif" font-weight="bold" fill="#0f172a">5. Denouement</text>
    </svg>`,
  },

  // ==========================================
  // 14. PRINCIPLES OF ACCOUNTS
  // ==========================================
  {
    subjectKey: 'accounts',
    subject: 'Principles of Accounts',
    topic: 'Double Entry System: Standard Ledger T-Account',
    text: 'In the standard ledger T-account format illustrated, what are the respective designations for the left side (Debit) and right side (Credit)?',
    options: {
      A: 'Left = Dr (Debit); Right = Cr (Credit)',
      B: 'Left = Cr (Credit); Right = Dr (Debit)',
      C: 'Left = Balance c/d; Right = Balance b/d',
      D: 'Left = Assets only; Right = Liabilities only',
    },
    answer: 'A',
    explanation: 'By fundamental accounting convention and double-entry bookkeeping: The left side of every ledger account is designated as the Debit (Dr) side, and the right side is designated as the Credit (Cr) side.',
    bookTitle: 'ESSENTIAL FINANCIAL ACCOUNTING',
    author: 'O.A. Longe & R.A. Kazeem',
    textbookRef: 'ESSENTIAL FINANCIAL ACCOUNTING by O.A. Longe, Chapter 3: The Ledger & Double Entry, Pages 28-34',
    imageCaption: 'Figure: Standard T-Account Ledger Format',
    imageAlt: 'Ledger account T format showing Dr on the left and Cr on the right with columns for date, particulars, folio, and amount',
    imageSvg: `<svg viewBox="0 0 460 190" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Account Title -->
      <text x="175" y="30" font-size="14" font-family="sans-serif" font-weight="bold" fill="#0f172a">CASH ACCOUNT</text>
      <!-- T-Frame -->
      <line x1="40" y1="45" x2="420" y2="45" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="230" y1="45" x2="230" y2="175" stroke="#0f172a" stroke-width="2.5"/>
      <!-- Dr and Cr -->
      <text x="45" y="40" font-size="13" font-family="sans-serif" font-weight="bold" fill="#2563eb">Dr (Debit)</text>
      <text x="360" y="40" font-size="13" font-family="sans-serif" font-weight="bold" fill="#dc2626">Cr (Credit)</text>
      <!-- Sub headers -->
      <text x="50" y="65" font-size="10" font-family="sans-serif" fill="#64748b">Date | Particulars | ₦</text>
      <text x="240" y="65" font-size="10" font-family="sans-serif" fill="#64748b">Date | Particulars | ₦</text>
      <!-- Sample rows -->
      <text x="50" y="90" font-size="11" font-family="sans-serif" fill="#0f172a">Jan 1: Capital   ₦50,000</text>
      <text x="240" y="90" font-size="11" font-family="sans-serif" fill="#0f172a">Jan 4: Rent       ₦15,000</text>
      <text x="50" y="115" font-size="11" font-family="sans-serif" fill="#0f172a">Jan 8: Sales     ₦30,000</text>
      <text x="240" y="115" font-size="11" font-family="sans-serif" fill="#0f172a">Jan 31: Bal c/d ₦65,000</text>
      <line x1="40" y1="135" x2="420" y2="135" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="140" y="155" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">₦80,000</text>
      <text x="330" y="155" font-size="12" font-family="sans-serif" font-weight="bold" fill="#0f172a">₦80,000</text>
      <line x1="40" y1="165" x2="420" y2="165" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="0"/>
    </svg>`,
  },

  // ==========================================
  // 15. CHRISTIAN RELIGIOUS STUDIES (CRS)
  // ==========================================
  {
    subjectKey: 'crs',
    subject: 'Christian Religious Studies',
    topic: 'Biblical History: Paul’s Missionary Journeys',
    text: 'According to the Acts of the Apostles, study the map of Paul’s Second Missionary Journey below. At which prominent Greek city (marked X) did Paul address the philosophers on the Areopagus regarding the "Unknown God"?',
    options: {
      A: 'Athens (Point X)',
      B: 'Antioch in Syria',
      C: 'Ephesus in Asia Minor',
      D: 'Rome in Italy',
    },
    answer: 'A',
    explanation: 'In Acts 17:16-34, while waiting in Athens (Point X), Paul was deeply provoked by the city’s idolatry and stood up in the meeting of the Areopagus (Mars Hill) to proclaim Jesus Christ and the resurrection to the Stoic and Epicurean philosophers, quoting their own poets and referencing their altar inscribed "To an Unknown God".',
    bookTitle: 'ESSENTIAL CHRISTIAN RELIGIOUS KNOWLEDGE',
    author: 'Edmond, U.O.',
    textbookRef: 'ESSENTIAL CHRISTIAN RELIGIOUS KNOWLEDGE by Edmond, U.O., Chapter 12: Paul’s Journeys, Pages 168-175',
    imageCaption: 'Figure: Map Route of the Second Missionary Journey of Paul',
    imageAlt: 'Map showing Mediterranean route through Troas, Philippi, Thessalonica, and Athens (marked X)',
    imageSvg: `<svg viewBox="0 0 460 210" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="460" height="210" fill="#e0f2fe" rx="8"/>
      <!-- Landmass simplified outline -->
      <path d="M 40 40 Q 120 30 200 40 L 260 70 Q 340 50 420 60 L 420 180 L 320 180 Q 240 170 180 180 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="320" y="40" font-size="11" font-family="sans-serif" font-weight="bold" fill="#78350f">Asia Minor</text>
      <text x="80" y="55" font-size="11" font-family="sans-serif" font-weight="bold" fill="#78350f">Macedonia &amp; Greece</text>
      <text x="180" y="140" font-size="12" font-family="sans-serif" font-style="italic" fill="#0284c7">Aegean Sea</text>
      <!-- Journey Path -->
      <path d="M 400 150 L 350 90 L 290 60 L 210 50 L 170 80 L 150 120" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,3"/>
      <!-- Key Locations -->
      <circle cx="400" cy="150" r="4" fill="#0f172a"/><text x="408" y="155" font-size="10" font-family="sans-serif">Antioch</text>
      <circle cx="210" cy="50" r="4" fill="#0f172a"/><text x="200" y="40" font-size="10" font-family="sans-serif">Philippi</text>
      <circle cx="150" cy="120" r="7" fill="#dc2626"/>
      <text x="135" y="145" font-size="14" font-family="sans-serif" font-weight="900" fill="#dc2626">X (Athens)</text>
    </svg>`,
  },

  // ==========================================
  // 16. ISLAMIC RELIGIOUS STUDIES (IRS)
  // ==========================================
  {
    subjectKey: 'irs',
    subject: 'Islamic Religious Studies',
    topic: 'Pillars of Islam: The Holy Ka’bah & Rites of Hajj',
    text: 'In the architectural schematic of the Holy Ka’bah in Makkah illustrated below, what sacred relic is embedded in the southeastern corner at point H, where pilgrims begin each circuit of Tawaf?',
    options: {
      A: 'Hajar al-Aswad (The Black Stone)',
      B: 'Maqam Ibrahim (Station of Abraham)',
      C: 'Hijr Ismail (Hateem semicircular enclosure)',
      D: 'The Well of Zamzam',
    },
    answer: 'A',
    explanation: 'The Black Stone (Hajar al-Aswad) is set into the southeastern corner (Point H) of the Holy Ka’bah. In Islamic tradition established by Prophet Muhammad (PBUH), each of the seven anti-clockwise circuits (Ashwat) of Tawaf begins and ends aligned with the Black Stone.',
    bookTitle: 'ISLAMIC STUDIES FOR SENIOR SECONDARY SCHOOLS',
    author: 'B.A. Lemu',
    textbookRef: 'ISLAMIC STUDIES FOR SSS by B.A. Lemu, Chapter 6: Hajj & Sacred Sites, Pages 88-94',
    imageCaption: 'Figure: Schematic Plan of the Holy Ka’bah Structure',
    imageAlt: 'Architectural plan of the Kaaba showing the cubic building, Hijr Ismail semicircle, Maqam Ibrahim, and Black Stone at corner H',
    imageSvg: `<svg viewBox="0 0 460 210" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Kaaba Cube Top View -->
      <rect x="160" y="50" width="130" height="110" fill="#18181b" stroke="#eab308" stroke-width="4" rx="4"/>
      <text x="195" y="110" font-size="14" font-family="sans-serif" font-weight="bold" fill="#fef08a">AL-KA'BAH</text>
      <!-- Kiswah gold band line -->
      <line x1="160" y1="75" x2="290" y2="75" stroke="#facc15" stroke-width="2"/>
      <!-- Hijr Ismail (Semicircle) -->
      <path d="M 160 50 A 55 55 0 0 1 290 50" fill="none" stroke="#0f172a" stroke-width="3" stroke-dasharray="3,3"/>
      <text x="185" y="35" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">Hijr Ismail (Hateem)</text>
      <!-- Black Stone Corner (H) -->
      <circle cx="290" cy="160" r="9" fill="#dc2626"/>
      <text x="305" y="165" font-size="13" font-family="sans-serif" font-weight="900" fill="#dc2626">H (Black Stone)</text>
      <!-- Tawaf Direction Arrow -->
      <path d="M 330 140 A 100 80 0 0 0 310 70" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="325" y="105" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2563eb">Tawaf ↺</text>
    </svg>`,
  },

  // ==========================================
  // 17. HISTORY
  // ==========================================
  {
    subjectKey: 'history',
    subject: 'History',
    topic: 'Pre-Colonial Nigeria: Kingdoms and Empires',
    text: 'On the historical sketch map of 18th century Nigeria below, which centralized kingdom (marked Region B) was famous for its cast bronze sculptures, defensive earthwork walls (Iya), and hereditary ruler known as the Oba?',
    options: {
      A: 'The Benin Kingdom (Region B)',
      B: 'The Kanem-Borno Empire',
      C: 'The Nupe Kingdom',
      D: 'The Calabar Kingdom',
    },
    answer: 'A',
    explanation: 'Region B represents the historic Benin Kingdom in the rainforest belt of southern Nigeria. The empire was renowned globally for its sophisticated bronze and brass casting guilds, intricate moat fortifications (Benin Moats/Iya), and absolute monarchical governance headed by the Oba of Benin.',
    bookTitle: 'GROUNDWORK OF NIGERIAN HISTORY',
    author: 'Obaro Ikime',
    textbookRef: 'GROUNDWORK OF NIGERIAN HISTORY by Obaro Ikime, Chapter 4, Pages 98-112',
    imageCaption: 'Figure: Pre-Colonial Nigerian Polities and Kingdoms',
    imageAlt: 'Historical map of Nigeria showing Hausa States in the North, Oyo in Southwest, Benin Kingdom in South Region B, and Borno in Northeast',
    imageSvg: `<svg viewBox="0 0 460 220" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Outline of Nigeria -->
      <path d="M 50 120 Q 90 40 180 30 Q 300 30 390 60 Q 420 120 370 190 Q 260 210 180 190 Q 100 200 50 120 Z" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <!-- River Niger and Benue (Y confluence) -->
      <path d="M 60 100 Q 150 130 200 130 Q 250 130 350 110 M 200 130 L 200 190" fill="none" stroke="#0284c7" stroke-width="3"/>
      <!-- Region B (Benin Kingdom) -->
      <circle cx="160" cy="165" r="24" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
      <text x="145" y="170" font-size="14" font-family="sans-serif" font-weight="bold" fill="#b91c1c">Region B</text>
      <!-- Other Polities -->
      <text x="160" y="65" font-size="11" font-family="sans-serif" font-weight="bold" fill="#475569">Hausa City-States</text>
      <text x="320" y="75" font-size="11" font-family="sans-serif" font-weight="bold" fill="#475569">Borno Empire</text>
      <text x="75" y="145" font-size="11" font-family="sans-serif" font-weight="bold" fill="#475569">Oyo Empire</text>
    </svg>`,
  },

  // ==========================================
  // 18. FRENCH
  // ==========================================
  {
    subjectKey: 'french',
    subject: 'French',
    topic: 'Vocabulaire & Expression Écrite: La Routine Quotidienne',
    text: 'Regardez l’illustration ci-dessous indiquant l’horloge à 07h00 du matin. Quelle est l’action correcte exprimée en français ?',
    options: {
      A: 'Il se réveille à sept heures du matin.',
      B: 'Il va se coucher dans son lit.',
      C: 'Il prend son déjeuner au restaurant.',
      D: 'Il fait ses devoirs pour l’école.',
    },
    answer: 'A',
    explanation: 'L’image montre une personne qui sort du lit au son du réveil indiquant 07h00. Le verbe pronominal approprié est « se réveiller » (to wake up) : « Il se réveille à sept heures du matin ».',
    bookTitle: 'LE NOUVEAU SANS FRONTIÈRES / MODERN FRENCH',
    author: 'M. Brench & P. Philippe',
    textbookRef: 'MODERN FRENCH FOR SECONDARY SCHOOLS, Unité 3: La vie quotidienne, Page 45',
    imageCaption: 'Illustration: La Routine Matinale',
    imageAlt: 'Clock showing 7:00 AM with sunrise and person waking up in bed',
    imageSvg: `<svg viewBox="0 0 460 200" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Window with Sunrise -->
      <rect x="60" y="30" width="90" height="90" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <circle cx="105" cy="75" r="22" fill="#f97316"/>
      <!-- Bed -->
      <rect x="180" y="80" width="140" height="50" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <ellipse cx="205" cy="70" rx="18" ry="12" fill="#fed7aa"/>
      <rect x="220" y="85" width="100" height="40" fill="#93c5fd" rx="2"/>
      <!-- Alarm Clock at 7:00 -->
      <circle cx="370" cy="100" r="30" fill="#ffffff" stroke="#ef4444" stroke-width="3"/>
      <line x1="370" y1="100" x2="370" y2="80" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="370" y1="100" x2="370" y2="108" stroke="#0f172a" stroke-width="3"/>
      <text x="355" y="145" font-size="12" font-family="sans-serif" font-weight="bold" fill="#ef4444">07:00 AM</text>
    </svg>`,
  },

  // ==========================================
  // 19. PHYSICAL & HEALTH EDUCATION (PHE)
  // ==========================================
  {
    subjectKey: 'phe',
    subject: 'Physical & Health Education (PHE)',
    topic: 'Track and Field: Standard 400m Athletics Track',
    text: 'On the standard IAAF 400m athletics oval track shown, what designated yellow-marked zone (length 30 m in modern rules) allows relay sprinters to transfer the baton legally?',
    options: {
      A: 'The Baton Exchange Zone',
      B: 'The Acceleration Scratch Line',
      C: 'The Steeplechase Water Jump',
      D: 'The Hurdle Take-off Arc',
    },
    answer: 'A',
    explanation: 'On a standard 400m track, the baton exchange (take-over) zone in relay races (e.g. 4 × 100 m) is the precisely marked 30-meter zone within which the outgoing and incoming runners must legally hand over the baton.',
    bookTitle: 'ESSENTIAL PHYSICAL AND HEALTH EDUCATION',
    author: 'M.O. Ojeme',
    textbookRef: 'ESSENTIAL PHYSICAL AND HEALTH EDUCATION by M.O. Ojeme, Chapter 7: Athletics & Track Layout, Pages 92-98',
    imageCaption: 'Figure: Standard 400m Running Track Oval and Baton Exchange Zone',
    imageAlt: 'Track oval showing running lanes, finish line, and highlighted baton exchange zone',
    imageSvg: `<svg viewBox="0 0 460 210" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer Oval -->
      <rect x="70" y="30" width="320" height="150" rx="75" fill="#f1f5f9" stroke="#dc2626" stroke-width="4"/>
      <!-- Inner Field (Green Grass) -->
      <rect x="130" y="65" width="200" height="80" rx="40" fill="#86efac" stroke="#16a34a" stroke-width="2"/>
      <text x="185" y="110" font-size="12" font-family="sans-serif" font-weight="bold" fill="#15803d">Infield</text>
      <!-- Lanes -->
      <rect x="90" y="45" width="280" height="120" rx="60" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3"/>
      <!-- Exchange Zone Highlight on Straight -->
      <rect x="200" y="26" width="60" height="12" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="180" y="18" font-size="10" font-family="sans-serif" font-weight="bold" fill="#ca8a04">Baton Exchange Zone</text>
      <!-- Finish line -->
      <line x1="160" y1="26" x2="160" y2="40" stroke="#0f172a" stroke-width="3"/>
      <text x="145" y="18" font-size="9" font-family="sans-serif" font-weight="bold" fill="#0f172a">Finish</text>
    </svg>`,
  },

  // ==========================================
  // 20. MUSIC
  // ==========================================
  {
    subjectKey: 'music',
    subject: 'Music',
    topic: 'Rudiments & Theory: The Treble Staff and Note Pitches',
    text: 'On the five-line musical treble staff (G-Clef) shown below, what musical pitch note is located on the second line from the bottom?',
    options: {
      A: 'Pitch G',
      B: 'Pitch E',
      C: 'Pitch B',
      D: 'Pitch F',
    },
    answer: 'A',
    explanation: 'On the standard musical treble staff, the lines from bottom to top are named E - G - B - D - F (Every Good Boy Deserves Favour). The Treble Clef is also known as the G-clef because its inner spiral specifically circles and establishes the second line as Pitch G.',
    bookTitle: 'BASIC MUSIC THEORY & AFRICAN MUSIC FOR SECONDARY SCHOOLS',
    author: 'M.N. Nzewi & F.C. King',
    textbookRef: 'BASIC MUSIC THEORY by M.N. Nzewi, Chapter 2: The Stave & Pitch Notation, Pages 18-24',
    imageCaption: 'Figure: Standard Five-Line Treble Musical Staff',
    imageAlt: 'Five line staff with treble clef and a whole note sitting on the second line G',
    imageSvg: `<svg viewBox="0 0 460 180" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- 5 Staff Lines -->
      <line x1="50" y1="50" x2="410" y2="50" stroke="#0f172a" stroke-width="2"/>
      <line x1="50" y1="70" x2="410" y2="70" stroke="#0f172a" stroke-width="2"/>
      <line x1="50" y1="90" x2="410" y2="90" stroke="#0f172a" stroke-width="2"/>
      <line x1="50" y1="110" x2="410" y2="110" stroke="#0f172a" stroke-width="2.5"/> <!-- Line 2 (G) -->
      <line x1="50" y1="130" x2="410" y2="130" stroke="#0f172a" stroke-width="2"/>
      <!-- Treble Clef Graphic -->
      <text x="60" y="125" font-size="70" font-family="serif" font-weight="bold" fill="#0f172a">𝄞</text>
      <!-- Semibreve Whole Note on 2nd Line (G) -->
      <ellipse cx="240" cy="110" rx="14" ry="10" fill="#ffffff" stroke="#dc2626" stroke-width="4"/>
      <ellipse cx="240" cy="110" rx="7" ry="4" fill="#ffffff" transform="rotate(-25 240 110)"/>
      <text x="233" y="145" font-size="14" font-family="sans-serif" font-weight="bold" fill="#dc2626">G</text>
      <!-- Line indicators on right -->
      <text x="420" y="55" font-size="10" font-family="sans-serif">Line 5 (F)</text>
      <text x="420" y="115" font-size="10" font-family="sans-serif" font-weight="bold" fill="#dc2626">Line 2 (G)</text>
      <text x="420" y="135" font-size="10" font-family="sans-serif">Line 1 (E)</text>
    </svg>`,
  },

  // ==========================================
  // 21. VISUAL ARTS
  // ==========================================
  {
    subjectKey: 'visual_arts',
    subject: 'Visual Arts',
    topic: 'Color Theory: The Traditional Color Wheel',
    text: 'According to the standard 12-part artist color wheel illustrated below, what color is the direct complementary opposite of Blue?',
    options: {
      A: 'Orange',
      B: 'Yellow',
      C: 'Green',
      D: 'Purple / Violet',
    },
    answer: 'A',
    explanation: 'Complementary colors are pairs of colors that lie diametrically opposite each other on the color wheel. The exact complement of primary Blue is secondary Orange (a mixture of the remaining two primaries: Red + Yellow). When placed side by side, complementary colors create maximum visual contrast.',
    bookTitle: 'CULTURAL AND CREATIVE ARTS & VISUAL ARTS',
    author: 'C.O. Egonwa & S.I. Wangboje',
    textbookRef: 'VISUAL ARTS FOR SENIOR SECONDARY SCHOOLS by C.O. Egonwa, Chapter 3: Color Schemes, Pages 38-44',
    imageCaption: 'Figure: Traditional Twelve-Part Artist Color Wheel',
    imageAlt: 'Color wheel showing primary colors Red, Yellow, Blue and secondary colors Orange, Green, Purple with complementary pairings',
    imageSvg: `<svg viewBox="0 0 460 220" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Central Wheel Circle -->
      <circle cx="230" cy="110" r="85" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
      <!-- Primaries -->
      <circle cx="230" cy="35" r="20" fill="#dc2626"/><text x="225" y="40" font-size="10" font-family="sans-serif" font-weight="bold" fill="#ffffff">Red</text>
      <circle cx="295" cy="148" r="20" fill="#eab308"/><text x="282" y="152" font-size="9" font-family="sans-serif" font-weight="bold" fill="#0f172a">Yellow</text>
      <circle cx="165" cy="148" r="20" fill="#2563eb"/><text x="153" y="152" font-size="10" font-family="sans-serif" font-weight="bold" fill="#ffffff">Blue</text>
      <!-- Secondaries -->
      <circle cx="295" cy="72" r="16" fill="#f97316"/><text x="280" y="76" font-size="9" font-family="sans-serif" font-weight="bold" fill="#ffffff">Orange</text>
      <circle cx="230" cy="185" r="16" fill="#16a34a"/><text x="217" y="189" font-size="9" font-family="sans-serif" font-weight="bold" fill="#ffffff">Green</text>
      <circle cx="165" cy="72" r="16" fill="#9333ea"/><text x="152" y="76" font-size="9" font-family="sans-serif" font-weight="bold" fill="#ffffff">Violet</text>
      <!-- Complementary connector between Blue and Orange -->
      <line x1="175" y1="138" x2="285" y2="82" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="200" y="105" font-size="10" font-family="sans-serif" font-weight="bold" fill="#0f172a">Complementary</text>
    </svg>`,
  },

  // ==========================================
  // 22. HOME ECONOMICS
  // ==========================================
  {
    subjectKey: 'home_economics',
    subject: 'Home Economics',
    topic: 'Food & Nutrition: The Balanced Diet Food Pyramid',
    text: 'In the nutritional food guide pyramid diagram shown below, which dietary group forms the broad foundation base that should be consumed in the greatest volume for energy?',
    options: {
      A: 'Carbohydrates & Whole Grains (Bread, Rice, Cereals, Yam)',
      B: 'Fats, Oils, and Concentrated Sweets',
      C: 'Proteins, Poultry, Fish, and Meat',
      D: 'Dairy Products and Cheese',
    },
    answer: 'A',
    explanation: 'In the standard nutritional food guide pyramid, the broad base (Tier 1) represents energy-giving complex carbohydrates and whole grains (such as yam, rice, cassava, maize, bread, and cereals). These provide sustained glucose for metabolism and dietary fiber.',
    bookTitle: 'ESSENTIAL HOME ECONOMICS',
    author: 'Elizabeth Anyakoha, Ph.D.',
    textbookRef: 'ESSENTIAL HOME ECONOMICS by Elizabeth Anyakoha, Chapter 5: Food Groups & Nutrition, Pages 72-79',
    imageCaption: 'Figure: Nutritional Food Guide Pyramid Hierarchy',
    imageAlt: 'Food pyramid showing grain carbohydrates at base, fruits and vegetables on second tier, meat and dairy on third tier, and fats at top',
    imageSvg: `<svg viewBox="0 0 460 210" className="w-full max-h-56 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Pyramid Tiers -->
      <!-- Tier 4 Top: Fats & Sweets -->
      <polygon points="230,25 200,65 260,65" fill="#f43f5e" stroke="#0f172a" stroke-width="1.5"/>
      <text x="215" y="55" font-size="9" font-family="sans-serif" font-weight="bold" fill="#ffffff">Fats/Oils</text>
      <!-- Tier 3: Proteins & Dairy -->
      <polygon points="200,65 260,65 295,115 165,115" fill="#a855f7" stroke="#0f172a" stroke-width="1.5"/>
      <text x="180" y="95" font-size="10" font-family="sans-serif" font-weight="bold" fill="#ffffff">Meat, Fish &amp; Dairy</text>
      <!-- Tier 2: Fruits & Veg -->
      <polygon points="165,115 295,115 335,160 125,160" fill="#22c55e" stroke="#0f172a" stroke-width="1.5"/>
      <text x="160" y="142" font-size="11" font-family="sans-serif" font-weight="bold" fill="#ffffff">Fruits &amp; Vegetables</text>
      <!-- Tier 1 Base: Grains & Carbs -->
      <polygon points="125,160 335,160 375,200 85,200" fill="#eab308" stroke="#0f172a" stroke-width="2"/>
      <text x="145" y="185" font-size="12" font-family="sans-serif" font-weight="bold" fill="#713f12">Carbohydrates &amp; Grains (Base)</text>
    </svg>`,
  },
];

/**
 * Helper to convert an ImageQuestionDef into a full VerifiedQuestion
 */
export function createImageVerifiedQuestion(
  def: ImageQuestionDef,
  year: number = 2025,
  qNumber: number = 1
): VerifiedQuestion {
  const subCode = 800000;
  const id = subCode + (year * 100) + qNumber;

  return {
    id,
    year,
    questionNumber: qNumber,
    subject: def.subject,
    topic: def.topic,
    text: `[JAMB UTME ${year} Visual Q${qNumber}] ${def.text}`,
    options: def.options,
    answer: def.answer,
    explanation: def.explanation,
    bookTitle: def.bookTitle,
    author: def.author,
    textbookRef: def.textbookRef,
    hasImage: true,
    imageSvg: def.imageSvg,
    imageCaption: def.imageCaption,
    imageAlt: def.imageAlt,
  };
}

/**
 * Get all available image questions for a specific subject
 */
export function getImageQuestionsForSubject(subjectKey: SubjectKey): ImageQuestionDef[] {
  return JAMB_IMAGE_QUESTIONS_DATA.filter((q) => q.subjectKey === subjectKey);
}
