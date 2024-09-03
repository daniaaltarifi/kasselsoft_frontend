import React, { useEffect } from "react";
import "../Css/home.css";
import LandingPage from "./LandingPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200,});
  }, []);
  return (
    <>
      <div className="container-fluid  background_home" >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <div className="conatiner_imgandtitle_home"> */}

            <img
              src={require("../assets/home3-shape1.png")}
              alt="shape1"
              className="home3-shape1 img-fluid"
            />
            <img
              src={require("../assets/home3-shape2.png")}
              alt="img"
              className="home3-shape2 img-fluid"
            />
            <img
              src={require("../assets/home3-shape3.png")}
              alt="img"
              className="home3-shape3 img-fluid"
            />
            <p className="title_home" data-aos="fade-right">THE MOST POWERFUL SOLUTION</p>
            <h1 className="big_title_home" data-aos="fade-right">Digital Experience With Kassel</h1>
            <p className="descr_home" data-aos="fade-right">
              Kassel excels in crafting innovative websites and apps, seamlessly
              blending creativity with functionality. Clients trust Kassel for
              top-notch digital solutions, a testament to their industry prowess
              and dedication!
            </p>

            <button type="button" className="learn_more_btn_home " data-aos="fade-right">
              Learn More
            </button>
          </div>

          {/* </div> */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-around">
              <img
                src={require("../assets/home3-round-shape1.png")}
                alt="cross"
                className="circle_img_home img-fluid"
              />
              <img
                src={require("../assets/new-cross.png")}
                alt="cross"
                className="cross_img_home img-fluid"
              />
            </div>

            <img
              src={require("../assets/banner2.png")}
              alt="banner"
              className="main_img_home img-fluid"
            />
            <div className="d-flex justify-content-center">
              <img
                src={require("../assets/wave.png")}
                alt="wave"
                className="wave_img_home img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card_icon_home">
              <img
                src={require("../assets/laptop-screen.png")}
                className="img-fluid icon_home"
                alt="icon"
              />
              <div className="card-body">
                <h5 className="card-title">Websites Design & Development</h5>
                <p className="card-text">
                  Kassel stands as a leading force in web development, offering
                  comprehensive solutions tailored to client needs.
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card_icon_home">
              <img
                src={require("../assets/apple-logo.png")}
                className="img-fluid icon_home"
                alt="icon"
              />
              <div className="card-body">
                <h5 className="card-title">Apps Design & Development</h5>
                <p className="card-text">
                  Kassel is at the forefront of app development, providing
                  tailored solutions that elevate user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card_icon_home">
              <img
                src={require("../assets/digital-marketing.png")}
                className="img-fluid icon_home"
                alt="icon"
              />
              <div className="card-body">
                <h5 className="card-title title_card_home">
                  Digital Marketing
                </h5>
                <p className="card-text">
                  Kassel distinguishes itself in the realm of digital marketing
                  by offering comprehensive strategies that drive business
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card_icon_home">
              <img
                src={require("../assets/laptop-screen.png")}
                className="img-fluid icon_home"
                alt="icon"
              />
              <div className="card-body">
                <h5 className="card-title">Websites Design & Development</h5>
                <p className="card-text">
                  Kassel stands as a leading force in web development, offering
                  comprehensive solutions tailored to client needs.
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card_icon_home">
              <img
                src={require("../assets/apple-logo.png")}
                className="img-fluid icon_home"
                alt="icon"
              />
              <div className="card-body">
                <h5 className="card-title">Apps Design & Development</h5>
                <p className="card-text">
                  Kassel is at the forefront of app development, providing
                  tailored solutions that elevate user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card_icon_home">
              <img
                src={require("../assets/digital-marketing.png")}
                className="img-fluid icon_home"
                alt="icon"
              />
              <div className="card-body">
                <h5 className="card-title title_card_home">
                  Digital Marketing
                </h5>
                <p className="card-text">
                  Kassel distinguishes itself in the realm of digital marketing
                  by offering comprehensive strategies that drive business
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="margin_section background_whychooseus_home"  data-aos="fade-up-right">
        <div className="container ">
          <p className="WHY_CHOOSE_US_home">WHY CHOOSE US</p>
          <h3 className="we_help_you_home">We help you to make work easy</h3>
          <p className="why_choose_descr">
            At Kassel Company, we understand what your business means to you.
            Our commitment is to simplify your work, delivering innovative
            solutions that enhance efficiency and allow you to concentrate
            effortlessly on your core objectives.
          </p>
          <button type="button" className="view_more_btn_home ">
            View More
          </button>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card card_services_home">
                <div className="background_icon_home">
                  <img
                    src={require("../assets/user1.png")}
                    className="img-fluid help_you_img_home"
                    alt="icon"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title services_home">App Developments</h5>
                  <p className="card-text">
                    complete solution for crafting innovative and tailored
                    applications
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card card_services_home">
                <div className="background_icon_home">
                  <img
                    src={require("../assets/user1.png")}
                    className="img-fluid help_you_img_home"
                    alt="icon"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title services_home">App Developments</h5>
                  <p className="card-text">
                    complete solution for crafting innovative and tailored
                    applications
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card card_services_home">
                <div className="background_icon_home">
                  <img
                    src={require("../assets/user1.png")}
                    className="img-fluid help_you_img_home"
                    alt="icon"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title services_home">App Developments</h5>
                  <p className="card-text">
                    complete solution for crafting innovative and tailored
                    applications
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card card_services_home">
                <div className="background_icon_home">
                  <img
                    src={require("../assets/user1.png")}
                    className="img-fluid help_you_img_home"
                    alt="icon"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title services_home">App Developments</h5>
                  <p className="card-text">
                    complete solution for crafting innovative and tailored
                    applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LandingPage/>
    </>
  );
}

export default Home;
