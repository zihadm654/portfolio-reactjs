import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Blogs } from "../data/blogs.js"

const BlogDetails = (props) => {
  // const blogDetails = props.location.state || {};
  const [blog, setBlog] = useState(null);
  const { slug } = useParams(null)
  // console.log(blogDetails);
  useEffect(() => {
    window.scroll(0, 0);
    const newArray = Blogs.find(array => array.title === slug)
    setBlog(newArray)
  }, [slug])

  if (!blog) return <div>Loading...</div>
  return (
    <div className="blog__details">
      <article>
        <h4>{blog.title}</h4>
        <div className="time">
          <h5>Abdul malik</h5>
          <span>{blog.place}</span>
          <span>2 May, 2020</span>
        </div>
        <div className="img__container">
          <img src={blog.img} alt={blog.authorImg} />
        </div>
        <div className="description">
          <h5>{blog.breif}</h5>
        </div>
        {blog.descriptions.map((desc, index) => {
          return (
            <article key={index}>
              <h5>{desc.title}</h5>
              <p >{desc.description}</p>
            </article>
          )
        })}
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
