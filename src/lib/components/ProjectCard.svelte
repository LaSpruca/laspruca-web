<script lang="ts">
    import type {Project} from '../types/project';

    export let project: Project;
</script>

<a href={`/p/${project.slug}`}>
    {project.title}
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <div class="links">
        {#if project.website}
            <a href={`${project.website}`}>Website</a>
        {/if}
        {#if project.gitRepo}
            <a href={project.gitRepo}>Git Repo</a>
        {/if}
    </div>
</a>

<style lang="scss">
  @use '../util';

  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    background-color: util.$color-darker;
    padding: 2rem;
    color: rgba(0, 0, 0, 0);
    font-size: 0;

    * {
      color: util.$text;
    }

    &:hover {
      transform: translateY(-0.5rem);
      background-color: util.$color-semi-dark;
    }
  }

  h1 {
    font-size: 1.6rem;
    padding-bottom: 1em;
  }

  p {
    font-size: 1rem;
    font-weight: normal;

    text-align: center;
  }

  .links {
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    a {
      height: 100%;
      width: fit-content;
      padding: 0.75rem;
      background-color: util.$color;
      color: util.$text-darker;
      text-align: center;
      font-size: 1rem;

      &:hover {
        background-color: util.$color-darker;
      }
    }
  }

  @media only screen and (min-width: #{util.$desktop}) {
    :global(.odd) a:last-child {
      justify-self: center;
      align-self: center;
      grid-column-start: span 2;
    }
  }
</style>
