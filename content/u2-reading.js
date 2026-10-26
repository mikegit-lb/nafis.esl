window.unitContent = window.unitContent || [];
window.unitContent[1] = Object.assign(window.unitContent[1] || {}, {
  reading: {
    activities: [
      {
        type: "reading", title: "Reading 1 · A student's morning", source: "Unit 2 · Vocabulary c · p.42", passageTitle: "A student's day, from alarm to bedtime",
        passage: "I am a university student, so I usually have to get out of bed early, even though I would love a lie-in. After a quick shower, I put on casual, comfortable clothes because I run errands during the day. I try to eat a balanced breakfast, because it gives me energy and helps me concentrate. While I eat, I set goals, think about how to manage my time and plan the rest of the day. Before I leave home, I check my messages and reply to them. I would like to exercise every day, for example at the gym or by jogging, but I am often too busy. That is why I walk to university. It takes about twenty minutes and counts as light exercise. At university I attend lectures, listen to my professors and highlight valuable information about different subjects. After classes I participate in social events and meetings, which help me build the social and academic skills I will need in the future. When I get home, I change my clothes, relax on the sofa for an hour and do some housework. Then I study for two hours. At night, I set my alarm and go to bed early.",
        questions: [
          { prompt: "Why does the writer usually walk to university?", options: ["She wants to arrive before her professors.", "It gives her light exercise when she is too busy for the gym.", "The bus to university is too expensive.", "She dislikes jogging more than walking."], answer: 1, why: "She says she is often too busy for the gym or jogging, so the twenty-minute walk is her light exercise." },
          { prompt: "What does the writer do while she eats breakfast?", options: ["She goes jogging in the park.", "She runs errands in town.", "She sets goals and plans her day.", "She takes a long shower."], answer: 2, why: "At breakfast she sets goals, thinks about her time and plans the rest of the day." },
          { prompt: "What does the writer do after she gets home?", options: ["She studies for two hours straight away.", "She goes to a social event.", "She goes jogging and then goes to bed.", "She relaxes and does housework, and then she studies for two hours."], answer: 3, why: "Relaxing on the sofa and housework come first; the two hours of study come afterwards." },
          { prompt: "Why does the writer put on casual, comfortable clothes in the morning?", options: ["She has to run errands during the day.","Her professors ask students to dress casually.","She goes jogging after classes.","She dislikes formal clothes at university."], answer: 0, why: "She says she runs errands during the day, so comfortable clothes suit her." },
          { prompt: "How long does the writer study at home in the evening?", options: ["Twenty minutes","One hour","Two hours","Three hours"], answer: 2, why: "After relaxing for an hour, she studies for two hours." }
        ]
      },
      {
        type: "quiz", title: "Reading 1 · Complete the phrases", source: "Unit 2 · Vocabulary c · p.42",
        instruction: "Use a verb from the word bank to complete each sentence about the student's day.",
        wordBank: ["check", "walk", "highlight", "participate", "put on"],
        items: [
          { prompt: "Before I leave home, I ___ my messages and reply to them.", answer: "check", why: "Check my messages is the fixed phrase for looking at new messages." },
          { prompt: "I prefer to ___ to university because it is light exercise.", answer: "walk", why: "Walk to university means going there on foot, which is the exercise she describes." },
          { prompt: "In lectures, I ___ valuable information about different subjects.", answer: "highlight", why: "Students highlight important information in their notes or books." },
          { prompt: "After classes, I ___ in social events and meetings.", answer: "participate", accepted: ["take part"], why: "Participate in means take part in an activity." },
          { prompt: "After a quick shower, I ___ casual clothes.", answer: "put on", why: "Put on is the verb for dressing in clothes." }
        ]
      },
      {
        type: "reading", title: "Reading 2 · James's week", source: "Unit 2 · Language Awareness b · p.44", passageTitle: "A week in my life",
        passage: "Hello, I am James, and I live with my family in Boston. On weekdays nobody sleeps in, because everyone has a busy schedule. My mother never skips breakfast, so we usually have eggs, toast or cereal with fruit. My father is a doctor and leaves very early for work, so he does not eat with us. We finish quickly and I leave the house at half past seven. School is only a ten-minute walk away, so I go on foot unless it is raining. Lessons start at eight o'clock, and I am never late. Maths is my favourite subject because I enjoy solving problems. At lunch I sit with my friends and we chat about our hobbies and our plans for the weekend. After school I do not always go straight home. I have guitar lessons on Wednesday evenings, and on Fridays I play basketball with my friends in the park. The family has dinner at seven o'clock. If I do not have much homework, I watch a film or read a book, and I go to bed at half past ten. My father does not like staying at home on Saturdays, so he plans a family outing and makes sure we do something fun. Sundays are calmer: we cook, rest and get ready for the new week.",
        questions: [
          { prompt: "Which title fits the whole text best?", options: ["My Favourite School Subject", "A Week in My Life", "Life in a Small Town", "My Father's Job"], answer: 1, why: "The text describes James's routine from Monday to Sunday, not only one subject, one place or one person." },
          { prompt: "Why does James's father not eat breakfast with the family?", options: ["He dislikes eggs, toast and cereal.", "He leaves home early for his job as a doctor.", "He is always asleep at that time.", "He eats breakfast at school with James."], answer: 1, why: "James says his father is a doctor who leaves very early for work." },
          { prompt: "When does James's family usually go out to do something fun?", options: ["On Wednesday evenings", "On Fridays after school", "On Saturdays", "On Sundays"], answer: 2, why: "James's father plans a family outing on Saturdays; Sundays are calm days at home." },
          { prompt: "Which time is closest to the length of James's walk from home to school?", options: ["Five minutes","Ten minutes","Twenty minutes","Thirty minutes"], answer: 1, why: "James says school is only a ten-minute walk away." },
          { prompt: "What does James do on Wednesday evenings?", options: ["He plays basketball with friends.","He goes on a family outing.","He has guitar lessons.","He cooks with his family."], answer: 2, why: "James has guitar lessons on Wednesday evenings; basketball is on Fridays." },
          { prompt: "Why is maths James's favourite subject?", options: ["Because the lessons start early","Because he enjoys solving problems","Because his father is a doctor","Because his friends sit next to him"], answer: 1, why: "James says he likes maths because he enjoys solving problems." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · Time and activity", source: "Unit 2 · Language Awareness c · p.44",
        instruction: "Read James's text again. Choose the activity that matches each time.",
        items: [
          { prompt: "What does James do at 7.30 a.m. on a school day?", options: ["He leaves the house.", "Lessons begin at school.", "The family has dinner.", "He goes to bed."], answer: "He leaves the house.", why: "After a quick breakfast he leaves the house at half past seven." },
          { prompt: "What happens at 8 a.m. on a school day?", options: ["He leaves the house.", "Lessons begin at school.", "The family has dinner.", "He goes to bed."], answer: "Lessons begin at school.", why: "James says lessons start at eight o'clock." },
          { prompt: "What does James's family do at 7 p.m.?", options: ["He leaves the house.", "Lessons begin at school.", "The family has dinner.", "He goes to bed."], answer: "The family has dinner.", why: "The family has dinner at seven o'clock." },
          { prompt: "What does James do at 10.30 p.m. when he has little homework?", options: ["He leaves the house.", "Lessons begin at school.", "The family has dinner.", "He goes to bed."], answer: "He goes to bed.", why: "After a film or a book, he goes to bed at half past ten." }
        ]
      },
      {
        type: "quiz", title: "Reading 2 · What can you infer?", source: "Unit 2 · Language Awareness d · p.44",
        instruction: "An inference is an idea the text suggests without saying it directly. Can you infer each sentence from James's text?",
        items: [
          { prompt: "James's mother thinks a good breakfast is important.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "Yes, we can infer it", why: "She never skips breakfast and the family eats it together, so it matters to her." },
          { prompt: "James does not enjoy rainy weather.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "No, we cannot infer it", why: "The text only says he walks unless it is raining, not how he feels about rain." },
          { prompt: "James's school is close to his home.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "Yes, we can infer it", why: "A ten-minute walk to school means the school is not far away." },
          { prompt: "James hardly ever talks to his friends during the school day.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "No, we cannot infer it", why: "He sits with his friends at lunch and chats with them." },
          { prompt: "James practises the guitar at home every day.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "No, we cannot infer it", why: "The text mentions only guitar lessons on Wednesday evenings, not daily practice." },
          { prompt: "James's family values time together even though everyone is busy.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "Yes, we can infer it", why: "They eat breakfast and dinner together and enjoy a family outing each Saturday." }
        ]
      },
      {
        type: "reading", title: "Reading 3 · Akio and Lilja", source: "Unit 2 · Reading a–c · p.46", passageTitle: "Two school days, two cultures",
        passage: "Akio and Lilja are high-school students from different countries, and their cultures shape their school days. Akio lives in Japan and wakes up at six. He makes his bed, puts on his uniform and has a traditional breakfast of rice, grilled fish and miso soup with his family. Then he takes the train to school. Japanese schools value discipline and high standards. Akio likes maths and physics because they teach him to solve problems. After lessons, the students clean their classrooms together, and then they join clubs such as judo, calligraphy or robotics. Akio is in the robotics club, where he builds and programs robots. Later he goes to a cram school to prepare for university entrance exams. In the evening he does his homework and reads manga. Lilja lives in Finland and gets up at seven. She has a shower, puts on casual clothes and eats bread with cheese or yoghurt. Then she cycles to school. Finnish schools focus on teamwork and creative thinking, so students often work on group projects. At break time she goes outside to chat with her friends in the fresh air. Some schools have clubs for music, art or sports, and Lilja joins a photography club to photograph the nature around her. In the evening she helps with chores, does an hour of homework and plays the violin. Her family often watches nature documentaries together. Akio's day is full of study and rules, while Lilja's day has more creativity, time outdoors and family time.",
        questions: [
          { prompt: "What is the main idea of the text?", options: ["Japanese schools are better than Finnish schools.", "All Japanese and Finnish schools have clubs after lessons.", "Akio's and Lilja's days show how culture shapes daily life.", "Teenagers in Finland never do homework."], answer: 2, why: "The text compares two school days to show how each culture shapes everyday life." },
          { prompt: "Which topic is NOT mentioned in the text?", options: ["Breakfast foods", "School clubs", "Holiday destinations", "Helping at home"], answer: 2, why: "The text covers breakfast, clubs and chores, but it never talks about holiday destinations." },
          { prompt: "According to the last sentence, how is Lilja's day different from Akio's?", options: ["It has more creativity, time outdoors and family time.", "It begins earlier and ends later.", "It has no homework at all.", "It is full of study and rules."], answer: 0, why: "The final sentence describes Lilja's day as more creative, outdoors and family-centred, while Akio's is full of study and rules." },
          { prompt: "How does Lilja travel to school?", options: ["By train","By bus","On foot","By bicycle"], answer: 3, why: "The text says she cycles to school, while Akio takes the train." },
          { prompt: "What does Akio do in the robotics club?", options: ["He builds and programs robots.","He practises judo moves.","He prepares for entrance exams.","He draws with calligraphy brushes."], answer: 0, why: "The text says he builds and programs robots in the club." }
        ]
      },
      {
        type: "quiz", title: "Reading 3 · Find the supporting sentence", source: "Unit 2 · Reading f · p.47",
        instruction: "Choose the sentence from the text that best supports each idea.",
        items: [
          { prompt: "Which sentence supports the idea that Akio studies outside normal school hours?", options: ["Later he goes to a cram school to prepare for university entrance exams.", "He makes his bed, puts on his uniform and has a traditional breakfast of rice, grilled fish and miso soup with his family.", "Then he takes the train to school.", "Akio likes maths and physics because they teach him to solve problems."], answer: "Later he goes to a cram school to prepare for university entrance exams.", why: "A cram school is extra study after the normal school day." },
          { prompt: "Which sentence supports the idea that Lilja enjoys being outdoors?", options: ["She has a shower, puts on casual clothes and eats bread with cheese or yoghurt.", "At break time she goes outside to chat with her friends in the fresh air.", "Finnish schools focus on teamwork and creative thinking, so students often work on group projects.", "In the evening she helps with chores, does an hour of homework and plays the violin."], answer: "At break time she goes outside to chat with her friends in the fresh air.", why: "Going outside into the fresh air at break time shows she likes being outdoors." },
          { prompt: "Which sentence supports the idea that Lilja is more interested in artistic activities?", options: ["Akio is in the robotics club, where he builds and programs robots.", "Then she cycles to school.", "Some schools have clubs for music, art or sports, and Lilja joins a photography club to photograph the nature around her.", "Finnish schools focus on teamwork and creative thinking, so students often work on group projects."], answer: "Some schools have clubs for music, art or sports, and Lilja joins a photography club to photograph the nature around her.", why: "Joining a photography club is an artistic choice, unlike building robots or studying science." }
        ]
      },
      {
        type: "reading", title: "Reading 4 · Digital learning in Türkiye", source: "Unit 2 · Roots and Routes a · p.48", passageTitle: "A digital learning project in Türkiye",
        passage: "Technology now plays a big part in education. It helps students understand their lessons, practise more and improve their skills. In many schools around the world, teachers use interactive whiteboards and online platforms to make lessons more interesting. Türkiye is one of the countries moving in this digital direction. A special project called Digital Transformation in Education offers students and teachers new ways to learn and teach. Its online platforms contain materials made by experts. Students can watch videos, do exercises and study at their own speed. This helps them find their weak points and work on them one step at a time. For example, a student who finds grammar hard can choose videos and quizzes about grammar. The project is not only for students. Teachers can also learn new methods and techniques, build their professional skills and get better at using digital tools in class. On the platforms, they can find extra materials and follow their students' progress more easily. The main aim is to raise the quality of education and to give every student an equal chance to succeed. Türkiye hopes this will prepare young people for the future and help teachers give more effective lessons.",
        questions: [
          { prompt: "Which title fits the text best?", options: ["How Teachers Use Interactive Whiteboards", "The History of Turkish Schools", "A New Digital Learning Project in Türkiye", "Why Students Dislike Online Lessons"], answer: 2, why: "The whole text describes a digital learning project in Türkiye, not just whiteboards, history or student opinions." },
          { prompt: "How can a student who finds grammar hard use the platform?", options: ["By choosing videos and quizzes about grammar", "By asking a classmate to write the answers", "By waiting for the teacher to choose the exercises", "By skipping grammar and studying other subjects"], answer: 0, why: "The text gives this exact example of a student choosing grammar videos and quizzes." },
          { prompt: "What is the main goal of the project?", options: ["To make every school buy new whiteboards", "To replace teachers with online lessons", "To teach students how to use computers", "To raise the quality of education and give all students equal chances"], answer: 3, why: "The text says the main aim is better quality and equal chances for every student." },
          { prompt: "Why do many teachers use interactive whiteboards and online platforms?", options: ["To give students fewer exercises","To make lessons more interesting","To avoid planning lessons","To test students more often"], answer: 1, why: "The text says these tools support learning and make lessons more interesting." },
          { prompt: "What can teachers find on the platforms besides new methods?", options: ["Free tickets to training courses","Lists of the best schools","Extra materials and ways to follow students' progress","Answers to all student exams"], answer: 2, why: "Teachers can find extra materials and track their students' progress on the platforms." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · Short answers", source: "Unit 2 · Roots and Routes b · p.48",
        instruction: "Read the text again and write a short answer to each question.",
        items: [
          { prompt: "What kind of whiteboards do many schools use?", answer: "interactive", accepted: ["interactive whiteboards"], why: "The text says many schools use interactive whiteboards and online platforms." },
          { prompt: "What is the name of the special project in Türkiye?", answer: "Digital Transformation in Education", why: "This is the project name given in the text." },
          { prompt: "Who does the project aim to support?", answer: "students and teachers", accepted: ["teachers and students", "both students and teachers", "both teachers and students"], why: "The project offers new ways to learn and teach, so it supports students and teachers." }
        ]
      },
      {
        type: "quiz", title: "Reading 4 · What can you infer?", source: "Unit 2 · Roots and Routes c · p.48",
        instruction: "Can you infer each sentence from the text about the digital project?",
        items: [
          { prompt: "Every school has to use interactive whiteboards to join the project.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "No, we cannot infer it", why: "The text says many schools use whiteboards, but it never says they are required." },
          { prompt: "Students can spend more time on the subjects they find hardest.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "Yes, we can infer it", why: "They can study at their own speed and choose materials for their weak points." },
          { prompt: "The platform gives students support that fits their own learning speed.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "Yes, we can infer it", why: "Students study at their own speed, which means the support adapts to each learner." },
          { prompt: "Teachers write all the online materials on the platform themselves.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "No, we cannot infer it", why: "The text says the platforms contain materials made by experts." },
          { prompt: "Teachers' professional development now includes learning about technology.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "Yes, we can infer it", why: "Teachers learn new methods and how to use digital tools more effectively in class." },
          { prompt: "Teachers can see more easily how their students are progressing.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "Yes, we can infer it", why: "The text says teachers can follow their students' progress more easily on the platforms." },
          { prompt: "The project wants to reduce differences in students' learning opportunities.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "Yes, we can infer it", why: "Giving every student an equal chance means making opportunities fairer." },
          { prompt: "Online lessons will replace classroom teaching in Türkiye.", options: ["Yes, we can infer it", "No, we cannot infer it"], answer: "No, we cannot infer it", why: "The project supports teachers and lessons in class; it does not say classrooms will disappear." }
        ]
      },
      {
        type: "reading", title: "B1 Reading · Extra hard", passageTitle: "A revision club that works",
        passage: "When Westbrook School opened a revision club, some students expected longer study hours to produce better results immediately. The club's tutor, Mr Reed, suggested a different approach. Each student chose one subject to review and wrote down a small goal before starting. Hana usually read her notes aloud because hearing the information helped her remember it. Deniz preferred practice questions; he marked answers he could not explain and brought them to the next meeting. The club met twice a week, but students who missed a session did not lose their place. A shared folder listed the tasks and the reason for each one. After six weeks, Hana's scores rose only slightly. Still, she felt less anxious before tests because she knew which topics needed attention. Mr Reed said that the club's purpose was not to promise quick success, but to help students notice which study habits actually worked for them.",
        questions: [
          { prompt: "Why does the club ask each student to set a small goal?", options: ["To make each study session focused and manageable.", "To ensure everyone studies the same subject.", "To replace practice questions with longer notes.", "To help the tutor compare students' scores."], answer: 0, why: "Choosing one subject and a small goal keeps a session focused rather than overwhelming." },
          { prompt: "What does the shared folder allow absent students to do?", options: ["Skip the next meeting without falling behind.", "See the tasks and understand why they were assigned.", "Change the tutor's revision plan.", "Compare their results with Hana's."], answer: 1, why: "The folder lists both tasks and the reason for each one." },
          { prompt: "Which statement best describes the club's idea of progress?", options: ["Progress means getting a much higher score after one week.", "Progress includes understanding which personal study habits are useful.", "Progress depends on studying for more hours than classmates.", "Progress is possible only when a tutor chooses every task."], answer: 1, why: "The ending says the club helps students notice which habits work for them." }
        ]
      }
    ]
  }
});
