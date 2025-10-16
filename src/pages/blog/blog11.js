// pages/blog/ten-minute-reset-overwhelming-days.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function TenMinuteResetOverwhelmingDays() {
  const title = "The 10-Minute Reset for Overwhelming Days";
  const desc =
    "A practical, science-informed routine you can use anytime: calm your body, clear the mind, and choose the next right step in ten minutes.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="mental wellness, overwhelm, stress relief, breathwork, grounding, self-compassion, practical mental health tips, Pathway Humanity"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
      </Head>

      <MainNavbar />

      <Container className="py-5">
        <h1
          className="mb-4 text-center fw-bold"
          style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}
        >
          {title}
          <span style={{ display: "block", fontSize: "1.25rem", opacity: 0.9 }}>
            Calm your body → clear your mind → pick one next step.
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
            When a day starts to run away from you—too many tabs open, tight
            chest, racing thoughts—you don’t need perfection. You need a short
            sequence that reliably steadies the body and points the mind toward
            the next doable step.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why this works
          </h2>
          <p>
            Your nervous system calms fastest when you address{" "}
            <em>body first, mind second, choice third</em>. We downshift
            physiology, reduce cognitive noise, then pick a small action that
            restores a sense of traction.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            The 10-Minute Reset (Step-by-Step)
          </h2>

          <h3 className="mt-3" style={{ fontSize: "1.3rem" }}>
            1) Two rounds of 4-6 breathing (2 min)
          </h3>
          <p>
            Inhale through the nose for 4, exhale for 6. Repeat ~10–12 breaths.
            Longer exhales cue the parasympathetic system (“rest and settle”),
            lowering arousal so thinking gets clearer.
          </p>

          <h3 className="mt-3" style={{ fontSize: "1.3rem" }}>
            2) 3-2-1 grounding (2 min)
          </h3>
          <p>
            Name <strong>3 things</strong> you can see,{" "}
            <strong>2 things</strong> you can feel, and{" "}
            <strong>1 sound</strong> you can hear. Let your eyes land on stable
            objects. This interrupts rumination and brings attention to the
            present.
          </p>

          <h3 className="mt-3" style={{ fontSize: "1.3rem" }}>
            3) Micro-movement circuit (3 min)
          </h3>
          <ul>
            <li>30s slow neck turns + shoulder rolls</li>
            <li>60s standing calf raises + wall push-ups</li>
            <li>60s easy walk or stair laps</li>
          </ul>
          <p>
            Movement metabolizes stress hormones and resets focus without
            needing a gym or special gear.
          </p>

          <h3 className="mt-3" style={{ fontSize: "1.3rem" }}>
            4) Thought labeling (1 min)
          </h3>
          <p>
            Quietly label what’s present: “planning,” “worry,” “self-critique,”
            “remembering.” Labels create healthy distance so you’re less fused
            with any single thought.
          </p>

          <h3 className="mt-3" style={{ fontSize: "1.3rem" }}>
            5) One next step (2 min)
          </h3>
          <p>
            Ask: <em>“What’s the smallest action that meaningfully moves this
            day forward?”</em> Write it down, do a 90-second start, and ignore
            everything else until it’s done.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Make it stick (tiny habit design)
          </h2>
          <ul>
            <li>
              <strong>Anchor:</strong> Run the reset after lunch or right before
              a meeting.
            </li>
            <li>
              <strong>Reduce friction:</strong> Keep a one-page card or phone
              note with steps.
            </li>
            <li>
              <strong>Track:</strong> Put a small dot on your calendar each time
              you complete it.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            When to reach for extra support
          </h2>
          <p>
            If you’re facing persistent low mood, sleep disruption, or anxiety
            that makes daily tasks hard for more than a couple of weeks,
            consider reaching out to a licensed professional. Short skills +
            skilled support often create the best lift.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Practice with Pathway Humanity
          </h2>
          <p>
            We teach small, realistic practices that fit real life—so steadiness
            is available on busy days, not just calm ones. If you want a gentle
            starting plan or a workshop for your team, we’re here.
          </p>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{ color: "#20c997", textDecoration: "underline" }}
            >
              Get a 2-Week Reset Plan
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is informational only and not medical advice.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
