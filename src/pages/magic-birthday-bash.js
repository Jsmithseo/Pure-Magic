import React, { useState } from "react";
import Head from "next/head";
import { Container, Row, Col, Card, CardBody, Button, Progress } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const questions = [
  {
    q: "What city is Pure Magic based in?",
    options: ["San Francisco", "Sacramento", "Oakland", "San Jose"],
    answer: "Oakland",
  },
  {
    q: "What service is Magic best known for?",
    options: ["Beard Trims", "Hair Coloring", "Hair Units", "Nail Services"],
    answer: "Hair Units",
  },
  {
    q: "Finish the sentence: Pure Magic is more than...",
    options: ["A haircut", "A salon", "An experience", "A business"],
    answer: "An experience",
  },
  {
    q: "What is the first thing clients usually compliment?",
    options: ["The haircut", "The conversation", "The atmosphere", "All of the above"],
    answer: "All of the above",
  },
  {
    q: "Magic isn’t just building a barbershop...",
    options: ["He’s building a brand", "He’s building a family", "He’s building a legacy", "All of the above"],
    answer: "All of the above",
  },
];

export default function MagicBirthdayBash() {
  const [step, setStep] = useState(0);
  const [guestInfo, setGuestInfo] = useState({ name: "", email: "", phone: "" });
  const [answers, setAnswers] = useState({});
  const [birthdayMessage, setBirthdayMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const calculateScore = () => {
    let total = 0;
    questions.forEach((item) => {
      if (answers[item.q] === item.answer) total += 1;
    });
    return total;
  };

  const handleSubmit = async () => {
    setLoading(true);

    const finalScore = calculateScore();
    setScore(finalScore);

    const payload = {
      guestInfo,
      answers,
      birthdayMessage,
      score: finalScore,
      total: questions.length,
    };

    try {
      await fetch("/api/magic-birthday-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const progress = ((step + 1) / (questions.length + 2)) * 100;

  return (
    <>
      <Head>
        <title>How Well Do You Know Magic? | Pure Magic</title>
        <meta
          name="description"
          content="Take the Magic The Barber Birthday Bash quiz and see how well you know Magic."
        />
      </Head>

      <MainNavBar />

      <section className="magicQuizHero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="quizCard">
                <CardBody>
                  {!submitted ? (
                    <>
                      <p className="quizKicker">Magic The Barber Birthday Bash</p>
                      <h1>How Well Do You Know Magic?</h1>
                      <p className="quizLead">
                        Take the birthday quiz, test your Pure Magic knowledge, and send Magic a birthday message.
                      </p>

                      <Progress value={progress} className="quizProgress" />

                      {step === 0 && (
                        <div className="quizBlock">
                          <h3>First, tell us who you are.</h3>

                          <input
                            type="text"
                            placeholder="Full Name"
                            value={guestInfo.name}
                            onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
                          />

                          <input
                            type="email"
                            placeholder="Email"
                            value={guestInfo.email}
                            onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                          />

                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={guestInfo.phone}
                            onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                          />

                          <Button
                            className="goldBtn"
                            disabled={!guestInfo.name || !guestInfo.email}
                            onClick={() => setStep(1)}
                          >
                            Start Quiz
                          </Button>
                        </div>
                      )}

                      {step > 0 && step <= questions.length && (
                        <div className="quizBlock">
                          <h3>{questions[step - 1].q}</h3>

                          <div className="answerGrid">
                            {questions[step - 1].options.map((option) => (
                              <button
                                key={option}
                                className={
                                  answers[questions[step - 1].q] === option
                                    ? "answerBtn selected"
                                    : "answerBtn"
                                }
                                onClick={() => handleAnswer(questions[step - 1].q, option)}
                              >
                                {option}
                              </button>
                            ))}
                          </div>

                          <div className="quizActions">
                            <Button
                              className="darkBtn"
                              disabled={step === 0}
                              onClick={() => setStep(step - 1)}
                            >
                              Back
                            </Button>

                            <Button
                              className="goldBtn"
                              disabled={!answers[questions[step - 1].q]}
                              onClick={() => setStep(step + 1)}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      )}

                      {step === questions.length + 1 && (
                        <div className="quizBlock">
                          <h3>Bonus Question</h3>
                          <p>Leave Magic a birthday message.</p>

                          <textarea
                            rows="5"
                            placeholder="Write your birthday message here..."
                            value={birthdayMessage}
                            onChange={(e) => setBirthdayMessage(e.target.value)}
                          />

                          <div className="quizActions">
                            <Button className="darkBtn" onClick={() => setStep(step - 1)}>
                              Back
                            </Button>

                            <Button className="goldBtn" disabled={loading} onClick={handleSubmit}>
                              {loading ? "Submitting..." : "Submit Answers"}
                            </Button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="successBox">
                      <h1>🎉 Thanks for playing!</h1>
                      <p>
                        You scored <strong>{score}/{questions.length}</strong>.
                      </p>
                      <p>Your answers and birthday message have been sent.</p>
                      <h3>Happy Birthday, Magic!</h3>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

      <style jsx global>{`
        .magicQuizHero {
          min-height: 90vh;
          padding: 80px 0;
          background:
            radial-gradient(circle at top left, rgba(212, 175, 55, 0.2), transparent 35%),
            linear-gradient(180deg, #050505 0%, #111 100%);
          color: #fff;
        }

        .quizCard {
          background: rgba(20, 20, 20, 0.96);
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 24px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
          padding: 20px;
        }

        .quizKicker {
          text-transform: uppercase;
          color: #d4af37;
          letter-spacing: 0.18em;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .quizCard h1 {
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 12px;
        }

        .quizLead {
          color: rgba(255, 255, 255, 0.75);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .quizProgress {
          height: 10px;
          border-radius: 999px;
          margin: 28px 0;
          background: #2a2a2a;
        }

        .progress-bar {
          background-color: #d4af37 !important;
        }

        .quizBlock {
          margin-top: 24px;
        }

        .quizBlock h3 {
          font-weight: 900;
          margin-bottom: 18px;
        }

        .quizBlock input,
        .quizBlock textarea {
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #222;
          color: #fff;
          margin-bottom: 14px;
        }

        .answerGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .answerBtn {
          padding: 16px;
          border-radius: 16px;
          background: #222;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-weight: 700;
          transition: 0.2s ease;
        }

        .answerBtn:hover,
        .answerBtn.selected {
          background: #d4af37;
          color: #111;
          border-color: #d4af37;
        }

        .quizActions {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 24px;
        }

        .goldBtn {
          background: #d4af37 !important;
          border: none !important;
          color: #111 !important;
          font-weight: 900 !important;
          border-radius: 999px !important;
          padding: 12px 24px !important;
        }

        .darkBtn {
          background: #222 !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          color: #fff !important;
          font-weight: 800 !important;
          border-radius: 999px !important;
          padding: 12px 24px !important;
        }

        .successBox {
          text-align: center;
          padding: 40px 10px;
        }

        .successBox strong,
        .successBox h3 {
          color: #d4af37;
        }

        @media (max-width: 576px) {
          .answerGrid {
            grid-template-columns: 1fr;
          }

          .quizActions {
            flex-direction: column;
          }

          .goldBtn,
          .darkBtn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}