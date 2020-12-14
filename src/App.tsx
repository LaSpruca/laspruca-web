import React from "react";
import Card from "./components/Card";

import gh from "./assets/image/gh.svg";
import reddit from "./assets/image/reddit.svg";
import logo from "./assets/image/logo.svg";
import "./assets/style/App.scss";

const App = () => (
  <div className="app">
    <div className="name-wrapper">
      <div className="name">
        <img src={logo} alt="" className="logo" />
        <h3>Nathan Hare</h3>
        <p>LaSpruca</p>
        <div className="social">
          <a href="https://github.com/laspruca">
            <img src={gh} alt="" />
          </a>
          <a href="https://www.reddit.com/user/laspruca">
            <img src={reddit} alt="" />
          </a>
        </div>
      </div>
      <div className="about-me-wrap">
        <div className="about-me">
          <div className="content">
            <div className="left">
              <h1>Nathan Hare</h1>
              <h2>Probably a human, probably</h2>
              <ul>
                <li>
                  <h3>
                    <span role="img" aria-label="Computer">
                      💻
                    </span>
                    Software Developer
                  </h3>
                </li>
                <li>
                  <h3>
                    <span role="img" aria-label="Open Book">
                      📖
                    </span>
                    Student
                  </h3>
                </li>
                <li>
                  <h3>
                    <span role="img" aria-label="New Zealand Flag">
                      🇳🇿
                    </span>
                    Whangarei, New Zealand
                  </h3>
                </li>
              </ul>
            </div>
            <div className="right">
              <p>
                I am a Year 11 student at Whangarie Boys' High School, a
                swimming coach for Kamo Amateur Swimming Club, a member of
                Questionable Research Labs, and a developer.
              </p>
              <p>
                At School, I take Electronics, Digital Technology, Maths,
                Science, Economics, and English. I have competed in Science
                Fair, and have managed to win awards at the regional competition
                twice now. At Questionable, I help many of the younger attendees
                with their projects as best I can.
              </p>
              <p>
                As a developer, I mostly use programming languages such as Rust,
                which is my preferred atm, TypeScript, Java, C++. My preferred
                areas of development are: Native Apps and Backend (NOT in php).
                I work with, Flutter, React (using TypeScript), Unity Engine,
                Linux, Firebase, GitHub, Actix Web, Spigot and others.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <h1>Recent Projects</h1>
        <div className="cards">
          <Card
            title="My Protfolio Website"
            sub="This website"
            subLinks={[
              { href: "https://laspruca.nz/", text: "Website" },
              {
                href: "https://github.com/LaSpruca/laspruca-web",
                text: "GitHub Repo",
              },
            ]}
          >
            A website about me, what you are looking at.
          </Card>
          <Card
            title="TCPlugin"
            sub="Technocraft server plugin"
            subLinks={[
              {
                href: "https://github.com/laspruca/laspruca-tk",
                text: "GitHub Repo",
              },
            ]}
          >
            A plugin to help with the admin of the Technocraft Survival Server,
            with features to meet our administrative and entertainment needs.
          </Card>
          <Card
            title="brrrLang"
            sub="A weired programming language"
            subLinks={[
              {
                href: "https://github.com/brrrLang/brrrlang",
                text: "GitHub Repo",
              },
            ]}
          >
            A small side project about making a compiled, statically typed
            programming language
          </Card>
          <Card
            title="The Big Send"
            sub="Science Fair 2020"
            subLinks={[
              {
                href: "https://github.com/laspruca/thebigsend",
                text: "GitHub Repo",
              },
            ]}
          >
            This was my science fair project for 2020. It was a simple app
            designed to help event/club organizers, or anyone who may need to,
            send out a text message to a large number of people.
          </Card>
          <Card
            title="Snake"
            sub="Snake with rust and wasm"
            subLinks={[
              { href: "https://snake.laspruca.nz", text: "Website" },
              {
                href: "https://github.com/LaSpruca/SNEEEK",
                text: "GitHub Repo",
              },
            ]}
          >
            A small snake game that I made because I was board. It uses rust and
            web assembly for some parts because I was getting fed up with
            writing the code in JS.
          </Card>
          <Card
            title="EsquaredG"
            sub="Science Fair 2021"
            subLinks={[
              {
                href:
                  "https://github.com/Questionable-Research-Labs/EsquaredG_PicoscopeMonitering",
                text: "GitHub Repo",
              },
            ]}
          >
            This a collaboration project between myself and Jasper Miller-Waugh,
            and will be our entry for the 2021 Science Fair. It focuses on using
            an oscilloscope as a EEG device, allowing us to multiplex channels
            together, making large channel EEG cheeper.
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default App;
