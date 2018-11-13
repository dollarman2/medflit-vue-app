<template>
    <div class="search__">
        <div class="container">
            <!-- <div class="search-inner" style="background-color: #f0f0f5"> -->
                <div class="card pro_details_card">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="provider_avatar">
                                <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive profile_img" alt="User Image"/>
                                <router-link :to="{ path: '/search/1/Lagos' }"><i id="bck" class="fa fa-arrow-left pull-right"></i> </router-link>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div class="pro-details">
                              <router-link :to="{ path: '/search/1/Lagos' }"><i id="back" class="fa fa-arrow-left pull-right"></i></router-link>
                                <h3 v-if="result.profile">DR. {{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.profile.title) ? special : '' }}</span></h3>
                                <h6><i class="fa fa-user-md ic"></i>&nbsp; <span v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</span> <span class="yoe" v-if="result.years_of_experience">({{ result.years_of_experience }} years experience)</span></h6>
                                <h6 v-if="result.medium_of_service == 1">Meduim: Online</h6>
                                <h6 v-if="result.medium_of_service == 2">Meduim: Home Service</h6>
                                <h6 v-if="result.medium_of_service == 3">Meduim: Online & Home Service</h6>
                                <div class="sub_details">
                                    <h6 class="h6">{{ result.medical_organization }}</h6>
                                    <!-- <h6 class=""v-if="result.profile"><i class="fa fa-map-pin ic"></i> {{ result.profile.address }}</h6> -->
                                </div>
                                <div class="" v-if="result.rating">
                                    <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star ratings' : 'fa fa-star'"></span>
                                    <span>({{ (result.rating.total_rating != '') ? result.rating.total_rating : 0  }} review)</span>
                                </div>
                                <div>
                                    <h6 style="color: red" v-if="result.status == 0"><i class="fa fa-thumbs-up"></i>&nbsp; Medical registration verified</h6>
                                    <h6 class="verified" v-else><i class="fa fa-thumbs-up"></i>&nbsp; Medical registration verified</h6>
                                </div>
                                <div class="buttons">
                                    <span><a href="https://app.medflit.com/patient/" class="btn____ btn-login btn-sm"><i class="fa fa-star"></i>&nbsp; Review</a></span>
                                    <span><a v-if="result.profile" target="_blank" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.profile.address+'/?hl=en-US'" class="btn____ btn-register btn-sm"><i class="fa fa-map-marker"></i>&nbsp; Get Direction</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="">
                    <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#overview" id="over">Overview</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#services" @click="Procedure()">Services</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#patient_review">Doctor review</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#book_appointment">Book Appointment</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content card provider_profile_card">
                    <div id="overview" class="container active tab-pane">
                        <div class="row">
                            <div class="col-md-6">
                                <h3>Doctor&apos;s Info</h3>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th><i class="fa fa-hospital ic"></i>&nbsp; Hospital Name:</th>
                                                <td><span class="" id="val">{{ result.medical_organization}}</span></td>
                                            </tr>

                                            <tr>
                                                <th><i class="fa fa-map-marker ic"></i>&nbsp; Hospital Address:</th>
                                                <td><span class="" id="val" v-if="result.profile">{{ result.profile.address}}</span></td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-phone ic"></i>&nbsp; Telephone:</th>
                                                <td><span class="" id="val" v-if="result.profile">{{ result.profile.telephone}}</span></td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-binoculars ic"></i>&nbsp; Medium:</th>
                                                 <td>
                                                    <span class="" id="val" v-if="result.medium_of_service == 1">Online</span>
                                                    <span class="" id="val" v-if="result.medium_of_service == 2">Home Service</span>
                                                    <span class="" id="val" v-if="result.medium_of_service == 3">Online & Home Service</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-envelope ic"></i>&nbsp; Email:</th>
                                                <td><span class="" id="val"><a  v-if="result.user" :href="'mailto:'+result.user.email">Send mail to doctor</a></span></td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-info ic"></i>&nbsp; Doctor&apos;s Bio:</th>
                                                <td><span class="" id="val">{{ result.biography }}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-6" style="border-left: 1px solid #f0f0f0; padding-bottom: 30px;">
                                <h3>Qualifications & Experience</h3>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th><i class="fa fa-university ic"></i>&nbsp; Education:</th>
                                                <td v-for="q in qualifications">
                                                    <span class="prov-qual-span"> {{ q.medical_school }} -</span>
                                                    <span class="prov-qual-span"> {{ q.course_of_study}} -</span>
                                                    <span class="prov-qual-span"> {{ q.year_of_graduation}}</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th><i class="fa fa-language ic"></i>&nbsp; Languages:</th>
                                                <td>
                                                  <div v-for="l in languages">
                                                  <span style="font-size: 13px">{{l.name}}</span>
                                                  </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-certificate ic"></i>&nbsp; Certifications:</th>
                                                <td v-for="c in certifications">
                                                  <span style="font-size: 13px">{{c.name}}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-stethoscope ic"></i>&nbsp; Specialty:</th>
                                                <td><span v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="services" class="container tab-pane" style="padding-bottom: 20px;">
                        <h3>Services</h3>
                        <div class="row">
                            <div class="col-md-6 col-xs-12 pro-details">
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center" v-if="result.services_and_procedures" v-for="(delivery,index) in procedure">{{ delivery }}<span class="badge badge-success badge-pill"><i class="fa fa-check"></i></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="patient_review" class="container tab-pane" style="padding-bottom: 20px;">
                        <h3>Doctor Review</h3>
                        <div class="table-responsive">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Review messages</th>
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

                    <div id="book_appointment" class="container tab-pane" style="padding-bottom: 20px;">
                      <br/>
                        <span><a @click="ShowSchedule(result.user_id)"  id="show_hide" class="view-availability-btn btn___ btn-register btn-sm"><i class="fa fa-calendar"></i>&nbsp; Book Appointment</a></span>
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
            <!-- </div> -->
        </div>
        <input type="hidden" name="searchKeywords" id="searchKeywords" class="Textbox autobox default" v-bind:value="result.services_and_procedures" autocomplete="off">
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
                qualifications:[],
                languages:[],
                certifications:[],
                specialization:[],
                services:[],
                classes:[],
                plans:[],
                procedure:[],
                direction:'',
                timeslots:[],
                timeslots2:[],
                timeslots3:[],
                timeslots4:[],
                time:'',
                time2:'',
                time3:'',
                time4:'',
                counter:0,
            }
        },
        mounted() {
          this.getProvider();
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
          getProvider(){
            let component = this;
              axios.get('https://app.medflit.com/api/provider/'+this.$route.params.id)
                  .then(function (response) {
                    component.result = response.data.provider;
                    component.qualifications = response.data.qualifications;
                    component.languages = response.data.languages;
                    component.certifications = response.data.certifications;
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
