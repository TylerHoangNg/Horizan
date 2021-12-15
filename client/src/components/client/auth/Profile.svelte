<script>
  import axios from "axios";
  import { user } from "../../../stores";
  import { push } from "svelte-spa-router";
  import Footer from "../../configs/footer.svelte";
  let oldPassword;
  let newPassword;

  let errorMessage;
  let successMessage;

  $: if (oldPassword) {
    errorMessage = null;
  }

  async function changePassword() {
    try {
      await axios.post("/api/auth/update-password", {
        oldPassword,
        oldPassword,
      });
      oldPassword = "";
      newPassword = "";
      successMessage = "Password was update correctly";
    } catch (error) {
      if (error.response.data.message === "IncorrectPasswordError") {
        oldPassword = "";
        newPassword = "";
        errorMessage = "Wrong old password";
      }
    }
  }
</script>

<section class="vh-100" style="background-color: #fff;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-3 text-center">
            {#if errorMessage}
              <p class="help is-danger">{errorMessage}</p>
            {/if}
            <form on:submit|preventDefault={changePassword}>
              <h4 class="mt-1 mb-5 pb-1">Change password</h4>
              <hr />
              <div class="field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    bind:value={oldPassword}
                    class="input"
                    placeholder="Old Password"
                    required
                    class:is-danger={errorMessage}
                  />
                </div>
              </div>
              <div class="field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    bind:value={newPassword}
                    class="input"
                    placeholder="New Password"
                    required
                    class:is-danger={errorMessage}
                  />
                  {#if errorMessage}
                    <p class="help is-danger">{errorMessage}</p>
                  {/if}
                </div>
              </div>
              <div class="control">
                <input
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>