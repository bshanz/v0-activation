import { Hero } from "@/components/hero";
import { ABCCards } from "@/components/abc-cards";
import { StickyNav } from "@/components/sticky-nav";
import { CollapsibleSection } from "@/components/collapsible-section";
import { GenericTable } from "@/components/action-table";
import { ExpandableActionTable } from "@/components/expandable-action-table";
import { EmailTemplateList } from "@/components/email-template";
import { TalkingPointsList } from "@/components/talking-points";
import { ScenarioGrid } from "@/components/scenario-card";
import { PushbackList } from "@/components/pushback-card";
import {
  expandedSponsorActions,
  expandedChampionActions,
  expandedCoalitionActions,
  roleIdentification,
  emailTemplates,
  talkingPoints,
  scenarios,
  pushbackItems,
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

      {/* ABC Framework Section */}
      <ABCCards />

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
            title="Coalition Building"
            description="How the support network grows over time"
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
        subtitle="Week -2 to Week 0 — Identify champions and prepare for launch"
      >
        <div className="space-y-8 pt-4">
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
              title="Launch Week"
              activities={[
                "Send launch announcement to team",
                "Hold 15-min intro in team meeting",
                "Champions offer 1:1 help sessions",
              ]}
            />
            <WeekCard
              week="Week 2"
              title="Initial Support"
              activities={[
                "Follow up on initial reactions",
                "Connect blockers with champions",
                "Share quick tips in team channel",
              ]}
            />
            <WeekCard
              week="Week 3"
              title="First Wins"
              activities={[
                "Share first success story",
                "Champions document workflow improvements",
                "Gather feedback on blockers",
              ]}
            />
            <WeekCard
              week="Week 4"
              title="Remove Obstacles"
              activities={[
                "Address identified blockers",
                "Host informal lunch-and-learn",
                "Review initial adoption metrics",
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
              week="Week 5-6"
              title="Deepen Engagement"
              activities={[
                "Feature champions in team meeting",
                "Champions pair with hesitant members",
                "Share advanced use cases",
              ]}
            />
            <WeekCard
              week="Week 7-8"
              title="Data-Driven Adjustment"
              activities={[
                "Review usage data with champions",
                "Gather bottom-up feedback",
                "Pivot approach based on learnings",
              ]}
            />
          </div>

          {/* ADKAR Diagnosis */}
          <GenericTable
            title={adkarDiagnosis.title}
            description={adkarDiagnosis.description}
            columns={["Stage", "Symptom", "Intervention"]}
            rows={adkarDiagnosis.stages.map((s) => ({
              stage: s.stage,
              symptom: s.symptom,
              intervention: s.intervention,
            }))}
          />

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
              title="Integration"
              activities={[
                "Plan workflow integration touchpoints",
                "Coalition owns peer onboarding",
                "Update team documentation",
              ]}
            />
            <WeekCard
              week="Week 11-12"
              title="Recognition & Scale"
              activities={[
                "Recognize top contributors",
                "Formalize champion program",
                "Plan expansion to other teams",
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
        title="Handling Common Scenarios"
        subtitle="Solutions for typical adoption challenges"
      >
        <div className="pt-4">
          <ScenarioGrid scenarios={scenarios} />
        </div>
      </CollapsibleSection>

      {/* Handling Pushback Section */}
      <CollapsibleSection
        id="pushback"
        title="Handling Pushback"
        subtitle="Ready responses for common objections"
      >
        <div className="pt-4">
          <PushbackList items={pushbackItems} />
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
