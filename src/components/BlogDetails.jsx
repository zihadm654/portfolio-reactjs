import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../lib/firebase';
import { useParams } from 'react-router';

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams(null)

  useEffect(() => {
    const blogRef = collection(db, "posts")
    const q = query(blogRef, where("title", "==", slug))
    const post = [];
    const specificBlog = async () => {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        post.push({
          ...doc.data(),
          id: doc.id
        })
      })
      setBlog(post)
      setLoading(false)
    }
    specificBlog();
    window.scroll(0, 0);
  }, [slug])
  if (loading) {
    return <p>fetching data from firebase</p>
  }
  // console.log(blog.map(item => item.desc.map()));
  return (
    <div className="blog__details">
      {!blog ? loading : blog.map(item => (
        <article key={item.title}>
          <div className="img__container">
            {/* <img src={blog.img} alt={blog.authorImg} /> */}
          </div>
          <h4>{item.title}</h4>
          <div className="time">
            <p>{item.author}</p>
            <span>{item.place}</span>
            {/* <span>{item.time}</span> */}
          </div>
          <div className="description">
            <h5>{item.brief}</h5>
            {/* {item.desc.map(article => (
              <article key={article.title}>
                <h5>{article.title}</h5>
                <p>{article.body}</p>
              </article>
            ))} */}
          </div>
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
