import AboutMe from '../components/AboutMe'
import Divider from '../components/helpers/Divider'
import ProjectsOverview from '../components/ProjectsOverview'
import SkillsOverview from '../components/SkillsOverview'
import DivOnScroll from '../components/helpers/DivOnScroll'

const Home = () => {
  return (
    <div className='bg-black font-primary'>
      <ProjectsOverview />

      <Divider />

      <AboutMe />

      <Divider />
      <DivOnScroll>
        <SkillsOverview />
      </DivOnScroll>

    </div>
  )
}

export default Home
