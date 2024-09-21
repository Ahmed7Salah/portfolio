import React from 'react'
import SkillCard from './skills/skillCard'

const SkillsOverview = () => {
  return (
    <div className='flex items-center justify-center space-x-4 h-60'>
      {/* add right and left chevrons to move skills */}
      {/* should I add sound to hovering over skills like it's ...*/}
      <SkillCard
        img={require("../assets/skills/git.png")}
        name="Git" />
      <SkillCard
        img={require("../assets/skills/typescript.png")}
        name="Typescript" />
      <SkillCard
        img={require("../assets/skills/tailwind.png")}
        name="Tailwind" />
      <SkillCard
        img={require("../assets/skills/react.png")}
        name="React" />
      <SkillCard
        img={require("../assets/skills/redux.png")}
        name="Redux" />
      <SkillCard
        img={require("../assets/skills/nodejs.png")}
        name="Nodejs" />
      <SkillCard
        img={require("../assets/skills/mongodb.png")}
        name="Mongodb" />
      {/* <SkillCard
        img={require("../assets/skills/nextjs.png")}
        name="Nextjs" /> */}
        {/* <SkillCard
          img={require("../assets/skills/express.png")}
          name="Express" /> */}
    </div>
  )
}

export default SkillsOverview
