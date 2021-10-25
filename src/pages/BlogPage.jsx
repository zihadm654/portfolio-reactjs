import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { describe } from "../helpers/Animation"
import { Blogs } from "../data/blogs.js"
const BlogPage = () => {
  // const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    window.scroll(0, 0)
    describe(box)
  });
  let box = useRef(null)
  return (
    <div className="blog__page">
      <h4>Welcome to my personal blog</h4>
      <div
        className="container">
        {Blogs.map((blog, index) => (
          <article
            ref={(el) => (box = el)}
            key={index}
            className="content">
            <Link to={"/blogs/" + blog.title}>
              <div className="blog__img">
                <img src={blog.img} alt={blog.img} />
              </div>
              <div className="description">
                <p >{blog.title}</p>
                {/* <p>{blog.breif}</p> */}
                <div className="time">
                  {/* <span>May 12th, 2020</span> */}
                  {/* <span>{blog.place}</span> */}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;
