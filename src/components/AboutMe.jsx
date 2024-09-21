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
            I'm a passionate full-stack web developer with a proven track record of creating innovative and visually stunning websites
            that drive results. With a deep understanding of modern web technologies, I'm dedicated to delivering high-quality solutions
            that exceed your expectations. My expertise lies in crafting dynamic and engaging websites that not only look great but also
            provide a seamless user experience. I'm proficient in a wide range of technologies, including React, Next.js, Node.js, Express.js,
            and Tailwind CSS, allowing me to build custom web applications tailored to your unique requirements.
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