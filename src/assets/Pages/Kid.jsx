import React from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';
import Productcard from '../Components/Productcard';
import Footer from '../Components/Footer';

const kidsProducts = [
  { id: 1, name: "Kids' T-Shirt", price: "$19.99", image: "/Images/kids1.jpg" },
  { id: 2, name: "Kids' Jeans", price: "$29.99", image: "/Images/kids2.jpg" },
  { id: 3, name: "Kids' Hoodie", price: "$34.99", image: "/Images/kids3.jpg" },
  { id: 4, name: "Kids' Sneakers", price: "$39.99", image: "/Images/kids4.jpg" },
  { id: 5, name: "Kids' Jacket", price: "$49.99", image: "/Images/kids5.jpg" },
  { id: 6, name: "Kids' Cap", price: "$14.99", image: "/Images/kids6.jpg" },
  { id: 7, name: "Kids' Skirt", price: "$24.99", image: "/Images/kids7.jpg" },
  { id: 8, name: "Kids' Sandals", price: "$27.99", image: "/Images/kids8.jpg" },
  { id: 9, name: "Kids' Pajama Set", price: "$22.99", image: "/Images/kids9.jpg" },
  { id: 10, name: "Kids' Backpack", price: "$34.99", image: "/Images/kids10.jpg" },
  { id: 11, name: "Kids' Graphic Tee", price: "$18.99", image: "/Images/kids11.jpg" },
  { id: 12, name: "Kids' Raincoat", price: "$44.99", image: "/Images/kids12.jpg" },
  { id: 13, name: "Kids' Formal Shirt", price: "$25.99", image: "/Images/kids13.jpg" },
  { id: 14, name: "Kids' Shorts", price: "$21.99", image: "/Images/kids14.jpg" },
  { id: 15, name: "Kids' Party Dress", price: "$54.99", image: "/Images/kids15.jpg" },
  { id: 16, name: "Kids' Leggings", price: "$20.99", image: "/Images/kids16.jpg" },
  { id: 17, name: "Kids' Wool Sweater", price: "$29.99", image: "/Images/kids17.jpg" },
  { id: 18, name: "Kids' Beanie", price: "$12.99", image: "/Images/kids18.jpg" }
];

const Kid = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar className="m-0 p-0" />

      <section className="pt-0 mt-0">
        <div
          className="text-center text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: 'url("/Images/kidsbanner.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px"
          }}
        >
          
        </div>
      </section>

      <section className="flex-grow-1 pt-0 mt-0">
      <h1 className="display-4 fw-bold text-center">Kid's Collection</h1>
      <p className="lead fw-bold text-center">Discover our stylish and latest fashion for men</p>
        <Container className="py-5">
          <Row>
            {kidsProducts.map(product => (
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

export default Kid;
