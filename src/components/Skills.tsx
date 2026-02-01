import React from 'react'
import { SiFlutter,SiFirebase,SiDart,SiGit,SiGithub,SiSelenium,SiMysql,SiPython,SiAndroidstudio,SiVisualstudiocode,SiPostman } from 'react-icons/si';
import { FaJava, } from 'react-icons/fa';

const skillIcons = [
    { icon:<FaJava size={110}/>,label:"Java"},
    { icon:<SiFlutter size={110}/>,label:"Flutter"},
    { icon:<SiDart size={110}/>,label:"Dart"},
    { icon:<SiFirebase size={110}/>,label:"Firebase"},
    { icon:<SiGit size={110}/>,label:"Git"},
    { icon:<SiGithub size={110}/>,label:"GitHub"},
    { icon:<SiMysql size={110}/>,label:"MySQL"},
    { icon:<SiPython size={110}/>,label:"Python"},
    { icon:<SiSelenium size={110}/>,label:"Selenium"},
     { icon:<SiPostman size={110}/>,label:"Postman"},
    { icon:<SiAndroidstudio size={110}/>,label:"Android Studio"},
    { icon:<SiVisualstudiocode size={110}/>,label:"VS Code"},
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className='text-white w-[500px] md:min-w-[1300px] mx-auto p-8 text-center'>
                 <h2 className='text-7xl font-bold mb-4'>What I Do</h2>
                 <div className='grid grid-cols-3 md:grid-cols-6 gap-6'>
                  {skillIcons.map((skill, index) => (
                     <div
                         key={index}
                         className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl '>
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