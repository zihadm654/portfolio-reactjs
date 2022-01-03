import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../lib/firebase';
import { useParams } from 'react-router';

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { slug } = useParams(null)
  const id = slug
  useEffect(() => {
    const fetchData = async () => {
      const blogRef = doc(db, "blogs", id)
      const snapshot = await getDoc(blogRef)
      const blogSnap = {
        ...snapshot.data(),
        id: snapshot.id,
        createdAt: snapshot.data().createdAt.toMillis()
      }
      setBlog(blogSnap);
    }
    fetchData()
  }, [id])
  if (!blog) return <h5>Loading...</h5>
  return (
    <div className="blog__details">
      <article>
        <h3>{blog.title}</h3>
        <div className="context">

          <div className="info">
            <p>{blog.author}</p>
            <p>/{new Date(blog.createdAt).toDateString()}</p>
          </div>
          <div className="time">
            <p>*12 min read</p>
          </div>
        </div>
        <div className="img__container">
          <img src={blog.img} alt={blog.img} />
        </div>
        <div className="description">
          <h5>{blog.sub}</h5>
          {/* {blog.desc.map(article => (
              <article key={article.title}>
                <h5>{article.title}</h5>
                <p>{article.body}</p>
              </article>
            ))} */}
        </div>
      </article>
      <div className="conclution">
        <h4>Conclusion:-</h4>
        <p>Learn by breaking things into parts and enjoying that you are doing that is the effective way to get going with programming. Because without understanding it you can't go long way. So, have fun.</p>
        <p>I am there to make developer life easier.</p>
        <h5>I am Abdul malik.</h5>
        <span> Front-end-developer & UI/UX designer</span>
      </div>
    </div>
  )
}

export default BlogDetails
