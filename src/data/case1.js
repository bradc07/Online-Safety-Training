export const case1 = {
  id: 1,
  title: "The Viral Video",
  theme: "Responding to online content involving pupils",
  scenario: [
    "It's Tuesday morning. You're on playground duty when Maya (Year 2) runs up to you, upset.",
    "\"Miss, everyone's been watching a video of me! It's on TikTok and I'm crying in it and everyone's laughing!\"",
    "You crouch down to her level. Through her tears, Maya explains that her older cousin (age 12) filmed her having a tantrum at a family birthday party over the weekend and posted it. Maya says \"loads of people at school\" have seen it. She begs you not to tell her mum because \"Mummy will be so angry with Auntie Sarah.\"",
    "The bell is about to ring. Maya's class teacher is off sick today and there's a supply teacher covering. You have your own class waiting."
  ],
  options: [
    { letter: "A", text: "Comfort Maya and tell her you'll sort it out, then speak to the supply teacher at break to hand over" },
    { letter: "B", text: "Take Maya to the school office immediately, ask them to contact her parents, and brief the Designated Safeguarding Lead" },
    { letter: "C", text: "Comfort Maya, promise to help, and at lunchtime try to find the video yourself to assess the situation" },
    { letter: "D", text: "Reassure Maya that videos get forgotten quickly, encourage her to ignore anyone being unkind, and keep an eye on things" }
  ],
  reflectionPrompts: [
    { question: "What don't you know?", subtext: "What additional information would change your approach?" },
    { question: "Whose responsibility is this?", subtext: "What's your role versus the DSL's, class teacher's, or parents' role?" },
    { question: "What are Maya's needs right now?", subtext: "Immediate emotional support? Action on the video? Protection from classmates?" },
    { question: "What about her request for confidentiality?", subtext: "She asked you not to tell her mum. How do you weigh a child's wishes against safeguarding duties?" },
    { question: "What are the risks of acting too quickly? Too slowly?" }
  ],
  discussionPoints: {
    pairs: [
      "Would your response differ if Maya were in Reception versus Year 6?",
      "What if Maya hadn't seemed upset - what if another child reported it?",
      "How might implicit bias affect how we respond to family-posted content?"
    ],
    group: [
      "Where does \"family matter\" end and \"safeguarding concern\" begin?",
      "What's our school's actual procedure here - does everyone know it?"
    ]
  },
  expertAnalysis: {
    intro: "The immediate priority is Maya's emotional wellbeing AND ensuring this reaches the right people quickly. The tension between these isn't as sharp as it might feel.",
    optionAnalysis: [
      { letter: "A", verdict: "Delays action too long", explanation: "A supply teacher shouldn't be expected to handle safeguarding matters, and break time could be 90+ minutes away. However, the instinct to ensure continuity of care is valid." },
      { letter: "B", verdict: "Strongest response", explanation: "This might feel like \"escalating\" something that's \"just\" a family video, but: content of a child is online without parental consent, Maya is distressed at school, other pupils have seen it creating potential for ongoing unkindness, and parents need to be informed." },
      { letter: "C", verdict: "Well-intentioned but problematic", explanation: "Staff should not be searching for content of pupils online. This also delays appropriate action and puts you in a difficult position if you do find something concerning." },
      { letter: "D", verdict: "Underestimates the situation", explanation: "While resilience-building has its place, dismissing Maya's distress or hoping it \"blows over\" fails her. It also misses the safeguarding element." }
    ],
    keyPoints: [
      { title: "Regarding Maya's confidentiality request", content: "Children cannot consent to keeping safeguarding-relevant information secret. Be honest: \"I can see you're worried about Mummy being upset, but my job is to keep you safe, and that means I need to tell some grown-ups who can help.\"" }
    ],
    bestPractice: [
      "Comfort Maya briefly and validate her feelings (1-2 minutes)",
      "Walk her to the office yourself (don't send her alone)",
      "Brief office staff succinctly; request DSL and arrange cover for your class",
      "Hand over to DSL with what you know",
      "Check in with Maya later in the day"
    ]
  },
  policyConnections: [
    { name: "Safeguarding Policy", relevance: "Reporting procedures, role of DSL" },
    { name: "Online Safety Policy", relevance: "Incidents involving pupils and social media" },
    { name: "KCSIE 2024", relevance: "Understanding that safeguarding is everyone's responsibility" },
    { name: "Behaviour Policy", relevance: "Response to unkindness/bullying linked to online content" }
  ],
  keyTakeaways: [
    { principle: "When in doubt, pass it up", explanation: "DSLs would rather hear about something minor than miss something significant" },
    { principle: "Children cannot swear you to secrecy", explanation: "Be kind but clear about your duty" },
    { principle: "Don't investigate online content yourself", explanation: "That's not your role and could compromise you" },
    { principle: "Urgency matters", explanation: "Same-day communication with DSL and parents; don't wait for \"a good moment\"" }
  ]
}
