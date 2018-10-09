<template>
    <div class="">


  <!-- Start Footer bottom Area -->
  <footer>
    <div class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="footer-content" style="border-right: 1px solid white">
              <div class="footer-head">
                <h5>PATIENTS</h5>
                <div class="footer-contacts">
                  <p> <router-link :to="{ name: 'Condition' }">Condition</router-link></p>
                  <p><a href="https://version2.medflithealthsolution.com/register" class="nav-link"><i class="nc-icon nc-paper"></i> Sign Up Now</a></p>
                  <p> <router-link  :to="{name:'Abouts',params:{ id: 1 }}">Search for a Doctor</router-link></p>
                  <p> <router-link  :to="{name:'Abouts',params:{ id: 2 }}">Search for a Pharmacy</router-link></p>
                  <p><a href=" https://sammieneutron.github.io/MedflitHealthResources/" class="nav-link"><i class="nc-icon nc-paper"></i>Contact Us</a></p>
                 
                </div>

                <!-- <div class="footer-icons">
                  <ul>
                    <li>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-google"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                    </li>
                  </ul>
                </div> -->
              </div>
            </div>
          </div>
          <!-- end single footer -->
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="footer-content" style="border-right: 1px solid white">
              <div class="footer-head">
                <h5>PARTNERS</h5>
                <div class="footer-contacts">
                    <p><router-link :to="{ name: 'Partner' }">Join Us</router-link></p>
                    <p><router-link class="page-scroll" :to="{path:'/#benefits'}">Health Screening & Checkup</router-link></p>
                    <p><router-link class="page-scroll" :to="{path:'/#ourclients'}">Our Clients</router-link></p>
                    <p><router-link :to="{ name: 'Partner' }">Partners</router-link> </p>
                    <p><a href="https://version2.medflithealthsolution.com/login" class="nav-link"><i class="nc-icon nc-bank"></i>Refer a Company</a></p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="footer-content" style="border-right: 1px solid white">
              <div class="footer-head">
                <h5>PROVIDERS</h5>
                <div class="footer-contacts">
                  <p><router-link class="page-scroll" :to="{path:'/#benefits'}">How you Earn</router-link></p>
                  <p><router-link :to="{ name: 'Provider' }">Provider FAQs</router-link> </p>
                  <p><router-link :to="{ name: 'Provider' }">Partnering Hospitals</router-link></p>
                  <p><router-link :to="{ name: 'Provider' }">Become a Provider</router-link></p>
                  <p><router-link :to="{ name: 'Provider' }">Refer a Doctor</router-link></p>
                </div>
              </div>
            </div>
          </div>
          <!-- end single footer -->
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="footer-content" >
              <div class="footer-head">
                <h5>PHARMACY</h5>
                <div class="footer-contacts">
                  <p><a href="https://version2.medflithealthsolution.com/register" class="nav-link"><i class="nc-icon nc-paper"></i> <strong>Register your Pharmacy</strong></a></p>
                  <p><router-link :to="{ name: 'Pharmacy' }">Pharmacy Faqs</router-link></p>
                  <p><router-link :to="{ name: 'Partner' }">Partnering Programs</router-link></p>
                  <p><router-link :to="{ name: 'Pharmacy' }">Refer a Pharmacy</router-link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-area-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="copyright text-center">
              <p>
                &copy; 2018. <a href="https://medflithealthresources.com">Medflit Health Resources</a>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a :href="'#'" class="back-to-top"><i class="fa fa-arrow-up"></i></a>

    </div>
</template>
<script>
export default {
  name: 'FootNavbar'
}
</script>
</script>
