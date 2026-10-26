window.unitContent = window.unitContent || [];
window.unitContent[0] = Object.assign(window.unitContent[0] || {}, {
  reading: {
    activities: [
      {
        type: "reading", title: "Reading 1 · A vlogger's trip", passageTitle: "Nora's big trip",
        passage: "Nora makes her living by filming her travels, and her latest video is the longest she has ever posted. It covers about two months on the road. The first stop is Chile. There she chats with local people in Spanish, wanders around Santiago and photographs people in traditional dress. Next comes Peru, where her friend Isabel, who lives in Lima, joins her. The two of them tour the old stone city of Machu Picchu and also spend a day in the Amazon. Then Nora flies to Northern Cyprus and eats her way through the restaurants at Büyük Han in Lefkoşa. After that she heads east to five Turkic states. In Baku she finds the monuments of two poets, Vahid and Fuzuli, and tries out her Azerbaijani. Then, in Tashkent, she has lunch with Uzbek friends before walking around Independence Square and the Amir Timur Museum. Next, Ashgabat offers the ruins of Nisa, a site from the time of the Parthian Empire, and a museum full of Turkmen carpets. Afterwards, in Astana, her Kazakh friend Tomiris welcomes her with a meal of Kazakh dishes. Her next stop is Bishkek, where Nora wanders through Osh Bazaar and buys cheese, meat and spices. Her final destination is Thailand. In Bangkok she visits the Grand Palace, whose towers shine with gold, and tries some Thai dishes. Nobody knows where she is going next, and that mystery keeps her fans waiting for each new video.",
        questions: [
          { prompt: "Which title fits this text best?", options: ["Easy ways to edit your holiday videos at home", "A video diary of a long trip abroad", "Why Spanish is the best language to study", "A quiet weekend break in a single city"], answer: 1, why: "The text follows one long journey through many places, so a video diary of a long trip fits best." },
          { prompt: "Which pair of things does Nora do in Peru?", options: ["She tours Machu Picchu and spends a day in the Amazon.", "She tastes Kazakh dishes and visits a bazaar.", "She tries her Azerbaijani and finds monuments to poets.", "She walks around a palace with golden towers."], answer: 0, why: "In Peru she tours Machu Picchu and spends a day in the Amazon." },
          { prompt: "Which country does Nora's trip end in?", options: ["Kyrgyzstan", "Peru", "Chile", "Thailand"], answer: 3, why: "Her final destination is Thailand." },
          { prompt: "In the passage, Nora eats her way through the restaurants. This means that she:", options: ["cooks a meal in every restaurant herself", "refuses to eat anything she does not know", "tries food at one place after another", "works as a waiter in several cafés"], answer: 2, why: "Eating your way through places means trying food in one place after another." },
          { prompt: "What can we infer from the friends Nora meets in Peru, Uzbekistan and Kazakhstan?", options: ["She dislikes travelling alone and prefers organised tours.", "She already knows people in some of the places.", "She is only interested in meeting famous people.", "She plans to move to one of those countries."], answer: 1, why: "Isabel, the Uzbek friends and Tomiris show that she knew people in several of the places she visited." },
          { prompt: "What is special about Nora's latest video?", options: ["It is the shortest one she has made.", "It was filmed in a single city.", "It is her longest video so far.", "It shows her first ever trip to Asia."], answer: 2, why: "The first sentence says it is the longest video she has ever posted." },
          { prompt: "What keeps Nora's fans interested in each new video?", options: ["The mystery about her next stop", "The low price of her travel tickets", "The prizes she gives to viewers", "The recipes she shares after each trip"], answer: 0, why: "Nobody knows where she is going next, and that mystery keeps her fans waiting." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Is it on the route?", source: "Unit 1 · Vocabulary c · p.28",
        instruction: "Read Nora's trip again. Is each city on her route?",
        items: [
          { prompt: "Route check: Seoul", options: ["On her route", "Not on her route"], answer: "Not on her route", why: "Seoul is not mentioned in Nora's story." },
          { prompt: "Route check: Tashkent", options: ["On her route", "Not on her route"], answer: "On her route", why: "She has lunch with Uzbek friends in Tashkent." },
          { prompt: "Route check: Astana", options: ["On her route", "Not on her route"], answer: "On her route", why: "Her Kazakh friend welcomes her in Astana." },
          { prompt: "Route check: Cairo", options: ["On her route", "Not on her route"], answer: "Not on her route", why: "Cairo is not part of the trip in the text." },
          { prompt: "Route check: Ashgabat", options: ["On her route", "Not on her route"], answer: "On her route", why: "She sees the ruins of Nisa and a carpet museum in Ashgabat." },
          { prompt: "Route check: Berlin", options: ["On her route", "Not on her route"], answer: "Not on her route", why: "Berlin is never mentioned." },
          { prompt: "Route check: Dubai", options: ["On her route", "Not on her route"], answer: "Not on her route", why: "The text does not mention Dubai." },
          { prompt: "Route check: Bishkek", options: ["On her route", "Not on her route"], answer: "On her route", why: "She buys cheese, meat and spices at Osh Bazaar in Bishkek." },
          { prompt: "Route check: Lefkoşa", options: ["On her route", "Not on her route"], answer: "On her route", why: "The restaurants of Büyük Han are in Lefkoşa." },
          { prompt: "Route check: Mexico City", options: ["On her route", "Not on her route"], answer: "Not on her route", why: "Mexico City is not part of her journey." },
          { prompt: "Route check: Bangkok", options: ["On her route", "Not on her route"], answer: "On her route", why: "She visits the Grand Palace in Bangkok." },
          { prompt: "Route check: Istanbul", options: ["On her route", "Not on her route"], answer: "Not on her route", why: "Istanbul is not on the list of her stops." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Fill in the route", source: "Unit 1 · Vocabulary g · p.29",
        instruction: "Complete each sentence about Nora's trip with one word or name from the word bank. Some words are extra.",
        wordBank: ["Chile", "Amazon", "Cyprus", "poets", "Osh", "Nisa", "Thailand", "Palace", "carpets", "Tashkent", "Isabel", "Tomiris", "castle", "Kyrgyz"],
        items: [
          { prompt: "The first scenes of Nora's video are filmed in ___, before she flies on to Peru.", answer: "Chile", why: "Chile is the first stop on her route." },
          { prompt: "Machu Picchu and the ___ are the two places Nora enjoys in Peru.", answer: "Amazon", why: "In Peru she tours Machu Picchu and spends a day in the Amazon." },
          { prompt: "Büyük Han, with its restaurants, is in Lefkoşa, a city in Northern ___.", answer: "Cyprus", why: "Lefkoşa is in Northern Cyprus." },
          { prompt: "In Baku, Nora finds monuments for two ___, Vahid and Fuzuli.", answer: "poets", why: "Vahid and Fuzuli are the two poets." },
          { prompt: "Nora's Kazakh friend ___ welcomes her in Astana with a big meal.", answer: "Tomiris", why: "Tomiris is the name of the friend in Astana." },
          { prompt: "Nora walks around Independence Square in ___.", answer: "Tashkent", why: "The square is in Tashkent, where she also visits a museum." },
          { prompt: "The ruins of ___ in Ashgabat date from the time of the Parthian Empire.", answer: "Nisa", why: "Nisa is the ancient site she sees in Ashgabat." },
          { prompt: "A museum in Ashgabat is full of Turkmen ___.", answer: "carpets", why: "The Ashgabat museum shows Turkmen carpets." },
          { prompt: "Nora buys cheese, meat and spices at ___ Bazaar in Bishkek.", answer: "Osh", why: "The market she wanders through in Bishkek is Osh Bazaar." },
          { prompt: "After the Turkic states, Nora's last stop is ___.", answer: "Thailand", why: "Thailand is her final destination." },
          { prompt: "The gold towers of the Grand ___ shine in Bangkok.", answer: "Palace", why: "She visits the Grand Palace, whose towers shine with gold." },
          { prompt: "In Peru, Nora's friend ___ joins her for the trip.", answer: "Isabel", why: "Isabel lives in Lima and joins Nora in Peru." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Who, what, where?", source: "Unit 1 · Reading practice · Nora's trip",
        instruction: "Scan Nora's story again. Choose the best answer.",
        items: [
          { prompt: "Scan: which museum does Nora visit in Tashkent?", options: ["A museum of Turkmen carpets", "The Amir Timur Museum", "A museum of rock art", "The Maiden Tower museum"], answer: "The Amir Timur Museum", why: "In Tashkent she walks around Independence Square and the Amir Timur Museum." },
          { prompt: "Scan: what is Büyük Han?", options: ["A tall mountain in the north of Peru", "A large bazaar full of spices in Bishkek", "A museum of old carpets in Turkmenistan", "A place with restaurants in Lefkoşa"], answer: "A place with restaurants in Lefkoşa", why: "She eats her way through the restaurants at Büyük Han in Lefkoşa." },
          { prompt: "Scan: which food does Nora try in Bangkok?", options: ["Kazakh dishes", "Chilean stews", "Cypriot sweets", "Thai dishes"], answer: "Thai dishes", why: "In Bangkok she tries some Thai dishes." },
          { prompt: "Scan: which language does Nora use to chat with local people in Chile?", options: ["Uzbek", "Spanish", "Thai", "Turkish"], answer: "Spanish", why: "She chats with local people in Spanish in Chile." },
          { prompt: "Scan: what does Nora photograph in Chile?", options: ["Ancient ruins high in the mountains", "The golden towers of a palace", "Carpets in a large museum", "People in traditional dress"], answer: "People in traditional dress", why: "She photographs people in traditional dress." },
          { prompt: "Scan: how does Tomiris welcome Nora?", options: ["With a walk through the Amazon region", "With a meal of Kazakh dishes", "With a map of Machu Picchu", "With a photo of two famous poets"], answer: "With a meal of Kazakh dishes", why: "Tomiris welcomes her with a meal of Kazakh dishes in Astana." },
          { prompt: "Scan: what shines with gold in Bangkok?", options: ["The old carpets of the museum in Ashgabat", "The busy food stalls of Osh Bazaar", "The towers of the Grand Palace", "The wide streets of Santiago"], answer: "The towers of the Grand Palace", why: "The towers of the Grand Palace shine with gold." },
          { prompt: "Scan: Nisa, the ruined site, is linked to which empire?", options: ["The Parthian Empire", "The ancient Roman Empire", "The British Empire in Asia", "The Inca Empire of Peru"], answer: "The Parthian Empire", why: "Nisa is a site from the time of the Parthian Empire." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Put the stops in order", source: "Unit 1 · Reading practice · Nora's trip",
        instruction: "Think about the order of Nora's journey and choose the best answer.",
        items: [
          { prompt: "Trip order: which city comes straight after Lefkoşa?", options: ["Bishkek", "Baku", "Bangkok", "Santiago"], answer: "Baku", why: "After Northern Cyprus she heads east to the Turkic states, and Baku is the first one." },
          { prompt: "Trip order: which city does Nora see straight after Tashkent?", options: ["Santiago", "Baku", "Ashgabat", "Bishkek"], answer: "Ashgabat", why: "Ashgabat comes straight after Tashkent in the text." },
          { prompt: "Trip order: which city lies between Astana and Bangkok on her route?", options: ["Bishkek", "Tashkent", "Baku", "Lefkoşa"], answer: "Bishkek", why: "After Astana she wanders through Osh Bazaar in Bishkek, and then she flies to Thailand." },
          { prompt: "Trip order: where is Nora just before she flies to Northern Cyprus?", options: ["Uzbekistan", "Thailand", "Peru", "Chile"], answer: "Peru", why: "She leaves Peru for Northern Cyprus." },
          { prompt: "Trip order: which of these things happens last?", options: ["Nora tours Machu Picchu", "Nora eats at Büyük Han", "Nora visits the Grand Palace", "Nora has lunch with Uzbek friends"], answer: "Nora visits the Grand Palace", why: "The Grand Palace is in Bangkok, her final stop." },
          { prompt: "Trip order: Nora goes to Baku ___.", options: ["after she is in Bangkok", "before she goes to Tashkent", "after she goes to Astana", "before she goes to Santiago"], answer: "before she goes to Tashkent", why: "Baku is the first Turkic stop, so it comes before Tashkent." },
          { prompt: "Trip order: Santiago comes ___.", options: ["after Lefkoşa", "after Bishkek", "between Baku and Tashkent", "before Machu Picchu"], answer: "before Machu Picchu", why: "Santiago is in Chile, the first stop, before Peru." },
          { prompt: "Trip order: Nora goes to Tashkent ___.", options: ["before she goes to Santiago", "before she goes to Peru", "after she goes to Bishkek", "after she goes to Baku"], answer: "after she goes to Baku", why: "Baku comes first among the Turkic stops, and Tashkent follows." }
        ]
      },
      {
        type: "reading", title: "Reading 2 · A warm country", passageTitle: "Where Asia meets Europe",
        passage: "If you want a trip that feels genuine, the Turkic states are worth a closer look. They have their own traditions, a long history and many corners that tourists rarely visit, so the places and customs you find there are authentic: they are not arranged for visitors. Azerbaijan is a fine example, and a holiday there is easy to remember. The country sits at the point where Western Asia joins Eastern Europe. The Caucasus Mountains rise along its northern side, and the Caspian Sea washes its eastern shore. The landscape holds some strange sights. Small mud volcanoes bubble, hot springs steam, and on a slope close to the Caspian coast a fire called Yanar Dağ burns on its own, all day and all night. Baku, the capital, is home to a UNESCO World Heritage Site, the Walled City, which includes the Maiden Tower and the Palace of the Shirvanshahs. It is also a busy business centre with galleries, concerts and glass skyscrapers rising beside centuries-old walls. The food is another reason to go. Its many dishes recall the days when the country was a stop on the Silk Road, and merchants exchanged both goods and ideas. Best of all, even a visitor who knows no Azerbaijani at all soon feels at home.",
        questions: [
          { prompt: "What is the main purpose of the passage?", options: ["To warn tourists about the cost of living in Baku", "To explain how the Caspian Sea was formed", "To encourage readers to visit Azerbaijan", "To teach readers the Azerbaijani language"], answer: 2, why: "The writer gives reasons to travel to Azerbaijan: its sights, its capital and its food." },
          { prompt: "Which feature lies along the northern side of Azerbaijan?", options: ["The Caspian Sea and its beaches", "The Silk Road trading route", "The Walled City district", "The Caucasus Mountains"], answer: 3, why: "The Caucasus Mountains rise along its northern side." },
          { prompt: "What makes the places in the Turkic states authentic?", options: ["They were built recently for tourists.", "They are not arranged for visitors.", "They are the biggest in the world.", "They are free to enter for everyone."], answer: 1, why: "The text explains that these places and customs are not arranged for visitors." },
          { prompt: "In the passage, Its many dishes recall the days when the country was a stop on the Silk Road. Here, recall means:", options: ["remind people of", "make people forget about", "put an end to", "ask a price for"], answer: 0, why: "The dishes remind people of the days of the Silk Road." },
          { prompt: "What can we infer about the dishes of Azerbaijan?", options: ["They are all copied from foreign restaurants.", "They are made only with fish from the Caspian Sea.", "They are too spicy for most visitors.", "They reflect the country's trading past."], answer: 3, why: "The dishes recall the Silk Road days, so they reflect the trading past of the country." },
          { prompt: "Which natural sight is found near the Caspian coast?", options: ["A hot spring inside the Walled City", "A fire called Yanar Dağ", "A mud volcano in Baku's market", "A glacier high in the Caucasus"], answer: 1, why: "A fire called Yanar Dağ burns on a slope close to the coast." },
          { prompt: "Which description of Baku matches the passage?", options: ["A lively city of old walls and new towers", "A quiet mountain village with no modern buildings", "A small harbour where only traders live", "A desert town far from the sea"], answer: 0, why: "Baku has glass skyscrapers rising beside centuries-old walls." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · Scan for the facts", source: "Unit 1 · Language Awareness b · p.30",
        instruction: "Scan the passage about Azerbaijan and write the missing word.",
        items: [
          { prompt: "Scan task: Azerbaijan's capital is ___.", answer: "Baku", why: "Baku is named as the capital." },
          { prompt: "Scan task: Azerbaijan sits where Western Asia joins Eastern ___.", answer: "Europe", why: "The country sits where Western Asia joins Eastern Europe." },
          { prompt: "Scan task: the ___ Sea washes the eastern shore.", answer: "Caspian", why: "The Caspian Sea is on the eastern side." },
          { prompt: "Scan task: the ___ Mountains rise along the northern side.", answer: "Caucasus", why: "The Caucasus Mountains lie along the north." },
          { prompt: "Scan task: the fire that burns on its own is called Yanar ___.", answer: "Dağ", accepted: ["Dag"], why: "The fire is named Yanar Dağ." },
          { prompt: "Scan task: the Maiden ___ is inside the Walled City.", answer: "Tower", why: "The Walled City includes the Maiden Tower." },
          { prompt: "Scan task: the UNESCO World Heritage Site in Baku is the Walled ___.", answer: "City", why: "Baku is home to a UNESCO World Heritage Site, the Walled City." },
          { prompt: "Scan task: merchants once exchanged goods and ideas along the ___ Road.", answer: "Silk", why: "The country was a stop on the Silk Road." },
          { prompt: "Scan task: modern glass ___ rise beside old walls in Baku.", answer: "skyscrapers", why: "Glass skyscrapers rise beside centuries-old walls." },
          { prompt: "Scan task: the many ___ of the country recall its Silk Road past.", answer: "dishes", accepted: ["dish"], why: "Its many dishes recall the days of the Silk Road." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · True, False or Not mentioned", source: "Unit 1 · Language Awareness c · p.30",
        instruction: "Choose True, False or Not mentioned according to the passage about Azerbaijan.",
        items: [
          { prompt: "The Caspian Sea lies to the west of Azerbaijan.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The Caspian Sea washes the eastern shore." },
          { prompt: "The Maiden Tower is part of the Walled City.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The Walled City includes the Maiden Tower." },
          { prompt: "Workers light the fire of Yanar Dağ every evening.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The fire burns on its own, all day and all night." },
          { prompt: "Tourists must book a guide before they visit Baku.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage says nothing about guides." },
          { prompt: "Merchants on the Silk Road exchanged ideas as well as goods.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Merchants exchanged both goods and ideas." },
          { prompt: "Azerbaijan is a good choice for travellers who want real places and customs.", options: ["True", "False", "Not mentioned"], answer: "True", why: "The writer calls its places and customs authentic." },
          { prompt: "The winters in Azerbaijan are very cold.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The text never talks about the weather." },
          { prompt: "Visitors who cannot speak Azerbaijani soon feel unwelcome.", options: ["True", "False", "Not mentioned"], answer: "False", why: "Even a visitor who knows no Azerbaijani soon feels at home." },
          { prompt: "The writer says tourists often visit every corner of the Turkic states.", options: ["True", "False", "Not mentioned"], answer: "False", why: "The writer says there are many corners that tourists rarely visit." },
          { prompt: "Baku offers concerts and galleries.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Baku is described as a business centre with galleries and concerts." },
          { prompt: "The Maiden Tower is the oldest building in Baku.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage does not say which building is the oldest." },
          { prompt: "Hot springs can be found in Azerbaijan.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Hot springs are among the strange sights of the landscape." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · Words in context", source: "Unit 1 · Reading practice · Azerbaijan",
        instruction: "Choose the meaning of each word or phrase as it is used in the passage about Azerbaijan.",
        items: [
          { prompt: "In the passage, the word authentic means:", options: ["old and slightly broken after many years", "real, not made for show", "far too expensive for most travellers", "hard to find on any map"], answer: "real, not made for show", why: "The passage explains it: the places and customs are not arranged for visitors." },
          { prompt: "In the passage, the word rarely means:", options: ["not often", "every day", "for a short time", "with great care"], answer: "not often", why: "Places that tourists rarely visit are places they do not often go to." },
          { prompt: "In the passage, the word merchants means:", options: ["traders who buy and sell", "builders of tall towers", "guides who help tourists", "workers who farm the land"], answer: "traders who buy and sell", why: "Merchants on the Silk Road exchanged goods and ideas, so they were traders." },
          { prompt: "In the passage, the word exchanged means:", options: ["carried without paying", "counted one by one", "gave and got in return", "kept for themselves"], answer: "gave and got in return", why: "To exchange goods and ideas is to give some and get some in return." },
          { prompt: "In the passage, the Caspian Sea washes its eastern shore. Here, washes means:", options: ["cleans with soap and water", "drives people away from", "takes something out of", "touches the edge of"], answer: "touches the edge of", why: "The sea reaches the eastern shore and touches its edge." },
          { prompt: "In the passage, the word centuries-old means:", options: ["only a few weeks old", "built from glass and steel", "hundreds of years old", "painted by a famous artist"], answer: "hundreds of years old", why: "A century is a hundred years, so centuries-old walls are hundreds of years old." },
          { prompt: "In the passage, a visitor soon feels at home. This means that the visitor:", options: ["has to look for a place to sleep", "is bored by the same places", "misses the family very much", "is comfortable and welcome"], answer: "is comfortable and welcome", why: "Even a visitor who knows no Azerbaijani soon feels at home, so visitors feel comfortable and welcome." },
          { prompt: "In the passage, the word corners, as in many corners that tourists rarely visit, means:", options: ["sharp turns on a mountain road", "quiet, little-known places", "the edges of a page", "the walls of a room"], answer: "quiet, little-known places", why: "Corners that tourists rarely visit are quiet, little-known places." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · Find the sentence", source: "Unit 1 · Reading practice · Azerbaijan",
        instruction: "Choose the part of the passage that answers the question. Each option is taken from the text.",
        items: [
          { prompt: "Find the part of the text that explains what makes a place authentic.", options: ["The country sits at the point where Western Asia joins Eastern Europe", "merchants exchanged both goods and ideas", "they are not arranged for visitors", "glass skyscrapers rising beside centuries-old walls"], answer: "they are not arranged for visitors", why: "This part says what authentic places are like." },
          { prompt: "Find the part of the text that tells us which sea touches Azerbaijan.", options: ["home to a UNESCO World Heritage Site, the Walled City", "the Caspian Sea washes its eastern shore", "Its many dishes recall the days when the country was a stop on the Silk Road", "many corners that tourists rarely visit"], answer: "the Caspian Sea washes its eastern shore", why: "Only this part names a sea that touches the country." },
          { prompt: "Find the part of the text that describes a fire that nobody has to light.", options: ["a fire called Yanar Dağ burns on its own, all day and all night", "glass skyscrapers rising beside centuries-old walls", "they are not arranged for visitors", "even a visitor who knows no Azerbaijani at all soon feels at home"], answer: "a fire called Yanar Dağ burns on its own, all day and all night", why: "The fire burns on its own, so nobody has to light it." },
          { prompt: "Find the part of the text that names a site in Baku protected for its history.", options: ["merchants exchanged both goods and ideas", "many corners that tourists rarely visit", "The country sits at the point where Western Asia joins Eastern Europe", "home to a UNESCO World Heritage Site, the Walled City"], answer: "home to a UNESCO World Heritage Site, the Walled City", why: "A UNESCO World Heritage Site is protected for its history, and this part names the Walled City." },
          { prompt: "Find the part of the text that puts old and modern things side by side.", options: ["glass skyscrapers rising beside centuries-old walls", "the Caspian Sea washes its eastern shore", "a fire called Yanar Dağ burns on its own, all day and all night", "merchants exchanged both goods and ideas"], answer: "glass skyscrapers rising beside centuries-old walls", why: "Modern glass skyscrapers stand beside walls that are centuries old." },
          { prompt: "Find the part of the text that links the cooking to the past.", options: ["It is also a busy business centre with galleries, concerts and glass skyscrapers rising beside centuries-old walls", "Its many dishes recall the days when the country was a stop on the Silk Road", "many corners that tourists rarely visit", "home to a UNESCO World Heritage Site, the Walled City"], answer: "Its many dishes recall the days when the country was a stop on the Silk Road", why: "This part connects the dishes with the Silk Road days." },
          { prompt: "Find the part of the text that shows visitors do not need the local language.", options: ["glass skyscrapers rising beside centuries-old walls", "they are not arranged for visitors", "Azerbaijan is a fine example, and a holiday there is easy to remember", "even a visitor who knows no Azerbaijani at all soon feels at home"], answer: "even a visitor who knows no Azerbaijani at all soon feels at home", why: "A visitor who knows no Azerbaijani still feels at home." },
          { prompt: "Find the part of the text that says what merchants did.", options: ["The country sits at the point where Western Asia joins Eastern Europe", "many corners that tourists rarely visit", "merchants exchanged both goods and ideas", "the Caspian Sea washes its eastern shore"], answer: "merchants exchanged both goods and ideas", why: "This part says what the merchants did: they exchanged goods and ideas." }
        ]
      },
      {
        type: "reading", title: "Reading 3 · Somewhere far away", passageTitle: "Chile at a glance",
        passage: "(A) Chile occupies a thin strip of land on the western edge of South America, with the Andes on one side and the Pacific Ocean on the other. Its far south reaches almost to Antarctica. Argentina, Peru and Bolivia are its neighbours, which makes it simple to add those countries to a Chilean holiday. (B) The country stretches for thousands of kilometres from top to bottom, so its climate is far from uniform. The north holds a desert that is among the driest anywhere, while the far south has glaciers that formed thousands of years ago. Add old ruins, different landscapes and a rich cultural heritage, and you can see why Chile feels special. (C) Lovers of nature should head for Torres del Paine, where lakes, rivers, forests and glaciers fill the scenery and long hikes are a favourite activity. Other adventures wait in the Atacama Desert and on Chiloé Island. (D) Santiago, the capital and largest city, sits in a valley surrounded by white mountain peaks. Visitors can go snowboarding, climbing or hiking, and on a single day it is possible to ski in the Andes, stroll along a beach and then go surfing on Pacific waves. (E) Spanish is the official language, but a number of Chileans speak English as well. People there have a reputation for being kind and friendly. Most are descended from European settlers or from indigenous peoples, and the Mapuche are the largest indigenous group. Together these roots have produced a varied and lively culture.",
        questions: [
          { prompt: "Which title fits the whole text best?", options: ["How to learn Spanish before a flight", "The history of skiing in the Andes", "A guide to the shops of Santiago", "A long, narrow land full of variety"], answer: 3, why: "Each paragraph shows a different side of one long country, so a title about variety fits best." },
          { prompt: "According to paragraph B, which part of Chile has glaciers?", options: ["The north, near Peru", "The centre, around Santiago", "The far south", "The coast beside the capital"], answer: 2, why: "Paragraph B says the far south has glaciers." },
          { prompt: "How is Santiago described in paragraph D?", options: ["A small port town on the Pacific coast", "A big city in a mountain valley", "A desert village far from any mountain", "A quiet island town with no visitors"], answer: 1, why: "Santiago is the largest city and sits in a valley surrounded by mountain peaks." },
          { prompt: "In paragraph E, the word reputation, as in a reputation for being kind, means:", options: ["a general opinion about someone", "a message that is sent to many people", "the amount of money someone has saved", "the right to enter a country freely"], answer: 0, why: "A reputation is what people generally think about someone." },
          { prompt: "Why does the writer name Argentina, Peru and Bolivia?", options: ["To explain why the north is so dry", "To list the countries where glaciers are found", "To suggest other places to visit nearby", "To say which countries speak the same language"], answer: 2, why: "The writer says these neighbours are easy to add to a Chilean holiday." },
          { prompt: "What is a favourite activity for visitors to Torres del Paine?", options: ["Surfing in the Pacific", "Long hikes in the scenery", "Skiing near the capital", "Visiting ancient ruins in the desert"], answer: 1, why: "Paragraph C says long hikes are a favourite activity there." },
          { prompt: "Which statement about the Mapuche is correct?", options: ["They are the largest indigenous group in Chile.", "They arrived in Chile from Europe last century.", "They speak English as their first language.", "They live only in the capital city."], answer: 0, why: "Paragraph E says the Mapuche are the largest indigenous group." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Which paragraph?", source: "Unit 1 · Reading b · p.32",
        instruction: "Read the passage quickly and choose the paragraph that matches each description.",
        items: [
          { prompt: "Which paragraph would you read to learn why the climate is not the same everywhere?", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"], answer: "Paragraph B", why: "Paragraph B explains that the great length of the country gives it different climates." },
          { prompt: "Which paragraph names the countries next to Chile?", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"], answer: "Paragraph A", why: "Paragraph A names Argentina, Peru and Bolivia as the neighbours." },
          { prompt: "Which paragraph suggests places for a long walk among lakes and glaciers?", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"], answer: "Paragraph C", why: "Paragraph C talks about hikes among the lakes and glaciers of Torres del Paine." },
          { prompt: "Which paragraph mentions snowboarding and surfing?", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"], answer: "Paragraph D", why: "Paragraph D lists the sports visitors can try around Santiago." },
          { prompt: "Which paragraph tells you about the Mapuche?", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"], answer: "Paragraph E", why: "The Mapuche are named in paragraph E." },
          { prompt: "Which paragraph says how far south Chile goes?", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"], answer: "Paragraph A", why: "Paragraph A says the far south reaches almost to Antarctica." },
          { prompt: "Which paragraph names the Atacama Desert?", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"], answer: "Paragraph C", why: "The Atacama Desert is named in paragraph C, among other adventures." },
          { prompt: "Which paragraph mentions the official language?", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"], answer: "Paragraph E", why: "Paragraph E says Spanish is the official language." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Reasons and details", source: "Unit 1 · Reading g · p.33",
        instruction: "Choose the best answer to each question about Chile.",
        items: [
          { prompt: "Detail check: why does the writer say Chile feels special?", options: ["It is the largest country in South America.", "It has no neighbours at all.", "It has ruins, landscapes and heritage.", "It never has any snow."], answer: "It has ruins, landscapes and heritage.", why: "Old ruins, different landscapes and a rich heritage make Chile feel special." },
          { prompt: "Detail check: why do nature lovers head for Torres del Paine?", options: ["It is the busiest shopping district in Chile.", "It has lakes, forests and glaciers.", "It is the place where the Mapuche live.", "It is famous for its warm sandy beaches."], answer: "It has lakes, forests and glaciers.", why: "Lakes, rivers, forests and glaciers fill the scenery there." },
          { prompt: "Detail check: how can a visitor spend a single day near Santiago?", options: ["Skiing, strolling and then surfing", "Sailing all the way to Antarctica and back", "Crossing the whole Atacama Desert on foot", "Visiting all three neighbouring countries"], answer: "Skiing, strolling and then surfing", why: "In one day it is possible to ski, stroll along a beach and go surfing." },
          { prompt: "Detail check: why is Chilean culture described as varied?", options: ["All Chileans share a single tradition.", "It is copied from a neighbouring country.", "It was created only a few years ago.", "It mixes European and indigenous roots."], answer: "It mixes European and indigenous roots.", why: "European and indigenous roots together have produced a varied culture." },
          { prompt: "Detail check: which languages might a visitor use in Chile?", options: ["Only the Mapuche language everywhere", "Spanish, and sometimes English", "Only English, in every shop and town", "Portuguese and French, in most places"], answer: "Spanish, and sometimes English", why: "Spanish is official and a number of Chileans speak English as well." },
          { prompt: "Detail check: what does the text say about the north of Chile?", options: ["It is the place where the capital stands.", "It reaches almost to Antarctica.", "It is the part where the oldest glaciers formed.", "It holds a desert among the driest anywhere."], answer: "It holds a desert among the driest anywhere.", why: "Paragraph B says the north holds a desert that is among the driest anywhere." },
          { prompt: "Detail check: why does the text mention Chiloé Island?", options: ["It is another place for adventure.", "It is where most of the glaciers have melted.", "It is the home of the Mapuche people.", "It is the place where Spanish began."], answer: "It is another place for adventure.", why: "Other adventures wait in the Atacama Desert and on Chiloé Island." },
          { prompt: "Detail check: which two things lie on either side of Chile?", options: ["The Alps and the Atlantic Ocean", "The Sahara and the Indian Ocean", "The Andes and the Pacific Ocean", "The Himalayas and the Arctic Ocean"], answer: "The Andes and the Pacific Ocean", why: "The Andes are on one side and the Pacific Ocean on the other." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Words in context", source: "Unit 1 · Reading practice · Chile",
        instruction: "Choose the meaning of each word or phrase as it is used in the passage about Chile.",
        items: [
          { prompt: "In paragraph A, the word occupies means:", options: ["sells something to a stranger", "looks down from a high place", "takes up a place or area", "slowly moves away from a place"], answer: "takes up a place or area", why: "Chile occupies a strip of land, so it takes up that area." },
          { prompt: "In paragraph B, the word stretches means:", options: ["gets taller every single year", "runs a long way", "becomes much narrower", "pulls with great force"], answer: "runs a long way", why: "The country stretches for thousands of kilometres, so it runs a long way." },
          { prompt: "In paragraph B, the phrase far from uniform means:", options: ["the same everywhere", "very different from place to place", "cold and snowy for most of the year", "full of rain on every day of the year"], answer: "very different from place to place", why: "Uniform means the same everywhere, so far from uniform means very different from place to place." },
          { prompt: "In paragraph B, the word heritage means:", options: ["money kept in a family bank account", "a modern street full of shops", "a kind of local weather", "traditions from the past"], answer: "traditions from the past", why: "Cultural heritage is the history and traditions that come from the past." },
          { prompt: "In paragraph D, the word stroll means:", options: ["run as fast as possible", "walk in a relaxed way", "swim under the water", "jump from a high place"], answer: "walk in a relaxed way", why: "To stroll along a beach is to walk slowly and calmly." },
          { prompt: "In paragraph E, the word settlers means:", options: ["tourists who visit for a few days only", "workers who build new roads", "sailors who cross the ocean", "people who make a home in a new land"], answer: "people who make a home in a new land", why: "Settlers are people who go to live in a new place." },
          { prompt: "In paragraph E, the word indigenous means:", options: ["coming from a far-away continent across the sea", "belonging to a place from the beginning", "living only in big modern cities", "speaking more than three languages at home"], answer: "belonging to a place from the beginning", why: "Indigenous peoples are the first peoples of a place." },
          { prompt: "In paragraph E, the phrase descended from means:", options: ["walking down from a mountain", "being taught by", "having ancestors from", "travelling away from"], answer: "having ancestors from", why: "Descended from European settlers means having European settlers as ancestors." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Facts and names", source: "Unit 1 · Reading practice · Chile",
        instruction: "Scan the passage about Chile and choose the best answer.",
        items: [
          { prompt: "Fact check: which part of the world lies close to Chile's far south?", options: ["South Africa", "Greenland", "Antarctica", "Australia"], answer: "Antarctica", why: "The far south reaches almost to Antarctica." },
          { prompt: "Fact check: how long ago did the glaciers of the far south form?", options: ["Last winter", "Thousands of years ago", "About fifty years ago", "Only a few centuries ago"], answer: "Thousands of years ago", why: "Paragraph B says the glaciers formed thousands of years ago." },
          { prompt: "Fact check: which of these is an island named in the passage?", options: ["Santiago", "Antarctica", "The Andes", "Chiloé"], answer: "Chiloé", why: "The passage names Chiloé Island." },
          { prompt: "Fact check: what surrounds the valley where Santiago lies?", options: ["Dry desert sand", "White mountain peaks", "A wide green forest of tall trees", "A very large blue lake"], answer: "White mountain peaks", why: "Santiago sits in a valley surrounded by white mountain peaks." },
          { prompt: "Fact check: which activity is NOT named as a sport near Santiago?", options: ["Snowboarding", "Climbing", "Cycling", "Hiking"], answer: "Cycling", why: "Snowboarding, climbing and hiking are named; cycling is not." },
          { prompt: "Fact check: which sport can visitors try on the same day as skiing near Santiago?", options: ["Football", "Tennis", "Surfing", "Golf"], answer: "Surfing", why: "On a single day it is possible to ski, stroll along a beach and go surfing." },
          { prompt: "Fact check: besides indigenous peoples, which group do most Chileans come from?", options: ["Asian traders", "African explorers", "Arctic fishermen", "European settlers"], answer: "European settlers", why: "Most Chileans are descended from European settlers or from indigenous peoples." },
          { prompt: "Fact check: which country is NOT named as a neighbour of Chile?", options: ["Peru", "Bolivia", "Argentina", "Brazil"], answer: "Brazil", why: "The neighbours named are Argentina, Peru and Bolivia." }
        ]
      },
      {
        type: "reading", title: "Reading 4 · A safer digital world", passageTitle: "Life online, risks online",
        passage: "Today a great deal of daily life happens on a screen. A student can attend a class from the sofa, an employee can join a meeting from the kitchen table, and a shop owner can sell goods to customers in another city. We also book flights, pay our bills and have dinner delivered with a few taps. All of this saves hours that families can spend together or on rest. Yet every online service asks us for details about ourselves, and that habit carries a danger. Criminal hackers may take the information and use it to cheat people, or they may break into computer systems and disrupt ordinary life, from banking to health care. Because of this, every country needs trained people who can guard its networks and keep private data safe. Türkiye is responding by opening many cybersecurity vocational schools. Their students are taught to spot online dangers, block attacks and look after digital systems. A large share of these schools stand in technoparks, where universities and companies share research and business. Working next to professionals there gives students practical experience that a classroom alone could not offer. Employers are eager to hire the graduates: hospitals, banks, schools, government offices, security companies and many other firms all want them. By supporting this training, Türkiye hopes to give both its citizens and its companies a safer life online.",
        questions: [
          { prompt: "What is the passage mainly about?", options: ["How families can find more free time to spend together", "Why hackers have become more skilful with each passing year", "How Türkiye prepares specialists to keep people safe online", "The history of online banking and shopping around the world"], answer: 2, why: "The text explains the online risks and how Türkiye trains specialists against them." },
          { prompt: "Which online activity does the passage give as an example?", options: ["Streaming a film at night", "Having dinner delivered", "Playing a game with friends", "Learning to drive a car"], answer: 1, why: "The passage says we can have dinner delivered with a few taps." },
          { prompt: "What does the writer imply about banking and health care?", options: ["They depend on computer systems.", "They no longer use computers at all.", "They are services that only hackers can use.", "They are closed to everybody except students."], answer: 0, why: "Hackers may disrupt ordinary life, from banking to health care, so these services depend on computer systems." },
          { prompt: "In the passage, the phrase with a few taps means:", options: ["after waiting a very long time", "only if you visit a shop in person", "with the help of an expensive licence", "very quickly and easily"], answer: 3, why: "With a few taps on a screen, tasks are done quickly and easily." },
          { prompt: "What do students gain by working next to professionals?", options: ["Free computers to take home", "Shorter lessons every day", "Practical experience", "Higher marks in maths"], answer: 2, why: "Working next to professionals gives students practical experience." },
          { prompt: "Who is eager to hire the graduates?", options: ["Only large foreign software companies", "Hospitals, banks and offices", "Only the schools in technoparks", "Nobody, because there are no jobs"], answer: 1, why: "Hospitals, banks, schools, government offices and other firms all want graduates." },
          { prompt: "Why does the writer begin with everyday online activities?", options: ["To show how useful it is first", "To advertise one new online shop", "To teach readers a foreign language", "To explain how computers are built"], answer: 0, why: "The writer shows how useful going online is before describing its risks." },
          { prompt: "What does Türkiye hope to achieve with this training?", options: ["Cheaper Internet connections for every school", "More hackers working in the country", "Fewer people using computers", "A safer life online for everyone"], answer: 3, why: "The last sentence says Türkiye wants a safer life online for citizens and companies." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · True, False or Not mentioned", source: "Unit 1 · Roots and Routes c · p.34",
        instruction: "Choose True, False or Not mentioned according to the passage about cybersecurity schools.",
        items: [
          { prompt: "A student can attend a class online.", options: ["True", "False", "Not mentioned"], answer: "True", why: "A student can attend a class from the sofa." },
          { prompt: "Online services ask users for details about themselves.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Every online service asks us for details about ourselves." },
          { prompt: "Hackers may cheat people with the information they take.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Criminal hackers may use the information to cheat people." },
          { prompt: "Türkiye opened its first cybersecurity school last year.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage gives no date for any school." },
          { prompt: "Every cybersecurity school is inside a technopark.", options: ["True", "False", "Not mentioned"], answer: "False", why: "Only a large share of the schools stand in technoparks." },
          { prompt: "Technopark students learn only in a classroom.", options: ["True", "False", "Not mentioned"], answer: "False", why: "They work next to professionals and gain practical experience." },
          { prompt: "Students learn how to block attacks.", options: ["True", "False", "Not mentioned"], answer: "True", why: "They are taught to spot dangers, block attacks and look after systems." },
          { prompt: "Few employers want to hire the graduates.", options: ["True", "False", "Not mentioned"], answer: "False", why: "Employers are eager to hire the graduates." },
          { prompt: "Cybersecurity courses are free for every student.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage does not talk about the cost of the courses." },
          { prompt: "Doing tasks online can save people time.", options: ["True", "False", "Not mentioned"], answer: "True", why: "All of this saves hours." },
          { prompt: "Security companies are among the employers of graduates.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Security companies are named in the list of employers." },
          { prompt: "The teachers at these schools used to be hackers.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "The passage says nothing about the teachers." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · Short answers", source: "Unit 1 · Roots and Routes d · p.34",
        instruction: "Choose the best short answer to each question about the passage.",
        items: [
          { prompt: "Name one thing a shop owner can do online, according to the text.", options: ["Repair a customer's broken computer", "Sell to customers in another city", "Print tickets for every local train", "Teach a class in a technopark"], answer: "Sell to customers in another city", why: "A shop owner can sell goods to customers in another city." },
          { prompt: "Which services could hackers disrupt, according to the text?", options: ["Football matches and cinema shows", "Cooking at home and cleaning", "Banking and health care", "Farming and fishing villages"], answer: "Banking and health care", why: "Hackers may disrupt ordinary life, from banking to health care." },
          { prompt: "Name one skill that cybersecurity students learn.", options: ["Writing long novels for children", "Repairing cars in a garage", "Cooking dinner for a crowd", "Blocking attacks"], answer: "Blocking attacks", why: "Students are taught to block attacks." },
          { prompt: "Who shares research and business in technoparks?", options: ["Hackers and banks", "Universities and companies", "Doctors and their patients", "Families and close friends"], answer: "Universities and companies", why: "Universities and companies share research and business there." },
          { prompt: "What can families do with the hours that online tasks save?", options: ["Study for extra exams every evening", "Work much longer hours at the office", "Spend them together or rest", "Wait in long queues at the bank"], answer: "Spend them together or rest", why: "The saved hours are for families to spend together or on rest." },
          { prompt: "What does Türkiye hope to give its citizens and companies?", options: ["A faster train service", "A safer life online", "Cheaper holiday tickets", "A longer summer break"], answer: "A safer life online", why: "The aim is a safer life online for citizens and companies." },
          { prompt: "How do students get practical experience?", options: ["By reading about hackers at home", "By taking a long trip abroad", "By working next to professionals", "By watching films about computers"], answer: "By working next to professionals", why: "Working next to professionals in technoparks gives them practical experience." },
          { prompt: "Where do many of the cybersecurity schools stand?", options: ["In technoparks", "In hospitals", "In large banks", "In shopping centres"], answer: "In technoparks", why: "A large share of the schools stand in technoparks." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · Reference words", source: "Unit 1 · Reading practice · Cybersecurity",
        instruction: "Choose what the word or phrase in each sentence refers to.",
        items: [
          { prompt: "In \"All of this saves hours\", the words \"All of this\" mean:", options: ["hackers and the computer systems that they attack", "studying, meeting, selling and ordering online", "banks, schools and hospitals that need new staff", "the technoparks where universities and firms work"], answer: "studying, meeting, selling and ordering online", why: "The sentences before list the things people can do online." },
          { prompt: "In \"that habit carries a danger\", the words \"that habit\" mean:", options: ["giving online services details about ourselves", "spending the saved hours with the whole family", "using the sofa and the kitchen table as an office", "paying every single bill in cash at the bank counter"], answer: "giving online services details about ourselves", why: "Every online service asks for details, and giving them is the habit that carries a danger." },
          { prompt: "In \"use it to cheat people\", the word \"it\" means:", options: ["the online meeting we joined", "the information", "the shop owner's goods", "the school building"], answer: "the information", why: "Hackers take the information and use it to cheat people." },
          { prompt: "In \"they may break into computer systems\", the word \"they\" means:", options: ["the online services we use", "the families at home", "criminal hackers", "the students in the class"], answer: "criminal hackers", why: "Criminal hackers may take information, or they may break into systems." },
          { prompt: "In \"Their students are taught\", the word \"Their\" refers to:", options: ["the hackers and their victims", "the vocational schools", "the employers and their offices", "the families who save time"], answer: "the vocational schools", why: "The sentence before talks about the cybersecurity vocational schools." },
          { prompt: "In \"where universities and companies share research\", the word \"where\" refers to:", options: ["technoparks", "hospitals", "the sofa", "the Internet"], answer: "technoparks", why: "Many schools stand in technoparks, where universities and companies share research." },
          { prompt: "In \"all want them\", the word \"them\" means:", options: ["the graduates", "the hackers", "the technoparks", "the families"], answer: "the graduates", why: "Employers are eager to hire the graduates, and the many firms all want them." },
          { prompt: "In \"By supporting this training\", the words \"this training\" mean:", options: ["a lesson about family life at the weekend", "a course in online shopping", "the teaching in cybersecurity schools", "a trip to a technopark"], answer: "the teaching in cybersecurity schools", why: "The training is the education that the cybersecurity schools give." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · Words in context", source: "Unit 1 · Reading practice · Cybersecurity",
        instruction: "Choose the meaning of each word or phrase as it is used in the passage about cybersecurity.",
        items: [
          { prompt: "In the passage, the word disrupt means:", options: ["make better in every way", "interrupt and spoil", "pay for with a card", "protect from every danger"], answer: "interrupt and spoil", why: "Hackers who disrupt ordinary life stop it from working normally." },
          { prompt: "In the passage, the word guard means:", options: ["sell for money", "copy by hand", "keep safe from harm", "pay no attention to"], answer: "keep safe from harm", why: "Trained people guard networks by keeping them safe from harm." },
          { prompt: "In the passage, the word spot, as in spot online dangers, means:", options: ["paint", "invent", "notice", "forget"], answer: "notice", why: "To spot a danger is to notice it." },
          { prompt: "In the passage, the word eager means:", options: ["not willing at all", "very keen and ready", "a little bit worried", "rather slow and tired"], answer: "very keen and ready", why: "Employers who are eager to hire graduates are very keen to do it." },
          { prompt: "In the passage, the word practical, as in practical experience, means:", options: ["taken only from a long textbook", "bought at a shop near school", "heard in a long lecture hall", "gained by doing real work"], answer: "gained by doing real work", why: "Practical experience comes from doing real work next to professionals." },
          { prompt: "In the passage, the word cheat means:", options: ["help", "trick", "teach", "thank"], answer: "trick", why: "To cheat people is to trick them, for example to take their money." },
          { prompt: "In the passage, the word responding, as in Türkiye is responding by opening many schools, means:", options: ["running away from a problem", "asking a friend for a favour", "closing the door on a guest", "answering a need"], answer: "answering a need", why: "Türkiye opens schools as an answer to the need for experts." },
          { prompt: "In the passage, the word hire means:", options: ["say goodbye to", "ask a question of", "give a job to", "send a message to"], answer: "give a job to", why: "Employers who hire graduates give them jobs." }
        ]
      },
      {
        type: "reading", title: "B1 Reading · Extra hard", passageTitle: "The exchange-day map",
        passage: "On the first Monday of a partner-school exchange, 9B expected to follow the timetable printed in the welcome pack. The plan changed when the visiting students arrived late, so teacher Ms Arslan asked small groups to guide them around the building. Ece volunteered, although she had never led a tour in English before. She could explain where the library and science rooms were, but she was unsure how to describe the new sports hall. Instead of pretending, she asked a classmate who knew the building well to help. The visitors later said that this made the tour easier to follow. At lunch, Ece discovered that two guests could speak Turkish, so they compared school routines in both languages. By the end of the day, she understood that being a good guide did not mean knowing every answer; it meant helping people find one.",
        questions: [
          { prompt: "Why did Ms Arslan ask students to guide the visitors?", options: ["The printed timetable had been cancelled permanently.", "The visitors arrived late, so the plan changed.", "The guests could not understand any English.", "Ece had already worked as a professional guide."], answer: 1, why: "The passage says the late arrival changed the plan, so students guided small groups." },
          { prompt: "What can be inferred about Ece when she asks a classmate for help?", options: ["She would rather avoid speaking to visitors.", "She knows when to ask for help.", "She thinks the sports hall should be removed from the tour.", "She expects visitors to know the school already."], answer: 1, why: "Ece is unsure about one building and seeks help instead of pretending to know." },
          { prompt: "What does the final sentence suggest about being a good guide?", options: ["A guide should memorise every detail before meeting visitors.", "A guide should speak only the visitors' first language.", "A guide helps by finding answers, not by knowing everything.", "A guide should let visitors explore the school without support."], answer: 2, why: "The conclusion contrasts knowing every answer with helping visitors find one." },
          { prompt: "What did Ece find out at lunch?", options: ["That two guests could speak Turkish", "That the timetable had been cancelled", "That the library was closed to visitors", "That her classmate was a professional guide"], answer: 0, why: "At lunch she discovered that two guests could speak Turkish." },
          { prompt: "In the passage, the word volunteered means:", options: ["refused to join an activity", "was chosen by the teacher at random", "finished a task before everyone else", "offered to help or take part"], answer: 3, why: "Ece offered to guide, although nobody forced her." },
          { prompt: "What was Ece unsure about?", options: ["Where the library was", "How to find the science rooms", "How to describe the new sports hall", "Whether the visitors liked the lunch menu"], answer: 2, why: "She could explain the library and science rooms but not the new sports hall." },
          { prompt: "What is the writer's main purpose in this text?", options: ["To show what one student learned about guiding", "To give clear directions to the new sports hall", "To advertise partner-school exchange programmes", "To explain how to print a school timetable"], answer: 0, why: "The text tells one day's story and ends with what Ece learned about guiding." }
        ]
      },
      {
        type: "quiz", title: "B1 Reading · Who did what?", source: "Unit 1 · Reading practice · The exchange day",
        instruction: "Choose the best answer about the exchange-day text.",
        items: [
          { prompt: "Who asked small groups of students to guide the visitors?", options: ["Ece", "Ms Arslan", "The visitors", "A classmate"], answer: "Ms Arslan", why: "Teacher Ms Arslan asked small groups to guide them." },
          { prompt: "Who had never led a tour in English before?", options: ["A classmate", "Ms Arslan", "Ece", "One of the guests"], answer: "Ece", why: "Ece had never led a tour in English before." },
          { prompt: "What was printed in the welcome pack?", options: ["A list of the guests", "A school uniform", "Some tickets for lunch", "A timetable"], answer: "A timetable", why: "9B expected to follow the timetable printed in the welcome pack." },
          { prompt: "When did the plan change?", options: ["When lunch ended at midday", "When Ece asked her classmate for help", "When the visitors arrived late", "When the new sports hall opened"], answer: "When the visitors arrived late", why: "The plan changed when the visiting students arrived late." },
          { prompt: "Who helped Ece with the new sports hall?", options: ["The head teacher of the school", "A teacher from the visiting school", "One of the guests from abroad", "A classmate who knew the building"], answer: "A classmate who knew the building", why: "She asked a classmate who knew the building well." },
          { prompt: "What did Ece and the two guests do at lunch?", options: ["They compared school routines", "They practised giving tours together", "They changed the timetable for Tuesday", "They toured the library and the labs"], answer: "They compared school routines", why: "They compared school routines in both languages." },
          { prompt: "What did the visitors say about Ece asking for help?", options: ["It made the tour much too long.", "It made the tour easy to follow.", "It was a serious mistake.", "It was not a good idea for a guide."], answer: "It made the tour easy to follow.", why: "The visitors later said it made the tour easier to follow." },
          { prompt: "Which detail shows that Ece was brave?", options: ["She volunteered despite her lack of practice.", "She knew every room in the school very well.", "She refused to ask anyone for help at all.", "She stayed silent during the whole lunch."], answer: "She volunteered despite her lack of practice.", why: "She volunteered although she had never led a tour in English before." }
        ]
      }
    ]
  }
});
