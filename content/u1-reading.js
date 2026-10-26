window.unitContent = window.unitContent || [];
window.unitContent[0] = Object.assign(window.unitContent[0] || {}, {
  reading: {
    activities: [
      {
        type: "reading", title: "Reading 1 · A vlogger's trip", passageTitle: "Nora's big trip",
        passage: "Nora is a travel vlogger who films her journeys and shares them online. Her newest video follows a trip of about two months. It begins in Chile, where she speaks Spanish with local people, goes sightseeing in Santiago and photographs people in traditional clothes. From there she goes to Peru. In Lima she meets her Peruvian friend Isabel, and together they visit the ancient ruins of Machu Picchu and take a day trip to the Amazon. A few days later Nora flies to Northern Cyprus, where she eats in the restaurants of Büyük Han in Lefkoşa and tries the local food. Next comes a long stretch through the Turkic states. In Baku she looks at the monuments of the poets Vahid and Fuzuli and practises her Azerbaijani. In Tashkent she meets Uzbek friends and visits the Amir Timur Museum and Independence Square. In Ashgabat she explores Nisa, a historical site of the Parthian Empire, and admires the carpets in the Turkmen Carpet Museum. In Astana she meets a Kazakh friend, Tomiris, and tastes Kazakh food. In Bishkek she goes shopping at Osh Bazaar, a great place for cheese, meat and spices. Her last stop is Thailand, where she tours the Grand Palace, which is known for its golden towers, and enjoys Thai food in Bangkok. Nobody knows where her next trip will be, which makes her videos even more fun to watch.",
        questions: [
          { prompt: "Which title suits Nora's story best?", options: ["Tips for beginner vloggers", "A journey across several countries", "The best places for a day trip", "How to learn Spanish quickly"], answer: 1, why: "The passage follows one trip through many countries, so a journey title fits best." },
          { prompt: "What do Nora and Isabel do in Peru?", options: ["They visit the ruins of Machu Picchu and go on a day trip to the Amazon.", "They go shopping in a bazaar and taste cheese.", "They visit a carpet museum and a historical site.", "They practise Azerbaijani with poets."], answer: 0, why: "The passage says they visit Machu Picchu and take a day trip to the Amazon." },
          { prompt: "Which place does Nora visit straight after Peru?", options: ["Thailand", "Baku", "Northern Cyprus", "Tashkent"], answer: 2, why: "After Peru she flies to Northern Cyprus, and only later goes to the Turkic states." },
          { prompt: "In the passage, the word sightseeing means:", options: ["visiting famous or interesting places", "learning a foreign language", "buying local food at a market", "meeting old friends at the airport"], answer: 0, why: "Goes sightseeing in Santiago means she visits the interesting places of the city." },
          { prompt: "What can we infer about Nora from her stops in the Turkic states?", options: ["She prefers to travel alone and avoid local people.", "She enjoys meeting local people and learning about their culture.", "She wants to stay in one city for a long time.", "She dislikes trying new food."], answer: 1, why: "She meets friends, practises languages and visits museums and bazaars, which shows she likes local culture." },
          { prompt: "What does the last sentence suggest about Nora's viewers?", options: ["They already know where she will go next.", "They are bored with her videos.", "They cannot guess her next destination, which adds to the fun.", "They want her to stop travelling."], answer: 2, why: "Nobody knows where her next trip will be, so watching her videos is exciting." }
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
        type: "reading", title: "Reading 2 · A warm country", passageTitle: "Azerbaijan: a welcoming country",
        passage: "The Turkic states are full of unique traditions, rich history and places that many tourists do not know well, so they are perfect for travellers who want something authentic. One of the best choices is Azerbaijan, a country where visitors can have a really memorable holiday. Azerbaijan lies where Western Asia meets Eastern Europe, between the Caucasus Mountains and the Caspian Sea. Nature fans can see mud volcanoes, hot springs and Yanar Dağ, a fire that burns naturally on a hillside near the Caspian coast. The capital, Baku, has several UNESCO World Heritage Sites, such as the Walled City, the Palace of the Shirvanshahs and the Maiden Tower. Visitors can enjoy art, culture and the busy life of a modern business city, where old buildings stand next to glass skyscrapers. Food is another highlight. Azerbaijani dishes are varied and tasty because the country was once an important stop on the Silk Road, where traders exchanged goods and ideas. Finally, the local people are so welcoming that tourists feel at home even if they do not know a single Azerbaijani word.",
        questions: [
          { prompt: "Which title is the best for this passage?", options: ["Azerbaijan: a welcoming country worth visiting", "How to build a skyscraper", "The history of the Caspian Sea", "Why tourists should avoid big cities"], answer: 0, why: "The text presents Azerbaijan's nature, capital, food and people as reasons to visit." },
          { prompt: "Which of these is a natural wonder mentioned in the passage?", options: ["Yanar Dağ", "The Maiden Tower", "The Walled City", "The Silk Road"], answer: 0, why: "Yanar Dağ is a natural fire on a hillside; the others are buildings or a trade route." },
          { prompt: "Why is Azerbaijani food so varied?", options: ["The country has no farms.", "The country was once an important stop on the Silk Road.", "Tourists bring their own recipes.", "Baku has only modern restaurants."], answer: 1, why: "The passage links the variety of dishes to the country's role on the Silk Road." },
          { prompt: "In the passage, the word authentic means:", options: ["very expensive", "real and not copied", "new and modern", "difficult to find"], answer: 1, why: "Travellers who want authentic places look for real traditions, not copies." },
          { prompt: "What can we conclude about tourists who do not speak Azerbaijani?", options: ["They cannot enjoy their visit.", "They must take a guide everywhere.", "They can still feel comfortable because the people are welcoming.", "They are not allowed into Baku."], answer: 2, why: "The last sentence says tourists feel at home even without a single Azerbaijani word." }
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
          { prompt: "Azerbaijan lies between the Caucasus Mountains and the Caspian Sea.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The passage gives exactly this position." },
          { prompt: "The Walled City of Baku is a UNESCO World Heritage Site.", options: ["True", "False", "Not mentioned"], answer: "True", why: "It is listed among the World Heritage Sites of Baku." },
          { prompt: "Visitors need to speak Azerbaijani to enjoy their trip.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The passage says tourists feel at home even without a single Azerbaijani word." },
          { prompt: "A ticket to the Maiden Tower costs less than a ticket to a museum.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage never talks about ticket prices." },
          { prompt: "Baku is described as a place with both old buildings and skyscrapers.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Old buildings stand next to glass skyscrapers in the passage." }
        ]
      },
      {
        type: "reading", title: "Reading 3 · Somewhere far away", passageTitle: "Chile: a long country with many faces",
        passage: "(A) Chile lies in the west of South America. It is a long, narrow country squeezed between the Andes Mountains and the Pacific Ocean, and its southern end is close to Antarctica. Its neighbours are Argentina, Peru and Bolivia, so a trip to Chile can easily include visits to these countries too. (B) Because Chile is so long, its weather changes a great deal from north to south. This explains why it has one of the driest deserts on Earth as well as glaciers that are thousands of years old. Together with its ancient ruins, varied landscapes and rich cultural heritage, this contrast makes Chile special. (C) Nature lovers can walk and trek in Torres del Paine National Park, which has lakes, glaciers, green forests and rivers. The Atacama Desert and Chiloé Island offer very different adventures. (D) The capital and biggest city, Santiago, sits in a valley with snowy mountains all around it. Visitors can try snowboarding, climbing and hiking there. On the same day, they can ski in the Andes, walk on a beach and surf in the Pacific Ocean. (E) The official language is Spanish, although some Chileans also speak English. Chileans are friendly, kind and welcoming. Most of them have European or indigenous roots, and the Mapuche are the largest indigenous group, so Chilean culture is a rich mixture of both.",
        questions: [
          { prompt: "Which title would suit this text about Chile best?", options: ["Chile: a long country with surprising variety", "How to learn Spanish in Santiago", "The history of the Mapuche people", "A skiing holiday in the Andes"], answer: 0, why: "Every paragraph shows a different side of Chile's geography, nature or people." },
          { prompt: "Why does Chile have such a wide range of weather?", options: ["It is an island in the Pacific Ocean.", "It is very long from north to south.", "It has no mountains.", "It is very close to Peru."], answer: 1, why: "Paragraph B says the great length of the country causes the changing weather." },
          { prompt: "What can visitors do in Torres del Paine National Park?", options: ["Ski and surf on the same day", "Visit the biggest shopping centre in the country", "Walk and trek among lakes, glaciers and forests", "Study the Mapuche language"], answer: 2, why: "Paragraph C describes hiking and trekking in the park's natural scenery." },
          { prompt: "Skiing and surfing are possible on the same day near Santiago. What does this suggest?", options: ["The winters in Santiago are always warm.", "Both the mountains and the ocean are within reach of the capital.", "Surfing is more popular than skiing in Chile.", "Santiago is far from any mountain."], answer: 1, why: "Doing both on one day is only possible if mountains and sea are close to Santiago." },
          { prompt: "In paragraph B, the word contrast means:", options: ["a long journey", "a kind of mountain", "a traditional festival", "a clear difference between two things"], answer: 3, why: "Deserts and glaciers in one country show a strong difference, which is a contrast." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · What is each paragraph about?", source: "Unit 1 · Reading b · p.32",
        instruction: "Read the passage quickly and choose the topic of each paragraph.",
        items: [
          { prompt: "Paragraph A mainly describes:", options: ["where Chile is and which countries are nearby", "why the weather is so varied", "sports around the capital", "the people and their language"], answer: "where Chile is and which countries are nearby", why: "Paragraph A gives the location and the neighbours." },
          { prompt: "Paragraph B mainly describes:", options: ["nature parks for hiking", "why the climate and landscapes are so varied", "the capital city", "the official language"], answer: "why the climate and landscapes are so varied", why: "Paragraph B explains the length of the country and the contrasts it creates." },
          { prompt: "Paragraph C mainly describes:", options: ["natural places for walking and trekking", "the neighbouring countries", "the culture of the Mapuche", "winter sports in a big city"], answer: "natural places for walking and trekking", why: "Paragraph C is about Torres del Paine, the Atacama Desert and Chiloé Island." },
          { prompt: "Paragraph D mainly describes:", options: ["glaciers and deserts", "Santiago and the activities near it", "European history", "the weather in the north"], answer: "Santiago and the activities near it", why: "Paragraph D is about the capital and its sports." },
          { prompt: "Paragraph E mainly describes:", options: ["the language and the people of Chile", "mountains and rivers", "Antarctica", "snowboarding"], answer: "the language and the people of Chile", why: "Paragraph E covers Spanish, English and the Chilean people and culture." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Why questions", source: "Unit 1 · Writing g · p.33",
        instruction: "Choose the best answer to each question about Chile.",
        items: [
          { prompt: "Text check: why do people find both deserts and glaciers in Chile?", options: ["The country is very long, so its climate changes a lot.", "The country is very small.", "Tourists build them.", "The country is next to Argentina only."], answer: "The country is very long, so its climate changes a lot.", why: "The length of the country creates very different climates." },
          { prompt: "Text check: how can the climate and mountains help tourism in Chile?", options: ["They give visitors many different adventures, such as hiking, skiing and trekking.", "They stop people from visiting.", "They make the country too cold in every season.", "They keep tourists in the capital only."], answer: "They give visitors many different adventures, such as hiking, skiing and trekking.", why: "The varied nature offers many opportunities for tourists." },
          { prompt: "Text check: why can people ski and surf on the same day near Santiago?", options: ["Snowy mountains and the Pacific Ocean are both close to the city.", "The city has an indoor ski centre.", "It snows on the beach.", "Santiago is an island."], answer: "Snowy mountains and the Pacific Ocean are both close to the city.", why: "The Andes and the Pacific are near enough to visit in one day." },
          { prompt: "Text check: where do most Chileans have their roots?", options: ["Europe and indigenous peoples, mostly Mapuche", "Only Antarctica", "Asia and Africa", "Peru and Bolivia only"], answer: "Europe and indigenous peoples, mostly Mapuche", why: "Paragraph E describes a mix of European and indigenous roots." }
        ]
      },
      {
        type: "reading", title: "Reading 4 · A safer digital world", passageTitle: "Getting ready for a safer digital world",
        passage: "The Internet makes modern life easier. Without leaving home, people can pay bills, order food, buy travel tickets, work, join meetings, run a business or study. These tasks save time, so there is more room for family and rest. However, going online also means sharing personal information, and this brings risks. Hackers can steal data and use it in harmful ways, and they can damage computer systems, which causes serious problems in everyday life. That is why every country needs experts who can protect digital systems and keep information safe. Türkiye is answering this need with many cybersecurity vocational schools. Their students learn to recognise online threats, stop attacks and protect systems. Many of these schools are inside technoparks, which are centres for research and business where universities and companies cooperate. There, students work with professionals and gain real experience. After graduation, finding work is not difficult, because more and more organisations need cybersecurity specialists: private companies, government offices, banks, schools, hospitals and cybersecurity firms all hire them. By investing in this training, Türkiye wants to give its citizens and businesses a safer digital environment.",
        questions: [
          { prompt: "What is the main idea of the passage?", options: ["Türkiye teaches students to use social media.", "Türkiye is training cybersecurity experts to protect people and businesses online.", "Most people think the Internet is dangerous and should be avoided.", "Hackers are the most successful workers in Türkiye."], answer: 1, why: "The text explains the online risks and Türkiye's schools that train experts against them." },
          { prompt: "Where are many cybersecurity vocational schools located?", options: ["Inside banks", "In hospitals", "In private homes", "Inside technoparks"], answer: 3, why: "The passage says many of the schools are inside technoparks." },
          { prompt: "Why does every country need cybersecurity experts?", options: ["To build more shopping websites", "To make the Internet slower", "To protect digital systems and keep information safe", "To stop people from working at home"], answer: 2, why: "Experts are needed because hackers can steal data and damage systems." },
          { prompt: "Why is it useful for students to study in technoparks?", options: ["They do not have to take any lessons.", "They can work with professionals and get real experience.", "They can leave school early.", "They only meet other students."], answer: 1, why: "The passage says students work with professionals there and gain real experience." },
          { prompt: "In the passage, the word threats means:", options: ["tasks that save time", "types of online shopping", "people who work in banks", "things that are dangerous or may cause harm"], answer: 3, why: "Online threats are dangers such as attacks and data theft." },
          { prompt: "What does the last sentence suggest about Türkiye's reason for investing in this training?", options: ["It wants to sell computers to other countries.", "It wants to make online services more expensive.", "It wants its citizens and businesses to be safer online.", "It wants fewer people to use the Internet."], answer: 2, why: "The text says the aim is a safer digital environment for citizens and businesses." }
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
          { prompt: "According to the passage, why is the Internet important in everyday life?", options: ["It helps people do many tasks quickly from home.", "It replaces schools and hospitals.", "It makes people share less information.", "It is only useful for businesses."], answer: "It helps people do many tasks quickly from home.", why: "Paying bills, working and studying online save time and are comfortable." },
          { prompt: "According to the passage, what can happen when people share personal information online?", options: ["Hackers may steal the data and use it for harmful purposes.", "Their computers become faster.", "They always receive free tickets.", "Their data is deleted automatically."], answer: "Hackers may steal the data and use it for harmful purposes.", why: "Cyberattacks and data theft are the risks named in the passage." },
          { prompt: "According to the passage, why is it good for students to be in technoparks while studying?", options: ["They learn from professionals and gain real experience.", "They can avoid exams.", "They can sell their own computers.", "They can travel abroad every week."], answer: "They learn from professionals and gain real experience.", why: "Technoparks bring universities and companies together, so students meet professionals." }
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
