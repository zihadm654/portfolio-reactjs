import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../lib/firebase"
import { collection, getDocs } from "firebase/firestore";

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
  }, []);
  return (
    <div className="blog__page">
      <h3>Blog</h3>
      <p>I've been writing online since 2021, mostly about web development and tech careers. In total, I've written 68 articles on this site. Use the search below to filter by title.</p>
      <div
        className="container">
        {blogs && blogs.map((blog) => (
          <article
            key={blog.id}
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
  );
};
export default BlogPage;
