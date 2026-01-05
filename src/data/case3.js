export const case3 = {
  id: 3,
  title: "The Staff WhatsApp",
  theme: "Professional boundaries and digital communication",
  scenario: [
    "You've been at Herne Hill School for two terms. The teaching staff have an unofficial WhatsApp group that's been running for years - \"HHS Staff Room\". It's mostly light-hearted: sharing memes, arranging social events, celebrating good news.",
    "Recently, you've noticed the tone shifting:",
  ],
  awareness: [
    "Colleagues have started venting about specific parents (\"Mrs T is emailing AGAIN\")",
    "Yesterday someone shared a screenshot of what they called a \"ridiculous\" email from a parent, with the parent's name visible",
    "Last week there was a thread speculating about why a particular child is \"always so difficult\" - guessing about home circumstances",
    "The group includes a staff member who recently left and now works elsewhere"
  ],
  options: [
    { letter: "A", text: "Leave the group quietly without saying anything - you don't want to be associated with it but also don't want confrontation" },
    { letter: "B", text: "Stay in the group but don't engage with the problematic content - just use it for the social/practical stuff" },
    { letter: "C", text: "Raise your concerns in the group chat, reminding colleagues about confidentiality and professional standards" },
    { letter: "D", text: "Speak to the group admin privately first, expressing your concerns, and if nothing changes, raise it with a senior leader" }
  ],
  reflectionPrompts: [
    { question: "What's actually wrong here?", subtext: "Be specific - which behaviours cross which lines?" },
    { question: "Is there a difference between venting and breach?", subtext: "Staff need to decompress. Where's the line?" },
    { question: "What are the real risks?", subtext: "Think about: the ex-staff member, screenshots, data protection, professional reputation, parental trust." },
    { question: "Why haven't others said anything?", subtext: "What dynamics might be at play?" },
    { question: "What would happen if a parent saw this group?", subtext: "Or Ofsted? Or a journalist?" }
  ],
  discussionPoints: {
    pairs: [
      "Have you experienced similar situations? How did you handle it?",
      "What's the difference between a supportive staff culture and an unprofessional one?"
    ],
    group: [
      "Should schools have policies about unofficial staff communications?",
      "How do we maintain team cohesion while upholding professional standards?",
      "What's our collective responsibility here?"
    ]
  },
  expertAnalysis: {
    intro: "Staff digital communication is one of the most common sources of professional conduct issues, often because informal channels feel \"safe\" in ways they aren't.",
    keyPoints: [
      { title: "Identifying parents by name", content: "In a non-work channel = potential data protection breach" },
      { title: "Sharing screenshots of parent communication", content: "Definite breach of confidentiality" },
      { title: "Speculating about children's home circumstances", content: "Unprofessional and potentially harmful if it affects how staff interact with that child" },
      { title: "Including ex-staff", content: "Information leaving the organisation entirely" },
      { title: "Written record", content: "WhatsApp stores everything; it's discoverable in complaints, tribunals, FOI requests" }
    ],
    optionAnalysis: [
      { letter: "A", verdict: "Protects you but doesn't address the problem", explanation: "It might also look suspicious if issues later emerge - \"You were in the group and said nothing?\"" },
      { letter: "B", verdict: "Makes you complicit through presence", explanation: "Silence is tacit endorsement. You're also still receiving potentially sensitive information." },
      { letter: "C", verdict: "Brave but likely to backfire", explanation: "Public challenge in informal spaces often triggers defensiveness. It may also create a written record of you identifying problems while staying in the group." },
      { letter: "D", verdict: "Balances relationships with responsibility", explanation: "Approach the admin as a peer, not an accuser. Frame it as \"I'm worried we could all get in trouble\" rather than \"you're doing something wrong.\" Be specific about concerns. If no change, you have a duty to raise with leadership." }
    ],
    bestPractice: [
      "Approach the group admin privately as a peer",
      "Frame it as protecting everyone, not accusing",
      "Be specific about what concerns you",
      "If no change within a reasonable time, escalate to leadership",
      "Document your concerns and actions"
    ]
  },
  policyConnections: [
    { name: "Staff Code of Conduct", relevance: "Professional behaviour, confidentiality" },
    { name: "Data Protection Policy", relevance: "Sharing personal information outside secure systems" },
    { name: "Social Media Policy", relevance: "Should cover all digital communication, not just public platforms" },
    { name: "Safeguarding Policy", relevance: "Appropriate handling of information about children" },
    { name: "Whistleblowing Policy", relevance: "If concerns aren't addressed" }
  ],
  keyTakeaways: [
    { principle: "Informal doesn't mean invisible", explanation: "WhatsApp is written, stored, and discoverable" },
    { principle: "The group is only as secure as its least discreet member", explanation: "Including ex-staff is a red flag" },
    { principle: "Venting becomes breach when you add names and details", explanation: "\"Hard day\" is fine; \"Mrs Thompson's son is exhausting, I reckon there's stuff going on at home\" is not" },
    { principle: "You are responsible for what you witness", explanation: "Staying silent makes you complicit; raising concerns is professional, not disloyal" }
  ]
}
