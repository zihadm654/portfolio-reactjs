import React, { useEffect } from "react"
// import Loader from "../components/Loader"
// import { db } from '../lib/connection'

const StoryPage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      {/* <Loader /> */}
      <div className="storyPage">
        <h4>Story page will be up to date soon Thanks for the patients</h4>
      </div>
    </>
  )
}

export default StoryPage
