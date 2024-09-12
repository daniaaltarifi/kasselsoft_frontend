import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Css/footer.css";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
function Footer() {
  const API_URL = process.env.REACT_APP_API_URL;
  const location = useLocation();
  const lang = location.pathname.split("/")[1] || "en";
  const [staticFooter, setStaticFooter] = useState([]);
  const [contactFooter, setcontactFooter] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [staticFooterRes, contactFooterRes] = await Promise.all([
          axios.get(`${API_URL}/footer/${lang}`),
          axios.get(`${API_URL}/contactfooter/${lang}`),
          // axios.get(`${API_URL}/homewhychooseus/${lang}`),
          // axios.get(`${API_URL}/cardhome/${lang}`),
        ]);

        setStaticFooter(staticFooterRes.data);
        setcontactFooter(contactFooterRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);

      }
    };

    fetchAllData();
  }, [lang]);
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className=" my-0 footer mt-5">
        {/* Footer */}
        <footer >
          {/* Grid container */}
          <div className="container p-4 pb-0">
            {/* Section: Links */}
            <section className="">
              {/*Grid row*/}
              <div className="row">
                {/* Grid column */}
                {staticFooter.map((mainfooter) => (
                  <div
                    className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3"
                    key={mainfooter.id}
                  >
                    <h1
                      className="text-uppercase mb-4 font-weight-bold"
                      style={{ fontSize: "35px" }}
                    >
                      {mainfooter.logo}
                    </h1>
                    <p>{mainfooter.description}</p>

                    <form id="emailForm">
                      <div className="input-group mb-3">
                        <button
                          className="btn "
                          type="submit"
                          id="emailSubmit"
                          style={{
                            background: "rgb(60 102 171)",
                            color: "white",
                          }}
                        >
                          Submit
                        </button>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          aria-label="Email"
                          required
                          style={{ boxShadow: "none" }}
                        />
                      </div>
                    </form>
                  </div>
                ))}
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                {staticFooter.map((mainfooter) => (
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"key={mainfooter.id}>
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      {mainfooter.support}
                    </h6>
                    <Link to={`${lang}/${mainfooter.terms_link}`}>
                      <p>
                        <a className="rgb(203 203 203)">{mainfooter.terms}</a>
                      </p>
                    </Link>
                    <Link to={`${lang}${mainfooter.privacy_link}`}>
                      <p>
                        <a className="rgb(203 203 203)">{mainfooter.privacy}</a>
                      </p>
                    </Link>
                    <Link to={`${lang}${mainfooter.contact_link}`}>
                      <p>
                        <a className="rgb(203 203 203)">{mainfooter.contact}</a>
                      </p>
                    </Link>
                  </div>
                ))}

                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                {staticFooter.map((mainfooter) => (
                  <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3" key={mainfooter.id}>
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      {mainfooter.company}
                    </h6>
                    <Link to={`${lang}${mainfooter.home_link}`}>
                      <p>
                        <a className="rgb(203 203 203)">{mainfooter.home}</a>
                      </p>
                    </Link>
                    <Link to={`${lang}${mainfooter.services_link}`}>
                      <p>
                        <a className="rgb(203 203 203)">
                          {mainfooter.services}
                        </a>
                      </p>
                    </Link>
                    <Link to={`${lang}${mainfooter.about_link}`}>
                      <p>
                        <a className="rgb(203 203 203)">{mainfooter.about}</a>
                      </p>
                    </Link>
                    <Link to={`${lang}${mainfooter.career_link}`}>
                      <p>
                        <a className="rgb(203 203 203)">{mainfooter.career}</a>
                      </p>
                    </Link>
                  </div>
                ))}

                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}

                <div
                  className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3"
                  key={contactFooter.id}
                >
                  {contactFooter.map((contact) => (
                    <div key={contact.id}>
                      <h6 className="text-uppercase mb-4 font-weight-bold">
                        {contact.title}
                      </h6>
                      <p>
                        <Link
                          to="https://kassel-company.vercel.app/en"
                          target="blank"
                        >
                          {contact.subtitle}
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Grid column */}
              </div>
              {/*Grid row*/}
            </section>
            {/* Section: Links */}
            <hr className="my-3" />
            {/* Section: Copyright */}
            <section className="p-3">
              <div className="row d-flex ">
                {/* Grid column */}

                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-12 col-lg-12 ml-lg-0 text-center  ">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/people/kasselsoft/61555183182719/?mibextid=PlNXYD"
                    className="btn btn-floating m-1"
                    target="blank"
                    role="button"
                    style={{ color: "rgb(60 102 171)", fontSize: "25px" }}
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://www.linkedin.com/company/kasselsoft/"
                    className="btn btn-floating m-1"
                    target="blank"
                    style={{ color: "rgb(60 102 171)", fontSize: "25px" }}
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  {/* Google */}
                  {/* <a
                    href="https://www.facebook.com/people/kasselsoft/61555183182719/?mibextid=PlNXYD"
                    className="btn btn-floating m-1"
                    target="blank"
                    style={{ color: "rgb(60 102 171)", fontSize: "25px" }}
                  >
                    <i className="bi bi-google"></i>
                  </a> */}
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/_kassel_/?igsh=MWRjcHk5MGJtYWVmcw%3D%3D"
                    className="btn btn-floating m-1"
                    target="blank"
                    style={{ color: "rgb(60 102 171)", fontSize: "25px" }}
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2F74Q6F22FDGNYN1&e=AT1WUZrPRUTSfX-I4FkVPpz8WjFo_-7OTsd_9xELwzOc6aD_sVn5FW5r58PAEhW24zoXvNtrI9adFb-ArE0j1L08t30mHgha"
                    className="btn btn-floating m-1"
                    target="blank"
                    style={{ color: "rgb(60 102 171)", fontSize: "25px" }}
                  >
                    <i className="bi bi-whatsapp"></i>
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
  );
}

export default Footer;
