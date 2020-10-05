import React from 'react';
import Card from './components/Card';

import gh from './gh.svg';
import reddit from './reddit.svg';
import logo from './logo.svg';
import './App.css';

const App = () => (
    <div className="app">
        <div className="name-wrapper">
            <div className="name">
                <img src={logo} alt="" className="logo"/>
                <h3>Nathan Hare</h3>
                <p>LaSpruca</p>
                <div className="social">
                    <a href="https://github.com/laspruca"><img src={gh} alt=""/></a>
                    <a
                        href="https://www.reddit.com/user/laspruca"><img src={reddit} alt=""/></a>
                </div>
            </div>
            <div className="about-me">
                <Card title="About me">
                    Hello my name is Nathan Hare, I am a year 11 student currently studying at Whangarei Boys' High
                    School. I take Electronics, Economics, Digital Tech, Science, English and Maths. I enjoy programming
                    and experimenting with random frameworks/libraries. My preferred programming language is Rust
                    although I am competent with many others including C++, Java, C#, TypeScript/JavaScript, and Python.
                    I have experience using Unity, Unreal Engine, Blazor, React, Angular, Flutter, and the Android SDK.
                </Card>
            </div>
            <div className="projects">
                <h1>Recent Projects</h1>
                <div className="cards">
                    <Card title="Imgaine Tai Tokerau" sub="A Website for Imagine Tai Tokerau"
                          subLinks={[{href: "https://itt.laspruca.tk/", text: "Website"},
                              {href: "https://github.com/laspruca/imaginetaitokerau", text: "GitHub Reop"}]}>
                        A website for a small community hackethon in northland, that allows the organizers to customize
                        the website more than what was allowed by wardress.
                    </Card>
                    <Card title="LaSpruca.tk" sub="This website"
                          subLinks={[{href: "https://laspuca.tk/", text: "Website"},
                              {href: "https://github.com/laspruca/laspruca-tk", text:"GitHub Repo"}]}>
                        My website, brrr
                    </Card>
                    <Card title="TCPlugin" sub="Technocraft server plugin"
                          subLinks={[{href: "https://github.com/laspruca/laspruca-tk", text:"GitHub Repo"}]}>
                        A plugin to help with the admin of the Technocraft Survival Server, with random and stupid
                        features to meet our needs.
                    </Card>
                    <Card title="brrrLang" sub="A weired programming language"
                          subLinks={[{href: "https://github.com/brrrLang/brrrlang", text:"GitHub Repo"}]}>
                        A weird programming language that I came up with one day while I was bored.
                    </Card>
                    <Card title="The Big Send" sub="Science Fair 2020"
                          subLinks={[{href: "https://github.com/laspruca/thebigsend", text:"GitHub Repo"}]}>
                        This was my science fair project for 2020. It was a simple app designed to help event/club
                        organisers, or anyone who may need to, send out a text message to a large number of people.
                    </Card>
                    <Card title="Snake" sub="Snake with rust and wasm" subLinks={[
                        {href: "https://snake.laspruca.tk", text:"Website"},
                        {href: "https://github.com/LaSpruca/SNEEEK", text: "GitHub Repo"}]}>
                        GAMEING. It be snake, but snaken't. I tried using regular js but discovered that it's many qurks
                        annoyed me so I used rus and wasm.
                    </Card>
                </div>

            </div>
        </div>

    </div>
);

export default App;
