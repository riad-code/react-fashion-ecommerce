import React from 'react';

import Footer from '../Components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Fashion Trends of 2025",
    summary: "Discover the hottest fashion trends taking over 2025.",
    image: "/Images/blog1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "How to Style Your Winter Wardrobe",
    summary: "A complete guide stylish this winter.",
    image: "/Images/blog2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Men's Fashion Essentials for styling in thid Summer ",
    summary: "Timeless pieces every man should own.",
    image: "/Images/blog3.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
const Blog = () => {
  return (
    <>
     

      <div className="bg-light text-dark py-3 fw-bold text-center ">
        <h1 className="display-4 fw-bold  fw-bold text-primary">Our Blogs</h1>
        <p className="lead fw-bold text-primary">Style tips, trends, and inspiration for every season.</p>
      </div>

      <Container className="py-5">
        <Row>
          {blogPosts.map((post) => (
            <Col key={post.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top"className="product-image2" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.summary}</Card.Text>

             
                  {post.videoUrl && (
                    <div className="ratio ratio-16x9 mb-3">
                      <iframe
                        src={post.videoUrl}
                        title={`Video for ${post.title}`}
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  <Button variant="dark" href={`/blog/${post.id}`}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Blog;
