"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="bg-black">
    <div className="max-w-[1200px] mx-auto" id="about">
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">About 
            <span className="text-orange-400"> Me</span>
        </h1>
       <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">


            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                  <div className="flex flex-row p-6">
                    <Image src={book} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Education</h2>
                        <p className="text-lg text-white/70 mt-2 ">I am Raikant Chaudhary, a second-year B.Tech student at Galgotias University with skills in Java, Data Structures & Algorithms, Flutter, and Firebase. I love building mobile and web applications, solving real-world problems, and exploring new technologies.</p>
                    </div>
                  </div>
            </div>
 

            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                  <div className="flex flex-row p-6">
                    <Image src={finance} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Problem Solving</h2>
                        <p className="text-lg text-white/70 mt-2 ">I have a good command on DSA. I approach challenges with a logical/systematic mindset. Solved more than 600+ problems on Naukri Code 360</p>
                    </div>
                  </div>
            </div>
            

            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div> 
                  <div className="flex flex-row p-6">
                    <Image src={card} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Experience</h2>
                        <p className="text-lg text-white/70 mt-2 ">I did a Intership in Pregrad as a Community Leader where I enhance my leadership skill and also learn how to communicate in a team.</p>
                    </div>
                  </div>
            </div>


            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                  <div className="flex flex-row p-6">
                    <Image src={pc} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Technical Skills</h2>
                        <p className="text-lg text-white/70 mt-2">
                            <strong>Programming Languages:</strong> Java, Dart, C++ <br />
                            <strong>Libraries/Frameworks:</strong> Flutter, Firebase, Threejs<br />
                            <strong>Tools/Platforms:</strong> Git, GitHub, VsCode, Android Studio, Postman <br />
                            <strong>Databases:</strong> Firebase Firestore, Firebase Database, SQL
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