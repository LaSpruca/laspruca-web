<script context="module" lang="ts">
  export async function preload(page, session) {
    const res = await this.fetch(`projects/recent.json`);
    const pages: ProjectPage[] = await res.json();

    if (res.status === 200) {
      return { pages };
    } else {
      this.error(res.status, res.message);
    }
  }
</script>

<script lang="ts">
  import Card from "../components/Card.svelte";
  import gh from "../assets/image/gh.svg";
  import reddit from "../assets/image/reddit.svg";
  import logo from "../assets/image/logo.svg";
  import discord from "../assets/image/discord.svg";
  import type { ProjectPage } from "../_types";

  export let pages: ProjectPage[];
</script>

<svelte:head>
  <title>LaSpruca - Semi-Professional Googler</title>
</svelte:head>

<div class="app">
  <div class="name-wrapper">
    <div class="name">
      <img src={logo} alt="" class="logo" />
      <h3>Nathan Hare</h3>
      <p>LaSpruca</p>
      <div class="social">
        <a href="https://github.com/laspruca" target="_blank">
          <img src={gh} alt="My GitHub" width="43" height="43" />
        </a>
        <a href="https://www.reddit.com/user/laspruca" target="_blank">
          <img src={reddit} alt="My Reddit" width="43" height="43" />
        </a>
        <a
          href="https://discordapp.com/users/403646951259635713"
          target="_blank"
        >
          <img src={discord} alt="My Discord" width="43" height="43" />
        </a>
      </div>
      <a href="#about-me-wrap" id="down-arrow">↓</a>
    </div>

    <hr id="e" />

    <div id="about-me-wrap">
      <div class="about-me">
        <div class="content">
          <div class="left">
            <h1>Nathan Hare</h1>
            <h2>Semi-Professional Googler</h2>
            <ul>
              <li>
                <h3>
                  <span role="img" aria-label="Computer"> 💻 </span>
                  Software Developer
                </h3>
              </li>
              <li>
                <h3>
                  <span role="img" aria-label="Open Book"> 📖 </span>
                  Student
                </h3>
              </li>
              <li>
                <h3>
                  <span role="img" aria-label="New Zealand Flag"> 🇳🇿 </span>
                  Whangarei, New Zealand
                </h3>
              </li>
            </ul>
          </div>
          <div class="right">
            <p>
              I am a Year 12 student at Whangarie Boys' High School, a swimming
              coach for Kamo Amateur Swimming Club, a member of Questionable
              Research Labs, and a developer.
            </p>
            <p>
              At School, I take Electronics, Digital Technology, Maths, Physics
              and, Cemetery, and Economics. I have competed in Science Fair, and
              have won awards at the regional competition twice now. At
              Questionable, I help many of the younger attendees with their
              projects as best can.
            </p>
            <p>
              As a developer, I mostly use programming languages such as Rust,
              TypeScript, Java, C++. My preferred areas of development are:
              Native Apps and Backend. I work with, Flutter, React, Svelte,
              Sapper, Unity Engine, Linux, Firebase, GitHub, Actix Web, Spigot
              and others.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="projects">
      <h1>Recent Projects</h1>
      <div class="cards">
        {#each pages as project}
          <Card
            name="/projects/{project.slug}"
            title={project.metadata.title}
            sub={project.metadata.description}
            subLinks={project.metadata.subLinks}
          >
            {project.metadata.summary}
          </Card>
        {/each}
      </div>
      <a href="/projects">See All</a>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../assets/style/routes/index.scss";
</style>
