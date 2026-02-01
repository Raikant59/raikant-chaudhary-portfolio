"use client";
import Image from "next/image";
import {motion} from "framer-motion";
import insta from "../assets/Project1.jpg";
import Pace from "../assets/PACE.png";
import news from "../assets/newsapp.jpg";
import Apna from "../assets/Chatbot.jpg";
import Food from "../assets/FoodCateringApp.jpeg"

const projects = [
    {
        title:"PACE in the Classrooms",
        desc:"PACE in the Classroom is an AI-powered educational platform that simplifies NASA’s PACE satellite data for students and teachers. I worked on UI/UX, API integration, and AI, building features like an AI chatbot, interactive quizzes, and real-time data visualizations to enhance ocean literacy and environmental awareness.",
        devstack:" React.js, Three.js, Tailwind CSS, MongoDB, Express.js, Redux, NASA Earthdata API, LLMs API Integration",
        link:"https://pace-in-classroom.vercel.app/",
        git:"https://github.com/Raikant59/PACE-IN-CLASSROOMs",
        src: Pace,
    },
    {
        title:"Apna AI",
        desc:"APNA AI is a cross-platform AI chatbot built with Flutter and OpenAI’s GPT models, delivering fast, natural, and context-aware conversations. I implemented optimized UI rendering, asynchronous API handling, and response caching to ensure smooth performance, supporting 100+ concurrent users across platforms.",
        devstack:"Flutter, OpenAI APIs, Firebase, Dart, Android Studio",
        link:"https://github.com/Raikant59/Apna-AI",
        git:"https://github.com/Raikant59/Apna-AI",
        src: Apna,
    },
        {
        title: "Food Catering App",
        desc:"Food Catering App is a responsive Flutter application built from Figma designs, featuring platter selection, order flow, and review screens. I implemented dynamic guest-based pricing, smooth page and item animations, and input validations to ensure a seamless, production-ready ordering experience across devices.",
        devstack:" Flutter, Dart, Android Studio",
        link:"https://github.com/Raikant59/Food-Catering-App",
        git:"https://github.com/Raikant59/Food-Catering-App",
        src: Food,
    },
    {
        title: "Social Media App - Instagram Clone",
        desc: "Social Media App is a fully responsive, real-time application supporting Android, iOS, and Web. It features secure authentication, post sharing with likes and comments, user search and follow system, and live updates for posts, followers, and interactions—all synced instantly in real time.",
        devstack:"Flutter, Dart, Firebase, Provider, Android Studio",
        link:"https://github.com/Raikant59/Social-Media-App",
        git:"https://github.com/Raikant59/Social-Media-App",
        src: insta,
    },
    {
        title: "News App",
        desc: "The News App is a Flutter-based mobile application that provides real-time news updates from around the world, using NewsAPI to fetch the latest articles. It features a responsive design and a user-friendly, minimalistic interface for easy navigation across various news categories.",
        devstack:" Flutter, Dart, NewsAPI, Android Studio",
        link:"https://github.com/Raikant59/News-App",
        git:"https://github.com/Raikant59/News-App",
        src: news,
    },
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