import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const DivOnScroll = ({ delay = 0, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    useEffect(() => {
        if(isInView) {
            controls.start("show")
        }
    }, [isInView, controls])

  return (
    <motion.div ref={ref}
    initial="hide"
    animate={controls}
    variants={{
        show: { opacity: 1, x: 0 },
        hide: { opacity: 0, x: "-100%" },
    }}
    transition={{ duration: 0.8, delay: delay, ease: "easeInOut" }}>
        {children}
    </motion.div>
  )
}

export default DivOnScroll
