import React from 'react'

const SkillsCmp = ({ img, className, p }) => {
    return (
        <div className='flex flex-col place-items-center  animate__animated animate__zoomInDown'>
            <img src={img} className='h-10' alt="" />
            <p className={className}>{p}</p>
        </div>
    )
}

export default SkillsCmp
