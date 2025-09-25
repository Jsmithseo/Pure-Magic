// pages/blog/blog-employment-gap-after-treatment.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function EmploymentGapAfterTreatment() {
  return (
    <>
      <Head>
        <title>
          How to Talk About an Employment Gap After Treatment | Pathway Humanity
        </title>
        <meta
          name="description"
          content="A short framework and word-for-word scripts to explain an employment gap with confidence—plus resume/LinkedIn tips, outreach templates, and a two-week return-to-work plan."
        />
        <meta
          name="keywords"
          content="employment gap, after treatment, interview scripts, resume tips, LinkedIn, job readiness, Pathway Humanity"
        />
      </Head>

      <MainNavbar />

      <Container className="py-5">
        <h1
          className="mb-4 text-center fw-bold"
          style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}
        >
          How to Talk About an Employment Gap After Treatment
          <span style={{ display: "block", fontSize: "1.25rem", opacity: 0.9 }}>
            (With Scripts You Can Use)
          </span>
        </h1>

        <article
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            color: "#fff",
          }}
        >
          <p>
            Returning to work after treatment is a big step. You don’t owe anyone
            your medical history—yet you <strong>can</strong> share a clear,
            confident story that protects your privacy, shows growth, and moves
            the conversation forward. Use the framework and scripts below to keep
            it short and effective.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            The 3-Part Framework (Keep It Short)
          </h2>
          <ul>
            <li>
              <strong>Context (optional):</strong> “I took time for health and
              family.”
            </li>
            <li>
              <strong>Action:</strong> “I focused on recovery, professional
              upskilling, and structure.”
            </li>
            <li>
              <strong>Return:</strong> “I’m ready now—here’s what I bring and
              what I’m targeting.”
            </li>
          </ul>
          <p>
            Aim for <strong>15–25 seconds</strong>. No over-explaining. Pivot to
            your value.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Interview Scripts (Pick One)
          </h2>
          <h3 className="mt-3" style={{ fontSize: "1.3rem" }}>
            Script A — Minimal &amp; Confident
          </h3>
          <blockquote style={{ borderLeft: "3px solid #20c997", paddingLeft: 12 }}>
            “I took a planned break for health reasons, stayed active with
            self-paced courses and volunteer work, and I’m fully ready to
            contribute. I’m excited about this role because it aligns with my
            strengths in [skill], especially [specific responsibility].”
          </blockquote>

          <h3 className="mt-3" style={{ fontSize: "1.3rem" }}>
            Script B — Skills-Focused
          </h3>
          <blockquote style={{ borderLeft: "3px solid #20c997", paddingLeft: 12 }}>
            “I stepped back to prioritize health, and during that time I
            completed [certificate/course], volunteered with [org], and improved
            [tool/skill]. I’m glad to be back in the market and particularly
            interested in applying [skill] to [role outcome].”
          </blockquote>

          <h3 className="mt-3" style={{ fontSize: "1.3rem" }}>
            Script C — Career-Shift
          </h3>
          <blockquote style={{ borderLeft: "3px solid #20c997", paddingLeft: 12 }}>
            “I used that period to reset and get specific about fit. I trained in
            [new area], built a small project in [tool], and now I’m targeting
            roles where I can [impact]. Here’s how my past experience transfers.”
          </blockquote>

          <h4 className="mt-4" style={{ fontSize: "1.2rem" }}>
            Handling follow-ups
          </h4>
          <p>
            <strong>“Is your health stable?”</strong> “Yes. I’ve got the support
            and routines in place. I’m ready for full-time work and consistent
            performance.”
          </p>
          <p>
            <strong>“Why should we choose you given the gap?”</strong> “Because I
            can deliver [measurable outcome]. In my last role I [result]. Here’s
            how I’d approach your [project/metric] in the first 60 days.”
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Resume &amp; LinkedIn — How to Format Gaps
          </h2>
          <ul>
            <li>Use <strong>years</strong> instead of months (when appropriate).</li>
            <li>
              Add a short entry if you did structured activities:
              <br />
              <em>Professional Development (2024–2025)</em>
              <ul>
                <li>Completed Google Data Analytics Certificate</li>
                <li>Volunteer, Pathway Humanity employment workshops</li>
                <li>
                  Projects: Built dashboard in Looker Studio for nonprofit
                  reporting
                </li>
              </ul>
            </li>
            <li>
              Show <strong>outcomes</strong>, not just tasks: “Reduced report
              prep time by 30%.”
            </li>
            <li>
              <strong>Headline examples (LinkedIn):</strong>
              <br />
              Customer Success | De-escalation &amp; Retention | CRM: HubSpot,
              Salesforce
              <br />
              Operations Coordinator | Scheduling • Compliance • Vendor
              Management
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Networking &amp; Outreach Templates
          </h2>
          <h3 style={{ fontSize: "1.3rem" }}>Re-introducing yourself to a past colleague</h3>
          <p>
            <strong>Subject:</strong> Quick hello + catching up
            <br />
            “Hi [Name]—I’ve stepped back into the market and am targeting
            [roles]. Over the last year I completed [course], supported
            [volunteer/project], and polished [tool]. If you hear of anything in
            [industry], I’d value a warm intro. Hope you’re well!”
          </p>

          <h3 style={{ fontSize: "1.3rem" }}>Cold outreach to a hiring manager</h3>
          <p>
            “Hi [Name], I’m a [role] with strengths in [2–3 skills]. I noticed
            your team is working on [initiative]. Here’s a three-bullet view of
            how I’d add value in the first 60 days: [bullets]. Open to a
            15-minute chat?”
          </p>

          <h3 style={{ fontSize: "1.3rem" }}>Reference refresher</h3>
          <p>
            “Hey [Name], I’m applying to [role]. If you’re comfortable, could you
            speak to my work on [project/result]? Here’s a 3-line refresher and
            updated resume.”
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Two-Week “Back-to-Work” Prep Plan
          </h2>
          <h4 style={{ fontSize: "1.2rem" }}>Week 1: Foundation</h4>
          <ul>
            <li>Decide your <strong>one target lane</strong> (title + industry).</li>
            <li>
              Draft a <strong>3-sentence gap statement</strong> (use scripts above).
            </li>
            <li>Update resume + LinkedIn; set headline to your target lane.</li>
            <li>Collect <strong>3 proof points</strong> (metrics, testimonials, before/after).</li>
            <li>
              Build a <strong>1-page portfolio</strong> (case study or project summary).
            </li>
            <li>
              Weekend: practice <strong>10 interview reps</strong> (record; tighten to 20s).
            </li>
          </ul>

          <h4 style={{ fontSize: "1.2rem" }}>Week 2: Motion</h4>
          <ul>
            <li>Send <strong>10 warm reach-outs</strong> (former coworkers, classmates).</li>
            <li>Apply to <strong>5 aligned roles</strong> (customize each resume).</li>
            <li>Schedule <strong>2 informational chats</strong>.</li>
            <li>Follow up; log outcomes; adjust scripts from feedback.</li>
            <li>Weekend: rest, review, reset goals for next week.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Regulating Nerves in Real Time (60-Second Reset)
          </h2>
          <ol>
            <li>
              Exhale longer than you inhale (<strong>4 in, 6 out</strong>) × 5 breaths.
            </li>
            <li>Name 3 things you can see; relax jaw/shoulders.</li>
            <li>
              Cue phrase: <strong>“Calm body, clear answer.”</strong> Then speak
              your 3-part framework.
            </li>
          </ol>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Coach/Ally Corner (How Helpers Can Support)
          </h2>
          <ul>
            <li>
              Mirror strengths first: “I notice your communication is clear and concise.”
            </li>
            <li>
              Rehearse the pivot: ask the gap question, time the answer, and
              practice the quick shift to value.
            </li>
            <li>
              Tighten the target: pick a lane—breadth creates anxiety, focus creates traction.
            </li>
            <li>Celebrate micro-wins: sent 5 emails? Logged a mock interview? That counts.</li>
          </ul>

          <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <p className="mt-4">
            <strong>CTA:</strong> Want help practicing your gap statement?{" "}
            <Link
              href="/contact"
              style={{ color: "#20c997", textDecoration: "underline" }}
            >
              Book a Job Readiness Session
            </Link>{" "}
            — we’ll leave you with scripts and next steps you can use this week.
          </p>

          <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is informational only and not legal or medical advice.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
