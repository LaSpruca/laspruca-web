<script lang="ts">
    import '../app.scss';
</script>

<main>
    <slot/>
</main>

<footer>
    (C) Nathan Hare 2022
    <a href="/">Home</a>
    <span class="cw">Rights to all Logo go to their respective copyright holders.</span>
</footer>

<style lang="scss">
  @use "../lib/util";

  footer {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: util.$text;
    background-color: util.$color-darker;
    gap: 1rem;

    a {
      color: util.$text;
      text-decoration: none;
      font-weight: bold;
    }

    .cw {
      color: util.$text-darker;
    }
  }
</style>
