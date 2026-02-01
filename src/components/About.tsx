"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
// import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="bg-black">
    <div className="max-w-[1200px] mx-auto" id="about">
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">About 
            <span className="text-orange-400"> Me</span>
        </h1>
       <div className="px-6 md:p-0 grid md:grid-cols-8 gap-8 place-items-center">


            <div className="w-full md:col-span-10 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                  <div className="flex flex-row p-6">
                    <Image src={book} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Education</h2>
                        <p className="text-lg text-white/70 mt-2 ">Bachelor of Technology in Computer Science Engineering, Galgotias University (CGPA: 8.63). Strong foundation in Java, Data Structures & Algorithms, and OOPs, with practical exposure to Flutter, Firebase, Web Technologies, Testing and AI-based applications.</p>
                    </div>
                  </div>
            </div>
 

            {/* <div className="w-full md:col-span-10 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                  <div className="flex flex-row p-6">
                    <Image src={finance} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Problem Solving</h2>
                        <p className="text-lg text-white/70 mt-2 ">I have a solid foundation of Data Structures & Algorithms and approach challenges with a logical and systematic mindset. 
                        <br/>I have solved <strong>400+ DSA problems</strong> on various coding platforms. 
                        <br/>Beyond coding, I have mentored <strong>200+ learners</strong>, coordinated <strong>700+ participants</strong> across 150+ teams during hackathons & interships like Code Astra Hackathon and Community Leader at Pregrad.
                        <br/>I led team problem-solving sessions, combining technical skills with leadership and collaboration to achieve results.</p>
                    </div>
                  </div>
            </div> */}
            

            <div className="w-full md:col-span-10 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div> 
                  <div className="flex flex-row p-6">
                    <Image src={card} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Experience</h2>
                        <ol className="text-lg text-white/70 mt-2">
                          <li>
                            <strong>Technical Team Member</strong> - TechnoJam Galgotias Technical Club (Dec 2024 - Present)<br/>
                            Working on technical initiatives and supporting project execution.
                          </li>
                          <br/>
                          <li>
                            <strong>Software Engineer Intern</strong> - Saivyy Technologies (Jul 2025 - Oct 2025)<br/>
                            Built scalable mobile applications and Web Applications using Flutter and Web Technologies.
                          </li>
                          <br/>
                          <li>
                            <strong>Flutter Developer</strong> - MSKARD Business Solution (Oct 2025 - Dec 2025)<br/>
                            Developed responsive Flutter apps and implemented real-time features in a hybrid setup.
                          </li>
                          <br/>
                          <li>
                            <strong>Member, Google Developers Club</strong> - Galgotias Tech Council (Oct 2024 - Sep 2025)<br/>
                            Coordinated Code Astra hackathon for 700+ participants, focusing on smooth execution and data management.
                          </li>
                          <br/>
                          <li>
                            <strong>Community Leader</strong> - Pregrad (Mar 2024 - Apr 2024)<br/>
                            Led workshops and webinars for 200+ students, simplifying complex topics and encouraging engagement.
                          </li>
                        </ol>
                    </div>
                  </div>
            </div>


            <div className="w-full md:col-span-10 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                  <div className="flex flex-row p-6">
                    <Image src={pc} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Technical Skills</h2>
                        <p className="text-lg text-white/70 mt-2">
                          <strong>Languages: </strong> Java, Dart, SQL(Basics), Python(Basics) <br/>
                          <strong>Tools/Platforms: </strong> Git, GitHub, Postman, Android Studio, Visual Studio Code, Selenium <br/>
                          <strong>Development: </strong> Flutter, Firebase, REST APIs, LLM APIs Integration <br/>
                          <strong>Core CS Fundamentals: </strong> Data Structures & Algorithms, OOPs, DBMS, Software Development Life Cycle, Software Testing
                        </p>
                    </div>
                  </div>
            </div>
       </div>
    </div>
    </div>
  )
}

export default About