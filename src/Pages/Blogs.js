import React, { useEffect, useState } from "react";
import Mainbackground from "../components/Mainbackground";
import "../Css/blogs.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Blogs() {
  const path = "blogs";
  const { lang,id } = useParams();
  const [selectedBlog, setSelectedBlog] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsRes, tagsResponse] = await Promise.all([
          axios.get(`${API_URL}/blogs/recentblog/${lang}`),
          axios.get(`${API_URL}/tags/${lang}`),
        ]);
        setBlogs(blogsRes.data);
        setTags(tagsResponse.data);
        console.log(blogsRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [lang]);
  return (
    <>
      <Mainbackground path={path} />
      <section className="margin_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <img
                src={require("../assets/work2.webp")}
                alt="pro5"
                className="main_img_blog"
              />
              <p className="main_title_blogs">
                {" "}
                Ai streamline repetitive tasks
              </p>
              <p>
                {" "}
                crafting innovative websites and apps, seamlessly blending
                creativity with functionality. Clients trust Kassel for
                top-notch digital solutions, a testament to their industry
                prowess and dedication! crafting innovative websites and apps,
                seamlessly blending creativity with functionality. Clients trust
                Kassel for top-notch digital solutions, a testament to their
                industry prowess and dedication! crafting innovative websites
                and apps, seamlessly blending creativity with functionality.
                Clients trust Kassel for top-notch digital solutions, a
                testament to their industry prowess and dedication!
              </p>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <p className="popular_title_blog">
                Popular Posts{" "}
                <i
                  className="fa-solid fa-angles-right"
                  style={{ color: "#000000" }}
                ></i>{" "}
              </p>
              {blogs.map((blog) => (
                <div className="d-flex flex-wrap mt-2" key={blog.id}>
                  <div className="col-lg-3 col-md-4 col-sm-12 ">
                    <img
                      src={`${API_URL}/${blog.img}`}
                      alt="pro5"
                      className="popular_img_blog"
                    />{" "}
                  </div>
                  <div className="col-lg-9 col-md-4 col-sm-12 col_popular_blogs ps-3">
                    <Link
                      to={`/blogs/${blog.id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p className="popular_link_blogs">{blog.title} </p>
                      <span>{blog.updated_at}</span>
                    </Link>
                  </div>
                </div>
              ))}
          

              <p className="popular_title_blog second_popular_title">
                Popular Posts{" "}
                <i
                  className="fa-solid fa-angles-right"
                  style={{ color: "#000000" }}
                ></i>{" "}
              </p>
              <div className="row ">
                <div className="col-lg-1 col-md-4 col-sm-1 col_choose_category_blogs">
                  <img
                    src={require("../assets/play.png")}
                    alt="pro5"
                    className=""
                    style={{
                      width: "12px",
                      height: "15px",
                      marginLeft: "10px",
                    }}
                  />
                </div>

                <div className="col-lg-11 col-md-4 col-sm-11 col_choose_category_blogs ">
                  <p className="">Web Design</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-1 col-md-4 col-sm-1 col_choose_category_blogs">
                  <img
                    src={require("../assets/play.png")}
                    alt="pro5"
                    className=""
                    style={{
                      width: "12px",
                      height: "15px",
                      marginLeft: "10px",
                    }}
                  />
                </div>

                <div className="col-lg-11 col-md-4 col-sm-11 col_choose_category_blogs  ">
                  <p className="">Development</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-1 col-md-4 col-sm-1 col_choose_category_blogs">
                  <img
                    src={require("../assets/play.png")}
                    alt="pro5"
                    className=""
                    style={{
                      width: "12px",
                      height: "15px",
                      marginLeft: "10px",
                    }}
                  />
                </div>

                <div className="col-lg-11 col-md-4 col-sm-11 col_choose_category_blogs ">
                  <p className="">Development</p>
                </div>
              </div>
              <p className="popular_title_blog second_popular_title">
                Popular Posts{" "}
                <i
                  className="fa-solid fa-angles-right"
                  style={{ color: "#000000" }}
                ></i>{" "}
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <button type="button" className="btn btn_blogs">
                  Facebook
                </button>
                <button type="button" className="btn btn_blogs">
                  Algorithm
                </button>
                <button type="button" className="btn btn_blogs">
                  Bangla
                </button>
                <button type="button" className="btn btn_blogs">
                  Mirgbai
                </button>
                <button type="button" className="btn btn_blogs">
                  Algorithm
                </button>
                <button type="button" className="btn btn_blogs">
                  Facebook
                </button>
                <button type="button" className="btn btn_blogs">
                  Mirgbai
                </button>
                <button type="button" className="btn btn_blogs">
                  Bangla
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
