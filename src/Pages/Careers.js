import React from "react";
import Mainbackground from "../components/Mainbackground";
import "../Css/careers.css";
import { Link } from "react-router-dom";
function Careers() {
  const path = "careers";

  return (
    <>
      <Mainbackground path={path} />
      <div className="container">
        <p className="WHY_CHOOSE_US_home" data-aos="fade-up-right">
          Current Positions Available for 2024
        </p>
        <h3 className="we_help_you_home" data-aos="fade-up-right">
          Work at the Heart of Kassel{" "}
        </h3>
        <p className="why_choose_descr" data-aos="fade-up-right">
          Every day, Kassel collaborate to pursue our common goal of utilizing
          technology and human ingenuity to achieve great things.{" "}
        </p>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="card p-4">
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex flex-wrap">
                  <div className="cont_bag_careers">
                    <i
                      class="fa-solid fa-bag-shopping fa-2xl"
                      style={{ color: "#000000" }}
                    ></i>
                  </div>
                  <p className="position_name_careers">graphic design</p>
                </div>
                <div>
                  <p>7 positon open</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <button
                  type="button"
                  className="btn btn_blogs btn_position_careers"
                >
                  graphic design
                </button>

                <div className="card-body">
                  <span className="card-text location_careers">Location: </span>
                  <span>remotely</span>
                  <br />
                  <span className="card-text location_careers">
                    Experience:{" "}
                  </span>
                  <span>+5 years</span>
                  <br />
                  <br />
                  <Link to="careersdetails" className="link_job_desc_careers">
                    Job Description
                  </Link>
                </div>
                <button
                  type="button"
                  className="learn_more_btn_home "
                  data-aos="fade-right"
                >
                  Apply{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="card p-4">
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex flex-wrap">
                  <div className="cont_bag_careers">
                    <i
                      class="fa-solid fa-bag-shopping fa-2xl"
                      style={{ color: "#000000" }}
                    ></i>
                  </div>
                  <p className="position_name_careers">frontend developer</p>
                </div>
                <div>
                  <p>7 positon open</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <button
                  type="button"
                  className="btn btn_blogs btn_position_careers"
                >
                  graphic design
                </button>

                <div className="card-body">
                  <span className="card-text location_careers">Location: </span>
                  <span>remotely, hybrid</span>
                  <br />
                  <span className="card-text location_careers">
                    Experience:{" "}
                  </span>
                  <span>+5 years</span>
                  <br />
                  <br />
                  <Link to="careersdetails" className="link_job_desc_careers">
                    Job Description
                  </Link>
                </div>
                <button
                  type="button"
                  className="learn_more_btn_home "
                  data-aos="fade-right"
                >
                  Apply{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
