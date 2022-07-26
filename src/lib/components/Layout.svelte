<script lang="ts">
    export let title: string;
    export let date: string;
</script>

<h1>{ title }</h1>
<p class="date">Written: { date }</p>
<slot></slot>
