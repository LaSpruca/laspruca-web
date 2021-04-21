<script lang="ts">
  import type { CardLink } from "../_types";

  export let title: string;
  export let sub: string;
  export let subLinks: CardLink[];
  export let name: string;
</script>

<div class="card-wrapper">
  <a href={name} class="card-link">
    <div class="card">
      <div class="title">
        <h2>{title}</h2>
        <h4>{sub}</h4>
        {#if subLinks !== undefined}
          <div class="links">
            {#each subLinks as link}
              <a href={link.href}>
                {link.text}
              </a>
            {/each}
          </div>
        {/if}
      </div>
      <p>
        <slot />
      </p>
    </div>
  </a>
</div>

<style lang="scss">
  @import "../node_modules/assets/style/components/Card";
</style>
