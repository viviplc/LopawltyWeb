<template>
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
            <div class="nav_link_central">
              <router-link class="navbar-brand" to="/Product">
                <div class="Product">
                  <h3>Products</h3>
                </div>
              </router-link>
            </div>
            <div class="nav_link">
              <form action="">
                <input type="search" required />
                <i class="fa fa-fw fa-search"></i>
              </form>
            </div>
            <div class="nav_link">
              <router-link class="btn-white" to="/shoppingCart">
                <i class="fa fa-fw fa-shopping-cart"></i>
              </router-link>
            </div>
            <div class="nav_link">
              <router-link class="btn-white" to="/shoppingCart">
                <i class="fa fa-fw fa-user"></i>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view />
  </div>
</template>

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

.nav_link_central{
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
  align-items: baseline;
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

form {
  position: absolute;
  margin-top: 0px;
  margin-left: 0px;
  transition: all 1s;
  transform: translate(-65px, -35px);
  width: 50px;
  height: 30px;
  background: transparent;
  border-radius: 25px;
  border: 4px solid transparent;
  padding: 5px;
}

input {
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

form .fa {
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

form:hover,
form:valid {
  transform: translate(-340px, -35px);
  width: 300px;
  cursor: pointer;
}

form:hover input,
form:valid input {
  display: block;
}

form:hover .fa,
form:valid .fa {
  background: #007aff;
  color: white;
}

form a {
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

form:valid a {
  display: block;
}
</style>
