<script lang="ts">
    import logo from "assets/image/logo.svg";
</script>

<style lang="scss">
  @import "../node_modules/assets/style/theme";

  .header-wrapper {
    background-color: $primary;
    box-shadow: 0 5px 10px $primary;

  }

  header {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    color: white;
  }

  img {
    border-radius: 100%;
    margin: auto 0;
  }

  .branding {
    display: flex;
    flex-direction: row;
    width: max-content;
  }

  .text {
    padding-left: 1rem;
  }

  nav {
    height: max-content;
    width: max-content;
    margin: auto 0;
    a {
      &:last-child {
        padding-left: 1rem;
      }
      font-size: 16pt;
      color: #808080;
      text-decoration: none;
      font-weight: normal;

      &:visited {
        color: #a0a0a0;
        text-decoration: none;
        font-weight: normal;
      }
    }
  }
  
  @media only screen and (max-width: 550px) {
    header {
      flex-direction: column;
    }

    .branding, nav {
      margin: auto;
    }

    nav {
      padding-top: 2rem;
    }
  }
</style>

<div class="header-wrapper">
    <header>
        <div class="branding">
            <img width="50px" height="50px" src="{logo}" alt="My logo"/>
            <div class="text">
                <h1>Nathan Hare</h1>
                <h3>LaSpruca</h3>
            </div>
        </div>
        <nav>
            <a href="/">Home</a>
            <a href="/proj">All Projects</a>
        </nav>
    </header>
</div>
