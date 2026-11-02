window.unitContent = window.unitContent || [];
window.unitContent[4] = Object.assign(window.unitContent[4] || {}, {
  reading: {
    activities: [
      {
        type: "reading",
        title: "Reading 1 · Three homes, three lifestyles",
        passageTitle: "Where do you feel at home?",
        passage: "Across Türkiye, families live in very different types of houses shaped by their climate and daily needs. Sinan lives with his parents on the seventh floor of a modern block of flats in Ataşehir, Istanbul. Their flat does not have a garden, but its wide glass balcony looks over a quiet courtyard. Sinan keeps fifteen flowerpots there, and right now he is watering his red geraniums before sunset. In contrast, his cousin Elif lives in a traditional two-storey stone house in Safranbolu. Her house has wooden ceilings, deep cupboards built into the walls and a shaded garden with a plum tree. Downstairs, the thick stone walls keep the living room cool in July, while upstairs the family sits on woollen rugs and soft cushions. Meanwhile, their aunt Sevgi lives in a single-storey bungalow on the edge of Fethiye. Because the bungalow has no stairs, it is comfortable and practical. Its roof carries solar panels that heat the bathroom water all year round, and right now Aunt Sevgi is hanging out her clean laundry in the warm sea breeze.",
        questions: [
          { prompt: "What is the main topic of the passage?", options: ["How to build a stone wall in Safranbolu", "Three relatives who live in different types of homes in Türkiye", "Why everyone in Istanbul wants to move to the countryside", "The history of tall skyscrapers in big cities"], answer: 1, why: "The passage compares the homes and lifestyles of Sinan, his cousin Elif and their aunt Sevgi." },
          { prompt: "What feature does Sinan's flat in Istanbul have instead of a garden?", options: ["A private basement for growing trees", "A wide glass balcony overlooking a courtyard", "A wooden attic under a red roof", "A large garage for fifteen bicycles"], answer: 1, why: "The text says their flat does not have a garden, but its wide glass balcony looks over a quiet courtyard." },
          { prompt: "What is Sinan doing right now?", options: ["He is sitting on a woollen rug in Safranbolu.", "He is repairing the solar panels on the roof.", "He is watering his red geraniums on the balcony.", "He is hanging out clean laundry in the sea breeze."], answer: 2, why: "The passage says that right now he is watering his red geraniums before sunset." },
          { prompt: "How do the thick stone walls help Elif's house in Safranbolu?", options: ["They keep the downstairs living room cool in July.", "They produce electricity for the kitchen oven.", "They make the upstairs bedrooms taller.", "They allow the family to park their car indoors."], answer: 0, why: "Downstairs, the thick stone walls keep the living room cool in July." },
          { prompt: "Why is Aunt Sevgi's bungalow in Fethiye described as comfortable and practical?", options: ["It is on the seventh floor of a building with a fast lift.", "It is all on one level and has no stairs.", "It has ten bedrooms and three underground basements.", "It stands in the middle of a snowy mountain forest."], answer: 1, why: "The passage says that because the bungalow has no stairs, it is comfortable and practical." },
          { prompt: "What do the solar panels on Aunt Sevgi's roof do?", options: ["They cool the stone walls in July.", "They water the plum tree in the garden automatically.", "They heat the bathroom water all year round.", "They clean the woollen rugs and cushions."], answer: 2, why: "Its roof carries solar panels that heat the bathroom water all year round." }
        ]
      },
      {
        type: "quiz",
        title: "Reading 1 · Which home matches the detail?",
        source: "Unit 5 · Reading 1 follow-up",
        instruction: "Read the passage about Sinan, Elif and Aunt Sevgi again and choose the home that matches each statement.",
        items: [
          { prompt: "Home check: it is on the seventh floor of a modern building.", options: ["Sinan's flat in Istanbul", "Elif's stone house in Safranbolu", "Aunt Sevgi's bungalow in Fethiye"], answer: "Sinan's flat in Istanbul", why: "Sinan lives on the seventh floor of a modern block of flats in Istanbul." },
          { prompt: "Home check: it has wooden ceilings and deep cupboards built into the walls.", options: ["Sinan's flat in Istanbul", "Elif's stone house in Safranbolu", "Aunt Sevgi's bungalow in Fethiye"], answer: "Elif's stone house in Safranbolu", why: "Elif's traditional stone house in Safranbolu has wooden ceilings and built-in cupboards." },
          { prompt: "Home check: it has no stairs because it is a single-storey building.", options: ["Sinan's flat in Istanbul", "Elif's stone house in Safranbolu", "Aunt Sevgi's bungalow in Fethiye"], answer: "Aunt Sevgi's bungalow in Fethiye", why: "Aunt Sevgi lives in a single-storey bungalow with no stairs." },
          { prompt: "Home check: fifteen flowerpots stand on its wide glass balcony.", options: ["Sinan's flat in Istanbul", "Elif's stone house in Safranbolu", "Aunt Sevgi's bungalow in Fethiye"], answer: "Sinan's flat in Istanbul", why: "Sinan keeps fifteen flowerpots on his glass balcony." },
          { prompt: "Home check: there is a shaded garden with a plum tree outside.", options: ["Sinan's flat in Istanbul", "Elif's stone house in Safranbolu", "Aunt Sevgi's bungalow in Fethiye"], answer: "Elif's stone house in Safranbolu", why: "Elif's house has a shaded garden with a plum tree." },
          { prompt: "Home check: solar panels on its roof heat water for the bathroom.", options: ["Sinan's flat in Istanbul", "Elif's stone house in Safranbolu", "Aunt Sevgi's bungalow in Fethiye"], answer: "Aunt Sevgi's bungalow in Fethiye", why: "The roof of Aunt Sevgi's bungalow carries solar panels that heat bathroom water." },
          { prompt: "Home check: the owner is hanging out clean laundry in the sea breeze right now.", options: ["Sinan's flat in Istanbul", "Elif's stone house in Safranbolu", "Aunt Sevgi's bungalow in Fethiye"], answer: "Aunt Sevgi's bungalow in Fethiye", why: "Right now Aunt Sevgi is hanging out her clean laundry in Fethiye." },
          { prompt: "Home check: woollen rugs and soft cushions cover the upstairs floor.", options: ["Sinan's flat in Istanbul", "Elif's stone house in Safranbolu", "Aunt Sevgi's bungalow in Fethiye"], answer: "Elif's stone house in Safranbolu", why: "Upstairs in Elif's house, the family sits on woollen rugs and soft cushions." }
        ]
      },
      {
        type: "reading",
        title: "Reading 2 · Roots & Routes: Zero-energy buildings",
        passageTitle: "Homes that work with nature",
        passage: "Every day, ordinary houses use large amounts of electricity and gas to heat rooms, cool air, heat water and run kitchen appliances. Zero-energy buildings offer a cleaner way to live: over a full year, a zero-energy home produces as much clean energy as its residents use. Architects begin with smart design before they add any machines. They turn the main living room windows toward the sun so daylight warms the house naturally in winter, and they build wide roof overhangs to shade those same windows in summer. Thick insulation inside the walls, roof and basement floor stops heat from escaping. Inside the rooms, families use energy-saving LED lamps, modern fridges, ovens and dishwashers that need very little power. On the roof, solar panels turn sunlight into electricity and store extra power in a home battery for cloudy evenings. Many eco-homes also collect rainwater from the roof in a garden tank; residents use this water when they water their plants or wash the balcony floor. By combining good insulation, solar panels and careful daily habits, zero-energy homes protect nature and make neighbourhoods cleaner.",
        questions: [
          { prompt: "What defines a zero-energy building over a full year?", options: ["It has no windows, lamps or kitchen appliances at all.", "It produces as much clean energy as its residents use.", "It uses only wood fires in every bedroom.", "It is built completely underground in a basement."], answer: 1, why: "The text says that over a full year, a zero-energy home produces as much clean energy as its residents use." },
          { prompt: "Why do architects turn the main living room windows toward the sun?", options: ["So daylight warms the house naturally in winter", "To make the television screen harder to see", "So rain can enter the living room in summer", "To avoid putting a roof on the building"], answer: 0, why: "They turn the main living room windows toward the sun so daylight warms the house naturally in winter." },
          { prompt: "What is the role of thick insulation in the walls, roof and basement floor?", options: ["It pumps rainwater into the kitchen sink.", "It stops heat from escaping the house.", "It washes dirty dishes without soap.", "It replaces the need for a front door."], answer: 1, why: "Thick insulation inside the walls, roof and basement floor stops heat from escaping." },
          { prompt: "How does a zero-energy house have electricity on cloudy evenings?", options: ["Solar panels store extra power in a home battery.", "Residents burn old furniture in the hallway.", "Neighbours carry electricity upstairs in buckets.", "The fridge generates power when its door is open."], answer: 0, why: "Solar panels turn sunlight into electricity and store extra power in a home battery for cloudy evenings." },
          { prompt: "What do residents use the rainwater collected in the garden tank for?", options: ["Making hot tea and cooking pasta in the oven", "Watering their plants or washing the balcony floor", "Filling the home battery on the roof", "Painting the bedroom wardrobes and bookshelves"], answer: 1, why: "Residents use the collected rainwater when they water their plants or wash the balcony floor." },
          { prompt: "Which three things work together in a zero-energy home according to the final sentence?", options: ["Big garages, heavy curtains and noisy heaters", "Good insulation, solar panels and careful daily habits", "Tall stairs, small balconies and antique mirrors", "Plastic plates, open windows and bright street lamps"], answer: 1, why: "The final sentence highlights combining good insulation, solar panels and careful daily habits." }
        ]
      },
      {
        type: "quiz",
        title: "Reading 2 · Zero-energy vocabulary in context",
        source: "Unit 5 · Roots and Routes follow-up",
        instruction: "Complete each sentence about eco-friendly homes with a word from the word bank. Two words are extra.",
        wordBank: ["solar", "insulation", "daylight", "battery", "rainwater", "appliances", "shade", "residents", "basement", "curtains"],
        items: [
          { prompt: "Modern kitchen ___ such as fridges and dishwashers are designed to use less electricity.", answer: "appliances", why: "Fridges, ovens and dishwashers are kitchen appliances." },
          { prompt: "A zero-energy home produces as much clean energy as its ___ use over a year.", answer: "residents", why: "The people who live in a building are its residents." },
          { prompt: "South-facing windows let natural ___ warm the living room during cold winter days.", answer: "daylight", why: "Daylight from the sun enters through the windows and warms the room." },
          { prompt: "Wide roof overhangs ___ the windows in summer so the rooms stay cool.", answer: "shade", why: "To shade windows means to block direct hot sunlight." },
          { prompt: "Thick ___ inside the walls and roof prevents warm air from escaping in winter.", answer: "insulation", why: "Insulation keeps heat inside the building." },
          { prompt: "Panels on the roof capture ___ energy from the sun and turn it into electricity.", answer: "solar", why: "Solar panels capture energy from the sun." },
          { prompt: "Extra electricity is stored in a home ___ so the lamps work after sunset.", answer: "battery", why: "A home battery stores electricity for cloudy days and evenings." },
          { prompt: "Collecting ___ in a garden tank helps families water their flowers without wasting tap water.", answer: "rainwater", why: "Rainwater from the roof is stored in a tank for the garden." }
        ]
      },
      {
        type: "reading",
        title: "Reading 3 · E-Portfolio: Selin's home video tour",
        passageTitle: "Ten minutes before Sunday breakfast",
        passage: "Hi everyone! I am Selin, and for my Grade 9 E-Portfolio project I am filming a short tour of our terraced house in Çanakkale. It is ten o'clock on Sunday morning, and nobody in my family is sleeping anymore. Right now I am standing in our narrow hallway, where we keep a wooden shoe cupboard and a round mirror on the wall. If we walk into the living room, you can see our blue sofa with yellow cushions, my grandmother's armchair and a tall bookshelf next to the window. My younger brother, Doruk, is sitting on the woollen rug right now; he is fixing the wheel of his skateboard. Next to the living room is our bright kitchen. My father is standing by the counter and slicing fresh tomatoes and cucumbers, while my mother is taking hot cheese pastries out of the oven. Even our dishwasher is resting because all the clean plates are already on the table! Upstairs we have three bedrooms, a small study and a bathroom. After breakfast, I am tidying up my study desk so I can edit this video for Monday's English class.",
        questions: [
          { prompt: "Why is Selin filming a video of her terraced house?", options: ["Her family is trying to sell the house this week.", "It is for her Grade 9 E-Portfolio project in English class.", "She wants to show a plumber where the bathroom is.", "A television channel is filming a cooking competition."], answer: 1, why: "She says she is filming a short tour of their terraced house for her Grade 9 E-Portfolio project." },
          { prompt: "Where is Selin standing at the beginning of her video, and what furniture is there?", options: ["In the attic, next to old suitcases and winter coats", "In the hallway, where there is a wooden shoe cupboard and a round mirror", "In the garage, beside her brother's bicycle", "On the balcony, next to fifteen flowerpots"], answer: 1, why: "She says she is standing in their narrow hallway, where they keep a wooden shoe cupboard and a round mirror." },
          { prompt: "What is Selin's brother Doruk doing right now?", options: ["He is sleeping under a thick blanket upstairs.", "He is taking hot cheese pastries out of the oven.", "He is sitting on the woollen rug and fixing his skateboard wheel.", "He is loading dirty plates into the dishwasher."], answer: 2, why: "Doruk is sitting on the woollen rug right now and fixing the wheel of his skateboard." },
          { prompt: "What are Selin's parents doing in the kitchen at the moment?", options: ["Her father is slicing tomatoes and cucumbers, and her mother is taking pastries out of the oven.", "They are painting the kitchen cupboards blue and yellow.", "They are vacuuming the kitchen floor and ironing shirts.", "Her father is washing the car, and her mother is watering the garden."], answer: 0, why: "Her father is slicing tomatoes and cucumbers while her mother is taking hot cheese pastries out of the oven." },
          { prompt: "Why does Selin say that their dishwasher is resting?", options: ["It is broken and waiting for a technician.", "There is no electricity in the kitchen on Sundays.", "All the clean plates are already on the breakfast table.", "Her family never eats breakfast at home."], answer: 2, why: "She jokes that the dishwasher is resting because all the clean plates are already on the table." },
          { prompt: "What is Selin planning to do right after Sunday breakfast?", options: ["Go skateboarding with Doruk by the sea", "Tidy up her study desk and edit her video", "Buy a new armchair for her grandmother", "Move her bed into the downstairs hallway"], answer: 1, why: "After breakfast, she is tidying up her study desk so she can edit the video." }
        ]
      },
      {
        type: "reading",
        title: "Reading 4 · Swapping rooms for a week",
        passageTitle: "Two brothers and one clever experiment",
        passage: "Twin brothers Arda and Bora live with their parents in a semi-detached house in Bursa. Arda has the front bedroom, which faces the street and gets bright morning sun, while Bora has the back bedroom overlooking the quiet apple garden. For months, both boys complained during dinner. Arda said the morning buses on the street woke him up too early, and Bora complained that his room stayed dark in the morning and he kept oversleeping. Last Sunday, their mother suggested a one-week experiment: instead of arguing, the boys swapped bedrooms for seven days. They did not move their heavy wardrobes or beds; they only carried their pillows, blankets, laptops and school books across the upstairs hallway. This week, the house is surprisingly peaceful. Bora, who loves waking up early for basketball practice, is enjoying the sunny front room and its wide desk. Meanwhile, Arda, who studies late in the evening under his desk lamp, is sleeping deeply in the quiet back room facing the garden. Tonight they are asking their parents if they can make the swap permanent.",
        questions: [
          { prompt: "Why was Arda unhappy with the front bedroom before the experiment?", options: ["It had no wardrobe or bed inside.", "The morning buses on the street woke him up too early.", "It was down in the cold basement.", "The apple trees blocked all the morning sunlight."], answer: 1, why: "Arda said the morning buses on the street woke him up too early." },
          { prompt: "What was Bora's complaint about the back bedroom?", options: ["It stayed dark in the morning and he kept oversleeping.", "It was too noisy because of the street traffic.", "Its balcony was full of his mother's wet laundry.", "He had to share it with three younger cousins."], answer: 0, why: "Bora complained that his room stayed dark in the morning and he kept oversleeping." },
          { prompt: "What did the brothers move across the hallway when they swapped rooms?", options: ["Their heavy wooden wardrobes and beds", "The kitchen fridge and the washing machine", "Their pillows, blankets, laptops and school books", "The garden apple trees and the hallway rug"], answer: 2, why: "They did not move their heavy wardrobes or beds; they only carried their pillows, blankets, laptops and school books." },
          { prompt: "Why does the sunny front bedroom suit Bora so well this week?", options: ["He loves waking up early for basketball practice.", "He likes watching the apple trees at midnight.", "He never uses a desk or a laptop.", "He wants to count every bus on the street."], answer: 0, why: "Bora loves waking up early for basketball practice, so the bright morning sun suits him." },
          { prompt: "Why is Arda sleeping better in the back bedroom now?", options: ["He goes to bed at five o'clock in the afternoon.", "He studies late in the evening and sleeps deeply facing the quiet garden.", "He removed the curtains and the window glass.", "He sleeps on the living room sofa instead of a bed."], answer: 1, why: "Arda studies late under his desk lamp and sleeps deeply in the quiet room facing the garden." },
          { prompt: "What are the twin brothers asking their parents tonight?", options: ["Whether they can build a third bedroom in the attic", "Whether they can move back to their old rooms immediately", "Whether they can make the bedroom swap permanent", "Whether they can sell their desks and bookshelves"], answer: 2, why: "The last sentence says tonight they are asking their parents if they can make the swap permanent." }
        ]
      },
      {
        type: "reading",
        title: "B1 Reading · Extra hard",
        passageTitle: "The notice in the shared hallway",
        passage: "Residents of Maple Court usually leave notes beside the mailboxes, but this week one notice has changed the way neighbours use the building. The lift is being repaired, so people on the upper floors are carrying groceries up the stairs. Instead of asking the caretaker to solve every problem, a few residents created a shared list: one neighbour brings parcels upstairs, another checks whether older residents need help, and a third posts repair updates. Joyce, who normally works late, is checking the list before she leaves home so she can help at the weekend. Some residents worried that the list would become another rule to follow. The caretaker explained that it was voluntary and would be removed when the lift worked again. Since then, more people have added their names. The notice has not fixed the lift, but it has helped neighbours notice what others need while the repair continues.",
        questions: [
          { prompt: "Why did residents create a shared list?", options: ["To replace the caretaker permanently.", "To organise temporary help while the lift is repaired.", "To make every resident carry parcels.", "To decide who can use the stairs."], answer: 1, why: "The list coordinates voluntary help during the repair." },
          { prompt: "What does the word “it” refer to in “it was voluntary”?", options: ["The lift repair.", "The shared list or the help plan.", "Joyce's work schedule.", "The caretaker's job."], answer: 1, why: "The caretaker says the list or plan is voluntary and temporary." },
          { prompt: "Which statement best describes the notice's effect?", options: ["It repaired the lift faster than expected.", "It introduced a permanent building rule.", "It helped neighbours coordinate and pay attention to one another.", "It allowed Joyce to stop working late."], answer: 2, why: "The ending says the notice helped neighbours notice what others need." },
          { prompt: "Why are people on the upper floors carrying groceries up the stairs this week?", options: ["The stairs were painted for a building competition.", "The lift is being repaired at the moment.", "The mailboxes were moved to the roof.", "The caretaker locked the front hallway door."], answer: 1, why: "The second sentence explains that the lift is being repaired, so people are carrying groceries up the stairs." },
          { prompt: "Why is Joyce checking the notice before she leaves home?", options: ["She normally works late on weekdays, so she wants to help at the weekend.", "She is the technician who is repairing the lift.", "She wants to complain about parcels beside the mailboxes.", "She is moving out of Maple Court on Friday."], answer: 0, why: "Joyce normally works late, so she checks the list before leaving to see how she can help at the weekend." },
          { prompt: "What worried some residents when the shared list first appeared?", options: ["That the caretaker would leave the building.", "That the lift would never be repaired.", "That the voluntary list would turn into a compulsory building rule.", "That parcels would be left outside in the rain."], answer: 2, why: "Some residents worried that the list would become another rule to follow, until the caretaker explained it was voluntary." }
        ]
      },
      {
        type: "quiz",
        title: "Reading 3, 4 & 5 · True, False or Not mentioned",
        source: "Unit 5 · Reading comprehension check",
        instruction: "Decide whether each statement about Readings 3, 4 and 5 is True, False or Not mentioned.",
        items: [
          { prompt: "Selin's family lives in a terraced house in Çanakkale.", options: ["True", "False", "Not mentioned"], answer: "True", why: "In Reading 3, Selin says she is filming a tour of their terraced house in Çanakkale." },
          { prompt: "Selin's brother Doruk is vacuuming the living room rug during the video.", options: ["True", "False", "Not mentioned"], answer: "False", why: "Doruk is sitting on the rug and fixing the wheel of his skateboard." },
          { prompt: "Arda and Bora carried their heavy wooden wardrobes across the hallway when they swapped rooms.", options: ["True", "False", "Not mentioned"], answer: "False", why: "In Reading 4, they did not move their heavy wardrobes or beds; they only moved pillows, blankets, laptops and books." },
          { prompt: "Bora plays in a school basketball match every Wednesday afternoon.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "Reading 4 mentions his early basketball practice, but says nothing about Wednesday matches." },
          { prompt: "The back bedroom in Arda and Bora's house looks over an apple garden.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Reading 4 says the back bedroom overlooks the quiet apple garden." },
          { prompt: "In Maple Court, every resident is required by law to sign the hallway help list.", options: ["True", "False", "Not mentioned"], answer: "False", why: "In Reading 5, the caretaker explained that the list was voluntary." },
          { prompt: "The shared list in Maple Court stands beside the mailboxes.", options: ["True", "False", "Not mentioned"], answer: "True", why: "Residents of Maple Court leave notices beside the mailboxes in the shared hallway." },
          { prompt: "Maple Court has ten floors and forty flats in total.", options: ["True", "False", "Not mentioned"], answer: "Not mentioned", why: "Reading 5 mentions upper floors, but never states the exact number of floors or flats." }
        ]
      },
      {
        type: "match",
        title: "Who is doing what across the Unit 5 readings?",
        source: "Unit 5 · Reading review · People and actions",
        pairs: [
          { left: "Sinan (in his Istanbul flat)", answer: "is watering his red geraniums on the glass balcony." },
          { left: "Aunt Sevgi (at her Fethiye bungalow)", answer: "is hanging out her clean laundry in the sea breeze." },
          { left: "Selin (in her Çanakkale terraced house)", answer: "is filming a home video tour for her Grade 9 E-Portfolio." },
          { left: "Doruk (Selin's younger brother)", answer: "is sitting on the woollen rug and fixing his skateboard wheel." },
          { left: "Selin's mother (in the kitchen)", answer: "is taking hot cheese pastries out of the oven." },
          { left: "Bora (the twin in Bursa)", answer: "is waking up early in the sunny front bedroom." },
          { left: "Joyce (a resident of Maple Court)", answer: "is checking the hallway notice so she can help at the weekend." },
          { left: "A neighbour on the Maple Court list", answer: "brings parcels upstairs while the lift is being repaired." }
        ],
        choices: [
          "is watering his red geraniums on the glass balcony.",
          "is hanging out her clean laundry in the sea breeze.",
          "is filming a home video tour for her Grade 9 E-Portfolio.",
          "is sitting on the woollen rug and fixing his skateboard wheel.",
          "is taking hot cheese pastries out of the oven.",
          "is waking up early in the sunny front bedroom.",
          "is checking the hallway notice so she can help at the weekend.",
          "brings parcels upstairs while the lift is being repaired."
        ],
        why: "Each character across Readings 1–5 performs a distinct home or neighbourhood activity."
      }
    ]
  }
});
