import Hero from '../layouts/Hero'
import Describe from '../layouts/Describe'
import Projects from '../layouts/Projects'
import Progress from '../layouts/Progress'
import Skills from '../layouts/Skills'
import About from '../layouts/About'
import Loader from "../components/Loader"

const HomePage = () => {

  return (
    <main>
      <Loader />
      <Hero />
      <Describe />
      <Projects />
      <Progress />
      <Skills />
      <About />
    </main>

  )
}

export default HomePage
