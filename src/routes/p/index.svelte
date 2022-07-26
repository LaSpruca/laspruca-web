<script lang='ts' context='module'>
    import type {Load} from '@sveltejs/kit';

    export const prerender = true;
    export const load: Load = async ({fetch}) => {
        return {
            props: {
                projects: (await (await fetch('/p/projects.json')).json()).map(k => {
                    return {
                        ...k,
                        date: new Date(k.date)
                    };
                })
            }
        };
    };
</script>

<svelte:head>
    <title>All Projects | LaSpruca</title>
</svelte:head>

<script lang='ts'>
    import type {Project} from '$lib/types';
    import Section from "../../lib/components/Section.svelte";
    import ProjectCard from "../../lib/components/ProjectCard.svelte";

    export let projects: Project[];
</script>

<div class="projects">
    <Section spacer={false}>
        <span slot="title">Wanna see older stuff</span>
        <span slot="subtitle">Here is all of the projects I written about!</span>
    </Section>
    <a href="/">Return Home</a>
    <div class="cards">
        {#each projects as project}
            <ProjectCard {project}/>
        {/each}
    </div>
</div>


<style lang='scss'>
  @use "../../lib/util";

  @media only screen and (min-width: #{util.$desktop}) {
    .cards {
      grid-template-columns: 50% 50%;
    }
  }

  .projects {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  .cards {
    display: grid;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    background-color: util.$color-darker;
    color: util.$text;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem;

    &:hover {
      transform: translateY(-0.5rem);
      background-color: util.$color-semi-dark;
    }
  }
</style>
