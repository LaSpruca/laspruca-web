<!-- Layout for all the projects -->

<script lang="ts">
    import Header from "../../components/Header.svelte";
    export let post: any;
</script>

<script context="module">
    export async function preload({params}) {
        const res = await this.fetch(`/proj/${params.slug}.json`);
        console.log(res.status);
        const data = await res.json();
        if (res.status === 200) {
            return {post: data};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<style lang="scss">
    @import "../../node_modules/assets/style/routes/proj";
</style>

<svelte:head>
    <meta name="title" content="{post.metadata.title} | LaSpruca Semi-Professional Googler"/>
    <meta name="description"
          content="{post.metadata.description}"/>
    <title>{post.metadata.title}</title>
</svelte:head>

<Header />

<section class='content'>
    <div class="title-block">
        <h1>{post.metadata.title}</h1>
        <p><small>{post.metadata.date}</small></p>
    </div>
    <div class="body">
        {@html post.html}
    </div>
</section>
