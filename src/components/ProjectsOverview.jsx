
import '../App.css'
import ProjectLayout from './projectLayout/ProjectLayout';


const ProjectsOverview = () => {
  
  return (
    <div className='flex items-center justify-around bg-black h-lvh w-lvw'>
      <ProjectLayout
        img={require("../assets/projects/supraflow.png")} 
        title="SupraFlow"
        description="Efficient routing and navigation for Expo and SupraFlow applications."
        color="white"
        direction={"bottomRight"}
      />
      <ProjectLayout
        img={require("../assets/projects/supraflow.png")} 
        title="SupraFlow"
        description="Efficient routing and navigation for Expo and SupraFlow applications."
        color="limeGreen"
        direction="bottomLeft"
      />
      
    </div>
  )
}

export default ProjectsOverview
