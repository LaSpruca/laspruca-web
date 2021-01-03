<script lang="ts">
    export let status: number;
    export let error: Error;

    // @ts-ignore
    const dev = process.env.NODE_ENV === 'development';
</script>

<style lang="scss">
  @import "../node_modules/assets/style/theme";

  .error-wrapper {
    filter: drop-shadow(0 0 15px #111);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .error {
    clip-path: polygon(20% 100%, 80% 100%, 100% 0, 0 0);
    position: relative;
    width: fit-content;
    height: max-content;
    @media screen and (max-width: 1300px) {
      padding: 2.5rem;
    }

    padding: 5rem;
    background-color: $primary;
    color: $secondary;
    transition: all 150ms linear;
    text-align: center;

    &:hover {
      transform: scale(1.05);
    }

    h1 {
      padding-bottom: 0.5rem;
    }

    h3 {
      padding: 0.5rem;
    }

    h6:first-child {
      padding-top: 0.5rem;
    }

    a {
      color: #808080;
      text-decoration: none;
      font-weight: normal;

      &:visited {
        color: #a0a0a0;
        text-decoration: none;
        font-weight: normal;
      }
    }
  }
</style>

<div class="error-wrapper">
    <div class="error">
        <h1>{status}</h1>
        {#if status === 404}
            <h3>Page not found</h3>
            <h6>
                No I wont make it even if you asks nicely
            </h6>
            <h6>
                Unless I <strong>actually</strong> need it
            </h6>
        {:else}
            <h3> {error.message} </h3>
        {/if}
        <a href="/">Home</a>
    </div>
</div>
