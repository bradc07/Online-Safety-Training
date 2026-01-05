export const case2 = {
  id: 2,
  title: "The Smartwatch Situation",
  theme: "Managing devices and monitoring vs privacy",
  scenario: [
    "You're the class teacher for Year 1. During phonics, you notice Oliver is distracted, repeatedly looking at his wrist. He's wearing a smartwatch - a children's GPS/calling watch that his parents got him for Christmas.",
    "You quietly ask Oliver to focus, but five minutes later he's pressing buttons on the watch. You ask him to take it off and put it in his tray until home time. Oliver gets upset: \"But Mummy said I have to wear it always so she knows I'm safe!\"",
    "At pickup, Oliver's mum approaches you, clearly annoyed. \"Oliver said you took his watch away. We bought that specifically so we can check he's okay during the day. After everything in the news, I need to know he's safe. The watch stays on.\""
  ],
  awareness: [
    "The watch has a \"listen-in\" feature where parents can hear what's happening",
    "Several other children have started asking their parents for similar watches",
    "Your school doesn't have a specific policy on smartwatches",
    "The mum is a vocal member of the PTA"
  ],
  options: [
    { letter: "A", text: "Apologise for the confusion, agree Oliver can wear the watch, and raise the policy gap with SLT later" },
    { letter: "B", text: "Explain calmly that the watch was distracting Oliver's learning, maintain that devices shouldn't be used in class, and suggest a meeting with the head to discuss" },
    { letter: "C", text: "Express understanding of her safety concerns, but explain that a \"listen-in\" device in a classroom raises safeguarding issues for other children, and escalate to your DSL/head immediately" },
    { letter: "D", text: "Compromise: Oliver can wear the watch but it must be on \"school mode\" (no functions) during class time, reviewing at half-term" }
  ],
  reflectionPrompts: [
    { question: "Where do parental rights end and school authority begin?", subtext: "Parents have legitimate safety concerns, but does that extend to surveillance of the classroom?" },
    { question: "Who else is affected?", subtext: "It's not just Oliver - what about other children whose conversations might be listened to? Staff? Visitors?" },
    { question: "What's the actual risk?", subtext: "Is the listen-in feature genuinely being used, or is this a theoretical concern?" },
    { question: "How do you maintain the relationship?", subtext: "This parent is upset and influential. How do you stand firm without damaging the home-school partnership?" },
    { question: "What precedent does this set?", subtext: "If Oliver can wear a listening device, can everyone?" }
  ],
  discussionPoints: {
    pairs: [
      "Have you encountered smartwatches in your class? How did you handle it?",
      "Where do you draw the line between \"safety device\" and \"surveillance device\"?"
    ],
    group: [
      "Should our school have a specific smartwatch policy? What should it say?",
      "How do we balance parental anxiety (often media-driven) with practical classroom management?",
      "What about staff privacy implications?"
    ]
  },
  expertAnalysis: {
    intro: "This case sits at the intersection of parental anxiety, child safety, other children's privacy, staff privacy, and school authority. There's no perfect answer, but some approaches are more defensible than others.",
    optionAnalysis: [
      { letter: "A", verdict: "Prioritises relationship but abdicates responsibility", explanation: "It also potentially compromises other children's privacy without their parents' knowledge or consent." },
      { letter: "B", verdict: "Reasonable but undersells the issue", explanation: "Framing this as primarily about \"distraction\" misses the bigger safeguarding and privacy dimension." },
      { letter: "C", verdict: "Correctly identifies the safeguarding dimension", explanation: "A listen-in device raises genuine questions: other children's privacy, staff privacy, potential GDPR implications, and ironically, if a child were disclosing something sensitive, a live-listening parent could compromise proper handling." },
      { letter: "D", verdict: "Might work short-term", explanation: "But doesn't address the fundamental policy gap and could be seen as inconsistent." }
    ],
    keyPoints: [
      { title: "The nuance", content: "Not all smartwatches are equal. A watch that only allows parent-initiated calls at set times is different from one with live listen-in. Schools need to understand the specific functionality." }
    ],
    bestPractice: [
      "Stay calm and don't apologise for asking Oliver to focus",
      "Acknowledge the parent's safety concerns genuinely",
      "Explain you need to check school policy on devices with audio capability",
      "Don't make promises or final decisions at pickup",
      "Brief your DSL/head that day",
      "School should clarify policy (ideally before this becomes a pattern)",
      "Communicate outcome to parent through proper channels"
    ]
  },
  policyConnections: [
    { name: "GDPR / Data Protection", relevance: "Recording without consent" },
    { name: "Safeguarding Policy", relevance: "Devices that could compromise confidential disclosures" },
    { name: "Behaviour Policy / Home-School Agreement", relevance: "Expectations about devices" },
    { name: "Staff Code of Conduct", relevance: "Reasonable expectation of privacy" },
    { name: "DfE Mobile Phones Guidance (2024)", relevance: "Principles extend to smart devices" }
  ],
  keyTakeaways: [
    { principle: "Listen-in capability crosses a line", explanation: "It's not just about distraction; it's about everyone's privacy" },
    { principle: "Don't make policy at the school gate", explanation: "\"I'll need to check and get back to you\" is always acceptable" },
    { principle: "Acknowledge emotion without capitulating", explanation: "Parents' anxiety is real; that doesn't mean their solution is appropriate" },
    { principle: "Schools need proactive smartwatch policies", explanation: "Waiting until it's a conflict is too late" }
  ]
}
