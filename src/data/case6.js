export const case6 = {
  id: 6,
  title: "The Safeguarding Disclosure",
  theme: "When online safety intersects with safeguarding",
  scenario: [
    "You're helping children log off at the end of a computing lesson. As you pass Ellie (Year 2), she quickly minimises a browser window. You catch a glimpse of something that might have been a video call interface.",
    "When you gently ask what she was looking at, Ellie goes very quiet. Then she says, in a small voice: \"I was talking to my daddy. Mummy doesn't know. Daddy says it has to be a secret.\""
  ],
  awareness: [
    "Ellie's parents separated last year",
    "Dad is listed as having no contact with school - mum is the sole contact",
    "You don't know the circumstances of the separation or any legal arrangements",
    "Ellie seems anxious, not happy, about this interaction",
    "Three other children are waiting for help logging off"
  ],
  options: [
    { letter: "A", text: "Thank Ellie for telling you, reassure her she's not in trouble, and immediately speak to your DSL - this could be a safeguarding concern" },
    { letter: "B", text: "Ask Ellie a few more questions to understand the situation better before deciding whether it's serious enough to escalate" },
    { letter: "C", text: "Make a note of what she said, ensure she's okay, and monitor the situation - it could be an innocent custody arrangement" },
    { letter: "D", text: "Speak to Ellie's mum at pickup to let her know what happened and ask about the situation" }
  ],
  reflectionPrompts: [
    { question: "What are the red flags here?", subtext: "List the specific elements that concern you." },
    { question: "What is your role?", subtext: "What should you do, and what should you not do?" },
    { question: "What don't you know?", subtext: "What context might change the picture?" },
    { question: "What about Ellie's wellbeing in this moment?", subtext: "How do you support her without interrogating her?" },
    { question: "Why might school not have contact details for dad?", subtext: "What are the possibilities?" }
  ],
  discussionPoints: {
    pairs: [
      "What's the difference between \"finding out more\" and \"investigating\"?",
      "How do you manage the tension between supporting a child and not asking leading questions?"
    ],
    group: [
      "Walk through: what exactly would you say to the DSL?",
      "What would you do if this happened at 3:25pm on a Friday with no DSL on site?"
    ]
  },
  expertAnalysis: {
    intro: "This scenario brings together online safety and core safeguarding. The online element (covert video call during school, secrecy) is significant, but the underlying concern may be about contact arrangements, coercive control, or child safety.",
    keyPoints: [
      { title: "Red flag 1", content: "Father has no contact listed with school (why?)" },
      { title: "Red flag 2", content: "Child describes secrecy (\"Mummy doesn't know\")" },
      { title: "Red flag 3", content: "Father has told child to keep secret" },
      { title: "Red flag 4", content: "Child's demeanour is anxious, not happy" },
      { title: "Red flag 5", content: "Contact happened covertly during school time" }
    ],
    optionAnalysis: [
      { letter: "A", verdict: "Correct response", explanation: "This ticks multiple boxes for safeguarding referral: secrecy enforced by an adult, possible breach of contact arrangements, possible coercive control dynamic, child's emotional state." },
      { letter: "B", verdict: "Well-intentioned but wrong", explanation: "Investigating is not your job. Asking leading questions can contaminate evidence if this becomes a formal matter. Keep questions open: \"Are you okay?\" is fine; \"Does Daddy call you often?\" is not." },
      { letter: "C", verdict: "Dangerously delays appropriate action", explanation: "You have enough information to refer now. \"Monitoring\" is not appropriate when there are specific, immediate concerns." },
      { letter: "D", verdict: "Could be appropriate eventually, but DSL first", explanation: "You don't know if there are court orders involved, if mum is aware, or if telling mum could escalate a domestic situation. DSL needs to make that call." }
    ],
    bestPractice: [
      "Thank Ellie calmly: \"Thank you for telling me. You're not in any trouble.\"",
      "Don't ask more questions",
      "Ensure Ellie is safely with her class/teacher",
      "Go directly to DSL (or in their absence, head/deputy)",
      "Record what Ellie said, in her words, as soon as possible",
      "Follow DSL's guidance from there"
    ],
    doNot: [
      "Promise confidentiality to Ellie (\"I might need to tell someone to keep you safe\")",
      "Try to find out more",
      "Contact either parent yourself",
      "Discuss with other staff (except DSL)",
      "Wait until a \"better time\""
    ]
  },
  policyConnections: [
    { name: "Safeguarding/Child Protection Policy", relevance: "Immediate referral procedures, recording" },
    { name: "KCSIE 2024", relevance: "All staff responsibility, professional curiosity, not investigating" },
    { name: "Online Safety Policy", relevance: "Covert online contact, monitoring during school" },
    { name: "Acceptable Use Policy", relevance: "Pupil use of video calling" }
  ],
  keyTakeaways: [
    { principle: "Secrecy enforced by adults is always a red flag", explanation: "This is a core safeguarding principle" },
    { principle: "Your job is to notice and report, not investigate", explanation: "Keep questions minimal and open" },
    { principle: "DSL first, always", explanation: "Even if it feels like you need more information" },
    { principle: "The online element is secondary", explanation: "This is fundamentally a safeguarding concern; the video call is just the mechanism" }
  ]
}
