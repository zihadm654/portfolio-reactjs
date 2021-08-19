import React, { useRef, useEffect } from 'react'
import Icon from '../helpers/Icon'
import { describe, cardAni } from "../helpers/Animation.js"

const Skills = () => {
  let desc = useRef(null)
  let card = useRef(null)
  useEffect(() => {
    describe([desc, card])
  }, [])
  return (
    <div className="skills__container">
      <div ref={(el) => (desc = el)}
        className="skills__description">
        <img
          src="https://uploads-ssl.webflow.com/5efbc66bfe713c08511b3024/5f71257fe6472905bfa023e0_Celebration.svg"
          alt=""
        />
        <h3>3 years of Experience</h3>
        <p>
          I can help you successfully take your business online while assisting
          you throughout the building process. Building the best experiences &
          bringing value to the table through my animation expertise.
        </p>
        <Icon linkName={"/about"}
          text={'learn more'}>
        </Icon>
      </div>
      <div ref={(el) => (card = el)}
        className="skills__cards">
        <Skill
          className="skill"
          img={
            'https://uploads-ssl.webflow.com/5efbc66bfe713c08511b3024/5efe20a7310d7d5e2959aa05_UI%20Design%20Icon.svg'
          }
          title={'User Interface Design'}
          description={
            'Mobile App & Web UI Design Micro-Interactions animation'
          }
        />
        <Skill
          className="skill"
          img={
            'https://uploads-ssl.webflow.com/5efbc66bfe713c08511b3024/5efe20a6310d7d81e659aa04_Website%20Development%20Icon.svg'
          }
          title={'Website Development'}
          description={
            'custom Crafting Beautiful website redesign recreate from scretch'
          }
        />
        <Skill
          className="skill"
          img={
            'https://uploads-ssl.webflow.com/5efbc66bfe713c08511b3024/5efe1ee997a154186e552940_User%20Experience%20Icon.svg'
          }
          title={'User Experience'}
          description={'User Research UX Enhancements UX Audit'}
        />
        <Skill
          className="skill"
          img={
            'https://uploads-ssl.webflow.com/5efbc66bfe713c08511b3024/5efe20e4adc66db237803199_Motion%20Design%20Icon.svg'
          }
          title={'Motion & Animation'}
          description={'3D Animation Website Product design and website mockup'}
        />
      </div>
    </div>
  )
}
const Skill = ({ img, title, description }) => {
  let item = useRef(null)
  useEffect(() => {
    cardAni(item)
  }, [])
  return (
    <div ref={(el => (item = el))} className="skill">
      <img src={img} alt="" />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}

export default Skills
