<script lang="ts">
    export let animate = false;
    export let size = 500;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width={size} height={size} class:animate>
    <rect class="bg" width="1024" height="1024"/>
    <path
            class="outline"
            d="M719.87,305.25l-190.57-179a23.39,23.39,0,0,0-32.6,0l-190.57,179a28.82,28.82,0,0,0-8.8,21V697.76a28.82,28.82,0,0,0,8.8,21l190.57,179a23.39,23.39,0,0,0,32.6,0l190.57-179a28.82,28.82,0,0,0,8.8-21V326.24A28.82,28.82,0,0,0,719.87,305.25ZM697.28,677.87a26.25,26.25,0,0,1-7.55,18.74L526.12,856.41a19.54,19.54,0,0,1-28,0L334.52,696.61A26.25,26.25,0,0,1,327,677.87V346.13a26.25,26.25,0,0,1,7.55-18.74l163.61-159.8a19.54,19.54,0,0,1,28,0l163.61,159.8a26.25,26.25,0,0,1,7.55,18.74Z"
    />
    <path
            class="s"
            d="M697.28,350.61H512.13l185.15,250v77.26a26.25,26.25,0,0,1-7.55,18.74L526.12,856.41a19.54,19.54,0,0,1-28,0L334.52,696.61A26.25,26.25,0,0,1,327,677.87v-4.49H512.13L327,423.38V346.13a26.25,26.25,0,0,1,7.55-18.74l163.61-159.8a19.54,19.54,0,0,1,28,0l163.61,159.8a26.25,26.25,0,0,1,7.55,18.74Z"
    />
    <polygon class="right" points="697.28 350.61 697.28 600.61 512.13 350.61 697.28 350.61"/>
    <polygon class="left" points="512.13 673.38 326.97 673.38 326.97 423.38 512.13 673.38"/>
</svg>


<style lang="scss">
  @use "../../util";

  @mixin line($len) {
    .animate & {
      stroke-dashoffset: $len;
      stroke-dasharray: $len;
    }
  }

  svg {
    border-radius: 100%;
  }

  .bg {
    fill: #ed1c24;

    .animate & {
      animation: linear util.$time show-color;
    }
  }

  .outline {
    fill: #21409a;
    stroke-width: 13px;
    @include line(3678.262451171875);
  }

  .s {
    fill: #348734;
    @include line(2216.111572265625);
  }

  .left {
    fill: #50b848;
    @include line(746.2615966796875);
  }

  .right {
    fill: #0f571a;
    @include line(746.2457275390625);
  }

  .s,
  .right,
  .left {
    stroke-width: 10px;
  }

  .outline,
  .s,
  .right,
  .left {
    stroke: white;
    stroke-miterlimit: 10;

    .animate & {
      animation: linear #{util.$time * 0.75} outline-stroke forwards, linear util.$time show-color;
    }
  }

  @keyframes outline-stroke {
    to {
      stroke-dashoffset: 0;
      stroke: #231f20;
    }
  }

  @keyframes show-color {
    0%,
    #{util.$fill-time} {
      fill-opacity: 0;
    }
    100% {
      fill-opacity: 100%;
    }
  }
</style>
