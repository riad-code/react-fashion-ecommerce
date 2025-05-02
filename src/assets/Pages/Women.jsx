import React from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';
import Productcard from '../Components/Productcard';
import Footer from '../Components/Footer';

const womenProducts = [
    { id: 1, name: "Women's Floral Dress", price: "$39.99", image: "/Images/women1.jpg" },
    { id: 2, name: "Women's Skinny Jeans", price: "$49.99", image: "/Images/women2.jpg" },
    { id: 3, name: "Women's Leather Handbag", price: "$89.99", image: "/Images/women3.jpg" },
    { id: 4, name: "Women's High Heels", price: "$59.99", image: "/Images/women4.jpg" },
    { id: 5, name: "Women's Winter Coat", price: "$109.99", image: "/Images/women5.jpg" },
    { id: 6, name: "Women's Blouse", price: "$34.99", image: "/Images/women6.jpg" },
    { id: 7, name: "Women's Maxi Skirt", price: "$44.99", image: "/Images/women7.jpg" },
    { id: 8, name: "Women's Sunglasses", price: "$24.99", image: "/Images/women8.jpg" },
    { id: 9, name: "Women's Trench Coat", price: "$99.99", image: "/Images/women9.jpg" },
    { id: 10, name: "Women's Crop Top", price: "$29.99", image: "/Images/women10.jpg" },
    { id: 11, name: "Women's Platform Sandals", price: "$54.99", image: "/Images/women11.jpg" },
    { id: 12, name: "Women's Knit Sweater", price: "$64.99", image: "/Images/women12.jpg" },
    { id: 13, name: "Women's Denim Jacket", price: "$74.99", image: "/Images/women13.jpg" },
    { id: 14, name: "Women's Yoga Leggings", price: "$42.99", image: "/Images/women14.jpg" },
    { id: 15, name: "Women's Elegant Watch", price: "$129.99", image: "/Images/women15.jpg" },
    { id: 16, name: "Women's Wide Brim Hat", price: "$34.99", image: "/Images/women16.jpg" },
    { id: 17, name: "Women's Ruffle Blouse", price: "$37.99", image: "/Images/women17.jpg" },
    { id: 18, name: "Women's Bucket Bag", price: "$69.99", image: "/Images/women18.jpg" }
  ];
  

const Women = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar className="m-0 p-0" />

      <section className="pt-0 mt-0">
        <div
          className="text-center text-white d-flex align-items-center justify-content-end"
          style={{
            backgroundImage: 'url("/Images/womenbanner.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px"
          }}
        >
          <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '10px' }}>
            <h1 className="display-4 fw-bold">Women's Collection</h1>
            <p className="lead fw-bold">Discover our stylish and latest fashion for women</p>
          </div>
        </div>
      </section>

      <section className="flex-grow-1 pt-0 mt-0">
        <Container className="py-5">
          <Row>
            {womenProducts.map(product => (
              <Productcard
                key={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
              />
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Women;
