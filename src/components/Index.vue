<template>
  <div>
    <!-- Hero unit -->
        <div class="hero">
            <div class="hero__overlay hero__overlay--gradient"></div>
            <div class="hero__mask"></div>
            <div class="hero__inner">
                <div class="container">
                    <div class="hero__content">
                        <div class="hero__content__inner" id='navConverter'>
                            <div class="ll">
                                <h1 class="hero__title">Feeling ill?</h1>
                                <h1 class="hero__title2">Book a Doctor Now</h1>
                                <div class="row no-gutters text-center">
                                    <div class="col-3">
                                        <div class="form-group">
                                            <select name="" id="" class="select2" v-model="option">
                                              <option value="">--Select Type--</option>
                                              <option value="1" :selected="1 == option ? 'true' : 'false'">Find Doctors</option>
                                              <option value="2" :selected="2 == option ? 'true' : 'false'">Find Pharmacies</option>
                                              <option value="3" :selected="3 == option  ? 'true' : 'false'">Find Hospitals</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <input type="text" placeholder="Search by Location.." class="input2" v-model="location">
                                    </div>
                                    <div class="col-1">
                                        <a @click="Search()" class="btn__ btn-register btn-sm">
                                            <i class="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row how-to-use">
            <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="card register-online-card">
                    <div class="row">
                        <div class="col-3">
                            <img src="/static/images/svg/mobile.svg" alt="">
                        </div>
                        <div class="col-9">
                            <p class="text-center">Register online or download our app for free</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="card search-doctor-card">
                    <div class="row">
                        <div class="col-4">
                            <img src="/static/images/svg/doctor.svg" alt="">
                        </div>
                        <div class="col-8">
                            <p class="text-center">Search for doctor and book an appointment either online or at the hospital</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="card confirm-schedule-card">
                    <div class="row">
                        <div class="col-3">
                            <img src="/static/images/svg/schedule.svg" alt="">
                        </div>
                        <div class="col-9">
                            <p class="text-center">Confirm your appointment schedule and start talking to our professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Steps -->
        <div class="big-steps landing__section">
            <div class="container">
                <h2>Who can use Medflit?</h2>
                <p>Here's who we can think of, but surely everybody in Africa can use it.</p>
            </div>
            <div class="container">
                <div class="steps__inner">
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/patient.svg" class="step__image">
                        </div>
                        <h4>Patients</h4>
                        <p class="step__text text-center">Medflit is a convenient and affordable platform that allows you to book hospital, talk to a doctor and get medication from nearest pharmacy.</p>
                    </div>
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/provider.svg" class="step__image">
                        </div>
                        <h4>Providers</h4>
                        <p class="step__text text-center">Our app allows you to put up your profession online as family medicine, dermatologists, cardiologists, and other medical specialists.</p>
                    </div>
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/pharmacy.svg" class="step__image">
                        </div>
                        <h4>Pharmacies</h4>
                        <p class="step__text text-center">If you are a pharmacy owner, our app is for you to register your pharmacy business and your pharmacist.</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="steps__inner">
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/hospital-2.svg" class="step__image">
                        </div>
                        <h4>Hospitals</h4>
                        <p class="step__text text-center">This is for hospital administrators to sign up their hospitals and register their doctors for instant booking.</p>
                    </div>
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/partner.svg" class="step__image">
                        </div>
                        <h4>Partners</h4>
                        <p class="step__text text-center">We welcome schools, companies, organizations to take advantage of telemedicine platform and use it for their respective businesses.</p>
                    </div>
                </div>
            </div>
        </div>



        <div class="steps landing__section extra-pad">
            <div class="container">
                <h2>Pricing</h2>
                <p>We have considered medflit to be more affordable and acessible.</p>
            </div>
            <div class="container">
                <div class="steps__inner">
                    <div class="row no-gutters">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="card online-consultation-card">
                                <div class="pricing_inner_card">
                                    <h6>ONLINE CONSULTATION</h6>
                                    <h1>₦1000</h1>
                                    <p class="text-center">Consult a doctor, either through voice, chat or video app
                                    </p>
                                </div>
                                <hr>
                                <div class="pricing_details">
                                    <p><i class="fa fa-check check"></i>&nbsp; 25 Minutes Call/Session</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Doctor’s Consultation</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Doctor’s Prescription</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Personal Health Record</p>
                                    <span><a href="" class="btn_ btn-register btn-sm">SELECT</a></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="card hospital-booking-card">
                                <div class="pricing_inner_card">
                                    <h6>HOSPITAL BOOKING</h6>
                                    <h1>Price Varies</h1>
                                    <p class="text-center">Consult Doctors in a Real Hospital Settings
                                    </p>
                                </div>
                                <hr>
                                <div class="pricing_details2">
                                    <p><i class="fa fa-check check"></i>&nbsp; No Waiting Line</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Flexible Booking</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Flat-Rate Price</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Select From Varieties <br>of Hospitals</p>
                                    <span><a href="" class="btn_ btn-register btn-sm">SELECT</a></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="card home-services-card">
                                <div class="pricing_inner_card">
                                    <h6>HOME SERVICES</h6>
                                    <h1>Price Varies</h1>
                                    <p class="text-center">Have Healthcare Professionals at Your Doorstep
                                    </p>
                                </div>
                                <hr>
                                <div class="pricing_details">
                                    <p><i class="fa fa-check check"></i>&nbsp; Home Visit</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Flexible Schedule</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Quality Home Service</p>
                                    <p><i class="fa fa-check check"></i>&nbsp; Select From Varieties of <br>Healthcare Professionals</p>
                                    <span><a href="" class="btn_ btn-register btn-sm">SELECT</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="steps landing__section">
            <div class="container">
                <h2>Amazing Benefits</h2>
                <p>Here are the amazing stuffs you can benefit from using Medflit and many more.</p>
            </div>
            <div class="container">
                <div class="steps__inner">
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/medical.svg" class="step__image">
                        </div>
                        <h4>Search Hospitals & Pharmacies</h4>
                        <p class="step__text text-center">Find hospitals and pharmacies closest to you and get information on their services.</p>
                    </div>
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/health-care.svg" class="step__image">
                        </div>
                        <h4>Home Health Care</h4>
                        <p class="step__text text-center">Get acess to physiotherapists, Doctors and Nurses who are willing and able to administer health services to you, wherever you want it.</p>
                    </div>
                </div>
            </div>
        </div>
        <div style="background-color: #fafafa" class="extra-padd">
            <div class="container">
                <div class="steps__inner">
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/medical-insurance (1).svg" class="step__image">
                        </div>
                        <h4>Health Insurance</h4>
                        <p class="step__text text-center">Get quality and affordable health insurance covers through any of the reputable health insurance organizations partnered.</p>
                    </div>
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/school.svg" class="step__image">
                        </div>
                        <h4>School Telehealth</h4>
                        <p class="step__text text-center">Use our platform to provide in-house clinical diagnosis and treatment of your students while they are in school.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="steps landing__section why-medflit">
          <div class="container">
            <div class="steps__inner">
              <div class="step">
              </div>
              <div class="ste">
                <div class="row">
                  <div class="col-md-12" style="margin-left: 30px;">
                    <h1 style="font-size: 40px; font-weight: bold; color: #1D4BB7;">Why Medflit ?</h1>
                    <div id="demo" class="carousel slide" data-ride="carousel">
                      <!-- The slideshow -->
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="step__media">
                                <img src="/static/images/svg/instant-access.svg" class="step_image">
                              </div>
                              <h2>Instant Access</h2>
                              <p style="color: #666; font-weight: 100">Instant Access to a wide pool of qualified
                                  doctors of various specialties</p>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="step__media">
                                <img src="/static/images/svg/powerful.svg" class="step_image">
                              </div>
                              <h2>Powerful</h2>
                              <p style="color: #666; font-weight: 100">Powerful technology that enables Video,
                                  Chat, and Audio Calls</p>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="step__media">
                                <img src="/static/images/svg/electronic-medical-record.svg" class="step_image">
                              </div>
                              <h2>Electronical Medical Records</h2>
                              <p style="color: #666; font-weight: 100">Electronic Retrieval of Medical Records</p>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="step__media">
                              <img src="/static/images/svg/prescription-pickup.svg" class="step_image">
                            </div>
                            <h2>Prescription Pickup</h2>
                            <p style="color: #666; font-weight: 100">Pick up prescriptions at your preferred
                                pharmacy location.</p>
                          </div>
                        </div>
                        </div>

                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="step__media">
                                <img src="/static/images/svg/affordable.svg" class="step_image">
                              </div>
                              <h2>Affordable</h2>
                              <p style="color: #666; font-weight: 100">Affordable healthcare services at flat rate.</p>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="step__media">
                                <img src="/static/images/svg/drug-prescription.svg" class="step_image">
                              </div>
                              <h2>Drug Prescription</h2>
                              <p style="color: #666; font-weight: 100">Digital prescriptions and drugs delivery
                              to your home or office.</p>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="step__media">
                                <img src="/static/images/svg/easy-payment-method.svg" class="step_image">
                              </div>
                              <h2>Easy Payment</h2>
                              <p style="color: #666; font-weight: 100">Provision of Medflit Card for easy payment and other payment options.</p>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="step__media">
                                <img src="/static/images/svg/health-screening.svg" class="step_image">
                              </div>
                              <h2>Health Screening</h2>
                              <p style="color: #666; font-weight: 100">Digital health screening, diagnosis and
                              treatment of non-emergency medical
                              conditions.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Left and right controls -->
                      <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                      </a>
                      <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <span class="text-center"><a href="https://app.medflit.com/register" id="register" class="btn_ btn-register btn-sm reg">REGISTER</a></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonial Area -->
        <div class="cta cta--reverse">
          <div class="container">
            <div class="cta__inner">
              <span><i class="fa fa-quote-right fa-3x"></i></span>
              <div id="demo" class="carousel slide" data-ride="carousel">

                <!-- The slideshow -->
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  <div class="row">
                    <div class="col-sm-12">
                    <p class="text-center" style="color: white">&ldquo; At first, I was reluctant to actually try the Medflit app. I am glad I overcame my initial reluctance. This is one of the best things to happen to my healthcare! &rdquo;</p>
                    <h3 style="color: white"><strong>Janet Akinsola, <br>Lagos</strong></h3>
                    </div>
                  </div>
                  </div>
                  <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-12">
                    <p class="text-center" style="color: white">&ldquo;I am glad I do not have to queue at general hospitals any longer or pay exorbitant rates for a consultation.&rdquo;</p>
                    <h3 style="color: white"><strong>Segun Green, <br>Lagos</strong></h3>
                    </div>
                  </div>
                  </div>
                  <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-12">
                    <p class="text-center" style="color: white">&ldquo;The feature I love the most in Medflit is how it enables me transfer my prescription effortlessly to pharmacies and have the drugs delivered to me.&rdquo;</p>
                    <h3 style="color: white"><strong>Hafsat Haruna, <br>Abuja</strong></h3>
                    </div>
                  </div>
                  </div>
                </div>

                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
import axios from 'axios';
    export default {
        data(){
          return{
            lists:[],
            location:'',
            option:'',
            page_name:1
          }
        },
        mounted() {
            this.option = this.$route.params.id;
            // alert(this.option);
            console.log('Component mounted.');
            this.getList();
        },
        methods: {
          getList() {
              axios.get('https://app.medflit.com/api/list').then(response => {
                  this.lists = response.data.list;
              });
          },

          Search() {
              var id = (this.option) ? this.option : 1;
              var location = (this.location) ? this.location : 'Lagos';
              this.$router.push('/search/'+id+'/'+location);
          }
        }
    }
</script>
