import Footer from "../Components/Footer";


const LoginRegister = () => {
  return (
    <>
    <div className="container my-5">
      <h2 className="fw-bold mb-4">My Account</h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">My account</li>
        </ol>
      </nav>

      <div className="row mt-4">
       
        <div className="col-md-6">
          <h4 className="mb-3">Login</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Username or email address *</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password *</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-danger">Log In</button>
            <div className="mt-2">
              <a href="#">Lost your password?</a>
            </div>
          </form>
        </div>

    
        <div className="col-md-6">
          <h4 className="mb-3">Register</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Username *</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address *</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password *</label>
              <input type="password" className="form-control" />
            </div>
            <p className="small text-muted">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy</a>.
            </p>
            <button type="submit" className="btn btn-danger">Register</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginRegister;
