import React from 'react'
// import img1 from '../assets/Slice5.jpg'
// import img2 from '../assets/active-states.jpg'
import Icon from '../helpers/Icon'
const CheckOut = () => {
  return (
    <>
      <div className="checkout">
        <div className="checkout__left item">
          <div className="content">
            <h4>Work</h4>
            <p>Take a look at I've <br /> created and get inspired</p>
            <Icon linkName={'/projects'} text={'checkout'} />
          </div>
        </div>
        <div className="checkout__right item">
          <div className="content">
            <h4>Blogs</h4>
            <p>Take a look at I've <br /> created and get inspired</p>
            <Icon linkName={'/blogs'} text={'checkout'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut
