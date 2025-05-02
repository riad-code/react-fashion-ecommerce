


import PropTypes from 'prop-types';

const Productcard = ({ image, title, price, onQuickView }) => {
  return (
    <div className="col-md-2  mb-6">
      <div className="card h-100 border-0 shadow-sm">
      <img src={image} alt={title} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
        <div className="card-body text-center">
          <h6 className="card-title">{title}</h6>
          <p className="text-muted mb-1">${price}</p>
          <div className="d-flex justify-content-center ">
            <button className="btn btn-outline-dark btn-sm">Add to Cart</button>
            {onQuickView && (
              <button className="btn btn-sm btn-secondary" onClick={onQuickView}>Quick View</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


Productcard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onQuickView: PropTypes.func,
};

export default Productcard;

