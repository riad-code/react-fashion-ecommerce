import Footer2 from "../Components/Footer2";

const About = () => (
  <>
    <div className="bg-info text-white py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">About Fashionista</h1>
        <p className="lead mt-3">
          Your destination for curated fashion essentials — bold, elegant, timeless.
        </p>
      </div>
    </div>

    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://cdn.rt.emap.com/wp-content/uploads/sites/2/2014/12/09172719/13064458925_06ea97348d_k-1-1024x683.jpg"
            alt="Fashion showcase"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p className="text-muted">
            Fashionista is your one-stop destination for stylish fashion essentials.
            We bring you the trendiest outfits, handpicked just for you. From casual chic
            to statement pieces, we curate collections that elevate your everyday look.
          </p>
          <p className="text-muted">
            Our mission is simple: to make you feel confident, classy, and chic — every single day .
            Whether you're dressing up for an event or styling your workwear, we’ve got you covered.
          </p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body">
            <img
            src="https://www.coloradoan.com/gcdn/authoring/authoring-images/2024/02/02/PFTC/72454539007-stylecurated.JPG"
            alt="Fashion showcase"
            className="img-fluid rounded shadow product-image"
          />
              <h5 className="card-title fw-bold">Curated Styles</h5>
              <p className="card-text text-muted">
                Every item is thoughtfully selected to align with the latest trends and timeless aesthetics.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body">
            <img
            src="https://insideretail.asia/wp-content/uploads/2020/09/Bash-new-store-Harbour-City-Kowloon-1.jpg"
            alt="Fashion showcase"
            className="img-fluid rounded shadow product-image"
          />
              <h5 className="card-title fw-bold">Affordable Luxury</h5>
              <p className="card-text text-muted">
                We believe fashion should be accessible without compromising on quality or elegance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body">
            <img
            src="https://www.eschoolnews.com/files/2017/08/globalinspiration.jpg"
            alt="Fashion showcase"
            className="img-fluid rounded shadow product-image"
          />
              <h5 className="card-title fw-bold">Global Inspiration</h5>
              <p className="card-text text-muted">
                Our collections draw inspiration from fashion capitals across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer2 />
  </>
);

export default About;
