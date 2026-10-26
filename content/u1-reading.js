window.unitContent = window.unitContent || [];
window.unitContent[0] = Object.assign(window.unitContent[0] || {}, {
  reading: {
    activities: [
      {
        type: "reading", title: "Reading 1 · A vlogger's trip", passageTitle: "Nora's big trip",
        passage: "Nora is a travel vlogger who films her journeys and shares them online. Her newest video follows a trip of about two months. It begins in Chile, where she speaks Spanish with local people, goes sightseeing in Santiago and photographs people in traditional clothes. From there she goes to Peru. In Lima she meets her Peruvian friend Isabel, and together they visit the ancient ruins of Machu Picchu and take a day trip to the Amazon. A few days later Nora flies to Northern Cyprus, where she eats in the restaurants of Büyük Han in Lefkoşa and tries the local food. Next comes a long stretch through the Turkic states. In Baku she looks at monuments honouring the poets Vahid and Fuzuli and practises her Azerbaijani. In Tashkent she meets some Uzbek friends, then tours Independence Square and the Amir Timur Museum. In Ashgabat she explores Nisa, a historical site of the Parthian Empire, and admires the carpets in the Turkmen Carpet Museum. In Astana she meets a Kazakh friend, Tomiris, and tastes Kazakh food. In Bishkek she goes shopping at Osh Bazaar, a great place for cheese, meat and spices. Her last stop is Thailand, where she tours the Grand Palace, whose golden towers are famous, and enjoys Thai food in Bangkok. Where she will go next is still a secret, which makes her videos even more fun to watch.",
        questions: [
          { prompt: "Which title suits Nora's story best?", options: ["Tips for beginner vloggers", "A journey across several countries", "The best places for a day trip", "How to learn Spanish quickly"], answer: 1, why: "The passage follows one trip through many countries, so a journey title fits best." },
          { prompt: "What do Nora and Isabel do in Peru?", options: ["They go shopping in a busy bazaar and taste local cheese.", "They see the ruins of Machu Picchu and take a trip to the Amazon.", "They visit a carpet museum and a historical site of an old empire.", "They practise Azerbaijani with some local poets."], answer: 1, why: "The passage says they visit Machu Picchu and take a day trip to the Amazon." },
          { prompt: "Which place does Nora visit straight after Peru?", options: ["Thailand", "Baku", "Northern Cyprus", "Tashkent"], answer: 2, why: "After Peru she flies to Northern Cyprus, and only later goes to the Turkic states." },
          { prompt: "In the passage, the word sightseeing means:", options: ["visiting famous or interesting places", "learning a foreign language", "buying local food at a market", "meeting old friends at the airport"], answer: 0, why: "Goes sightseeing in Santiago means she visits the interesting places of the city." },
          { prompt: "What can we infer about Nora from her stops in the Turkic states?", options: ["She would rather stay in her hotel and avoid meeting local people.", "She wants to stay in one city for several months.", "She dislikes trying unfamiliar food and customs.", "She enjoys meeting local people and learning about their culture."], answer: 3, why: "She meets friends, practises languages and visits museums and bazaars, which shows she likes local culture." },
          { prompt: "What does the last sentence suggest about Nora's viewers?", options: ["They already know exactly where she will go next.", "They are bored with her videos and have stopped watching.", "They cannot guess her next destination, which adds to the fun.", "They want her to stop travelling and stay at home."], answer: 2, why: "Her next destination is still a secret, so watching her videos is exciting." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Tick the cities", source: "Unit 1 · Vocabulary c · p.28",
        instruction: "Read Nora's trip again. Did she visit each city?",
        items: [
          { prompt: "Route tick: Santiago", options: ["Visited", "Not visited"], answer: "Visited", why: "She goes sightseeing in Santiago at the start of her trip in Chile." },
          { prompt: "Route tick: Lima", options: ["Visited", "Not visited"], answer: "Visited", why: "She meets her friend Isabel in Lima." },
          { prompt: "Route tick: Ankara", options: ["Visited", "Not visited"], answer: "Not visited", why: "Ankara is not on her route; the Turkish Cypriot city she visits is Lefkoşa." },
          { prompt: "Route tick: Baku", options: ["Visited", "Not visited"], answer: "Visited", why: "She looks at monuments of poets and practises Azerbaijani in Baku." },
          { prompt: "Route tick: Prague", options: ["Visited", "Not visited"], answer: "Not visited", why: "Prague is never mentioned; her trip does not go through the Czech Republic." },
          { prompt: "Route tick: Lisbon", options: ["Visited", "Not visited"], answer: "Not visited", why: "Lisbon is not on her route." },
          { prompt: "Route tick: Astana", options: ["Visited", "Not visited"], answer: "Visited", why: "She meets her Kazakh friend Tomiris in Astana." },
          { prompt: "Route tick: Bangkok", options: ["Visited", "Not visited"], answer: "Visited", why: "She enjoys Thai food and sees the Grand Palace in Bangkok." },
          { prompt: "Route tick: Munich", options: ["Visited", "Not visited"], answer: "Not visited", why: "Munich is not on her route." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Fill in the route", source: "Unit 1 · Vocabulary g · p.29",
        instruction: "Complete each sentence about Nora's trip with one word or name from the word bank. One or more words are extra.",
        wordBank: ["Chile", "Machu Picchu", "Cyprus", "poets", "Osh", "historical", "Thailand", "Palace", "castle", "Peru"],
        items: [
          { prompt: "Nora's trip begins in ___, where she practises her Spanish.", answer: "Chile", why: "The first country on her route is Chile." },
          { prompt: "In Lima, Nora and her friend visit the ancient ruins of ___.", answer: "Machu Picchu", why: "Machu Picchu is the ancient site they explore in Peru." },
          { prompt: "After Peru, Nora flies to Northern ___ and eats local food in Lefkoşa.", answer: "Cyprus", why: "Lefkoşa is in Northern Cyprus." },
          { prompt: "In Baku, Nora looks at monuments of famous ___.", answer: "poets", why: "The monuments are for the poets Vahid and Fuzuli." },
          { prompt: "In Bishkek, Nora goes shopping at ___ Bazaar.", answer: "Osh", why: "The market in Bishkek is Osh Bazaar." },
          { prompt: "Nisa in Ashgabat is a ___ site of the Parthian Empire.", answer: "historical", why: "A historical site is a place that is important in history." },
          { prompt: "The last country on Nora's route is ___.", answer: "Thailand", why: "She finishes her trip in Thailand." },
          { prompt: "In Bangkok, Nora sees the golden towers of the Grand ___.", answer: "Palace", why: "The Grand Palace is famous for its golden towers." }
        ]
      },
      {
        type: "reading", title: "Reading 2 · A warm country", passageTitle: "Where Asia meets Europe",
        passage: "The Turkic states are full of unique traditions, rich history and places that many tourists do not know well, so they are perfect for travellers who want something authentic, that is, real places and customs that are not made only for visitors. One of the best choices is Azerbaijan, a country where visitors can have a really memorable holiday. Azerbaijan lies where Western Asia meets Eastern Europe, with the Caspian Sea to the east and the Caucasus Mountains to the north. Nature fans can see mud volcanoes, hot springs and Yanar Dağ, a fire that burns naturally on a hillside near the Caspian coast. The capital, Baku, has several UNESCO World Heritage Sites, among them the Maiden Tower, the Palace of the Shirvanshahs and the Walled City. Visitors can enjoy art, culture and the busy life of a modern business city, where old buildings stand next to glass skyscrapers. Food is another highlight: the varied dishes mirror the country's past as a stop on the Silk Road, where traders swapped goods and ideas. Finally, the local people are so welcoming that tourists feel at home even if they do not know a single Azerbaijani word.",
        questions: [
          { prompt: "Which title is the best for this passage?", options: ["How to build a skyscraper", "The history of the Caspian Sea", "Azerbaijan: a welcoming country worth visiting", "Why tourists should avoid big cities"], answer: 2, why: "The text presents Azerbaijan's nature, capital, food and people as reasons to visit." },
          { prompt: "Which of these is a natural wonder mentioned in the passage?", options: ["Yanar Dağ", "The Maiden Tower", "The Walled City", "The Silk Road"], answer: 0, why: "Yanar Dağ is a natural fire on a hillside; the others are buildings or a trade route." },
          { prompt: "According to the passage, what do Azerbaijan's varied dishes reflect?", options: ["The fact that the country has no farms", "The country's past as a stop on the Silk Road", "The recipes that tourists bring with them", "The modern restaurants of Baku"], answer: 1, why: "The passage says the dishes mirror the country's past on the Silk Road." },
          { prompt: "In the passage, the word authentic means:", options: ["very expensive", "new and modern", "very crowded", "real and not copied"], answer: 3, why: "The passage explains it as real places and customs, not made only for visitors." },
          { prompt: "What can we conclude about tourists who do not speak Azerbaijani?", options: ["They cannot enjoy their visit.", "They must take a guide everywhere.", "They can still feel at home because the people are welcoming.", "They are not allowed into Baku."], answer: 2, why: "The last sentence says tourists feel at home even without a single Azerbaijani word." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · Country, capital, nationality", source: "Unit 1 · Language Awareness b · p.30",
        instruction: "Scan the passage about Azerbaijan and write the missing information.",
        items: [
          { prompt: "Scan task: the country described in the passage is ___.", answer: "Azerbaijan", why: "The passage is about Azerbaijan." },
          { prompt: "Scan task: the capital city of this country is ___.", answer: "Baku", why: "Baku is named as the capital." },
          { prompt: "Scan task: the nationality of the people who live there is ___.", answer: "Azerbaijani", why: "The people of Azerbaijan are Azerbaijani." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · True, False or Not mentioned", source: "Unit 1 · Language Awareness c · p.30",
        instruction: "Choose True, False or Not mentioned according to the passage about Azerbaijan.",
        items: [
          { prompt: "Azerbaijan lies where Western Asia meets Eastern Europe.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The passage gives exactly this position." },
          { prompt: "The Walled City of Baku is a UNESCO World Heritage Site.", options: ["True", "False", "Not mentioned"], answer: "True", why: "It is listed among the World Heritage Sites of Baku." },
          { prompt: "Visitors need to speak Azerbaijani to enjoy their trip.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The passage says tourists feel at home even without a single Azerbaijani word." },
          { prompt: "A ticket to the Maiden Tower costs less than a ticket to a museum.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage never talks about ticket prices." },
          { prompt: "Baku is described as a place with both old buildings and skyscrapers.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Old buildings stand next to glass skyscrapers in the passage." }
        ]
      },
      {
        type: "reading", title: "Reading 3 · Somewhere far away", passageTitle: "Chile at a glance",
        passage: "(A) Chile lies in the west of South America. It is a long, narrow country squeezed between the Andes Mountains and the Pacific Ocean, and its southern end is close to Antarctica. Its neighbours are Argentina, Peru and Bolivia, so a trip to Chile can easily include visits to these countries too. (B) Because Chile is so long, its weather changes a great deal from north to south. This explains why it has one of the driest deserts on Earth as well as glaciers that are thousands of years old. Together with its ancient ruins, varied landscapes and rich cultural heritage, this contrast makes Chile special. (C) Torres del Paine National Park is full of rivers, lakes, glaciers and green forests, so nature lovers can walk and trek there. The Atacama Desert and Chiloé Island offer very different adventures. (D) Santiago, the capital and biggest city, lies in a valley ringed by snowy peaks. Visitors can try sports such as snowboarding, climbing and hiking. In a single day, a traveller can ski on the slopes of the Andes, relax on a beach and surf the Pacific waves. (E) The official language is Spanish, although some Chileans also speak English. Chileans are known for being warm and welcoming. Most of them have European or indigenous roots, and the Mapuche are the largest indigenous group, so Chilean culture is a rich mixture of both.",
        questions: [
          { prompt: "Which title would suit this text about Chile best?", options: ["How to learn Spanish in Santiago", "The history of the Mapuche people", "Chile: a long country with surprising variety", "A skiing holiday in the Andes"], answer: 2, why: "Every paragraph shows a different side of Chile's geography, nature or people." },
          { prompt: "Why does Chile have such a wide range of weather?", options: ["It is an island in the Pacific Ocean.", "It is very long from north to south.", "It has no mountains at all.", "It is very close to Peru."], answer: 1, why: "Paragraph B says the great length of the country causes the changing weather." },
          { prompt: "What can visitors do in Torres del Paine National Park?", options: ["Ski in the mountains and surf in the sea in one day", "Visit the biggest shopping centre in the country", "Walk and trek among lakes, glaciers and forests", "Study the Mapuche language and traditions"], answer: 2, why: "Paragraph C describes hiking and trekking in the park's natural scenery." },
          { prompt: "Skiing and surfing are possible on the same day near Santiago. What does this suggest?", options: ["The winters in Santiago are always very warm.", "Both the mountains and the ocean are within reach of the capital.", "Surfing is more popular than skiing in the whole country.", "Santiago is too far away from any mountain."], answer: 1, why: "Doing both on one day is only possible if mountains and sea are close to Santiago." },
          { prompt: "In paragraph B, the word contrast means:", options: ["a long journey", "a kind of mountain", "a traditional festival", "a clear difference between two things"], answer: 3, why: "Deserts and glaciers in one country show a strong difference, which is a contrast." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · What is each paragraph about?", source: "Unit 1 · Reading b · p.32",
        instruction: "Read the passage quickly and choose the topic of each paragraph.",
        items: [
          { prompt: "Paragraph A mainly describes:", options: ["the people and their language", "why the weather is so varied", "the country's position and neighbours", "sports around the capital"], answer: "the country's position and neighbours", why: "Paragraph A gives the location and the neighbouring countries." },
          { prompt: "Paragraph B mainly describes:", options: ["why the climate varies so much", "nature parks for hiking", "the capital and its valley", "the official language"], answer: "why the climate varies so much", why: "Paragraph B explains the length of the country and the contrasts it creates." },
          { prompt: "Paragraph C mainly describes:", options: ["the neighbouring countries", "the culture of the Mapuche", "winter sports in a big city", "wild places for walking and trekking"], answer: "wild places for walking and trekking", why: "Paragraph C is about Torres del Paine, the Atacama Desert and Chiloé Island." },
          { prompt: "Paragraph D mainly describes:", options: ["glaciers and deserts", "Santiago and its sports", "European history", "the weather in the north"], answer: "Santiago and its sports", why: "Paragraph D is about the capital and the activities near it." },
          { prompt: "Paragraph E mainly describes:", options: ["mountains and rivers", "the continent of Antarctica", "the language and people of Chile", "winter sports and surfing"], answer: "the language and people of Chile", why: "Paragraph E covers Spanish, English and the Chilean people and culture." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Why questions", source: "Unit 1 · Reading g · p.33",
        instruction: "Choose the best answer to each question about Chile.",
        items: [
          { prompt: "Text check: how does the long shape of Chile affect its geography?", options: ["It makes the whole country a flat, green plain with a single climate.", "It gives the country deserts, glaciers and many landscapes.", "It keeps the country free of mountains.", "It makes the weather the same everywhere."], answer: "It gives the country deserts, glaciers and many landscapes.", why: "The varied climate creates a driest desert, old glaciers and different landscapes." },
          { prompt: "Text check: what opportunities do Chile's tourist attractions offer?", options: ["Only quiet days in a hotel in the capital", "Shopping trips to nearby countries", "Study courses in the Spanish language", "Hiking, trekking, skiing and surfing"], answer: "Hiking, trekking, skiing and surfing", why: "The passage names hiking, trekking, skiing and surfing among the activities." },
          { prompt: "Text check: why can a trip to Chile easily include other countries?", options: ["Chile is close to Argentina, Peru and Bolivia.", "Chile is an island far out in the Atlantic Ocean.", "Chile has no borders with any other country.", "Chile is right next to Europe and Asia."], answer: "Chile is close to Argentina, Peru and Bolivia.", why: "Paragraph A says its neighbours are Argentina, Peru and Bolivia." },
          { prompt: "Text check: where do most Chileans have their roots?", options: ["Mostly in Asia and in Africa", "Only in the cold lands of Antarctica", "Europe and indigenous peoples, mostly the Mapuche", "Only in Peru and Bolivia, across the border"], answer: "Europe and indigenous peoples, mostly the Mapuche", why: "Paragraph E describes a mix of European and indigenous roots." }
        ]
      },
      {
        type: "reading", title: "Reading 4 · A safer digital world", passageTitle: "Life online, risks online",
        passage: "The Internet makes modern life easier. People can study, work from home, take part in meetings, run a business, buy travel tickets, order food or pay bills without leaving the house. These tasks save time, so there is more room for family and rest. However, going online also means sharing personal information, and this brings risks. Hackers may steal that data and misuse it, or they may harm computer systems and cause serious trouble in daily life. For this reason, nations depend on specialists who are able to defend computer networks and keep data secure. Türkiye is answering this need with many cybersecurity vocational schools. Their students learn to recognise online threats, stop attacks and protect systems. Many of these schools are inside technoparks, which are centres for research and business where universities and companies cooperate. There, students work with professionals and gain real experience. Graduates rarely struggle to find a job, because hospitals, banks, schools, state institutions, cybersecurity firms and many private businesses all need specialists. Türkiye's aim in funding this training is simple: an online life that is safer for ordinary people and for companies.",
        questions: [
          { prompt: "What is the main idea of the passage?", options: ["Türkiye teaches students to use social media and online marketing.", "Türkiye is training cybersecurity experts to protect people and businesses online.", "Most people think the Internet is too dangerous to use at home.", "Hackers are the most successful workers in Türkiye."], answer: 1, why: "The text explains the online risks and Türkiye's schools that train experts against them." },
          { prompt: "Where are many cybersecurity vocational schools located?", options: ["Inside government ministries", "In large hospital buildings", "In private homes", "Inside technoparks"], answer: 3, why: "The passage says many of the schools are inside technoparks." },
          { prompt: "Why do countries need cybersecurity experts?", options: ["To build more websites for online shopping and games", "To make the Internet slower for all of its users", "To defend computer networks and keep data secure", "To stop people from working at home"], answer: 2, why: "Experts are needed because hackers may steal data and harm systems." },
          { prompt: "Why is it useful for students to study in technoparks?", options: ["They do not have to attend any lessons at their own schools.", "They work with professionals and gain experience.", "They can finish their studies earlier than other students.", "They only meet other students of the same age and level."], answer: 1, why: "The passage says students work with professionals there and gain real experience." },
          { prompt: "In the passage, the word threats means:", options: ["tasks that help people save time at home", "kinds of online shopping for travellers", "people who work in banks and offices", "things that may cause harm"], answer: 3, why: "Online threats are dangers such as attacks and data theft." },
          { prompt: "What does the last sentence suggest about Türkiye's reason for investing in this training?", options: ["It wants to sell its computer systems to other countries.", "It wants to make online services more expensive for users.", "It wants its citizens and businesses to be safer online.", "It wants fewer people to use the Internet at home."], answer: 2, why: "The text says the aim is a safer online life for ordinary people and companies." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · True, False or Not mentioned", source: "Unit 1 · Roots and Routes c · p.34",
        instruction: "Choose True, False or Not mentioned according to the passage about cybersecurity schools.",
        items: [
          { prompt: "Students at these schools learn how to protect digital systems.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The passage says they learn to recognise threats, stop attacks and protect systems." },
          { prompt: "Türkiye has only a few cybersecurity vocational schools.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The passage says Türkiye has many such schools." },
          { prompt: "Students must study programming for a year before they can join a school.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage does not say anything about entry requirements." },
          { prompt: "Graduates can find work in banks and hospitals.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Banks and hospitals are named among the places that need specialists." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · Short answers", source: "Unit 1 · Roots and Routes d · p.34",
        instruction: "Choose the best short answer to each question about the passage.",
        items: [
          { prompt: "According to the passage, why is the Internet important in everyday life?", options: ["It replaces schools and hospitals completely.", "It lets people do many tasks quickly from home.", "It makes people share less personal information.", "It is only useful for large businesses."], answer: "It lets people do many tasks quickly from home.", why: "Paying bills, working and studying online save time, as the passage says." },
          { prompt: "According to the passage, what can happen when people share personal information online?", options: ["Their computers become much faster.", "They always receive free travel tickets.", "Their data is deleted automatically after a week.", "Hackers may steal the data and misuse it."], answer: "Hackers may steal the data and misuse it.", why: "Cyberattacks and data theft are the risks named in the passage." },
          { prompt: "According to the passage, why is it good for students to be in technoparks while studying?", options: ["They can avoid taking exams.", "They can travel abroad every week.", "They meet professionals and gain real experience.", "They can sell their own computers."], answer: "They meet professionals and gain real experience.", why: "Technoparks bring universities and companies together, so students meet professionals." }
        ]
      },
      {
        type: "reading", title: "B1 Reading · Extra hard", passageTitle: "The exchange-day map",
        passage: "On the first Monday of a partner-school exchange, 9B expected to follow the timetable printed in the welcome pack. The plan changed when the visiting students arrived late, so teacher Ms Arslan asked small groups to guide them around the building. Ece volunteered, although she had never led a tour in English before. She could explain where the library and science rooms were, but she was unsure how to describe the new sports hall. Instead of pretending, she asked a classmate who knew the building well to help. The visitors later said that this made the tour easier to follow. At lunch, Ece discovered that two guests could speak Turkish, so they compared school routines in both languages. By the end of the day, she understood that being a good guide did not mean knowing every answer; it meant helping people find one.",
        questions: [
          { prompt: "Why did Ms Arslan ask students to guide the visitors?", options: ["The printed timetable had been cancelled permanently.", "The visitors arrived late, so the original plan had to change.", "The guests could not understand any English.", "Ece had already worked as a professional guide."], answer: 1, why: "The passage says the late arrival changed the plan, so students guided small groups." },
          { prompt: "What can be inferred about Ece when she asks a classmate for help?", options: ["She would rather avoid speaking to visitors.", "She recognises when another person can help her give accurate information.", "She thinks the sports hall should be removed from the tour.", "She expects visitors to know the school already."], answer: 1, why: "Ece is unsure about one building and seeks help instead of pretending to know." },
          { prompt: "What does the final sentence suggest about being a good guide?", options: ["A guide should memorise every detail before meeting visitors.", "A guide should speak only the visitors' first language.", "A guide can be helpful by finding reliable answers, even without knowing everything.", "A guide should let visitors explore the school without support."], answer: 2, why: "The conclusion contrasts knowing every answer with helping visitors find one." }
        ]
      }
    ]
  }
});
