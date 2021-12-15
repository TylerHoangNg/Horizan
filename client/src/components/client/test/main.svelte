<script>
  import Home from "./home/index.svelte";
  import Blog from "./blog/index.svelte";
  import Company from "./company/index.svelte";
  import About from "./about/index.svelte";
  import Login from "./authentication/login.svelte";
  import Router, {wrap,push} from "svelte-spa-router";

  export let activeItem;
  export let run;

  const routes = {
      "/home": wrap(Home),
      "/blog": wrap(Blog),
      "/company" : wrap(Company),
      "/about" : wrap(About),
    };
</script>

<div role="main">
  {#if activeItem === "Home"}
    <Home/>
  {:else if activeItem === "Blog"}
    <Blog/>
  {:else if activeItem === "Company"}
    <Company/>
  {:else if activeItem === "About"}
    <About/>
  {/if}
</div>
{#if run === "Start"}
    <Login/>
{/if}