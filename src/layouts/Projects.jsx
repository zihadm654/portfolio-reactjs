import React, { useRef, useEffect, useState } from 'react'
import Button from '../helpers/Button'
import LayoutCards from '../components/Cards'
import { fadeIn } from "../helpers/Animation"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/firebase'

const Projects = () => {
  let title = useRef(null)
  let subTitle = useRef(null)
  const [cards, setCards] = useState([])

  useEffect(() => {
    fadeIn([title, subTitle])
    const fetchData = async () => {
      const res = await getDocs(collection(db, "projects"))
      const data = res.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      setCards(data)
    }
    fetchData()
  }, [])
  return (
    <section
      className="project">
      <div className="project__title">
        <h2
          ref={(el) => (title = el)}
        >Selected Projects</h2>
        <p ref={(el) => (subTitle = el)}>
          Designed seamless interfaces, Built beautiful websites, & Composed
          inspiring animations.
        </p>
      </div>
      <div className="project__container">
        <div className="cards">
          {cards?.map(({ id, title, img, description }) => (
            <LayoutCards
              key={id}
              title={title}
              img={img}
              description={description}
            />
          ))}
        </div>
      </div>
      <Button
        site={"/projects"}
        className='secondary__btn' text='see more work' />
    </section>
  )
}
export default Projects
