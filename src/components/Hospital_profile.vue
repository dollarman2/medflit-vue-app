<template>
  <div class="search__" style="background-color: #f0f0f5">
      <div class="container">
          <div class="search-inner">
              <div class="card provider_details_card">
                  <div class="row">
                      <!-- <div class="col-md-2"> -->
                          <div class="provider_avatar">
                              <img v-if="result.hospital_image" v-bind:src="'https://app.medflit.com/'+result.hospital_image" class="img-responsive profile_img" alt="">
                              <img v-else src="/static/images/img/evie_default_bg.jpeg" class="img-responsive profile_img" alt="">
                              <router-link :to="{ path: '/search/3/Lagos' }"><i id="bck" class="fa fa-arrow-left pull-right"></i> </router-link>
                          </div>
                      <!-- </div> -->
                      <!-- <div class="col-md-10"> -->
                          <div class="pro-details">
                            <router-link :to="{ path: '/search/3/Lagos' }"><i id="back" class="fa fa-arrow-left pull-right"></i></router-link>
                              <h3>{{result.hospital_name}}</h3>
                              <h6 class=""><i class="fa fa-map-pin ic"></i> {{result.hospital_address}}</h6>

                              <div class="" v-if="result.rating">
                                    <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span>({{ (result.rating.total_rating != '') ? result.rating.total_rating : 0  }} review)</span>
                                </div>
                              <div class="buttons">
                                  <span><a  v-if="result.profile" target="_blank" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.hospital_address+'/?hl=en-US'" class="btn____ btn-login btn-sm"><i class="fa fa-map-marker"></i>&nbsp; Get Direction</a></span>
                                  <span><a v-if="result.hospital_phone" v-bind:href="'tel:'+result.hospital_phone" class="btn____ btn-register btn-sm"><i class="fa fa-phone"></i>&nbsp; Call Hospital</a></span>
                              </div>
                          </div>
                      <!-- </div> -->
                  </div>
              </div>

              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item"><a class="nav-link active" href="#overview" data-toggle="tab">Overview</a></li>
                <li class="nav-item"><a class="nav-link" href="#doctors" data-toggle="tab">Doctors <span v-if="result.hospital_provider">{{ result.hospital_provider.length }}</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#review" data-toggle="tab">Feedback <span v-if="result.reviews">{{ result.reviews.length }}</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#services" data-toggle="tab" @click="Procedure()">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#hospital_branch" data-toggle="tab">Hospital Branch <span v-if="result.hospital_branch"> {{ result.hospital_branch.length }}</span></a></li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content card provider_profile_card">
                  <div id="overview" class="container tab-pane active" style="margin-bottom: 20px">
                      <div class="row">
                          <div class="col-md-8">
                              <h3>About {{ result.hospital_name }}</h3>
                              <p>{{ result.description}}</p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-4" v-if="result.availability_start">
                              <h4>Timing</h4>
                              <p>Mon - Sun</p>
                              <h6>{{ result.availability_start }} - {{ result.availability_end }}</h6>
                          </div>
                          <div class="col-md-6">
                              <h4>Photos</h4>
                              <div class="row">
                                  <div class="gall" v-if="result.gallery" v-for="(gallery,index) in result.gallery">
                                      <a v-bind:href="'https://app.medflit.com/images/gallery/'+gallery.filename" data-toggle="lightbox" data-gallery="gallery">
                                      <img v-bind:src="'https://app.medflit.com/images/gallery/'+gallery.resized_name" class="img-responsive pro_img" alt="">
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div id="doctors" class="container tab-pane fade" style="padding-bottom: 20px;">
                      <h3>Doctors</h3>
                      <div class="card provider_details_card" v-if="doctors" v-for="(result,index) in doctors">
                          <div class="row">
                              <div class="col-4">
                                  <div class="">
                                    <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive pro_img" alt="">
                                  </div>
                              </div>
                              <div class="col-8">
                                      <div class="mos" v-if="result.price">
                                          <p>N{{ result.price }} / Online Session</p>
                                      </div>
                                      <div class="mos" v-if="result.hospital_price">
                                          <p>N{{ result.hospital_price }} / Hospital Consultation</p>
                                      </div>
                                      <div class="mos" v-if="result.home_service_price">
                                          <p>N{{ result.home_service_price }} / Home Consultation</p>
                                      </div>
                                      <input type="hidden" id="date_ref" :value="time">
                                      <input type="hidden" id="date_ref" :value="time2">
                                      <input type="hidden" id="date_ref" :value="time3">
                                      <input type="hidden" id="date_ref" :value="time4">
                              </div>
                          </div>
                          <div class="row">
                              <div class="pro-details">
                                  <h3 class="doc_details">
                                    <router-link v-if="result.profile" :to="{ name: 'ProviderProfile',params:{ id: result.slug } }">
                                        <span class="text-capitalize" style="text-decoration: none; color: #1D4BB7;">
                                            <span v-for="(special,index) in classes" >{{ (index == result.profile.title == 1 ) ? "Dr." : '' }}</span>
                                            {{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.profile.title) ? special : '' }}</span>
                                        </span>
                                    </router-link>
                                    <router-link v-else :to="{ name: 'ProviderProfile',params:{ id: result.slug } }">
                                        <span class="text-capitalize" style="text-decoration: none; color: #1D4BB7;">
                                            {{ result.first_name+' ' + result.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.title) ? special : '' }}</span>
                                        </span>
                                    </router-link>
                                </h3>
                                  <h6><i class="fa fa-user-md ic"></i>&nbsp; <span v-for="(special,index) in specialization">{{ (index == result.specialty_id) ? special : '' }}</span></h6>

                                <h6 class="h6" v-if="result.years_of_experience">{{ result.years_of_experience }} Years Of Experience</h6>
                                <h6 v-if="result.medium_of_service == 1">Medium: Online</h6>
                                <h6 v-if="result.medium_of_service == 2">Medium: Home Service</h6>
                                <h6 v-if="result.medium_of_service == 3">Medium: Online & Home Service</h6>
                                <div class="" v-if="result.rating">
                                    <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span>({{ (result.rating.total_rating != '') ? result.rating.total_rating : 0  }} review)</span>
                                </div>
                                  <div class="provider-appointment-button buttons">
                                    <span><a v-if="result.profile" v-bind:href="'tel:'+result.profile.telephone" class="btn____ btn-login btn-sm"><i class="fa fa-phone"></i>&nbsp; Call Doctor</a>
                                    <a v-else-if="result.telephone" v-bind:href="'tel:'+result.telephone" class="btn____ btn-login btn-sm"><i class="fa fa-phone"></i>&nbsp; Call Doctor</a></span>
                                    <span><a @click="ShowSchedule(result.user_id)" class="view-availability-btn btn____ btn-register btn-sm" id="show_hide"><i class="fa fa-calendar"></i>&nbsp; Book Appointment</a></span>
                                  </div>
                                  <div class="Providerschedule1 col-md-12" style="display:none;"></div>
                                    <div class="schedule-loader text-center">Loading availability...</div>
                                    <div class="provider-availability-div scheduler" :id="'scheduler'+result.user_id">
                                        <div class="schedule_list">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button class="btn next btn-flat btn-sm btn-success pull-right" style="margin-right: 20px;" v-on:click="next(result.user_id)">Next</button>
                                                    <button class="btn prev btn-flat btn-sm btn-success pull-right" style="margin-right: 5px;" v-on:click="previous(result.user_id)">Prev</button>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="Providerschedule1 col-md-12" style="display:none;"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 display-schedule">

                                                    <div class="col-md-3">
                                                      <h6>{{ time }}</h6>
                                                      <ul>
                                                        <li v-for="(time,index) in timeslots">
                                                        <a :href="'https://app.medflit.com/patients/confirm-schedule?provider_id='+result.id+'&schedule_time_id='+time.id+'&medium_of_service='+result.medium_of_service" target="_blank">{{ time.start_label }}</a>
                                                        </li>
                                                      </ul>

                                                    </div>

                                                    <div class="col-md-3">
                                                    <h6>{{ time2 }}</h6>
                                                      <ul>
                                                        <li v-for="(time,index) in timeslots2">
                                                        <a :href="'https://app.medflit.com/patients/confirm-schedule?provider_id='+result.id+'&schedule_time_id='+time.id+'&medium_of_service='+result.medium_of_service" target="_blank">{{ time.start_label }}</a>
                                                        </li>
                                                      </ul>
                                                    </div>

                                                    <div class="col-md-3">
                                                      <h6>{{ time3 }}</h6>
                                                      <ul>
                                                        <li v-for="(time,index) in timeslots3">
                                                        <a :href="'https://app.medflit.com/patients/confirm-schedule?provider_id='+result.id+'&schedule_time_id='+time.id+'&medium_of_service='+result.medium_of_service" target="_blank">{{ time.start_label }}</a>
                                                        </li>
                                                      </ul>
                                                    </div>

                                                    <div class="col-md-3">
                                                    <h6>{{ time4 }}</h6>

                                              <ul>
                                        <li v-for="(time,index) in timeslots4">
                                                        <a :href="'https://app.medflit.com/patients/confirm-schedule?provider_id='+result.id+'&schedule_time_id='+time.id+'&medium_of_service='+result.medium_of_service" target="_blank">{{ time.start_label }}</a>
                                                        </li>
                                                      </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
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
                                  <!-- <th>Rating</th> -->
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-if="result.reviews" v-for="(review,index) in result.reviews">
                                  <td>{{ index+1 }}</td>
                                  <td> {{ review.message}}<br><br>
                                    <div style="margin-top: 0px">
                                        <span v-bind:class="(review.rating >= 1) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                        <span v-bind:class="(review.rating >= 2) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                        <span v-bind:class="(review.rating >= 3) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                        <span v-bind:class="(review.rating >= 4) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                        <span v-bind:class="(review.rating >= 5) ? 'fa fa-star ratings' : 'fa fa-star'"></span><br>
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
                                  <li class="list-group-item d-flex justify-content-between align-items-center" v-if="result.services_and_procedures" v-for="(delivery,index) in procedure">{{ delivery }}<span class="badge badge-success badge-pill"><i class="fa fa-check"></i></span></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div id="hospital_branch" class="container tab-pane fade" style="padding-bottom: 20px;" >
                      <h3>Our Branches</h3>
                      <div class="card provider_details_card" v-if="hospitals" v-for="(result,index) in hospitals">
                          <div class="row">
                              <div class="col-md-2">
                                  <div class="">
                                      <img  v-if="result.hospital_image" v-bind:src="'https://app.medflit.com/'+result.hospital_image" class="img-responsive pro_img" alt="">
                                      <img v-else src="/static/images/img/evie_default_bg.jpeg" class="img-responsive profile_img" alt="">
                                  </div>
                              </div>
                              <div class="col-md-8">
                                  <div class="pro-details">
                                      <h3 class="doc_details">
                                        <router-link target="_blank" :to="{ name: 'HospitalProfile',params:{ id: result.slug } }">
                                        <h3>{{ result.hospital_name }}</h3>
                                      </router-link>
                                      </h3>

                                      <div class="" v-if="result.rating">
                                          <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span>({{ (result.rating.total_rating != '') ? result.rating.total_rating : 0  }} review)</span>
                                      </div>
                                      <div class="" v-else>
                                          <span v-bind:class="(result.rating_count >= 1) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span v-bind:class="(result.rating_count >= 2) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span v-bind:class="(result.rating_count >= 3) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span v-bind:class="(result.rating_count >= 4) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span v-bind:class="(result.rating_count >= 5) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                          <span>({{ (result.total_rating) ? result.total_rating : 0 }} review)</span><br>
                                      </div>
                                      <div class="sub_details">
                                          <h6 class=""><i class="fa fa-map-pin ic"></i>{{ result.hospital_address }}</h6>
                                      </div>
                                      <div class="buttons">
                                          <span><a :href="'tel:'+result.hospital_phone" class="btn____ btn-register btn-sm"><i class="fa fa-phone"></i>&nbsp; Contact Hospital</a></span>
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
