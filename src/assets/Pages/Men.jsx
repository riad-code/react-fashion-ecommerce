import React from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';
import Productcard from '../Components/Productcard';
import Footer from '../Components/Footer';

const menProducts = [
  { id: 1, name: "Men's Formal Shirt", price: "$34.99", image: "/Images/men1.jpg" },
  { id: 2, name: "Men's Slim Baggy Jeans", price: "$44.99", image: "/Images/men2.jpg" },
  { id: 3, name: "Men's Leather Jacket", price: "$89.99", image: "/Images/men3.jpg" },
  { id: 4, name: "Men's Casual Shoes", price: "$59.99", image: "/Images/men4.jpg" },
  { id: 5, name: "Men's Hoodie", price: "$49.99", image: "/Images/men5.jpg" },
  { id: 6, name: "Men's Polo T-Shirt", price: "$29.99", image: "/Images/men6.jpg" },
  { id: 7, name: "Men's Sneakers", price: "$69.99", image: "/Images/men7.jpg" },
  { id: 8, name: "Men's Blazer", price: "$99.99", image: "/Images/men8.jpg" },
  { id: 9, name: "Men's Bomber Jacket", price: "$79.99", image: "/Images/men9.jpg" },
  { id: 10, name: "Men's Chinos", price: "$39.99", image: "/Images/men10.jpg" },
  { id: 11, name: "Men's Turtleneck Sweater", price: "$54.99", image: "/Images/men11.jpg" },
  { id: 12, name: "Men's Running Shoes", price: "$64.99", image: "/Images/men12.jpg" },
  { id: 13, name: "Men's Trench Coat", price: "$109.99", image: "/Images/men13.jpg" },
  { id: 14, name: "Men's Graphic T-Shirt", price: "$24.99", image: "/Images/men14.jpg" },
  { id: 15, name: "Men's Denim Jacket", price: "$74.99", image: "/Images/men15.jpg" },
  { id: 16, name: "Men's Cargo Pants", price: "$42.99", image: "/Images/men16.jpg" },
  { id: 17, name: "Men's Suede Loafers", price: "$69.99", image: "/Images/men17.jpg" },
  { id: 18, name: "Men's Classic Watch", price: "$129.99", image: "/Images/men18.jpg" }
];


const Men = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar className="m-0 p-0" />

      <section className="pt-0 mt-0">
        <div
          className="text-center text-white d-flex align-items-center justify-content-end"
          style={{
            backgroundImage: 'url("/Images/manbanner.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px"
          }}
        >
         <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '10px' }}>
         <h1 className="display-4 fw-bold text-center">Men's Collection</h1>
         <p className="lead fw-bold text-center">Discover our stylish and latest fashion for men</p>
          </div>
        </div>
      </section>
  
      <section className="flex-grow-1 pt-0 mt-0 ">
     
        <Container className="py-5">
          <Row>
            {menProducts.map(product => (
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

      <Footer/>
    </div>
  );
};

export default Men;
