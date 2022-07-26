<script lang="ts">
    import SpruceLogo from '$lib/components/graphics/SpruceLogo.svelte';
    import Section from "../lib/components/Section.svelte";

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

<Section>
    <span slot="title">Who am I</span>
    <span slot="subtitle">I am a Year 13 student at Whangārei Boys' High School, a member of QRL, and a developer.</span>

    <p>
        I was born and raised in Whangārei, New Zealand. I found my love for IT in my second year of school. From then
        on I have always tinkered with computers, with my tinkering getting more serious as I got further on through
        school.
    </p>
    <p>
        During intermediate (about 11-12 years old), I started messing around with web development, with my
        skill continuing to grow from there. Through high school, I have competed in several competition, from
        mathematical modeling to a terrible ideas hackathon. As I come to the end of high school, I look to go to
        university to complete a bachelor of engineering, majoring in software engineering.
    </p>
</Section>

<Section>
    <span slot="title">What do I do?</span>
    <span slot="subtitle">I'm a software developer</span>
    <p>
        Of cause, I have my preferences and specialties. While I can make a website, I'm more into the backend, away
        from the CSS. I also like to participate in hackathons with my friends. These can range from competitions about
        cyber security to a competition "what is the worst idea you can come up with?". I always enjoy a challenge, and
        these competition provide many.
    </p>
</Section>


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
