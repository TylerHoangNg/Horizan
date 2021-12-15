<script>
  import axios from "axios";
  import { user } from "../../../stores";
  import { push } from "svelte-spa-router";
  import Footer from "../../configs/footer.svelte";
  let username;
  let password;
  let repeatedPassword;
  let errorMessage;

  $: if (username) {
    errorMessage = null;
  }

  async function signup() {
    if (password !== repeatedPassword) {
      errorMessage = "Passwords are not same";
    } else {
      try {
        const { data } = await axios.post("/api/auth/sign-up", {
          username,
          password,
        });
        $user = data.user;
        push("/dashboard");
      } catch (error) {
        if (error.response.data.message === "UserExistsError") {
          username = "";
          password = "";
          errorMessage = "Username is already taken";
        }
      }
    }
  }

  const requiredMessage = "This field is required";
</script>

<section class="vh-100" style="background-color: #fff;">
  <div class="container py-5 h-110">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-3 text-center">
            <form on:submit|preventDefault={signup}>
              <h4 class="mt-1 mb-5 pb-1">Create an acount</h4>
              <!-- the first and last names -->
              {#if errorMessage}
                <h6 class="text-start text-danger">{errorMessage}</h6>
              {:else}
                <h6 class="text-start">Please register for an account</h6>
              {/if}
              <hr />
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="firstname"
                      placeholder="First name"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="lastname"
                      placeholder="Last name"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    bind:value={username}
                    class="form-control"
                    placeholder="Username"
                    required
                    class:is-invalid={errorMessage}
                  />
                </div>
              </div>
              <div class="field">
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    bind:value={password}
                    class="form-control"
                    placeholder="Password"
                    required
                    class:is-invalid={errorMessage}
                  />
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    bind:value={repeatedPassword}
                    class="form-control"
                    placeholder="Repeated Password"
                    required
                    class:is-invalid={errorMessage}
                  />
                </div>
              </div>
              <!--Statements-->
              <div class="form-check d-flex justify-content-center mb-3">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3cg"
                />
                <label class="form-check-label" for="form2Example3g">
                  I agree all statements in <a href="#!" class="text-body"
                    ><u>Terms of service</u> and
                    <a href="#!" class="text-body"><u>Privacy Policy</u></a>
                  </a></label
                >
              </div>
              <div class="control">
                <input
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  value="Register"
                />
              </div>
            </form>
            <p class="text-center text-muted mt-4 mb-0">
              Have already an account? <a
                href="#/login"
                class="fw-bold text-body"><u>Login here</u></a
              >
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-google" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-github" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
<style>
  .h-110 {
    height: 110% !important;
  }
</style>
