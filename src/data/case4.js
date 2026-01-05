export const case4 = {
  id: 4,
  title: "The AI Homework",
  theme: "Emerging technology and academic integrity",
  scenario: [
    "You're marking Year 2 \"All About Me\" projects that children completed over half-term with family support. Most are what you'd expect - wobbly handwriting, drawings, photos from home.",
    "Then you reach Aiden's. It's... remarkable. The text is sophisticated, perfectly punctuated, and includes phrases like \"My aspirations for the future include...\" and \"I derive great satisfaction from...\" There are paragraphs about his hobbies that read like Wikipedia entries. The whole thing is beautifully laid out.",
    "Aiden is a bright child but has significant fine motor difficulties and usually produces minimal written work. This project is completely inconsistent with his normal output.",
    "You strongly suspect a parent has used ChatGPT or similar to write this."
  ],
  awareness: [
    "Aiden's dad works in tech and has mentioned being \"really into AI\"",
    "The project brief said \"with family support\" but didn't specifically mention AI",
    "Aiden seems genuinely proud of his project",
    "Other staff have mentioned similar concerns about other children's homework"
  ],
  options: [
    { letter: "A", text: "Mark it as you would any other project - you can't prove AI was used, and family support was allowed" },
    { letter: "B", text: "Give Aiden positive feedback but speak privately to his parents about your concerns, asking what support was provided" },
    { letter: "C", text: "Treat this as a teaching moment - talk to Aiden about what parts he did himself and help him understand why that matters" },
    { letter: "D", text: "Raise this as a whole-school issue with SLT - we need an AI policy before we can address individual cases" }
  ],
  reflectionPrompts: [
    { question: "What's actually the problem?", subtext: "Is it AI specifically, or parental over-involvement more broadly?" },
    { question: "What's fair to Aiden?", subtext: "He may not understand what happened. He's 6." },
    { question: "What about the home-school relationship?", subtext: "The dad might think he was helping. How do you address this without accusations?" },
    { question: "Is this cheating?", subtext: "For a Year 2 half-term project? What are the stakes?" },
    { question: "What message do we send?", subtext: "To Aiden, to parents, to other children, about work and integrity?" }
  ],
  discussionPoints: {
    pairs: [
      "Where does \"family support\" end and \"doing it for them\" begin?",
      "Have you encountered AI-generated homework? How did you know?"
    ],
    group: [
      "Do we need a school position on AI-assisted homework? What should it say?",
      "How is this different from a parent typing up a child's dictated words?",
      "What's age-appropriate understanding of \"your own work\"?"
    ]
  },
  expertAnalysis: {
    intro: "AI in education is genuinely new territory, and schools are grappling with it. There's no established playbook. However, some principles are clear.",
    keyPoints: [
      { title: "AI as a tool", content: "Not inherently problematic; it's how it's used" },
      { title: "Parental over-involvement", content: "A tale as old as school projects" },
      { title: "Mismatch with child's abilities", content: "The red flag that prompted your concern" },
      { title: "Academic integrity for a 6-year-old", content: "Very different stakes than a GCSE" }
    ],
    optionAnalysis: [
      { letter: "A", verdict: "Avoids conflict but misses an opportunity", explanation: "If the project doesn't reflect Aiden's work, your feedback isn't reaching him. It also tacitly endorses the approach." },
      { letter: "B", verdict: "Appropriate with careful framing", explanation: "You're not accusing them of cheating - you're opening a conversation about what \"support\" means. Try: \"Aiden's project is impressive! I'd love to understand how you approached it at home so I can build on that learning in class.\"" },
      { letter: "C", verdict: "Has merit but needs age-appropriate handling", explanation: "A 6-year-old shouldn't be made to feel ashamed. You might say: \"Tell me about your project! Which bit was your favourite to do? What did you find tricky?\"" },
      { letter: "D", verdict: "Essential but alongside, not instead of, addressing this case", explanation: "Schools need to get ahead of AI, but you can still handle this situation appropriately now." }
    ],
    bestPractice: [
      "Have a gentle conversation with Aiden first - celebrate his effort, understand his involvement",
      "Contact parents warmly, seeking to understand their approach",
      "Clarify expectations for future projects (school-wide consistency needed)",
      "Raise the policy gap with SLT - this will keep happening",
      "Consider: does your homework policy need updating?"
    ]
  },
  policyConnections: [
    { name: "Homework Policy", relevance: "Expectations for family involvement" },
    { name: "Assessment Policy", relevance: "Validity of teacher assessment" },
    { name: "Teaching & Learning Policy", relevance: "How we develop skills" },
    { name: "Acceptable Use Policy", relevance: "May need updating for AI" },
    { name: "Home-School Agreement", relevance: "Shared expectations" }
  ],
  keyTakeaways: [
    { principle: "Focus on the child, not the technology", explanation: "Aiden's development matters more than catching AI use" },
    { principle: "Have the conversation before the accusation", explanation: "\"Help me understand\" opens doors" },
    { principle: "Schools need AI guidance now", explanation: "It's not going away, and clarity helps everyone" },
    { principle: "Process over product", explanation: "For young children, how they got there matters more than what they produced" }
  ]
}
