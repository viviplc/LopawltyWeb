<template>
  <div class="modal-backdrop-con">
    <div class="modal-con">
      <header class="modal-header-con">
        <button type="button" class="btn-close" @click="close">
          <i class="fa fa-fw fa-close"></i>
        </button>
      </header>

      <div class="modal-body-con">
        <div class="modal-logo">
          <img src="../assets/logo.png" class="modal-logo-img" />
          <h1>Lopawlty</h1>
        </div>
        <div class="modal-form-login">
          <form class="login-form" @submit.prevent="onSubmit">
            <div
              v-if="loginSucessStatus === 'failed'"
              class="alert alert-danger"
              role="alert"
            >
              Wrong Email or Password.
            </div>
            <p>
              <label for="email">Email</label>
              <input type="text" v-model="email" />
            </p>
            <p>
              <label for="password">Password</label>
              <input type="password" v-model="password" />
            </p>
            <input
              class="btn-submit-login"
              type="submit"
              name="submit-login"
              id="submit-login"
              value="Log In"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Modal",
  mounted() {
    this.email = "";
    this.password = "";
  },
  methods: {
    close() {
      this.$store.commit("HIDE_MODAL");
    },
    onSubmit() {
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password,
      });
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    loginSucessStatus() {
      return this.$store.state.loginSucessStatus;
    },
  },
};
</script>

<style>
.modal-backdrop-con {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(198, 194, 194, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-con {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
}
.modal-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 70px;
}
.modal-con .modal-logo-img {
  width: 230px;
}
.modal-con h1 {
  font-size: 55px !important;
  margin-top: 40px;
  color: #007aff;
  align-self: center;
}
.modal-header-con {
  padding: 20px;
  display: flex;
  position: relative;
  border-bottom: 1px solid #eeeeee;
}

.modal-body-con {
  position: relative;
  padding: 20px 10px;
  display: flex;
  margin-bottom: 50px;
}
.modal-form-login{
  
  display: flex;
  flex-direction: column;
  padding: 70px;
  padding-bottom: 0px;
  padding-top: 0px;
  margin-top: 30px;
  border-left: 1px solid #E1DCDC;
}
.modal-form-login p{
  display: flex;
  flex-direction: column;
}
.modal-form-login label{
  font-size: 25px;
  margin-bottom: 24px;
}
.modal-form-login input{
  background-color: rgba(204, 228, 255, 0.5);
  width: 375px;
  height: 75px;
  margin-bottom: 40px;
  border-radius: 15px;
  border: 1px solid #E1DCDC;
  font-size: 22px;
}
.btn-submit-login{
  font-size: 30px !important;
  background-color: #007aff !important;
  color: #eff0f4 !important;
  border: 1px solid #007aff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 110px;
}
.btn-close {
  position: absolute;
  top: 0px;
  right: 10px;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}
</style>