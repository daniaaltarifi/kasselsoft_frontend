import React from 'react'
import '../Css/about.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Mainbackground from '../components/Mainbackground';
function Abuot() {
  const path= "about"
  return (
 <>


<Mainbackground path={path}/>


  {/* About Start */}
  <section className="about m-5" id="about">
  <div className="container ">
    <div className="main-txt">
    <h3 className="">Learn more about us
    </h3>
    </div >
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-6 py-3 py-md-0">
        <div className="card2 ">
        <h2>Information technology Company Since 2023</h2>
        <p>
        Kassel, a dynamic IT company, excels in delivering innovative solutions. With expertise spanning web and app development, digital marketing, and data analysis, Kassel empowers businesses to thrive in the ever-evolving technology landscape. Their commitment to precision, creativity, and client satisfaction positions Kassel as a trusted partner for those seeking cutting-edge IT solutions.
        </p>
        <p>
      <span className="icon-check"><i class="bi bi-check"></i></span>  Kassel, a dynamic IT company, excels in delivering innovative solutions. With expertise spanning web and app development, digital marketing, and data analysis, Kassel empowers 
        </p>
        <p>
        <span className="icon-check"><i class="bi bi-check"></i></span> Kassel, a dynamic IT company, excels in delivering
        </p>
        <p>
        <span className="icon-check"><i class="bi bi-check"></i></span>Kassel, a dynamic IT company, excels in delivering innovative solutions. With expertise spanning web and app development, digital marketing, and data analysis, 
        </p>
        <button id="about-btn">View More</button>
        </div>
      </div>
      <div className="col-md-6 py-3 py-md-0">
        <div className="card images-container">
          <img
            src={require("../assets/about-us-img2.webp")}
            alt="img1"
            className="img1"
          />
          <img
            src={require("../assets/start2.jpg")}
            alt="img2"
            className="img2"
          />
          <img
            src={require("../assets/about-us-img1.webp")}
            alt="img3"
            className="img3"
          />
          <img
            src={require("../assets/about-us-img2.webp")}
            alt="img4"
            className="img4"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  {/* About End */}
  <section className="services" id="service">
    <div className="container">
      <div className="main-txt ">

      <h3>
        Services Introduced

        </h3>
      <h1>
      Industries We Serve

        </h1>
        
        <p className="prag mt-4 ">Successfully delivered digital products</p>
      </div>
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-basket2"></i>
            <div className="card-body">
              <h3> Grocery</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            {/* <i className="graduation-cap" /> */}
            <i class="bi bi-heart-pulse"></i>
            <div className="card-body">
              <h3> Healthcare</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-calendar2-event"></i>
            <div className="card-body">
              <h3> Event</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-airplane-engines"></i>
            <div className="card-body">
              <h3>Tour & Travels</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-building-fill"></i>
            <div className="card-body">
              <h3>Real estate</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-bus-front-fill"></i>
            <div className="card-body">
              <h3> Transport</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-cart4"></i>
            <div className="card-body">
              <h3>eCommerce</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-cash"></i>
            <div className="card-body">
              <h3>Finance</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-pen"></i>
            <div className="card-body">
              <h3>Education</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-egg-fried"></i>
            <div className="card-body">
              <h3>Restaurant</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
          <i class="bi bi-controller"></i>
            <div className="card-body">
              <h3>Game</h3>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  {/* Section Services End */}
 
 </>
  )
}

export default Abuot