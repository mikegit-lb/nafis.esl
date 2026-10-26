window.unitContent = window.unitContent || [];
window.unitContent[1] = Object.assign(window.unitContent[1] || {}, {
  lesson: {
    summary: "Use the simple present for habits and routines: things you do again and again, such as daily and study routines. Frequency adverbs and time expressions say how often or when.",
    examples: [
      "I wake up at seven on weekdays.",
      "She studies after school.",
      "Do you walk to school?",
      "My brother never takes the bus.",
      "We have a quiz twice a week."
    ],
    patterns: [
      {
        label: "Affirmative",
        formula: "I / you / we / they + base verb · he / she / it + verb-s",
        note: "They walk to school. Her friend walks to school too."
      },
      {
        label: "Spelling: -s / -es",
        formula: "most verbs + s · -ch, -sh, -s, -x, -o + es · consonant + y becomes -ies",
        note: "watch becomes watches, go becomes goes, study becomes studies, but play becomes plays. Have becomes has."
      },
      {
        label: "Negative",
        formula: "I / you / we / they + do not (don't) + base verb · he / she / it + does not (doesn't) + base verb",
        note: "After doesn't, never add -s to the verb: She doesn't like early mornings."
      },
      {
        label: "Questions",
        formula: "(Wh-word) + do / does + subject + base verb?",
        note: "What time do you leave home? Where does Lily eat lunch? Short answers: Yes, she does. No, I don't."
      },
      {
        label: "Adverbs of frequency",
        formula: "subject + always / usually / often / sometimes / rarely / never + main verb · subject + be + adverb",
        note: "The adverb goes before the main verb but after be: I always arrive on time. She is never late."
      },
      {
        label: "Time expressions",
        formula: "at 7.30 · at weekends · on weekdays · on Fridays · in the morning · twice a week",
        note: "Use at for clock times, on for days, in for parts of the day. Twice a week usually goes at the end. Exception: we say at weekends (not on weekends)."
      }
    ],
    context: [
      { speaker: "A", text: "What time do you get up on weekdays?" },
      { speaker: "B", text: "I usually get up at half past six. What about you?" },
      { speaker: "A", text: "I get up at seven. My brother is never ready on time." },
      { speaker: "B", text: "Does he take the bus to school?" },
      { speaker: "A", text: "No, he doesn't. He walks with his friends." },
      { speaker: "B", text: "Do you study after school?" },
      { speaker: "A", text: "Yes, I do. I study in the library twice a week." },
      { speaker: "B", text: "I don't study at weekends, but I always play basketball on Saturdays." }
    ]
  },
  grammar: {
    activities: [
      { type: "choice", title: "Choose the accurate routine", prompt: "In the school notice, the club ___ twice a week, and students ___ one small goal before each session.", options: ["meets / choose", "meet / chooses", "is meeting / choose", "meets / chooses"], answer: "meets / choose", why: "The club is singular, so it meets; the plural subject students takes choose." },
      { type: "complete", title: "Use the correct verb form", prompt: "Although Hana's first lesson begins at 8:30, she ___ (arrive) at school by 8:00.", answer: "arrives", why: "Use the simple present for a regular routine; Hana takes the third-person -s form." },
      { type: "transform", title: "Make the sentence negative", prompt: "The revision club promises instant results. Rewrite this sentence in the negative.", answer: "The revision club doesn't promise instant results.", accepted: ["The revision club does not promise instant results."], why: "Use doesn't + base verb with the singular subject the revision club." },
      { type: "fix", title: "Edit the student's question", prompt: "Why does Deniz marks the answers he cannot explain?", answer: "Why does Deniz mark the answers he cannot explain?", why: "After does, use the base verb mark." },
      {
        type: "quiz", title: "Quiz A · Verb forms after he, she, it and do / does", source: "Unit 2 · Language Awareness f · p.45",
        instruction: "Choose the correct word or phrase to complete each sentence.",
        items: [
          { prompt: "My brother ___ the bus to school every day.", options: ["take", "takes", "taking", "to take"], answer: "takes", why: "With he, she, it (my brother) the simple present verb ends in -s." },
          { prompt: "Ceren ___ her homework at the library after class.", options: ["does", "do", "doing", "dos"], answer: "does", why: "Do becomes does with the singular subject Ceren." },
          { prompt: "My mother ___ her teeth before breakfast.", options: ["brush", "brushs", "brushes", "brushing"], answer: "brushes", why: "Verbs ending in -sh add -es in the he / she / it form." },
          { prompt: "My sister ___ English with her friends on Fridays.", options: ["studys", "study", "studyes", "studies"], answer: "studies", why: "Consonant + y changes to -ies: study becomes studies." },
          { prompt: "___ your cousin live in Istanbul?", options: ["Does", "Do", "Is", "Are"], answer: "Does", why: "Use does with a singular subject (your cousin) to make a simple present question." },
          { prompt: "___ you and your friends have lunch together at school?", options: ["Is", "Are", "Does", "Do"], answer: "Do", why: "Use do with plural subjects such as you and your friends." },
          { prompt: "Lily ___ a film with her family on Sundays.", options: ["watchs", "watches", "watchies", "watching"], answer: "watches", why: "Verbs ending in -ch add -es with he, she, it." },
          { prompt: "Tom ___ to the park on Friday afternoons.", options: ["gos", "go", "goes", "going"], answer: "goes", why: "Go ends in -o, so the he / she / it form is goes." }
        ]
      },
      {
        type: "quiz", title: "Quiz B · Adverb position and time expressions", source: "Unit 2 · Language Awareness · pp.44-45",
        instruction: "Choose the correct word order or preposition.",
        items: [
          { prompt: "Aylin ___ late for school.", options: ["never is", "never are", "is never", "does never be"], answer: "is never", why: "An adverb of frequency comes after the verb be." },
          { prompt: "We ___ the bus when it rains.", options: ["take always", "always take", "are always take", "always takes"], answer: "always take", why: "An adverb of frequency goes before the main verb, and we takes the base form." },
          { prompt: "They ___ breakfast together before school.", options: ["have usually", "usually has", "are usually have", "usually have"], answer: "usually have", why: "Put usually before the main verb have; they takes the base form." },
          { prompt: "Our first lesson starts ___ eight o'clock.", options: ["at", "on", "in", "to"], answer: "at", why: "Use at with clock times." },
          { prompt: "I do not go out with my friends ___ weekdays.", options: ["at", "on", "in", "to"], answer: "on", why: "Use on with days and groups of days such as weekdays." },
          { prompt: "Hana goes to the climbing club twice ___.", options: ["the week", "weeks", "a week", "one week"], answer: "a week", why: "We say twice a week for how often something happens." }
        ]
      },
      {
        type: "quiz", title: "Quiz C · Complete with the simple present", source: "Unit 2 · Language Awareness · p.45",
        instruction: "Write the correct simple present form of the verb in brackets. For negatives, write the full form (do not / does not) or the short form.",
        items: [
          { prompt: "Every morning, Zeynep ___ (wake) up at half past six.", answer: "wakes", why: "Zeynep is a singular subject, so add -s to wake." },
          { prompt: "My brother ___ (not / like) getting up early.", answer: "does not like", why: "Use does not + base verb with a singular subject." },
          { prompt: "We ___ (not / go) to school on Sundays.", answer: "do not go", why: "Use do not + base verb with we." },
          { prompt: "Our teacher ___ (check) our homework every Monday.", answer: "checks", why: "Our teacher is singular, and check ends in -ck, so it only needs -s." },
          { prompt: "Ayşe ___ (study) in the library after school.", answer: "studies", why: "Consonant + y changes to -ies in the he / she / it form." },
          { prompt: "My parents ___ (work) in a hospital.", answer: "work", why: "The subject my parents is plural, so the verb keeps the base form." }
        ]
      },
      {
        type: "quiz", title: "Quiz D · Make a question or a negative", source: "Unit 2 · Language Awareness f · p.45",
        instruction: "Rewrite each sentence as the question or negative sentence the instruction asks for.",
        items: [
          { prompt: "Ask a What time question about this sentence: “Ali gets up at seven.”", answer: "What time does Ali get up?", why: "Use What time + does + subject + base verb." },
          { prompt: "Make this sentence negative: “Selin walks to school.”", answer: "Selin does not walk to school.", why: "Use does not + base verb; the -s moves to does." },
          { prompt: "Ask a Where question about this sentence: “Mert eats lunch in the canteen.”", answer: "Where does Mert eat lunch?", why: "Use Where + does + subject + base verb." },
          { prompt: "Make a yes/no question: “They take notes in every lesson.”", answer: "Do they take notes in every lesson?", why: "Start with do for a plural subject and keep the base verb." },
          { prompt: "Make this sentence negative: “We have a break at ten o'clock.”", answer: "We do not have a break at ten o'clock.", why: "Use do not + base verb with we." },
          { prompt: "Ask a How often question about this sentence: “Hana revises twice a week.”", answer: "How often does Hana revise?", why: "Use How often + does + subject + base verb to ask about frequency." }
        ]
      },
      {
        type: "quiz", title: "Quiz E · Correct the school-day sentences", source: "Unit 2 · Language Awareness j · p.45",
        instruction: "Each sentence comes from a school-day paragraph and has one mistake. Write the sentence correctly.",
        items: [
          { prompt: "Our lessons begin always at eight.", answer: "Our lessons always begin at eight.", why: "An adverb of frequency goes before the main verb." },
          { prompt: "The first lesson does not consists of just reading.", answer: "The first lesson does not consist of just reading.", why: "After does not, use the base verb consist." },
          { prompt: "Elif do not bring her lunch to school.", answer: "Elif does not bring her lunch to school.", why: "Use does not with a singular subject (Elif)." },
          { prompt: "Selin usually forget her bus card.", answer: "Selin usually forgets her bus card.", why: "Selin is singular, so the main verb needs -s." },
          { prompt: "Does your friend plays football after school?", answer: "Does your friend play football after school?", why: "After does, use the base verb play." },
          { prompt: "What time you leave home in the morning?", answer: "What time do you leave home in the morning?", why: "A simple present question needs do / does after the question words." }
        ]
      },
      {
        type: "build", title: "Build a question: leaving home",
        prompt: "Ask what time Ceren leaves home.", instruction: "Ask what time Ceren leaves home. Tap the words in the correct order.",
        tokens: ["leave", "Ceren", "What", "home?", "does", "time"],
        answer: ["What", "time", "does", "Ceren", "leave", "home?"],
        why: "A wh-question follows the order wh-words + does + subject + base verb."
      },
      {
        type: "build", title: "Build a question: taking notes",
        prompt: "Ask a classmate how often they take notes.", instruction: "Ask a classmate how often they take notes. Tap the words in the correct order.",
        tokens: ["notes?", "How", "you", "do", "take", "often"],
        answer: ["How", "often", "do", "you", "take", "notes?"],
        why: "Put do after How often and keep the base verb take."
      },
      {
        type: "match", title: "What does each sentence talk about?",
        pairs: [
          { left: "My sister bites her nails when she is nervous.", answer: "habit (something a person does again and again)" },
          { left: "Our school day starts at eight o'clock every morning.", answer: "routine (a regular daily schedule)" },
          { left: "Last Saturday, we went to a concert in Ankara.", answer: "one-time event (finished, happened once)" },
          { left: "Next week, we are going to visit a science museum.", answer: "future plan (will happen later)" }
        ],
        choices: [
          "habit (something a person does again and again)",
          "routine (a regular daily schedule)",
          "one-time event (finished, happened once)",
          "future plan (will happen later)"
        ],
        why: "The simple present is used for habits and routines, while a finished single event uses the past and a future plan uses going to."
      }
    ]
  }
});
