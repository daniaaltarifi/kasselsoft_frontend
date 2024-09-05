import React from 'react'
import '../Css/about.css';
function Mainbackground() {
  return (
    <>
    <div className="home">
  <div className="content">
    
  {/* Scattered icons */}
  <div className="scattered-icons">
    <i className="bi bi-plus"style={{ fontWeight: '700', fontSize: '32px',color:'#e0cef5' }}></i>
    
   
    <i className="bi bi-chevron-double-left"style={{ fontWeight: '700', fontSize: '22px',color:'#e0cef5' }}></i>
   <i className="bi bi-water"style={{ fontWeight: '700',color:'#e0cef5' }}></i>
  </div>
    <h5>Know more </h5>
    <h1 className="about-title mt-2">
      About us
    </h1>
    <p className="about-prag mt-4">
      <span>
        <i className="bi bi-house-door-fill m-2" style={{ fontWeight: '900', fontSize: '22px' }}></i>
      </span>
      Home
      <span>
        <i className="bi bi-slash-lg m-2" style={{ color: 'black', fontWeight: '900', fontSize: '22px'}}></i>
      </span>
      About us
    </p>
  </div>
 {/* Scattered icons */}
 <div className="scattered-icons">
 <i className="bi bi-chevron-double-left"style={{  fontSize: '20px' }}></i>
   
    <i className="bi bi-plus-lg"style={{color:'#e0cef5'}}></i>
   
  </div>
</div>

  {/* Section Services Start */}
    
    </>
  )
}

export default Mainbackground