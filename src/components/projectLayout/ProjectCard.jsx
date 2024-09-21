import { motion } from "framer-motion"
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const ProjectCard = ({ controls, title, description, img, color, bgColorVariants, textHoverColorVariants }) => {
  // Project title typewriter
  const [titleTyped, titleHelper] = useTypewriter({
    words: [`Project Name: ${title}`],
    typeSpeed: 10,
  })
  // Project description typewriter
  const [descriptionTyped, descriptionHelper]  = useTypewriter({
    words: [description],
    typeSpeed: 18,
    onLoopDone: () => controls.start("spawn")
  })
  return (
      <motion.div className={`flex flex-col ${bgColorVariants[color] ? bgColorVariants[color] : "bg-white/85" } 
      justify-around px-4 py-2 text-center rounded-md w-project h-project`}>
          {/* Hide cursor when done typing */}
          <h1 className='text-lg font-bold'>{titleTyped}{titleHelper.isDone ? '' : <Cursor />}</h1>

          {/* Hide cursor when done typing */}
          <p className='text-sm'><span>{descriptionTyped}</span>{descriptionHelper.isDone || !descriptionHelper.isType ? '' : <Cursor />} </p>

          {/* Preview link */}
          <motion.a href="supraflow.com"
          target='_blank'
          className='flex justify-center cursor-pointer'
          onHoverStart={() => controls.start("hovered")}
          onHoverEnd={() => controls.start("unhovered")}
          transition={{
            duration: 0.2,
          }}
          variants={{
            spawn: {
              y: "0px",
              opacity: 1,
              zIndex: 10
            }}}
            initial={{
              y: "-30px",
              opacity: 0,
              zIndex: -10
            }}
          >
            {/* Preview Button */}
            <motion.div className={`absolute z-10 w-32 h-10 pt-1 font-bold border-2 border-black rounded-full opacity-0
            hover:bg-black ${textHoverColorVariants[color] ? textHoverColorVariants[color] : "hover:text-white/85" }`}
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

            {/* Project Logo */}
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
