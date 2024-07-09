"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:atubijessica8@gmail.com" className="button"
              >Contact Me</a
              >
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I&apos;m</small> Jessica Atubi</h1>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              consequatur eius atque sapiente rerum.
              <span>
                ut in quam tempore quia quos aperiam qui vero dolore saepe!
              </span>
            </p>
            <div className="call-to-action">
              <a href="#" className="button black">View Resume</a>
              <a href="mailto:atubijessica8@gmail.com" className="button white"
              >Contact Me
              </a>
            </div>
            <div className="social-links">
              <a href="">
                <i className="fa-brands fa-github fa-2xl"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in fa-2xl"></i>
              </a>
            </div>
          </div>

          <div className="hero-yellow">
            <img
              src="./assets/IMG-2225__1_-removebg-preview.png"
              alt="Jessica Atubi"
              width="100%"
            />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./assets/html-icon.png" alt="" />
              <img src="./assets/css-icon.jpeg" alt="" />
              <img src="./assets/javascript_icon.png" alt="" />
              <img src="./assets/sass-icon.png" alt="" />
              <img src="./assets/React-icon.png" alt="" />
              <img src="./assets/nextjs-icon.png" alt="" />
              <img src="./assets/vscode-icon.png" alt="" />
              <img src="./assets/typescript-icon.png" alt="" />
              <img src="./assets/bootstrap-icon.jpeg" alt="" />
              <img src="./assets/github_icon.png" alt="" />
              <img src="./assets/html-icon.png" alt="" />
              <img src="./assets/css-icon.jpeg" alt="" />
              <img src="./assets/javascript_icon.png" alt="" />
              <img src="./assets/sass-icon.png" alt="" />
              <img src="./assets/React-icon.png" alt="" />
              <img src="./assets/nextjs-icon.png" alt="" />
              <img src="./assets/vscode-icon.png" alt="" />
              <img src="./assets/typescript-icon.png" alt="" />
              <img src="./assets/bootstrap-icon.jpeg" alt="" />
              <img src="./assets/github_icon.png" alt="" />
            </div>
          </div>
        </section>
        <section className="skills container" id="skills">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Vue</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Nodejs</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                debitis repellendus quis consequuntur ipsum ipsa nemo! Facere odit
                placeat ratione!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                unde dolor illo nulla vero esse illum dolorum minima alias
                deleniti?
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./assets/code.avif" alt="workplace-1" width="100%" />
                  <figcaption>Workplace - Winner's Chapel Cambridge</figcaption>
                </div>
              </figure>
              <h3>Front-End Developer</h3>
              <div>2021 - 2022</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                nihil molestias quidem odit, dolorem nam.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./assets/work_experience1.avif"
                    alt="workplace-2"
                    width="100%"
                  />
                  <figcaption>
                    Workplace - Workplace - Truimphant Radio Communications
                  </figcaption>
                </div>
              </figure>
              <h3>Full-Stack Developer</h3>
              <div>2021 - 2022</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate sint dignissimos consequatur mollitia expedita eum.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./assets/team_photo.avif"
                    alt="workplace-3"
                    width="100%"
                  />
                  <figcaption>Workplace - Tritek Consulting Limited</figcaption>
                </div>
              </figure>
              <h3>Back-End Developer</h3>
              <div>2021 - 2022</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt, quia. Illo magni quo eos ad?
              </p>
            </article>
          </div>
        </section>
        <section className="bento container" id="projects">
          <h2>
            <small> Previous </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              <img src="./assets/project_1.jpeg" alt="" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./assets/project-3.jpeg" alt="" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./assets/project-2.jpg" alt="" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./assets/project-4.jpeg" alt="" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./assets/project-7.webp" alt="" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./assets/project_6.png" alt="" width="100%" />
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small> Talk to me </small>
            Chatbot
          </h2>
          <div className="chat-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>
                I've put together a chatbot here which knows all my skills, my
                experience and has a copy of my CV/Resume. You can use it to ask
                questions about me to get a better idea of who I am and what I've
                done
              </p>
              <p>
                You can also download my resume here if you want to take a look at
                it. I'm currently looking for new opportunities so if you have a
                project you think I'd be a good fit for, please be in touch!
              </p>
              <a href="">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  <li>
                    <span className="avatar bot">AI</span>
                    <div className="message">
                      Hi, I'm a friendly chatbot that lets you interact with this
                      portfolio and CV. How can i help.
                    </div>
                  </li>
                  <li>
                    <span className="avatar user">User</span>
                    <div className="message">
                      Hello, I have a question to ask you about this
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-message">
                <input
                  type="text"
                  placeholder="Hey Jessica, what skills are you best at"
                />
                <button className="button black">Send</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
