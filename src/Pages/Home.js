import React, { useEffect, useState } from "react";
import "../Css/home.css";
import LandingPage from "./LandingPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useParams } from "react-router-dom";
function Home() {
  const {lang}=useParams()
  const [homeData,setHomeData]=useState([])
  const [homeServices,setHomeServices]=useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    AOS.init({ duration: 1200,});
  }, []);
  useEffect(() => {
    async function fetchTranslations() {
        try {
            const response = await axios.get(`http://localhost:9090/home/${lang}`);
            const data = response.data;
            // Convert array to an object for easier access
            const translationsObject = data.reduce((acc, item) => {
                acc[item.key_name] = item.value;
                return acc;
            }, {});
            setHomeData(translationsObject);
            // console.log("first",translationsObject)
        } catch (err) {
            console.error('Error fetching translations:', err);
            setError('Failed to fetch translations');
        } finally {
            setLoading(false);
        }
    }
    async function fetchHomeServices() {
      try {
          const response = await axios.get(`http://localhost:9090/homeservices/${lang}`);
          const data = response.data;
  console.log("first",response.data)
          // Convert array to an object where each key_name maps to an array of values
          // const translationsObject = data.reduce((acc, item) => {
          //     if (!acc[item.key_name]) {
          //         acc[item.key_name] = [];
          //     }
          //     acc[item.key_name].push(item.value);
          //     return acc;
          // }, {});
  
          setHomeServices(data);
          // console.log("serv", translationsObject);
      } catch (err) {
          console.error('Error fetching translations:', err);
          setError('Failed to fetch translations');
      } finally {
          setLoading(false);
      }
  }
  
    fetchTranslations();
    fetchHomeServices()
}, [lang]);
const titles = homeServices.filter(item => item.key_name === 'title');
const descriptions = homeServices.filter(item => item.key_name === 'description');
const image = homeServices.filter(item => item.key_name === 'img')

  return (
    <>
      <div className="container-fluid  background_home" >
        <div className="row">
        {/* {
              homeData.map((home)=>( */}
                <div className="col-lg-6 col-md-6 col-sm-12" >
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
              
                <p className="title_home" data-aos="fade-right">  {homeData.subtitle}</p>
                <h1 className="big_title_home" data-aos="fade-right">{homeData.title}</h1>
                <p className="descr_home" data-aos="fade-right">
                {homeData.descr}
                </p>
    
                <button type="button" className="learn_more_btn_home " data-aos="fade-right">
                 {homeData.button}
                </button>
              </div>
              {/* ))
            } */}
         

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
                    src={`http://localhost:9090/${homeData.img}`}
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
        {titles.map((titleItem, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={titleItem.id}>
                    <div className="card card_icon_home">
                        <img
                            src={`http://localhost:9090/${image[index] ? image[index].value : 'No img available'}`}
                            className="img-fluid icon_home"
                            alt="icon"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{titleItem.value}</h5>
                            <p className="card-text descr_serv_home">
                                {descriptions[index] ? descriptions[index].value : 'No description available'}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card_icon_home">
              <img
                src={require("../assets/laptop-screen.png")}
                className="img-fluid icon_home"
                alt="icon"
              />
              <div className="card-body">
                
                <h5 className="card-title">{homeServices.title}</h5>
                <p className="card-text">
                {homeServices.description}
                </p>
              </div>
            </div>{" "}
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
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
          </div> */}
        </div>
        {/* <div className="row">
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
        </div> */}
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
