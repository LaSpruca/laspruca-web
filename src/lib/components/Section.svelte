<!-- Component for each of the text sections that you see on the front-page -->
<script lang="ts">
    import {SvelteComponent} from "svelte";

    let className = "";
    export {className as class};

    export let spacer = true;
</script>

{#if spacer}
    <div class="s"></div>
{/if}

<div class={"section" + className}>
    <h1>
        <slot name="title"></slot>
    </h1>
    <h2>
        <slot name="subtitle"></slot>
    </h2>
    <div class="content">
        <slot></slot>
    </div>

    <div class="images">
        <slot name="images"></slot>
    </div>
</div>

<style lang="scss">
  @use "../util";

  .s {
    padding-bottom: 10vh;
  }

  .section {
    padding: 10% 5%;
    background-color: util.$color-darker;
    border-radius: 10px;
    text-align: center;
  }

  h1 {
    padding-bottom: 1rem;
  }

  h2 {
    padding-bottom: 0.8rem;
  }

  .section {
    :global(p) {
      padding-bottom: 0.55rem;
      font-size: 1rem;

      &:last-child {
        padding: 0;
      }
    }
  }

  .images {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 2.5rem;
    gap: 1rem;

    :global(img), :global(svg) {
      width: 5rem;
      height: auto;
    }
  }
</style>