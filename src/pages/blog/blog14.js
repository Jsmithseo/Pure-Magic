// pages/blog/talking-to-teens-about-mental-health.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function TalkingToTeensAboutMentalHealth() {
  const title = "Talking to Teens About Mental Health";
  const desc =
    "Teens are feeling more pressure than ever, but many don’t know how to ask for help. Here’s how caring adults can start real conversations without pushing young people away.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="teen mental health, youth mental health, talking to teens, communication, anxiety, depression, Pathway Humanity, mentors"
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
            You don’t have to say it perfectly. You just have to show up and stay.
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
            Today’s teens are growing up in a world of social media, academic
            pressure, family stress, and constant comparison. Many of them are
            carrying anxiety, depression, or trauma quietly — even while they
            laugh, go to practice, and post like everything is fine.
          </p>
          <p>
            Caring adults want to help, but a lot of us are afraid of{" "}
            <em>saying the wrong thing</em>. So we delay the conversation, or we
            only talk when there’s a crisis. Young people end up feeling judged,
            misunderstood, or alone.
          </p>
          <p>
            The good news: you don’t have to be a therapist to make a huge
            difference. You just need a few tools and a lot of patience.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why teens don’t open up (even when they’re hurting)
          </h2>
          <ul>
            <li>
              <strong>Fear of being a burden:</strong> Many teens worry that if
              they’re honest, they’ll add to their family’s stress or “make
              things worse.”
            </li>
            <li>
              <strong>Worried about getting in trouble:</strong> If every hard
              conversation in the past turned into a lecture, they may assume
              honesty = punishment.
            </li>
            <li>
              <strong>They don’t have the words yet:</strong> It’s hard to
              describe panic attacks, numbness, or hopelessness when you’ve
              never been taught the language for it.
            </li>
            <li>
              <strong>They expect you to “fix it” fast:</strong> Teens may
              think adults only want solutions, not feelings — so they hide what
              can’t be fixed in one talk.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Before you talk: get yourself ready
          </h2>
          <p>
            Hard conversations go better when adults slow down first. Ask
            yourself:
          </p>
          <ul>
            <li>
              <strong>Can I listen more than I talk?</strong> If not, take a
              walk, pray, or breathe before you start.
            </li>
            <li>
              <strong>Am I willing to hear something uncomfortable?</strong>{" "}
              Teens will test whether you can handle the truth.
            </li>
            <li>
              <strong>Do I know my limits?</strong> You’re a bridge, not the
              whole support system. It’s okay if you need backup.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Conversation openers that actually work
          </h2>
          <p>Instead of “What’s wrong with you?” try:</p>
          <ul>
            <li>
              <strong>“I’ve noticed…”</strong>{" "}
              <em>“I’ve noticed you’ve been quieter after practice lately. How
              are you holding up?”</em>
            </li>
            <li>
              <strong>“On a scale from 1–10…”</strong>{" "}
              <em>“If 10 is the best day ever and 1 is ‘I don’t want to get out
              of bed,’ where are you today?”</em>
            </li>
            <li>
              <strong>“What feels heavy right now?”</strong> This invites a
              specific answer instead of “fine.”
            </li>
            <li>
              <strong>“Do you want advice or just a listener?”</strong> Let them
              choose the kind of support they want.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Things to say more often
          </h2>
          <ul>
            <li>
              <strong>“You’re not in trouble for feeling this way.”</strong>
            </li>
            <li>
              <strong>“Thank you for telling me. That took courage.”</strong>
            </li>
            <li>
              <strong>“You don’t have to figure this out alone.”</strong>
            </li>
            <li>
              <strong>“We can get help together.”</strong> (Then follow through:
              look up counselors, school supports, or community resources.)
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Things to avoid (even if you mean well)
          </h2>
          <ul>
            <li>
              <strong>Minimizing:</strong> “It’s not that bad,” “Other kids have
              it worse,” or “You’re just being dramatic.”
            </li>
            <li>
              <strong>Rushing to fix:</strong> Jumping straight to solutions
              before they’ve fully shared shuts the door.
            </li>
            <li>
              <strong>Making it about you:</strong> “When I was your age…” can
              be helpful sometimes, but not when it takes the spotlight off
              their pain.
            </li>
            <li>
              <strong>Using shame:</strong> “You’re being ungrateful” or “You’re
              going to ruin your life” rarely leads to honest conversation.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            A simple weekly check-in ritual
          </h2>
          <p>
            You don’t need a long speech — you need consistency. Here’s a
            simple rhythm families, mentors, and programs can use:
          </p>
          <ul>
            <li>
              <strong>Step 1: Set a routine.</strong> Maybe it’s the ride home
              from practice, Sunday dinner, or a weekly walk.
            </li>
            <li>
              <strong>Step 2: Ask the same two questions:</strong> “What’s one
              good thing from this week?” and “What’s one thing that’s been
              hard?”
            </li>
            <li>
              <strong>Step 3: Reflect what you heard.</strong> “So it sounds
              like math has been stressing you, and hanging with your cousin
              helped.”
            </li>
            <li>
              <strong>Step 4: Ask, “How can I support you?”</strong> Let them
              lead the next step.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can support your teens
          </h2>
          <p>
            At Pathway Humanity, we walk alongside young people and the adults
            who care about them. Our mentors and partners help create spaces
            where teens can talk honestly about stress, identity, school,
            family, and the future — without judgment.
          </p>
          <p>
            We can collaborate with schools, churches, grassroots groups, and
            community programs to:
          </p>
          <ul>
            <li>Host youth mental health workshops and listening circles.</li>
            <li>
              Train staff and volunteers on trauma-informed, culturally
              responsive communication.
            </li>
            <li>
              Build pathways to local counseling and supportive services for
              youth and their families.
            </li>
          </ul>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{ color: "#20c997", textDecoration: "underline" }}
            >
              Bring a youth mental health conversation to your school or program
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <details>
            <summary>
              <strong>If a teen is in crisis</strong>
            </summary>
            <p style={{ marginTop: "0.5rem" }}>
              Call or text <strong>988</strong> for the Suicide &amp; Crisis
              Lifeline (U.S.). If there is an immediate safety concern, call
              911. Stay as calm and present as you can — your steady presence
              matters.
            </p>
          </details>

          <p className="mt-4" style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is informational only and not a substitute for care from a
            licensed mental health professional.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
