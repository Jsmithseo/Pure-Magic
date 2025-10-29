import React from "react";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, CardImg } from "reactstrap";

const posts = [
  {
    id: 10,
    title: "Why Youth Mentorship Programs Matte",
    slug: "/blog/blog12",
    image: "/images/blog10.jpg",
    date: "October 29 2025"
  }, 
  {
    id: 9,
    title: "The 10-Minute Reset for Overwhelming Days",
    slug: "/blog/blog11",
    image: "/images/blog9.jpg",
    date: "October 16 2025"
  }, 
  {
    id: 8,
    title: "Five Everyday Practices to Stabilize Mental Wellness",
    slug: "/blog/blog10",
    image: "/images/blog8.jpg",
    date: "October 9 2025"
  }, 
  {
    id: 7,
    title: "How to Talk About an Employment Gap After Treatment ",
    slug: "/blog/blog9",
    image: "/images/blog7.jpg",
    date: "September 25 2025"
  },  
  {
    id: 6,
    title: " From Surviving to Working: A Step-by-Step Employment Roadmap",
    slug: "/blog/blog6",
    image: "/images/blog6.jpg",
    date: "September 18 2025"
  },
  {
    id: 5,
    title: "Transitional Housing 101: What to Expect (Day by Day)",
    slug: "/blog/blog5",
    image: "/images/blog5.jpg",
    date: "September 5 2025"
  },
  {
    id: 4,
    title: "What “Whole-Person Care” Really Means (And Why It Works)",
    slug: "/blog/blog4",
    image: "/images/blog4.jpg",
    date: "August 27, 2025"
  },

  {
    id: 3,
    title: "What is Transitional Housing?",
    slug: "/blog/blog3",
    image: "/images/blog3.jpg",
    date: "July 15, 2025"
  },
    {
    id: 2,
    title: "Mentoring is important to helping our youth",
    slug: "/blog/blog2",
    image: "/images/blog2.jpg",
    date: "July 12, 2025"
  },

  {
    id: 1,
    title: "Bay Area Food Insecurity: A Crisis in the Midst of Plenty",
    slug: "/blog/blog1",
    image: "/images/blog1.jpg",
    date: "July 10, 2025"
  },
  
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <MainNavbar />
      <Container className="py-5">
        <h1 className="text-center mb-4"
        style={{
          color: "#fff"
        }}>Blog</h1>
        <Row>
          {posts.map((post) => (
            <Col md="4" className="mb-4" key={post.id}>
              <Card className="h-100 shadow-sm">
                {post.image && <CardImg top width="100%" src={post.image} alt={post.title} />}
                <CardBody>
                  <span
                    className="badge rounded-pill mb-3"
                    style={{
                      backgroundColor: "#20c997", // Teal
                      color: "#fff",
                      padding: "0.5rem 1rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    {post.date}
                  </span>
                  <CardTitle tag="h5">{post.title}</CardTitle>
                  {post.excerpt && <CardText>{post.excerpt}</CardText>}
                  <Button
                    style={{
                      backgroundColor: "#20c997",
                      borderColor: "#20c997",
                    }}
                    href={post.slug}
                  >
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
