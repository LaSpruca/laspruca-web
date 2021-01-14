<script lang="ts">
  import Card from "../components/Card.svelte";
  import gh from "assets/image/gh.svg";
  import reddit from "assets/image/reddit.svg";
  import logo from "assets/image/logo.svg";
  import discord from "assets/image/discord.svg"

  export let pages/*: ProjectPage */;
</script>

<script context="module" lang="ts">
  // import {ProjectPage} from "./_types.ts";

  export async function preload(page, session) {
    const res = await this.fetch(`proj/recent.json`);
    const pages/*: ProjectPage */ = await res.json();

    if (res.status === 200) {
      return {pages};
    } else {
      this.error(res.status, res.message);
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/assets/style/routes/index.scss";
</style>

<svelte:head>
    <title>LaSpruca - Semi-Professional Googler</title>
</svelte:head>

<div class="app">
    <div class="name-wrapper">
        <div class="name">
            <img src={logo} alt="" class="logo"/>
            <h3>Nathan Hare</h3>
            <p>LaSpruca</p>
            <div class="social">
                <a href="https://github.com/laspruca">
                    <img src={gh} alt="My GitHub" width="43" height="43" />
                </a>
                <a href="https://www.reddit.com/user/laspruca">
                    <img src={reddit} alt="My Reddit" width="43" height="43" />
                </a>
                <a href="https://discordapp.com/users/403646951259635713">
                    <img src={discord} alt="My Discord" width="43" height="43"  />
                </a>
            </div>
            <a href="#e" id="down-arrow">↓</a>
        </div>

        <hr id="e"/>

        <div class="about-me-wrap">
            <div class="about-me">
                <div class="content">
                    <div class="left">
                        <h1>Nathan Hare</h1>
                        <h2>Semi-Professional Googler</h2>
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
                    <div class="right">
                        <p>
                            I am a Year 11 student at Whangarie Boys' High School, a swimming coach for Kamo Amateur
                            Swimming Club, a member of Questionable Research Labs, and a developer.
                        </p>
                        <p>
                            At School, I take Electronics, Digital Technology, Maths, Science, Economics, and English.
                            I have competed in Science Fair, and have managed to win awards at the regional competition
                            twice now. At Questionable, I help many of the younger attendees with their projects as best
                            I can.
                        </p>
                        <p>
                            As a developer, I mostly use programming languages such as Rust, TypeScript, Java, C++. My
                            preferred areas of development are: Native Apps and Backend. I work with, Flutter, React,
                            Svelte, Sapper, Unity Engine, Linux, Firebase, GitHub, Actix Web, Spigot and others.
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
                            name="/proj/{project.slug}"
                            title="{project.metadata.title}"
                            sub="{project.metadata.description}"
                            subLinks="{project.metadata.subLinks}"
                    >
                        {project.metadata.summary}
                    </Card>
                {/each}
            </div>
            <a href="/proj">See All</a>
        </div>
    </div>
</div>
