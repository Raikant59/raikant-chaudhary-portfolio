"use client";
import Image from "next/image";
import {motion} from "framer-motion";
import insta from "../assets/Project1.jpg";
import portfo from "../assets/Project3.png";
import legallink from "../assets/Project2.png";
import Pace from "../assets/PACE.png";
import news from "../assets/newsapp.jpg";
import Apna from "../assets/Chatbot.jpg"

const projects = [
    {
        title: "News App",
        desc: "The News App is a Flutter-based mobile application that provides real-time news updates from around the world, using NewsAPI to fetch the latest articles. It features a responsive design and a user-friendly, minimalistic interface for easy navigation across various news categories.",
        devstack:" Flutter, Dart, NewsAPI, Android Studio",
        link:"https://github.com/Raikant59/News-App",
        git:"https://github.com/Raikant59/News-App",
        src: news,
    },
    {
        title:"PACE in the Classrooms",
        desc:"I worked on UI/UX, API and AI part of this Project.PACE in the Classroom is an interactive educational website designed to make NASA's PACE satellite data accessible and engaging for students and teachers. The platform features a chatbot powered by AI to answer questions, along with puzzle games, quizzes, and real-time satellite data visualizations. The website offers tools for teachers to manage lessons and track progress, while also providing AI-generated videos to simplify complex topics. The project aims to enhance ocean literacy and environmental awareness by making scientific data accessible and fun for all age groups.",
        devstack:" React.js, Three.js, Tailwind CSS, MongoDB, Express.js, Redux, NASA Earthdata API, ChatGPT Integration",
        link:"https://pace-in-classroom.vercel.app/",
        git:"https://github.com/Raikant59/PACE-IN-CLASSROOMs",
        src: Pace,
    },
    {
        title:"Apna AI",
        desc:"APNA AI is a conversational AI chatbot developed using Flutter and OpenAI's GPT models. It provides real-time, context-aware responses to user queries, delivering an engaging and interactive experience with accurate, human-like answers powered by advanced GPT models.",
        devstack:"Flutter, OpenAI APIs, Firebase, Dart, Android Studio",
        link:"https://github.com/Raikant59/Apna-AI",
        git:"https://github.com/Raikant59/Apna-AI",
        src: Apna,
    },
    {
        title: "Instagram-Clone",
        desc: "A completely Responsive Instagram App- Works on Android, iOS & Web! |  Features :- Responsive Instagram UI, Email & Password Authentication, Share Posts with Caption, Display Posts with Caption, Like & Comment on Posts, Search Users, Follow Users, Display User Posts, Followers & Following, EVERYTHING REAL TIME, Sign Out",
        devstack:"Flutter, Dart, Firebase",
        link:"https://github.com/Raikant59/Instagram-Clone---Flutter",
        git:"https://github.com/Raikant59/Instagram-Clone---Flutter",
        src: insta,
    },
    {
        title:"Portfolio Website Using Flutter",
        desc:"It is a basic Portfolio website built to practise the flutter Widgets, Gradient and Animations. Any Student that was beginner in Flutter can enhance its flutter Skills by practising this project",
        devstack:"Flutter, Dart",
        link:"https://github.com/Raikant59/Portfolio_in_flutter_example",
        git:"https://github.com/Raikant59/Portfolio_in_flutter_example",
        src: portfo,
    }
]

const Projects = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">Selected
            <span className="text-orange-400"> Projects</span>
        </h1>
         <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
             {
                projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{opacity: 0,y: 75}}
                      whileInView={{opacity: 1, y: 0 }}
                      viewport={{once:true}}
                      transition={{duration: 0.5,delay: 0.25 }}
                      className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >
                       <div className="space-y-2 max-w-[550px]">
                          <h2 className="text-7xl my-4 text-white/70">{`0${index+1}`}</h2>
                          <h2 className="text-4xl">{project.title}</h2>
                          <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                          <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
                          <div className="w-64 h-[1px] bg-gray-400 my-4">
                            <a href={project.link} className="mr-6">Link</a>
                            <a href={project.git}>Git</a>
                          </div>
                       </div>

                       <div className="flex justify-center items-center">
                        <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border
                                                                     rounded border-gray-700 " />
                       </div>
                    </motion.div>
                ))}

         </div>

    </div>
    
  )
}

export default Projects