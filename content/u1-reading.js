window.unitContent = window.unitContent || [];
window.unitContent[0] = Object.assign(window.unitContent[0] || {}, {
  reading: {
    activities: [
      {
        type: "reading", title: "Reading 1 · A vlogger's trip", passageTitle: "Nora's big trip",
        passage: "Nora is a travel vlogger who films her journeys and shares them online. Her newest video follows a trip of about two months. It begins in Chile, where she speaks Spanish with local people, goes sightseeing in Santiago and photographs people in traditional clothes. From there she goes to Peru. In Lima she meets her Peruvian friend Isabel, and together they visit the ancient ruins of Machu Picchu and go on a day excursion to the Amazon. A few days later Nora flies to Northern Cyprus, where she eats in the restaurants of Büyük Han in Lefkoşa and tries the local food. Next comes a long stretch through the Turkic states. In Baku she looks at monuments honouring the poets Vahid and Fuzuli and practises her Azerbaijani. Her next stop, Tashkent, is where she meets Uzbek friends, and then she tours Independence Square and the Amir Timur Museum. In Ashgabat she explores the historical site of Nisa, which belonged to the Parthian Empire, and admires the carpets in the Turkmen Carpet Museum. In Astana, a Kazakh friend called Tomiris greets her, and she tastes Kazakh food. In Bishkek she goes shopping at Osh Bazaar, a great place for cheese, meat and spices. Her last stop is Thailand, where she tours the Grand Palace, whose golden towers are famous, and enjoys Thai food in Bangkok. Where she will go next is still a secret, which makes her videos even more fun to watch.",
        questions: [
          { prompt: "Which title suits Nora's story best?", options: ["Tips for beginner vloggers", "A journey across several countries", "The best places for a short day trip", "How to learn Spanish quickly on your own"], answer: 1, why: "The passage follows one trip through many countries, so a journey title fits best." },
          { prompt: "What do Nora and Isabel do in Peru?", options: ["They go shopping in a busy bazaar and taste local cheese.", "They see the ruins of Machu Picchu and take a trip to the Amazon.", "They visit a carpet museum and a historical site of an old empire.", "They practise Azerbaijani with some local poets."], answer: 1, why: "The passage says they visit Machu Picchu and take a day trip to the Amazon." },
          { prompt: "Which place does Nora visit straight after Peru?", options: ["The Amazon region", "Baku in Azerbaijan", "Northern Cyprus", "Tashkent in Uzbekistan"], answer: 2, why: "After Peru she flies to Northern Cyprus, and only later goes to the Turkic states." },
          { prompt: "In the passage, the word sightseeing means:", options: ["visiting famous or interesting places", "learning a foreign language at a school abroad", "buying local food at a busy market stall", "meeting old friends at the airport"], answer: 0, why: "Goes sightseeing in Santiago means she visits the interesting places of the city." },
          { prompt: "What can we infer about Nora from her stops in the Turkic states?", options: ["She would rather stay in her hotel and avoid meeting local people.", "She wants to stay in one city for several months.", "She dislikes trying unfamiliar food and customs.", "She enjoys meeting local people and learning about their culture."], answer: 3, why: "She meets friends, practises languages and visits museums and bazaars, which shows she likes local culture." },
          { prompt: "What does the last sentence suggest about Nora's viewers?", options: ["They already know exactly where she will go next.", "They are bored with her videos and have stopped watching.", "They cannot guess her next destination, which adds to the fun.", "They want her to stop travelling and stay at home for a while."], answer: 2, why: "Her next destination is still a secret, so watching her videos is exciting." },
          { prompt: "What does Nora do in Northern Cyprus?", options: ["She tries local food in Büyük Han.","She goes shopping for spices at a busy bazaar.","She learns about carpets in a museum.","She walks around the golden towers of a palace."], answer: 0, why: "She eats in the restaurants of Büyük Han in Lefkoşa and tries the local food." },
          { prompt: "How long does Nora's trip last?", options: ["About two weeks","About two months","More than a year","A single weekend"], answer: 1, why: "The passage says the video follows a trip of about two months." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Tick the cities", source: "Unit 1 · Vocabulary c · p.28",
        instruction: "Read Nora's trip again. Did she visit each city?",
        items: [
          { prompt: "Route tick: Santiago", options: ["Visited", "Not visited"], answer: "Visited", why: "She goes sightseeing in Santiago at the start of her trip in Chile." },
          { prompt: "Route tick: Lima", options: ["Visited", "Not visited"], answer: "Visited", why: "She meets her friend Isabel in Lima." },
          { prompt: "Route tick: Madrid", options: ["Visited", "Not visited"], answer: "Not visited", why: "Madrid is not on her route." },
          { prompt: "Route tick: Baku", options: ["Visited", "Not visited"], answer: "Visited", why: "She looks at monuments of poets and practises Azerbaijani in Baku." },
          { prompt: "Route tick: Prague", options: ["Visited", "Not visited"], answer: "Not visited", why: "Prague is never mentioned; her trip does not go through the Czech Republic." },
          { prompt: "Route tick: Lisbon", options: ["Visited", "Not visited"], answer: "Not visited", why: "Lisbon is not on her route." },
          { prompt: "Route tick: Astana", options: ["Visited", "Not visited"], answer: "Visited", why: "She meets her Kazakh friend Tomiris in Astana." },
          { prompt: "Route tick: Bangkok", options: ["Visited", "Not visited"], answer: "Visited", why: "She enjoys Thai food and sees the Grand Palace in Bangkok." },
          { prompt: "Route tick: Munich", options: ["Visited", "Not visited"], answer: "Not visited", why: "Munich is not on her route." },
          { prompt: "Route tick: Tashkent", options: ["Visited","Not visited"], answer: "Visited", why: "She meets Uzbek friends in Tashkent." },
          { prompt: "Route tick: Vienna", options: ["Visited","Not visited"], answer: "Not visited", why: "Vienna is not on her route." },
          { prompt: "Route tick: Lefkoşa", options: ["Visited","Not visited"], answer: "Visited", why: "She eats in the restaurants of Büyük Han in Lefkoşa." },
          { prompt: "Route tick: Rome", options: ["Visited","Not visited"], answer: "Not visited", why: "Rome is not on her route." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Fill in the route", source: "Unit 1 · Vocabulary g · p.29",
        instruction: "Complete each sentence about Nora's trip with one word or name from the word bank. One or more words are extra.",
        wordBank: ["Chile", "Machu Picchu", "Cyprus", "poets", "Osh", "historical", "Thailand", "Palace", "castle", "Peru", "Tashkent", "Museum", "Astana"],
        items: [
          { prompt: "Nora's trip begins in ___, where she practises her Spanish.", answer: "Chile", why: "The first country on her route is Chile." },
          { prompt: "In Peru, Nora and her friend visit the ancient ruins of ___.", answer: "Machu Picchu", why: "Machu Picchu is the ancient site they explore in Peru." },
          { prompt: "After Peru, Nora flies to Northern ___ and eats local food in Lefkoşa.", answer: "Cyprus", why: "Lefkoşa is in Northern Cyprus." },
          { prompt: "In Baku, Nora looks at monuments of famous ___.", answer: "poets", why: "The monuments are for the poets Vahid and Fuzuli." },
          { prompt: "In Bishkek, Nora goes shopping at ___ Bazaar.", answer: "Osh", why: "The market in Bishkek is Osh Bazaar." },
          { prompt: "Nisa in Ashgabat is a ___ site that belonged to the Parthian Empire.", answer: "historical", why: "A historical site is a place that is important in history." },
          { prompt: "The last country on Nora's route is ___.", answer: "Thailand", why: "She finishes her trip in Thailand." },
          { prompt: "In Bangkok, Nora sees the golden towers of the Grand ___.", answer: "Palace", why: "The Grand Palace is famous for its golden towers." },
          { prompt: "Nora meets her Uzbek friends in ___.", answer: "Tashkent", why: "Tashkent is the city where she meets Uzbek friends." },
          { prompt: "In Ashgabat, Nora admires the carpets in the Turkmen Carpet ___.", answer: "Museum", why: "The carpets are in the Turkmen Carpet Museum." },
          { prompt: "A Kazakh friend called Tomiris greets Nora in ___.", answer: "Astana", why: "Tomiris greets her in Astana." },
          { prompt: "Nora's friend Isabel is from ___, so she is Peruvian.", answer: "Peru", why: "A Peruvian friend comes from Peru." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Who, what, where?", source: "Unit 1 · Reading practice · Nora's trip",
        instruction: "Scan Nora's story again. Choose the best answer.",
        items: [
          { prompt: "Scan: who is Isabel?", options: ["A poet with a monument in Baku","A guide at the Grand Palace","A Peruvian friend of Nora","A traveller from Kazakhstan"], answer: "A Peruvian friend of Nora", why: "Nora meets her Peruvian friend Isabel in Lima." },
          { prompt: "Scan: who greets Nora in Astana?", options: ["Isabel","Tomiris","Vahid","Fuzuli"], answer: "Tomiris", why: "Her Kazakh friend Tomiris greets her in Astana." },
          { prompt: "Scan: where does Nora look at monuments for poets?", options: ["Baku","Lima","Santiago","Tashkent"], answer: "Baku", why: "The monuments honouring Vahid and Fuzuli are in Baku." },
          { prompt: "Scan: where does Nora shop for cheese, meat and spices?", options: ["Lima","Bishkek","Astana","Santiago"], answer: "Bishkek", why: "Osh Bazaar in Bishkek is the great place for cheese, meat and spices." },
          { prompt: "Scan: which place is famous for its golden towers?", options: ["Machu Picchu","Büyük Han","Osh Bazaar","The Grand Palace"], answer: "The Grand Palace", why: "The Grand Palace in Thailand has famous golden towers." },
          { prompt: "Scan: what does Nora admire in the Turkmen Carpet Museum?", options: ["The carpets","Some old coins","Pictures of poets","Golden towers"], answer: "The carpets", why: "She admires the carpets there." },
          { prompt: "Scan: which language does Nora practise in Baku?", options: ["Spanish","Uzbek","Thai","Azerbaijani"], answer: "Azerbaijani", why: "She practises Azerbaijani in Baku." },
          { prompt: "Scan: which historical site belonged to the Parthian Empire?", options: ["Büyük Han","Machu Picchu","Nisa","Independence Square"], answer: "Nisa", why: "Nisa in Ashgabat belonged to the Parthian Empire." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Put the stops in order", source: "Unit 1 · Reading practice · Nora's trip",
        instruction: "Think about the order of Nora's journey and choose the best answer.",
        items: [
          { prompt: "Trip order: which country does Nora visit first?", options: ["Peru","Chile","Northern Cyprus","Thailand"], answer: "Chile", why: "Her video begins in Chile." },
          { prompt: "Trip order: which country does she visit straight after Chile?", options: ["Thailand","Kazakhstan","Peru","Azerbaijan"], answer: "Peru", why: "From Chile she goes to Peru." },
          { prompt: "Trip order: what does Nora do just before she flies to Northern Cyprus?", options: ["She meets Tomiris in Astana","She tours Independence Square","She tours the Grand Palace","She visits Machu Picchu"], answer: "She visits Machu Picchu", why: "The Peru visits come before the flight to Northern Cyprus." },
          { prompt: "Trip order: which city does she visit straight after Baku?", options: ["Tashkent","Ashgabat","Astana","Bishkek"], answer: "Tashkent", why: "Her next stop after Baku is Tashkent." },
          { prompt: "Trip order: which city does she visit just before Astana?", options: ["Baku","Bishkek","Ashgabat","Tashkent"], answer: "Ashgabat", why: "Ashgabat comes straight before Astana." },
          { prompt: "Trip order: which city does she visit straight after Astana?", options: ["Lima","Baku","Tashkent","Bishkek"], answer: "Bishkek", why: "In the passage Bishkek follows Astana." },
          { prompt: "Trip order: when does Nora go to Northern Cyprus?", options: ["Before she goes to Peru","After Peru and before Baku","After she goes to Thailand","Before she goes to Chile"], answer: "After Peru and before Baku", why: "She flies there after Peru, and the Turkic states come next." },
          { prompt: "Trip order: what does Nora do in Chile before she leaves for Peru?", options: ["She goes sightseeing in Santiago","She looks at monuments of poets","She goes shopping in a busy bazaar","She tours a golden palace"], answer: "She goes sightseeing in Santiago", why: "In Chile she speaks Spanish and goes sightseeing in Santiago." }
        ]
      },
      {
        type: "reading", title: "Reading 2 · A warm country", passageTitle: "Where Asia meets Europe",
        passage: "The Turkic states are full of unique traditions, rich history and places that many tourists do not know well, so they are perfect for travellers who want something authentic, that is, real places and customs that are not made only for visitors. One of the best choices is Azerbaijan, a country where visitors can have a really memorable holiday. Azerbaijan lies where Western Asia meets Eastern Europe, with the Caspian Sea to the east and the Caucasus Mountains to the north. Nature fans can see mud volcanoes, hot springs and Yanar Dağ, a fire that burns naturally on a hillside near the Caspian coast. The capital, Baku, has several UNESCO World Heritage Sites, among them the Maiden Tower, the Palace of the Shirvanshahs and the Walled City. Visitors can enjoy art, culture and the busy life of a modern business city, where old buildings stand next to glass skyscrapers. Food is another highlight: the varied dishes show the country's past as a stop on the Silk Road, where traders swapped goods and ideas. Finally, the local people are so welcoming that tourists feel at home even if they do not know a single Azerbaijani word.",
        questions: [
          { prompt: "Which title is the best for this passage?", options: ["How to build a skyscraper in a modern city", "The history of the Caspian Sea and its coast", "Azerbaijan: a welcoming country worth visiting", "Why tourists should avoid big and busy cities"], answer: 2, why: "The text presents Azerbaijan's nature, capital, food and people as reasons to visit." },
          { prompt: "Which of these is a natural wonder mentioned in the passage?", options: ["Yanar Dağ", "The Maiden Tower", "The Walled City", "The Silk Road"], answer: 0, why: "Yanar Dağ is a natural fire on a hillside; the others are buildings or a trade route." },
          { prompt: "According to the passage, what do Azerbaijan's varied dishes show?", options: ["The idea that the country has almost no farmland", "The country's past as a stop on the Silk Road", "The recipes that tourists bring from their homes", "The modern restaurants that open in Baku"], answer: 1, why: "The passage says the dishes show the country's past on the Silk Road." },
          { prompt: "In the passage, the word authentic means:", options: ["very expensive for visitors", "new and made only for tourists", "very crowded and noisy", "real and not copied"], answer: 3, why: "The passage explains it as real places and customs, not made only for visitors." },
          { prompt: "What can we conclude about tourists who do not speak Azerbaijani?", options: ["They cannot enjoy their visit because of the language.", "They must take a guide with them to every place they visit.", "They can still feel at home, thanks to the local people.", "They are not allowed to enter the city of Baku."], answer: 2, why: "The last sentence says tourists feel at home even without a single Azerbaijani word." },
          { prompt: "According to the passage, what can nature fans see in Azerbaijan?", options: ["Beautiful beaches and quiet villages along the Caspian coast","Mud volcanoes, hot springs and a burning hillside","Tall glass skyscrapers built in the middle of the countryside","Thick green forests across the flat plains of the north"], answer: 1, why: "The passage names mud volcanoes, hot springs and Yanar Dağ, a natural fire on a hillside." },
          { prompt: "In the passage, the phrase food is another highlight means that food is:", options: ["one of the best parts of a visit","a kind of dark and heavy meal","a special tool for cooking","an old name for a trade route"], answer: 0, why: "A highlight is one of the best or most exciting parts of something." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · Country, capital, nationality", source: "Unit 1 · Language Awareness b · p.30",
        instruction: "Scan the passage about Azerbaijan and write the missing information.",
        items: [
          { prompt: "Scan task: the country described in the passage is ___.", answer: "Azerbaijan", why: "The passage is about Azerbaijan." },
          { prompt: "Scan task: the capital city of this country is ___.", answer: "Baku", why: "Baku is named as the capital." },
          { prompt: "Scan task: the nationality of the people who live there is ___.", answer: "Azerbaijani", why: "The people of Azerbaijan are Azerbaijani." },
          { prompt: "Scan task: Azerbaijan lies where Western ___ meets Eastern Europe.", answer: "Asia", why: "The passage says it lies where Western Asia meets Eastern Europe." },
          { prompt: "Scan task: the sea to the east of Azerbaijan is the ___ Sea.", answer: "Caspian", why: "The Caspian Sea lies to the east." },
          { prompt: "Scan task: the mountains to the north of Azerbaijan are the ___ Mountains.", answer: "Caucasus", why: "The Caucasus Mountains lie to the north." },
          { prompt: "Scan task: the natural fire on a hillside near the coast is called Yanar ___.", answer: "Dağ", accepted: ["Dag"], why: "The fire is named Yanar Dağ." },
          { prompt: "Scan task: one World Heritage Site in Baku is the ___ Tower.", answer: "Maiden", why: "The Maiden Tower is one of the sites named for Baku." },
          { prompt: "Scan task: another World Heritage Site in Baku is called the ___ City.", answer: "Walled", why: "The Walled City is listed among the sites." },
          { prompt: "Scan task: the old trade route that the dishes remind us of is the ___ Road.", answer: "Silk", why: "The dishes show the country's past as a stop on the Silk Road." }
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
          { prompt: "Baku is described as a place with both old buildings and skyscrapers.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Old buildings stand next to glass skyscrapers in the passage." },
          { prompt: "The Caucasus Mountains lie to the north of Azerbaijan.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The passage places the Caucasus Mountains to the north." },
          { prompt: "Yanar Dağ is a fire that was made by builders.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The passage says the fire burns naturally on a hillside." },
          { prompt: "Azerbaijan is the largest country in Western Asia.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage never compares the size of Azerbaijan with other countries." },
          { prompt: "Azerbaijani food is not connected with the Silk Road.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The varied dishes show the country's past as a stop on the Silk Road." },
          { prompt: "The local people in Azerbaijan are not friendly to tourists.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The passage says the local people are so welcoming that tourists feel at home." },
          { prompt: "Most tourists visit Azerbaijan in the summer.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The text does not mention any season." },
          { prompt: "More than two million people live in Baku.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "No population figure appears in the passage." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · Words in context", source: "Unit 1 · Reading practice · Azerbaijan",
        instruction: "Choose the meaning of each word or phrase as it is used in the passage about Azerbaijan.",
        items: [
          { prompt: "In the passage, the word unique means:", options: ["like many other things","one of a kind","very old and broken","hard to find on a map"], answer: "one of a kind", why: "Unique traditions are special and not like those of other places." },
          { prompt: "In the passage, the word memorable means:", options: ["easy to remember","too short to enjoy","cheap and simple","difficult to understand"], answer: "easy to remember", why: "A memorable holiday is one that people remember for a long time." },
          { prompt: "In the passage, the word swapped means:", options: ["lost or threw away","kept for themselves","exchanged","hid from other people"], answer: "exchanged", why: "Traders swapped goods and ideas means they exchanged them." },
          { prompt: "In the passage, the word welcoming means:", options: ["strict about rules","quiet and shy","slow to answer questions","friendly to guests"], answer: "friendly to guests", why: "Welcoming people make visitors feel at home." },
          { prompt: "In the passage, the word lies, as in Azerbaijan lies where Western Asia meets Eastern Europe, means:", options: ["tells something untrue","is found in a place","sleeps in a bed","waits for a long time"], answer: "is found in a place", why: "Here lies describes where a country is." },
          { prompt: "In the passage, the word skyscrapers means:", options: ["old stone towers","wide city bridges","very tall buildings","small village houses"], answer: "very tall buildings", why: "Glass skyscrapers are very tall buildings in a modern city." },
          { prompt: "In the passage, the word varied means:", options: ["very hot to eat","cooked only at home","all exactly the same","of many kinds"], answer: "of many kinds", why: "Varied dishes are many different kinds of dishes." },
          { prompt: "In the passage, the phrase feel at home means:", options: ["feel comfortable","want to buy a house","miss their families badly","stay only in hotels"], answer: "feel comfortable", why: "Feeling at home means feeling comfortable, as if you were in your own house." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · Find the sentence", source: "Unit 1 · Reading practice · Azerbaijan",
        instruction: "Choose the part of the passage that answers the question. Each option is taken from the text.",
        items: [
          { prompt: "Find the part of the text that tells us where Azerbaijan is.", options: ["Nature fans can see mud volcanoes, hot springs and Yanar Dağ","Azerbaijan lies where Western Asia meets Eastern Europe","the varied dishes show the country's past as a stop on the Silk Road","the local people are so welcoming that tourists feel at home"], answer: "Azerbaijan lies where Western Asia meets Eastern Europe", why: "Only this part gives the position of the country." },
          { prompt: "Find the part of the text that names the sea and the mountains near Azerbaijan.", options: ["old buildings stand next to glass skyscrapers","the local people are so welcoming that tourists feel at home","with the Caspian Sea to the east and the Caucasus Mountains to the north","Visitors can enjoy art, culture and the busy life of a modern business city"], answer: "with the Caspian Sea to the east and the Caucasus Mountains to the north", why: "This part names the Caspian Sea and the Caucasus Mountains." },
          { prompt: "Find the part of the text that describes natural sights.", options: ["Visitors can enjoy art, culture and the busy life of a modern business city","The capital, Baku, has several UNESCO World Heritage Sites","traders swapped goods and ideas","Nature fans can see mud volcanoes, hot springs and Yanar Dağ"], answer: "Nature fans can see mud volcanoes, hot springs and Yanar Dağ", why: "Mud volcanoes, hot springs and a natural fire are natural sights." },
          { prompt: "Find the part of the text that introduces the UNESCO sites of the capital.", options: ["The capital, Baku, has several UNESCO World Heritage Sites","the varied dishes show the country's past as a stop on the Silk Road","old buildings stand next to glass skyscrapers","Visitors can enjoy art, culture and the busy life of a modern business city"], answer: "The capital, Baku, has several UNESCO World Heritage Sites", why: "This part introduces the UNESCO sites of Baku." },
          { prompt: "Find the part of the text that shows old and new together in Baku.", options: ["with the Caspian Sea to the east and the Caucasus Mountains to the north","Azerbaijan lies where Western Asia meets Eastern Europe","old buildings stand next to glass skyscrapers","traders swapped goods and ideas"], answer: "old buildings stand next to glass skyscrapers", why: "Old buildings next to glass skyscrapers show old and new together." },
          { prompt: "Find the part of the text that links the food to the country's history.", options: ["the local people are so welcoming that tourists feel at home","the varied dishes show the country's past as a stop on the Silk Road","Visitors can enjoy art, culture and the busy life of a modern business city","Nature fans can see mud volcanoes, hot springs and Yanar Dağ"], answer: "the varied dishes show the country's past as a stop on the Silk Road", why: "This part says the dishes show the country's past on the Silk Road." },
          { prompt: "Find the part of the text that shows how friendly the people are.", options: ["the local people are so welcoming that tourists feel at home","The capital, Baku, has several UNESCO World Heritage Sites","Azerbaijan lies where Western Asia meets Eastern Europe","with the Caspian Sea to the east and the Caucasus Mountains to the north"], answer: "the local people are so welcoming that tourists feel at home", why: "This part says the people are so welcoming that tourists feel at home." },
          { prompt: "Find the part of the text that says what traders did on the Silk Road.", options: ["Nature fans can see mud volcanoes, hot springs and Yanar Dağ","old buildings stand next to glass skyscrapers","a fire that burns naturally on a hillside","where traders swapped goods and ideas"], answer: "where traders swapped goods and ideas", why: "Traders swapped goods and ideas on the Silk Road." }
        ]
      },
      {
        type: "reading", title: "Reading 3 · Somewhere far away", passageTitle: "Chile at a glance",
        passage: "(A) Chile lies in the west of South America. It is a long, narrow country squeezed between the Andes Mountains and the Pacific Ocean, and its southern end is close to Antarctica. Its neighbours are Argentina, Peru and Bolivia, so a trip to Chile can easily include visits to these countries too. (B) Because Chile is so long, its weather changes a great deal from north to south. This explains why it has one of the driest deserts on Earth as well as glaciers that are thousands of years old. Together with its ancient ruins, varied landscapes and rich cultural heritage, this contrast makes Chile special. (C) Torres del Paine National Park is full of rivers, lakes, glaciers and green forests, so nature lovers can walk and trek there. The Atacama Desert and Chiloé Island offer very different adventures. (D) Santiago, the capital and biggest city, lies in a valley ringed by snowy peaks. Visitors can try sports such as snowboarding, climbing and hiking. In a single day, a traveller can ski on the slopes of the Andes, relax on a beach and surf the Pacific waves. (E) The official language is Spanish, although some Chileans also speak English. Chileans are known for being warm and welcoming. Most of them have European or indigenous roots, and the Mapuche are the largest indigenous group, so Chilean culture is a rich mixture of both.",
        questions: [
          { prompt: "Which title would suit this text about Chile best?", options: ["A guide to learning Spanish in the city of Santiago", "The history of the Mapuche people in the south", "Chile: a long country with surprising variety", "A skiing holiday in the Andes for all the family"], answer: 2, why: "Every paragraph shows a different side of Chile's geography, nature or people." },
          { prompt: "Why does Chile have such a wide range of weather?", options: ["It is an island in the Pacific Ocean.", "It is very long from north to south.", "It has no mountains at all.", "It is very close to Peru."], answer: 1, why: "Paragraph B says the great length of the country causes the changing weather." },
          { prompt: "What can visitors do in Torres del Paine National Park?", options: ["Ski in the mountains and surf in the sea in one day", "Visit the biggest shopping centre in the country", "Walk and trek among lakes, glaciers and forests", "Study the Mapuche language and traditions"], answer: 2, why: "Paragraph C says nature lovers can walk and trek there." },
          { prompt: "Skiing and surfing are possible on the same day near Santiago. What does this suggest?", options: ["The winters in Santiago are always very warm.", "Both mountains and ocean are within reach of the capital.", "Surfing is much more popular than skiing in the whole of the country.", "Santiago is too far away from any mountain."], answer: 1, why: "Doing both on one day is only possible if mountains and sea are close to Santiago." },
          { prompt: "In paragraph B, the word contrast means:", options: ["a long and tiring journey by bus or train", "a kind of snowy mountain top in the Andes", "a traditional festival in the south", "a clear difference between two things"], answer: 3, why: "Deserts and glaciers in one country show a strong difference, which is a contrast." },
          { prompt: "How does paragraph A describe the shape of Chile?", options: ["It is a long, narrow country between mountains and ocean.","It is a wide, flat country far from the sea.","It is a small island with no neighbours.","It is a round country in the middle of Europe."], answer: 0, why: "Paragraph A calls Chile long and narrow, squeezed between the Andes and the Pacific." },
          { prompt: "Why does the writer mention the Mapuche in paragraph E?", options: ["To explain why the north is so dry","To list the neighbours of Chile","To name the capital's main sports","To name the largest indigenous group"], answer: 3, why: "The Mapuche are given as the largest indigenous group in Chile." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · What is each paragraph about?", source: "Unit 1 · Reading b · p.32",
        instruction: "Read the passage quickly and choose the topic of each paragraph.",
        items: [
          { prompt: "Paragraph A mainly describes:", options: ["the people and the languages they speak", "why the weather changes so much", "where Chile is and its neighbours", "sports to try around the capital"], answer: "where Chile is and its neighbours", why: "Paragraph A gives the location and the neighbouring countries." },
          { prompt: "Paragraph B mainly describes:", options: ["why the climate varies so much", "national parks for hiking and trekking", "the capital city and its valley", "the languages people speak"], answer: "why the climate varies so much", why: "Paragraph B explains the length of the country and the contrasts it creates." },
          { prompt: "Paragraph C mainly describes:", options: ["the neighbouring countries and how to visit them", "the culture of the Mapuche people", "winter sports in a big city", "wild places for walking and trekking"], answer: "wild places for walking and trekking", why: "Paragraph C is about Torres del Paine, the Atacama Desert and Chiloé Island." },
          { prompt: "Paragraph D mainly describes:", options: ["glaciers and deserts", "Santiago and its sports", "European history", "the weather in the north"], answer: "Santiago and its sports", why: "Paragraph D is about the capital and the activities near it." },
          { prompt: "Paragraph E mainly describes:", options: ["the mountains, rivers and lakes of the south", "the continent of Antarctica", "snowboarding, skiing and surfing near the capital", "the language and people of Chile"], answer: "the language and people of Chile", why: "Paragraph E covers Spanish, English and the Chilean people and culture." },
          { prompt: "Heading check: choose the best heading for paragraph B.", options: ["Skiing, climbing and surfing","Desert and glaciers in one country","Spanish and English in daily life","Neighbours on the border"], answer: "Desert and glaciers in one country", why: "Paragraph B explains how the length of Chile gives it a desert and glaciers." },
          { prompt: "Heading check: choose the best heading for paragraph D.", options: ["Wild parks for trekking","The weather of the north","A capital with mountains and sea nearby","Roots of the Chilean people"], answer: "A capital with mountains and sea nearby", why: "Paragraph D describes Santiago and the sports near its mountains and beaches." },
          { prompt: "Heading check: choose the best heading for paragraph E.", options: ["Warm people and a mixed culture","Deserts of the far north","Winter sports in the Andes","Chile and its neighbours"], answer: "Warm people and a mixed culture", why: "Paragraph E is about the language and the people of Chile." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Why questions", source: "Unit 1 · Reading g · p.33",
        instruction: "Choose the best answer to each question about Chile.",
        items: [
          { prompt: "Text check: how does the long shape of Chile affect its geography?", options: ["It makes the whole country a flat, green plain with a single climate.", "It gives the country deserts, glaciers and many landscapes.", "It keeps the country free of mountains.", "It makes the weather the same everywhere."], answer: "It gives the country deserts, glaciers and many landscapes.", why: "The great length of the country gives it very different climates, from one of the driest deserts to old glaciers." },
          { prompt: "Text check: what opportunities do Chile's tourist attractions offer?", options: ["Only quiet days in a hotel in the capital", "Shopping trips to nearby countries", "Study courses in the Spanish language", "Hiking, trekking, skiing and surfing"], answer: "Hiking, trekking, skiing and surfing", why: "The passage names hiking, trekking, skiing and surfing among the activities." },
          { prompt: "Text check: why can a trip to Chile easily include other countries?", options: ["Chile is close to Argentina, Peru and Bolivia.", "Chile is an island far out in the Atlantic Ocean.", "Chile has no borders with any other country.", "Chile is right next to Europe and Asia."], answer: "Chile is close to Argentina, Peru and Bolivia.", why: "Paragraph A says its neighbours are Argentina, Peru and Bolivia." },
          { prompt: "Text check: where do most Chileans have their roots?", options: ["Mainly in Japan and the other countries of east Asia", "Only in the cold lands of Antarctica", "Europe and indigenous peoples, mostly the Mapuche", "Only in Peru and Bolivia, across the border"], answer: "Europe and indigenous peoples, mostly the Mapuche", why: "Paragraph E describes a mix of European and indigenous roots." },
          { prompt: "Text check: what is special about the southern end of Chile?", options: ["It is the driest place on Earth.","It is the home of the capital city.","It is next to the Amazon.","It is close to Antarctica."], answer: "It is close to Antarctica.", why: "Paragraph A says the south of Chile is close to Antarctica." },
          { prompt: "Text check: where does Santiago lie?", options: ["In a valley ringed by snowy peaks","On a small island close to the coast","In the middle of a very large desert","Right on the border with Bolivia"], answer: "In a valley ringed by snowy peaks", why: "Paragraph D says Santiago lies in a valley ringed by snowy peaks." },
          { prompt: "Text check: what is the official language of Chile?", options: ["Mapuche","Spanish","Portuguese","English"], answer: "Spanish", why: "Paragraph E says the official language is Spanish." },
          { prompt: "Text check: how does the text describe the Chilean people?", options: ["Quiet and unfriendly","Always busy and in a hurry","Warm and welcoming","Mostly of Asian origin"], answer: "Warm and welcoming", why: "Chileans are known for being warm and welcoming." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Words in context", source: "Unit 1 · Reading practice · Chile",
        instruction: "Choose the meaning of each word or phrase as it is used in the passage about Chile.",
        items: [
          { prompt: "In paragraph A, the word squeezed means:", options: ["moved quickly to a new place","pressed into a narrow space","painted in bright colours","left far from the coast"], answer: "pressed into a narrow space", why: "Chile is squeezed between the mountains and the ocean, so it is narrow." },
          { prompt: "In paragraph D, the word ringed, as in ringed by snowy peaks, means:", options: ["warmed by the sun","named after a person","crossed by a road","surrounded by"], answer: "surrounded by", why: "A valley ringed by peaks has peaks all around it." },
          { prompt: "In paragraph E, the word indigenous means:", options: ["native to a place","coming from a different continent","living only in big cities","speaking several languages"], answer: "native to a place", why: "Indigenous people are the original people of a place." },
          { prompt: "In paragraph B, the word heritage means:", options: ["money kept by a rich family","a modern shopping street","history and traditions","a type of local weather"], answer: "history and traditions", why: "Cultural heritage is the history and traditions that come from the past." },
          { prompt: "In paragraph C, the word trek means:", options: ["drive fast on a motorway","walk a long way","fly across the ocean","swim in a lake"], answer: "walk a long way", why: "Trekking is a long walk, often in wild country." },
          { prompt: "In paragraph B, the word glaciers means:", options: ["huge masses of ice","hot springs near volcanoes","dry deserts with sand","deep blue lakes"], answer: "huge masses of ice", why: "A glacier is a very large body of ice." },
          { prompt: "In paragraph C, the word offer, as in offer very different adventures, means:", options: ["refuse or avoid","count or measure","give or provide","borrow or lend"], answer: "give or provide", why: "The desert and the island provide different adventures." },
          { prompt: "In paragraph B, one of the driest deserts means a desert with:", options: ["the most sand","the hottest days","the largest rivers","very little rain"], answer: "very little rain", why: "Driest means with the least rain." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Facts and names", source: "Unit 1 · Reading practice · Chile",
        instruction: "Scan the passage about Chile and choose the best answer.",
        items: [
          { prompt: "Fact check: which ocean lies next to Chile?", options: ["The Pacific Ocean","The Indian Ocean","The Atlantic Ocean","The Arctic Ocean"], answer: "The Pacific Ocean", why: "Chile lies between the Andes Mountains and the Pacific Ocean." },
          { prompt: "Fact check: which of these countries is NOT named as a neighbour of Chile?", options: ["Argentina","Peru","Bolivia","Brazil"], answer: "Brazil", why: "The neighbours named are Argentina, Peru and Bolivia." },
          { prompt: "Fact check: which place is called a national park?", options: ["Chiloé Island","Santiago","Torres del Paine","The Atacama Desert"], answer: "Torres del Paine", why: "Torres del Paine National Park is the park in the passage." },
          { prompt: "Fact check: what is Santiago?", options: ["A national park in the south","The capital and biggest city","An island off the coast","A glacier in the Andes"], answer: "The capital and biggest city", why: "Santiago is the capital and the biggest city." },
          { prompt: "Fact check: what is Chiloé?", options: ["A desert","A river","A snowy peak","An island"], answer: "An island", why: "The passage names Chiloé Island." },
          { prompt: "Fact check: which sport is named for the area around Santiago?", options: ["Cycling","Tennis","Snowboarding","Football"], answer: "Snowboarding", why: "Snowboarding is named with climbing and hiking in paragraph D." },
          { prompt: "Fact check: which language besides Spanish do some Chileans speak?", options: ["Portuguese","English","Italian","Russian"], answer: "English", why: "Some Chileans also speak English." },
          { prompt: "Fact check: which group is the largest indigenous group of Chile?", options: ["The Mapuche","The Quechua","The Berbers","The Vikings"], answer: "The Mapuche", why: "The passage names the Mapuche." }
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
          { prompt: "What does the last sentence suggest about Türkiye's reason for investing in this training?", options: ["It wants to sell its computer systems to other countries.", "It wants to make online services more expensive for users.", "It wants its citizens and businesses to be safer online.", "It wants fewer people to use the Internet at home."], answer: 2, why: "The text says the aim is a safer online life for ordinary people and companies." },
          { prompt: "Which of these tasks can people do online, according to the passage?", options: ["Pay bills and buy travel tickets","Receive a degree without any study","Print money for their families","Repair broken computers by phone"], answer: 0, why: "The passage lists paying bills and buying travel tickets among online tasks." },
          { prompt: "Why does the writer explain the risks of going online?", options: ["To persuade people to stop using the Internet","To advertise a new type of computer","To describe how hackers learn their skills","To show why trained cybersecurity specialists are needed"], answer: 3, why: "The risks lead to the need for specialists, which the rest of the text explains." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · True, False or Not mentioned", source: "Unit 1 · Roots and Routes c · p.34",
        instruction: "Choose True, False or Not mentioned according to the passage about cybersecurity schools.",
        items: [
          { prompt: "Students at these schools learn how to protect digital systems.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The passage says they learn to recognise threats, stop attacks and protect systems." },
          { prompt: "Türkiye has only a few cybersecurity vocational schools.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The passage says Türkiye has many such schools." },
          { prompt: "Students must study programming for a year before they can join a school.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage does not say anything about entry requirements." },
          { prompt: "Graduates can find work in banks and hospitals.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Banks and hospitals are named among the places that need specialists." },
          { prompt: "Hackers may harm computer systems and cause trouble in daily life.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The passage says hackers may harm computer systems and cause serious trouble." },
          { prompt: "Graduates of these schools usually struggle to find a job.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The passage says graduates rarely struggle to find a job." },
          { prompt: "Cybersecurity specialists earn more money than doctors.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage does not say anything about salaries." },
          { prompt: "Only banks need cybersecurity specialists.", options: ["True", "False", "Not mentioned"], answer: "False", why: "Hospitals, schools, state institutions and many businesses need them too." },
          { prompt: "Universities and companies join forces in technoparks.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The passage describes technoparks as centres where universities and companies cooperate." },
          { prompt: "Most students at these schools are older than twenty.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage does not give the age of the students." },
          { prompt: "Online tasks leave people with less time for their families.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The tasks save time, so there is more room for family and rest." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · Short answers", source: "Unit 1 · Roots and Routes d · p.34",
        instruction: "Choose the best short answer to each question about the passage.",
        items: [
          { prompt: "Name one benefit of doing everyday tasks online, according to the text.", options: ["It makes data impossible to steal.", "It saves people time.", "It removes the need for passwords.", "It makes schools unnecessary."], answer: "It saves people time.", why: "The passage says these online tasks save time." },
          { prompt: "According to the passage, what can happen when people share personal information online?", options: ["Their computers become much faster.", "They always receive free travel tickets.", "Their data is deleted automatically after a week.", "Hackers may steal the data and misuse it."], answer: "Hackers may steal the data and misuse it.", why: "The passage says hackers may steal the data and harm computer systems." },
          { prompt: "Where do cybersecurity students get real experience, according to the text?", options: ["In their own homes while they study alone", "On long trips to other countries every week", "In technoparks, working with professionals", "In waiting rooms at the local hospitals"], answer: "In technoparks, working with professionals", why: "Students work with professionals in technoparks and gain real experience." },
          { prompt: "According to the passage, who needs cybersecurity specialists?", options: ["Only companies that sell computers","Hospitals, banks and schools","Mostly families who stay at home","Only the schools inside technoparks"], answer: "Hospitals, banks and schools", why: "The passage lists hospitals, banks, schools, state institutions and many businesses." },
          { prompt: "According to the passage, what do students learn at these schools?", options: ["How to spot online threats","How to build cheaper phones for shops","How to sell travel tickets abroad","How to design websites for shops"], answer: "How to spot online threats", why: "They learn to recognise threats, stop attacks and protect systems." },
          { prompt: "According to the passage, what is a technopark?", options: ["A park where people play computer games","A centre for research and business","A school for young children","A shop that sells computer parts"], answer: "A centre for research and business", why: "Technoparks are centres for research and business where universities and companies cooperate." },
          { prompt: "According to the passage, why do people have more time for their families?", options: ["Schools close earlier","Hackers stop working at night","Online tasks save time","Technoparks offer free meals"], answer: "Online tasks save time", why: "These tasks save time, so there is more room for family and rest." },
          { prompt: "According to the passage, why do graduates easily find jobs?", options: ["Their schools give them free computers","They study only at home","They take a short course abroad","Many places need specialists"], answer: "Many places need specialists", why: "Hospitals, banks, schools and many businesses all need specialists." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · Reference words", source: "Unit 1 · Reading practice · Cybersecurity",
        instruction: "Choose what the word or phrase in each sentence refers to.",
        items: [
          { prompt: "In \"These tasks save time\", the words \"These tasks\" mean:", options: ["studying, working and paying bills online","hackers and other people who attack networks","the companies that work inside technoparks","banks, schools and hospitals that need staff"], answer: "studying, working and paying bills online", why: "The sentence before lists the tasks people can do online without leaving the house." },
          { prompt: "In \"this brings risks\", the word \"this\" means:", options: ["saving a lot of time at home","studying at a vocational school","working with experienced professionals","sharing personal information online"], answer: "sharing personal information online", why: "Going online means sharing personal information, and this brings risks." },
          { prompt: "In \"Hackers may steal that data\", the words \"that data\" mean:", options: ["the bank accounts of schools","the specialists' salaries","the personal information","the names of technoparks"], answer: "the personal information", why: "That data is the personal information shared online." },
          { prompt: "In \"they may harm computer systems\", the word \"they\" means:", options: ["Banks","Hackers","Technoparks","Students"], answer: "Hackers", why: "Hackers may steal data, or they may harm computer systems." },
          { prompt: "In \"Their students learn to recognise online threats\", the word \"Their\" refers to:", options: ["the vocational schools","the hackers who steal data","the hospitals and banks","the visitors to technoparks"], answer: "the vocational schools", why: "The students belong to the cybersecurity vocational schools mentioned before." },
          { prompt: "In \"which are centres for research and business\", the word \"which\" refers to:", options: ["the schools","technoparks","the hackers","the companies"], answer: "technoparks", why: "Many schools are inside technoparks, which are centres for research and business." },
          { prompt: "In \"There, students work with professionals\", the word \"There\" means:", options: ["in technoparks","in large hospitals","at the students' homes","at several banks"], answer: "in technoparks", why: "The sentence before says many schools are inside technoparks." },
          { prompt: "In \"Türkiye's aim in funding this training\", the words \"this training\" mean:", options: ["a course in online shopping for tourists","a course for bank workers and clerks","a lesson about family life at home","teaching at the vocational schools"], answer: "teaching at the vocational schools", why: "The training is the education that the vocational schools give." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · Words in context", source: "Unit 1 · Reading practice · Cybersecurity",
        instruction: "Choose the meaning of each word or phrase as it is used in the passage about cybersecurity.",
        items: [
          { prompt: "In the passage, the word misuse means:", options: ["protect carefully","use in a harmful way","sell at a very low price","copy by hand"], answer: "use in a harmful way", why: "Hackers who misuse data use it in a harmful way." },
          { prompt: "In the passage, the word defend means:", options: ["make faster","turn off","keep safe","give away"], answer: "keep safe", why: "Specialists defend networks by protecting them from attack." },
          { prompt: "In the passage, the word recognise means:", options: ["know what it is","forget completely","pay for","build quickly"], answer: "know what it is", why: "To recognise a threat is to know what it is when you see it." },
          { prompt: "In the passage, the word cooperate means:", options: ["argue with each other","compete against","ignore each other","work together"], answer: "work together", why: "Universities and companies cooperate when they work together." },
          { prompt: "In the passage, the word struggle, as in rarely struggle to find a job, means:", options: ["feel proud","find it hard","get tired of","refuse to try"], answer: "find it hard", why: "Graduates rarely have difficulty finding a job." },
          { prompt: "In the passage, the word institutions, as in state institutions, means:", options: ["small local shops","private family homes","official bodies","old stone buildings"], answer: "official bodies", why: "State institutions are official organisations that belong to the state." },
          { prompt: "In the passage, the word gain, as in gain real experience, means:", options: ["lose","borrow","sell","get"], answer: "get", why: "Students get real experience by working with professionals." },
          { prompt: "In the passage, the word secure, as in keep data secure, means:", options: ["protected","very expensive","slow to load","easy to break"], answer: "protected", why: "Secure data is safe from hackers." }
        ]
      },
      {
        type: "reading", title: "B1 Reading · Extra hard", passageTitle: "The exchange-day map",
        passage: "On the first Monday of a partner-school exchange, 9B expected to follow the timetable printed in the welcome pack. The plan changed when the visiting students arrived late, so teacher Ms Arslan asked small groups to guide them around the building. Ece volunteered, although she had never led a tour in English before. She could explain where the library and science rooms were, but she was unsure how to describe the new sports hall. Instead of pretending, she asked a classmate who knew the building well to help. The visitors later said that this made the tour easier to follow. At lunch, Ece discovered that two guests could speak Turkish, so they compared school routines in both languages. By the end of the day, she understood that being a good guide did not mean knowing every answer; it meant helping people find one.",
        questions: [
          { prompt: "Why did Ms Arslan ask students to guide the visitors?", options: ["The printed timetable had been cancelled permanently.", "The visitors arrived late, so the plan changed.", "The guests could not understand any English.", "Ece had already worked as a professional guide."], answer: 1, why: "The passage says the late arrival changed the plan, so students guided small groups." },
          { prompt: "What can be inferred about Ece when she asks a classmate for help?", options: ["She would rather avoid speaking to visitors.", "She knows when to ask for help.", "She thinks the sports hall should be removed from the tour.", "She expects visitors to know the school already."], answer: 1, why: "Ece is unsure about one building and seeks help instead of pretending to know." },
          { prompt: "What does the final sentence suggest about being a good guide?", options: ["A guide should memorise every detail before meeting visitors.", "A guide should speak only the visitors' first language.", "A guide helps by finding answers, not by knowing everything.", "A guide should let visitors explore the school without support."], answer: 2, why: "The conclusion contrasts knowing every answer with helping visitors find one." },
          { prompt: "What did Ece find out at lunch?", options: ["That two guests could speak Turkish","That the timetable had been cancelled","That the library was closed to visitors","That her classmate was a professional guide"], answer: 0, why: "At lunch she discovered that two guests could speak Turkish." },
          { prompt: "In the passage, the word volunteered means:", options: ["refused to join an activity","was chosen by the teacher at random","finished a task before everyone else","offered to help or take part"], answer: 3, why: "Ece offered to guide, although nobody forced her." },
          { prompt: "What was Ece unsure about?", options: ["Where the library was","How to find the science rooms","How to describe the new sports hall","Whether the visitors liked the lunch menu"], answer: 2, why: "She could explain the library and science rooms but not the new sports hall." },
          { prompt: "What is the writer's main purpose in this text?", options: ["To show what one student learned about guiding","To give clear directions to the new sports hall","To advertise partner-school exchange programmes","To explain how to print a school timetable"], answer: 0, why: "The text tells one day's story and ends with what Ece learned about guiding." }
        ]
      },
      {
        type: "quiz", title: "B1 Reading · Who did what?", source: "Unit 1 · Reading practice · The exchange day",
        instruction: "Choose the best answer about the exchange-day text.",
        items: [
          { prompt: "Who asked small groups of students to guide the visitors?", options: ["Ece","Ms Arslan","The visitors","A classmate"], answer: "Ms Arslan", why: "Teacher Ms Arslan asked small groups to guide them." },
          { prompt: "Who had never led a tour in English before?", options: ["A classmate","Ms Arslan","Ece","One of the guests"], answer: "Ece", why: "Ece had never led a tour in English before." },
          { prompt: "What was printed in the welcome pack?", options: ["A list of the guests","A school uniform","Some tickets for lunch","A timetable"], answer: "A timetable", why: "9B expected to follow the timetable printed in the welcome pack." },
          { prompt: "When did the plan change?", options: ["When lunch ended at midday","When Ece asked her classmate for help","When the visitors arrived late","When the new sports hall opened"], answer: "When the visitors arrived late", why: "The plan changed when the visiting students arrived late." },
          { prompt: "Who helped Ece with the new sports hall?", options: ["The head teacher of the school","A teacher from the visiting school","One of the guests from abroad","A classmate who knew the building"], answer: "A classmate who knew the building", why: "She asked a classmate who knew the building well." },
          { prompt: "What did Ece and the two guests do at lunch?", options: ["They compared school routines","They practised giving tours together","They changed the timetable for Tuesday","They toured the library and the labs"], answer: "They compared school routines", why: "They compared school routines in both languages." },
          { prompt: "What did the visitors say about Ece asking for help?", options: ["It made the tour much too long.","It made the tour easy to follow.","It was a serious mistake.","It was not a good idea for a guide."], answer: "It made the tour easy to follow.", why: "The visitors later said it made the tour easier to follow." },
          { prompt: "Which detail shows that Ece was brave?", options: ["She volunteered despite her lack of practice.","She knew every room in the school very well.","She refused to ask anyone for help at all.","She stayed silent during the whole lunch."], answer: "She volunteered despite her lack of practice.", why: "She volunteered although she had never led a tour in English before." }
        ]
      }
    ]
  }
});
