import React from 'react'
import '../Css/about.css'
function Abuot() {
  return (
 <>
 
  {/* Section Services Start */}
  <section className="services" id="services">
    <div className="container">
      <div className="main-txt">
        <h1>
          <span>S</span>ervices
        </h1>
      </div>
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-hotel" />
            <div className="card-body">
              <h3>Affordable Hotel</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-utensils" />
            <div className="card-body">
              <h3>Food &amp; Drinks</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-bullhorn" />
            <div className="card-body">
              <h3>Safty Guide</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-bullhorn" />
            <div className="card-body">
              <h3>Safty Guide</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-globe-asia" />
            <div className="card-body">
              <h3>Around The World</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-plane" />
            <div className="card-body">
              <h3>Fastest Travel</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-hiking" />
            <div className="card-body">
              <h3>Adventures</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-hiking" />
            <div className="card-body">
              <h3>Adventures</h3>
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