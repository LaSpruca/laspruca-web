<script lang="ts">
  import Header from "../../components/Header.svelte";
    export let projects: any[];
</script>

<script lang="ts" context="module">
    export async function preload() {
        const request = await this.fetch("/proj/all-projects.json");
        const projects = await request.json();

        return {
          projects
        };
    }
</script>

<style lang="scss">
    @import "../../node_modules/assets/style/routes/proj/index.scss";
</style>

<Header />

<div class="content">
    <div class="projects">
        <div class="project">
            {#each projects as project}
                <h1>{project.metadata.title}</h1>
            {/each}
        </div>
    </div>
</div>
