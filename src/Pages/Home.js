import React, { useEffect, useState } from "react";
import "../Css/home.css";
import LandingPage from "./LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useParams } from "react-router-dom";
function Home() {
  const API_URL = process.env.REACT_APP_API_URL;
  const { lang } = useParams();
  const [homeData, setHomeData] = useState([]);
  const [homeServices, setHomeServices] = useState([]);
  const [whychooseusHome, setWhychooseusHome] = useState([]);
  const [cardHome, setCardHome] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  // useEffect(() => {
  //   async function fetchTranslations() {
  //     try {
  //       const response = await axios.get(`http://localhost:9090/home/${lang}`);
  //       const data = response.data;
  //       // Convert array to an object for easier access
  //       const translationsObject = data.reduce((acc, item) => {
  //         acc[item.key_name] = item.value;
  //         return acc;
  //       }, {});
  //       setHomeData(translationsObject);
  //     } catch (err) {
  //       console.error("Error fetching translations:", err);
  //       setError("Failed to fetch translations");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   async function fetchHomeServices() {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:9090/homeservices/${lang}`
  //       );
  //       const data = response.data;
  //       setHomeServices(data);
  //     } catch (err) {
  //       console.error("Error fetching translations:", err);
  //       setError("Failed to fetch translations");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   async function fetchWhychooseus() {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:9090/homewhychooseus/${lang}`
  //       );
  //       const data = response.data;
  //       setWhychooseusHome(data);
  //     } catch (err) {
  //       console.error("Error fetching translations:", err);
  //       setError("Failed to fetch translations");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   async function fetchCardHome() {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:9090/cardhome/${lang}`
  //       );
  //       const data = response.data;
  //       setCardHome(data);
  //     } catch (err) {
  //       console.error("Error fetching translations:", err);
  //       setError("Failed to fetch translations");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchTranslations();
  //   fetchHomeServices();
  //   fetchWhychooseus();
  //   fetchCardHome()
  // }, [lang]);
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const [translationsRes, homeServicesRes, whychooseusRes, cardHomeRes] = await Promise.all([
          axios.get(`${API_URL}/home/${lang}`),
          axios.get(`${API_URL}/homeservices/${lang}`),
          axios.get(`${API_URL}/homewhychooseus/${lang}`),
          axios.get(`${API_URL}/cardhome/${lang}`)
        ]);

        const translationsObject = translationsRes.data.reduce((acc, item) => {
          acc[item.key_name] = item.value;
          return acc;
        }, {});

        setHomeData(translationsObject);
        setHomeServices(homeServicesRes.data);
        setWhychooseusHome(whychooseusRes.data);
        setCardHome(cardHomeRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [lang]);
  const titles = homeServices.filter((item) => item.key_name === "title");
  const descriptions = homeServices.filter(
    (item) => item.key_name === "description"
  );
  const image = homeServices.filter((item) => item.key_name === "img");

  return (
    <>
      <div className="container-fluid  background_home">
        <div className="row">
          {/* {
              homeData.map((home)=>( */}
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

            <p className="title_home" data-aos="fade-right">
              {" "}
              {homeData.subtitle}
            </p>
            <h1 className="big_title_home" data-aos="fade-right">
              {homeData.title}
            </h1>
            <p className="descr_home" data-aos="fade-right">
              {homeData.descr}
            </p>

            <button
              type="button"
              className="learn_more_btn_home "
              data-aos="fade-right"
            >
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
                  src={`http://localhost:9090/${
                    image[index] ? image[index].value : "No img available"
                  }`}
                  className="img-fluid icon_home"
                  alt="icon"
                />
                <div className="card-body">
                  <h5 className="card-title">{titleItem.value}</h5>
                  <p className="card-text descr_serv_home">
                    {descriptions[index]
                      ? descriptions[index].value
                      : "No description available"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section
        className="margin_section background_whychooseus_home"
        data-aos="fade-up-right"
      >
        {whychooseusHome.map((why) => (
          <div className="container">
            <p className="WHY_CHOOSE_US_home">{why.subtitle}</p>
            <h3 className="we_help_you_home">{why.title}</h3>
            <p className="why_choose_descr">{why.description}</p>
            <button type="button" className="view_more_btn_home ">
              {why.button}{" "}
            </button>
          </div>
        ))}
        <div className="container ">
          <div className="row mt-5">
            {cardHome.map((cardhome)=>(

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card card_services_home">
                <div className="background_icon_home">
                  <img
                    src={`http://localhost:9090/${cardhome.icon}`}
                    className="img-fluid help_you_img_home"
                    alt="icon"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title services_home">{cardhome.title}</h5>
                  <p className="card-text">
                 {cardhome.description}
                  </p>
                </div>
              </div>
            </div>
            ))}
           
          </div>
        </div>
      </section>
      <LandingPage lang={lang} />
    </>
  );
}

export default Home;
