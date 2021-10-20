<script lang='ts'>
	import {page} from "$app/stores";

	let showFull: boolean = $page.path == "/";
</script>

<header class:show-full={showFull}>

</header>
