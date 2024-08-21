
import ProjectStar from './ProjectStar'
import ConnectingLines from './ConnectingLines'
import ProjectCard from './ProjectCard'
import { useAnimationControls } from 'framer-motion';

const ProjectLayout = ({ title, description, img, color, direction, date }) => {
  const controls = useAnimationControls();
  const colorVariants = {
    "white": "#fff",
    "limeGreen": "#bada55",
    "orange": "#ea580c",
    "darkCyan": "#155e75"
  }
  const bgColorVariants = {
    "white": "bg-white",
    "limeGreen": "bg-[#bada55]",
    "orange": "bg-orange-600",
    "darkCyan": "bg-cyan-800"
  }
  const textColorVariants = {
    "white": "text-white",
    "limeGreen": "text-[#bada55]",
    "orange": "text-orange-600",
    "darkCyan": "text-cyan-800"
  }
  const textHoverColorVariants = {
    "white": "hover:text-white",
    "limeGreen": "hover:text-[#bada55]",
    "orange": "hover:text-orange-600",
    "darkCyan": "hover:text-cyan-800"
  }

  // tried to make the color check here instead of repeating it everytime I need to specify the theme color but didn't work
  // maybe because tailwind generate stylesheet for every componenet infividually ? IDK
  // I guess I'll have to stick with this repeatitive code till I find a way out
  const colorCode = colorVariants[color] ? colorVariants[color] : "#fff"
  return (
    <div>
        <ProjectStar 
            controls={controls}
            bgColorVariants={bgColorVariants}
            textColorVariants={textColorVariants}
            ColorVariants={colorVariants}
            colorCode={colorCode}
            color={color}
            date={date}
            direction={direction}>

            <ConnectingLines colorCode={colorCode}
            direction={direction} />

            <ProjectCard controls={controls} 
                img={img} 
                title={title}
                description={description}
                color={color}
                bgColorVariants={bgColorVariants}
                textHoverColorVariants={textHoverColorVariants}/>
                    
        </ProjectStar>
  </div>
  )
}

export default ProjectLayout
