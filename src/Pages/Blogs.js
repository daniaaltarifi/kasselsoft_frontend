import React, { useEffect, useState } from "react";
import "../Css/blogs.css";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Mainbackground from "../components/Mainbackground";

function Blogs() {
  const path = "blogs";
  const { lang } = useParams();
  const API_URL = process.env.REACT_APP_API_URL;
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [lastThreeBlogs, setLastThreeBlogs] = useState([]);
  const [selectedTagId, setSelectedTagId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const [blogsRes, tagsResponse] = await Promise.all([
          axios.get(`${API_URL}/blogs/${lang}`),
          axios.get(`${API_URL}/tags/${lang}`),
        ]);
        setBlogs(blogsRes.data);
        setTags(tagsResponse.data);
        const lastthreeblogs = blogsRes.data.slice(-3);
        setLastThreeBlogs(lastthreeblogs);
        console.log(lastthreeblogs);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchBlog();
  }, [lang]);
  // const fetchTags = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://ba9maacademy.kasselsoft.online/tag/uniquetag"
  //     );
  //     const tags = response.data;
  //     setTags(tags); // Assuming setTags is a function to update your state
  //   } catch (error) {
  //     console.error("Failed to fetch tags:", error);
  //   }
  // };

  // const fetchLastThreeBlogs = async () => {
  //   const response = await axios.get(
  //     "https://ba9maacademy.kasselsoft.online/blog/lastthree"
  //   );
  //   const blogsData = response.data;
  //   const approvedBlogs = blogsData.filter(
  //     (blog) => blog.action === "approved"
  //   );
  //   setLastThreeBlogs(approvedBlogs);
  // };
  // const fetchDynamicBlog = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://ba9maacademy.kasselsoft.online/dynamicblog/"
  //     );
  //     const data = response.data;
  //     setDynamicBlog(data);
  //   } catch (error) {
  //     console.log(`Error getting data from frontend: ${error}`);
  //   }
  // };

  // const handleTagClick = async (tag_name) => {
  //   try {
  //     const response = await axios.get(
  //       `https://ba9maacademy.kasselsoft.online/tag/blogbytag/${tag_name}`
  //     );
  //     const blogs = response.data;
  //     const mappedBlogs = blogs.map((tag) => ({
  //       id: tag.blog_id, // Adjust as needed
  //       title: tag.title,
  //       author: tag.author,
  //       descr: tag.descr,
  //       img: tag.img,
  //       tag_name: tag.tag_name,
  //     }));
  //     setBlogs(mappedBlogs);
  //   } catch (error) {
  //     console.error("Failed to fetch blogs:", error);
  //   }
  // };
  const [displayBlogs, setDisplayBlogs] = useState([]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Number of blogs per slide
  const blogsPerSlide = 5;

  // Calculate total number of slides
  // const totalSlides = Math.ceil(displayBlogs.length / blogsPerSlide);

  // Update the displayBlogs state based on filters
  useEffect(() => {
    let filteredBlogs = [];
    console.log("tag", selectedTagId);
    if (selectedTagId !== null) {
      filteredBlogs = blogs.filter((blog) => blog.tag_id === selectedTagId);
    } else {
      filteredBlogs = blogs;
    }

    setDisplayBlogs(filteredBlogs);
    setCurrentSlideIndex(0); // Reset to the first slide when filtering changes
  }, [blogs, selectedTagId]);

  // Calculate which blogs to display based on current slide index
  const startIndex = currentSlideIndex * blogsPerSlide;
  const endIndex = startIndex + blogsPerSlide;
  // const visibleBlogs = displayBlogs.slice(startIndex, endIndex);

  return (
    <>
      <Mainbackground path={path} />

      {/* End header */}
      <section className="margin_section">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-8 col-md-12 col-sm-12 col_blog">
              {displayBlogs.length === 0 ? ( // Check if there are no blogs
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <p>No Blogs Found</p>
                </div>
              ) : (
                displayBlogs.map((blog, index) => (
                  <Link
                    to={`/${lang}/blogdetails/${blog.id}`}
                    style={{ textDecoration: "none" }}
                    key={index} // Move key here to avoid warnings
                  >
                    <div className="card mb-3 card_cont_blog">
                      <div className="row g-0">
                        <div className="col-lg-4 col-md-4 col-sm-12 img_col_blogs">
                          <img
                            src={`${API_URL}/${blog.main_img}`}
                            className="img-fluid img_blog"
                            alt="blog"
                          />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                          <div className="card-body card_body_blog">
                            <div className="cont_info_blog">
                              <div>
                                <p className="card-title blog_title">
                                  {blog.title}
                                </p>
                              </div>
                              <div className="d-flex">
                                <i
                                  className="fa-solid fa-clock card_icon ms-2 mt-1"
                                  style={{ color: "#4c74b7" }}
                                ></i>
                                <p className="details_blogs_card ">
                                  {blog.updated_at}
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="card-text desc_blog ">
                            {blog.main_description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 ">
              <p className="popular_title_blog ">
                {lang === "ar" ? "المقالات الاخيرة" : "Recent Blogs"}
                {lang === "ar" ? (
                  <i
                    className="fa-solid fa-angles-left  "
                    style={{ color: "#000000" }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-angles-right ms-2"
                    style={{ color: "#000000" }}
                  ></i>
                )}
              </p>
              {lastThreeBlogs.map((lastthreeblogs) => (
                <Link
                  to={`/${lang}/blogdetails/${lastthreeblogs.id}`}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className="categ_lastblog_cont">
                    <img
                      src={`${API_URL}/${lastthreeblogs.main_img}`}
                      alt="blog"
                      className="img-fluid img_last_blog"
                    />
                    <p className="desc_last_blog">{lastthreeblogs.title}</p>
                  </div>
                </Link>
              ))}
              <p className="popular_title_blog ">
                {lang === "ar" ? "التاغات" : " Tags"}
                {lang === "ar" ? (
                  <i
                    className="fa-solid fa-angles-left  "
                    style={{ color: "#000000" }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-angles-right ms-2"
                    style={{ color: "#000000" }}
                  ></i>
                )}
              </p>
              <div className="tags_btn_cont">
                {tags.map((tag) => (
                  <div key={tag.id}>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mb-1"
                      onClick={() => setSelectedTagId(tag.id)} // Use setter function here
                    >
                      {tag.tag_name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
