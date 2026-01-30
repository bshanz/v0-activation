import { Hero } from "@/components/hero";
import { ABCCards } from "@/components/abc-cards";
import { WhatWorksComparison } from "@/components/what-works-comparison";
import { StickyNav } from "@/components/sticky-nav";
import { CollapsibleSection } from "@/components/collapsible-section";
import { GenericTable } from "@/components/action-table";
import { ExpandableActionTable } from "@/components/expandable-action-table";
import { EmailTemplateList } from "@/components/email-template";
import { TalkingPointsList } from "@/components/talking-points";
import { ScenarioGrid } from "@/components/scenario-card";
import {
  expandedSponsorActions,
  expandedChampionActions,
  expandedCoalitionActions,
  roleIdentification,
  emailTemplates,
  talkingPoints,
  scenarios,
  threeLayers,
  adoptionStallQuestions,
  adkarDiagnosis,
  integrationChecklist,
  expansionQuestions,
  footerContent,
} from "@/content/playbook-data";

export default function Home() {
  // Filter email templates by section
  const prelaunchTemplates = emailTemplates.filter((t) =>
    t.id.includes("prelaunch")
  );
  const month1Templates = emailTemplates.filter(
    (t) =>
      t.id.includes("launch") ||
      t.id.includes("week2") ||
      t.id.includes("success")
  );
  const month2Templates = emailTemplates.filter((t) => t.id.includes("month2"));
  const month3Templates = emailTemplates.filter((t) => t.id.includes("month3"));

  return (
    <main id="main-content" className="min-h-screen">
      <StickyNav />

      {/* Hero Section */}
      <Hero />

      {/* 10-20-70 Framework Section */}
      <ABCCards />

      {/* What Works vs What Doesn't */}
      <WhatWorksComparison />

      {/* Adoption Success Factors */}
      <CollapsibleSection
        id="success-factors"
        title="Adoption Success Factors"
        subtitle="The layers that drive sustainable adoption"
        defaultOpen
      >
        <div className="space-y-8 pt-4">
          {/* Three Layers That Matter */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold tracking-tight flex items-center gap-2">
              The Three Layers That Matter
              <span className="text-base">🔁</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {threeLayers.map((layer, index) => (
                <div
                  key={layer.role}
                  className="border border-[var(--border)] rounded-xl p-5 bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h4 className="font-semibold text-[var(--text-primary)]">{layer.role}</h4>
                  </div>
                  <ul className="space-y-2 mt-1">
                    {layer.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* If Adoption Stalls */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              If Adoption Stalls:
            </h3>
            <div className="border border-[var(--accent-violet)]/30 bg-[var(--accent-violet)]/5 rounded-xl p-5">
              <ul className="space-y-3">
                {adoptionStallQuestions.map((question, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-violet)]/20 text-[var(--accent-violet)] text-xs font-bold flex items-center justify-center mt-0.5">
                      ?
                    </span>
                    <span className="text-sm text-[var(--text-primary)] leading-relaxed">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* ADKAR Diagnostic Section */}
      <CollapsibleSection
        id="adkar"
        title="Diagnosing Adoption Gaps"
        subtitle="Use ADKAR to identify the real blocker—then match the right intervention"
        defaultOpen
      >
        <div className="space-y-6 pt-4">
          {/* ADKAR Explanation */}
          <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--bg-surface)]">
            <p className="text-[var(--text-primary)] leading-relaxed mb-4">
              <strong>ADKAR</strong> is a change management framework developed by Prosci that breaks down individual change into five sequential stages: <strong>A</strong>wareness, <strong>D</strong>esire, <strong>K</strong>nowledge, <strong>A</strong>bility, and <strong>R</strong>einforcement.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              When adoption stalls, the problem is rarely "people don't like the tool." It's that they're stuck at one of these stages. The key insight: you can't solve a Desire problem with more Training, or an Awareness problem with better Documentation. Diagnose first, then intervene.
            </p>
          </div>

          {/* ADKAR Table */}
          <GenericTable
            title="ADKAR Diagnosis Guide"
            description="Identify where people are stuck, then apply the right intervention"
            columns={["Stage", "Symptom", "Intervention"]}
            rows={adkarDiagnosis.stages.map((s) => ({
              stage: s.stage,
              symptom: s.symptom,
              intervention: s.intervention,
            }))}
          />
        </div>
      </CollapsibleSection>

      {/* Quick Reference Timeline */}
      <CollapsibleSection
        id="timeline"
        title="Quick Reference Timeline"
        subtitle="90-day action breakdown by role — click any week to expand"
        defaultOpen
      >
        <div className="space-y-8 pt-4">
          <ExpandableActionTable
            title="Executive Sponsor Actions"
            description="Your weekly activities as the executive sponsor"
            actions={expandedSponsorActions}
            emailTemplates={emailTemplates}
            storageKey="v0-playbook-sponsor-completed"
          />
          <ExpandableActionTable
            title="Coalition Actions"
            description="Growing your support network of team leads, managers, and product ops"
            actions={expandedCoalitionActions}
            emailTemplates={emailTemplates}
            storageKey="v0-playbook-coalition-completed"
          />
          <ExpandableActionTable
            title="Champion Actions"
            description="What your technical champions should be doing"
            actions={expandedChampionActions}
            emailTemplates={emailTemplates}
            storageKey="v0-playbook-champion-completed"
          />
        </div>
      </CollapsibleSection>

      {/* Pre-Launch Section */}
      <CollapsibleSection
        id="prelaunch"
        title="Pre-Launch: Building Your Foundation"
        subtitle="Week -2 to Week 0 — Align on rollout strategy and prepare your coalition"
      >
        <div className="space-y-8 pt-4">
          {/* Pre-Launch Week breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <WeekCard
              week="Week -2"
              title="Kickoff Alignment"
              activities={[
                "All roles align on rollout plan together",
                "Define success metrics and KPIs",
                "Clarify roles: sponsor visibility, champion support, coalition reinforcement",
              ]}
            />
            <WeekCard
              week="Week -1"
              title="Preparation"
              activities={[
                "Coalition maps workflows, use cases, and setup",
                "Champions prepare 1-2 use case demos",
                "Integrate design system and connect GitHub",
              ]}
            />
            <WeekCard
              week="Week 0"
              title="Launch"
              activities={[
                "Sponsor sends personal launch email",
                "Coalition rolls out access to team",
                "Champions run training with Vercel",
              ]}
            />
          </div>

          {/* Role Identification */}
          <GenericTable
            title={roleIdentification.title}
            description={roleIdentification.description}
            columns={roleIdentification.columns}
            rows={roleIdentification.rows}
          />

          {/* Email Template */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4">Email Templates</h3>
            <EmailTemplateList templates={prelaunchTemplates} />
          </div>
        </div>
      </CollapsibleSection>

      {/* Month 1 Section */}
      <CollapsibleSection
        id="month1"
        title="Month 1: Launch & Awareness"
        subtitle="Week 1-4 — Create visibility and early wins"
      >
        <div className="space-y-8 pt-4">
          {/* Week breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WeekCard
              week="Week 1"
              title="Launch & Training"
              activities={[
                "Coalition hosts v0 training or hackathon",
                "Champions offer 1:1 help sessions",
                "Sponsor shares something they built with v0",
              ]}
            />
            <WeekCard
              week="Week 2"
              title="Office Hours & Support"
              activities={[
                "Champion-led office hours",
                "Answer questions in Slack/chat",
                "Reduce friction for early adopters",
              ]}
            />
            <WeekCard
              week="Week 3"
              title="First Wins"
              activities={[
                "Coalition hosts building showcase",
                "Sponsor shares first success story",
                "Champions document workflow improvements",
              ]}
            />
            <WeekCard
              week="Week 4"
              title="Alignment Check"
              activities={[
                "All roles check in with sponsor on progress",
                "Review initial adoption metrics",
                "Identify blockers to address",
              ]}
            />
          </div>

          {/* Email Templates */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4">Email Templates</h3>
            <EmailTemplateList templates={month1Templates} />
          </div>

          {/* Talking Points */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4">Conversation Scripts</h3>
            <TalkingPointsList talkingPoints={talkingPoints} />
          </div>
        </div>
      </CollapsibleSection>

      {/* Month 2 Section */}
      <CollapsibleSection
        id="month2"
        title="Month 2: Desire & Depth"
        subtitle="Week 5-8 — Move from awareness to active usage"
      >
        <div className="space-y-8 pt-4">
          {/* Week breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WeekCard
              week="Week 5"
              title="Gather Feedback"
              activities={[
                "Coalition sends adoption survey",
                "Champions pair with hesitant team members",
                "Gather structured feedback",
              ]}
            />
            <WeekCard
              week="Week 6"
              title="Advanced Training"
              activities={[
                "Coalition runs advanced use cases training",
                "Sponsor amplifies a win publicly",
                "Deepen skills across team",
              ]}
            />
            <WeekCard
              week="Week 7-8"
              title="Prepare for Review"
              activities={[
                "Coalition preps for Vercel exec review",
                "Champions gather feedback for sponsor",
                "Sponsor reviews usage with Vercel exec (Week 8)",
              ]}
            />
          </div>

          {/* Email Templates */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4">Email Templates</h3>
            <EmailTemplateList templates={month2Templates} />
          </div>
        </div>
      </CollapsibleSection>

      {/* Month 3 Section */}
      <CollapsibleSection
        id="month3"
        title="Month 3: Reinforcement & Scale"
        subtitle="Week 9-12 — Embed into workflows and plan expansion"
      >
        <div className="space-y-8 pt-4">
          {/* Week breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WeekCard
              week="Week 9-10"
              title="Retro & Showcase"
              activities={[
                "Coalition runs adoption retro and reviews integrations",
                "Champions lead 'what we've shipped' showcase",
                "Sponsor recognizes top contributors (Week 10)",
              ]}
            />
            <WeekCard
              week="Week 11-12"
              title="Plan What's Next"
              activities={[
                "Champion-led showcase and office hours (Week 11)",
                "Mentor new champions from usage data",
                "All roles plan for what's next (Week 12)",
              ]}
            />
          </div>

          {/* Integration Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Integration Checklist</h3>
            <div className="border border-border rounded-lg bg-card p-4">
              <ul className="space-y-3">
                {integrationChecklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded border border-border flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-sm bg-accent/50" />
                    </span>
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expansion Questions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Expansion Planning Questions</h3>
            <div className="border-l-4 border-accent bg-card rounded-r-lg p-4">
              <ul className="space-y-3">
                {expansionQuestions.map((question, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-medium flex items-center justify-center">
                      ?
                    </span>
                    <span className="text-sm text-foreground/90">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Email Templates */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4">Email Templates</h3>
            <EmailTemplateList templates={month3Templates} />
          </div>
        </div>
      </CollapsibleSection>

      {/* Handling Scenarios Section */}
      <CollapsibleSection
        id="scenarios"
        title="Handling Challenges"
        subtitle="Solutions for typical adoption challenges"
      >
        <div className="space-y-8 pt-4">
          <ScenarioGrid scenarios={scenarios} />
        </div>
      </CollapsibleSection>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Time Commitment */}
            <div className="gradient-border p-6">
              <h3 className="text-lg font-semibold mb-2">
                {footerContent.timeCommitment.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {footerContent.timeCommitment.description}
              </p>
            </div>

            {/* Attribution */}
            <div className="flex items-center justify-center md:justify-end">
              <p className="text-sm text-muted-foreground">
                {footerContent.attribution}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Week Card Component
interface WeekCardProps {
  week: string;
  title: string;
  activities: string[];
}

function WeekCard({ week, title, activities }: WeekCardProps) {
  return (
    <div className="border border-border rounded-lg bg-card p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium text-accent uppercase tracking-wider">
          {week}
        </span>
        <span className="text-sm font-semibold">— {title}</span>
      </div>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-1">•</span>
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
