<script>
  import Footer from "../configs/footer.svelte";
  import Header from "../configs/header.svelte";
  import Main from "../client/index.svelte";
  import LibLoader from "../lib/libLoader.svelte";

  //header
  let items = ["Home", "About", "Blog", "Company"];
  let activeItem = "Home";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  // start
  let run = "Login";

  // lib
</script>

<LibLoader />
<!-- ***** Preloader Start ***** -->
<div id="js-preloader" class="js-preloader">
  <div class="preloader-inner">
    <span class="dot" />
    <div class="dots">
      <span />
      <span />
      <span />
    </div>
  </div>
</div>
<!-- ***** Preloader End ***** -->

<on-headers>
  <Header {activeItem} {items} {run} on:tabChange={tabChange} />
</on-headers>

<Main {activeItem} {items} {run} />

<footer class="pt-3 my-4 text-muted border-top">
  <Footer />
</footer>
