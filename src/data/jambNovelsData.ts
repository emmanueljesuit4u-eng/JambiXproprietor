/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NovelChapter {
  chapterNumber: number;
  title: string;
  summary: string;
  keyEvents: string[];
  vitalExamQuotes: { quote: string; speaker: string; context: string }[];
}

export interface NovelCharacter {
  name: string;
  role: string;
  description: string;
  keyActions: string[];
  examSignificance: string;
}

export interface NovelQuestion {
  id: number;
  novel: 'The Life Changer' | 'Sweet Sixteen' | 'The Lekki Headmaster';
  chapter: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface NovelDetails {
  id: string;
  title: string;
  author: string;
  jambUsage: string;
  overview: string;
  centralThemes: string[];
  setting: string;
  characters: NovelCharacter[];
  chapters: NovelChapter[];
}

export const JAMB_NOVELS: NovelDetails[] = [
  {
    id: 'the-life-changer',
    title: 'The Life Changer',
    author: 'Khadija Abubakar Jalli',
    jambUsage: 'Prescribed JAMB UTME Compulsory Novel (Recent & Previous Cycles)',
    overview:
      'The Life Changer explores the joys, challenges, peer pressures, and moral hazards confronting Nigerian youths transitioning from secondary school to university life. Through the candid storytelling of Ummi, the matriarch, her children learn about academic discipline, the dangers of deceit, and the importance of parental counsel.',
    centralThemes: [
      'University Freedom versus Self-Discipline',
      'The Perils of Examination Malpractice and Extortion',
      'Peer Pressure and Campus Vanity',
      'Honesty, Forgiveness, and Redemption',
      'Parental Counsel and Inter-generational Wisdom',
    ],
    setting: 'Lafayette Community, Ahmadu Bello University (ABU) Zaria, Kaduna State, Nigeria',
    characters: [
      {
        name: 'Ummi',
        role: 'Narrator, Mother & Moral Anchor',
        description:
          'Ummi is the warm, wise, and perceptive mother of Omar, Teemah, Jamila, and Bint. Having attended university herself, she uses engaging stories to prepare her children for the outside world.',
        keyActions: [
          'Narrates the cautionary campus tale of Salma and Lafayette history to her children.',
          'Celebrates Omar’s university admission into ABU Zaria while cautioning him on peer pressure.',
          'Recalls her own youthful university encounter with her husband and lecturer Dr. Samuel Johnson.',
        ],
        examSignificance:
          'JAMB frequently tests questions on Ummi’s parental advice, her reflections on university matriculation, and her role as the narrative bridge.',
      },
      {
        name: 'Omar',
        role: 'Eldest Son & JAMB Aspirant',
        description:
          'The 18-year-old firstborn son who scored an impressive 230 in his JAMB UTME and earned provisional admission into Ahmadu Bello University, Zaria to read Law.',
        keyActions: [
          'Shares the exciting news of his UTME score and university admission with his family.',
          'Listens attentively to his mother’s stories and learns that university life requires caution.',
        ],
        examSignificance:
          'JAMB tests Omar’s age (18), his UTME score (230), and his intended course of study (Law at ABU Zaria).',
      },
      {
        name: 'Salma',
        role: 'Protagonist of the Campus Narrative',
        description:
          'An attractive, sophisticated, and overly confident undergraduate from a wealthy background whose pride and disregard for rules led to her downfall.',
        keyActions: [
          'Disdains queueing up and treats university registration staff rudely.',
          'Rooms in Queen Amina Hall with Tomiwa, Ada, and Ngozi after declining off-campus offers.',
          'Gets involved with wealthy men (Habib and Labaran) in town and displays flashy campus living.',
          'Engages in examination malpractice (cheat notes) during her final year exams and is apprehended by an invigilator.',
          'Is swindled by Kabir when attempting to bribe members of the Examination Malpractice Committee.',
          'Gets expelled alongside her accomplice Kola, returns home in remorse, and seeks forgiveness.',
        ],
        examSignificance:
          'Crucial central figure in JAMB questions: questions test her room in Queen Amina Hall, her roommates, the invigilator who caught her, and the bribe amount.',
      },
      {
        name: 'Habib',
        role: 'Politician & Member of the State Assembly',
        description:
          'A wealthy, influential politician who pursues Salma in town and later attempts to use his political influence and money to rescue her from disciplinary expulsion.',
        keyActions: [
          'Gives Salma a ride in town with his driver and friend Labaran.',
          'Gives Salma 100,000 Naira to sort out her Examination Malpractice case.',
          'Encountered Kabir who falsely claimed to have connections on the university board.',
        ],
        examSignificance:
          'Tested on his political office (Honourable/Politician) and his association with Labaran and Salma.',
      },
      {
        name: 'Labaran',
        role: 'Habib’s Confidant & Driver',
        description:
          'Habib’s childhood friend and trusted driver who acts as intermediary in several of Habib’s affairs.',
        keyActions: [
          'Accompanies Habib when picking up Salma and Tomiwa.',
          'Introduces Kabir as a middleman who claims to know members of the disciplinary committee.',
        ],
        examSignificance:
          'JAMB tests his relationship to Habib (childhood friend turned driver).',
      },
      {
        name: 'Kabir',
        role: 'University Swindler / Fraudster',
        description:
          'A clever young man working in the university who falsely presents himself as an influential member of the disciplinary committee.',
        keyActions: [
          'Collects 100,000 Naira from Salma under the pretext of settling the Examination Malpractice Committee.',
          'Squanders the extorted money on gambling at a game house and is later robbed by Zaki.',
        ],
        examSignificance:
          'Tested on the amount he extorted (100,000 Naira) and his fate (gambling and being robbed by Zaki).',
      },
      {
        name: 'Tomiwa',
        role: 'Salma’s Roommate (Queen Amina Hall)',
        description:
          'A brilliant, clean, and sociable Yoruba girl from Ibadan who loves cooking delicious meals for the roommates.',
        keyActions: [
          'Maintains peace and cooks popular delicacies (including spicy Jollof rice) for the room.',
          'Accompanies Salma on outings and advises her against unnecessary vanity.',
        ],
        examSignificance:
          'Tested on her state/ethnicity (Yoruba from Ibadan) and her culinary role in the room.',
      },
      {
        name: 'Ada & Ngozi',
        role: 'Salma’s Other Roommates',
        description:
          'Ada is from the Middle Belt (Benue) and Ngozi is a peaceful, religious Igbo girl from the South-East.',
        keyActions: [
          'Represent peaceful inter-tribal co-existence among the four roommates despite diverse religious and cultural backgrounds.',
        ],
        examSignificance:
          'JAMB tests the ethnic diversity of the roommates (Tomiwa, Ada, Ngozi, and Salma).',
      },
      {
        name: 'Bint',
        role: 'Ummi’s Youngest Child',
        description:
          'A witty, observant 5-year-old primary school pupil who outwits her French teacher, Mallam Salihu.',
        keyActions: [
          'Answers Mallam Salihu’s French question with unexpected wit.',
          'Demonstrates that young children learn rapidly from observation.',
        ],
        examSignificance:
          'Tested on her age (5 years) and her interaction with Mallam Salihu.',
      },
      {
        name: 'Hakimi',
        role: 'Village Head of Lafayette',
        description:
          'The respected traditional village head who maintains peace and arbitration in the Lafayette community.',
        keyActions: [
          'Handles communal disputes and represents the traditional moral fabric of Lafayette.',
        ],
        examSignificance:
          'Tested on his traditional title and peaceful administrative role.',
      },
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Bint’s Wit & Lafayette Family Morning',
        summary:
          'The novel opens in the living room of Ummi’s home in Lafayette. Bint narrates how she outsmarted her teacher, Mallam Salihu, during French class. Omar excitedly arrives with his UTME score of 230 and provisional admission into ABU Zaria to study Law. His sisters Teemah and Jamila tease him, while Ummi prepares to share important life lessons.',
        keyEvents: [
          'Bint recounts her classroom French victory.',
          'Omar announces his JAMB UTME score of 230 and admission to study Law at ABU Zaria.',
          'Ummi cautions Omar that university admission is a life changer requiring personal maturity.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Admission into the university is a life changer; it gives you wings, but you must know how to fly.',
            speaker: 'Ummi',
            context: 'Advising Omar upon learning of his university admission.',
          },
        ],
      },
      {
        chapterNumber: 2,
        title: 'Ummi’s University Days & The Lafayette Legend',
        summary:
          'Ummi reminisces about her youthful university days, her interaction with the community, and her fateful encounter with Dr. Samuel Johnson. She discusses Lafayette’s history, community values, and the traditional leadership of Hakimi.',
        keyEvents: [
          'Ummi reflects on her early years at university and strict adherence to parental modesty.',
          'The peaceful cultural setting of Lafayette and Hakimi’s leadership are detailed.',
          'Dr. Samuel Johnson’s clinical professionalism and kind demeanor are highlighted.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Culture is the fabric that holds community honor together.',
            speaker: 'Hakimi',
            context: 'Emphasizing the value of Lafayette’s shared cultural discipline.',
          },
        ],
      },
      {
        chapterNumber: 3,
        title: 'Quiet Living & The Tale of Talle',
        summary:
          'Ummi narrates the story of Talle, a quiet, introverted man in Lafayette renowned for his honesty, who unfortunately gets misled by deceptive companions into harbor criminal conspirators.',
        keyEvents: [
          'Talle, known as "the quiet one", lives a modest, solitary life.',
          'His sudden acquisition of luxury items arouses Hakimi and the villagers’ suspicion.',
          'The community discovers he was used by kidnappers to store ransoms, proving that bad company corrupts good manners.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Silence is not always a mark of innocence; solitude without wisdom attracts vultures.',
            speaker: 'Ummi',
            context: 'Explaining how Talle was deceived by criminals.',
          },
        ],
      },
      {
        chapterNumber: 4,
        title: 'Salma’s Campus Arrival & Queen Amina Hall',
        summary:
          'The narrative shifts to Salma, an attractive, high-spirited freshman arriving at the university campus. Disdaining the queues, she displays arrogance toward the registration officer. After declining off-campus accommodation, she moves into Queen Amina Hall with Tomiwa, Ada, and Ngozi.',
        keyEvents: [
          'Salma scorns registration procedures and ridicules compliant students.',
          'Moves into Queen Amina Hall Room with Tomiwa (Ibadan), Ada (Middle Belt), and Ngozi (South-East).',
          'Despite diverse ethnic origins, the four roommates form a cooperative bond.',
        ],
        vitalExamQuotes: [
          {
            quote: 'We may speak different tongues, but our pots simmer the same soup of human dignity.',
            speaker: 'Tomiwa',
            context: 'Promoting unity and cooking for her three university roommates.',
          },
        ],
      },
      {
        chapterNumber: 5,
        title: 'The Car Ride with Habib & Labaran',
        summary:
          'Salma and Tomiwa accept a car ride from two strangers, Honourable Habib and his driver Labaran. Salma falsely claims Tomiwa is the one Habib fancied, leading to comic mix-ups and opening doors to wealthy town influences.',
        keyEvents: [
          'Habib offers Salma and Tomiwa a ride in his luxury car.',
          'Salma exaggerates her family status to impress Habib.',
          'Habib gives them gifts, pulling the young women into high-society distractions.',
        ],
        vitalExamQuotes: [
          {
            quote: 'When vanity enters through the front door, caution escapes through the window.',
            speaker: 'Ummi',
            context: 'Warning about the allure of unearned gifts from older politicians.',
          },
        ],
      },
      {
        chapterNumber: 6,
        title: 'The Exam Cheat & The Disciplinary Trap',
        summary:
          'During her final year examinations, Salma fails to study adequately due to distractions. She smuggles unauthorized cheat sheets into the hall. The alert invigilator catches her red-handed and reports her to the Examination Malpractice Committee.',
        keyEvents: [
          'Salma smuggles cheat notes into the exam hall.',
          'An invigilator catches her and confiscates her script and unauthorized materials.',
          'Her accomplice Kola is also apprehended; Salma faces severe disciplinary hearing.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Examination malpractice is the grave of intellectual integrity.',
            speaker: 'Invigilator',
            context: 'Handing Salma over to the disciplinary committee.',
          },
        ],
      },
      {
        chapterNumber: 7,
        title: 'The Swindle: Kabir’s Deceit',
        summary:
          'Desperate to escape expulsion, Salma approaches Habib for help. Habib provides 100,000 Naira to compromise the committee. Salma is directed to Kabir, who claims to have board connections, but Kabir extorts the money and flees to a gambling den.',
        keyEvents: [
          'Habib gives Salma 100,000 Naira for bribery.',
          'Kabir swindles Salma, pocketing the money without speaking to any official.',
          'Kabir goes to gamble in a local game house and is attacked and robbed by Zaki.',
        ],
        vitalExamQuotes: [
          {
            quote: 'A bribe is an invitation to vultures; you lose your dignity and your coins.',
            speaker: 'Ummi',
            context: 'Recounting Kabir’s extortion of Salma.',
          },
        ],
      },
      {
        chapterNumber: 8,
        title: 'The Verdict & Expulsion',
        summary:
          'The University Examination Malpractice Committee investigates the case thoroughly. Unmoved by excuses, the panel officially expels Salma and Kola from the university. Salma is shattered, realizing all her years of university study have ended in disgrace.',
        keyEvents: [
          'The Disciplinary Panel finds Salma and Kola guilty of gross malpractice.',
          'Salma is formally expelled and her academic matriculation revoked.',
          'Salma packs her bags from Queen Amina Hall in tears.',
        ],
        vitalExamQuotes: [
          {
            quote: 'The law of consequences recognizes neither beauty nor tears.',
            speaker: 'Committee Chairman',
            context: 'Delivering the disciplinary verdict to Salma.',
          },
        ],
      },
      {
        chapterNumber: 9,
        title: 'Remorse, Redemption & Omar’s Vow',
        summary:
          'Salma returns home in profound remorse, begs for forgiveness, and dedicates herself to honest living. Hearing this full story, Omar is deeply sobered and vows to his mother Ummi that he will maintain utmost integrity throughout his Law studies at ABU Zaria.',
        keyEvents: [
          'Salma transforms from a proud campus socialite to a humble, remorseful woman.',
          'Ummi concludes her narrative with lessons on second chances and personal character.',
          'Omar pledges to study hard and avoid bad influences at university.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Mother, I promise you: my certificate will bear honor, not shame.',
            speaker: 'Omar',
            context: 'Omar’s final pledge to his mother Ummi.',
          },
        ],
      },
    ],
  },
  {
    id: 'sweet-sixteen',
    title: 'Sweet Sixteen',
    author: 'Bolaji Abdullahi',
    jambUsage: 'Prescribed JAMB UTME Compulsory Novel (Previous Cycle Standard)',
    overview:
      'Sweet Sixteen is a heartwarming coming-of-age dialogue between sixteen-year-old Aliya and her intellectually engaging father, Mr. Bello. On her sixteenth birthday, instead of the customary party or gadgets, her father presents her with a deeply personal, sixteen-page letter titled "Letter to My Daughter". Through insightful conversations, they examine identity, sexuality, the truth about beauty, stereotyping, and the dignity of labour.',
    centralThemes: [
      'Transition from Adolescence into Womanhood',
      'The Illusion of Superficial Beauty versus Inner Dignity',
      'Sexuality, Consent, and Responsible Relationships',
      'Prejudice, Religious & Ethnic Stereotyping',
      'The Value of Hard Work and Intellectual Curiosity',
    ],
    setting: 'A middle-class Nigerian home, driveways, coffee tables, and contemporary school environment.',
    characters: [
      {
        name: 'Aliya',
        role: 'Protagonist (The 16-Year-Old Daughter)',
        description:
          'An inquisitive, bright, observant, and thoughtful sixteen-year-old high school student who is navigating the emotional and physical complexities of young womanhood.',
        keyActions: [
          'Receives the sixteen-page "Letter to My Daughter" from her father on her 16th birthday.',
          'Engages in candid discussions with her father about boys, beauty, puberty, and future ambitions.',
          'Discloses the mysterious note signed "HAK" (Hugs and Kisses) from her schoolmate Akin.',
          'Reflects on the true meaning of beauty after observing cosmetic surgery and societal double standards.',
        ],
        examSignificance:
          'Central protagonist: JAMB tests her age (16), her nickname ("First Lady"), her father’s birthday gift, and her reactions to Akin’s note.',
      },
      {
        name: 'Mr. Bello',
        role: 'Aliya’s Father & Mentor',
        description:
          'A cultured, open-minded journalist, intellectual, and affectionate father who believes in guiding his daughter through patient reason and honest discussion rather than harsh authoritarianism.',
        keyActions: [
          'Writes the sixteen-page letter to Aliya addressing major adult themes.',
          'Takes Aliya on drives and walks to discuss human nature, gender roles, and dignity in labour.',
          'Debunks ethnic stereotypes and explains why blind prejudice destroys national unity.',
          'Explains the meaning of "HAK" (Hugs and Kisses) and guides Aliya on personal boundaries.',
        ],
        examSignificance:
          'Most quoted character: JAMB frequently tests his profession (Journalist/Writer), his views on beauty, and his philosophical advice to Aliya.',
      },
      {
        name: 'Mrs. Bello',
        role: 'Aliya’s Mother',
        description:
          'A supportive, caring, and practical mother who collaborates with her husband to nurture a wholesome family atmosphere.',
        keyActions: [
          'Encourages Aliya to listen to her father’s wisdom.',
          'Provides practical domestic advice on growing up and female etiquette.',
        ],
        examSignificance:
          'Tested on her role as the balanced domestic support alongside Mr. Bello.',
      },
      {
        name: 'Akin',
        role: 'Aliya’s Schoolmate / Admirer',
        description:
          'A teenage boy in Aliya’s secondary school who harbors an innocent crush on Aliya and slips a note into her bag.',
        keyActions: [
          'Writes a short note to Aliya containing the acronym "HAK".',
          'Causes Aliya initial confusion until her father decodes the acronym as "Hugs And Kisses".',
        ],
        examSignificance:
          'Prominent in JAMB questions: questions test what acronym Akin wrote ("HAK") and what it means ("Hugs and Kisses").',
      },
      {
        name: 'Bobo',
        role: 'Mr. Bello’s Nephew',
        description:
          'An energetic, confident teenage boy whose bold perspectives on school life and sports provide contrast to Aliya’s introspective nature.',
        keyActions: [
          'Engages with the family during visits and represents contemporary teenage banter.',
        ],
        examSignificance:
          'Tested on his family relationship (nephew to Mr. Bello).',
      },
      {
        name: 'Grace',
        role: 'Aliya’s Classmate',
        description:
          'A fellow high school girl who represents teenage peer discussions regarding fashion, boys, and modern teenage culture.',
        keyActions: [
          'Discusses school trends, gossip, and boyfriends with Aliya.',
        ],
        examSignificance:
          'Represents typical adolescent peer perspectives in high school.',
      },
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Letter',
        summary:
          'On her sixteenth birthday, Aliya wakes up expecting the typical lavish teenage gifts, but her father surprises her with a custom, sixteen-page letter titled "Letter to My Daughter". Though initially puzzled, she begins reading and finds it filled with profound paternal affection and life guidance.',
        keyEvents: [
          'Aliya turns sixteen years old.',
          'Her father gives her a sixteen-page handwritten/printed letter titled "Letter to My Daughter".',
          'Aliya’s father calls her his "First Lady" and introduces key questions of self-identity.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Growing up is not just about adding years; it is about widening your moral circumference.',
            speaker: 'Mr. Bello',
            context: 'Opening paragraphs of "Letter to My Daughter".',
          },
        ],
      },
      {
        chapterNumber: 2,
        title: 'The Drive',
        summary:
          'Mr. Bello takes Aliya on an evening drive through town. They discuss the awkward physical and emotional changes of puberty, bodily privacy, menstruation, and why open communication between parents and children prevents fatal mistakes.',
        keyEvents: [
          'Father and daughter share an intimate, respectful conversation about puberty.',
          'Mr. Bello clarifies that curiosity is natural, but knowledge must guide choices.',
          'They explore how society creates unnecessary shame around natural biological transitions.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Your body is your temple; never let anyone make you feel ashamed of how God constructed it.',
            speaker: 'Mr. Bello',
            context: 'Discussing puberty during the car drive with Aliya.',
          },
        ],
      },
      {
        chapterNumber: 3,
        title: 'Work',
        summary:
          'Aliya and her father discuss the dignity of labour. Mr. Bello emphasizes that every legitimate profession deserves respect and that entitlement is a disease among youth. He warns against looking down on blue-collar workers or seeking easy shortcuts to wealth.',
        keyEvents: [
          'Discussion on hard work, academic diligence, and the dignity of humble professions.',
          'Mr. Bello shares examples of men who built enduring legacies through perseverance.',
          'Aliya learns that true independence comes from self-reliance.',
        ],
        vitalExamQuotes: [
          {
            quote: 'There is no shame in honest labour; the only real disgrace is parasitic entitlement.',
            speaker: 'Mr. Bello',
            context: 'Instructing Aliya on the virtue of hard work.',
          },
        ],
      },
      {
        chapterNumber: 4,
        title: 'The Gandoki',
        summary:
          'The conversation turns to cultural stereotypes, religious bias, and regional prejudice in Nigeria. Mr. Bello recounts the legendary exploits of Gandoki from Northern folklore and explains how stereotypes are lazy generalizations that rob individuals of their unique humanity.',
        keyEvents: [
          'Exploration of tribal stereotypes (Yoruba, Hausa, Igbo) and how they undermine national cohesion.',
          'Mr. Bello challenges Aliya to judge people by character rather than ethnicity.',
          'Reference to the heroic folklore of Gandoki.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Stereotypes are intellectual shortcuts invented by lazy minds who fear understanding the other.',
            speaker: 'Mr. Bello',
            context: 'Warning Aliya against judging people by tribal origins.',
          },
        ],
      },
      {
        chapterNumber: 5,
        title: 'A Great Height',
        summary:
          'Mr. Bello and Aliya discuss ambition, courage, and overcoming the fear of failure. He explains that achieving greatness requires stepping out of one’s comfort zone and learning to handle setbacks with equanimity.',
        keyEvents: [
          'Metaphor of looking down from a high cliff and mastering psychological vertigo.',
          'Discussion on academic and career aspirations.',
          'Learning that failure is an educational stepping stone rather than a terminal verdict.',
        ],
        vitalExamQuotes: [
          {
            quote: 'To reach a great height, you must not only look upward; you must conquer the dread of falling.',
            speaker: 'Mr. Bello',
            context: 'Encouraging Aliya to pursue high intellectual ambitions.',
          },
        ],
      },
      {
        chapterNumber: 6,
        title: 'Beauty',
        summary:
          'This chapter tackles the contemporary obsession with physical appearance, cosmetics, and the distorting influence of social media. Aliya discloses her observations about cosmetic beauty, and her father explains that superficial beauty fades, while beauty of character, intellect, and empathy is immortal.',
        keyEvents: [
          'Critical analysis of fashion magazines, whitening creams, and cosmetic surgery.',
          'Mr. Bello explains the distinction between transient physical symmetry and enduring inner grace.',
          'Aliya develops healthier self-esteem and self-acceptance.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Physical beauty catches the eye, but beauty of soul captures the heart forever.',
            speaker: 'Mr. Bello',
            context: 'Explaining why character outlasts superficial cosmetics.',
          },
        ],
      },
      {
        chapterNumber: 7,
        title: 'Hunters',
        summary:
          'The final chapter explores teenage romance, peer pressure, and boys who act as predatory "hunters". Aliya confesses about the note she received from Akin with the acronym "HAK". Mr. Bello calmly explains that "HAK" stands for "Hugs And Kisses", giving her practical wisdom on boundaries, respect, and emotional maturity.',
        keyEvents: [
          'Aliya reveals Akin’s note with the acronym "HAK".',
          'Mr. Bello decodes "HAK" as "Hugs And Kisses" without anger, explaining teenage attraction.',
          'Father warns against emotional predators who seek to harvest innocence without responsibility.',
          'Aliya concludes her 16th birthday confident, enlightened, and equipped for womanhood.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Boys at this age are like amateur hunters; do not become a trophy in someone’s game of vanity.',
            speaker: 'Mr. Bello',
            context: 'Explaining the psychology of teenage romance and "HAK".',
          },
        ],
      },
    ],
  },
  {
    id: 'the-lekki-headmaster',
    title: 'The Lekki Headmaster',
    author: 'Kabir Alabi Garba',
    jambUsage: 'Official Prescribed JAMB UTME Novel (2025/2026 Examination Standard)',
    overview:
      'The Lekki Headmaster chronicles the poignant, inspirational struggle of Mr. Bepo Adewale (affectionately known as "Principo" or "The Lekki Headmaster"), the deeply committed headmaster and principal of Stardom Schools in Lekki, Lagos. Faced with the national "Japa" phenomenon—as his wife and children relocate to the United Kingdom and urge him to join them—Bepo must confront severe teacher shortages, commercialized education, demanding parents, and systemic decay. In a profound climax, after saying an emotional farewell and heading to the airport, Bepo chooses to turn back to his school and students, demonstrating that the salvation of Nigeria lies in dedicated educators who refuse to abandon their homeland.',
    centralThemes: [
      'The "Japa" Brain-Drain Migration Syndrome vs Patriotic Dedication',
      'Integrity in Educational Leadership and School Administration',
      'The Plight, Welfare, and Moral Resilience of Nigerian Teachers',
      'Parental Entitlement, Student Rivalries, and Academic Excellence',
      'Education as the Foundational Weapon for National Reconstruction',
      'Inter-generational Mentorship and Community Solidarity',
    ],
    setting: 'Stardom Schools, Lekki Peninsula, Lagos State, Nigeria; Beesway Group of Schools; Lagos transit hubs and residential districts',
    characters: [
      {
        name: 'Bepo Adewale ("Principo / The Lekki Headmaster")',
        role: 'Protagonist, Headmaster & Educational Moral Pillar',
        description:
          'The passionate, compassionate, and intellectually rigorous principal of Stardom Schools in Lekki. Loved by his students and known for his humanistic leadership, he is torn between joining his family in the UK and fulfilling his educational mission in Nigeria.',
        keyActions: [
          'Breaks down in tears at morning assembly in Chapter 1 ("Dusk") due to emotional exhaustion and internal conflict.',
          'Resists institutional corruption, grade inflation, and compromises at Stardom Schools.',
          'Mentors Jide, the troubled grandson of his landlady Mrs. Ogunwale.',
          'Undergoes an emotional send-forth where the school unveils the banner: "For He Gave Stardom His Very Best".',
          'Arrives at the threshold of the airport for departure to the UK, but turns back to continue his life mission at Stardom Schools.',
        ],
        examSignificance:
          'Central protagonist: JAMB heavily tests his nicknames ("Principo", "The Lekki Headmaster"), his emotional assembly in Chapter 1, his former school (Beesway), and his decisive airport turnaround.',
      },
      {
        name: 'Mrs. Ibidun Gloss',
        role: 'Managing Director & Proprietress of Stardom Schools',
        description:
          'The visionary, supportive, and pragmatic leader of Stardom Schools who values Bepo’s uncompromising principles while wrestling with the economic realities of running a private school in Lekki.',
        keyActions: [
          'Appoints and backs Bepo as principal to overhaul academic and moral standards.',
          'Balances demanding fee-paying parents with educational integrity.',
          'Grieves Bepo’s impending departure and organizes his grand send-forth.',
        ],
        examSignificance:
          'Tested on her leadership role (Managing Director) and her supportive relationship with Mr. Bepo.',
      },
      {
        name: 'Jide',
        role: 'Protégé & Mrs. Ogunwale’s Grandson',
        description:
          'A vulnerable, drifting young boy living in Bepo’s neighborhood who finds direction, academic focus, and moral purpose through Bepo’s patient mentorship.',
        keyActions: [
          'Receives close academic tutoring, moral guidance, and life counseling from Bepo.',
          'Transforms from a disillusioned adolescent into a motivated, ambitious young scholar.',
        ],
        examSignificance:
          'Symbolizes the transformative power of Bepo’s mentorship and grassroots youth empowerment.',
      },
      {
        name: 'Banky',
        role: 'Competitive & Outspoken Student',
        description:
          'A remarkably brilliant, articulate, and fiercely competitive pupil at Stardom Schools whose intellectual rivalry with Tosh creates classroom drama.',
        keyActions: [
          'Leads classroom debates and academic competitions.',
          'Engages in intellectual and status battles with Tosh (Ogba Junior).',
        ],
        examSignificance:
          'Tested on classroom dynamics and student rivalry at Stardom Schools.',
      },
      {
        name: 'Tosh (Ogba Junior)',
        role: 'Banky’s Rival & Son of Chief Didi Ogba',
        description:
          'A privileged, somewhat entitled student at Stardom Schools whose influential father attempts to shield him from normal school sanctions.',
        keyActions: [
          'Competes intensely with Banky for top classroom honours.',
          'Learns humility and the value of uncompromised merit under Bepo’s firm administration.',
        ],
        examSignificance:
          'Represents elite parental privilege encountering unbending school discipline.',
      },
      {
        name: 'Chief Didi Ogba',
        role: 'Tosh’s Father & Wealthy Community Figure',
        description:
          'A wealthy, imposing former political detainee whose assertive personality and expectations clash with school regulations.',
        keyActions: [
          'Attempts to use wealth and influence to demand special treatment for his son Tosh.',
          'Ultimately comes to respect Bepo’s integrity and dedication.',
        ],
        examSignificance:
          'Tested on his background (former detainee) and his parental interventions at Stardom Schools.',
      },
      {
        name: 'Mr. Amos',
        role: 'Accountant at Stardom Schools',
        description:
          'The meticulous financial officer who navigates fee collections, delayed tuitions, and staff payroll under tight economic constraints.',
        keyActions: [
          'Assists Bepo in managing institutional accounts and budgeting.',
        ],
        examSignificance:
          'Tested on school administration and financial realities in private Nigerian education.',
      },
      {
        name: 'Mrs. Ignatius',
        role: 'Parent & Emblem of the "Japa" Surge',
        description:
          'A parent associated with Stardom Schools whose conversations mirror the prevailing societal obsession with escaping Nigeria for foreign pastures.',
        keyActions: [
          'Discusses relocation strategies, foreign currency remittances, and the desperation to migrate.',
        ],
        examSignificance:
          'Illustrates the social background of the UK migration fever.',
      },
      {
        name: 'Mrs. Ogunwale',
        role: 'Bepo’s Landlady in Lagos',
        description:
          'A maternal, kind-hearted Yoruba landlady whose warmth and communal generosity provide Bepo with a stable domestic refuge.',
        keyActions: [
          'Entrusts her grandson Jide to Bepo’s care and moral guidance.',
          'Offers Bepo emotional support during his times of solitude.',
        ],
        examSignificance:
          'Represents grassroots community solidarity and maternal care in urban Lagos.',
      },
      {
        name: 'Mr. Egi Meko',
        role: 'Director at Beesway Group of Schools (Flashback)',
        description:
          'Bepo’s former employer who prioritized commercial profit and dismissed Bepo’s correction of grammatical blunders on the school billboard ("Beesway Group of School").',
        keyActions: [
          'Clashed with Bepo over academic standards, leading to Bepo’s resignation from Beesway.',
        ],
        examSignificance:
          'JAMB tests the specific grammatical error on the billboard and Bepo’s principled stand.',
      },
      {
        name: 'Mrs. Apeh & Mr. Ike',
        role: 'Dedicated Classroom Teachers',
        description:
          'Passionate educators at Stardom Schools who endure economic hardships while maintaining commitment to their students.',
        keyActions: [
          'Participate in the novelty football match during Bepo’s farewell ceremony.',
          'Represent the unheralded sacrifices of the teaching profession in Nigeria.',
        ],
        examSignificance:
          'Highlight the plight and dignity of Nigerian classroom teachers.',
      },
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Dusk: The Assembly Tears',
        summary:
          'The novel opens on a somber note during a routine morning assembly at Stardom Schools in Lekki. Mr. Bepo Adewale, usually vibrant, charismatic, and humorous, mounts the podium to address the student body but is overwhelmed by emotion and breaks down in tears. The unexpected sight of their respected "Principo" weeping stuns staff and students, signaling intense psychological conflict beneath his composed exterior.',
        keyEvents: [
          'Morning assembly gathers at Stardom Schools, Lekki.',
          'Mr. Bepo Adewale unexpectedly bursts into tears before the assembly.',
          'The Vice Principal and teachers rush to comfort him while pupils watch in bewildered silence.',
          'The mystery behind Bepo’s distress establishes the central conflict of the narrative.',
        ],
        vitalExamQuotes: [
          {
            quote: 'A tear from a schoolmaster is not weakness; it is the overflow of a heart carrying the weight of a nation’s future.',
            speaker: 'Narrator',
            context: 'Describing Bepo’s emotional breakdown on assembly ground.',
          },
        ],
      },
      {
        chapterNumber: 2,
        title: 'The Stardom Challenge',
        summary:
          'The inner workings of Stardom Schools are laid bare. Managing Director Mrs. Ibidun Gloss strives to keep the school afloat amidst rising operational costs, teacher turnover, and high expectations from Lekki’s elite parents. Bepo works tirelessly to instill discipline, elevate academic rigor, and motivate underpaid teachers.',
        keyEvents: [
          'Exploration of Stardom Schools’ mission and infrastructure challenges.',
          'Mrs. Ibidun Gloss discusses administrative hurdles with Bepo.',
          'Bepo inspects classrooms and enforces teaching ethics among the staff.',
        ],
        vitalExamQuotes: [
          {
            quote: 'Quality education cannot be bought in a supermarket; it is forged by the character of those who stand in the classroom.',
            speaker: 'Bepo Adewale',
            context: 'Addressing staff members on academic integrity.',
          },
        ],
      },
      {
        chapterNumber: 3,
        title: 'Migration Tales & The UK Pull',
        summary:
          'Bepo reflects on the persistent pressure from his wife and children who have settled in the United Kingdom. He compares the economic realities of abroad—hourly and weekly wage structures versus Nigeria’s delayed monthly salaries—while hearing firsthand accounts of the psychological toll of relocation on immigrant families.',
        keyEvents: [
          'Bepo receives transatlantic calls from his wife demanding his relocation.',
          'Detailed reflection on the financial and cultural realities of the "Japa" phenomenon.',
          'Bepo weighs the promise of foreign comfort against his patriotic obligations.',
        ],
        vitalExamQuotes: [
          {
            quote: 'To leave one’s motherland is easy; to leave one’s purpose is a tragedy no foreign passport can heal.',
            speaker: 'Bepo Adewale',
            context: 'Pondering his wife’s demands to migrate to the UK.',
          },
        ],
      },
      {
        chapterNumber: 4,
        title: 'Classroom Dynamics: Banky and Tosh',
        summary:
          'The academic battlefield at Stardom Schools is spotlighted through the fierce rivalry between Banky, an outspoken intellectual powerhouse, and Tosh (Ogba Junior), the privileged son of Chief Didi Ogba. Their classroom debates reveal wider societal tensions between meritocracy and privilege.',
        keyEvents: [
          'Fierce debate and test rivalry between Banky and Tosh.',
          'Bepo intervenes to ensure fair assessment and teach mutual respect.',
          'Classroom teachers observe the socio-economic polarization among students.',
        ],
        vitalExamQuotes: [
          {
            quote: 'In this classroom, your mind is your only currency; your father’s bank balance earns you no bonus points.',
            speaker: 'Bepo Adewale',
            context: 'Cautioning Tosh against arrogance toward Banky.',
          },
        ],
      },
      {
        chapterNumber: 5,
        title: 'Parental Pressures & High Stakes',
        summary:
          'Parents descend on Stardom Schools with conflicting demands. Chief Didi Ogba, a powerful former political detainee, demands special consideration for his son, while Mrs. Ignatius voices anxieties about international school curricula. Bepo diplomatically upholds school regulations without bowing to intimidation.',
        keyEvents: [
          'Chief Didi Ogba’s visit to Stardom Schools.',
          'Bepo respectfully defends school policies against parental bullying.',
          'Mrs. Ibidun Gloss and Bepo maintain administrative cohesion under pressure.',
        ],
        vitalExamQuotes: [
          {
            quote: 'When school gates open to intimidation, education walks out the back door.',
            speaker: 'Bepo Adewale',
            context: 'Refusing Chief Didi Ogba’s unreasonable demands.',
          },
        ],
      },
      {
        chapterNumber: 6,
        title: 'The Integrity Test',
        summary:
          'The examination period arrives, testing the ethical boundaries of both students and staff. Attempts to compromise question papers and inflate grades are uncovered. Bepo handles the infractions decisively, demonstrating that academic integrity is non-negotiable.',
        keyEvents: [
          'Examination season commences under tight surveillance.',
          'Uncovering of subtle malpractice schemes.',
          'Bepo enforces zero-tolerance sanctions, earning respect across the school.',
        ],
        vitalExamQuotes: [
          {
            quote: 'A forged grade is an intellectual counterfeit; it destroys the soul of the child who bears it.',
            speaker: 'Bepo Adewale',
            context: 'Rebuffing grade alteration proposals.',
          },
        ],
      },
      {
        chapterNumber: 7,
        title: 'Beesway Memories: The Billboard Error',
        summary:
          'Through a vivid flashback, Bepo recalls his tenure at Beesway Group of Schools under Director Mr. Egi Meko. Bepo had persistently objected to a glaring grammatical error on the prominent school billboard reading "Beesway Group of School" (singular instead of plural). Mr. Egi Meko dismissed the error as trivial, prompting Bepo’s principled resignation.',
        keyEvents: [
          'Flashback to Bepo’s earlier teaching days at Beesway Group of Schools.',
          'The grammatical dispute over "Beesway Group of School" vs "Schools".',
          'Mr. Egi Meko’s commercial indifference contrasts sharply with Bepo’s pedagogical precision.',
          'Bepo’s resignation demonstrates his lifelong refusal to tolerate mediocrity.',
        ],
        vitalExamQuotes: [
          {
            quote: 'How can we teach children grammar inside the gates when the billboard outside commits public linguistic treason?',
            speaker: 'Bepo Adewale',
            context: 'Confronting Mr. Egi Meko over the school signboard error.',
          },
        ],
      },
      {
        chapterNumber: 8,
        title: 'The Teachers’ Plight & Daily Struggles',
        summary:
          'This chapter documents the harsh economic realities confronting classroom teachers in urban Lagos. Mrs. Apeh, Mr. Ike, and Mr. Audu navigate transport hikes, delayed salaries, and rising inflation, yet continue to pour their energy into shaping young minds.',
        keyEvents: [
          'Staffroom discussions on inflation, transport fares, and salary delays.',
          'Mr. Amos balances the school ledger to disburse teacher allowances.',
          'Bepo advocates passionately for staff welfare with Mrs. Ibidun Gloss.',
        ],
        vitalExamQuotes: [
          {
            quote: 'The teacher who lights another’s candle must not be left to freeze in the dark.',
            speaker: 'Bepo Adewale',
            context: 'Advocating for prompt staff compensation and dignity.',
          },
        ],
      },
      {
        chapterNumber: 9,
        title: 'The UK Visa & Family Ultimatum',
        summary:
          'Bepo receives his long-awaited UK entry visa. His wife calls with an ultimatum: pack his bags immediately or face marital breakdown. The reality of his impending departure strikes Bepo with overwhelming gravity, precipitating his decision to tender his resignation.',
        keyEvents: [
          'Arrival of Bepo’s UK travel visa and flight itinerary.',
          'Emotional confrontation with his wife over the phone.',
          'Bepo reluctantly submits his formal resignation letter to Mrs. Ibidun Gloss.',
        ],
        vitalExamQuotes: [
          {
            quote: 'A passport in hand is a heavy burden when the heart remains anchored to the soil.',
            speaker: 'Bepo Adewale',
            context: 'Holding his UK visa in deep contemplation.',
          },
        ],
      },
      {
        chapterNumber: 10,
        title: 'Mentorship & Jide’s Breakthrough',
        summary:
          'Before his departure, Bepo devotes his remaining evenings to mentoring Jide, the grandson of his landlady Mrs. Ogunwale. Jide, once despondent and directionless, experiences a profound intellectual awakening under Bepo’s tutelage, illustrating the irreplaceable impact of a dedicated mentor.',
        keyEvents: [
          'Intensive evening study sessions between Bepo and Jide.',
          'Jide achieves top marks in his school examinations, bringing joy to Mrs. Ogunwale.',
          'Bepo realizes how deeply his presence is needed in the community.',
        ],
        vitalExamQuotes: [
          {
            quote: 'You do not change the world by conquering continents; you change it by igniting one young mind at your doorstep.',
            speaker: 'Bepo Adewale',
            context: 'Congratulating Jide on his academic turnaround.',
          },
        ],
      },
      {
        chapterNumber: 11,
        title: 'The Farewell: "He Gave Stardom His Very Best"',
        summary:
          'Stardom Schools organizes a grand, deeply emotional farewell ceremony for Mr. Bepo. A commemorative banner reading "For He Gave Stardom His Very Best" adorns the hall. The festivities include testimonials from parents, emotional speeches by students, and a spirited novelty football match between staff and pupils.',
        keyEvents: [
          'The school assembly hall is decorated for Bepo’s official send-forth.',
          'Unveiling of the historic banner: "For He Gave Stardom His Very Best".',
          'Pupils, including Banky and Tosh, present touching farewell gifts.',
          'A novelty football match is played, cementing Bepo’s beloved legacy.',
        ],
        vitalExamQuotes: [
          {
            quote: 'We celebrate a headmaster who did not merely manage a school, but fathered our aspirations.',
            speaker: 'Mrs. Ibidun Gloss',
            context: 'Delivering the farewell commendation speech.',
          },
        ],
      },
      {
        chapterNumber: 12,
        title: 'The Airport Turnaround & Renewal',
        summary:
          'With luggage packed and travel documents in hand, Bepo rides toward the international airport. En route, as memories of his pupils, Jide’s transformed eyes, and his unfinished mission flood his consciousness, Bepo realizes he cannot abandon Nigeria’s children. In a dramatic climax, he orders the driver to turn the vehicle around and returns to Stardom Schools to rededicate his life to education.',
        keyEvents: [
          'Bepo journeys toward Murtala Muhammed International Airport for his UK flight.',
          'Deep introspection on his true calling, patriotism, and the destiny of Nigerian education.',
          'The dramatic decision: Bepo instructs the vehicle to make a U-turn.',
          'Bepo returns to Stardom Schools, greeted with astonishment and jubilation, rededicating his life to nation-building.',
        ],
        vitalExamQuotes: [
          {
            quote: 'My children need a father, but these thousands of Nigerian souls need a lighthouse. I am turning back.',
            speaker: 'Bepo Adewale',
            context: 'Ordering the vehicle turnaround on the way to the airport.',
          },
        ],
      },
    ],
  },
];

/**
 * Authentic JAMB-style multiple-choice questions for the prescribed UTME novels
 */
export const NOVEL_EXAM_QUESTIONS: NovelQuestion[] = [
  // ================= THE LIFE CHANGER =================
  {
    id: 9001,
    novel: 'The Life Changer',
    chapter: 1,
    question: 'In "The Life Changer", what was Omar’s score in his JAMB UTME examination?',
    options: {
      A: '210',
      B: '230',
      C: '250',
      D: '280',
    },
    answer: 'B',
    explanation: 'In Chapter 1, Omar excitedly announces to his family that he scored 230 in his JAMB UTME, which earned him admission to read Law at Ahmadu Bello University, Zaria.',
  },
  {
    id: 9002,
    novel: 'The Life Changer',
    chapter: 1,
    question: 'How old was Omar when he secured provisional admission into Ahmadu Bello University to read Law?',
    options: {
      A: '16 years old',
      B: '17 years old',
      C: '18 years old',
      D: '20 years old',
    },
    answer: 'C',
    explanation: 'Omar was 18 years old when he secured admission into the university to read Law.',
  },
  {
    id: 9003,
    novel: 'The Life Changer',
    chapter: 1,
    question: 'Who was Bint’s French teacher whom she playfully outsmarted in class?',
    options: {
      A: 'Dr. Samuel Johnson',
      B: 'Mallam Salihu',
      C: 'Hakimi',
      D: 'Kabir',
    },
    answer: 'B',
    explanation: 'In Chapter 1, five-year-old Bint narrates how she answered Mallam Salihu’s French query with quick wit.',
  },
  {
    id: 9004,
    novel: 'The Life Changer',
    chapter: 4,
    question: 'Which female hall of residence did Salma reside in on campus?',
    options: {
      A: 'Queen Amina Hall',
      B: 'Mary Slessor Hall',
      C: 'Moremi Hall',
      D: 'Ribadu Hall',
    },
    answer: 'A',
    explanation: 'Salma lived in Queen Amina Hall alongside her three roommates: Tomiwa, Ada, and Ngozi.',
  },
  {
    id: 9005,
    novel: 'The Life Changer',
    chapter: 4,
    question: 'Which of Salma’s roommates in Queen Amina Hall was from Ibadan and renowned for cooking delicious meals?',
    options: {
      A: 'Ngozi',
      B: 'Ada',
      C: 'Tomiwa',
      D: 'Bint',
    },
    answer: 'C',
    explanation: 'Tomiwa was a brilliant Yoruba girl from Ibadan who frequently prepared appetizing meals for the roommates.',
  },
  {
    id: 9006,
    novel: 'The Life Changer',
    chapter: 5,
    question: 'What official political title was held by Habib in town?',
    options: {
      A: 'Local Government Chairman',
      B: 'State Commissioner for Education',
      C: 'Honourable Member of the House of Assembly',
      D: 'Permanent Secretary',
    },
    answer: 'C',
    explanation: 'Habib was an influential politician and Honourable Member of the State House of Assembly.',
  },
  {
    id: 9007,
    novel: 'The Life Changer',
    chapter: 5,
    question: 'What was the relationship between Honourable Habib and his driver, Labaran?',
    options: {
      A: 'They were biological brothers',
      B: 'They were childhood friends',
      C: 'They were former university classmates',
      D: 'They were in-laws',
    },
    answer: 'B',
    explanation: 'Labaran was Habib’s trusted childhood friend who later became his personal driver and confidant.',
  },
  {
    id: 9008,
    novel: 'The Life Changer',
    chapter: 7,
    question: 'How much money did Habib give to Salma to compromise the Examination Malpractice Committee?',
    options: {
      A: '50,000 Naira',
      B: '100,000 Naira',
      C: '250,000 Naira',
      D: '500,000 Naira',
    },
    answer: 'B',
    explanation: 'Habib handed 100,000 Naira to Salma, which Kabir subsequently extorted under the guise of bribing panel members.',
  },
  {
    id: 9009,
    novel: 'The Life Changer',
    chapter: 7,
    question: 'What happened to Kabir after he extorted money from Salma under the false pretense of assisting her?',
    options: {
      A: 'He successfully bribed the committee and secured her pardon',
      B: 'He lost the money gambling in a game house and was robbed by Zaki',
      C: 'He surrendered the money to the university dean',
      D: 'He fled abroad to continue his studies',
    },
    answer: 'B',
    explanation: 'Kabir spent the extorted funds gambling in a local gaming house and was subsequently assaulted and dispossessed of his remaining money by Zaki.',
  },
  {
    id: 9010,
    novel: 'The Life Changer',
    chapter: 8,
    question: 'What final disciplinary sanction was imposed on Salma by the University Examination Malpractice Committee?',
    options: {
      A: 'Suspension for two academic semesters',
      B: 'A formal reprimand and repeating the course',
      C: 'Expulsion from the university',
      D: 'Community service in the university library',
    },
    answer: 'C',
    explanation: 'Salma and her examination accomplice Kola were found guilty of gross malpractice and formally expelled from the university.',
  },

  // ================= SWEET SIXTEEN =================
  {
    id: 9011,
    novel: 'Sweet Sixteen',
    chapter: 1,
    question: 'In "Sweet Sixteen", what unique gift did Mr. Bello present to Aliya on her sixteenth birthday?',
    options: {
      A: 'A brand-new smartphone and laptop',
      B: 'A 16-page letter titled "Letter to My Daughter"',
      C: 'A diamond necklace and wrist watch',
      D: 'An international holiday ticket',
    },
    answer: 'B',
    explanation: 'On her sixteenth birthday, Mr. Bello gave Aliya a thoughtful 16-page letter titled "Letter to My Daughter" instead of typical electronic gifts.',
  },
  {
    id: 9012,
    novel: 'Sweet Sixteen',
    chapter: 1,
    question: 'What affectionate pet name or nickname did Mr. Bello frequently use to address Aliya?',
    options: {
      A: 'Princess',
      B: 'First Lady',
      C: 'Queen Bee',
      D: 'Gold Medalist',
    },
    answer: 'B',
    explanation: 'Mr. Bello affectionately referred to Aliya as his "First Lady".',
  },
  {
    id: 9013,
    novel: 'Sweet Sixteen',
    chapter: 7,
    question: 'What did the acronym "HAK" written in the note given to Aliya by Akin stand for?',
    options: {
      A: 'Hold And Kiss',
      B: 'Hope And Kindness',
      C: 'Hugs And Kisses',
      D: 'Honour And Knowledge',
    },
    answer: 'C',
    explanation: 'When Aliya showed her father the note from Akin, Mr. Bello explained that "HAK" was teenage slang for "Hugs And Kisses".',
  },
  {
    id: 9014,
    novel: 'Sweet Sixteen',
    chapter: 4,
    question: 'Which northern folklore hero was referenced by Mr. Bello to illustrate bravery and address cultural stereotypes?',
    options: {
      A: 'Bayajidda',
      B: 'Gandoki',
      C: 'Queen Amina',
      D: 'Dan Fodio',
    },
    answer: 'B',
    explanation: 'In Chapter 4 ("The Gandoki"), Mr. Bello recounted the legendary tale of Gandoki to discuss courage and dismantle tribal prejudice.',
  },
  {
    id: 9015,
    novel: 'Sweet Sixteen',
    chapter: 2,
    question: 'What profession is practiced by Aliya’s father, Mr. Bello?',
    options: {
      A: 'Medical Doctor',
      B: 'Journalist and Writer',
      C: 'Civil Engineer',
      D: 'Commercial Pilot',
    },
    answer: 'B',
    explanation: 'Mr. Bello is an accomplished journalist, writer, and intellectual commentator.',
  },
  {
    id: 9016,
    novel: 'Sweet Sixteen',
    chapter: 6,
    question: 'In Chapter 6 ("Beauty"), what does Mr. Bello describe as the most enduring form of human beauty?',
    options: {
      A: 'Facial symmetry and light complexion',
      B: 'Expensive designer apparel and accessories',
      C: 'Inner character, intellect, and kindness',
      D: 'Youthful vigor and photographic popularity',
    },
    answer: 'C',
    explanation: 'Mr. Bello teaches Aliya that physical attractiveness inevitably fades, while inner beauty consisting of character, intellect, and empathy endures forever.',
  },
  {
    id: 9017,
    novel: 'Sweet Sixteen',
    chapter: 3,
    question: 'According to Mr. Bello in the chapter "Work", what is the real disgrace when it comes to human labor?',
    options: {
      A: 'Performing menial or blue-collar jobs',
      B: 'Parasitic entitlement and refusing to work',
      C: 'Earning modest wages in public service',
      D: 'Changing career paths later in life',
    },
    answer: 'B',
    explanation: 'Mr. Bello asserts that every honest job has dignity, and the only genuine disgrace is lazy, parasitic entitlement.',
  },
  {
    id: 9018,
    novel: 'Sweet Sixteen',
    chapter: 7,
    question: 'Why did Mr. Bello describe teenage boys as "amateur hunters" in the final chapter?',
    options: {
      A: 'Because they go hunting wildlife in rural areas',
      B: 'Because they relentlessly pursue girls as vanity trophies without emotional maturity',
      C: 'Because they participate in archery sports in school',
      D: 'Because they are always looking for scholarships',
    },
    answer: 'B',
    explanation: 'Mr. Bello cautions Aliya that teenage boys often act like amateur hunters seeking romantic conquests as trophies to brag to their peers.',
  },

  // ================= THE LEKKI HEADMASTER =================
  {
    id: 9019,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'In "The Lekki Headmaster", which school did Mr. Bepo Adewale serve as headmaster and principal?',
    options: {
      A: 'Beesway Group of Schools',
      B: 'Stardom Schools, Lekki',
      C: 'Queen Amina Academy',
      D: 'Lafayette Model College',
    },
    answer: 'B',
    explanation: 'Mr. Bepo Adewale was the dedicated and revered principal of Stardom Schools situated in the Lekki corridor of Lagos State.',
  },
  {
    id: 9020,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'What affectionate nickname was widely used by staff and pupils to address Mr. Bepo Adewale?',
    options: {
      A: 'The Dean',
      B: 'Principo',
      C: 'Commander',
      D: 'The Mentor',
    },
    answer: 'B',
    explanation: 'Mr. Bepo Adewale was affectionately and reverently nicknamed "Principo" by both his pupils and colleagues.',
  },
  {
    id: 9021,
    novel: 'The Lekki Headmaster',
    chapter: 1,
    question: 'What startling incident occurred during the morning assembly in Chapter 1 ("Dusk")?',
    options: {
      A: 'A fire outbreak damaged the school laboratory',
      B: 'Mr. Bepo broke down in tears before the student assembly',
      C: 'Chief Didi Ogba stormed the podium with security personnel',
      D: 'The school announced immediate indefinite closure',
    },
    answer: 'B',
    explanation: 'In Chapter 1 ("Dusk"), the usually humorous and composed principal, Mr. Bepo, overwhelmed by emotional distress and migration pressures, broke down in tears on the assembly podium.',
  },
  {
    id: 9022,
    novel: 'The Lekki Headmaster',
    chapter: 3,
    question: 'To which foreign country had Mr. Bepo’s wife and children relocated under the "Japa" migration wave?',
    options: {
      A: 'Canada',
      B: 'United States of America',
      C: 'United Kingdom',
      D: 'Australia',
    },
    answer: 'C',
    explanation: 'Mr. Bepo’s wife and children had already settled in the United Kingdom, exerting continuous pressure on him to join them abroad.',
  },
  {
    id: 9023,
    novel: 'The Lekki Headmaster',
    chapter: 7,
    question: 'What grammatical blunder on the billboard of Beesway Group of Schools provoked Mr. Bepo’s principled resignation?',
    options: {
      A: 'The phrase "Admission is going on"',
      B: 'Writing "Beesway Group of School" with singular "School"',
      C: 'Misspelling the word "Knowledge"',
      D: 'Omitting the school registration number',
    },
    answer: 'B',
    explanation: 'In Chapter 7, Bepo recalls resigning from Beesway Group of Schools because Director Mr. Egi Meko refused to correct the public billboard which erroneously read "Beesway Group of School" instead of "Schools".',
  },
  {
    id: 9024,
    novel: 'The Lekki Headmaster',
    chapter: 2,
    question: 'Who served as the Managing Director and Proprietress of Stardom Schools?',
    options: {
      A: 'Mrs. Ibidun Gloss',
      B: 'Mrs. Ogunwale',
      C: 'Mrs. Apeh',
      D: 'Mrs. Ignatius',
    },
    answer: 'A',
    explanation: 'Mrs. Ibidun Gloss was the visionary Managing Director of Stardom Schools who appointed and supported Mr. Bepo.',
  },
  {
    id: 9025,
    novel: 'The Lekki Headmaster',
    chapter: 10,
    question: 'Who was Jide, whom Mr. Bepo devoted his spare evenings to mentoring in Lagos?',
    options: {
      A: 'The senior prefect of Stardom Schools',
      B: 'The son of Chief Didi Ogba',
      C: 'The grandson of his landlady, Mrs. Ogunwale',
      D: 'A junior teacher in the science department',
    },
    answer: 'C',
    explanation: 'Jide was the grandson of Bepo’s benevolent landlady, Mrs. Ogunwale; Bepo tutored and guided him into academic excellence and self-worth.',
  },
  {
    id: 9026,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'What inspiring motto was inscribed on the commemorative farewell banner unveiled during Mr. Bepo’s send-forth?',
    options: {
      A: '"Farewell to a Great Leader"',
      B: '"For He Gave Stardom His Very Best"',
      C: '"Journey Mercies to the UK"',
      D: '"The Legend of Lekki Education"',
    },
    answer: 'B',
    explanation: 'During the official farewell assembly, the hall was decorated with a prominent commemorative banner reading: "For He Gave Stardom His Very Best".',
  },
  {
    id: 9027,
    novel: 'The Lekki Headmaster',
    chapter: 11,
    question: 'What recreational event was organized between staff and students as part of Mr. Bepo’s emotional send-forth?',
    options: {
      A: 'A swimming competition at the Lekki beach',
      B: 'A novelty football match',
      C: 'An inter-school chess tournament',
      D: 'A cultural dance and drama night',
    },
    answer: 'B',
    explanation: 'A spirited novelty football match between staff members and students was held as part of the farewell festivities honoring Bepo.',
  },
  {
    id: 9028,
    novel: 'The Lekki Headmaster',
    chapter: 12,
    question: 'What climactic decision did Mr. Bepo make on his journey toward the international airport in Chapter 12?',
    options: {
      A: 'He boarded the flight but returned two weeks later',
      B: 'He instructed the driver to turn back and returned to Stardom Schools',
      C: 'He misplaced his passport at the terminal gate',
      D: 'He postponed his flight until the end of the academic session',
    },
    answer: 'B',
    explanation: 'In the dramatic climax of Chapter 12, realizing that his ultimate purpose and life calling lay in educating Nigerian children, Bepo ordered his vehicle to make a U-turn and returned to Stardom Schools.',
  },
];
