<template>
  <div>
    <nav class="navbar navbar-default navbar-link" role="navigation">
      <!-- <div class="container"> -->
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <div class="soci">
              <ul class="nav navbar-nav navbar-left" style="padding-left: 20px; padding-top: 15px">
                <li><a class="" href="https://www.facebook.com/hellomedflit/" style=""><i class="fa fa-facebook" style=""></i></a></li>
                <li><a class="" href="https://twitter.com/medflithealth" style=""><i class="fa fa-twitter" style=""></i></a></li>
                <li><a class="" href="https://www.linkedin.com/company/medflit-health-resources/" style=""><i class="fa fa-linkedin" style=""></i></a></li>
                <li><a class="" href="https://www.instagram.com/medflit/" style=""><i class="fa fa-instagram" style=""></i></a></li>

              </ul>
            </div>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                  <li><a href="https://version2.medflithealthsolution.com/login" class="nav-link"><i class="nc-icon nc-bank"></i> <strong>Login </strong></a></li>
                  <li><a href="https://version2.medflithealthsolution.com/register" class="nav-link"><i class="nc-icon nc-paper"></i> <strong>Register</strong></a></li>
                  <li><a href="https://medflit.com/">Patients &nbsp;&nbsp;&nbsp;  |</a></li>
                  <li><a href="https://medflit.com/providers">Providers &nbsp; &nbsp; &nbsp;|</a></li>
                  <li><a href="https://medflit.com/pharmacists">Pharmacists  &nbsp;&nbsp;&nbsp; |</a></li>
                  <li><a href="https://medflit.com/partners">Partners</a></li>
              </ul>
          </div>
          <!-- /.navbar-collapse -->
      <!-- </div> -->
      <!-- /.container -->
  </nav>

  <nav class="navbar" role="navigation">
      <!-- <div class="container"> -->
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header" style="padding-left: 20px; padding-bottom: 5px">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"><p style="color: #132eb2">____</p> </span>
              <span class="icon-bar"><p style="color: #132eb2">____</p></span>
              <span class="icon-bar"><p style="color: #132eb2">____</p></span>
              </button>
              <router-link class="navbar-brand" :to="{ name: 'Home' }">
                  <img src="../../../static/img/Medflit-LogoBlue.png" alt="" width="80%" height="auto">
              </router-link>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse main-menu" id="bs-example-navbar-collapse-2">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <router-link class="page-scroll" :to="{ name: 'Home' }">Pricing</router-link>
              </li>
              <li>
                <a class="page-scroll" :to="{ name: 'Home' }">Amazing Benefts</a>
              </li>
              <li>
                <a class="page-scroll" :to="{ name: 'Home' }">How To Use</a>
              </li>
              <li>
                <a class="page-scroll" :to="{ name: 'Home#' }">Why Medflit</a>
              </li>
              <li>
                <a class="page-scroll" :to="{ name: 'Home' }">Conditions</a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
      <!-- </div> -->
      <!-- /.container -->
  </nav>
  </div>
</template>
<script>
export default {
  name: 'TopNavbar'
}
</script>
