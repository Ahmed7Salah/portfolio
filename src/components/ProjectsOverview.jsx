
import '../App.css'
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
      <div className='grid items-center justify-center mx-12 h-1/2'>
        <ProjectLayout className=""
          img={require("../assets/projects/supraflow.png")} 
          title="SupraFlow"
          description="Efficient routing and navigation for Expo and SupraFlow applications."
          color="white"
          direction={"bottomRight"}
          date="August 2024"
        />
        {/* <ProjectLayout
          img={require("../assets/projects/supraflow.png")} 
          title="SupraFlow"
          description="Efficient routing and navigation for Expo and SupraFlow applications."
          color="limeGreen"
          direction="bottomLeft"
          date="August 2024"
        /> */}
      </div>
    </div>
  )
}

export default ProjectsOverview
