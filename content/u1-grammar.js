window.unitContent = window.unitContent || [];
window.unitContent[0] = Object.assign(window.unitContent[0] || {}, {
  lesson: {
    summary: "Use be (am, is, are) to say who people are, where they are from and what their nationality is. Use can + base verb for three ideas: ability (what someone knows how to do), possibility (something that may happen) and opportunity (something a place or situation lets you do). Can be also shows possibility.",
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
      { speaker: "B", text: "No, they aren't. A museum can be closed on Mondays, so check first." }
    ]
  },
  grammar: {
    activities: [
      { type: "choice", title: "Choose the forms that fit", prompt: "During exchange day, Ece says: “My classmates ___ from Ankara, and two of them ___ explain the school map in English.”", options: ["are / can", "is / can", "are / cans", "am / can"], answer: "are / can", why: "Use are with the plural subject my classmates, and can + base verb explain." },
      { type: "complete", title: "Complete the real question", prompt: "___ your exchange partner from the same city as you?", answer: "Is", why: "Use is with the singular subject your exchange partner." },
      { type: "transform", title: "Turn the statement into a question", prompt: "Ask whether the visitors can use the school map: “The visitors can use the school map.”", answer: "Can the visitors use the school map?", why: "For a can question, put can before the subject." },
      { type: "fix", title: "Edit the message", prompt: "Both of our student guides can speaks Turkish and English.", answer: "Both of our student guides can speak Turkish and English.", why: "After can, use the base verb speak." },
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
          { prompt: "Are you Norwegian? Choose the correct short answer.", options: ["No, I amn't.", "No, I not.", "No, I am not.", "No, I isn't."], answer: "No, I am not.", why: "A short negative answer to an Are you question is No, I am not." },
          { prompt: "What ___ the capital of Bulgaria?", options: ["are", "is", "am", "do"], answer: "is", why: "The capital is singular, so the question uses is." }
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
          { prompt: "Ingrid ___ speak Turkish yet, so she uses simple gestures.", options: ["doesn't can", "can't", "isn't can", "can't to"], answer: "can't", why: "To make can negative, use can't + base verb." }
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
          { prompt: "My classmates ___ (to be) friendly, so I am never alone.", answer: "are", why: "My classmates is a plural subject, so use are." }
        ]
      },
      {
        type: "quiz", title: "Quiz D · Change the sentence", source: "Unit 1 · Language Awareness · p.30–31",
        instruction: "Rewrite each sentence as the question says. Write the full sentence.",
        items: [
          { prompt: "Make a question: “Ingrid can speak three languages.”", answer: "Can Ingrid speak three languages?", why: "In a can question, can goes before the subject." },
          { prompt: "Make the sentence negative with can't: “Tourists can enter the old tower at night.”", answer: "Tourists can't enter the old tower at night.", why: "Put n't after can and keep the base verb enter." },
          { prompt: "Make a question with Are: “Your new classmates are from Poland.”", answer: "Are your new classmates from Poland?", why: "In a be question, are goes before the subject." },
          { prompt: "Make the sentence negative: “Mehmet is Bulgarian.”", answer: "Mehmet isn't Bulgarian.", accepted: ["Mehmet's not Bulgarian."], why: "Add not after is to make the sentence negative." }
        ]
      },
      {
        type: "quiz", title: "Quiz E · Find and fix the mistake", source: "Unit 1 · Language Awareness · p.30–31",
        instruction: "Each sentence has one grammar mistake. Write the correct sentence.",
        items: [
          { prompt: "Ivan can speaks Bulgarian and Turkish.", answer: "Ivan can speak Bulgarian and Turkish.", why: "After can, use the base verb speak, without -s." },
          { prompt: "Min-su can to visit the Palace of the Shirvanshahs.", answer: "Min-su can visit the Palace of the Shirvanshahs.", why: "Do not put to between can and the base verb." },
          { prompt: "Are you can speak Polish?", answer: "Can you speak Polish?", why: "Do not use are with can; start the question with Can." },
          { prompt: "My friends from Chile is very friendly.", answer: "My friends from Chile are very friendly.", why: "The subject my friends is plural, so use are." }
        ]
      },
      { type: "build", title: "Build a can question", prompt: "Build a question about languages with can.", instruction: "Tap the words in the correct order to ask if your friend speaks Polish.", tokens: ["speak", "your", "Polish?", "Can", "friend"], answer: ["Can", "your", "friend", "speak", "Polish?"], why: "A can question starts with Can, then the subject your friend, then the base verb speak." },
      { type: "build", title: "Build a question about where students are from", prompt: "Build a question about nationality with be.", instruction: "Tap the words in the correct order to ask where the students come from.", tokens: ["are", "Where", "from?", "the", "students"], answer: ["Where", "are", "the", "students", "from?"], why: "A wh- question puts the question word first, then are, then the subject." },
      {
        type: "match", title: "Which meaning of can?",
        pairs: [
          { left: "Odett can dance and sing at the same time.", answer: "Ability" },
          { left: "The ferry can be late when the sea is rough.", answer: "Possibility" },
          { left: "At the fair, you can try food from six countries.", answer: "Opportunity" },
          { left: "Alina can run ten kilometres without stopping.", answer: "Ability" }
        ],
        choices: ["Ability", "Possibility", "Opportunity"],
        why: "Ability is what a person knows how to do, possibility is what may happen, and opportunity is what a place lets you do."
      }
    ]
  }
});
