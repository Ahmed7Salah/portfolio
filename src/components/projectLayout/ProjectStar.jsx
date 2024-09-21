import { motion } from "framer-motion"
import { useTypewriter } from 'react-simple-typewriter'

const ProjectStar = ( { controls, children, color, bgColorVariants, colorCode, direction, date, textColorVariants }) => {
    const directions = {
        "bottomLeft": "justify-end",
        "bottomRight": "justify-start",
    }
    const [dateTyped] = useTypewriter({
        words: [date],
        typeSpeed: 50,
      })
  return (
    <>
    <motion.div className={`relative ${bgColorVariants[color] ? bgColorVariants[color] : "bg-white/85" }
    rounded-full size-star flex ${directions[direction] ? directions[direction] : directions["bottomRight"]}`}
        animate={{
            boxShadow: [`0 0 10px 2px ${colorCode}`, `0 0 15px 6px ${colorCode}`,  `0 0 20px 10px ${colorCode}`, `0 0 30px 15px ${colorCode}`, `0 0 20px 10px ${colorCode}`, `0 0 15px 6px ${colorCode}`, `0 0 10px 2px ${colorCode}`],
        }}
        transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            times: [0, 0.2, 0.3, 0.5, 0.7, 0.8, 1],
            repeatDelay: 1,
        }}
        onHoverEnd={() => controls.start("dramaticDisappearacne")}
        >
        <motion.div className='absolute top-0 left-0 z-10 rounded-full cursor-pointer size-star' 
        onHoverStart={() => controls.start("dramaticAppearance")}
        />

        {/* Project Date */}
        <motion.div className={`absolute text-xs ${textColorVariants[color] ? textColorVariants[color] : "bg-white/85" } top-5 -left-8 text-nowrap`}>
            {dateTyped}
        </motion.div>

        <motion.div className='justify-end bg-transparent opacity-0'
            transition={{
                duration: 0.5,
            }}
            variants={{
                dramaticAppearance: {
                opacity: 1,
                display: "block"
                },
                dramaticDisappearacne: {
                opacity: 0,
                display: "none",
                }
            }}
            animate={controls}>
            {children}
        </motion.div>
    </motion.div>
    </>
  )
}

export default ProjectStar
