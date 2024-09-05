import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Css/about.css';
function Footer() {
  return (
<>






{/* Remove the container if you want to extend the Footer to full width. */}
<div className=" my-0 footer mt-5">
    {/* Footer */}
    <footer
      className="text-center text-lg-start "
    
    >
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Links */}
        <section className="">
          {/*Grid row*/}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
               KASSEL
              </h6>
              <p>
              Rapid and maintainable product development Bring your startup idea to life, or solve a business problem.
              </p>
              <h6 className="text-uppercase mb-4 font-weight-bold">
        Subscribe to our Newsletter
      </h6>
      <form id="emailForm">
        <div className="input-group mb-3">
        <button
            className="btn "
            type="submit"
            id="emailSubmit"
            style={{background:"rgb(60 102 171)" , color:"white"}}
          >
            Submit
          </button>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            aria-label="Email"
            required
            style={{boxShadow:"none"}}
          />
          
        </div>
      </form>
            </div>
            
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Support</h6>
              <p>
                <a className="rgb(203 203 203)">MDBootstrap</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">MDWordPress</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">BrandFlow</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">Bootstrap Angular</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">BrandFlow</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">Bootstrap Angular</a>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
              Company
              </h6>
              <p>
                <a className="rgb(203 203 203)">Your Account</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">Become an Affiliate</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">Shipping Rates</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">Help</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">Shipping Rates</a>
              </p>
              <p>
                <a className="rgb(203 203 203)">Help</a>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Get in touch</h6>
              <p>
              <i class="bi bi-house-door-fill icon"></i> New York, NY 10012, US
              </p>
              <p>
              <i class="bi bi-clock-fill icon"></i> info@gmail.com
              </p>
              <p>
              <i class="bi bi-calendar3-event-fill icon"></i> + 01 234 567 88
              </p>
              <p>
              <i class="bi bi-envelope-fill"></i> + 01 234 567 89
              </p>
              <p>
              <i class="bi bi-calendar3-event-fill"></i> + 01 234 567 88
              </p>
              <p>
              <i class="bi bi-envelope-fill"></i> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/*Grid row*/}
        </section>
        {/* Section: Links */}
        <hr className="my-3" />
        {/* Section: Copyright */}
        <section className="p-3">
          <div className="row d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              {/* Copyright */}
              <div className="p-3">
                © 2020 Copyright:
                <a className="rgb(203 203 203)" href="https://mdbootstrap.com/">
                  MDBootstrap.com
                </a>
              </div>
              {/* Copyright */}
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end ">
              {/* Facebook */}
              <a
                className="btn btn-floating m-1"
                role="button"
                style={{ color:"rgb(60 102 171)", fontSize:"25px" }}
              >
               <i class="bi bi-facebook"></i>
              </a>
              {/* Twitter */}
              <a
                className="btn  btn-floating m-1"
                role="button"
                style={{ color:"rgb(60 102 171)", fontSize:"25px" }}
              >
                <i class="bi bi-linkedin"></i>
              </a>
              {/* Google */}
              <a
                className="btn  btn-floating m-1"
                role="button"
                style={{ color:"rgb(60 102 171)", fontSize:"25px" }}
              >
               <i class="bi bi-google"></i>
              </a>
              {/* Instagram */}
              <a
                className="btn btn-floating m-1"
                role="button"
                style={{ color:"rgb(60 102 171)", fontSize:"25px" }}
              >
               <i class="bi bi-instagram"></i>
              </a>
              <a
                className="btn btn-floating m-1"
                role="button"
                style={{ color:"rgb(60 102 171)", fontSize:"25px" }}
              >
               <i class="bi bi-whatsapp"></i>
              </a>
            </div>
            {/* Grid column */}
          </div>
        </section>
        {/* Section: Copyright */}
      </div>
      {/* Grid container */}
    </footer>
    {/* Footer */}
  </div>
  {/*
   */}


</>
  )
}

export default Footer