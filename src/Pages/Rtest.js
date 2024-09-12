import React, { useState, useEffect } from "react";
import '../Css/contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Mainbackground from '../components/Mainbackground';
import { useParams } from "react-router-dom";
function Contect() {
    const { lang } = useParams();
    const API_URL = process.env.REACT_APP_API_URL;
 // State to store form data
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // State to store success or error messages
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


// Handle form submission
// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:9090/contactForm/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // On success, clear form and display success message
        setFormData({ name: "", email: "", phone: "", message: "" });
        setResponseMessage(lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!");
  
        // Hide alert after 5 seconds
        setTimeout(() => {
          setResponseMessage("");
        }, 5000); // 5000 ms = 5 seconds
      } else {
        // Handle errors from backend
        setResponseMessage(data.error || "Something went wrong!");
  
        // Hide alert after 5 seconds
        setTimeout(() => {
          setResponseMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage(lang === "ar" ? "خطأ في إرسال النموذج. يرجى المحاولة مرة أخرى." : "Error sending the form. Please try again.");
  
      // Hide alert after 5 seconds
      setTimeout(() => {
        setResponseMessage("");
      }, 5000);
    }
  };
  

     const path= "contact"
  return (

 <>


<Mainbackground path={path}/>

<div className="container mt-5 container-contact">
  <div className="row ">
    <div className="col-md-6 bg-primary p-5 order-sm-first order-last ">
      <p className="p-contactUs">
        
      {lang === "ar" ? "ابقى على اتصال" : "Stay Connected"}
        </p>
        <h1>{lang === "ar" ? "اتصل بنا" : "Contact Us"}</h1>
      <div className="contact-item mt-2">
        <div className="icon-text">
          <i className="bi bi-geo-alt" />
          <h3 className="ms-2">
          {lang === "ar" ? "  الموقع" : "Location:"}
            
            </h3>
        </div>
        <p className="mt-1 ms-4">
          V Business Center Vbc
          <br />
          Amman
          <br />
          Jordan
        </p>
      </div>
      <div className="contact-item mt-2">
        <div className="icon-text">
          <i className="bi bi-telephone-forward" />
          <h3 className="ms-2">
          {lang === "ar" ? "  الرقم" : "Phone:"} 
            
            
            </h3>
        </div>
        <p className="mt-1 ms-4">
          +962 790025554 <br /> +962 790039555
        </p>
      </div>
      <div className="contact-item mt-2">
        <div className="icon-text">
          <i className="bi bi-envelope" />
          <h3 className="ms-2">
          {lang === "ar" ? "الايميل  " : "Email:"}
            
            
            </h3>
        </div>
        <p className="mt-1 ms-4">contactform@gmail.com</p>
      </div>
      <div className="col-md-6 col-lg-4 ml-lg-0 mt-5 text-center text-md-end d-flex order-sm-first order-last">
  {/* Facebook */}
  <a
    className="btn btn-floating m-2 social-icon"
    role="button"
   
  >
    <i className="bi bi-facebook"></i>
  </a>
  {/* LinkedIn */}
  <a
    className="btn btn-floating m-2 social-icon"
    role="button"
  
  >
    <i className="bi bi-linkedin"></i>
  </a>
  {/* Google */}
  <a
    className="btn btn-floating m-2 social-icon"
    role="button"
   
  >
    <i className="bi bi-google"></i>
  </a>
  {/* Instagram */}
  <a
    className="btn btn-floating m-2 social-icon"
    role="button"
   
  >
    <i className="bi bi-instagram"></i>
  </a>
  {/* WhatsApp */}
  <a
    className="btn btn-floating m-2 social-icon"
    role="button"
   
  >
    <i className="bi bi-whatsapp"></i>
  </a>
</div>


    </div>
    <div className="col-md-6 p-5">
    <h1>{lang === "ar" ? "اترك لنا رسالة" : "Drop us a line"}</h1>
      <p className="p-contact">
      {lang === "ar" ? "املأ معلوماتك وسنتصل بك قريبًا" : "Fill in your information and we will contact you soon"}
      </p>
      <form className="row g-3 contactForm mt-4" onSubmit={handleSubmit}>
        <div className="col-md-12 animated-input" style={{ animationDelay: "0.2s" }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={lang === "ar" ? "اسمك" : "Your Name"}
            className="form-control styled-input"
            required
          />
        </div>
        <div className="col-md-12 animated-input" style={{ animationDelay: "0.4s" }}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={lang === "ar" ? "بريدك الإلكتروني" : "Your Email"}
            className="form-control styled-input"
            required
          />
        </div>
        <div className="col-md-12 animated-input" style={{ animationDelay: "0.6s" }}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={lang === "ar" ? "رقم هاتفك" : "Your Phone"}
            className="form-control styled-input"
            required
          />
        </div>
        <div className="col-md-12 animated-input" style={{ animationDelay: "0.8s" }}>
          <textarea
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            placeholder={lang === "ar" ? "رسالتك" : "Your Message"}
            className="form-control styled-input"
            required
          />
        </div>
        <div className="col-md-12 animated-input" style={{ animationDelay: "1s" }}>
          <button type="submit" className="btn btn-primary mt-3">
          {lang === "ar" ? "إرسال" : "SUBMIT"}
          </button>
        </div>
      </form>

      {responseMessage && <p className="mt-4 alert alert-success">{responseMessage}</p>}
    </div>
  </div>

  <div className="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112061.09262729759!2d77.208022!3d28.632485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x644e33bc3def0667!2sIndior+Tours+Pvt+Ltd.!5e0!3m2!1sen!2sus!4v1527779731123"
    width="100%"
    height="350px"
    frameBorder={0}
    style={{ border: 0 }}
    allowFullScreen=""
  />
</div>
</div>


</>
  )
}

export default Contect






.container-contact{

    overflow-x: hidden; 
}
.contact-item .icon-text {
    display: flex;
    align-items: center;
  }
  
.p-contact , .contact-item p{
color: rgb(102 102 102);
    font-size: 18px;
}
 .container-contact h1{
    font-family: Verdana, Geneva, Tahoma, sans-serif!important;
    font-weight: 700;
    margin-bottom: 1.25rem;
    font-size: 45px;
    color: #000000;
}
.p-contactUs{
    font-size: 20px;
    font-weight: 700;
    color: rgb(60 102 171);
}

.contact-item h3{

    margin-bottom: .5rem;
    font-size: 20px;
    font-weight: 700;
}
.bg-primary{
    background-color: #fff !important;
    font-family:Verdana, Geneva, Tahoma, sans-serif!important;

}

.social-icon {
    transition: color 0.3s ease, transform 0.3s ease;
    width: 45px;
    align-items: center;
    height: 45px;
    border-radius: 9999px;
    background-color:#365486;
    font-size: 20px;
    color: #fff !important;
    border: 1px solid #243c64;
   /* margin: 13px !important; */
   
  }
  
  .social-icon:hover {
    background-color:#374f79;
    color: rgb(34, 87, 122); /* Change color on hover */
    transform: scale(1.0); /* Slightly enlarge icon */
  }
  

/* Animation for sliding from the right */
@keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  /* Apply the animation to each input */
  .animated-input {
    animation: slideInFromRight 0.4s ease-out forwards;
    opacity: 0;
  }
  
 

.btn.btn-primary {
    
    color: #fff;
    
    box-shadow: 0 5px 15px 0 rgba(54, 83, 134, .19);
    font-weight: 600;
    border: 1px solid #365486;
    background-color: #365486;
    text-transform: capitalize !important;
    font-size: 20px !important;
    -webkit-border-radius: 28px;
    outline: 0 none;
    border-radius: 28px;
    padding: 12.5px 46px;
}
.btn.btn-primary:hover{
    background-color: #fcfcfc!important;
    color: #365486;
    border: 1px solid #365486;
    padding: 13.5px 46px;
}

.contact-item .bi{
    font-size: 30px;
}
.styled-input {
    padding-right: 0.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-color: rgba(238, 238, 238, 0.8);
    width: 100%;
    border-radius: 0.375rem;
    border-width: 1px;
    box-sizing: border-box;
  }
  
  .styled-input:focus {
    outline: none;
    border-color: rgba(238, 238, 238, 0.8); /* Change color when focused */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
  }
  
  textarea.styled-input {
    resize: none; /* Prevents resizing */
  }
  
  @media (max-width: 576px) {
    .styled-input {
      padding-right: 0.25rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .social-icon {
        width: 35px;
        height: 35px;
        font-size: 16px;
        margin: 6px;
    }
     /* Hide scrollbar on small screens */
     .container-contact {
        overflow-x: hidden; /* Hides horizontal scrollbar */
    } 
  }
  



/* Responsive adjustments for social icons */
@media (max-width: 768px) {
    .social-icon {
        width: 30px;
        height: 30px;
        font-size: 13px;
        text-align: center;
        margin: 4px !important;
    }
}



