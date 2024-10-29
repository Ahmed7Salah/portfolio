import { Cursor, useTypewriter } from "react-simple-typewriter"
import DivOnScroll from "./helpers/DivOnScroll"


const AboutMe = () => {
    // const [aboutMeTitleTyped] = useTypewriter({
    //     words: [`About Me`],
    //     typeSpeed: 1,
    //   })
    const aboutMeTitleTyped = `About Me`
      const [aboutMeContentTyped] = useTypewriter({
        words: [`
            I'm a Computer Systems Engineering student and a full-stack MERN developer passionate about creating
            dynamic, high-quality web applications. My technical toolkit includes React, Node.js, Express.js, MongoDB,
            Redux, and TailwindCSS, and I thrive on learning and adapting to new technologies. Through various projects,
            I’ve been able to showcase both my technical skills and creative problem-solving abilities, consistently aiming
            to deliver impactful and engaging user experiences.
            `],
        typeSpeed: 5,
      })

  return (
    <div className="flex flex-col items-center w-full text-2xl text-white/85 mb-9">
      <DivOnScroll delay={0.5}>
        <h2 className="py-16 text-center text-7xl">{aboutMeTitleTyped}<Cursor /></h2>
      </DivOnScroll>

      <DivOnScroll delay={0.5}>
        <div className="flex w-full p-16 space-x-16 h-lvh justfiy-center">
            <p className="w-1/2 text-left">
                {aboutMeContentTyped}
            </p>
            {/* make the image appear after about me is fully typed */}
            <img src={require("../assets/aboutme.jpg")} alt="learn,build,innovate" className="w-1/2 opacity-80 rounded-2xl" />
        </div>
      </DivOnScroll>
    </div>
  )
}

export default AboutMe
