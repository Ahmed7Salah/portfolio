
import ProjectStar from './ProjectStar'
import ConnectingLines from './ConnectingLines'
import ProjectCard from './ProjectCard'
import { useAnimationControls } from 'framer-motion';

const ProjectLayout = ({ title, description, img, color, direction, date, className, link }) => {
  const controls = useAnimationControls();
  const colorVariants = {
    "white": "#fff",
    "limeGreen": "#bada55",
    "orange": "#ea580c",
    "darkCyan": "#155e75",
    "teal": "#319795"
  }
  const bgColorVariants = {
    "white": "bg-white/85",
    "limeGreen": "bg-[#bada55]",
    "orange": "bg-orange-600",
    "darkCyan": "bg-cyan-800",
    "teal": "bg-teal-500"
  }
  const textColorVariants = {
    "white": "text-white/85",
    "limeGreen": "text-[#bada55]",
    "orange": "text-orange-600",
    "darkCyan": "text-cyan-800",
    "teal": "text-teal-500"
  }
  const textHoverColorVariants = {
    "white": "hover:text-white/85",
    "limeGreen": "hover:text-[#bada55]",
    "orange": "hover:text-orange-600",
    "darkCyan": "hover:text-cyan-800",
    "teal": "hover:text-teal-500"
  }

  // tried to make the color check here instead of repeating it everytime I need to specify the theme color but didn't work
  // maybe because tailwind generate stylesheet for every componenet infividually ? IDK
  // I guess I'll have to stick with this repeatitive code till I find a way out
  const colorCode = colorVariants[color] ? colorVariants[color] : "#fff"
  return (
    <div className={className}>
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
                link={link}
                textHoverColorVariants={textHoverColorVariants}/>
                    
        </ProjectStar>
  </div>
  )
}

export default ProjectLayout
