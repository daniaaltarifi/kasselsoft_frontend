import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/landingpage.css";
import CountUp from "react-countup";
import axios from "axios";
import { useParams } from "react-router-dom";

function LandingPage({ lang }) {
  const API_URL = process.env.REACT_APP_API_URL;
  // const { lang } = useParams();
  const [titlesHome, setTitlesHome] = useState([]);
  const [imgSliderHome, setImgSliderHome] = useState([]);
  const settings = {
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  useEffect(() => {
    async function fetchTitlesHome() {
      try {
              const response = await axios.get(
                `http://localhost:9090/titleshome/${lang}`
              );
              const data = response.data;
              setTitlesHome(data);
            } catch (err) {
              console.error("Error fetching translations:", err);
            }
    }
    async function fetchImgSlider() {
      try {
              const response = await axios.get(
                `http://localhost:9090/imgsliderhome/`
              );
              const data = response.data;
              setImgSliderHome(data);
            } catch (err) {
              console.error("Error fetching translations:", err);
            }
    }
    fetchTitlesHome();
    fetchImgSlider()
  }, []);
  const title1 = titlesHome[0] || {};
  const title2 = titlesHome[1] || {};
  const title3 = titlesHome[2] || {};

  
  return (
    <>
      <section className="margin_section" data-aos="fade-up">
        <div className="container text-center">
          <p className="WHY_CHOOSE_US_home">{title1.subtitle || "Loading..."}</p>
          <h3 className="we_help_you_home">{title1.title || "Loading..."}</h3>
          <p className="descr_home">{title1.description || "Loading..."}</p>

          <div className="row mt-5">
            <Slider
              {...settings}
              style={{ overflow: "hidden" }}
              className="slide"
            >
              {imgSliderHome.map((imgslide)=>(

              <div className="col-lg-4 col-md-6 col-sm-12">
                <img
              src={`http://localhost:9090/${imgslide.img}`}
              alt="pro5"
                  className="slider_img_home"
                />
              </div>
              ))}
              {/* <div className="col-lg-4 col-md-6 col-sm-12">
                <img
                  src={require("../assets/pro6.jpg")}
                  alt="pro5"
                  className="slider_img_home"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <img
                  src={require("../assets/pro5.jpg")}
                  alt="pro5"
                  className="slider_img_home"
                />
              </div> */}
            </Slider>
          </div>
        </div>
      </section>
      <section className="margin_section" data-aos="fade-up">
        <div className="container text-center">
          <p className="WHY_CHOOSE_US_home">
{title2.subtitle || 'loading..'}          </p>
          <h3 className="we_help_you_home">{title2.title || 'loading..'}        
          </h3>
          <p className="descr_home">
          {title2.description || 'loading..'}          </p>
        
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12  ">
              <div className="box_home_counter">
                <img
                  src={require("../assets/rocket.png")}
                  alt="rocket"
                  className="img_carrers_home"
                />
                <p className="number_careers_home">
                  <CountUp end={4} />+
                </p>
                <p className="title_careers_home">
                  Leadership Years Experience
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12  ">
              <div className="box_home_counter">
                <img
                  src={require("../assets/rocket.png")}
                  alt="rocket"
                  className="img_carrers_home"
                />
                <p className="number_careers_home">
                  <CountUp end={30} />+
                </p>
                <p className="title_careers_home">Talented Squad</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12  ">
              <div className="box_home_counter">
                <img
                  src={require("../assets/rocket.png")}
                  alt="rocket"
                  className="img_carrers_home"
                />
                <p className="number_careers_home">
                  <CountUp end={20} />+
                </p>
                <p className="title_careers_home">Apps Developed</p>
              </div>
            </div>{" "}
          </div>
          <div className="row mt-3">
            <div className="col-lg-4 col-md-6 col-sm-12  ">
              <div className="box_home_counter">
                <img
                  src={require("../assets/rocket.png")}
                  alt="rocket"
                  className="img_carrers_home"
                />
                <p className="number_careers_home">
                  <CountUp end={4} />+
                </p>
                <p className="title_careers_home">
                  Leadership Years Experience
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12  ">
              <div className="box_home_counter">
                <img
                  src={require("../assets/rocket.png")}
                  alt="rocket"
                  className="img_carrers_home"
                />
                <p className="number_careers_home">
                  <CountUp end={4} />+
                </p>
                <p className="title_careers_home">Talented Squad</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12  ">
              <div className="box_home_counter">
                <img
                  src={require("../assets/rocket.png")}
                  alt="rocket"
                  className="img_carrers_home"
                />
                <p className="number_careers_home">
                  <CountUp end={4} />+
                </p>
                <p className="title_careers_home">Apps Developed</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="margin_section" data-aos="fade-up">
        <div className="container text-center">
          <p className="WHY_CHOOSE_US_home">
          {title3.subtitle || 'loading..'}       
          </p>
          <h3 className="we_help_you_home">
          {title3.title || 'loading..'}       
          </h3>
          <p className="descr_home">
          {title3.description || 'loading..'}       

          </p>
          <div className="row mt-5">
            <Slider {...settings} style={{ overflow: "hidden" }}>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="card card_slider_exp">
                  <img
                    src={require("../assets/service3.png")}
                    className="card-img-top img-fluid img_slider_experience"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title title_slider_exp">
                      Start your project
                    </h5>
                    <p className="card-text text_slider_exp">
                      Build a solution that fulfills your dream. With an
                      experienced and talented team, you can build precisely
                      what you need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card card_slider_exp">
                  <img
                    src={require("../assets/service4.png")}
                    className="card-img-top img-fluid img_slider_experience"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title title_slider_exp">
                      Communication
                    </h5>
                    <p className="card-text text_slider_exp">
                      Whether you prefer reaching out through email or giving us
                      a call, we're always here for you. Your success is our
                      priority, and communication is key.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card card_slider_exp">
                  <img
                    src={require("../assets/service1.png")}
                    className="card-img-top img-fluid img_slider_experience"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title title_slider_exp">
                      100% satisfaction guaranteed{" "}
                    </h5>
                    <p className="card-text text_slider_exp">
                      Your satisfaction is our very first priority. If you have
                      any concern about your game, we are here to solve them in
                      every possible manner with flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
