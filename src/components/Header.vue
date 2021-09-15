<template>
  <nav class="navbar navbar-custom navbar-fixed-top" id="navbar-custom">
    <div class="container">
        <!-- Logo and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand">
          <i class="fa fa-bars"></i>
          </button>
          <!-- Logo -->
          <div class="navbar-brand page-scroll">
              <a href="/"><img src="../assets/logo.png" class="img-responsive" alt=""></a>
          </div>
        </div>
        <!-- /.navbar-header -->
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-brand">
          <ul class="nav navbar-nav page-scroll navbar-right">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#tuition">Tuition</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /container -->
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*===========================
  Navigation
============================ */

.navbar {
    background: var(--secondary);
    z-index: 999;
    width: 100%;
    border: 0px;
    top: 0px;
    transition: all 0.7s ease-in-out;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.10);
}
.navbar-nav > li > a {
    padding: 10px 25px;
}
.navbar-custom ul.nav li a {
    font-size: 15px;
    text-align: center;
    transition: all .2s ease-in-out;
    font-family: 'Lato', sans-serif;
    background: transparent;
    letter-spacing: 0.4px;
    display: block;
    line-height: 50px;
    font-weight: 700;
    color: #fff;
}
.navbar-right li {
    margin-right: 0px;
    height: 70px;
    line-height: 50px;
}
.navbar-custom .nav a:hover,
.navbar-custom .nav > .active > a {
    padding-top: 20px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.10);
    padding-bottom: 20px;
    color: #fff;
    border-radius: 0px 0px 5px 5px;
    background: var(--primary);
}
.navbar-custom ul.nav ul.dropdown-menu li a:hover {
    padding-top: 0px;
    padding-bottom: 0px;
}
.navbar-custom ul.nav ul.dropdown-menu {
    text-align: center;
    border: 0px;
    border-radius: 5px;
}
.navbar-custom ul.nav ul.dropdown-menu li:last-child {
    border-bottom: none;
}
.navbar-custom ul.nav ul.dropdown-menu li a {
    margin: 5px;
    line-height: 50px;
    display: inline-block;
    border-radius: 5px;
}
.navbar-custom ul.nav ul.dropdown-menu li a:hover {
    padding-top: 0px;
    line-height: 50px;
    padding-bottom: 0px;
}
/* Responsive navbar  */

.navbar-toggle:focus,
.navbar-toggle:active {
    outline: 0;
}
.navbar-toggle {
    font-size: 35px;
    color: #fff;
    transition: all .2s ease-in-out;
    position: relative;
    float: right;
    border-radius: 50%;
    min-width: 70px;
}
/*===========================
  Logo
============================ */

.navbar-brand {
    line-height: 20px;
    margin: auto;
    position: absolute;
    transition: all .2s ease-in-out;
}
.navbar-brand img {
    max-width: 5rem;
    position: absolute;
    left: 0;
    right: 0;
}
</style>
