
import { Link } from 'react-router-dom';



const TopBar = () => {
  return (
    <div className="bg-secondary text-white border-bottom py-2 small">
      <div className="container d-flex justify-content-between">
        <div>
          <span className="me-3" >🌐English</span>
          <span> 💵USD</span>
        </div>
        <div>
          <span className="me-3 text-white text-decoration-none">♡ Wishlist</span>
          <Link to="/login" className="me-3 text-white text-decoration-none">
  👤 Sign In
</Link>

          <Link to="/signup" className="text-white text-decoration-none">🔒 Sign Up</Link>
        </div>
        </div>
      </div>
   
  );
};

export default TopBar;
