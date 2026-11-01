window.unitContent = window.unitContent || [];
window.unitContent[0] = Object.assign(window.unitContent[0] || {}, {
  speaking: {
    pronunciation: {
      sounds: [
        { label: "smart: the long ar sound, as in car", words: ["smart", "start", "arm", "park", "hard", "farm", "garden"] },
        { label: "around: the short, weak a sound (/ə/), as in about, again, banana, sofa", words: ["around", "about", "again", "away", "banana", "sofa"] },
        { label: "way: the a sound that says its own name", words: ["way", "day", "play", "train", "name", "late"] },
        { label: "control: the hard c sound, like k", words: ["control", "cat", "class", "culture", "camera", "country"] },
        { label: "exercise: the soft c sound, like s", words: ["exercise", "city", "cinema", "centre", "face", "nice"] }
      ],
      sentences: [
        "My smart cousin started a card club at the car park.",
        "Can we play a game on the way to the station today?",
        "The nice cinema in the city centre is a great place to meet.",
        "About a week ago, Maria ate a banana on the sofa around noon."
      ],
      extras: [
        { title: "Word stress", note: "Say the strong syllable louder and longer. O is a strong syllable and o is a weak one.", kind: "words", groups: [
          { label: "Countries with the stress on the first syllable (Oo, Ooo)", words: ["Poland", "Norway", "Egypt", "Italy", "Germany", "Hungary", "Canada", "Mexico"] },
          { label: "Countries with the stress on the second syllable (oO, oOoo)", words: ["Japan", "Brazil", "Peru", "Bulgaria"] },
          { label: "Nationalities with the stress on the second syllable (oOo)", words: ["Italian", "Egyptian", "Korean", "Norwegian", "Hungarian", "Brazilian"] },
          { label: "Tourist words with the stress on the first syllable (Oo)", words: ["castle", "palace", "tower", "tourist", "ancient", "sightseeing"] },
          { label: "Tourist words with the stress on a later syllable (oO, oOo)", words: ["museum", "bazaar", "explore", "attraction", "historical"] }
        ] },
        { title: "Can and can't", note: "In the middle of a sentence can is weak, like /kən/. In a short answer it is strong, like /kæn/. Can't is always strong, like /kɑːnt/.", kind: "sentences", groups: [
          { label: "Weak can in statements", sentences: ["I can speak English and a little German.", "She can swim, but she can't ski.", "Visitors can take photos in the park."] },
          { label: "Strong can in short answers", sentences: ["Can you swim? Yes, I can.", "Can tourists visit the castle? Yes, they can."] },
          { label: "Strong can't", sentences: ["I can't play the guitar.", "Tourists can't enter the tower at night.", "We can't go inside the mosque in shoes."] }
        ] },
        { title: "Sounds that are easy to mix up", note: "Listen to both words in each pair, then say them slowly.", kind: "pairs", groups: [
          { label: "w and v", pairs: [["west", "vest"], ["wine", "vine"], ["wet", "vet"], ["worse", "verse"]] },
          { label: "th /θ/ and s, t", pairs: [["think", "sink"], ["three", "tree"], ["thank", "tank"], ["thick", "sick"]] }
        ] },
        { title: "Question melody", note: "Let your voice go up at the end of a yes/no question and down at the end of a wh- question.", kind: "sentences", groups: [
          { label: "Yes/no questions go up ↗", sentences: ["Can you swim?", "Are you from Türkiye?", "Is it a big city?", "Can tourists visit the castle?"] },
          { label: "Wh- questions go down ↘", sentences: ["Where are you from?", "What languages can you speak?", "What can tourists do there?", "What is the capital of Italy?"] },
          { label: "Lists: up, up, then down", sentences: ["You can see a castle, a museum and a bridge.", "I can speak Turkish, English and a little German."] }
        ] }
      ]
    },
    examTips: [
      "Answer in a full sentence, then add one more detail: I'm from Izmir. It's a big city by the sea.",
      "Do not stop after yes or no. Add a short reason or example.",
      "If you do not understand, say: Sorry, could you say that again? or Could you speak more slowly, please?",
      "If you forget a word, describe it: It's a place where tourists can take photos.",
      "Speak at a steady speed and look at your partner. A clear answer is better than a fast one."
    ],
    tasks: [
      {
        type: "speak",
        title: "Meet the exchange students",
        source: "Unit 1 · Listening/Watching d · p.26",
        instruction: "Ask and answer with a partner. Fact sheet: Mehmet is from Türkiye (Turkish, Ankara). Alina is from Poland (Polish, Warsaw). Odett is from Hungary (Hungarian, Budapest). Ivan is from Bulgaria (Bulgarian, Sofia). Ingrid is from Norway (Norwegian, Oslo). Min-su is from South Korea (Korean, Seoul). The video is not available here. If the answer is not on the fact sheet, give your own idea.",
        questions: [
          {
            q: "Who shows the new students around on the first day?",
            model: "I think a student helper shows them around. Maybe it's Mehmet, because he's friendly and he can show them the classrooms.",
            frames: ["I think ... shows them around.", "He/She is friendly, and he/she can ..."]
          },
          {
            q: "Which student comes from the country farthest from Türkiye, and what is its capital?",
            model: "I think Min-su comes from the farthest country. He's from South Korea, and the capital of South Korea is Seoul.",
            frames: ["I think ... comes from the farthest country.", "The capital of ... is ..."]
          },
          {
            q: "Which students have a nationality word that ends in -ian?",
            model: "Odett, Ivan and Ingrid do. Odett is Hungarian, Ivan is Bulgarian, and Ingrid is Norwegian.",
            frames: ["... is Hungarian, ... is ...", "... and ... do, too."]
          },
          {
            q: "Which country on the fact sheet would you choose for a winter holiday, and why?",
            model: "I would choose Norway because it's cold and snowy there. Tourists can ski, and they can walk in the white mountains.",
            frames: ["I would choose ... because ...", "Tourists can ... there."]
          },
          {
            q: "Alina is from Poland, and Min-su is from South Korea. What can they ask each other about their capital cities?",
            model: "Alina can ask, Is Seoul a big city? Min-su can ask, What can tourists see in Warsaw? They can also ask about the food and the weather.",
            frames: ["... can ask, Is ... a big city?", "They can also ask about ..."]
          },
          {
            q: "Which language can all six students use when they talk together, and why?",
            model: "I think they use English because it's a common language for all of them. Mehmet can also teach them a few Turkish words.",
            frames: ["I think they use ... because ...", "... can also teach them ..."]
          },
          {
            q: "What small gift from Türkiye would you give to one of the students, and why?",
            model: "I would give Ingrid a box of Turkish delight because it's a sweet and famous gift. She can share it with her family in Oslo.",
            frames: ["I would give ... a ... because ...", "He/She can share it with ..."]
          }
        ],
        checklist: ["a full sentence with am, is or are", "can for what students or tourists do", "the name of a country"]
      },
      {
        type: "speak",
        title: "Azerbaijan and the Turkic states",
        source: "Unit 1 · Language Awareness c–d · p.30",
        instruction: "Azerbaijan is a Turkic country on the western shore of the Caspian Sea. Its capital, Baku, has a walled old city and a famous stone tower, but also tall glass buildings. Its food shows the history of the Silk Road. Other Turkic states include Uzbekistan and Kazakhstan. Ask and answer in pairs, then say each answer in your own words.",
        questions: [
          {
            q: "What is the capital of Azerbaijan, and what old landmark can visitors see there?",
            model: "The capital of Azerbaijan is Baku. Visitors can see the walled old city and the Maiden Tower, which are very old.",
            frames: ["The capital of ... is ...", "Visitors can see ... and ..."]
          },
          {
            q: "Which other Turkic states do you know, apart from Türkiye and Azerbaijan?",
            model: "I know Uzbekistan and Kazakhstan. They're big countries in Central Asia, and the people there speak Turkic languages.",
            frames: ["I know ... and ...", "They are countries in ..."]
          },
          {
            q: "How is Baku both old and modern?",
            model: "Baku has an old walled city with ancient buildings, and it also has tall glass skyscrapers. Visitors can walk through history in the morning and see the modern city in the evening.",
            frames: ["Baku has ... and also ...", "Visitors can ... in the morning and ..."]
          },
          {
            q: "Why did traders travel along the Silk Road long ago?",
            model: "Traders travelled along the Silk Road to sell silk, spices and other goods. They also shared ideas and foods, so many cultures became closer.",
            frames: ["Traders travelled to ...", "They also shared ..."]
          },
          {
            q: "Would you like to visit Baku? Why, or why not?",
            model: "Yes, I would. Baku has old UNESCO sites and modern skyscrapers, so I can see the past and the present in one city.",
            frames: ["Yes, I would, because ...", "No, I would not, because ..."]
          },
          {
            q: "What would feel familiar to a Turkish tourist in Azerbaijan?",
            model: "Many things would feel familiar. The language is close to Turkish, and people drink tea and eat dishes that a Turkish visitor knows.",
            frames: ["The language is ...", "People drink ... and eat ..."]
          }
        ],
        checklist: ["is or are for a place", "can for what visitors do", "because for a reason"]
      },
      {
        type: "speak",
        title: "Be a vlogger",
        source: "Unit 1 · Vocabulary h, j · p.29",
        instruction: "A travel vlogger films trips and shares the videos online. Think about what a vlogger needs, then talk about your own trip ideas.",
        questions: [
          {
            q: "Why do some vloggers visit places that few tourists know?",
            model: "I think they want to show something new. Their followers can see quiet villages and special food that aren't in guidebooks.",
            frames: ["I think they want to ...", "Their followers can see ..."]
          },
          {
            q: "What does a vlogger need to pack for a month-long trip?",
            model: "A vlogger needs a camera, a phone, a charger and a small tripod. It's also important to take a light bag, because the trip is long.",
            frames: ["A vlogger needs ..., ... and ...", "It is important to ..."]
          },
          {
            q: "If you filmed a travel video this summer, which three places would you visit?",
            model: "I would visit Cappadocia, Trabzon and Mardin. They're very different, and viewers can see rocks, green hills and old stone streets.",
            frames: ["I would visit ..., ... and ...", "Viewers can see ..."]
          },
          {
            q: "What would you film on the first morning of your trip?",
            model: "I would film the street outside my hotel and the breakfast table. Viewers can see the local people, the bread and the tea.",
            frames: ["I would film ...", "Viewers can see ..."]
          },
          {
            q: "Would you like to be a travel vlogger? Why, or why not?",
            model: "Yes, I would. I love travelling and taking photos, and I can show interesting places to many people.",
            frames: ["Yes, I would, because ...", "No, I would not, because ..."]
          },
          {
            q: "What would you call your travel channel, and why?",
            model: "I would call it Wandering with Elif because I like to walk and explore new places. My followers can come with me on every trip.",
            frames: ["I would call it ... because ...", "My followers can ..."]
          }
        ],
        checklist: ["a full sentence", "the name of a place", "can for a possibility"]
      },
      {
        type: "speak",
        title: "Geography and weather: Italy",
        source: "Unit 1 · Reading follow-up g–h · p.33",
        instruction: "Italy is a long country in southern Europe that looks like a boot on the map. The Alps and some beautiful lakes are in the north, the Mediterranean Sea is on the other three sides, and there are volcanoes such as Etna and Vesuvius. Its capital is Rome, which has ancient ruins such as the Colosseum. Use these facts in your answers, and answer in pairs.",
        questions: [
          {
            q: "Why is the weather in northern Italy different from the weather in the south?",
            model: "The north is near the Alps, so winters are cold and snowy there. The south is closer to Africa and the warm sea, so summers are hot and dry.",
            frames: ["The north is ..., so ...", "The south is ..., so ..."]
          },
          {
            q: "How do mountains and the sea change the way people live in Italy?",
            model: "People in the mountains can ski and walk in the forests. People on the coast can fish, swim and work in hotels for tourists.",
            frames: ["People in the mountains can ...", "People on the coast can ..."]
          },
          {
            q: "Why is Rome a good city for a first visit to Italy?",
            model: "Rome is the capital, and it has ancient ruins such as the Colosseum. Tourists can walk to many sights in one day and eat Italian food on every street.",
            frames: ["Rome is a good city because ...", "Tourists can ... and ..."]
          },
          {
            q: "What is special about volcanoes like Etna and Vesuvius?",
            model: "Etna and Vesuvius are active volcanoes. Tourists can walk up and see the crater, and near Vesuvius they can visit the ruins of Pompeii.",
            frames: ["... and ... are active volcanoes.", "Tourists can ... and visit ..."]
          },
          {
            q: "Which season is the best time to visit the cities of Italy, and why?",
            model: "I think spring is the best time because it's warm but not too hot. In summer the cities are crowded, so tourists can walk around more comfortably in April or May.",
            frames: ["I think ... is the best time because ...", "Tourists can ... more comfortably in ..."]
          },
          {
            q: "Which part of Italy's nature sounds best to you, and why? Give two reasons.",
            model: "The lakes in the north sound best to me. First, the water is calm and beautiful. Second, tourists can take a boat trip with a view of the mountains.",
            frames: ["... sounds best to me.", "First, ... Second, ..."]
          },
          {
            q: "Why is the shape of Italy easy to recognise on a map?",
            model: "Italy looks like a boot, and the sea is on three sides of it. Because of this, the coast is very long, so it's easy to find on a map.",
            frames: ["Italy looks like ...", "Because of this, ..."]
          }
        ],
        checklist: ["there is or there are", "can for what is possible", "two reasons"]
      },
      {
        type: "speak",
        title: "Online life and safety",
        source: "Unit 1 · Roots and Routes d–e · p.34",
        instruction: "The Internet makes many daily jobs quick and easy, but careless sharing can cause problems. Talk in pairs about staying safe online, then tell the rest of the group what you decided.",
        questions: [
          {
            q: "What can happen if you use the same password for all your accounts?",
            model: "If a hacker finds the password, the hacker can open all your accounts. They can read your messages and take your photos, so one password isn't safe.",
            frames: ["If a hacker finds ..., the hacker can ...", "One password is not safe because ..."]
          },
          {
            q: "Which kinds of information should you never post on social media?",
            model: "You should never post your home address, your ID number or your passwords. Strangers can use this information to find you or to steal your money.",
            frames: ["You should never post ...", "Strangers can use ... to ..."]
          },
          {
            q: "Why is public Wi-Fi in a cafe less safe than the Wi-Fi at home?",
            model: "Many strangers use public Wi-Fi, so a hacker can watch what you do. At home, only my family uses the network, so it's safer.",
            frames: ["Many strangers use ..., so ...", "At home, only ..., so it is safer."]
          },
          {
            q: "What do you mostly use your phone or computer for after school?",
            model: "I mostly use my phone to chat with friends, watch videos and look for homework help. I use my computer for school projects.",
            frames: ["I mostly use my phone to ...", "I use my computer for ..."]
          },
          {
            q: "How can you check that a message from a bank or a shop is real?",
            model: "I look at the sender's address, and I don't click the link. I can call the bank or ask my parents before I answer.",
            frames: ["I look at ..., and I do not ...", "I can ... before I answer."]
          },
          {
            q: "Do you think you spend too much time online? Why, or why not?",
            model: "Yes, I think I do. I'm online for about two hours every day, and I can use some of that time to read or play sport.",
            frames: ["Yes, I think I do, because ...", "No, I do not, because ..."]
          }
        ],
        checklist: ["can for what people do", "is or are for a fact", "a reason or an example"]
      },
      {
        type: "speak",
        title: "Class hunt: Who can...?",
        source: "Unit 1 · Gamification · p.29",
        instruction: "Walk around the room. Ask a classmate each question, answer it yourself with a full sentence, and write down the names of the classmates who say yes.",
        questions: [
          {
            q: "Can you say hello in three different languages?",
            model: "Yes, I can. I can say hello in English, merhaba in Turkish and hola in Spanish.",
            frames: ["Yes, I can. I can say hello in ...", "No, I cannot, but I can say it in ..."]
          },
          {
            q: "Can you name three countries in Africa?",
            model: "Yes, I can. Egypt, Kenya and Morocco are three countries in Africa.",
            frames: ["Yes, I can. ... are three countries.", "No, I cannot, but I can name ..."]
          },
          {
            q: "Can you name three Turkish dishes that tourists love?",
            model: "Yes, I can. Kebab, mantı and baklava are three Turkish dishes that tourists love.",
            frames: ["Yes, I can. ... are three dishes.", "One dish is ..."]
          },
          {
            q: "Can you name three famous rivers in the world?",
            model: "Yes, I can. The Nile, the Amazon and the Danube are three famous rivers.",
            frames: ["Yes, I can. ... are three rivers.", "No, I cannot, but I can name ..."]
          },
          {
            q: "Can you name two island countries?",
            model: "Yes, I can. Japan and Iceland are two island countries.",
            frames: ["Yes, I can. ... and ... are island countries.", "No, I cannot, but I know ..."]
          },
          {
            q: "Can you say the nationality of people from Brazil, Italy and Egypt?",
            model: "Yes, I can. People from Brazil are Brazilian, people from Italy are Italian, and people from Egypt are Egyptian.",
            frames: ["Yes, I can. People from ... are ...", "I can say ..., ... and ..."]
          }
        ],
        checklist: ["Yes, I can or No, I cannot", "a full sentence", "the correct names, with three examples where the question asks for them"]
      },
      {
        type: "speak",
        title: "Presenting your country: school fair and video",
        source: "Unit 1 · Consolidation e · p.35; E-Portfolio a · p.36",
        instruction: "Speak for about one minute as if you are standing at an international school fair, or filming a short clip that presents Türkiye. Use the checklist as a guide.",
        questions: [
          {
            q: "Introduce yourself and your country at an international school fair.",
            model: "Hello, everyone! My name is Elif, and I'm Turkish. I'm from Türkiye, and I can speak Turkish and English. The capital of Türkiye is Ankara. Tourists can visit Hagia Sophia and Cappadocia. They can eat local food and take a boat trip on the Bosphorus. Thank you for listening, and goodbye!",
            frames: ["Hello, everyone! My name is ...", "I am ... and I can speak ...", "The capital of ... is ...", "Tourists can ... and ...", "Thank you for listening, and goodbye!"]
          },
          {
            q: "Present one other country from this unit, for example Hungary or Norway.",
            model: "Good morning! My name is Odett, and I'm Hungarian. I'm from Hungary, and I can speak Hungarian and English. The capital is Budapest. Tourists can visit the Parliament building and relax in the thermal baths. They can also walk beside the river Danube. Thank you, and goodbye!",
            frames: ["Good morning! My name is ...", "I am ... and I can speak ...", "The capital is ...", "Tourists can visit ... and ...", "Thank you, and goodbye!"]
          },
          {
            q: "Your partner interviews you for the clip: What would you recommend to a visitor to Türkiye?",
            model: "I would recommend a walk through an old city and a day at the seaside. A visitor can also hike in the mountains and try delicious food, so a trip here is never boring.",
            frames: ["I would recommend ...", "A visitor can also ...", "A trip here is never boring because ..."]
          },
          {
            q: "Which place would you show first in your video about Türkiye, and why?",
            model: "I would show Cappadocia first because it's very beautiful. Tourists can take a hot-air balloon trip there.",
            frames: ["I would show ... first because ...", "Tourists can ... there."]
          },
          {
            q: "What food can tourists try in your country?",
            model: "Tourists can try kebab, baklava and Turkish tea. The food is delicious, and every city has its own special dishes.",
            frames: ["Tourists can try ... and ...", "The food is ..."]
          },
          {
            q: "How do you end your video? Say goodbye to your viewers.",
            model: "Thank you for watching my video about Türkiye. I hope you can visit us one day. Goodbye!",
            frames: ["Thank you for watching ...", "I hope you can ...", "Goodbye!"]
          }
        ],
        checklist: ["a warm greeting", "my name", "my nationality", "my language", "the capital city", "two tourist attractions", "two things tourists can do", "a confident goodbye"]
      },
      {
        type: "speak",
        title: "About you · Introducing yourself",
        source: "Unit 1 · Speaking (personal practice), extends Listening/Watching d and Pronunciation e · pp.26–27",
        instruction: "Answer each question aloud about yourself, in full sentences. Then compare your answer with the model answer and try again with a better sentence.",
        questions: [
          {
            q: "What is your name? Can you spell it for me?",
            model: "My name is Elif Demir. I can spell it: E-L-I-F, D-E-M-I-R.",
            frames: ["My name is ...", "I can spell it: ..."]
          },
          {
            q: "How old are you?",
            model: "I'm fifteen years old. My birthday is in March.",
            frames: ["I am ... years old.", "My birthday is in ..."]
          },
          {
            q: "Where were you born?",
            model: "I was born in Denizli, in Türkiye. It's a city in the south-west of the country.",
            frames: ["I was born in ..., in ...", "It is a ... in the ... of the country."]
          },
          {
            q: "Are you a student? Which grade are you in?",
            model: "Yes, I'm a student. I'm in Grade 9, and my classroom is on the second floor.",
            frames: ["Yes, I am. I am in Grade ...", "My classroom is ..."]
          },
          {
            q: "Do you have a nickname? Who calls you that?",
            model: "Yes, I do. My friends call me Eli. It's short, and I like it.",
            frames: ["Yes, I do. My ... call me ...", "No, I do not. My name is short."]
          },
          {
            q: "Are you shy or outgoing when you meet new people?",
            model: "I'm a little shy at first, but I'm friendly. I talk a lot when I know people better.",
            frames: ["I am ... at first, but ...", "I can talk a lot when ..."]
          },
          {
            q: "How do you greet a new classmate in English?",
            model: "I say, Hello! My name is Elif. Nice to meet you! What is your name?",
            frames: ["I say, Hello! My name is ...", "Nice to meet you! What is ...?"]
          },
          {
            q: "Can you introduce your family in two sentences?",
            model: "Yes, I can. There are four people in my family: my mother, my father, my brother and me. My brother is eleven years old.",
            frames: ["There are ... people in my family.", "My ... is ... years old."]
          }
        ],
        checklist: ["Did you use am, is or are correctly?", "Did you answer in a full sentence?", "Did you say your name clearly?"]
      },
      {
        type: "speak",
        title: "About you · Your country, nationality and languages",
        source: "Unit 1 · Speaking (personal practice), extends Listening/Watching d and Gamification · pp.26, 29",
        instruction: "Answer each question aloud about your own life. Use a full sentence, then compare with the model answer and notice the nationality and language words.",
        questions: [
          {
            q: "Which country are you from?",
            model: "I'm from Türkiye. It's in both Europe and Asia.",
            frames: ["I am from ...", "It is in ..."]
          },
          {
            q: "What is your nationality?",
            model: "I'm Turkish. My parents are Turkish, too.",
            frames: ["I am ... (nationality).", "My parents are ..., too."]
          },
          {
            q: "What is the capital of your country, and is it a big city?",
            model: "The capital of Türkiye is Ankara. Yes, it's a big city, and many people live there.",
            frames: ["The capital of ... is ...", "Yes, it is a big city. / No, it is a small city."]
          },
          {
            q: "Which languages can you speak?",
            model: "I can speak Turkish and English. I can also say a few words in German.",
            frames: ["I can speak ... and ...", "I can also say a few words in ..."]
          },
          {
            q: "Can you speak a language that your parents cannot speak?",
            model: "Yes, I can. I can speak English, but my parents can only say a few words.",
            frames: ["Yes, I can. I can speak ..., but my parents ...", "No, I cannot. We can all speak ..."]
          },
          {
            q: "Can you say thank you in two foreign languages?",
            model: "Yes, I can. I say thank you in English and danke in German.",
            frames: ["Yes, I can. I say thank you in ... and ... in ...", "No, I cannot, but I can say it in ..."]
          },
          {
            q: "Which language would you like to learn next, and why?",
            model: "I would like to learn Japanese because I like anime. I think the writing is difficult, but it's interesting.",
            frames: ["I would like to learn ... because ...", "I think it is ..."]
          },
          {
            q: "Do you know people from other countries? Where are they from?",
            model: "Yes, I do. I have a friend from Poland. She's Polish, and she can speak Polish and English.",
            frames: ["Yes, I do. I have a friend from ...", "He/She is ..., and he/she can speak ..."]
          }
        ],
        checklist: ["Did you use am, is or are correctly?", "Did you use can for languages?", "Did you use the nationality word (Turkish, not Türkiye)?"]
      },
      {
        type: "speak",
        title: "About you · Your school and classmates",
        source: "Unit 1 · Speaking (personal practice), extends Listening/Watching d · p.26",
        instruction: "Answer each question aloud about your own school. Then compare your answer with the model answer and add one more detail.",
        questions: [
          {
            q: "What is the name of your school, and where is it?",
            model: "My school is Atatürk High School, and it's in the centre of the city. It's next to a big park.",
            frames: ["My school is ..., and it is in ...", "It is next to ..."]
          },
          {
            q: "How many students are there in your class?",
            model: "There are about thirty students in my class. Fifteen are girls, and fifteen are boys.",
            frames: ["There are about ... students in my class.", "... are girls, and ... are boys."]
          },
          {
            q: "Is your school big or small?",
            model: "It's quite big. There are about a thousand students, and there's a large garden.",
            frames: ["It is quite ...", "There are ... and there is ..."]
          },
          {
            q: "Are there any exchange students in your school?",
            model: "No, there aren't, but I would like to meet a student from abroad. We can practise our English together.",
            frames: ["Yes, there are. They are from ...", "No, there are not, but I would like to ..."]
          },
          {
            q: "What is your favourite place in your school, and why?",
            model: "My favourite place is the library. It's quiet, and I can read books there.",
            frames: ["My favourite place is ...", "It is ..., and I can ... there."]
          },
          {
            q: "Can you help a new student find a classroom? What do you say?",
            model: "Yes, I can. I say, Hello! Can I help you? Which classroom are you looking for? I can show you the way.",
            frames: ["I say, Hello! Can I help you?", "Which ... are you looking for?", "I can show you the way."]
          },
          {
            q: "What can students do in your school after the lessons?",
            model: "Students can join clubs, play basketball in the garden or study in the library.",
            frames: ["Students can ...", "They can also ..."]
          },
          {
            q: "Who are your classmates? Tell me about two of them.",
            model: "My classmates are friendly. Ahmet is funny, and he can play the guitar. Zeynep is clever, and she's good at maths.",
            frames: ["... is funny/clever/kind, and he/she can ...", "... is good at ..."]
          }
        ],
        checklist: ["Did you use there is or there are?", "Did you use can for what students do?", "Did you use am, is or are correctly?"]
      },
      {
        type: "speak",
        title: "About you · Your town and its attractions",
        source: "Unit 1 · Speaking (personal practice), extends Reading follow-up g–h and Vocabulary · pp.29, 33",
        instruction: "Answer each question aloud about the place where you live. Then compare with the model answer and add a detail that only you know.",
        questions: [
          {
            q: "Which town or city do you live in?",
            model: "I live in Denizli. It's a city in the south-west of Türkiye.",
            frames: ["I live in ...", "It is a city/town in ..."]
          },
          {
            q: "Is your town big or small, and is it near the sea or the mountains?",
            model: "My city is medium-sized. It isn't near the sea, but there are mountains and hot springs nearby.",
            frames: ["My town is big/small/medium-sized.", "It is near/not near ..."]
          },
          {
            q: "What is the most famous place in your town?",
            model: "The most famous place in my city is Pamukkale, with its white terraces. Many tourists visit it every year.",
            frames: ["The most famous place is ...", "Many tourists ..."]
          },
          {
            q: "Are there any museums, parks or old buildings near your home?",
            model: "Yes, there are. There's a small museum, a big park and an old mosque in the city centre.",
            frames: ["Yes, there are. There is ... and ...", "No, there are not, but there is ..."]
          },
          {
            q: "What can a visitor do in the centre of your city?",
            model: "A visitor can walk around the old streets, visit a museum and drink tea in a cafe.",
            frames: ["A visitor can walk ... and visit ...", "A visitor can also ..."]
          },
          {
            q: "Can tourists get around easily where you live? How?",
            model: "Yes, they can. They can take buses or taxis, and the city centre is good for walking.",
            frames: ["Yes, they can. They can take ...", "No, it is difficult because ..."]
          },
          {
            q: "Where do you take your friends at the weekend?",
            model: "I take my friends to the park and to a cafe in the city centre. We can walk, talk and drink tea there.",
            frames: ["I take my friends to ...", "We can ... and ... there."]
          },
          {
            q: "Do you like living in your city? Give two reasons.",
            model: "Yes, I do. First, the people are friendly. Second, the weather is nice, and I can spend time outside.",
            frames: ["Yes, I do. First, ... Second, ...", "Not really, because ..."]
          }
        ],
        checklist: ["Did you use there is or there are?", "Did you use can for what tourists do?", "Did you give a reason with because?"]
      },
      {
        type: "speak",
        title: "About you · What tourists can do",
        source: "Unit 1 · Speaking (personal practice), extends Language Awareness c–d · p.30",
        instruction: "Imagine you are a local guide for your own country. Answer each question aloud, then compare with the model answer and listen for can and can't.",
        questions: [
          {
            q: "What can visitors enjoy in your city during the summer holidays?",
            model: "Visitors can swim in the pools and visit old sites in the morning. In the evening they can walk outside because it's cooler.",
            frames: ["Visitors can ... in summer.", "In the evening they can ..."]
          },
          {
            q: "What can tourists buy as a souvenir from your area?",
            model: "Tourists can buy towels, ceramics or sweets. Small gifts like these are easy to take home.",
            frames: ["Tourists can buy ...", "... are easy to take home."]
          },
          {
            q: "Can tourists swim, ski or hike near your home?",
            model: "Yes, they can hike in the hills and swim in the warm pools. They can't ski very close to my city, but they can drive to the mountains.",
            frames: ["Yes, they can ... and ...", "They cannot ..., but they can ..."]
          },
          {
            q: "Which places near your town are good for a day out?",
            model: "An ancient city and a small village in the hills are good for a day out. They take about one hour by car, and visitors can have lunch there.",
            frames: ["... and ... are good for a day out.", "They take about ..."]
          },
          {
            q: "Which tourist attraction in Türkiye do you like best, and why?",
            model: "I like Hagia Sophia best. It's very old, and visitors can see Byzantine and Ottoman art in one building.",
            frames: ["I like ... best.", "It is ..., and visitors can ..."]
          },
          {
            q: "What advice do you give to tourists who visit your town?",
            model: "I tell them to wear comfortable shoes, drink water and try the local food. I also say they can ask local people for help.",
            frames: ["I tell them to ...", "They can ask ..."]
          },
          {
            q: "Can you recommend a good place for a picnic near your home?",
            model: "Yes, I can. There's a quiet park by the river. Tourists can sit under the trees and enjoy the view.",
            frames: ["Yes, I can. There is ...", "Tourists can sit ... and ..."]
          },
          {
            q: "What can't tourists do in a museum or at a historical place?",
            model: "They can't touch the old objects, and they can't take photos with a flash. Signs often show these rules.",
            frames: ["They cannot touch ...", "They cannot ..., but they can ..."]
          }
        ],
        checklist: ["Did you use can or cannot for what is possible?", "Did you use a verb after can (can visit, not can visits)?", "Did you add one detail or example?"]
      },
      {
        type: "speak",
        title: "About you · Trips you have taken or want to take",
        source: "Unit 1 · Speaking (personal practice), extends Vocabulary h, j (Nora's trips) · p.29",
        instruction: "Answer each question aloud about your own trips and travel dreams. Then compare with the model answer and try to give a reason in each answer.",
        questions: [
          {
            q: "Do you like travelling? Why, or why not?",
            model: "Yes, I do. I like travelling because I can see new places and meet new people.",
            frames: ["Yes, I do, because ...", "Not really, because ..."]
          },
          {
            q: "Which city or country did you visit on your last trip?",
            model: "Last summer I visited Istanbul with my family. It's a huge city, and we took a boat trip on the Bosphorus.",
            frames: ["Last ... I visited ... with ...", "We took ..."]
          },
          {
            q: "Who do you usually travel with?",
            model: "I usually travel with my family. Sometimes I travel with my school friends, and we have a lot of fun.",
            frames: ["I usually travel with ...", "Sometimes I travel with ..."]
          },
          {
            q: "Which place in Türkiye would you like to visit, and why?",
            model: "I would like to visit Antalya because I love the sea. I can swim, relax on the beach and see the old city.",
            frames: ["I would like to visit ... because ...", "I can also see ... there."]
          },
          {
            q: "Would you prefer a sea holiday or a mountain holiday?",
            model: "I would prefer a sea holiday. I can swim and relax on the beach, and the weather is warm.",
            frames: ["I would prefer a ... holiday.", "I can ... and ..."]
          },
          {
            q: "What do you take in your bag on a day trip?",
            model: "I take water, a sandwich, a camera and my phone. I also take a hat when it's sunny.",
            frames: ["I take ..., ... and ...", "I also take ... when ..."]
          },
          {
            q: "Do you take photos when you travel? What do you do with them?",
            model: "Yes, I do. I take a lot of photos, and I can share the best ones with my friends and family.",
            frames: ["Yes, I do. I take ...", "I can share/keep them ..."]
          },
          {
            q: "Where would you go on the first day of a three-day city trip?",
            model: "I would go to the old city centre first. I can walk around, take photos and find a good place for lunch.",
            frames: ["I would go to ... first.", "I can walk ..., take ... and find ..."]
          }
        ],
        checklist: ["Did you give a reason with because?", "Did you name a real place?", "Did you use can for what you can see or do?"]
      },
      {
        type: "speak",
        title: "About you · Things you can and can't do",
        source: "Unit 1 · Speaking (personal practice), extends Language Awareness c–d (can) · p.30",
        instruction: "Answer each question aloud about yourself. Start with Yes, I can or No, I cannot where it fits, then add a full sentence. Compare with the model answer.",
        questions: [
          {
            q: "Can you swim?",
            model: "Yes, I can. I can swim quite well, but I can't dive yet.",
            frames: ["Yes, I can. I can swim ...", "No, I cannot, but I can ..."]
          },
          {
            q: "Can you cook? What can you make?",
            model: "Yes, I can. I can make pasta and omelettes, but I can't bake a cake yet.",
            frames: ["Yes, I can. I can make ...", "No, I cannot, but I can make ..."]
          },
          {
            q: "Can you play any musical instrument?",
            model: "No, I can't, but I would like to learn the guitar. My cousin can play it very well.",
            frames: ["Yes, I can play the ...", "No, I cannot, but I would like to learn ..."]
          },
          {
            q: "Can you ride a bike? Where do you ride it?",
            model: "Yes, I can. I ride my bike in the park near my house on weekends.",
            frames: ["Yes, I can. I ride my bike ...", "No, I cannot, but I can ..."]
          },
          {
            q: "What can you do really well?",
            model: "I can draw really well. I can also solve maths problems quickly.",
            frames: ["I can ... really well.", "I can also ..."]
          },
          {
            q: "What can't you do yet, but you want to learn?",
            model: "I can't ski yet, but I want to learn. I can try it in winter in the mountains.",
            frames: ["I cannot ... yet, but I want to learn.", "I can try it ..."]
          },
          {
            q: "Can you use a computer to make a video or a presentation?",
            model: "Yes, I can. I can use a computer to make a simple video, and I can use slides for my school projects.",
            frames: ["Yes, I can. I can make ...", "No, I cannot, but my friend can ..."]
          },
          {
            q: "Which sport can you play with your friends?",
            model: "I can play football and basketball with my friends. We play in the school garden after the lessons.",
            frames: ["I can play ... and ...", "We play ... in/at ..."]
          }
        ],
        checklist: ["Did you use can or cannot with a base verb?", "Did you answer yes or no first?", "Did you add one detail?"]
      },
      {
        type: "speak",
        title: "About you · Your online life",
        source: "Unit 1 · Speaking (personal practice), extends Roots and Routes d–e · p.34",
        instruction: "Answer each question aloud about your own use of the Internet. Compare with the model answer and give a reason or example in each answer.",
        questions: [
          {
            q: "How often do you use the Internet?",
            model: "I use the Internet every day, usually in the evening, for about two hours.",
            frames: ["I use the Internet every day/week.", "I usually use it for ..."]
          },
          {
            q: "What is your favourite website or app, and why?",
            model: "My favourite app is a video app because I can watch funny videos and learn new things.",
            frames: ["My favourite app is ... because ...", "I can ... with it."]
          },
          {
            q: "Can you live without your phone for a whole day? Why, or why not?",
            model: "No, I don't think I can. I use my phone to talk to my friends and to check my homework.",
            frames: ["Yes, I can, because ...", "No, I cannot, because I use my phone to ..."]
          },
          {
            q: "Do you use the Internet for your homework? How does it help you?",
            model: "Yes, I do. I can find information quickly, and I can watch videos to understand difficult topics.",
            frames: ["Yes, I do. I can find ...", "It helps me because ..."]
          },
          {
            q: "Do you talk to your friends online? What do you talk about?",
            model: "Yes, I do. We talk about school, music and our plans for the weekend.",
            frames: ["Yes, I do. We talk about ...", "No, I prefer to ..."]
          },
          {
            q: "Is your password strong? What makes a password strong?",
            model: "I think my password is strong. It has letters, numbers and a symbol, and it's long.",
            frames: ["I think my password is ...", "A strong password has ..."]
          },
          {
            q: "What can you do if a stranger sends you a strange message?",
            model: "I can ignore it and block the person. I can also tell my parents or my teacher.",
            frames: ["I can ignore ... and ...", "I can also tell ..."]
          },
          {
            q: "Do you think the Internet is more useful or more dangerous? Why?",
            model: "I think it's more useful, but it can be dangerous. It's important to be careful with personal information.",
            frames: ["I think it is more ..., but ...", "It is important to ..."]
          }
        ],
        checklist: ["Did you use can for what you do online?", "Did you use is or are for opinions?", "Did you give a reason or an example?"]
      },
      {
        type: "speak",
        title: "About you · Meeting an exchange student",
        source: "Unit 1 · Speaking (personal practice), extends Listening/Watching d and Consolidation · pp.26, 35",
        instruction: "Imagine an exchange student joins your class tomorrow. Answer each question aloud, then compare with the model answer and practise the polite phrases.",
        questions: [
          {
            q: "How do you make an exchange student feel welcome at your school?",
            model: "I smile, say hello and offer to help. I can also ask the student to sit with my friends.",
            frames: ["I smile and ...", "I can also ask the student to ..."]
          },
          {
            q: "What questions do you ask a new student from another country?",
            model: "I ask, What is your name? Where are you from? What languages can you speak?",
            frames: ["I ask, What is ...?", "Where are you ...? What can you ...?"]
          },
          {
            q: "What would you do if the exchange student is quiet and looks sad?",
            model: "I would sit with the student and ask easy questions. I can also invite the student to join our group at lunch.",
            frames: ["I would sit with ... and ...", "I can also invite ..."]
          },
          {
            q: "What do you do with an exchange partner on a free afternoon?",
            model: "We can walk around the city, have a snack and take photos. In the evening, we can watch a film.",
            frames: ["We can ... and ...", "In the evening, we can ..."]
          },
          {
            q: "What do you want to know about your partner's country?",
            model: "I want to know the capital city, the weather and the food. I also want to know what tourists can do there.",
            frames: ["I want to know ...", "I also want to know what ..."]
          },
          {
            q: "Can you teach your exchange partner three Turkish words? Which words?",
            model: "Yes, I can. I can teach merhaba, teşekkürler and lütfen. They mean hello, thank you and please.",
            frames: ["Yes, I can. I can teach ...", "They mean ..."]
          },
          {
            q: "How do you feel on the first day at a new school?",
            model: "I feel a little nervous, but I'm also curious. I smile and ask questions, and soon I can make friends.",
            frames: ["I feel ..., but I am also ...", "I smile and ..., and soon I can ..."]
          },
          {
            q: "Would you like to be an exchange student? Which country would you choose?",
            model: "Yes, I would. I would choose Japan because I love its culture, and I would like to see Kyoto and Tokyo.",
            frames: ["Yes, I would. I would choose ... because ...", "No, I would not, because ..."]
          }
        ],
        checklist: ["Did you use polite words (Hello, Nice to meet you, Welcome)?", "Did you use can for what you can do to help?", "Did you ask questions with am, is, are or can?"]
      },
      {
        type: "speak",
        title: "About you · Your favourite country and why",
        source: "Unit 1 · Speaking (personal practice), extends Reading follow-up g–h and Consolidation · pp.33, 35",
        instruction: "Choose one country that you like, apart from Türkiye. Answer each question aloud about it. The model answers talk about Japan, so use your own country and your own reasons.",
        questions: [
          {
            q: "What is your favourite country, apart from Türkiye?",
            model: "My favourite country is Japan. It's an island country in East Asia.",
            frames: ["My favourite country is ...", "It is a country in ..."]
          },
          {
            q: "Why do you like it? Give two reasons.",
            model: "First, the culture is very interesting. Second, the cities are modern, and the nature is beautiful.",
            frames: ["First, ... Second, ...", "I like it because ..."]
          },
          {
            q: "Do you know someone from that country?",
            model: "No, I don't, but I follow a Japanese vlogger online. She shows her city and her food.",
            frames: ["Yes, I do. My friend ... is from ...", "No, I do not, but I ..."]
          },
          {
            q: "Can you tell me the capital of that country and one famous place?",
            model: "Yes, I can. The capital of Japan is Tokyo, and Mount Fuji is a famous place near it.",
            frames: ["The capital of ... is ...", "... is a famous place."]
          },
          {
            q: "Can you say hello in that country's language?",
            model: "Yes, I can. I can say konnichiwa.",
            frames: ["Yes, I can. People say ...", "No, I cannot, but I can say ..."]
          },
          {
            q: "What can you do there that you cannot do at home?",
            model: "I can see cherry blossoms in spring, visit old temples and ride a fast train there. I can't do these things in my city.",
            frames: ["I can ... there.", "I cannot ... at home."]
          },
          {
            q: "When would you like to go, and who would you take with you?",
            model: "I would like to go next spring, and I would take my best friend. We can take a lot of photos together.",
            frames: ["I would like to go in/next ...", "I would take ... with me."]
          },
          {
            q: "How long can you imagine staying in that country: a week, a year or forever?",
            model: "I can imagine staying for a year, but not forever. I would miss my family and my food when I'm far away.",
            frames: ["I can imagine staying for ...", "I would miss ..."]
          }
        ],
        checklist: ["Did you name your country and its capital?", "Did you give two reasons?", "Did you use can for what you can do there?"]
      },
      {
        type: "roleplay",
        title: "Role-play: Spain meets Egypt",
        source: "Unit 1 · Pronunciation e · p.27",
        scenario: "Two students from different countries meet at a school fair and ask about nationality, languages, capital cities and tourist activities.",
        cardA: {
          role: "Carlos or Carla from Spain",
          rows: [
            ["Country / nationality", "Spain / Spanish"],
            ["A tourist attraction", "The Prado Museum in Madrid"],
            ["Languages", "Spanish, English and French"],
            ["Activity", "Row a boat on the lake in Retiro Park"]
          ]
        },
        cardB: {
          role: "Yusuf or Yasmin from Egypt",
          rows: [
            ["Country / nationality", "Egypt / Egyptian"],
            ["A tourist attraction", "The Pyramids of Giza"],
            ["Languages", "Arabic and English"],
            ["Activity", "Sail along the Nile on a felucca"]
          ]
        },
        model: [
          { speaker: "A", text: "Hello! I'm Carlos, and I'm from Spain." },
          { speaker: "B", text: "Hi, Carlos! I'm Yusuf, and I'm from Egypt. Which languages can you speak, and what nationality are you?" },
          { speaker: "A", text: "I'm Spanish, and I can speak Spanish, English and French. How about you?" },
          { speaker: "B", text: "I'm Egyptian, and I can speak Arabic and English. What is the capital of Spain?" },
          { speaker: "A", text: "It's Madrid. Tourists can visit the Prado Museum and row a boat on the lake in Retiro Park. And Egypt?" },
          { speaker: "B", text: "The capital of Egypt is Cairo. Tourists can see the Pyramids of Giza and sail along the Nile on a felucca." },
          { speaker: "A", text: "Amazing! I would love to see the pyramids." },
          { speaker: "B", text: "You're welcome to visit. See you at the fair, Carlos!" }
        ],
        checklist: ["a greeting", "I am ... nationality", "I can speak ... languages", "The capital of ... is ...", "Tourists can ..."]
      },
      {
        type: "roleplay",
        title: "Role-play: Poland meets South Korea",
        source: "Unit 1 · Pronunciation e–f · p.27",
        scenario: "Alina from Poland and Min-su from South Korea meet at a school fair. Use your role card to introduce yourself, then ask about your partner's languages, capital city and tourist activities.",
        cardA: {
          role: "Alina from Poland",
          rows: [
            ["Country / nationality", "Poland / Polish"],
            ["Languages", "Polish and English"],
            ["Capital", "Warsaw"],
            ["Tourists can", "Walk through the Old Town and visit Wilanów Palace"]
          ]
        },
        cardB: {
          role: "Min-su from South Korea",
          rows: [
            ["Country / nationality", "South Korea / Korean"],
            ["Languages", "Korean and English"],
            ["Capital", "Seoul"],
            ["Tourists can", "Visit Gyeongbokgung Palace and go up Namsan Tower"]
          ]
        },
        model: [
          { speaker: "A", text: "Hello! My name is Alina, and I'm from Poland." },
          { speaker: "B", text: "Hi, Alina! I'm Min-su. I'm from South Korea. What is your nationality, and which languages can you speak?" },
          { speaker: "A", text: "I'm Polish, and I can speak Polish and English. And you?" },
          { speaker: "B", text: "I'm Korean, and I can speak Korean and English. What is the capital of Poland, and what can tourists do there?" },
          { speaker: "A", text: "The capital is Warsaw. Tourists can walk through the Old Town and visit Wilanów Palace. What about South Korea?" },
          { speaker: "B", text: "The capital of South Korea is Seoul. Tourists can visit Gyeongbokgung Palace and go up Namsan Tower." },
          { speaker: "A", text: "Great! I would like to visit Seoul one day." }
        ],
        checklist: ["a greeting", "nationality with I am", "languages with I can speak", "the capital city", "tourist activities with can"]
      },
      {
        type: "roleplay",
        title: "Role-play: Türkiye meets Hungary",
        source: "Unit 1 · Pronunciation f · p.27",
        scenario: "At an international school, you and a new friend prepare your own role cards and ask about each other's country. One of you is from Türkiye and the other is from Hungary.",
        cardA: {
          role: "Mehmet or Mine from Türkiye",
          rows: [
            ["Country / nationality", "Türkiye / Turkish"],
            ["Languages", "Turkish and German"],
            ["Capital", "Ankara"],
            ["A tourist attraction", "Hagia Sophia"],
            ["Activity", "Take a boat trip on the Bosphorus"]
          ]
        },
        cardB: {
          role: "Odett or Oszkar from Hungary",
          rows: [
            ["Country / nationality", "Hungary / Hungarian"],
            ["Languages", "Hungarian and English"],
            ["Capital", "Budapest"],
            ["A tourist attraction", "The thermal baths"],
            ["Activity", "Walk beside the river Danube"]
          ]
        },
        model: [
          { speaker: "A", text: "Hello! I'm Mehmet. I'm from Türkiye." },
          { speaker: "B", text: "Hi, Mehmet! I'm Odett, and I'm from Hungary. What languages can you speak?" },
          { speaker: "A", text: "I'm Turkish, and I can speak Turkish and German. And you, Odett? Is Hungarian your first language?" },
          { speaker: "B", text: "Yes, it is, and I can speak English, too. What is the capital of Türkiye, and what can tourists do there?" },
          { speaker: "A", text: "The capital is Ankara. Tourists can visit Hagia Sophia and take a boat trip on the Bosphorus. What about Hungary?" },
          { speaker: "B", text: "The capital of Hungary is Budapest. Tourists can relax in the thermal baths and walk beside the river Danube." },
          { speaker: "A", text: "That sounds wonderful!" },
          { speaker: "B", text: "Thank you! I would like to visit Türkiye next summer." }
        ],
        checklist: ["a greeting", "my country", "my languages", "the capital city", "two things tourists can do"]
      },
      {
        type: "roleplay",
        title: "Role-play: Welcoming a new exchange student",
        source: "Unit 1 · Speaking (personal practice), extends Listening/Watching d · p.26",
        scenario: "It is the first morning of a new exchange student at your school. A student helper meets the new student at the school entrance, asks about the student's name, country and languages, and offers to help.",
        cardA: {
          role: "Student helper at the school entrance",
          rows: [
            ["Your name", "Deniz"],
            ["Your job", "Welcome the new student and offer help"],
            ["Ask about", "Name, country, languages"],
            ["Offer", "Show the way to the classroom and the library"]
          ]
        },
        cardB: {
          role: "New exchange student from Norway",
          rows: [
            ["Your name", "Ingrid"],
            ["Country / nationality", "Norway / Norwegian"],
            ["Languages", "Norwegian and English"],
            ["Need", "Find the Grade 9 classroom"]
          ]
        },
        model: [
          { speaker: "A", text: "Good morning! Welcome to our school. I'm Deniz. What is your name?" },
          { speaker: "B", text: "Hello, Deniz! My name is Ingrid. I'm the new exchange student." },
          { speaker: "A", text: "Nice to meet you, Ingrid! Where are you from?" },
          { speaker: "B", text: "I'm from Norway. I'm Norwegian." },
          { speaker: "A", text: "Great, welcome! What languages can you speak?" },
          { speaker: "B", text: "I can speak Norwegian and English." },
          { speaker: "A", text: "Your English is very good! Can I help you? Which classroom are you looking for?" },
          { speaker: "B", text: "I'm looking for the Grade 9 classroom. Is it far from here?" },
          { speaker: "A", text: "No, it isn't far. It's on the second floor, and I can show you the way. We can see the library on the way, too." },
          { speaker: "B", text: "Thank you very much, Deniz. You're very kind!" }
        ],
        checklist: ["a polite greeting", "What is your name? / Where are you from?", "I am ... (nationality)", "I can speak ... (languages)", "Can I help you?"]
      },
      {
        type: "roleplay",
        title: "Role-play: A tourist asks a local",
        source: "Unit 1 · Speaking (personal practice), extends Language Awareness c–d · p.30",
        scenario: "A tourist is standing near a bus stop in Istanbul and asks a local student what visitors can do in the city. The local student answers, gives two ideas and says what is not allowed.",
        cardA: {
          role: "Tourist from Hungary",
          rows: [
            ["Your name", "Odett"],
            ["Your question", "What is worth seeing in this city?"],
            ["Your interest", "Old buildings and boat trips"],
            ["Ask also", "Can I take photos inside?"]
          ]
        },
        cardB: {
          role: "Local student in Istanbul",
          rows: [
            ["Your city", "Istanbul, Türkiye"],
            ["Idea 1", "Visit Hagia Sophia"],
            ["Idea 2", "Take a boat trip on the Bosphorus"],
            ["Rule", "No flash photos inside old buildings"]
          ]
        },
        model: [
          { speaker: "A", text: "Excuse me, I'm a tourist from Hungary. My name is Odett. Can you help me, please?" },
          { speaker: "B", text: "Of course! Welcome to Istanbul. What would you like to know?" },
          { speaker: "A", text: "What is worth seeing in this city? I like old buildings and boat trips." },
          { speaker: "B", text: "You can visit Hagia Sophia. It's a very old and beautiful building." },
          { speaker: "A", text: "That sounds great! Can I take photos inside?" },
          { speaker: "B", text: "Yes, you can take photos, but you can't use a flash. You can also take a boat trip on the Bosphorus." },
          { speaker: "A", text: "Wonderful! Is the boat trip long?" },
          { speaker: "B", text: "It isn't very long. It's about one and a half hours." },
          { speaker: "A", text: "Thank you very much for your help! Goodbye!" },
          { speaker: "B", text: "You're welcome. Enjoy your day, Odett!" }
        ],
        checklist: ["Excuse me and a polite question", "What is worth seeing ...?", "You can ... / You cannot ...", "two ideas for tourists", "thanks and goodbye"]
      },
      {
        type: "speak",
        title: "Say more · Give a reason",
        source: "Unit 1 · Speaking (exam practice)",
        instruction: "Answer each question in two sentences: first an answer, then a reason with because. Use the frames to help you, then listen to the model answer.",
        questions: [
          {
            q: "Which place in your town is good for tourists, and why?",
            model: "Tourists can visit Pamukkale near my town, because the white terraces are beautiful. They can take photos there and walk around the ancient ruins at Hierapolis.",
            frames: ["Tourists can visit ...", "... because ...", "They can ..."]
          },
          {
            q: "Which language would you like to learn, and why?",
            model: "I'd like to learn Japanese, because Japan is my favourite country. I can speak Turkish and English, and I can say a few words in German, but I can't speak Japanese yet.",
            frames: ["I'd like to learn ...", "... because ...", "I can ..., but I can't ..."]
          },
          {
            q: "Why is your school a good school?",
            model: "My school is a good school because it's in the city centre, next to a park. The teachers are friendly, and students can play football and basketball at break.",
            frames: ["My school is good because ...", "It's ... next to ...", "Students can ..."]
          },
          {
            q: "Can you ski? Say why or why not.",
            model: "No, I can't ski yet, because it's a new sport for me. But I can play football and basketball, and I'd like to learn to ski one day.",
            frames: ["No, I can't ... because ...", "But I can ...", "I'd like to learn ..."]
          },
          {
            q: "What is your favourite place at school, and why?",
            model: "My favourite place is the library, because it's quiet and I can read my favourite books there. It's also a good place to do my homework.",
            frames: ["My favourite place is ... because ...", "I can ... there.", "It's a good place to ..."]
          },
          {
            q: "Which city in Türkiye would you like to visit, and why?",
            model: "I'd like to visit Antalya, because it's by the sea. Tourists can take a boat trip, walk around the old town and take photos of the beautiful beaches.",
            frames: ["I'd like to visit ... because ...", "Tourists can ...", "It's ..."]
          },
          {
            q: "Which country is your favourite, and why?",
            model: "My favourite country is Japan, because it's very interesting. Tourists can see ancient temples and modern cities there, and they can take beautiful photos.",
            frames: ["My favourite country is ... because ...", "Tourists can see ...", "They can ..."]
          },
          {
            q: "Who is a good friend in your class, and why?",
            model: "Ahmet is a good friend, because he's funny and he's always kind to me. He can play the guitar, and he can teach me a song.",
            frames: ["... is a good friend because ...", "He/She can ...", "He's/She's ..."]
          }
        ],
        checklist: ["I gave an answer and a reason with because", "I used be or can/can't correctly", "I spoke in two clear sentences"]
      },
      {
        type: "speak",
        title: "Exam talk · One-minute talks",
        source: "Unit 1 · Speaking (exam practice)",
        instruction: "Plan for 30 seconds, then speak for one minute. Use the cue words in order, one after the other, and then listen to the model talk.",
        questions: [
          {
            q: "Talk for one minute: introduce yourself and your town to a new exchange student.",
            cues: ["your name, age and town", "the languages you can speak", "what visitors can see and do in your town", "one thing you like about it"],
            seconds: 60,
            model: "Hello, I'm Elif. I'm fifteen, and I live in Denizli, a city in the south-west of Türkiye. I can speak Turkish and English, and I can say a few words in German. Visitors can see Pamukkale, take photos of the white terraces and walk around the ancient ruins at Hierapolis. They can't wear shoes on the terraces, but they can walk there in bare feet. I like Denizli because the people are friendly. Welcome!",
            frames: ["Hello, I'm ... I live in ...", "I can speak ...", "Visitors can ...", "I like ... because ..."]
          },
          {
            q: "Talk for one minute: tell a visitor about your school and what you can do there.",
            cues: ["the name and place of your school", "your favourite place there", "what you can do at school", "one thing you can't do"],
            seconds: 60,
            model: "Hello, I'm Elif, and I'm a student at Atatürk High School. It's in the city centre, next to a park. My favourite place at school is the library, because it's quiet. I can read there, and I can do my homework with my friend Zeynep. She's very good at maths! We can play football and basketball at break, but we can't use our phones in class. I like my school because the teachers and the students are friendly.",
            frames: ["My school is ... It's next to ...", "My favourite place is ... because ...", "We can ...", "We can't ..."]
          },
          {
            q: "Talk for one minute: tell a friend about a country you know and what tourists can do there.",
            cues: ["the country and its capital", "the language people speak", "what tourists can see and do", "one thing tourists can't do"],
            seconds: 60,
            model: "My favourite country is Japan. The capital is Tokyo, and people speak Japanese there. I can't speak Japanese yet, but I'd like to learn it. Tourists can see ancient temples, visit big museums and take photos of Mount Fuji. They can ride fast trains, too. They can't wear shoes inside some temples, so it's a good idea to wear clean socks. I'd like to visit Japan one day because it's so interesting.",
            frames: ["My favourite country is ... The capital is ...", "People speak ...", "Tourists can ...", "They can't ... but ..."]
          },
          {
            q: "Talk for one minute: say what you can and can't do in your free time.",
            cues: ["sports you can play", "something you can do for your family or friends", "something you can't do yet", "something you'd like to learn"],
            seconds: 60,
            model: "In my free time I can play football and basketball with my friends. I'm not a champion, but I'm quite good! I can also help my little brother with his homework, because he's only eleven. I can't ski yet, and I can't speak Japanese, but I'd like to learn both. Japan is my favourite country, and I'd like to visit it one day. What can you do in your free time?",
            frames: ["I can play ... with ...", "I can also ...", "I can't ... yet.", "I'd like to learn ... because ..."]
          }
        ],
        checklist: ["I covered all the cue words", "I used can and can't", "I spoke in full sentences", "I kept a steady speed"]
      }
    ]
  }
});
