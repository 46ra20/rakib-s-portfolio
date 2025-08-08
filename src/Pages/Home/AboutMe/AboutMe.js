import React from "react";
// import picture from "../../../Assets/Images/my_newPic.png";
import picture from "../../../Assets/Images/my_newPic.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="my-10">
      <div>
        <h2 className="divider mb-8 text-3xl font-bold">About ME</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto my-10">
        <div className="mx-2 md:mx-0 md:w-4/4 text-left">
          <p className="text-justify">
            Assalamualaikum,
            <br />
            Hello, everyone! I’m Md Rakib Bhuiyan, currently pursuing a degree
            in Computer Science and Engineering at the University of Creative
            Technology, Chattogram. I’m deeply passionate about technology and
            the impact it has on shaping the future. For me, programming is more
            than just a career path — it’s a way to bring innovative ideas to
            life and solve real-world problems. Throughout my academic journey,
            I have developed strong technical skills, with a focus on modern web
            development and software engineering. I enjoy working with both
            front-end and back-end technologies, and I’m constantly exploring
            new tools and frameworks to enhance my skill set. I believe in the
            power of collaboration and knowledge sharing, which is why I’m eager
            to connect with fellow tech enthusiasts to exchange ideas, tackle
            challenges, and learn from each other. Whether it’s building web
            applications, solving complex coding problems, or staying updated
            with the latest trends in technology, I’m always driven by a desire
            to grow and contribute to the ever-evolving tech landscape. Top 5
            Skills: Python: Proficient in building efficient, scalable
            applications and automating tasks. Django: Expertise in developing
            robust, secure web applications using this high-level Python
            framework. Django REST Framework: Skilled in building powerful and
            flexible APIs to connect and manage backend services. JavaScript:
            Strong command of JavaScript for creating dynamic, interactive
            front-end experiences. React.js: Experienced in building responsive,
            user-friendly interfaces with React, focusing on component-based
            architecture and performance. I’m excited to continue learning and
            working with these technologies, and I look forward to connecting
            with like-minded individuals who share a passion for innovation and
            problem-solving.
          </p>
        </div>
        <div className="mx-3 md:mx-0">
          <img
            src={picture}
            alt="about me"
            className="rounded-tr-3xl rounded-bl-3xl md:w-4/4 block mx-auto my-8"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
