<script lang='ts' context='module'>
    import type {Load} from '@sveltejs/kit';

    export const prerender = true;
    export const load: Load = async ({fetch}) => {
        return {
            props: {
                projects: (await (await fetch('/projects/projects.json')).json()).map(k => {
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

    export let projects: Project[];
</script>

<div class='projects'>
    <div class='projects__title'>
        <h1>All Projects</h1>
    </div>
    <div class='projects__projects'>
        {#each projects as project}
            <a href={'/projects/' + project.slug} class='projects__projects__card'>
                <div>
                    <h1>{project.title}</h1>

                    <a class='projects__projects__card__links'>
                        {#if project.gitRepo}
                            <a href={project.gitRepo}>Project Repository</a>
                        {/if}

                        {#if project.website}
                            <a href={project.website}>Project Website</a>
                        {/if}
                    </a>

                    <p>{project.description}</p>
                </div>
            </a>
        {/each}
    </div>
</div>

<style lang='scss'>
  .projects {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex-direction: column;

    &__projects {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 3;
      justify-content: center;
      align-items: start;
      text-align: center;
      gap: 2rem;

      a {
        transition: transform 100ms ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }

      &__card {
        text-decoration: none;
        width: 10rem;
        height: 100%;

        div {
          height: 100%;
        }

        * {
          color: initial;
        }

        h1 {
          font-size: 18pt;
        }

        &__links {
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          a {
            font-size: 8pt;
            font-weight: bold;
            text-decoration: none;
            background-color: lightgrey;
            padding: 5px;
            border-radius: 5px;
          }
        }
      }
    }

    &__see-all {
      padding: 1rem;
      background-color: lightgrey;
      color: black;
      transition: transform 100ms ease;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>
