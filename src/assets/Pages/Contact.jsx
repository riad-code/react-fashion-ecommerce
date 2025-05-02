import React, { useState } from "react";
import Footer from "../Components/Footer";

const Contact = () => {

  return (
    <>
     

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-body">
                <h4>Contact With Us</h4>
                <hr />
                <p>
                  <b>Office Address :</b> Hoese No - 420, Road No - 320, Vuter
                  Goli, Sonir Akhra, Dholaykhal, Dhaka.
                </p>
                <p>
                  <b>Phone Number :</b> +880 1878, 112233, +880 1878, 112233,
                  +880 1878, 112233
                </p>
                <p>
                  <b>Email Address :</b> info@domainname.com,
                  sales@domainname.com
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body">
                <h4>Send Us Message</h4>
                <hr />
                <form action="#" method="POST">
                  <div className="row mb-3">
                    <label className="col-md-3">Full Name</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" name="name" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3">Email Address</label>
                    <div className="col-md-9">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3">Mobile Number</label>
                    <div className="col-md-9">
                      <input
                        type="number"
                        className="form-control"
                        name="Mobile"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3">Your Message</label>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3"></label>
                    <div className="col-md-9">
                      <input
                        type="submit"
                        className="btn btn-success px-5 rounded-0"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0">
              <div className="card card-body p-0 rounded-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.92875821475!2d90.378288!3d23.8766336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1746204693255!5m2!1sen!2sbd" 
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Contact;
