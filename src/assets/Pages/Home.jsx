import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';

const Home = () => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  const handleViewDetails = (productName) => {
    alert(`Viewing details for ${productName}`);
  };

  const handleAddToWishlist = (productName) => {
    alert(`Added ${productName} to wishlist!`);
  };

  return (
    <>
      <section className="pt-0 mt-0">
       
          <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="../Images/slide1.jpg" className="d-block w-100 carousel-img" alt="Slide 1" />
                <div className="carousel-caption text-end p-4">
                  <h2 className="text-white fw-bold">New Arrivals</h2>
                  <p>Fresh, bold looks just for you!</p>
                  <Link className="btn btn-light fw-bold" to="/shop">Shop Now</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../Images/slide3.jpg" className="d-block w-100 carousel-img" alt="Slide 2" />
                <div className="carousel-caption text-start text-dark p-4">
                  <h2 className="text-dark fw-bold">Up to 50% Off</h2>
                  <p>Don’t miss the hottest deals of the season</p>
                  <Link className="btn btn-dark fw-bold" to="/shop">Shop Now</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../Images/slide4.jpg" className="d-block w-100 carousel-img" alt="Slide 4" />
                <div className="carousel-caption text-end p-4">
                  <h2 className="text-white fw-bold">Up to 20% Off</h2>
                  <p>Don’t miss the hottest deals of the season</p>
                  <Link className="btn btn-light fw-bold" to="/shop">Shop Now</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../Images/slide2.jpg" className="d-block w-100 carousel-img" alt="Slide 3" />
                <div className="carousel-caption text-start p-4">
                  <h2 className="text-white fw-bold">Up to 40% Off</h2>
                  <p>Don’t miss the hottest deals of the season</p>
                  <Link className="btn btn-light fw-bold" to="/shop">Shop Now</Link>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
       
      </section>

      <section className="py-5 bg-light pt-0 mt-0">
        <Container>
          <h2 className="text-center fw-bold ">Featured Categories</h2>
          <Row>
            <Col md={4}>
              <div className="position-relative overflow-hidden rounded shadow-sm">
                <Card.Img src="../Images/men.jpg" alt="Men's Collection" style={{ height: '350px', objectFit: 'cover' }} />
                <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white text-center p-3">
                  <h5 className="fw-bold mb-2">Men's Collection</h5>
                  <Link to="/men" className="btn btn-light">Shop Now</Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="position-relative overflow-hidden rounded shadow-sm">
                <Card.Img src="../Images/women.jpg" alt="Women's Collection" style={{ height: '350px', objectFit: 'cover' }} />
                <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white text-center p-3">
                  <h5 className="fw-bold mb-2">Women's Collection</h5>
                  <Link to="/women" className="btn btn-light">Shop Now</Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="position-relative overflow-hidden rounded shadow-sm">
                <Card.Img src="../Images/kid.jpg" alt="Kid's Collection" style={{ height: '350px', objectFit: 'cover' }} />
                <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white text-center p-3">
                  <h5 className="fw-bold mb-2">Kid's Collection</h5>
                  <Link to="/kid" className="btn btn-light">Shop Now</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light text-center pt-0 mt-0">
        <div className="container">
          <div className="position-relative">
            <img src="../Images/banner1.jpg" className="d-block w-100" alt="Banner 1" />
            <div className="position-absolute start-50 translate-middle-x pb-3" style={{ bottom: '0' }}>
              <Link className="btn btn-light mt-2 fw-bold" to="/shop">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

  
      <section className="py-5 bg-light pt-0 mt-0">
        <Container>
          <Row>
          
            {[
              { title: "Blue Dress For Woman", price: "$39.00", originalPrice: "$65.00", discount: "-40%", rating: "⭐⭐⭐⭐☆ (10)", img: "https://5.imimg.com/data5/SELLER/Default/2023/4/303569997/GX/LY/JK/58398864/01--500x500.jpg" },
              { title: "Woman Full Sliv Dress", price: "$70.00",discount: "-32%", rating: "⭐⭐☆☆☆ (17)", img: "https://www.shecreatesstories.com/cdn/shop/files/79_35b99710-8fc6-4fe1-99c2-813420770d49.png?crop=region&crop_height=2500&crop_left=62&crop_top=0&crop_width=1675&v=1704858599&width=1800" },
              { title: "Light Blue Shirt", price: "$69.00", originalPrice: "$89.00", discount: "-23%", rating: "⭐⭐⭐⭐☆ (19)", img: "https://www.haggar.com/dw/image/v2/BBND_PRD/on/demandware.static/-/Sites-master-catalog-haggar/default/dw105f595e/images/hi-res/HAG001HCS801_450_04.jpg?sw=447&sh=670&sm=cut" },
              { title: "Blue Casual Check Shirt", price: "$55.00",discount: "-30%", rating: "⭐⭐⭐☆☆ (16)", img: "https://blucheez.fashion/cdn/shop/files/MCS-051-BL-WEB-01.webp?v=1741250408&width=600" },
              { title: "T-Shirt", price: "$42.00", discount: "-30%", rating: "⭐⭐⭐⭐☆ (20)", img: "https://www.nimbleclothing.in/cdn/shop/files/023A1775.jpg?v=1693289627" },
              { title: "Frock for Kids",originalPrice: "$75.00", price: "$45.00",discount: "-28%", rating: "⭐⭐⭐⭐⭐ (10)", img: "https://halemons.com/cdn/shop/files/halemons-baby-toddler-3-6-months-cute-pink-checks-baby-frilled-frock-30499131326516.jpg" },
              { title: "Boys Dress set", price: "$50.00", discount: "-10%", rating: "⭐⭐⭐⭐☆ (15)", img: "https://www.onefridayworld.com/cdn/shop/products/4W3A0826_Small_e8f28f09-46d7-42f1-9a63-11adeeda9de1_300x.jpg?v=1745052924" },
              { title: "Kids Gown",originalPrice: "$95.00", price: "$50.00", discount: "-20%", rating: "⭐⭐⭐⭐☆ (21)", img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20760852/2022/11/15/9f3041ab-3128-4a8b-8ef4-b7abedfbefc21668518462857Dresses1.jpg" }
            ].map((product, index) => (
              <Col md={3} key={index}>
                <Card className="text-center border-0 shadow-sm">
                  <div className="position-relative">
                    {product.discount && <span className="badge bg-success position-absolute top-0 start-0 m-2">{product.discount}</span>}
                    <Card.Img variant="top" src={product.img} />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex gap-2">
                      <button className="btn btn-light border" onClick={() => handleAddToCart(product.title)}><i className="bi bi-cart"></i></button>
                      <button className="btn btn-light border" onClick={() => handleViewDetails(product.title)}><i className="bi bi-eye"></i></button>
                      <button className="btn btn-light border" onClick={() => handleAddToWishlist(product.title)}><i className="bi bi-heart"></i></button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      {product.originalPrice && <><del className="text-muted">{product.originalPrice}</del> </>}
                      <span className="text-danger fw-bold">{product.price}</span>
                    </Card.Text>
                    <div>{product.rating}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light text-center pt-0 mt-0">
  <div className="container">
    <div className="position-relative">
      <img src="../Images/banner2.jpg" className="d-block w-100" alt="Slide 1" />
      <div className="position-absolute start-50 translate-middle-x pb-3" style={{ bottom: '0' }}>
        <Link className="btn btn-light mt-2 fw-bold" to="/shop">Shop Now</Link>
      </div>
    </div>
  </div>
</section>


<section className="py-5 bg-light pt-0 mt-0">
  <Container>
    <Row>
      {[
        { title: "Blue Dress For Woman", price: "$39.00", originalPrice: "$65.00", discount: "-40%", rating: "⭐⭐⭐⭐☆ (10)", img: "https://fordlafemme.com/wp-content/uploads/2023/05/blue-floral-abercrombie-midi-dress-outfit-inspiration-white-sandals.jpg" },
        { title: "Woman Full Sliv Dress", price: "$70.00",discount: "-30%", rating: "⭐⭐☆☆☆ (17)", img: "https://elagia.com/cdn/shop/products/IMG_4374-copy.jpg?v=1671423999" },
        { title: "Light Shirt", price: "$69.00", originalPrice: "$89.00", discount: "-23%", rating: "⭐⭐⭐⭐☆ (19)", img: "https://i.pinimg.com/236x/b9/72/5a/b9725a8cac2bebb1424cc33c183a5ff8.jpg" },
        { title: "Casual Check Shirt", price: "$55.00",discount: "-22%", rating: "⭐⭐⭐☆☆ (16)", img: "https://surhi.in/cdn/shop/files/DSC00337_9282ccbd-2c6a-4a3c-b614-b1153e7f1da4.jpg?v=1720863583" },
        { title: "Polo T-Shirt", price: "$42.00",originalPrice: "$75.00", discount: "-20%", rating: "⭐⭐⭐⭐☆ (20)", img: "https://fathersonsclothing.com/cdn/shop/files/3BCAC67D-3A3B-45BF-82FF-79CA5D359438_600x.jpg?v=1698412213" },
        { title: "Frock for Kids", price: "$45.00",discount: "-10%", rating: "⭐⭐⭐⭐⭐ (10)", img: "https://i.etsystatic.com/5905067/r/il/035b31/4906258852/il_570xN.4906258852_3wm9.jpg" },
        { title: "Boys Dress set", price: "$50.00",discount: "-40%", rating: "⭐⭐⭐⭐☆ (15)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJC2gupirFejkWIG_4w3mLYLN0Zx--eDVOzjJkRda5hBV03vYDgWZsRliIoCxjCFzLOM0&usqp=CAU" },
        { title: "Kids Gown",originalPrice: "$85.00", price: "$50.00",discount: "-20%", rating: "⭐⭐⭐⭐☆ (21)", img: "https://thumbs.dreamstime.com/b/child-playing-ocean-beach-kid-sunset-sea-jumping-waves-vacation-family-kids-little-girl-beautiful-dress-175271703.jpg" }
      ].map((product, index) => (
        <Col md={3} key={index}>
          <Card className="text-center border-0 shadow-sm">
            <div className="position-relative">
              {product.discount && (
                <span className="badge bg-success position-absolute top-0 start-0 m-2">{product.discount}</span>
              )}
              <Card.Img variant="top" className="product-image"    src={product.img} />
              <div className="position-absolute top-50 start-50 translate-middle d-flex gap-2">
                <button className="btn btn-light border" onClick={() => handleAddToCart(product.title)}>
                  <i className="bi bi-cart"></i>
                </button>
                <button className="btn btn-light border" onClick={() => handleViewDetails(product.title)}>
                  <i className="bi bi-eye"></i>
                </button>
                <button className="btn btn-light border" onClick={() => handleAddToWishlist(product.title)}>
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.originalPrice && <><del className="text-muted">{product.originalPrice}</del> </>}
                <span className="text-danger fw-bold">{product.price}</span>
              </Card.Text>
              <div>{product.rating}</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>
      <Footer/>
    </>
  );
};

export default Home;
