<script lang="ts">
    import Error404 from "../components/Error404.svelte"
    export let status: number;
    export let error: Error;

    // @ts-ignore
    const dev = process.env.NODE_ENV === 'development';
</script>

<style>
    h1, p {
        margin: 0 auto;
    }

    h1 {
        font-size: 2.8em;
        font-weight: 700;
        margin: 0 0 0.5em 0;
    }

    p {
        margin: 1em auto;
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 4em;
        }
    }
</style>

<svelte:head>
    <title>Error {status} - LaSpruca</title>
</svelte:head>


{#if status === 404}
    <Error404 />
{:else}
    <h1>{status}</h1>

    <p>{error.message}</p>

    {#if dev && error.stack}
        <pre>{error.stack}</pre>
    {/if}
{/if}

