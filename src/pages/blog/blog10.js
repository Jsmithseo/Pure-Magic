// pages/blog/mental-wellness-everyday-practices.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function MentalWellnessEverydayPractices() {
  const title = "Five Everyday Practices to Stabilize Mental Wellness";
  const desc =
    "Simple, science-informed practices—breathing, grounding, movement, thought-labeling, and social check-ins—to help you build steadier mental health in daily life.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="mental wellness, grounding, breathwork, mindfulness, resilience, practical mental health tips, Pathway Humanity"
        />
        {/* TODO: After you upload the image to /public/images, add:
            <meta property="og:image" content="/images/pathway-humanity-thumbnail-414x276.png" />
            <meta name="twitter:image" content="/images/pathway-humanity-thumbnail-414x276.png" />
        */}
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
            (That Actually Fit Real Life)
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
            Mental wellness isn’t a single breakthrough—it’s a set of repeatable skills you
            can practice in the flow of everyday life. The goal isn’t perfection; it’s
            building a steadier baseline so stress spikes feel more navigable and recovery
            times get shorter.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why small, repeatable habits work
          </h2>
          <p>
            Habits become “automatic stabilizers.” When your nervous system learns quick
            ways to settle (like a breath you can find anywhere), you reduce the intensity
            and duration of difficult moments. Over time, those minutes add up to real
            resilience.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            1) The 60-second breath anchor
          </h2>
          <p>
            Try a one-minute cycle: inhale through the nose for 4, hold 2, exhale 6–8.
            Repeat 6–8 times. Longer exhales signal safety to the nervous system. Use it
            before a call, during a commute, or when you feel overwhelmed.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            2) 3-2-1 Grounding (anywhere, no tools)
          </h2>
          <p>
            Name <strong>3 things</strong> you see, <strong>2 things</strong> you feel, and{" "}
            <strong>1 sound</strong> you hear. This re-orients attention to the present and
            interrupts runaway thought loops.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            3) Micro-movement breaks
          </h2>
          <p>
            Every 90 minutes, take 90 seconds to move—slow shoulder rolls, neck stretches,
            a short walk. Movement metabolizes stress hormones and improves focus for the
            next work block.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            4) Thought labeling
          </h2>
          <p>
            When a worry appears, label it gently: “planning,” “remembering,”
            “catastrophizing,” “self-critique.” Labeling reduces fusion with the thought
            so you can choose your next action more clearly.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            5) The social micro-check-in
          </h2>
          <p>
            Send a brief “thinking of you” text or voice note to someone safe. Connection—
            especially when you don’t need anything—nudges the nervous system toward calm
            and belonging.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Build your two-minute routine
          </h2>
          <ul>
            <li>Morning: 60-second breath + intention (“one step at a time”).</li>
            <li>Midday: 3-2-1 grounding after lunch.</li>
            <li>Afternoon: micro-movement break.</li>
            <li>Evening: thought label + one short check-in message.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            When extra support makes sense
          </h2>
          <p>
            If low mood, anxiety, or isolation persists for more than a couple of weeks—
            or if everyday functioning is getting harder—consider speaking with a mental
            health professional. Skills are powerful; skilled support can multiply their
            impact.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Practice with us
          </h2>
          <p>
            At Pathway to Humanity, we teach small, realistic practices that fit real
            life. If you’d like a gentle starting plan or a group workshop, we’re here.
          </p>

          <p className="mt-3">
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              Get a 2-Week Practice Plan
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
