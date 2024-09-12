import React, { useEffect, useState } from "react";
import Mainbackground from "../components/Mainbackground";
import "../Css/blogs.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Blogs() {
  const path = "blogs";
  const { lang } = useParams();
  const [selectedBlog, setSelectedBlog] = useState(null); // State to track the selected blog

  const API_URL = process.env.REACT_APP_API_URL;
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTagId, setSelectedTagId] = useState(null); // State to track the selected tag ID
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsRes, tagsResponse] = await Promise.all([
          axios.get(`${API_URL}/blogs/${lang}`),
          axios.get(`${API_URL}/tags/${lang}`),
        ]);
        setBlogs(blogsRes.data);
        setTags(tagsResponse.data);
        setFilteredBlogs(blogsRes.data); // Initially show all blogs

        console.log(blogsRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [lang]);
  useEffect(() => {
    if (selectedTagId !== null) {
      // Filter blogs based on the selected tag ID
      const filtered = blogs.filter((blog) => blog.tag_id === selectedTagId);
      setFilteredBlogs(filtered);
    } else {
      // If no tag is selected, show all blogs
      setFilteredBlogs(blogs);
    }
  }, [selectedTagId, blogs]);
  const handleTagClick = (tagId) => {
    setSelectedTagId(tagId);
  };

  return (
    <>
      <Mainbackground path={path} />
      <section className="margin_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              {selectedBlog ? (
                // Display selected blog details
                <div>
                  <img
                    src={`${API_URL}/${selectedBlog.img}`}
                    alt={selectedBlog.title}
                    className="main_img_blog"
                  />
                  <p className="main_title_blogs">{selectedBlog.title}</p>
                  <p>{selectedBlog.description}</p>
                </div>
              ) : (
                // Display default content
                <div>
                  <img
                    src={require("../assets/work2.webp")}
                    alt="pro5"
                    className="main_img_blog"
                  />
                  <p className="main_title_blogs">
                    Ai streamline repetitive tasks
                  </p>
                  <p>
                    crafting innovative websites and apps, seamlessly blending
                    creativity with functionality. Clients trust Kassel for
                    top-notch digital solutions, a testament to their industry
                    prowess and dedication!
                  </p>
                </div>
              )}
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <p className="popular_title_blog">
                Popular Posts{" "}
                <i
                  className="fa-solid fa-angles-right"
                  style={{ color: "#000000" }}
                ></i>{" "}
              </p>
              <div className="scrollable-container">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <div className="d-flex flex-wrap mt-2" key={blog.id}>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <img
                          src={`${API_URL}/${blog.img}`}
                          alt="pro5"
                          className="popular_img_blog"
                        />
                      </div>
                      <div className="col-lg-9 col-md-4 col-sm-12 col_popular_blogs ps-3">
                        <button
                          onClick={() => handleBlogClick(blog)}
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                          }}
                        >
                          <p className="popular_link_blogs">{blog.title}</p>
                          <span>{blog.updated_at}</span>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="scrollable-container">
                    {blogs.map((blog) => (
                      <div className="d-flex flex-wrap mt-2" key={blog.id}>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                          <img
                            src={`${API_URL}/${blog.img}`}
                            alt="pro5"
                            className="popular_img_blog"
                          />
                        </div>
                        <div className="col-lg-9 col-md-4 col-sm-12 col_popular_blogs ps-3">
                          <button
                            onClick={() => handleBlogClick(blog)}
                            style={{
                              textDecoration: "none",
                              color: "#000",
                              border: "none",
                              background: "none",
                              cursor: "pointer",
                            }}
                          >
                            <p className="popular_link_blogs">{blog.title}</p>
                            <span>{blog.updated_at}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="popular_title_blog second_popular_title">
                Popular Posts{" "}
                <i
                  className="fa-solid fa-angles-right"
                  style={{ color: "#000000" }}
                ></i>{" "}
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {tags.map((tag) => (
                  <div key={tag.id}>
                    <button
                      type="button"
                      className="btn btn_blogs"
                      onClick={() => handleTagClick(tag.id)} // Pass tag ID to the handler
                    >
                      {tag.tag_name}{" "}
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
