<script lang="ts">
    type CardLink = {
        href: string;
        text: string;
    };

    export let title: string;
    export let sub: string;
    export let subLinks: CardLink[];
    export let onClick: () => void;
</script>

<style lang="scss">
  @import "../node_modules/assets/style/components/Card";
</style>

<div class="card-wrapper">
    <div class="card" on:click={onClick}>
        <div class="title">
            <h2>{title}</h2>
            <h4>{sub}</h4>
            {#if (subLinks !== undefined)}
                <div class="links">
                    {#each subLinks as link}
                        <h6>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </h6>
                    {/each}
                </div>
            {/if}
        </div>
        <p>
            <slot/>
        </p>
    </div>
</div>