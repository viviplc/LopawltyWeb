<template>
  <div>
    <header>
      <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="header_navigation" id="nav">
      <div class="container-nav">
        <router-link class="navbar-brand" to="/">
          <div class="logo-image">
            <img src="./assets/logo.png" class="img-fluid" />
            <h1>Lopawlty</h1>
          </div>
        </router-link>
        <nav>
          <div class="nav-links">
                       
            <div class="nav_link">
              <form class="nav_link_form" action="">
                <input type="search" required />
                <i class="fa fa-fw fa-search"></i>
              </form>
            </div>
            <div class="nav_link">
              <router-link class="btn-white" to="/Product">
                <i class="fa fa-fw fa-shopping-bag"></i>
              </router-link>
            </div>
            <div class="nav_link">
              <router-link class="btn-white" to="/shoppingCart">
                <i class="fa fa-fw fa-shopping-cart"></i>
              </router-link>
            </div>
            <div class="nav_link">
              <button v-if="isLoggedIn" class="login-button">
                <div>
                  <img
                    class="rounded-circle z-depth-2"
                    style="width: 58px; border: 3px solid #007aff"
                    v-bind:src="loggedInProfile.profileImage"
                  />
                  <b-dropdown id="dropdown-1" class="m-md-2">
                    <b-dropdown-item @click="logoutUser" class="dropdown-opt">
                      <router-link class="dropdown-link" to="/"
                        >Log Out</router-link
                      >
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </button>
              <button v-else class="login-button" @click="showModal">
                <i class="fa fa-fw fa-user"></i>
              </button>
              <Modal v-show="isModalVisible" @close="closeModal" />
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view />
  </div>
    </header>
    <footer>
      <FooterGeneral/>
    </footer>
  </div>  
</template>

<script>
import Modal from "./components/Modal.vue";
import FooterGeneral from "./components/FooterGeneral.vue";

export default {
  name: "App",
  components: {
    Modal,
    FooterGeneral,
  },
  data() {
    return {};
  },
  computed: {
    isModalVisible() {
      return this.$store.state.isModalVisible;
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    loggedInProfile() {
      return this.$store.state.loggedInUser;
      /*This is what the profile structure is (you can edit it in the index.js of the store folder):
      loggedInUser: {
      userId: 123,
      name: "Julia Guo",
      profileImage: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
    }
      */
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("LOGOUT_USER");
    },
    showModal() {
      this.$store.commit("SHOW_MODAL");
    },
    closeModal() {
      this.$store.commit("HIDE_MODAL");
    },
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

* {
  font-family: "Lato", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eff0f4;
}

.header_navigation {
  width: 100%;
  height: 135px;
  top: 0;
  left: 0;
  background: rgba(204, 228, 255, 0.5);
  position: fixed;
  z-index: 100;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}

.navbar-brand {
  padding-left: 5%;
  text-decoration: none;
  font-weight: bold;
}

.nav_link_central {
  position: relative;
  transform: translate(-265px, -55px);
}

.navbar-brand h1 {
  padding-left: 10%;
  font-size: 55px !important;
  margin-top: 35px;
  color: #007aff;
}

.container-nav {
  width: 95% !important;
  max-width: 3000px !important;
}

.header_navigation .container-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
}

.header_navigation .nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
}

.header_navigation .Product {
  color: #007aff;
  position: relative;
  padding-left: 70px;
  padding-right: 70px;
  margin-top: 20px;
}

.header_navigation .nav_link {
  position: relative;
  padding-left: 70px;
}

.btn-white {
  background-color: transparent;
  border: none;
  color: #007aff;
  height: 40px;
  width: 40px;
  font-size: 40px;
  cursor: pointer;
}

.logo-image {
  display: flex;
  align-items: center;
}

.img-fluid {
  width: 100px;
  height: 98px;
  margin-right: 20px;
}

.nav_link_form {
  position: absolute;
  margin-top: 0px;
  margin-left: 0px;
  transition: all 1s;
  transform: translate(-65px, -20px);
  width: 50px;
  height: 30px;
  background: transparent;
  border-radius: 25px;
  border: 4px solid transparent;
  padding: 5px;
}

.nav_link_form input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 30px;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  border-radius: 20px;
  padding: 0 20px;
}

.nav_link_form .fa {
  box-sizing: border-box;
  padding: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #007aff;
  text-align: center;
  font-size: 35px;
  transition: all 1s;
}

.nav_link_form:hover,
.nav_link_form:valid {
  transform: translate(-340px, -20px);
  width: 300px;
  cursor: pointer;
}

.nav_link_form:hover input,
.nav_link_form:valid input {
  display: block;
}

.nav_link_form:hover .fa,
.nav_link_form:valid .fa {
  background: #007aff;
  color: white;
}

.nav_link_form a {
  display: none;
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  color: white;
  text-align: center;
  width: 100%;
}

.nav_link_form:valid a {
  display: block;
}

.login-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: #007aff;
  height: 40px;
  width: 40px;
  font-size: 40px;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #007aff;
}
</style>
