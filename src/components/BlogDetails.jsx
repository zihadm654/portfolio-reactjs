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
  console.log(blog);
  return (
    <div className="blog__details">
      <article>
        <div className="img__container">
          <img src={blog.img} alt={blog.img} />
        </div>
        <h4>{blog.title}</h4>
        <div className="time">
          <p>{blog.author}</p>
          <span>{new Date(blog.createdAt).toDateString()}</span>
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
        <p>Learn by breaking things into parts and enjoying that you are doing that is the effective way to get going with programming. Because without understanding it you can't go long way. So, have fun</p>
        <h5>I am Abdul malik.</h5>
        <span> Front-end-developer & UI/UX designer</span>
        <p>I am there to make developer life easier.</p>
      </div>
    </div>
  )
}

export default BlogDetails
