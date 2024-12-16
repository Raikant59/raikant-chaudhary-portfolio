import React from 'react'
import { SiFlutter,SiFirebase,SiDart,SiGit,SiGithub,SiOpencv,SiTensorflow } from 'react-icons/si';
import { FaJava, } from 'react-icons/fa';

const skillIcons = [
    { icon:<SiFlutter size={110}/>,label:"Flutter"},
    { icon:<SiDart size={110}/>,label:"Dart"},
    { icon:<SiFirebase size={110}/>,label:"Firebase"},
    { icon:<FaJava size={110}/>,label:"Java"},
    { icon:<SiGit size={110}/>,label:"Git"},
    { icon:<SiGithub size={110}/>,label:"GitHub"},
    { icon:<SiOpencv size={110}/>,label:"Opencv"},
    { icon:<SiTensorflow size={110}/>,label:"Tensorflow"},
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                 <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
                 <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                  {skillIcons.map((skill, index) => (
                     <div
                         key={index}
                         className='h-[150px] w-[160px] md:h-[200px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl '>
                                  {skill.icon}
                                  <p className='mt-2'>{skill.label}</p>

                     </div>
                  ))}
                  </div> 
        </div>

    </div>
  )
}

export default Skills