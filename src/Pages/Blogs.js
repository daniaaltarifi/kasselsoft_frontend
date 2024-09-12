import React, { useEffect } from "react";
import Mainbackground from "../components/Mainbackground";
import "../Css/blogs.css";
import { Link } from "react-router-dom";
function Blogs() {
  const path = "blogs";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              <p> crafting innovative websites and apps, seamlessly blending creativity with functionality. Clients trust Kassel for top-notch digital solutions, a testament to their industry prowess and dedication!
               crafting innovative websites and apps, seamlessly blending creativity with functionality. Clients trust Kassel for top-notch digital solutions, a testament to their industry prowess and dedication!
                crafting innovative websites and apps, seamlessly blending creativity with functionality. Clients trust Kassel for top-notch digital solutions, a testament to their industry prowess and dedication!



</p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <p className="popular_title_blog">
                Popular Posts{" "}
                <i
                  class="fa-solid fa-angles-right"
                  style={{ color: "#000000" }}
                ></i>{" "}
              </p>
              <div className="d-flex flex-wrap mt-2">
                <div className="col-lg-3 col-md-4 col-sm-12 ">
                  <img
                    src={require("../assets/work2.webp")}
                    alt="pro5"
                    className="popular_img_blog"
                  />{" "}
                </div>
                <div className="col-lg-9 col-md-4 col-sm-12 col_popular_blogs ps-3">
                  <Link to="" style={{ textDecoration: "none", color: "#000" }}>
                    <p className="popular_link_blogs">
                      Ai streamline repetitive tasks
                    </p>
                    <span>June 24, 2024</span>
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-wrap mt-2">
                <div className="col-lg-3 col-md-4 col-sm-12 ">
                  <img
                    src={require("../assets/work2.webp")}
                    alt="pro5"
                    className="popular_img_blog"
                  />{" "}
                </div>
                <div className="col-lg-9 col-md-4 col-sm-12 col_popular_blogs ps-3">
                  <Link to="" style={{ textDecoration: "none", color: "#000" }}>
                    <p className="popular_link_blogs">
                      Ai streamline repetitive tasks
                    </p>
                    <span>June 24, 2024</span>
                  </Link>
                </div>
              </div>

              <div className="d-flex flex-wrap mt-2">
                <div className="col-lg-3 col-md-4 col-sm-12 ">
                  <img
                    src={require("../assets/work2.webp")}
                    alt="pro5"
                    className="popular_img_blog"
                  />{" "}
                </div>
                <div className="col-lg-9 col-md-4 col-sm-12 col_popular_blogs ps-3">
                  <Link to="" style={{ textDecoration: "none", color: "#000" }}>
                    <p className="popular_link_blogs">
                      Ai streamline repetitive tasks
                    </p>
                    <span>June 24, 2024</span>
                  </Link>
                </div>
              </div>

              <p className="popular_title_blog second_popular_title">
                Popular Posts{" "}
                <i
                  class="fa-solid fa-angles-right"
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
                  class="fa-solid fa-angles-right"
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
