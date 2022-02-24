import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { db } from "../lib/firebase"
import { collection, getDocs } from "firebase/firestore";
// import Loader from "../components/Loader";
import { textIntro, fadeIn } from "../helpers/Animation";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
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
      setBlogs(data)
    }
    fetchData()
    textIntro([heading, heading1])
    fadeIn(revealRefs.current)
  }, []);
  const revealRefs = useRef([])
  revealRefs.current = [];
  const addRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }
  let heading = useRef(null)
  let heading1 = useRef(null)
  return (
    <>
      {/* <Loader /> */}
      <div className="blog__page">
        <h3 ref={el => heading = el}>Blog</h3>
        <p ref={el => heading1 = el}>I've been writing online since 2021, mostly about web development and tech careers. In total, I've written 68 articles on this site. Use the search below to filter by title.</p>
        <div
          className="container">
          {blogs && blogs.map((blog) => (
            <article
              key={blog.id}
              ref={addRefs}
              className="content">
              <Link to={`/blogs/${blog.id}`}>
                <div className="description">
                  <h5>{blog.title}</h5>
                  <p>{blog.sub}</p>
                  <div className="info">
                    <p>{blog.author}</p>
                    <p>{new Date(blog.createdAt).toDateString()}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};
export default BlogPage;
