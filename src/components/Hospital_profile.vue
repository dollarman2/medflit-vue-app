<template>
  <div class="search__" style="background-color: #f0f0f5">
      <div class="container">
          <div class="search-inner">
              <div class="card provider_details_card">
                  <div class="row">
                      <!-- <div class="col-md-2"> -->
                          <div class="provider_avatar">
                              <img src="images/img/evie_default_bg.jpeg" class="img-responsive profile_img" alt="">
                              <router-link :to="{ path: '/search/3/Lagos' }"><i id="bck" class="fas fa-arrow-left pull-right"></i> </router-link>
                          </div>
                      <!-- </div> -->
                      <!-- <div class="col-md-10"> -->
                          <div class="pro-details">
                              <h3>Dove Specialist Hospital</h3>
                              <h6 class=""><i class="fas fa-map-pin ic"></i> 40, Balogun Street, Lagos, Nigeria.</h6>
                              <h6 class="verified"><i class="fas fa-thumbs-up"></i>&nbsp; Hospital registration verified</h6>

                              <div class="ratings">
                                  <span class="fas fa-star"></span>
                                  <span class="fas fa-star"></span>
                                  <span class="fas fa-star"></span>
                                  <span class="fas fa-star"></span>
                                  <span class="fas fa-star"></span>
                                  <span class="reviews">(reviews)</span>
                              </div>
                              <div class="buttons">
                                  <span><a href="" class="btn____ btn-login btn-sm"><i class="fas fa-map-marker"></i>&nbsp; Get Direction</a></span>
                                  <span><a href="" class="btn____ btn-register btn-sm"><i class="fas fa-phone"></i>&nbsp; Call Hospital</a></span>
                              </div>
                          </div>
                      <!-- </div> -->
                  </div>
              </div>

              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#overview">Overview</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#doctors">Doctors(1)</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#review">Review</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#services">Services</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#hospital_branch">Hospital Branch(1)</a>
                  </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content card provider_profile_card">
                  <div id="overview" class="container tab-pane active" style="margin-bottom: 20px">
                      <div class="row">
                          <div class="col-md-8">
                              <h3>About Dove Specialist Hospital</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-2">
                              <h4>Timing</h4>
                              <p>Mon - Sun</p>
                              <h6>12:00am - 11:59pm</h6>
                          </div>
                          <div class="col-md-4">
                              <h4>Services</h4>
                              <ul class="list-group">
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                      Dermatology
                                      <span class="badge badge-success badge-pill"><i class="fas fa-check"></i></span>
                                  </li>
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                      Oncology
                                      <span class="badge badge-success badge-pill"><i class="fas fa-check"></i></span>
                                  </li>
                              </ul>
                          </div>
                          <div class="col-md-6">
                              <h4>Photos</h4>
                              <div class="row">
                                  <div class="gall">
                                      <a href="images/img/evie_default_bg.jpeg" data-toggle="lightbox" data-gallery="gallery">
                                      <img src="images/img/evie_default_bg.jpeg" class="img-responsive pro_img" alt="">
                                      </a>
                                  </div>
                                  <div class="gall">
                                      <a href="images/img/hero_sm.png" data-toggle="lightbox" data-gallery="gallery">
                                      <img src="images/img/hero_sm.png" class="img-responsive pro_img" alt="">
                                      </a>
                                  </div>
                                  <div class="gall">
                                      <a href="images/img/3.jpg" data-toggle="lightbox" data-gallery="gallery">
                                      <img src="images/img/3.jpg" class="img-responsive pro_img" alt="">
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div id="doctors" class="container tab-pane fade" style="padding-bottom: 20px;">
                      <h3>Doctors</h3>
                      <div class="card provider_details_card">
                          <div class="row">
                              <div class="col-4">
                                  <div class="">
                                      <img src="images/img/evie_default_bg.jpeg" class="img-responsive pro_img" alt="">
                                  </div>
                              </div>
                              <div class="col-8">
                                  <div class="mos">
                                      <p>N1000/Basic Session</p>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="pro-details">
                                  <h3><a href="doctor-profile.html" target="_blank">Dr. Jack Daniels, MD</a></h3>
                                  <h6><i class="fas fa-user-md ic"></i>&nbsp; General practice <span class="yoe">(4 years experience)</span></h6>
                                  <h6>Medium: Online</h6>
                                  <div class="sub_details">
                                      <h6 class="h6">May Clinic International</h6>
                                      <h6 class=""><i class="fas fa-map-pin ic"></i> 40, Balogun Street, Lagos, Nigeria.</h6>
                                  </div>
                                  <div class="ratings">
                                      <span class="fas fa-star"></span>
                                      <span class="fas fa-star"></span>
                                      <span class="fas fa-star"></span>
                                      <span class="fas fa-star"></span>
                                      <span class="fas fa-star"></span>
                                      <span class="reviews">(46 reviews)</span>
                                  </div>
                                  <div class="buttons">
                                      <span><a href="" class="btn___ btn-login btn-sm"><i class="fas fa-phone"></i>&nbsp; Call Hospital</a></span>
                                      <span><a href="" class="btn___ btn-register btn-sm"><i class="fas fa-calendar"></i>&nbsp; Book Appointment</a></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div id="review" class="container tab-pane fade" style="padding-bottom: 20px;">
                      <h3>Hospital Review</h3>
                      <div class="table-responsive">
                          <table class="table">
                              <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Review messages</th>
                                  <th>Rating</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>Good Pharmacy</td>
                                  <td>
                                  <div class="ratings">
                                      <span class="fas fa-star"></span>
                                      <span class="fas fa-star"></span>
                                      <span class="fas fa-star"></span>
                                      <span class="fas fa-star"></span>
                                      <span class="fas fa-star"></span>
                                  </div>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div id="services" class="container tab-pane fade" style="padding-bottom: 20px;">
                      <h3>Services</h3>
                      <div class="row">
                          <div class="col-md-6 col-xs-12 pro-details">
                              <ul class="list-group">
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                      Dermatology
                                      <span class="badge badge-success badge-pill"><i class="fas fa-check"></i></span>
                                  </li>
                                  <li class="list-group-item d-flex justify-content-between align-items-center">
                                      Oncology
                                      <span class="badge badge-success badge-pill"><i class="fas fa-check"></i></span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div id="hospital_branch" class="container tab-pane fade" style="padding-bottom: 20px;">
                      <h3>Our Branches</h3>
                      <div class="card provider_details_card">
                          <div class="row">
                              <div class="col-md-2">
                                  <div class="">
                                      <img src="images/img/evie_default_bg.jpeg" class="img-responsive pro_img" alt="">
                                  </div>
                              </div>
                              <div class="col-md-8">
                                  <div class="pharm-details">
                                      <h3><a href="hospital-profile.html">Dove Specialist Hospital</a></h3>
                                      <div class="ratings">
                                          <span class="fas fa-star"></span>
                                          <span class="fas fa-star"></span>
                                          <span class="fas fa-star"></span>
                                          <span class="fas fa-star"></span>
                                          <span class="fas fa-star"></span>
                                          <span class="reviews">(32 reviews)</span>
                                      </div>
                                      <div class="sub_details">
                                          <h6 class=""><i class="fas fa-map-pin ic"></i> 40, Balogun Street, Lagos, Nigeria.</h6>
                                      </div>
                                      <div class="buttons">
                                          <span><a href="" class="btn____ btn-register btn-sm"><i class="fas fa-phone"></i>&nbsp; Contact Hospital</a></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
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
            return {
                result:{},
                doctors:[],
                hospitals:[],
                specialization:[],
                services:[],
                classes:[],
                plans:[],
                timeslots:[],
                timeslots2:[],
                timeslots3:[],
                timeslots4:[],
                time:'',
                time2:'',
                time3:'',
                time4:'',
                counter:0,
                procedure:[],
                direction:'',
            }
        },
        mounted() {
            this.getHospital();
            this.myFunction();
            this.geoLocationInit();
            setTimeout(function() {
            $('.provider-availability-div').hide();
            $('.schedule-loader').hide();
            },2000);
            this.time2 = this.getTime(1);
            this.time3 = this.getTime(2);
            this.time4 = this.getTime(3);
        },
        methods: {
            Procedure: function(){
                var proceed = [];
                var array = $('#searchKeywords').val().split(",");

                $.each(array,function(i){
                    proceed.push(array[i]);
                });
                this.procedure = proceed;
                console.log(proceed);
            },
            ShowSchedule(value){
              if($('a').hasClass("view-availability-btn")){
                $('#scheduler'+value).show();
                $('a#show_hide').removeClass('view-availability-btn');
                $('a#show_hide').addClass('hide_availability');
                $('#scheduler'+value).find('.prev').attr("disabled",true);
                this.TimeSlot(value,this.time);
              }else if($('a').hasClass("hide_availability")){
                  $('#scheduler'+value).hide();
                  $('a#show_hide').removeClass('hide_availability');
                  $('a#show_hide').addClass('view-availability-btn');
              }
            },
            next(value){
              this.counter += 1;
              if(this.counter == 1) $('#scheduler'+value).find('.prev').attr("disabled",false);
              this.time2 = this.getTime(1 + this.counter);
              this.time3 = this.getTime(2 + this.counter);
              this.time4 = this.getTime(3 + this.counter);
              var d = new Date(Date.now()+this.counter*24*60*60*1000);
              var n = d.getDate();
              var m = d.getMonth() + 1;
              var y = d.getFullYear();
              this.time = y +'-'+ m +'-'+ n;
              this.TimeSlot(value,this.time);
            },
            previous(value){
              this.counter = this.counter - 1;
              if(this.counter < 1){
                $('#scheduler'+value).find('.prev').attr("disabled",true);
                this.myFunction();
                this.TimeSlot(value,this.time);
              }else{
                var d = new Date(Date.now()+this.counter*24*60*60*1000);
                var n = d.getDate();
                var m = d.getMonth() + 1;
                var y = d.getFullYear();
                this.time = y +'-'+ m +'-'+ n;
                this.TimeSlot(value,this.time);
                this.time2 = this.getTime(1 + this.counter);
                this.time3 = this.getTime(2 + this.counter);
                this.time4 = this.getTime(3 + this.counter);
              }
            },
            myFunction:function () {
                var d = new Date();
                var n = d.getDate();
                var m = d.getMonth() + 1;
                var y = d.getFullYear();
                this.time = y +'-'+ m +'-'+ n;
            },
            getTime:function (value) {
                var d = new Date(Date.now()+value*24*60*60*1000);
                var n = d.getDate();
                var m = d.getMonth() + 1;
                var y = d.getFullYear();
                if (n > 9){
                  return y +'-'+ m +'-'+ n;
                }else{
                  return y +'-'+ m +'-0'+ n;
                }
            },
            TimeSlot(provider_id,date){
              let component = this;
                axios.get('https://app.medflit.com/api/provider/get-provider-schedules?provider_id='+provider_id+'&date='+date)
                    .then(function (response) {
                      component.timeslots = response.data.schedules[date];
                      component.timeslots2 = response.data.schedules[component.time2];
                      component.timeslots3 = response.data.schedules[component.time3];
                      component.timeslots4 = response.data.schedules[component.time4];
                      console.log(component.timeslots);
                    }, function (error) {
                    });
            },
          getHospital(){
            let component = this;
              axios.get('https://app.medflit.com/api/hospital/'+this.$route.params.id)
                  .then(function (response) {
                    component.result = response.data.hospital;
                    component.doctors = response.data.doctors;
                    component.hospitals = response.data.hospitals;
                    component.specialization = response.data.specialty;
                    component.plans = response.data.plan;
                    component.services = response.data.services;
                    component.classes = response.data.classAbb;
                    console.log(component.result);
                  }, function (error) {
                  });
          },
          geoLocationInit : function() {
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(this.success, this.fail);
              } else {
                  alert("Browser not supported");
              }
          },
          success: function (position) {
              this.latval = position.coords.latitude;
              this.lngval = position.coords.longitude;
              this.GetAddress(this.latval,this.lngval);
          },
          fail: function () {
              this.latval = 9.0612;
              this.lngval = 7.4224;
              this.GetAddress(this.latval,this.lngval);
          },
          GetAddress: function(lat,lng){
            axios.post('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyDECOtEW9X3ctXS7lg3Xh_4rCrV2ervJf0')
              .then(response => {
              console.log(response.data.results[0].formatted_address);
                this.direction = response.data.results[0].formatted_address;

              })
              .catch(e => {
              this.errors.push(e)
            })
          },
        }
    }
</script>
<style>
  /* @import url('../assets/index.css'); */
</style>
