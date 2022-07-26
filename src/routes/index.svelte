<script lang="ts" context="module">
    import type {LoadOutput} from "@sveltejs/kit";

    // Load of the recent projects
    export async function load({fetch}): Promise<LoadOutput> {
        let projectsRequest = await fetch("/p/recent-projects.json");
        let projects = await projectsRequest.json();

        return {
            props: {
                projects
            }
        }
    }
</script>

<script lang="ts">
    import Section from "../lib/components/Section.svelte";
    import type {Project} from "../lib/types/project";
    import ProjectCard from "../lib/components/ProjectCard.svelte";
    import TopSection from "../lib/components/TopSection.svelte";

    export let projects: Project[];
</script>

<TopSection/>

<Section>
    <span slot="title">Who am I</span>
    <span slot="subtitle">I am a Year 13 student at Whangārei Boys' High School, a member of QRL, and a developer.</span>

    <p>
        I was born and raised in Whangārei, New Zealand. I found my love for IT in my second year of school. From then
        on I have always tinkered with computers, with my tinkering getting more serious as I got further on through
        school.
    </p>
    <p>
        During intermediate (about 11-12 years old), I started messing around with web development, with my
        skill continuing to grow from there. Through high school, I have competed in several competition, from
        mathematical modeling to a terrible ideas hackathon. As I come to the end of high school, I look to go to
        university to complete a bachelor of engineering, majoring in software engineering.
    </p>
</Section>

<Section>
    <span slot="title">What do I do?</span>
    <span slot="subtitle">I'm a software developer</span>
    <p>
        Of cause, I have my preferences and specialties. While I can make a website, I'm more into the backend, away
        from the CSS. I also like to participate in hackathons with my friends. These can range from competitions about
        cyber security to a competition "what is the worst idea you can come up with?". I always enjoy a challenge, and
        these competition provide many.
    </p>
</Section>

<div class="projects">
    <Section>
        <span slot="title">What have I been upto?</span>
        <span slot="subtitle">Here are some of my recent projects</span>
    </Section>
    <div class="s"></div>
    <div class="cards">
        {#each projects as project}
            <ProjectCard {project}/>
        {/each}
    </div>
</div>


<style lang="scss">
  @use 'sass:math';
  @use '../lib/util';

  .projects .s {
    height: 5vh;
  }

  .cards {
    display: grid;
    gap: 1rem;
  }

  @media only screen and (min-width: #{util.$desktop}) {
    .cards {
      grid-template-columns: 50% 50%;
    }
  }
</style>
