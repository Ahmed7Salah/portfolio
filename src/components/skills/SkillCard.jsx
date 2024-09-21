import React from 'react'

const SkillCard = ({ img, name }) => {
  return (
    <div className="flex items-center justify-center duration-200 ease-in-out rounded-sm cursor-pointer hover:scale-150 size-20">
        <img
            src={img}
            alt={name}
            className="w-16" />
    </div>
  )
}

export default SkillCard
