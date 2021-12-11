<script lang="ts">
import { browser } from "$app/env";

    import { goto } from "$app/navigation";
    
    if (browser) goto("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
</script>