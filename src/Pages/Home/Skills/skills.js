import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      <div className="container">
        <p className="text-left text-3xl font-bold">Skills & Experience</p>
        <div className="grid grid-cols-2 gap-4  my-2">
            <div className="text-left">
                <p className="text-xl font-semibold">C</p>
                <ProgressBar completed={55} bgColor="#28A745"  height="15px"/>
            </div>
            <div className="text-left">
                <p className="text-xl font-semibold">C++</p>
                <ProgressBar completed={50} bgColor="#5A9BD5"  height="15px"/>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4  my-2">
            <div className="text-left">
                <p className="text-xl font-semibold">Python</p>
                <ProgressBar completed={50} bgColor="#FFC107"  height="15px"/>
            </div>
            <div className="text-left">
                <p className="text-xl font-semibold">Django</p>
                <ProgressBar completed={45} bgColor="#6610F2"  height="15px"/>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4  my-2">
            <div className="text-left">
                <p className="text-xl font-semibold">HTML</p>
                <ProgressBar completed={85} bgColor="#17A2B8"  height="15px"/>
            </div>
            <div className="text-left">
                <p className="text-xl font-semibold">CSS</p>
                <ProgressBar completed={85} bgColor="#4CAF50"  height="15px"/>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
            <div className="text-left">
                <p className="text-xl font-semibold">JAvaScript</p>
                <ProgressBar completed={75} bgColor="#FF9800" height="15px"/>
            </div>
            <div className="text-left">
                <p className="text-xl font-semibold">Bootstrap & Tailwind</p>
                <ProgressBar completed={65} bgColor="#03A9F4" height="15px"/>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
            <div className="text-left">
                <p className="text-xl font-semibold">ReactJS</p>
                <ProgressBar completed={65} bgColor="#00BCD4" height="15px"/>
            </div>
            <div className="text-left">
                <p className="text-xl font-semibold">NodeJS</p>
                <ProgressBar completed={60} bgColor="#3F51B5" height="15px"/>
            </div>
        </div>
      </div>
      <div className="text-left mt-5 md:mt-0">
        <p className="text-left text-3xl font-bold">Education <span className="border rounded-lg p-1 bg-purple-900">Experience</span></p>
        <p className="py-2 text-xl font-semibold">University of Creative Technology In Chattrogram. <small className="font-normal">(2024-Running)</small></p>
        <p className="py-2 text-xl font-semibold">Badiul Alam Science And Technology Institute. <small className="font-normal">(2015-2023)</small></p>
      </div>
    </div>
  );
};

export default Skills;
