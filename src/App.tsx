import React from 'react';
import Card from './components/Card';

import gh from './assets/image/gh.svg';
import reddit from './assets/image/reddit.svg';
import logo from './assets/image/logo.svg';
import './assets/style/App.scss';

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
        <div className="content">
          <div className="left">
            <h1>Nathan Hare</h1>
            <h2>Probably a human, probably</h2>
            <ul>
              <li>
                <h3><span role="img" aria-label="Computer">💻</span>Software Developer</h3>
              </li>
              <li>
                <h3><span role="img" aria-label="Open Book">📖</span>Student</h3>
              </li>
              <li>
                <h3><span role="img" aria-label="New Zealand Flag">🇳🇿</span>Whangarei, New Zealand</h3>
              </li>
            </ul>
          </div>
          <div className="right">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.
              <br/>
              <br/>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
              original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
      <div className="projects">
        <h1>Recent Projects</h1>
        <div className="cards">
          <Card title="Imgaine Tai Tokerau" sub="A Website for Imagine Tai Tokerau"
                subLinks={[{href: "https://itt.laspruca.nz/", text: "Website"},
                  {href: "https://github.com/laspruca/imaginetaitokerau", text: "GitHub Reop"}]}>
            A website for a small community hackethon in northland, that allows the organizers to customize
            the website more than what was allowed by wardress.
          </Card>
          <Card title="My Protfolio Website" sub="This website"
                subLinks={[{href: "https://laspruca.nz/", text: "Website"},
                  {href: "https://github.com/LaSpruca/laspruca-web", text: "GitHub Repo"}]}>
            My website, brrr
          </Card>
          <Card title="TCPlugin" sub="Technocraft server plugin"
                subLinks={[{href: "https://github.com/laspruca/laspruca-tk", text: "GitHub Repo"}]}>
            A plugin to help with the admin of the Technocraft Survival Server, with random and stupid
            features to meet our needs.
          </Card>
          <Card title="brrrLang" sub="A weired programming language"
                subLinks={[{href: "https://github.com/brrrLang/brrrlang", text: "GitHub Repo"}]}>
            A weird programming language that I came up with one day while I was bored.
          </Card>
          <Card title="The Big Send" sub="Science Fair 2020"
                subLinks={[{href: "https://github.com/laspruca/thebigsend", text: "GitHub Repo"}]}>
            This was my science fair project for 2020. It was a simple app designed to help event/club
            organisers, or anyone who may need to, send out a text message to a large number of people.
          </Card>
          <Card title="Snake" sub="Snake with rust and wasm" subLinks={[
            {href: "https://snake.laspruca.nz", text: "Website"},
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
