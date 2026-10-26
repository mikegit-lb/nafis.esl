window.unitContent = window.unitContent || [];
window.unitContent[0] = Object.assign(window.unitContent[0] || {}, {
  lesson: {
    focus: "Be and can: introducing people, asking questions and talking about what people can do",
    summary: "Use be (am, is, are) to say who people are, where they are from and what their nationality is. Use can + base verb for three ideas: ability (what someone knows how to do), possibility (something that may happen) and opportunity (something a place or situation lets you do). Can be also shows possibility. Ask wh- questions with be and can, give short answers, and use can for requests, permission and rules.",
    examples: [
      "Mehmet is Turkish and he is from Ankara.",
      "Where are you from? I am from Warsaw.",
      "Are Alina and Odett friends? Yes, they are.",
      "Ingrid can speak Norwegian, but she can't speak Turkish yet.",
      "What languages can you speak?",
      "Can I open the window, please?",
      "You can't take photos in this museum.",
      "Summer can be very hot in Budapest."
    ],
    patterns: [
      {
        label: "Be · affirmative and negative",
        formula: "I am (not) · he / she / it is (not) · you / we / they are (not)",
        note: "Mehmet is Turkish. Alina and Odett are not Bulgarian. Short forms: I'm, isn't, aren't."
      },
      {
        label: "Be · questions and short answers",
        formula: "Am I / Is he / Are you ...? → Yes, I am. / No, he isn't.",
        note: "Put am, is or are before the subject. Wh- questions: Where are you from? What is your nationality?"
      },
      {
        label: "Can · ability",
        formula: "Subject + can / can't + base verb",
        note: "Min-su can speak Korean. Ingrid can't speak Turkish yet. Never add -s, to or -ing after can."
      },
      {
        label: "Can · possibility",
        formula: "Subject + can + base verb / can be + adjective",
        note: "Something may happen sometimes: Winter can be very cold in the north."
      },
      {
        label: "Can · opportunity",
        formula: "Tourists / You / Visitors + can + base verb",
        note: "A place gives you the chance to do something: Tourists can visit the Maiden Tower."
      },
      {
        label: "Can · questions and short answers",
        formula: "Can + subject + base verb? → Yes, I can. / No, I can't.",
        note: "Can you speak Polish? Yes, I can. Do not use do or are with can."
      },
      {
        label: "Wh- questions with be",
        formula: "Question word + am / is / are + subject (+ from)?",
        note: "Where are you from? What is your nationality? Who is your teacher? What is the capital of Norway? The verb be comes straight after the question word, so do not say Where you are from."
      },
      {
        label: "Wh- questions with can",
        formula: "Question word + can + subject + base verb?",
        note: "What languages can you speak? Where can tourists go? Why can't Ingrid speak Turkish? There is no do and no -s: say What can he do, not What does he can do."
      },
      {
        label: "Short answers",
        formula: "Yes / No + subject pronoun + am / is / are / can (+ not)",
        note: "Is Ivan Bulgarian? Yes, he is. Are they from Norway? No, they aren't. Can she swim? Yes, she can. Can he sing? No, he can't. Repeat the verb from the question, and do not shorten a Yes answer: say Yes, I am, not Yes, I'm."
      },
      {
        label: "Subject pronouns and possessive adjectives",
        formula: "I / you / he / she / it / we / they → my / your / his / her / its / our / their",
        note: "Alina is from Poland. She speaks Polish and her home city is Warsaw. We love our country. They like their school. A possessive adjective comes before a noun: my country, your language, his friends."
      },
      {
        label: "A / an and singular or plural be",
        formula: "I / he / she / it + am / is + a / an + noun · we / they (and you for more than one person) + are + plural noun",
        note: "I am a student. She is an engineer. Ivan is a Bulgarian student. They are students (no a before a plural noun). Use an before a vowel sound: an Italian student."
      },
      {
        label: "Can · requests and permission",
        formula: "Can I / Can we / Can you + base verb (, please)?",
        note: "Can I open the window? asks for permission. Can you help me, please? asks someone to do something. Yes, you can. / Sure, I can. / Sorry, you can't."
      },
      {
        label: "Can't · rules and things that are not allowed",
        formula: "You / Visitors / Students + can't + base verb",
        note: "You can't take photos here. Visitors can't touch the paintings. Students can't use the computers without a teacher."
      },
      {
        label: "Can be · possibility with adjectives and nouns",
        formula: "Subject + can be + adjective / noun",
        note: "The Old Town can be very busy in July. A trip can be tiring. Museums can be closed on Mondays. Can be says what is sometimes true, not only what is true today."
      },
      {
        label: "I'm from · I come from · I live in",
        formula: "I am from / I come from + place of origin · I live in + place where you are now",
        note: "I am from Ankara means the same as I come from Ankara. I live in Izmir tells us where you stay now. Ceren is from Konya, but she lives in Izmir."
      }
    ],
    context: [
      { speaker: "A", text: "Hi! My name is Mehmet. Nice to meet you." },
      { speaker: "B", text: "Nice to meet you, Mehmet. I am Alina." },
      { speaker: "A", text: "What is your nationality, Alina?" },
      { speaker: "B", text: "I am Polish. I am from Warsaw. And you?" },
      { speaker: "A", text: "I am Turkish. I am from Ankara. What languages can you speak?" },
      { speaker: "B", text: "I can speak Polish, English and a little Turkish. Can you speak Polish?" },
      { speaker: "A", text: "No, I can't, but I can say Cześć! What can tourists do in Warsaw?" },
      { speaker: "B", text: "They can walk around the Old Town and visit many museums." },
      { speaker: "A", text: "Are the museums open every day?" },
      { speaker: "B", text: "No, they aren't. A museum can be closed on Mondays, so check first." },
      { speaker: "A", text: "Excuse me, are you the new student in Grade 9?" },
      { speaker: "B", text: "Yes, I am. My name is Ingrid. I come from Norway." },
      { speaker: "A", text: "Welcome, Ingrid! I am Ms Arslan, your English teacher. Where are you from in Norway?" },
      { speaker: "B", text: "I am from Oslo, but I live in Ankara now. My parents work here." },
      { speaker: "A", text: "What languages can you speak?" },
      { speaker: "B", text: "I can speak Norwegian and English. I can't speak Turkish yet." },
      { speaker: "A", text: "Don't worry, your classmates can help you. Can you open the window, please? It is hot." },
      { speaker: "B", text: "Of course. Can I ask a question too? Is the library open after school?" },
      { speaker: "A", text: "Yes, it is. But students can't use the computers without a teacher." },
      { speaker: "B", text: "OK. Thank you, Ms Arslan." }
    ],
    mistakes: [
      { wrong: "He can speaks English.", right: "He can speak English.", why: "Can is followed by the base verb. Never add -s to the verb after can." },
      { wrong: "I can to swim.", right: "I can swim.", why: "Do not put to between can and the verb." },
      { wrong: "Are you can swim?", right: "Can you swim?", why: "Can is already the helping verb, so do not add are. Start the question with Can." },
      { wrong: "He don't can swim.", right: "He can't swim.", why: "Make can negative with can't (or cannot). Do not add do or does." },
      { wrong: "She from Poland.", right: "She is from Poland.", why: "English sentences need a verb. Use is after she." },
      { wrong: "They is from Hungary.", right: "They are from Hungary.", why: "Use are with they, we and you, and with plural subjects." },
      { wrong: "Where you are from?", right: "Where are you from?", why: "In a question, be goes before the subject: Where are you from?" },
      { wrong: "My name are Ali.", right: "My name is Ali.", why: "My name is one thing, so use the singular verb is." },
      { wrong: "We are student.", right: "We are students.", why: "After we and they, the noun is plural and has no a." },
      { wrong: "Yes, I'm.", right: "Yes, I am.", why: "Do not shorten the verb in a Yes short answer. Say Yes, I am." },
      { wrong: "I am Turkey.", right: "I am Turkish.", why: "Use the nationality word Turkish to say what you are. Turkey or Türkiye is the country." }
    ]
  },
  grammar: {
    activities: [
      {
        type: "quiz", title: "Quiz A · Be: countries and nationalities", source: "Unit 1 · Language Awareness · p.31 Remember to be",
        instruction: "Choose the correct form of be or the correct nationality word.",
        items: [
          { prompt: "Mehmet ___ from Türkiye, and he speaks Turkish.", options: ["am", "is", "are", "be"], answer: "is", why: "Mehmet is a singular he-subject, so use is." },
          { prompt: "Alina and Odett ___ from different countries.", options: ["is", "am", "are", "be"], answer: "are", why: "Alina and Odett is a plural subject, so use are." },
          { prompt: "I ___ Polish, but my friend Ivan is Bulgarian.", options: ["are", "am", "is", "be"], answer: "am", why: "Use am only with the subject I." },
          { prompt: "___ Ingrid from Norway?", options: ["Are", "Am", "Do", "Is"], answer: "Is", why: "A be question puts is before the singular subject Ingrid." },
          { prompt: "Min-su lives in Seoul, the capital of South Korea. In class he says: “I am ___.”", options: ["Korea", "Koreans", "Korean", "a Korea"], answer: "Korean", why: "After am we use the nationality word Korean, not the country name." },
          { prompt: "We ___ not from Hungary; we come from Bulgaria.", options: ["is", "am", "do", "are"], answer: "are", why: "Use are with we, and add not to make the sentence negative." },
          { prompt: "Are you Norwegian? Choose the correct short answer.", options: ["No, I amn't.", "No, I not.", "No, I am not.", "No, I isn't."], answer: "No, I am not.", why: "A short negative answer to an Are you question is No, I am not (or No, I'm not)." },
          { prompt: "What ___ the capital of Bulgaria?", options: ["are", "is", "am", "do"], answer: "is", why: "The capital is singular, so the question uses is." },
          { prompt: "Hello, everyone! I ___ Odett, and this is my friend Ivan.", options: ["am", "is", "are", "be"], answer: "am", why: "Use am with the subject I when you say your name." },
          { prompt: "My brother and I ___ students at the same school.", options: ["is", "am", "be", "are"], answer: "are", why: "My brother and I means two people, so the subject is plural and takes are." }
        ]
      },
      {
        type: "quiz", title: "Quiz B · Can: forms and meanings", source: "Unit 1 · Language Awareness · p.31 Let's Discover",
        instruction: "Choose the correct answer.",
        items: [
          { prompt: "Tourists ___ visit the Walled City of Baku.", options: ["cans", "can to", "are can", "can"], answer: "can", why: "Can does not change and is followed directly by the base verb." },
          { prompt: "Ingrid can ___ Norwegian and English.", options: ["speaks", "to speak", "speak", "speaking"], answer: "speak", why: "After can, use the base form of the verb." },
          { prompt: "___ Ivan speak Bulgarian and Turkish?", options: ["Does can", "Can", "Is can", "Can to"], answer: "Can", why: "In a question, can comes before the subject and no other helping verb is needed." },
          { prompt: "Which sentence is correct?", options: ["Odett cans play the piano.", "Odett can plays the piano.", "Odett can play the piano.", "Odett can to play the piano."], answer: "Odett can play the piano.", why: "Can has no -s and is followed by the base verb play." },
          { prompt: "In “You can watch the sunset from the Maiden Tower,” can shows ___.", options: ["ability", "possibility", "obligation", "opportunity"], answer: "opportunity", why: "The place gives visitors the chance to watch the sunset, which is opportunity." },
          { prompt: "In “The museum shop can be crowded in summer,” can shows ___.", options: ["possibility", "ability", "opportunity", "obligation"], answer: "possibility", why: "The shop is sometimes crowded, so can describes what may happen." },
          { prompt: "In “Mehmet can solve difficult maths problems in his head,” can shows ___.", options: ["opportunity", "possibility", "obligation", "ability"], answer: "ability", why: "Mehmet knows how to do this, which is ability." },
          { prompt: "Ingrid ___ speak Turkish yet, so she uses simple gestures.", options: ["doesn't can", "can't", "isn't can", "can't to"], answer: "can't", why: "To make can negative, use can't + base verb." },
          { prompt: "Which question is correct?", options: ["Can Ali plays the guitar?", "Does Ali can play the guitar?", "Can Ali play the guitar?", "Is Ali can play the guitar?"], answer: "Can Ali play the guitar?", why: "A can question starts with Can, then the subject, then the base verb play." },
          { prompt: "During exchange day, Ece says: “My classmates ___ from Ankara, and two of them ___ explain the school map in English.”", options: ["are / can", "is / can", "are / cans", "am / can"], answer: "are / can", why: "Use are with the plural subject my classmates, and can + base verb explain." }
        ]
      },
      {
        type: "quiz", title: "Quiz C · Complete a story about Norway", source: "Unit 1 · Language Awareness · p.31 exercise i",
        instruction: "Complete each sentence with the correct form of to be, or can / can't + the verb in brackets.",
        items: [
          { prompt: "My name is Odett. I ___ (to be) from Hungary, but I study in Oslo.", answer: "am", why: "Use am with the subject I." },
          { prompt: "In summer, you ___ (visit) beautiful fjords by boat.", answer: "can visit", why: "Can + base verb shows an opportunity that the place gives you." },
          { prompt: "You ___ (eat) fresh fish in small restaurants near the harbour.", answer: "can eat", why: "Can + base verb shows what visitors have the chance to do." },
          { prompt: "But you ___ (not take) photos inside some old churches, so look for signs.", answer: "can't take", why: "Can't + base verb shows something is not allowed here." },
          { prompt: "Oslo ___ (to be) the capital of Norway, so many tourists visit it.", answer: "is", why: "Oslo is a singular subject, so use is." },
          { prompt: "My classmates ___ (to be) friendly, so I am never alone.", answer: "are", why: "My classmates is a plural subject, so use are." },
          { prompt: "___ your exchange partner from the same city as you?", answer: "Is", why: "Use is with the singular subject your exchange partner." },
          { prompt: "Ingrid is from Norway, so she ___ (to be) Norwegian.", answer: "is", why: "Ingrid is a singular she-subject, so use is." },
          { prompt: "Children under six ___ (not enter) the museum cinema without an adult, so ask at the desk.", answer: "can't enter", why: "Can't + base verb states a rule about what is not allowed." },
          { prompt: "We ___ (to be) tired after the long hike, but we feel happy.", answer: "are", why: "Use are with we." }
        ]
      },
      {
        type: "quiz", title: "Quiz D · Change the sentence", source: "Unit 1 · Language Awareness · p.30–31",
        instruction: "Rewrite each sentence as the question says. Write the full sentence.",
        items: [
          { prompt: "Make a question: “Ingrid can speak three languages.”", answer: "Can Ingrid speak three languages?", why: "In a can question, can goes before the subject." },
          { prompt: "Make the sentence negative with can't: “Tourists can enter the old tower at night.”", answer: "Tourists can't enter the old tower at night.", why: "Put n't after can and keep the base verb enter." },
          { prompt: "Make a question with Are: “Your new classmates are from Poland.”", answer: "Are your new classmates from Poland?", why: "In a be question, are goes before the subject." },
          { prompt: "Make the sentence negative: “Mehmet is Bulgarian.”", answer: "Mehmet isn't Bulgarian.", accepted: ["Mehmet's not Bulgarian."], why: "Add not after is to make the sentence negative." },
          { prompt: "Ask whether the visitors can use the school map: “The visitors can use the school map.”", answer: "Can the visitors use the school map?", why: "For a can question, put can before the subject." },
          { prompt: "Make a question with Is: “Her cousin is a Hungarian student.”", answer: "Is her cousin a Hungarian student?", why: "In a be question, is goes before the singular subject her cousin." },
          { prompt: "Make the sentence negative with aren't: “Alina and Odett are in the same class.”", answer: "Alina and Odett aren't in the same class.", why: "Add n't to are to make the plural sentence negative." },
          { prompt: "Make a question with Can: “Visitors can take photos in the old town.”", answer: "Can visitors take photos in the old town?", why: "Put can before the subject visitors and keep the base verb take." },
          { prompt: "Make the sentence negative: “Ivan can sing in Turkish.”", answer: "Ivan can't sing in Turkish.", why: "To make can negative, use can't + base verb." },
          { prompt: "Make a yes / no question: “We are late for the school bus.”", answer: "Are we late for the school bus?", why: "In a be question, are goes before the subject we." }
        ]
      },
      {
        type: "quiz", title: "Quiz E · Find and fix the mistake", source: "Unit 1 · Language Awareness · p.30–31",
        instruction: "Each sentence has one grammar mistake. Write the correct sentence.",
        items: [
          { prompt: "Ivan can speaks Bulgarian and Turkish.", answer: "Ivan can speak Bulgarian and Turkish.", why: "After can, use the base verb speak, without -s." },
          { prompt: "Min-su can to visit the Palace of the Shirvanshahs.", answer: "Min-su can visit the Palace of the Shirvanshahs.", why: "Do not put to between can and the base verb." },
          { prompt: "Are you can speak Polish?", answer: "Can you speak Polish?", why: "Do not use are with can; start the question with Can." },
          { prompt: "My friends from Chile is very friendly.", answer: "My friends from Chile are very friendly.", why: "The subject my friends is plural, so use are." },
          { prompt: "Both of our student guides can speaks Turkish and English.", answer: "Both of our student guides can speak Turkish and English.", why: "After can, use the base verb speak." },
          { prompt: "Does Ingrid can speak Turkish?", answer: "Can Ingrid speak Turkish?", why: "Can is the helping verb in the question, so do not add does." },
          { prompt: "Tourists can visiting the old castle.", answer: "Tourists can visit the old castle.", why: "After can, use the base verb visit, not the -ing form." },
          { prompt: "Mehmet and I is good friends.", answer: "Mehmet and I are good friends.", why: "Mehmet and I is a plural subject, so use are." },
          { prompt: "Is Alina and Odett in the same class?", answer: "Are Alina and Odett in the same class?", why: "Alina and Odett is a plural subject, so the question starts with Are." },
          { prompt: "Visitors can't takes photos inside the museum.", answer: "Visitors can't take photos inside the museum.", why: "After can't, use the base verb take, without -s." }
        ]
      },
      {
        type: "quiz", title: "Quiz F · Wh- questions with be", source: "Unit 1 · Language Awareness · asking questions with be",
        instruction: "Choose the question word that fits the answer.",
        items: [
          { prompt: "___ is your nationality, Alina? — I am Polish.", options: ["Where", "What", "Who", "How old"], answer: "What", why: "We use What to ask about a nationality." },
          { prompt: "___ are you from, Odett? — I am from Budapest.", options: ["Who", "What", "When", "Where"], answer: "Where", why: "We use Where to ask about a place." },
          { prompt: "___ is your English teacher? — She is Ms Arslan.", options: ["Why", "Who", "What", "Where"], answer: "Who", why: "We use Who to ask which person someone is." },
          { prompt: "___ is the capital of Norway? — It is Oslo.", options: ["Whose", "Why", "How", "What"], answer: "What", why: "We use What to ask for the name of a thing, such as a capital city." },
          { prompt: "___ old are you, Min-su? — I am fifteen.", options: ["How", "What", "Where", "Who"], answer: "How", why: "How old asks about age, and the question word How comes first." },
          { prompt: "___ are your classmates? — They are Alina and Ivan.", options: ["Where", "What", "Who", "How"], answer: "Who", why: "The answer gives two people, so ask with Who." },
          { prompt: "___ is Seoul? — It is in South Korea.", options: ["Where", "Who", "Whose", "What"], answer: "Where", why: "The answer says the place, so ask with Where." },
          { prompt: "___ is your birthday? — It is in March.", options: ["Where", "Who", "When", "What"], answer: "When", why: "The answer gives a time, so ask with When." }
        ]
      },
      {
        type: "quiz", title: "Quiz G · Wh- questions with can", source: "Unit 1 · Language Awareness · asking questions with can",
        instruction: "Choose the question word that fits the answer.",
        items: [
          { prompt: "___ can tourists go in Oslo? — They can go to the Viking Ship Museum.", options: ["Who", "Where", "What", "Why"], answer: "Where", why: "The answer is a place, and go needs Where." },
          { prompt: "___ languages can you speak, Ivan? — I can speak Bulgarian and English.", options: ["Where", "Who", "What", "When"], answer: "What", why: "What languages asks which languages a person speaks." },
          { prompt: "___ can help me with my English homework? — Alina can help you.", options: ["What", "How", "Where", "Who"], answer: "Who", why: "The answer is a person, so ask with Who." },
          { prompt: "___ can I buy a ticket for the museum? — You can buy it at the desk by the door.", options: ["Where", "Why", "What", "Who"], answer: "Where", why: "The answer is a place, so ask with Where." },
          { prompt: "___ can you do in the evening in Warsaw? — You can walk along the river.", options: ["Where", "Who", "When", "What"], answer: "What", why: "The verb do needs What; the answer says an activity." },
          { prompt: "___ can't Ingrid speak Turkish? — She is new in Türkiye and is still learning.", options: ["When", "Why", "Who", "Where"], answer: "Why", why: "The answer gives a reason, so ask with Why." },
          { prompt: "___ can we see the Northern Lights in Norway? — You can see them in winter.", options: ["Why", "Who", "When", "What"], answer: "When", why: "The answer names a season, so ask with When." },
          { prompt: "___ can I get to the Old Town? — You can go by bus.", options: ["How", "Who", "What", "Why"], answer: "How", why: "The answer says the way to travel, so ask with How." }
        ]
      },
      {
        type: "quiz", title: "Quiz H · Short answers", source: "Unit 1 · Language Awareness · Yes / No short answers",
        instruction: "Choose the correct short answer. For the last two, write the answer.",
        items: [
          { prompt: "Is Ivan from Bulgaria? Choose the correct short answer.", options: ["Yes, he can.", "Yes, he is.", "Yes, I am.", "Yes, it is."], answer: "Yes, he is.", why: "Ivan is from Bulgaria, and a short answer repeats the verb be with the pronoun he." },
          { prompt: "Alina is Polish and Odett is Hungarian. Are they from Hungary? Choose the correct short answer.", options: ["No, they don't.", "No, we aren't.", "No, there aren't.", "No, they aren't."], answer: "No, they aren't.", why: "Only Odett is Hungarian, so the answer is no, and the verb is aren't with they." },
          { prompt: "Ingrid is from Norway. Can she speak Norwegian? Choose the correct short answer.", options: ["Yes, she does.", "Yes, she can.", "Yes, she is.", "Yes, can she."], answer: "Yes, she can.", why: "A short answer to a can question repeats can with the pronoun she." },
          { prompt: "The teacher asks you, a Grade 9 student: “Are you in Grade 9?” Choose the correct short answer.", options: ["Yes, I do.", "Yes, I can.", "Yes, I am.", "Yes, I'm."], answer: "Yes, I am.", why: "A short Yes answer to an Are you question is Yes, I am; do not shorten it to Yes, I'm." },
          { prompt: "A sign in the hall says: No food. Can visitors eat in the hall? Choose the correct short answer.", options: ["No, they aren't.", "No, they don't.", "No, they can't.", "No, they can not to."], answer: "No, they can't.", why: "The sign is a rule, so the answer is No, they can't." },
          { prompt: "Min-su is Korean. Is Min-su Norwegian? Choose the correct short answer.", options: ["No, he doesn't.", "No, he can't.", "No, it isn't.", "No, he isn't."], answer: "No, he isn't.", why: "Min-su is not Norwegian, and the pronoun for Min-su is he." },
          { prompt: "Is Baku the capital of Azerbaijan? Write the short answer.", answer: "Yes, it is.", why: "Baku is the capital, and the pronoun for a city is it." },
          { prompt: "Ingrid is new in Türkiye. Can she speak Turkish yet? Write the short answer.", answer: "No, she can't.", why: "Ingrid can't speak Turkish yet, so use No, she can't." }
        ]
      },
      {
        type: "quiz", title: "Quiz I · Subject pronouns and possessive adjectives", source: "Unit 1 · Language Awareness · pronouns and possessives",
        instruction: "Choose the correct word. For the last question, write the word.",
        items: [
          { prompt: "Norway is a country in Europe. ___ capital is Oslo.", options: ["It", "Its", "Her", "Their"], answer: "Its", why: "Its shows that the capital belongs to the country, and it comes before the noun." },
          { prompt: "Mehmet and Ivan are friends. ___ school is in Ankara.", options: ["Her", "They", "Our", "Their"], answer: "Their", why: "The school belongs to the two boys, so use their before a noun." },
          { prompt: "Alina is Polish. ___ is from Warsaw.", options: ["Her", "His", "She", "He"], answer: "She", why: "The sentence needs a subject for a girl, so use she." },
          { prompt: "I am Odett. ___ language is Hungarian.", options: ["Me", "My", "I", "Mine"], answer: "My", why: "My is the possessive adjective for I and goes before the noun language." },
          { prompt: "We are in Grade 9. ___ English teacher is Ms Arslan.", options: ["Our", "We", "Us", "Their"], answer: "Our", why: "Our belongs to we, and we are the speakers." },
          { prompt: "Min-su, is that ___ phone on the desk?", options: ["you", "yours", "your", "us"], answer: "your", why: "Your is the possessive adjective for you and comes before the noun phone." },
          { prompt: "Ivan is Bulgarian. ___ friends are in Sofia.", options: ["He", "Him", "Her", "His"], answer: "His", why: "His is the possessive adjective for a boy and comes before friends." },
          { prompt: "Ceren and Aylin are sisters. ___ parents live in Izmir. (Write the possessive word.)", answer: "Their", why: "The parents belong to two girls, so the possessive adjective is their." }
        ]
      },
      {
        type: "quiz", title: "Quiz J · A / an and singular or plural be", source: "Unit 1 · Language Awareness · a / an, is / are",
        instruction: "Choose the correct word or sentence.",
        items: [
          { prompt: "Ingrid is ___ Norwegian student.", options: ["an", "a", "some", "many"], answer: "a", why: "Norwegian starts with a consonant sound, so use a." },
          { prompt: "Giulia is ___ Italian student.", options: ["some", "a", "an", "many"], answer: "an", why: "Italian starts with a vowel sound, so use an." },
          { prompt: "My mother is ___ teacher.", options: ["a", "an", "some", "many"], answer: "a", why: "Teacher starts with a consonant sound, so use a." },
          { prompt: "They are ___.", options: ["a student", "student", "an students", "students"], answer: "students", why: "A plural subject needs a plural noun without a or an." },
          { prompt: "My cousins ___ Hungarian.", options: ["are", "is", "am", "be"], answer: "are", why: "My cousins is plural, so use are." },
          { prompt: "He is ___ engineer, and she is ___ doctor.", options: ["a / an", "a / a", "an / an", "an / a"], answer: "an / a", why: "Engineer starts with a vowel sound, so an; doctor starts with a consonant sound, so a." },
          { prompt: "Choose the correct sentence about a group of students.", options: ["We are student.", "We are students.", "We am students.", "We is a students."], answer: "We are students.", why: "We takes are, and a plural noun needs -s without a." },
          { prompt: "Choose the correct sentence about one student.", options: ["Ivan and Ingrid is a students.", "Ivan is student.", "Ivan is a student.", "Ivan are a student."], answer: "Ivan is a student.", why: "A singular subject takes is, and a singular noun needs a." }
        ]
      },
      {
        type: "quiz", title: "Quiz K · Can for requests, permission and rules", source: "Unit 1 · Language Awareness · asking and refusing with can",
        instruction: "Choose the correct answer or write the missing words.",
        items: [
          { prompt: "You want to open the window. Which request is correct?", options: ["Can I to open the window, please?", "Am I can open the window, please?", "Can I open the window, please?", "Do I can open the window, please?"], answer: "Can I open the window, please?", why: "Ask for permission with Can I + base verb." },
          { prompt: "A sign in the museum says: No photos. What does it mean?", options: ["You can take photos here.", "You can't take photos here.", "You can photos here.", "You can't taking photos here."], answer: "You can't take photos here.", why: "A no sign is a rule, so use can't + base verb." },
          { prompt: "You do not understand a word. Which polite question is correct?", options: ["Can you repeating that, please?", "Are you can repeat that, please?", "Can you repeat that, please?", "You can repeat that, please?"], answer: "Can you repeat that, please?", why: "Ask someone to do something with Can you + base verb." },
          { prompt: "Can I leave early today? — Yes, you can. The teacher gives you ___.", options: ["permission", "an obligation", "a rule", "an invitation"], answer: "permission", why: "Yes, you can means that you are allowed to leave, which is permission." },
          { prompt: "Your friend asks: Can you help me with this exercise? Choose the best answer.", options: ["Yes, I help.", "Sure, I can.", "Yes, I does.", "No, I don't."], answer: "Sure, I can.", why: "A short answer to a can request repeats can: Sure, I can." },
          { prompt: "You want to sit next to Alina. Complete the polite question: ___ I sit here, please?", answer: "Can", accepted: ["May", "Could"], why: "Ask for permission with Can I + base verb." },
          { prompt: "A sign at the zoo says do not feed the animals. Complete the rule with the negative form of can: Visitors ___ feed the animals.", answer: "can't", accepted: ["mustn't", "must not", "may not"], why: "A rule that says something is not allowed uses can't + base verb." },
          { prompt: "Ask politely with Can: you / help me with my homework", answer: "Can you help me with my homework?", accepted: ["Can you help me with my homework, please?", "Can you please help me with my homework?"], why: "A polite request is Can you + base verb." }
        ]
      },
      {
        type: "quiz", title: "Quiz L · Spot and fix the mistake", source: "Unit 1 · Language Awareness · common mistakes with be and can",
        instruction: "These mistakes are typical in English. Write each sentence correctly.",
        items: [
          { prompt: "She from Poland.", answer: "She is from Poland.", accepted: ["She's from Poland."], why: "Every sentence needs a verb, so use is after she." },
          { prompt: "Are you can swim?", answer: "Can you swim?", why: "Do not use are with can; start the question with Can." },
          { prompt: "I can to swim.", answer: "I can swim.", why: "Do not put to between can and the base verb." },
          { prompt: "They is from Hungary.", answer: "They are from Hungary.", accepted: ["They're from Hungary."], why: "Use are with they." },
          { prompt: "Where you are from?", answer: "Where are you from?", why: "In a question, be goes before the subject you." },
          { prompt: "He don't can swim.", answer: "He can't swim.", why: "Make can negative with can't; do not add don't." },
          { prompt: "My name are Ali.", answer: "My name is Ali.", accepted: ["My name's Ali."], why: "My name is a singular subject, so use is." },
          { prompt: "What your nationality is?", answer: "What is your nationality?", accepted: ["What's your nationality?", "What nationality are you?"], why: "In a question, be goes before the subject, right after the question word." }
        ]
      },
      {
        type: "quiz", title: "Quiz M · Read and answer: finish the mini-dialogue", source: "Unit 1 · Language Awareness · be and can in conversation",
        instruction: "Read each short conversation and choose the word or words that fit the gap. For the last two, write the missing word.",
        items: [
          { prompt: "A: Hi, I am Ingrid. B: Hi, Ingrid! ___ you from Sweden? A: No, I am not. I am from Norway.", options: ["Do", "Is", "Can", "Are"], answer: "Are", why: "A be question with you starts with Are." },
          { prompt: "A: Is Odett in your class? B: Yes, ___ is. She sits next to me.", options: ["he", "it", "she", "they"], answer: "she", why: "Odett is a girl, so the short answer uses she." },
          { prompt: "A: Can you speak Polish, Mehmet? B: No, I ___, but I can say Hello.", options: ["can't", "don't", "am not", "isn't"], answer: "can't", why: "A short negative answer to a can question is No, I can't." },
          { prompt: "A: What ___ do in Oslo? B: You can visit the Viking Ship Museum.", options: ["do tourists can", "are tourists", "can tourists", "tourists can"], answer: "can tourists", why: "In a wh- question with can, the order is question word, can, subject, base verb." },
          { prompt: "A: Are the museums open on Mondays? B: No, they ___. Please come on Tuesday.", options: ["don't", "can't", "isn't", "aren't"], answer: "aren't", why: "Museums is plural, so the short answer to an Are question is No, they aren't." },
          { prompt: "A: Who is your teacher? B: ___ name is Ms Arslan.", options: ["She", "Her", "He", "His"], answer: "Her", why: "Ms is a woman, and her is the possessive adjective before the noun name." },
          { prompt: "A: Can I use your dictionary, please? B: Yes, you ___.", answer: "can", accepted: ["may"], why: "A short Yes answer to a can question repeats can." },
          { prompt: "A: Are you and Ivan in the same class? B: Yes, ___ are.", answer: "we", why: "The speaker and Ivan are two people, so the short answer uses we." }
        ]
      },
      {
        type: "quiz", title: "Quiz N · Affirmative, negative, question", source: "Unit 1 · Language Awareness · changing sentences with be and can",
        instruction: "Change each sentence as the instruction says. Write the full sentence or question.",
        items: [
          { prompt: "Make it negative: “Odett is from Poland.”", answer: "Odett isn't from Poland.", accepted: ["Odett's not from Poland."], why: "Add not after is to make the sentence negative." },
          { prompt: "Make it a question: “Alina is a student in Warsaw.”", answer: "Is Alina a student in Warsaw?", why: "In a be question, is goes before the subject Alina." },
          { prompt: "Make it negative: “Ingrid can speak Turkish.”", answer: "Ingrid can't speak Turkish.", why: "To make can negative, use can't + base verb." },
          { prompt: "Make it a question: “Mehmet can speak German.”", answer: "Can Mehmet speak German?", why: "In a can question, can goes before the subject." },
          { prompt: "Make it negative: “Min-su and Ingrid are from the same country.”", answer: "Min-su and Ingrid aren't from the same country.", why: "Add n't to are to make the plural sentence negative." },
          { prompt: "Ask a Where question about the place: “Alina is from Warsaw.”", answer: "Where is Alina from?", accepted: ["Where's Alina from?"], why: "The question word comes first, then is, then the subject, and from stays at the end." },
          { prompt: "Ask a What question about the languages: “Ivan can speak Bulgarian and Turkish.”", answer: "What languages can Ivan speak?", accepted: ["Which languages can Ivan speak?", "What language can Ivan speak?", "Which language can Ivan speak?"], why: "The order is question word, can, subject, base verb." },
          { prompt: "Make it a yes / no question: “They are tourists from Norway.”", answer: "Are they tourists from Norway?", why: "In a be question, are goes before the subject they." }
        ]
      },
      {
        type: "reading", title: "Read and answer · A new student", passageTitle: "Ingrid, the new student",
        passage: "Ingrid is a new student in our class. She is from Oslo, the capital of Norway, and she is Norwegian. Her parents are teachers, and they are in Ankara for two years. Ingrid can speak Norwegian and English, but she can't speak Turkish yet. She can swim very well and she can play the guitar. Our school is near the park, so students can walk there in five minutes. Students can't use the school garden without a teacher.",
        questions: [
          { prompt: "Where is Ingrid from?", options: ["Oslo", "Ankara", "Warsaw", "Seoul"], answer: 0, why: "The text says she is from Oslo, the capital of Norway." },
          { prompt: "What is Ingrid's nationality?", options: ["Turkish", "English", "Norwegian", "Polish"], answer: 2, why: "The text says she is Norwegian." },
          { prompt: "Which language can't Ingrid speak yet?", options: ["Norwegian", "English", "Polish", "Turkish"], answer: 3, why: "The text says she can't speak Turkish yet." },
          { prompt: "What can Ingrid do?", options: ["She can speak Turkish and English very well.", "She can swim and play the guitar.", "She can drive a car to school.", "She can walk from Oslo to Ankara."], answer: 1, why: "The text says she can swim very well and play the guitar." },
          { prompt: "What is the rule about the school garden?", options: ["Students can use it at any time of the day.", "Only the parents of students can use it.", "Students need a teacher with them.", "Nobody can walk anywhere near the garden."], answer: 2, why: "The last sentence says students can't use the garden without a teacher." },
          { prompt: "In “She can swim very well,” can shows ___.", options: ["a rule", "ability", "possibility", "permission"], answer: 1, why: "Ingrid knows how to swim, which is ability." },
          { prompt: "In “Her parents are teachers,” who does Her refer to?", options: ["Ingrid", "The teacher", "Oslo", "The class"], answer: 0, why: "Her is the possessive adjective for Ingrid, the girl in the first sentence." }
        ]
      },
      { type: "build", title: "Build a can question", instruction: "Tap the words in the correct order to ask if your friend speaks Polish.", tokens: ["speak", "your", "Polish?", "Can", "friend"], answer: ["Can", "your", "friend", "speak", "Polish?"], why: "A can question starts with Can, then the subject your friend, then the base verb speak." },
      { type: "build", title: "Build a question about where students are from", instruction: "Tap the words in the correct order to ask where the students come from.", tokens: ["are", "Where", "from?", "the", "students"], answer: ["Where", "are", "the", "students", "from?"], why: "A wh- question puts the question word first, then are, then the subject." },
      { type: "build", title: "Build a question about languages", instruction: "Tap the words in the correct order to ask which languages your partner speaks.", tokens: ["can", "What", "you", "speak?", "languages"], answer: ["What", "languages", "can", "you", "speak?"], why: "A wh- question with can goes: question word, can, subject, base verb." },
      { type: "build", title: "Build a question about your teacher", instruction: "Tap the words in the correct order to ask who the English teacher is.", tokens: ["Who", "teacher?", "is", "your", "English"], answer: ["Who", "is", "your", "English", "teacher?"], why: "Put the question word Who first, then is, then the subject your English teacher." },
      { type: "build", title: "Build a question about tourists", instruction: "Tap the words in the correct order to ask what visitors can do in Ankara.", tokens: ["in", "Ankara?", "What", "can", "tourists", "do"], answer: ["What", "can", "tourists", "do", "in", "Ankara?"], why: "The order is What, can, the subject tourists, the base verb do, and then the place." },
      { type: "build", title: "Build a rule with can't", instruction: "Tap the words in the correct order to say that photos are not allowed in the museum.", tokens: ["take", "can't", "You", "photos", "here."], answer: ["You", "can't", "take", "photos", "here."], why: "A rule with can't goes: subject, can't, base verb, then the rest." },
      { type: "build", title: "Build a polite request", instruction: "Tap the words in the correct order to politely ask a classmate to help you.", tokens: ["help", "Can", "please?", "you", "me,"], answer: ["Can", "you", "help", "me,", "please?"], why: "A request starts with Can you, then the base verb, then the object, and please at the end." },
      { type: "build", title: "Build a negative sentence with be", instruction: "Tap the words in the correct order to say that Ingrid is not Turkish.", tokens: ["is", "not", "Ingrid", "Turkish."], answer: ["Ingrid", "is", "not", "Turkish."], why: "A negative be sentence goes: subject, is, not, then the nationality." },
      { type: "sequence", title: "Put the conversation in order", instruction: "Tap the lines in the correct order to make a conversation between two new classmates.", tokens: ["Yes, I am. My name is Alina.", "Great! Welcome to our class.", "Hi! My name is Mehmet. Are you the new student?", "No, I can't, but I can speak Polish and English.", "Nice to meet you, Alina. Can you speak Turkish?"], answer: ["Hi! My name is Mehmet. Are you the new student?", "Yes, I am. My name is Alina.", "Nice to meet you, Alina. Can you speak Turkish?", "No, I can't, but I can speak Polish and English.", "Great! Welcome to our class."], why: "The greeting and question come first, each answer follows its question, and the welcome closes the conversation." },
      {
        type: "match", title: "Which meaning of can?",
        pairs: [
          { left: "Odett can dance and sing at the same time.", answer: "Ability" },
          { left: "The ferry can be late when the sea is rough.", answer: "Possibility" },
          { left: "At the fair, you can try food from six countries.", answer: "Opportunity" },
          { left: "Alina can run ten kilometres without stopping.", answer: "Ability" },
          { left: "Hotels near the beach can be very expensive in August.", answer: "Possibility" },
          { left: "Visitors can climb the castle tower and enjoy a view of the whole city.", answer: "Opportunity" }
        ],
        choices: ["Ability", "Possibility", "Opportunity"],
        why: "Ability is what a person knows how to do, possibility is what may happen, and opportunity is what a place lets you do."
      },
      {
        type: "match", title: "Match each question to its short answer",
        pairs: [
          { left: "Are Mehmet and Alina from the same country?", answer: "No, they aren't." },
          { left: "Is Oslo the capital of Norway?", answer: "Yes, it is." },
          { left: "Can Ingrid speak Turkish well?", answer: "No, she can't." },
          { left: "Is Min-su Korean?", answer: "Yes, he is." },
          { left: "Can tourists visit the Maiden Tower?", answer: "Yes, they can." },
          { left: "Ingrid, are you from Oslo?", answer: "Yes, I am." }
        ],
        choices: ["Yes, it is.", "Yes, he is.", "Yes, they can.", "No, she can't.", "No, they aren't.", "Yes, I am.", "No, he isn't."],
        why: "A short answer repeats the verb of the question and uses the pronoun that fits the subject."
      }
    ]
  }
});
