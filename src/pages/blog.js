import React from "react";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, CardImg } from "reactstrap";

const posts = [
  {
    id: 1,
    title: "Bay Area Food Insecurity: A Crisis in the Midst of Plenty",
    slug: "/blog/blog1",
    image: "/images/blog1.jpg",
    date: "July 10, 2025"
  },
  {
    id: 2,
    title: "Mentoring is important to helping our youth",
    slug: "/blog/blog2",
    image: "/images/blog2.jpg",
    date: "July 12, 2025"
  },
  {
    id: 3,
    title: "What is Transitional Housing?",
    slug: "/blog/blog3",
    image: "/images/blog3.jpg",
    date: "July 15, 2025"
  },
  {
    id: 4,
    title: "What “Whole-Person Care” Really Means (And Why It Works)",
    slug: "/blog/blog4",
    image: "/images/blog4.jpg",
    date: "August 27, 2025"
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
