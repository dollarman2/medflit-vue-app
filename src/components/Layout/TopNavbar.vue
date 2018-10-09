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
                  <li><a href="https://app.medflit.com/login" class="nav-link"><i class="nc-icon nc-bank"></i> <strong>Login </strong></a></li>
                  <li><a href="https://app.medflit.com/register" class="nav-link"><i class="nc-icon nc-paper"></i> <strong>Register</strong></a></li>
                  <li><router-link :to="{ name: 'Home' }">Patients &nbsp;&nbsp;&nbsp;  |</router-link></li>
                  <li><router-link :to="{ name: 'Provider' }">Providers &nbsp; &nbsp; &nbsp;|</router-link></li>
                  <li><router-link :to="{ name: 'Pharmacy' }">Pharmacists  &nbsp;&nbsp;&nbsp; |</router-link></li>
                  <li><router-link :to="{ name: 'Partner' }">Partners</router-link></li>
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
                <router-link class="page-scroll" :to="{path:'/#pricing'}">Pricing</router-link>
              </li>
              <li>
                <router-link class="page-scroll" :to="{path:'/#benefits'}">Amazing Benefts</router-link>
              </li>
              <li>
                <router-link class="page-scroll" :to="{path:'/#howtouse'}">How To Use</router-link>
              </li>
              <li>
                <router-link class="page-scroll" :to="{path:'/#whymedflit'}">Why Medflit</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Condition' }">Condition</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Faq' }">Faq</router-link>
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
