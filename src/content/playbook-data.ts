// Types for playbook content
export interface FrameworkCard {
  percentage: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineAction {
  week: string;
  action: string;
  outcome: string;
}

export interface ExpandedTimelineAction extends TimelineAction {
  id: string;
  details?: string;
  tips?: string[];
  emailTemplateId?: string;
}

export interface EmailTemplate {
  id: string;
  title: string;
  from: "sponsor" | "champion";
  audience: "sponsor" | "champion" | "team" | "coalition";
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
  subtitle: "The 10-20-70 Sponsor Activation Framework",
  coreInsight: "Prosci research shows projects with engaged executive sponsors are 79% likely to meet objectives versus 27% without. This playbook makes sponsor activation incredibly easy.",
  statHighlight: {
    primary: "79%",
    secondary: "27%",
    description: "Project success rate with active executive sponsor",
  },
};

// 10-20-70 Framework cards
export const frameworkCards: FrameworkCard[] = [
  {
    percentage: "10%",
    title: "Technology",
    description: "The product itself — access, integrations, and platform capabilities. Essential but insufficient. Most organizations over-invest here and wonder why adoption stalls.",
    icon: "⚙️",
  },
  {
    percentage: "20%",
    title: "Training & Enablement",
    description: "Workshops, documentation, prompt libraries, and office hours. The how-to-use-it layer that builds confidence and competence across teams. Necessary, but still not where adoption is won or lost.",
    icon: "📐",
  },
  {
    percentage: "70%",
    title: "Change Management",
    description: "The people side — visible executive sponsorship, champion networks, and coalition building. Workflow integration, celebrating wins, addressing resistance. This is where adoption lives or dies, and this playbook systematizes it.",
    icon: "🎯",
  },
];

// Navigation sections
export const sections: Section[] = [
  { id: "hero", title: "Overview" },
  { id: "framework", title: "10-20-70" },
  { id: "success-factors", title: "Success Factors" },
  { id: "adkar", title: "ADKAR" },
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
  { week: "Week -2", action: "Align coalition on rollout plan", outcome: "Rollout timeline" },
  { week: "Week 0", action: "Send personal launch email", outcome: "Team awareness" },
  { week: "Week 1", action: "Share something you built with v0", outcome: "Lead by example" },
  { week: "Week 3", action: "Share first success story", outcome: "Visible momentum" },
  { week: "Week 4", action: "Check in with coalition on progress", outcome: "Rollout pulse check" },
  { week: "Week 6", action: "Amplify a win publicly", outcome: "Sustained visibility" },
  { week: "Week 8", action: "Review usage with Vercel exec", outcome: "External accountability" },
  { week: "Week 10", action: "Recognize top contributors", outcome: "Reinforce behavior" },
  { week: "Week 12", action: "Plan for what's next", outcome: "Sustained momentum" },
];

export const championActions: TimelineAction[] = [
  { week: "Week -2", action: "Align on rollout plan and champion role", outcome: "Clear expectations" },
  { week: "Week -1", action: "Prepare 1-2 use case demos", outcome: "Demo content ready" },
  { week: "Week 0", action: "Run training with Vercel counterpart", outcome: "Team sees what's possible" },
  { week: "Week 1", action: "Offer 1:1 help sessions", outcome: "Personal connection" },
  { week: "Week 2", action: "Answer questions in Slack/chat", outcome: "Reduce friction" },
  { week: "Week 3", action: "Document a workflow improvement", outcome: "Sharable asset" },
  { week: "Week 4", action: "Check in with sponsor on progress", outcome: "Aligned on status" },
  { week: "Week 5-6", action: "Pair with hesitant team member", outcome: "Overcome resistance" },
  { week: "Week 7-8", action: "Gather feedback for sponsor", outcome: "Bottom-up insights" },
  { week: "Week 9-10", action: "Lead 'what we've shipped' showcase", outcome: "Visible impact" },
  { week: "Week 11", action: "Mentor new champions from usage data", outcome: "Scale advocacy" },
  { week: "Week 12", action: "Plan for what's next", outcome: "Sustained momentum" },
];

export const coalitionActions: TimelineAction[] = [
  { week: "Week -2", action: "Align on rollout plan and support approach", outcome: "Reinforcement structure" },
  { week: "Week -1", action: "Map workflows, use cases, and setup", outcome: "Integration blueprint" },
  { week: "Week 0", action: "Roll out access to team", outcome: "Access and awareness" },
  { week: "Week 1", action: "Host v0 training or hackathon", outcome: "Team can build" },
  { week: "Week 2", action: "Champion-led office hours", outcome: "Questions answered" },
  { week: "Week 3", action: "Building showcase", outcome: "Visible momentum" },
  { week: "Week 4", action: "Check in with sponsor on progress", outcome: "Aligned on status" },
  { week: "Week 5", action: "Send adoption survey", outcome: "Structured feedback" },
  { week: "Week 6", action: "Advanced use cases training", outcome: "Deeper skills" },
  { week: "Week 7", action: "Prep for Vercel exec review", outcome: "Ready for review" },
  { week: "Week 9-10", action: "Run adoption retro and review integrations", outcome: "Clear learnings" },
  { week: "Week 11", action: "Champion-led showcase and office hours", outcome: "Celebrate progress" },
  { week: "Week 12", action: "Plan for what's next", outcome: "Sustained momentum" },
];

// Expanded timeline actions with detailed content
export const expandedSponsorActions: ExpandedTimelineAction[] = [
  {
    id: "sponsor-week-minus-2",
    week: "Week -2",
    action: "Align coalition on rollout plan",
    outcome: "Rollout timeline",
    details: "Meet with your coalition (team leads, managers, product ops) and identified champions to align on the rollout approach. Define what success looks like, agree on the timeline, and ensure everyone understands their role in driving adoption.",
    tips: [
      "Agree on 2-3 measurable KPIs (e.g., % of team trying v0 by week 2, time saved on prototyping)",
      "Walk through the 90-day timeline so everyone knows what's coming",
      "Clarify who's responsible for what—sponsor visibility, champion peer support, coalition reinforcement",
    ],
  },
  {
    id: "sponsor-week-0",
    week: "Week 0",
    action: "Send personal launch email",
    outcome: "Team awareness",
    details: "A personal email from you carries more weight than a generic announcement. Keep it short, explain the 'why', and set expectations for the first week.",
    tips: [
      "Highlight 2-3 specific use cases relevant to your team",
      "Name your champions so people know who to ask",
    ],
    emailTemplateId: "launch-announcement",
  },
  {
    id: "sponsor-week-1",
    week: "Week 1",
    action: "Share something you built with v0",
    outcome: "Lead by example",
    details: "Post something you built with v0 in Slack or Teams. Keep it casual—this isn't a polished demo, just you showing that you're using the tool too. Invite others to share what they've built.",
    tips: [
      "Build something simple but real—a dashboard mockup, an internal tool idea, anything",
      "Post with a note like 'Tried v0 this week—here's what I made. What are you all building?'",
      "React to and celebrate what others share to keep momentum going",
    ],
  },
  {
    id: "sponsor-week-3",
    week: "Week 3",
    action: "Share first success story",
    outcome: "Visible momentum",
    details: "Nothing builds momentum like a real example from someone on the team. Find a win and amplify it—even small ones count.",
    tips: [
      "Ask champions who's had a good experience",
      "Get a direct quote from the person",
      "Include the specific prompt or technique that worked",
    ],
    emailTemplateId: "success-spotlight",
  },
  {
    id: "sponsor-week-4",
    week: "Week 4",
    action: "Check in with coalition on progress",
    outcome: "Rollout pulse check",
    details: "A brief check-in with your coalition and champions to review early adoption signals. Surface blockers, celebrate early wins, and adjust course if needed.",
    tips: [
      "Review who's tried v0 and who hasn't—look for patterns",
      "Ask coalition what they're hearing from the team",
      "Identify 1-2 blockers you can help remove",
    ],
  },
  {
    id: "sponsor-week-6",
    week: "Week 6",
    action: "Amplify a win publicly",
    outcome: "Sustained visibility",
    details: "Keep momentum going by sharing a win in a visible way—team meeting, Slack, or all-hands. This shows continued exec investment and provides social proof.",
    tips: [
      "Feature a champion or team member's success",
      "Invite others to share what they've built",
    ],
  },
  {
    id: "sponsor-week-8",
    week: "Week 8",
    action: "Review usage with Vercel exec",
    outcome: "External accountability",
    details: "This exec-to-exec check-in should be scheduled at kickoff (Week -2) so it's on the calendar from day one. Meet with your Vercel exec to review adoption progress, share learnings, and get their perspective on what's working at other organizations.",
    tips: [
      "Schedule this meeting during kickoff so it's locked in",
      "Vercel will bring usage data",
      "Discuss what successful rollouts look like",
      "Surface any blockers and explore advanced use cases",
    ],
  },
  {
    id: "sponsor-week-10",
    week: "Week 10",
    action: "Recognize top contributors",
    outcome: "Reinforce behavior",
    details: "Publicly recognize those who've driven adoption—champions, early adopters, and anyone who's helped others get started.",
    tips: [
      "Call out specific contributions in team-wide communication",
      "Consider small rewards or recognition",
      "Make it visible—Slack, team meeting, or all-hands",
    ],
    emailTemplateId: "month3-integration",
  },
  {
    id: "sponsor-week-12",
    week: "Week 12",
    action: "Plan for what's next",
    outcome: "Sustained momentum",
    details: "By now, v0 should be a daily driver integrated into core product workflows. The 90-day sprint is ending, but adoption continues. Meet with coalition to plan expansion, deeper use cases, and how to maintain momentum.",
    tips: [
      "Discuss expansion to other teams or departments",
      "Identify advanced use cases to explore",
      "Ensure the champion program is self-sustaining",
    ],
  },
];

export const expandedChampionActions: ExpandedTimelineAction[] = [
  {
    id: "champion-week-minus-2",
    week: "Week -2",
    action: "Align on rollout plan and champion role",
    outcome: "Clear expectations",
    details: "Join the kickoff meeting with the sponsor and coalition to align on the rollout plan. Understand what's expected of you as a champion and how you'll support the team.",
    tips: [
      "Clarify your role—you're a go-to resource, not tech support",
      "Understand the timeline and key milestones",
      "Ask what success looks like from the sponsor's perspective",
    ],
  },
  {
    id: "champion-week-minus-1",
    week: "Week -1",
    action: "Prepare 1-2 use case demos",
    outcome: "Demo content ready",
    details: "Prepare concrete examples using your team's actual design system or common components. Real examples are far more compelling than generic demos.",
    tips: [
      "Pick use cases your teammates will recognize",
      "Practice the demo so it flows smoothly",
      "Prepare for common questions",
    ],
  },
  {
    id: "champion-week-0",
    week: "Week 0",
    action: "Run training with Vercel counterpart",
    outcome: "Team sees what's possible",
    details: "Partner with your Vercel counterpart to run the launch training. Show cool things that are possible and get the team excited about what they can build.",
    tips: [
      "Coordinate with Vercel on who covers what",
      "Show your prepared demos alongside Vercel examples",
      "Make it hands-on—have people build something live",
    ],
  },
  {
    id: "champion-week-1",
    week: "Week 1",
    action: "Offer 1:1 help sessions",
    outcome: "Personal connection",
    details: "Proactively reach out to teammates offering to help them try v0. 15 minutes of hands-on help is worth more than any documentation.",
    tips: [
      "Message 2-3 people directly to offer help",
      "Let them pick a task they're working on",
      "Focus on getting them one small win",
    ],
    emailTemplateId: "champion-intro",
  },
  {
    id: "champion-week-2",
    week: "Week 2",
    action: "Answer questions in Slack/chat",
    outcome: "Reduce friction",
    details: "Be visibly available to answer questions. Quick responses to common questions reduce friction and show the team they have support.",
    tips: [
      "Watch for v0-related questions in team channels",
      "Share quick tips when you see people struggling",
      "Save common Q&As for a future FAQ",
    ],
  },
  {
    id: "champion-week-3",
    week: "Week 3",
    action: "Document a workflow improvement",
    outcome: "Sharable asset",
    details: "Capture a specific workflow where v0 helped and document it. This becomes a reusable asset others can follow.",
    tips: [
      "Include the prompt you used",
      "Show before/after time comparison",
      "Share in a team-accessible location",
    ],
  },
  {
    id: "champion-week-4",
    week: "Week 4",
    action: "Check in with sponsor on progress",
    outcome: "Aligned on status",
    details: "Join the sponsor check-in to share what you're seeing on the ground—what's working, what's not, and where people are getting stuck.",
    tips: [
      "Come with specific examples and anecdotes",
      "Share both wins and blockers",
      "Suggest adjustments based on what you're hearing",
    ],
  },
  {
    id: "champion-week-5-6",
    week: "Week 5-6",
    action: "Pair with hesitant team member",
    outcome: "Overcome resistance",
    details: "Identify someone who hasn't engaged and offer to pair with them on a real task. Personal attention often converts skeptics.",
    tips: [
      "Ask the sponsor who seems hesitant",
      "Approach it as collaboration, not conversion",
      "Let them drive while you guide",
    ],
  },
  {
    id: "champion-week-7-8",
    week: "Week 7-8",
    action: "Gather feedback for sponsor",
    outcome: "Bottom-up insights",
    details: "Collect candid feedback from the team about what's working and what isn't. You'll hear things people won't tell the sponsor directly.",
    tips: [
      "Have informal 1:1 conversations",
      "Ask specific questions about blockers",
      "Synthesize themes for the sponsor",
    ],
  },
  {
    id: "champion-week-9-10",
    week: "Week 9-10",
    action: "Lead 'what we've shipped' showcase",
    outcome: "Visible impact",
    details: "Host a showcase highlighting what the team has actually shipped with v0. This celebrates progress, demonstrates real impact, and inspires others to go deeper.",
    tips: [
      "Feature a mix of big wins and small improvements",
      "Include metrics where possible (time saved, etc.)",
      "Invite the sponsor to recognize contributors",
    ],
  },
  {
    id: "champion-week-11",
    week: "Week 11",
    action: "Mentor new champions from usage data",
    outcome: "Scale advocacy",
    details: "Use usage data to identify power users who could become the next generation of champions. Start mentoring them to ensure continuity.",
    tips: [
      "Look at usage data to find consistent, enthusiastic users",
      "Share what you've learned about being a champion",
      "Introduce them to the sponsor and coalition",
    ],
  },
  {
    id: "champion-week-12",
    week: "Week 12",
    action: "Plan for what's next",
    outcome: "Sustained momentum",
    details: "By now, v0 should be a daily driver. Join the sponsor and coalition to plan expansion, deeper use cases, and how to keep momentum going.",
    tips: [
      "Share your perspective on what's working and what's not",
      "Suggest advanced use cases to explore",
      "Help onboard the next wave of champions",
    ],
  },
];

export const expandedCoalitionActions: ExpandedTimelineAction[] = [
  {
    id: "coalition-week-minus-2",
    week: "Week -2",
    action: "Align on rollout plan and support approach",
    outcome: "Reinforcement structure",
    details: "Join the kickoff meeting with the sponsor and champions to align on the rollout plan. Plan how you'll reinforce adoption and workflow integration through standups, 1:1s, and team communication.",
    tips: [
      "Clarify how you'll reinforce v0 in your team's rhythm",
      "Understand the timeline and when to nudge adoption",
      "Coordinate with champions on who covers what",
    ],
  },
  {
    id: "coalition-week-minus-1",
    week: "Week -1",
    action: "Map workflows, use cases, and setup",
    outcome: "Integration blueprint",
    details: "Get specific on where v0 fits into your team's workflows. Document use cases, and ensure technical setup is complete—design system integrated and GitHub connected so the team can ship production code with their actual components.",
    tips: [
      "Identify 2-3 workflows where v0 adds immediate value",
      "Set workflow norms like 'Every PRD ships with a prototype'",
      "Integrate your design system so v0 outputs match your standards",
      "Connect GitHub to enable shipping production-ready code",
    ],
  },
  {
    id: "coalition-week-0",
    week: "Week 0",
    action: "Roll out access to team",
    outcome: "Access and awareness",
    details: "Roll out v0 access to the team. Ensure everyone knows how to log in and where to go for help. Share the launch message with your direct team.",
    tips: [
      "Send access instructions alongside the sponsor's launch email",
      "Point people to champions for questions",
      "Share the use cases you identified in Week -1",
    ],
    emailTemplateId: "coalition-launch",
  },
  {
    id: "coalition-week-1",
    week: "Week 1",
    action: "Host v0 training or hackathon",
    outcome: "Team can build",
    details: "Run a v0 to hero training session to get everyone comfortable building their ideas in the tool. Can be led by your team or Vercel.",
    tips: [
      "Work with your Vercel partner to plan and run the session",
      "Keep it hands-on—everyone should build something",
      "Use real team use cases, not generic examples",
      "Record it for people who can't attend live",
    ],
  },
  {
    id: "coalition-week-2",
    week: "Week 2",
    action: "Champion-led office hours",
    outcome: "Questions answered",
    details: "Hold open office hours where people can drop in with questions from the training or their first attempts. Champions lead, keeping it informal and helpful.",
    tips: [
      "Keep it casual—no agenda, just Q&A",
      "Have champions share quick tips and tricks",
      "Document common questions for future reference",
    ],
  },
  {
    id: "coalition-week-3",
    week: "Week 3",
    action: "Building showcase",
    outcome: "Visible momentum",
    details: "Have team members share what they've built with v0 so far. Celebrates early wins, inspires others, and creates social proof.",
    tips: [
      "Keep presentations short—5 minutes max each",
      "Encourage all skill levels to share",
      "Record and share in Slack for those who missed it",
    ],
  },
  {
    id: "coalition-week-4",
    week: "Week 4",
    action: "Check in with sponsor on progress",
    outcome: "Aligned on status",
    details: "Join the sponsor check-in to review adoption progress, share what's working, and surface any blockers that need exec support to resolve.",
    tips: [
      "Bring usage data if available",
      "Share feedback from the team",
      "Identify blockers that need sponsor help",
    ],
  },
  {
    id: "coalition-week-5",
    week: "Week 5",
    action: "Send adoption survey",
    outcome: "Structured feedback",
    details: "Send a short survey to gather structured feedback on adoption—what's working, what's not, and what people need. Use this data in the Week 8 Vercel exec review.",
    tips: [
      "Keep it short—5 questions max",
      "Ask about blockers, not just satisfaction",
      "Share results with the sponsor and champions",
    ],
    emailTemplateId: "adoption-survey",
  },
  {
    id: "coalition-week-6",
    week: "Week 6",
    action: "Advanced use cases training",
    outcome: "Deeper skills",
    details: "Now that people have the basics, run a session on advanced use cases—complex workflows, integrations, and power-user techniques.",
    tips: [
      "Feature real examples from your team's work",
      "Cover GitHub integration and production workflows",
      "Record for async viewing",
    ],
  },
  {
    id: "coalition-week-7",
    week: "Week 7",
    action: "Prep for Vercel exec review",
    outcome: "Ready for review",
    details: "Compile wins, usage data, and talking points for the sponsor's Week 8 meeting with the Vercel exec.",
    tips: [
      "Gather survey results and key metrics",
      "Document 3-5 concrete wins with examples",
      "Note any blockers that need Vercel's help",
    ],
  },
  {
    id: "coalition-week-9-10",
    week: "Week 9-10",
    action: "Run adoption retro and review integrations",
    outcome: "Clear learnings",
    details: "Run a retrospective on adoption so far—what worked, what didn't, and what to adjust. Review whether workflow integrations are sticking.",
    tips: [
      "Gather feedback from team leads and champions",
      "Review which integrations are being used vs ignored",
      "Document learnings for future rollouts",
    ],
  },
  {
    id: "coalition-week-11",
    week: "Week 11",
    action: "Champion-led showcase and office hours",
    outcome: "Celebrate progress",
    details: "Host a final showcase where team members share what they've built and champions answer remaining questions. Celebrates progress and reinforces adoption.",
    tips: [
      "Invite the sponsor to attend and recognize contributors",
      "Encourage everyone to share—big or small wins",
      "Use it to identify power users for future champion roles",
    ],
  },
  {
    id: "coalition-week-12",
    week: "Week 12",
    action: "Plan for what's next",
    outcome: "Sustained momentum",
    details: "By now, v0 should be a daily driver integrated into core product workflows. Meet with sponsor to plan expansion, deeper use cases, and how to maintain momentum.",
    tips: [
      "Discuss expansion to other teams or departments",
      "Identify advanced use cases to explore",
      "Ensure the champion program is self-sustaining",
    ],
  },
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
    title: "Pre-Launch: Rollout Kickoff Alignment",
    from: "sponsor",
    audience: "coalition",
    subject: "v0 rollout kickoff — aligning on our plan",
    body: `Hi [Name],

I wanted to share our v0 rollout plan and make sure we're aligned before launch.

**Our timeline:**
- Week -1: Launch announcement and initial access
- Weeks 1-4: Build awareness, gather early wins
- Weeks 5-8: Deepen engagement, address blockers
- Weeks 9-12: Embed into workflows, recognize contributors

**Success metrics we're targeting:**
- [X]% of team has tried v0 by end of week 2
- [X] documented workflow improvements by end of month 1
- [Qualitative goal, e.g., "v0 becomes default for prototyping tasks"]

**What I need from you:**
- Be visible and available for questions in the first few weeks
- Share wins and tips as you discover them
- Flag blockers early so we can address them

Let's connect briefly before launch to walk through any questions. Does [time] work?

[Your name]`,
  },
  {
    id: "launch-announcement",
    title: "Week 0: Launch Announcement",
    from: "sponsor",
    audience: "team",
    subject: "v0 is now available for [Team Name]",
    body: `Team,

I'm excited to share that v0 is now available for our team.

**What is v0?**
v0 is an AI coding agent that speeds up product development by turning ideas into working apps. Anyone can use it to prototype, build internal tools, or ship production code — no technical skill required.

**Why this matters for us:**
- Ship ideas without waiting on eng sprints
- Test concepts before committing dev resources
- Unblock yourself when you need a quick tool

**Getting started:**
1. Access v0 at https://v0.app
2. Try generating a simple component
3. Questions? Reach out to [Champion names] or me

**What I'm asking:**
Try it this week on something real. A prototype you've been putting off. A tool you wish existed. 15 minutes.

[Your name]

P.S. [Champion name] has some great examples of v0 in action—ask them if you want to see it work.`,
  },
  {
    id: "coalition-launch",
    title: "Week 0: Coalition Team Launch Message",
    from: "champion",
    audience: "team",
    subject: "v0 is live — here's how we'll use it",
    body: `Hey team,

v0 is now available for us. Here's what you need to know:

**What is v0?**
An AI coding agent that turns ideas into working apps. No technical skill required.

**How we'll use it:**
- [Use case 1 from your workflow mapping]
- [Use case 2]
- [Use case 3]

**Getting started:**
1. Log in at https://v0.app
2. Try building something small
3. Questions? Ping me or [Champion name]

We'll have trainings and office hours kicking off next week. In the meantime, here are some resources from Vercel to get started:
- [Resource link 1]
- [Resource link 2]

**This week:** Give it 15 minutes. See what it can do.

[Your name]`,
  },
  {
    id: "adoption-survey",
    title: "Week 5: Adoption Survey",
    from: "champion",
    audience: "team",
    subject: "Quick survey: How's v0 working for you?",
    body: `Hey team,

We're a few weeks into using v0 and want to hear how it's going. This 2-minute survey helps us understand what's working and where we can improve.

**Survey link:** [Link]

**What we're asking:**
- How often are you using v0?
- What's working well?
- What's blocking you?
- What would help you use it more?

Your feedback directly shapes what we focus on next. Thanks for taking a few minutes.

[Your name]`,
  },
  {
    id: "champion-intro",
    title: "Week 1: Champion Intro Message",
    from: "champion",
    audience: "team",
    subject: "I'm here to help with v0",
    body: `Hey team! 👋

I'm one of the v0 champions for our rollout. If you're trying v0 and have questions, get stuck, or just want someone to pair with—I'm here to help.

Feel free to DM me or drop questions here. No question is too basic.

Happy to do a quick 15-min walkthrough if you want to see it in action.

[Your name]`,
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
    title: "Kickoff: Three Things to Make Clear",
    points: [
      "This is a priority, not an experiment",
      "Try it on real work this week",
      "[Champion] is your first stop if you get stuck",
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
];

// Handling scenarios
export const scenarios: Scenario[] = [
  {
    id: "low-adoption",
    title: "Low Initial Adoption",
    problem: "Adoption isn't picking up as expected",
    solution: "Interview the team on blockers. Use the ADKAR framework below to identify if it's an awareness, desire, knowledge, ability, or reinforcement issue. Once you know what's holding people back, you can target your intervention.",
  },
  {
    id: "quality-concerns",
    title: "Quality Concerns",
    problem: "Team members complain v0 output needs too much cleanup",
    solution: "Work with champions to document prompt patterns that produce better output. Connect v0 to your GitHub repos and design system so it generates production-ready code that matches your brand and components out of the box.",
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
    id: "time",
    objection: "I'm too busy to learn a new tool right now.",
    response: "Pick one task you're already doing this week. Try v0 on just that. 15 minutes—if it doesn't save you time, you'll know.",
  },
  {
    id: "use-case",
    objection: "I don't know what I'd use it for.",
    response: "What are you working on this sprint? Tell me and I'll tell you if v0 would help. The best use cases aren't obvious until someone shows you.",
  },
  {
    id: "skepticism",
    objection: "I tried it and the output wasn't usable.",
    response: "What did you try? There's a big difference between 'make me a dashboard' and giving it context about your design system and constraints. Let me show you how I prompt it.",
  },
  {
    id: "tool-fatigue",
    objection: "We already have too many tools.",
    response: "v0 isn't adding a step—it fits into what you already do. You still use Figma, your IDE, code review. It just makes the path from idea to production faster.",
  },
  {
    id: "trust",
    objection: "I don't trust AI with our codebase.",
    response: "Reasonable concern. The code v0 generates still goes through normal review—it's a starting point, not a backdoor. Nothing ships without the same checks we always do.",
  },
  {
    id: "identity",
    objection: "I prefer to write code myself—it's how I learn.",
    response: "What if v0 is a learning tool too? Generate something, then study how it approached the problem. It's another input for your learning, not a replacement.",
  },
];

// The three layers that matter for adoption
export const threeLayers = [
  {
    role: "Executive Sponsor",
    bullets: [
      "Stays visibly engaged",
      "Communicates why this matters",
      "Tracks progress and celebrates wins",
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
  "v0 included in new onboarding materials",
  "Team documentation references v0 for applicable tasks",
  "Sprint templates suggest v0 for prototyping tasks",
  "Design systems and GitHub integrated with v0",
  "Champion rotation or recognition program established",
  "Quarterly check-in scheduled to assess continued value",
];

// Expansion questions for Month 3
export const expansionQuestions = [
  "Which adjacent teams could benefit from our learnings?",
  "What other tools does Vercel offer that complement v0?",
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
