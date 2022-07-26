<script lang="ts">
    import SpruceLogo from '$lib/components/graphics/SpruceLogo.svelte';

    let randomText = "Yeet!";

</script>

<div class="top">
    <div class="me">
        <div class="logo">
            <SpruceLogo animate size="100"/>
        </div>
        <div class="name">
            <h1>Nathan Hare</h1>
            <h2>LaSpruca</h2>
        </div>
    </div>

    <div class="tagline">
        <p>Developer</p>
        <div class="s"></div>
        <p>Student</p>
        <div class="s"></div>
        <p>{randomText}</p>
    </div>
</div>

<style lang="scss">
  @use 'sass:math';
  @use '../lib/util';

  .top {
    animation: box util.$fill-after ease-in forwards;
    animation-delay: util.$fill-len;
    display: flex;

    height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    color: white;

    .name {
      opacity: 0;
      animation: appare util.$fill-after ease-in forwards;
      animation-delay: util.$fill-len;
    }

    .me {
      display: flex;
      flex-direction: column;
      text-align: center;

      gap: 2rem;
    }

    .tagline {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      flex-direction: column;
      gap: 1rem;
      color: #ddd;

      .s {
        margin: 0 1rem;
        border: white 1px solid;
        width: 50%;
      }

      * {
        opacity: 0;
        animation: slide-in util.$fill-after ease-in forwards;

        &:nth-child(1) {
          animation-delay: util.$time + (util.$fill-after);
          transform: translateX(50%);
        }

        &:nth-child(2) {
          animation-delay: util.$time + (util.$fill-after * 1.5);
          transform: translateX(50%);
        }

        &:nth-child(3) {
          animation-delay: util.$time + (util.$fill-after * 2);
          transform: translateX(-50%);
        }

        &:nth-child(4) {
          animation-delay: util.$time + (util.$fill-after * 2.5);
          transform: translateX(-50%);
        }

        &:nth-child(5) {
          animation-delay: util.$time + (util.$fill-after * 3);
          transform: translateX(50%);
        }
      }
    }
  }

  .section {

  @media only screen and (min-width: 540px) {
    .top {
      .tagline {
        flex-direction: row;
        gap: 0;

        .s {
          width: 0;
          height: 50%;
        }

        * {
          transform: translateY(0) !important;
          animation: pop-up util.$fill-after ease-in forwards;
        }
      }
    }
  }

  @keyframes appare {
    to {
      opacity: 100%;
    }
  }

  @keyframes box {
    to {
      background-color: var(--color-darker);
      box-shadow: 0 0 10px #000000;
    }
  }

  @keyframes pop-up {
    from {
      transform: translateY(50%);
    }

    to {
      opacity: 100%;
      transform: translateY(0);
    }
  }

  @keyframes slide-in {
    to {
      opacity: 100%;
      transform: translateX(0);
    }
  }
</style>
