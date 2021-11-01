import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { describe } from "../helpers/Animation"
import { db } from "../firebase.js"
import { collection, getDocs } from "firebase/firestore";
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getDocs(collection(db, "posts"))
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    fetchBlogs();
    window.scroll(0, 0)
    // describe(box)
  }, []);
  let box = useRef(null)
  return (
    <div className="blog__page">
      <h4>Welcome to my personal blog</h4>
      <div
        className="container">
        {blogs.map((blog, index) => (
          <article
            ref={(el) => (box = el)}
            key={index}
            className="content">
            <Link to={"/blogs/" + blog.title}>
              <div className="blog__img">
                {/* <img src={blog.img} alt={blog.img} /> */}
              </div>
              <div className="description">
                <p>{blog.title}</p>
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
