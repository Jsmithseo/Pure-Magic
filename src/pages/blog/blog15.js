// pages/blog/helping-young-adults-navigate-anxiety.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function HelpingYoungAdultsNavigateAnxiety() {
  const title = "Helping Young Adults Navigate Anxiety in the Digital Age";
  const desc =
    "Young people face new pressures from social media, work, and uncertainty. Practical steps adults can use to help them build coping skills, find community, and get the right support.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="young adult anxiety, digital anxiety, mental health, resilience, Pathway Humanity, community support"
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
          <span style={{ display: "block", fontSize: "1.15rem", opacity: 0.9 }}>
            Practical ways adults and communities can help young people find calm,
            connection, and agency.
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
            Anxiety among young adults is on the rise — and the digital world
            makes both the triggers and the escape routes more complex. Between
            nonstop news cycles, social comparison online, unstable job markets,
            and changing relationships, it’s easy to feel overwhelmed.
          </p>

          <p>
            The good news is that anxiety is manageable and people can learn
            skills to reduce its power. Adults — whether parents, mentors,
            teachers, or community leaders — play a huge role in helping young
            people build those skills. Below are practical, compassionate steps
            you can use right away.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Start with presence, not fixes
          </h2>
          <p>
            When someone is anxious, the first impulse for many adults is to
            offer solutions. That’s natural, but it’s often more helpful to
            first create space. Try:
          </p>
          <ul>
            <li>
              <strong>Be steady:</strong> A calm, consistent tone tells a nervous
              brain it’s safe to slow down.
            </li>
            <li>
              <strong>Listen without immediate advice:</strong> Ask clarifying
              questions and reflect back what you hear.
            </li>
            <li>
              <strong>Normalize the feeling:</strong> “Anxiety is uncomfortable,
              but it’s a real response — and we can figure out ways to manage
              it together.”
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Practical skills to practice together
          </h2>
          <p>
            Teaching a few small tools — and practicing them in low-stress
            moments — makes them more available when anxiety spikes.
          </p>
          <ul>
            <li>
              <strong>Breathing exercises:</strong> Simple 4–4–4 breathing
              (inhale 4s, hold 4s, exhale 4s) or box breathing can quickly
              reduce acute symptoms.
            </li>
            <li>
              <strong>Grounding techniques:</strong> The 5-4-3-2-1 sensory
              exercise (name 5 things you can see, 4 you can touch, etc.) brings
              attention back to the present.
            </li>
            <li>
              <strong>Micro-exposures:</strong> Gradually facing small fears
              (instead of avoiding everything) builds confidence over time.
            </li>
            <li>
              <strong>Routine & sleep:</strong> Encourage regular sleep patterns
              and small daily routines — these anchor the nervous system.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Digital hygiene: boundaries that protect well-being
          </h2>
          <p>
            The internet isn’t going away, but we can teach boundaries that
            reduce harm.
          </p>
          <ul>
            <li>
              <strong>Limit doom-scrolling:</strong> Suggest set times for news
              and stick to trustworthy sources.
            </li>
            <li>
              <strong>Curate feeds:</strong> Encourage following accounts that
              uplift, inform, or teach skills rather than those that fuel
              comparison.
            </li>
            <li>
              <strong>Phone-free windows:</strong> Family meals, wind-down time,
              and focused work sessions can be phone-free to reduce reactivity.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            When to get professional support
          </h2>
          <p>
            Many anxious feelings resolve with skill-building and community,
            but some warnings call for outside help:
          </p>
          <ul>
            <li>
              Anxiety that disrupts school, work, or relationships regularly.
            </li>
            <li>
              Panic attacks, frequent intrusive thoughts, or changes in sleep
              and appetite that don’t improve.
            </li>
            <li>
              Thoughts of self-harm, hopelessness, or any suggestion someone
              might be in danger.
            </li>
          </ul>

          <p>
            If any of the above apply, connect the young person with a licensed
            mental health professional. Offer to make the first call or sit in
            on the telehealth intake if that feels helpful.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Building a supportive network
          </h2>
          <p>
            Young people do best when they know they aren’t alone. Consider:
          </p>
          <ul>
            <li>
              <strong>Peer supports:</strong> Small, guided groups where people
              can share skills and experiences without judgment.
            </li>
            <li>
              <strong>Mentor check-ins:</strong> Regular, short check-ins that
              focus on strengths and one practical next step.
            </li>
            <li>
              <strong>Community partnerships:</strong> Schools, churches, clubs,
              and nonprofits can offer low-barrier access to counseling and
              workshops.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Simple scripts adults can use
          </h2>
          <p>
            Below are short, practical phrases that invite trust and action:
          </p>
          <ul>
            <li>
              <strong>“I’m here. Tell me what’s been happening for you.”</strong>
            </li>
            <li>
              <strong>“That sounds really hard. What would be most helpful right
              now — someone to listen, or to work on a plan together?”</strong>
            </li>
            <li>
              <strong>“If you want, we can try a breathing exercise together
              right now.”</strong>
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>
          <p>
            Pathway Humanity partners with schools, youth programs, and
            community groups to build practical supports that reduce anxiety and
            increase resilience. We offer:
          </p>
          <ul>
            <li>Skills workshops on coping tools and stress management.</li>
            <li>Peer-support groups and guided check-ins.</li>
            <li>Training for staff and volunteers on trauma-informed,
              culturally-sensitive practices.</li>
          </ul>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{ color: "#20c997", textDecoration: "underline" }}
            >
              Invite Pathway Humanity to bring a workshop or support program to
              your organization
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <details>
            <summary>
              <strong>If someone is in crisis</strong>
            </summary>
            <p style={{ marginTop: "0.5rem" }}>
              In the U.S., call or text <strong>988</strong> to reach the Suicide
              &amp; Crisis Lifeline. If there is immediate danger, call 911.
              Stay with the person if it is safe to do so and seek emergency
              help.
            </p>
          </details>

          <p className="mt-4" style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is for educational and informational purposes only and is
            not a substitute for professional mental health care.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
