<svelte:head>
    <meta name="title" content="{post.metadata.title} | LaSpruca Semi-Professional Googler"/>
    <meta name="description"
          content="{post.metadata.description}"/>
    <title>{post.metadata.title}</title>
</svelte:head>

<section class='content'>
    <header>
        <h1>{post.metadata.title}</h1>
        <p><small>{post.metadata.date}</small></p>
    </header>
    {@html post.html}
</section>

<style>
</style>

<script>
    export let post;
</script>

<script context="module">
    export async function preload({params}) {
        // the `slug` parameter is available because
        // this file is called [slug].html
        const res = await this.fetch(`/proj/${params.slug}.json`);
        const data = await res.json();
        if (res.status === 200) {
            return {post: data};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>