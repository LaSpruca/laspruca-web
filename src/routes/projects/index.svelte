<script lang="ts" context="module">
  export async function preload() {
    const request = await this.fetch("/projects/all-projects.json");
    const projects = await request.json();

    return {
      projects,
    };
  }
</script>

<script lang="ts">
  import Header from "../../components/Header.svelte";

  export let projects: any[];
</script>

<svelte:head>
  <title>All Projects | LaSpruca - Semi-Professional Googler</title>
</svelte:head>

<Header />

<div class="content">
  <div class="projects">
    {#each projects as project}
      <a href="/projects/{project.slug}" class="project-wrapper">
        <div class="project">
          <h1>{project.metadata.title}</h1>
          <h2>{project.metadata.description}</h2>
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../../assets/style/routes/projects/index.scss";
</style>
