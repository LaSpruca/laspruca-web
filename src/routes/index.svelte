<script lang="ts">
    import SpruceLogo from '$lib/components/graphics/SpruceLogo.svelte';

    let randomText = "Yeet!";

</script>

<div class="top">
    <div class="me">
        <div class="logo">
            <SpruceLogo animate size="300"/>
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
      color: #ddd;

      .s {
        margin: 0 1rem;
        border: white 1px solid;
        height: 50%;
      }

      * {
        transform: translateY(-150%);
        opacity: 0;
        animation: pop-up util.$fill-after ease-in forwards;

        &:nth-child(1) {
          animation-delay: util.$time + (util.$fill-after);
        }

        &:nth-child(2) {
          animation-delay: util.$time + (util.$fill-after * 1.5);
        }

        &:nth-child(3) {
          animation-delay: util.$time + (util.$fill-after * 2);
        }

        &:nth-child(4) {
          animation-delay: util.$time + (util.$fill-after * 2.5);
        }

        &:nth-child(5) {
          animation-delay: util.$time + (util.$fill-after * 3);
        }
      }
    }
  }

  .section {

  }

  @keyframes appare {
    to {
      opacity: 100%;
    }
  }

  @keyframes box {
    to {
      background-color: #0f0e17;
      box-shadow: 0 0 10px #000000;
    }
  }

  @keyframes pop-up {
    to {
      opacity: 100%;
      transform: translateY(0);
    }
  }
</style>
