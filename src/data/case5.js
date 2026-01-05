export const case5 = {
  id: 5,
  title: "The Screenshot Evidence",
  theme: "Children reporting online incidents involving peers",
  scenario: [
    "It's Friday afternoon. Freya (Year 2) asks to speak to you privately. She shows you her mum's phone - mum has given her permission to show you.",
    "On screen is a screenshot from a group chat on a gaming platform. The messages show three children from your class arranging to play together. One of them, Theo, writing: \"Don't tell Freya shes so anoying\". Another child, Isla, replying: \"lol yeah freya is the worst\". A third child, Marcus, sending a gif of someone crying.",
    "Freya is tearful. She says she saw this when her older sister was looking at the group (the sister is friends with Theo's older brother). Freya says: \"They're supposed to be my friends.\""
  ],
  awareness: [
    "This happened outside school, on a home device",
    "You have no way to verify the screenshot is genuine or complete",
    "Theo, Isla, and Marcus are generally kind children",
    "Freya has a tendency to fall out with friends and can be socially challenging",
    "It's 3:25pm and parents arrive in 5 minutes"
  ],
  options: [
    { letter: "A", text: "Thank Freya for telling you, comfort her, and explain that since this happened outside school on a game, it's really a matter for parents to sort out" },
    { letter: "B", text: "Take this seriously as potential bullying, log it formally, inform your DSL, and plan to speak to all four sets of parents" },
    { letter: "C", text: "Comfort Freya, tell her you'll look into it, and on Monday have a quiet word with Theo, Isla, and Marcus about being kind - without mentioning the screenshot" },
    { letter: "D", text: "Ask Freya's mum to come in briefly, explain what you've seen, and agree together whether this needs school involvement or is best handled at home" }
  ],
  reflectionPrompts: [
    { question: "Is this a school matter?", subtext: "It happened at home, on a non-school platform. But does that mean it's not your business?" },
    { question: "What's the impact on school?", subtext: "How might this affect friendships, classroom dynamics, Freya's wellbeing at school?" },
    { question: "What about the accused children?", subtext: "They're 6/7. They might not understand the impact of what they wrote. How do you balance supporting Freya with being fair to them?" },
    { question: "What about the \"evidence\"?", subtext: "Screenshots can be edited, lack context, or be part of a longer exchange. How much weight do you give it?" },
    { question: "What's the timing pressure?", subtext: "End of day Friday - does that change your approach?" }
  ],
  discussionPoints: {
    pairs: [
      "How do you handle the \"it happened at home\" argument from parents?",
      "What would you do differently if the content was more severe (e.g., threats)?"
    ],
    group: [
      "What's our school's position on out-of-school online behaviour?",
      "How do we investigate when we can't see the original context?",
      "How do we protect reporting children from retaliation?"
    ]
  },
  expertAnalysis: {
    intro: "The \"it happened outside school\" argument is increasingly untenable. If behaviour outside school affects wellbeing and relationships in school, it becomes a school matter. DfE guidance is clear on this.",
    optionAnalysis: [
      { letter: "A", verdict: "Might feel pragmatic but fails Freya", explanation: "It misses the opportunity to address the behaviour and sends a message that online unkindness is acceptable if it happens at home." },
      { letter: "B", verdict: "Procedurally correct but may be heavy-handed", explanation: "This is unkind words, not threats or sustained harassment. Proportionality matters." },
      { letter: "C", verdict: "Tries to address behaviour but lacks transparency", explanation: "Acting on something you can't reference is unfair to the other children and their parents." },
      { letter: "D", verdict: "A good starting point", explanation: "It keeps the parent informed and involved, acknowledges the complexity of jurisdiction, allows for collaborative decision-making, and buys you time to think and consult." }
    ],
    keyPoints: [
      { title: "Freya's social history", content: "Is relevant but shouldn't discount her experience. Even if she \"falls out with friends,\" she still deserves kindness." },
      { title: "The screenshot's provenance", content: "Via older siblings is convoluted. You're several steps from the source." },
      { title: "The children's age", content: "Matters hugely. At 6-7, they're still learning about digital communication and empathy." }
    ],
    bestPractice: [
      "Comfort Freya and validate her feelings",
      "Speak briefly with her mum - share what you've seen, agree to discuss further Monday",
      "Log the concern (even if action TBD)",
      "Monday: Consult DSL about proportionate response",
      "Consider: Whole-class work on online kindness (without naming anyone) plus individual conversations with the children involved and their parents",
      "Frame it as education, not punishment"
    ]
  },
  policyConnections: [
    { name: "Behaviour Policy", relevance: "Should explicitly include online behaviour affecting school relationships" },
    { name: "Anti-Bullying Policy", relevance: "Definition of bullying, reporting procedures" },
    { name: "Safeguarding Policy", relevance: "Recording concerns, DSL involvement" },
    { name: "Online Safety Policy", relevance: "Out-of-school incidents" },
    { name: "KCSIE 2024", relevance: "Schools can address out-of-school behaviour" }
  ],
  keyTakeaways: [
    { principle: "Online and offline are connected", explanation: "If it affects school, it's school business" },
    { principle: "Proportionality matters", explanation: "Unkind words need addressing, but not the same response as threats" },
    { principle: "Educate rather than punish", explanation: "Young children are still learning digital citizenship" },
    { principle: "Include parents as partners", explanation: "Especially when the line between home and school is blurred" }
  ]
}
