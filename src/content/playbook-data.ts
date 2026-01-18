// Types for playbook content
export interface ABCCard {
  letter: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineAction {
  week: string;
  action: string;
  outcome: string;
}

export interface EmailTemplate {
  id: string;
  title: string;
  from: "sponsor" | "champion";
  audience: "sponsor" | "champion" | "team";
  subject: string;
  body: string;
}

export interface TalkingPoint {
  id: string;
  title: string;
  points: string[];
}

export interface Scenario {
  id: string;
  title: string;
  problem: string;
  solution: string;
}

export interface PushbackItem {
  id: string;
  objection: string;
  response: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
}

// Hero section data
export const heroData = {
  title: "v0 Enterprise Adoption Playbook",
  subtitle: "90-Day Sponsor Activation Framework",
  coreInsight: "Prosci research shows projects with engaged sponsors are 79% likely to meet objectives versus 27% for those without. This playbook makes sponsor activation incredibly easy.",
  statHighlight: {
    primary: "79%",
    secondary: "27%",
    description: "Project success rate with active executive sponsor",
  },
};

// ABC Framework cards
export const abcCards: ABCCard[] = [
  {
    letter: "A",
    title: "Executive Sponsorship & Alignment",
    description: "Ties \"the why\" to clear goals and business outcomes. Execs reinforcing usage and asking for progress.",
    icon: "🎯",
  },
  {
    letter: "B",
    title: "Builder Engagement & Champions",
    description: "Identified champions running workshops and hackathons. Re-enablement sessions to keep energy up. Internal storytelling and promotion of wins.",
    icon: "🏗️",
  },
  {
    letter: "C",
    title: "Core Workflow Integration",
    description: "v0 plugged into design systems, repos, and sprints. Not a side tool, but embedded in day-to-day workflows.",
    icon: "⚙️",
  },
];

// Navigation sections
export const sections: Section[] = [
  { id: "hero", title: "Overview" },
  { id: "abc", title: "ABC Framework" },
  { id: "success-factors", title: "Success Factors" },
  { id: "timeline", title: "Quick Reference" },
  { id: "prelaunch", title: "Pre-Launch" },
  { id: "month1", title: "Month 1" },
  { id: "month2", title: "Month 2" },
  { id: "month3", title: "Month 3" },
  { id: "scenarios", title: "Scenarios" },
  { id: "pushback", title: "Pushback" },
];

// Timeline actions
export const sponsorActions: TimelineAction[] = [
  { week: "Week -2", action: "Identify 3-5 champion candidates", outcome: "Initial coalition roster" },
  { week: "Week -1", action: "Send personal launch email", outcome: "Team awareness" },
  { week: "Week 1", action: "Quick check-in on initial reactions", outcome: "Early pulse check" },
  { week: "Week 2", action: "Connect blockers with champions", outcome: "Peer support activated" },
  { week: "Week 3", action: "Share first success story", outcome: "Visible momentum" },
  { week: "Week 4", action: "Ask \"What's blocking adoption?\"", outcome: "Remove obstacles" },
  { week: "Week 5-6", action: "Feature champion in team meeting", outcome: "Social proof" },
  { week: "Week 7-8", action: "Review usage data with champions", outcome: "Data-informed pivot" },
  { week: "Week 9-10", action: "Plan integration touchpoints", outcome: "Workflow embedding" },
  { week: "Week 11-12", action: "Recognize top contributors", outcome: "Reinforce behavior" },
];

export const championActions: TimelineAction[] = [
  { week: "Week -2", action: "Accept champion role, learn v0", outcome: "Champion ready" },
  { week: "Week -1", action: "Prepare 1-2 use case demos", outcome: "Demo content ready" },
  { week: "Week 1", action: "Offer 1:1 help sessions", outcome: "Personal connection" },
  { week: "Week 2", action: "Answer questions in Slack/chat", outcome: "Reduce friction" },
  { week: "Week 3", action: "Document a workflow improvement", outcome: "Sharable asset" },
  { week: "Week 4", action: "Host informal lunch-and-learn", outcome: "Peer teaching" },
  { week: "Week 5-6", action: "Pair with hesitant team member", outcome: "Overcome resistance" },
  { week: "Week 7-8", action: "Gather feedback for sponsor", outcome: "Bottom-up insights" },
  { week: "Week 9-10", action: "Help integrate into team process", outcome: "Sustainable use" },
  { week: "Week 11-12", action: "Mentor new champion candidates", outcome: "Scale advocacy" },
];

export const coalitionActions: TimelineAction[] = [
  { week: "Week 1-2", action: "2-3 champions across teams", outcome: "Cross-functional reach" },
  { week: "Week 3-4", action: "Weekly champion sync (15 min)", outcome: "Shared learnings" },
  { week: "Week 5-6", action: "Expand to 5-8 champions", outcome: "Broader coverage" },
  { week: "Week 7-8", action: "Champion-led problem solving", outcome: "Self-sufficient group" },
  { week: "Week 9-10", action: "Coalition owns onboarding", outcome: "Peer-driven growth" },
  { week: "Week 11-12", action: "Formalize champion program", outcome: "Long-term structure" },
];

// Pre-launch role identification
export const roleIdentification = {
  title: "Role Identification Matrix",
  description: "Identify your coalition before launch using the ADKAR model indicators",
  columns: ["Role", "Who to Look For", "Why They Matter", "How to Engage"],
  rows: [
    {
      role: "Early Adopter",
      whoToLookFor: "Already experiments with AI tools, active on tech Twitter/blogs, asks about new tools",
      whyTheyMatter: "Will generate early wins and proof points",
      howToEngage: "Give early access, ask for feedback",
    },
    {
      role: "Technical Champion",
      whoToLookFor: "Respected by peers, good at explaining concepts, patient with questions",
      whyTheyMatter: "Will provide peer support and training",
      howToEngage: "Position as expert, provide extra resources",
    },
    {
      role: "Process Influencer",
      whoToLookFor: "Involved in team workflows, writes documentation, defines standards",
      whyTheyMatter: "Will integrate v0 into team practices",
      howToEngage: "Ask for workflow integration ideas",
    },
    {
      role: "Skeptic (Convert)",
      whoToLookFor: "Questions new tools, concerned about quality/security, detail-oriented",
      whyTheyMatter: "Their conversion builds broader credibility",
      howToEngage: "Address concerns directly, let them find issues",
    },
  ],
};

// Email templates
export const emailTemplates: EmailTemplate[] = [
  {
    id: "prelaunch-champion",
    title: "Pre-Launch: Champion Invitation",
    from: "sponsor",
    audience: "champion",
    subject: "Help me bring v0 to [Team Name]",
    body: `Hi [Name],

I'm bringing v0 to our team and I'd like your help making it successful.

I've noticed you're someone others look to for technical guidance, and I think you'd be great at helping teammates discover how v0 can accelerate their work.

Would you be willing to:
- Spend 30 mins getting familiar with v0 before the team launch
- Be a go-to person for questions during the first few weeks
- Share what's working (or not) so we can improve the rollout

This isn't a formal role—just asking you to be a helpful voice when questions come up.

Coffee on me if you're interested?

[Your name]`,
  },
  {
    id: "launch-announcement",
    title: "Week 1: Launch Announcement",
    from: "sponsor",
    audience: "team",
    subject: "v0 is now available for [Team Name]",
    body: `Team,

I'm excited to share that v0 is now available for our team.

**What is v0?**
v0 is an AI-powered code generation tool that helps you build UI components faster. Think of it as a coding collaborator that can generate React components, handle boilerplate, and accelerate prototyping.

**Why this matters for us:**
- Faster prototyping for client demos
- Less time on repetitive UI code
- More time for complex problem-solving

**Getting started:**
1. Access v0 at [URL]
2. Try generating a simple component
3. Questions? Reach out to [Champion names] or me

**What I'm asking:**
Give it a try this week. Even 15 minutes exploring. I'll be gathering feedback on how it fits our workflow.

[Your name]

P.S. [Champion name] has some great examples of v0 in action—ask them if you want to see it work.`,
  },
  {
    id: "week2-followup",
    title: "Week 2: Follow-up Check-in",
    from: "sponsor",
    audience: "team",
    subject: "Quick check: How's v0 going?",
    body: `Hi Team,

Quick pulse check on v0 after week one.

**What I've heard so far:**
- [Positive feedback point]
- [Area where people are stuck]

**This week's tip:**
[Specific workflow tip or use case]

**Still haven't tried it?**
That's okay. Here's one simple thing to try: [Specific small task that takes 5 minutes]

**Hitting blockers?**
- Talk to [Champion] who's been helping others get unstuck
- Reply to this email—I want to hear what's not working

More updates coming. Keep experimenting.

[Your name]`,
  },
  {
    id: "success-spotlight",
    title: "Week 3: Success Spotlight",
    from: "sponsor",
    audience: "team",
    subject: "[Team member] just saved 3 hours with v0",
    body: `Team,

Quick story worth sharing:

**What happened:**
[Team member name] used v0 to [specific task]. What normally takes [old time] took [new time].

**In their words:**
"[Direct quote from the person]"

**What made it work:**
[Specific technique or prompt strategy they used]

**Try it yourself:**
[Link to v0 with similar prompt or clear instructions]

These wins add up. What's your v0 story going to be?

[Your name]`,
  },
  {
    id: "month2-deepdive",
    title: "Month 2: Depth Building",
    from: "sponsor",
    audience: "team",
    subject: "v0 Level-Up: Beyond the Basics",
    body: `Hi Team,

A month in, some of you are getting great results with v0. Let's go deeper.

**What power users are doing:**
- Using v0 for [advanced use case 1]
- Combining v0 output with [existing tool/workflow]
- [Specific technique] to get better results

**This week's challenge:**
Try using v0 for [specific stretch task]. Share what you learn in [channel].

**For those still ramping up:**
Totally normal. v0 isn't about replacing your skills—it's about amplifying them. Start with [simple specific task].

**Office hours:**
[Champion] is hosting a 30-min v0 session on [day/time]. Bring your questions or just watch.

Keep building.

[Your name]`,
  },
  {
    id: "month3-integration",
    title: "Month 3: Integration & Recognition",
    from: "sponsor",
    audience: "team",
    subject: "v0 is becoming part of how we work",
    body: `Team,

Three months in, v0 is becoming part of our workflow. Some updates:

**What's changed:**
- [Metric: X% of team has used v0]
- [Workflow change that's now standard]
- [Time/effort saved on specific project]

**Recognition:**
Shoutout to these v0 champions who've helped others succeed:
- [Name]: [Specific contribution]
- [Name]: [Specific contribution]

**What's next:**
- [Upcoming integration or workflow change]
- [Resource or training being added]

**Feedback wanted:**
What would make v0 more useful for your work? Reply or tell me directly.

Thanks for embracing new ways of working.

[Your name]`,
  },
];

// Talking points
export const talkingPoints: TalkingPoint[] = [
  {
    id: "kickoff",
    title: "Kickoff Meeting Script",
    points: [
      "We're adding v0 to our toolkit. It's an AI code generation tool that helps with UI work.",
      "This isn't mandatory—it's an option. Some tasks it'll help with, others it won't.",
      "I'm asking everyone to try it at least once this week. Just 15 minutes exploring.",
      "[Champion names] are available if you get stuck or want to see examples.",
      "I'll check in next week. Tell me what works and what doesn't—that's how we'll figure out where it fits.",
    ],
  },
  {
    id: "oneonone",
    title: "1:1 Conversation Starters",
    points: [
      "Have you had a chance to try v0 yet? What was that like?",
      "What part of your current work feels most repetitive or time-consuming?",
      "Any concerns about adding AI tools to your workflow?",
      "Would it help to pair with [champion] to explore some use cases?",
      "What would need to be true for this to be useful to you?",
    ],
  },
  {
    id: "resistance",
    title: "Addressing Resistance",
    points: [
      "I hear you. New tools can be disruptive. Let's talk about what specifically concerns you.",
      "You're not required to use it. But I'm curious what would make you willing to try it once.",
      "Some of your colleagues have found it useful for [specific use case]. Want to hear about their experience?",
      "If you try it and it doesn't work for you, that's valid feedback. I'd rather know that than assume it works for everyone.",
    ],
  },
];

// Handling scenarios
export const scenarios: Scenario[] = [
  {
    id: "low-adoption",
    title: "Low Initial Adoption",
    problem: "After two weeks, less than 30% of the team has tried v0",
    solution: "Don't panic. Identify 2-3 individuals who are stuck and offer personal walkthroughs. Sometimes one good experience creates word-of-mouth. Ask champions to share their screen in a team meeting showing a real task. Make it concrete, not theoretical.",
  },
  {
    id: "quality-concerns",
    title: "Quality Concerns",
    problem: "Team members complain v0 output needs too much cleanup",
    solution: "Valid feedback. Work with champions to document prompt patterns that produce better output. Share these as team standards. Position v0 as '80% solution'—it gets you most of the way, human expertise finishes it.",
  },
  {
    id: "champion-burnout",
    title: "Champion Burnout",
    problem: "Your champions are overwhelmed with support requests",
    solution: "This is a good problem—it means demand exists. Solutions: 1) Recruit additional champions, 2) Create FAQ/troubleshooting doc, 3) Set up dedicated Slack channel for peer support, 4) Establish 'office hours' instead of constant availability.",
  },
  {
    id: "stakeholder-skepticism",
    title: "Stakeholder Skepticism",
    problem: "Leadership questions the investment in AI tools",
    solution: "Prepare concrete metrics: time saved, tasks accelerated, team satisfaction. Frame it as learning investment: 'We're building AI fluency that applies beyond just v0.' Reference industry trends about AI in development.",
  },
  {
    id: "security-pushback",
    title: "Security/Compliance Pushback",
    problem: "Security team has concerns about AI-generated code",
    solution: "Engage security early (ideally pre-launch). Document: what data v0 accesses, where code is generated/stored, review processes for AI-generated code. Position v0 output as 'first draft' that goes through normal review—it doesn't bypass existing controls.",
  },
  {
    id: "uneven-adoption",
    title: "Uneven Adoption Across Teams",
    problem: "Some teams embrace v0 while others ignore it",
    solution: "Focus energy where there's momentum, but investigate the resistant teams. Often it's a missing champion or unclear use case. Borrow successful champions to present to other teams. Tailor the value proposition to each team's specific work.",
  },
];

// Pushback responses
export const pushbackItems: PushbackItem[] = [
  {
    id: "too-busy",
    objection: "I'm too busy to learn a new tool right now.",
    response: "I get it—everyone's stretched. What if you tried it on one small task? Just 15 minutes. If it saves you time, great. If not, you've only invested 15 minutes. [Champion] can give you a quick starter tip that takes 5 minutes to try.",
  },
  {
    id: "code-quality",
    objection: "AI-generated code isn't as good as what I write.",
    response: "You're probably right for complex logic. v0 isn't meant to replace your expertise—it's for accelerating the routine stuff so you have more time for the interesting problems. Think of it as a fast first draft that you refine with your knowledge.",
  },
  {
    id: "my-job",
    objection: "If AI can do my job, what happens to me?",
    response: "I hear that concern. Here's how I see it: v0 handles the tedious parts, which means you get to focus on the work that actually needs human judgment—architecture decisions, user experience, solving novel problems. The developers who'll thrive are the ones who can leverage these tools, not compete with them.",
  },
  {
    id: "another-tool",
    objection: "We already have too many tools.",
    response: "Fair point. I wouldn't ask if I didn't think this one was different. v0 doesn't add process—it fits into how you already work, just faster. Try it once and see if it feels like additional burden or actual help.",
  },
  {
    id: "security",
    objection: "I don't trust AI with our codebase.",
    response: "Security matters. Let me share what I know about v0's data handling [share specifics]. The code it generates still goes through our normal review process—it's a starting point, not a shortcut around quality controls.",
  },
  {
    id: "not-my-style",
    objection: "I prefer to write code myself—it's how I learn.",
    response: "That's a legitimate approach. What if you thought of v0 as a learning tool too? Generate something, then study how it approached the problem. Some developers find it shows them patterns they hadn't considered. It's another input, not a replacement for your learning.",
  },
];

// The three layers that matter for adoption
export const threeLayers = [
  {
    role: "Executive Sponsor",
    bullets: [
      "Stays visibly engaged",
      "Communicates why this matters",
      "Asks about progress and celebrates wins",
    ],
  },
  {
    role: "Team Leads / Managers / Product Ops",
    bullets: [
      "Reinforces in standups and 1:1s",
      "Nudges people who haven't tried it",
      "Creates space for adoption",
    ],
  },
  {
    role: "Champions",
    bullets: [
      "Help peers as power users",
      "Share wins internally",
      "Model how to integrate v0 into workflows",
    ],
  },
];

// Adoption stall diagnostic questions for Month 2
export const adoptionStallQuestions = [
  "Is an exec actively reinforcing this, or did they approve it and move on?",
  "Are managers asking their teams about v0, or is it invisible?",
  "Are there champions sharing wins, or is everyone figuring it out alone?",
];

// ADKAR diagnosis for Month 2
export const adkarDiagnosis = {
  title: "ADKAR Diagnosis Guide",
  description: "When adoption stalls, identify which stage needs attention",
  stages: [
    {
      stage: "Awareness",
      symptom: "\"I didn't know we had this tool\"",
      intervention: "Increase visibility—more announcements, demo in team meeting",
    },
    {
      stage: "Desire",
      symptom: "\"I know about it but don't see the point\"",
      intervention: "Share relevant success stories, address personal WIIFM",
    },
    {
      stage: "Knowledge",
      symptom: "\"I want to use it but don't know how\"",
      intervention: "Provide training, pair with champion, create guides",
    },
    {
      stage: "Ability",
      symptom: "\"I tried but couldn't make it work\"",
      intervention: "Hands-on practice, troubleshoot specific blockers",
    },
    {
      stage: "Reinforcement",
      symptom: "\"I used it once but went back to old way\"",
      intervention: "Recognition, integration into workflow, remove friction",
    },
  ],
};

// Integration checklist for Month 3
export const integrationChecklist = [
  "v0 included in new developer onboarding materials",
  "Team documentation references v0 for applicable tasks",
  "Sprint templates suggest v0 for prototyping tasks",
  "Code review guidelines address AI-generated code",
  "Champion rotation or recognition program established",
  "Quarterly check-in scheduled to assess continued value",
];

// Expansion questions for Month 3
export const expansionQuestions = [
  "Which adjacent teams could benefit from our learnings?",
  "Are there other AI tools that complement v0?",
  "What processes could be updated to incorporate v0 as default option?",
  "How do we maintain momentum without your direct involvement?",
  "What would success look like in 6 months? 12 months?",
];

// Footer content
export const footerContent = {
  attribution: "Built with v0 by Vercel",
  timeCommitment: {
    title: "Time Commitment",
    description: "15-30 minutes per week of intentional sponsor actions drives 3x adoption rates compared to passive support.",
  },
};
