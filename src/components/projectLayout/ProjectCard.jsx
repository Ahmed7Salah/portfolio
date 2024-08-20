import { motion } from "framer-motion"

const ProjectCard = ({ controls, title, description, img, color, bgColorVariants, textHoverColorVariants }) => {
  
  return (
      <motion.div className={`flex flex-col ${bgColorVariants[color] ? bgColorVariants[color] : "bg-white" } 
      justify-around px-4 py-2 text-center rounded-md w-project h-project`}>
          <h1 className='text-lg font-bold'>Project Name: {title}</h1>
          <p className='text-sm'>{description}</p>
          <motion.a href="supraflow.com"
          target='_blank'
          className='flex justify-center cursor-pointer'
          onHoverStart={() => controls.start("hovered")}
          onHoverEnd={() => controls.start("unhovered")}
          >
            <motion.div className={`absolute z-10 w-32 h-10 pt-1 font-bold border-2 border-black rounded-full opacity-0
            hover:bg-black ${textHoverColorVariants[color] ? textHoverColorVariants[color] : "hover:text-white" }`}
            transition={{
              duration: 0.2,
            }}
            variants={{
              hovered: {
                x: "0px",
                opacity: 1,
              },
              unhovered: {
                x: "-20px",
                opacity: 0,
              }}}
              animate={controls}>Preview</motion.div>
            <motion.div
            className='flex items-center justify-center space-x-1'
            transition={{
              duration: 0.2,
            }}
            variants={{
              hovered: {
                x: "20px",
                opacity: 0,
              },
              unhovered: {
                x: "0px",
                opacity: 1,
            }}}
            >
              <img src={img} 
              className='h-9'
              alt='SupraFlow_Logo' />
              <h1 className='font-bold'>{title}</h1>
            </motion.div>
          </motion.a>
        </motion.div>
  )
}

export default ProjectCard
