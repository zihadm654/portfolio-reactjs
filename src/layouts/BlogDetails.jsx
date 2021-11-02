import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../firebase.js';
import { useParams } from 'react-router';
const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { slug } = useParams(null)
  useEffect(() => {
    const blogRef = collection(db, "posts")
    const q = query(blogRef, where("title", "==", slug))
    const specificBlog = async () => {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.data());
      })
    }
    specificBlog();
    // setBlog(specificBlog)
    window.scroll(0, 0);
  }, [slug])
  if (!blog) return <div>Loading...</div>
  return (
    <div className="blog__details">
      {blog && blog.map(item => (
        <article key={item.title}>
          <div className="img__container">
            {/* <img src={blog.img} alt={blog.authorImg} /> */}
          </div>
          <h4>{item.title}</h4>
          <div className="time">
            <h5>{item.author}</h5>
            <span>{item.place}</span>
            <span>2 May, 2020</span>
          </div>
          <div className="description">
            <h5>{item.brief}</h5>
          </div>
          <h5>{item.desc.article1.title}</h5>
          <p>{item.desc.article1.body}</p>
        </article>
      ))}
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
