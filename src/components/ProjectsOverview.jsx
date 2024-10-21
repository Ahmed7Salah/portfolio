
import '../App.css'
import ConnectingLines from './projectLayout/ConnectingLines';
import ProjectLayout from './projectLayout/ProjectLayout';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const ProjectsOverview = () => {
  const [titleTyped, titleHelper] = useTypewriter({
    words: [`Projects`],
    typeSpeed: 50,
  })


  return (
    <div className='items-stretch justify-around felx h-lvh'>
      <div className="py-16 text-center text-white/85 text-7xl">{titleTyped}<Cursor /></div>
      <div className='grid items-center justify-center grid-cols-4 mx-24 h-1/2'>
        <ProjectLayout
          img={require("../assets/projects/supraflow.png")} 
          title="SupraFlow"
          description="SkillStream is an Online Learning Platform. a website where users can take online courses. It would include user registration and course management"
          color="white"
          direction={"bottomRight"}
          date="August 2024"
          link="https://supra-flow.vercel.app/"
        />
        <ConnectingLines
          className="absolute z-0 pointer-events-none"
          colorCode="#fff"
          direction="straight"
        />
        <ProjectLayout
          img={require("../assets/projects/skillstream.png")} 
          title="SkillStream"
          description="SkillStream is an Online Learning Platform. a website where users can take online courses. It would include user registration and course management"
          color="teal"
          direction="bottomLeft"
          date="October 2024"
          link="https://skill-stream-navy.vercel.app/"
        />
      </div>
    </div>
  )
}

export default ProjectsOverview
