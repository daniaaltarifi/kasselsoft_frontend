import React, { useEffect, useState } from "react";
import Mainbackground from "../components/Mainbackground";
import { useParams } from "react-router-dom";
import axios from "axios";
function BlogDetails() {
  const path = "blogdetails";
  const API_URL = process.env.REACT_APP_API_URL;
  const { lang, id } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const [blogsRes] = await Promise.all([
          axios.get(`${API_URL}/blogs/${lang}/getbyid/${id}`),
        ]);
        setBlogs(blogsRes.data);
        console.log(blogsRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchBlog();
  }, [lang]);
  return (
    <>
      <Mainbackground path={path} />
      <section className="margin_section">
        <div className="container text-center">
          <div className="row">
            {blogs.map((blogdetails) => (
                <div>

          <div className="d-flex flex-wrap">

            <div className="col-lg-6 col-md-6 col-sm-12 col_interprition_terms">
              <img
                  src={`${API_URL}/${blogdetails.img}`}
                alt="terms and conditions"
                className="terms_img"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col_interprition_terms">
              <p className="title_terms">{blogdetails.title}</p>
              <p className="descr_terms">{blogdetails.description}</p>
            </div>
          </div>

          <div className=" d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p>
                sKassel excels in crafting innovative websites and apps,
                seamlessly blending creativity with functionality. Clients trust
                Kassel for top-notch digital solutions, a testament to their
                industry prowess and dedication!
              </p>
            </div>
            </div>
            <div className="row">

            <div className="col-lg-4 col-md-6 col-sm-12">
            <img
                  src={`${API_URL}/${blogdetails.img}`}
                alt="terms and conditions"
                className="terms_img"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <img
                  src={`${API_URL}/${blogdetails.img}`}
                alt="terms and conditions"
                className="terms_img"
              />
            </div>  <div className="col-lg-4 col-md-6 col-sm-12">
            <img
                  src={`${API_URL}/${blogdetails.img}`}
                alt="terms and conditions"
                className="terms_img"
              />
            </div>
            </div>
            </div>

       ))} 
       </div> 
        </div>
      </section>
    </>
  );
}

export default BlogDetails;
