<script lang="ts">
    import logo from "assets/image/logo.svg";
</script>

<style lang="scss">
  @import "../node_modules/assets/style/theme";

  .header-wrapper {
    background-color: $primary;
  }

  header {
    justify-items: stretch;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    color: white;
  }

  img {
    border-radius: 100%;
    margin: auto 0;
  }

  .branding {
    display: flex;
    flex-direction: row;
  }

  .text {
    padding-left: 1rem;
  }
</style>

<div class="header-wrapper">
    <header>
        <div class="branding">
            <img width="50px" height="50px" src="{logo}" alt="My image"/>
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