<script>
  import Router, { wrap, push } from "svelte-spa-router";
  import devtools from "devtools-detect";

  import Home from "./components/client/home/Home.svelte";
  import Signup from "./components/client/auth/Signup.svelte";
  import Login from "./components/client/auth/Login.svelte";
  import Profile from "./components/client/auth/Profile.svelte";
  import Navbar from "./components/configs/Navbar.svelte";
  import Footer from "./components/configs/footer.svelte";
  import Lib from "./components/lib/libLoader.svelte";
  import About from "./components/client/about/About.svelte";
  import Loading from "./components/lib/Loading.svelte";
  import Game from "./components/client/main/Game.svelte";

  import { onMount } from "svelte";
  import axios from "axios";
  import { user } from "./stores";
import Routes from "./routes/Routes.svelte";

  let loading = true;
  let game = false;

  onMount(async () => {
    const { data } = await axios.get("api/auth/user");
    $user = data.user;
    loading = false;
  });

  const routes = {
    "/": wrap(Home, () => !$user),
    "/signup": wrap(Signup, { reason: "authenticated" }, () => !$user),
    "/login": wrap(Login, { reason: "authenticated" }, () => !$user),
    "/profile": wrap(Profile, { reason: "unauthenticated" }, () => $user),
    "/about": wrap(About, { reason: "unauthenticated" }, () => !$user),
    "/rungame": wrap(Game, () => !$user),
  };

  function conditionsFailed(event) {
    const { reason } = event.detail.userData;
    switch (reason) {
      case "unauthenticated":
        return push("/login");
      case "authenticated":
        return push("/");
    }
  }

  // Security code
  // if (devtools.isOpen) {
  //   while (true) {
  //     console.log("access denied");
  //   }
  // }

  // take body to change the content
  const body = document.getElementsByTagName("body");
  // stop keyboard shortcuts
  window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
      event.preventDefault();
      body[0].innerHTML = "sorry, you can't do this 💔";
    }
    if (event.ctrlKey && event.key === "C") {
      event.preventDefault();
      body[0].innerHTML = "sorry, you can't do this 💔";
    }
    if (event.ctrlKey && (event.key === "E" || event.key === "e")) {
      event.preventDefault();
      body[0].innerHTML = "sorry, you can't do this 💔";
    }
    if (event.ctrlKey && (event.key === "I" || event.key === "i")) {
      event.preventDefault();
      body[0].innerHTML = "sorry, you can't do this 💔";
    }
    if (event.ctrlKey && (event.key === "K" || event.key === "k")) {
      event.preventDefault();
      body[0].innerHTML = "sorry, you can't do this 💔";
    }
    if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
      event.preventDefault();
      body[0].innerHTML = "sorry, you can't do this 💔";
    }
  });
  // stop right click
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
</script>

<Lib />

{#if loading}
  <div id="js-preloader" class="js-preloader">
    <Loading />
  </div>
{:else}
  <Navbar />
  <Router {routes} on:conditionsFailed={conditionsFailed} />
{/if}
