import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../lib/firebase"
import { collection, getDocs } from "firebase/firestore";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getDocs(collection(db, "blogs"))
      const data = res.docs.map(doc => {
        return {
          ...doc.data(),
          createdAt: doc.data().createdAt.toMillis(),
          id: doc.id
        }
      })
    }
    return {

    }
  }, []);
  if (loading) return <p>fetching data from firebase....</p>
  // let box = useRef(null)
  return (
    <div className="blog__page">
      <h4>Welcome to my personal blog</h4>
      <div
        className="container">
        {!blogs ? loading : blogs.map((blog) => (
          <article
            // ref={(el) => (box = el)}
            key={blog.id}
            className="content">
            <Link to={`/blogs/${blog.title}`}>
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
