<script>
  import Login from "../authentication/login.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let run;
</script>

<div
  class="main-banner wow fadeIn"
  id="Home"
  data-wow-duration="1s"
  data-wow-delay="0.5s"
>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <div
              class="left-content show-up header-text wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div class="row">
                <div class="col-lg-12">
                  <h6>S-Company</h6>
                  <h2>
                    Pioneering company in simulated Work - Skills training
                    platform.
                  </h2>
                  <p>
                    This template is brought to you by TemplateMo website. Feel
                    free to use this for a commercial purpose. You are not
                    allowed to redistribute the template ZIP file on any other
                    template website. Thank you.
                  </p>
                </div>
                <div class="col-lg-12">
                  <div class="border-first-button scroll-to-section">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a on:click={() => dispatch("tabChange", run)}>{run}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="right-image wow fadeInRight image alignright"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              data-mb="30"
            >
              <figure>
                <video loop autoplay muted width="470" height="470">
                  <source src="/images/Animation-7-GIF.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .row {
    justify-content: space-evenly;
  }
  .image video {
    border-radius: 50%;
    width: 100% !important;
    height: inherit !important;
  }

  .image.alignright:after {
    left: auto;
    right: 0;
  }

  figure {
    display: block;
    margin: 0;
  }

  .image figure {
    border: 1px solid var(--main-color);
    border-radius: 50%;
    padding: 20px;
  }

  .image:after {
    left: 0;
    content: "";
    position: absolute;
    width: 75px;
    height: 75px;
    opacity: 0.78;
    background-color: #007bff;
    border-radius: 50px;
    bottom: 60px;
    animation: 0.5s cubic-bezier(0.245, 0.325, 0.51, 1.305) 0s infinite
      alternate none running heartbeat;
    z-index: 1;
  }
  :root {
    --main-color: #007bff;
    --color1: #474b68;
  }
</style>
