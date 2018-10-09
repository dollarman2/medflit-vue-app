<template>
     <div class="row auth">
    <div class="col-md-10 col-md-offset-1">
        <div class="card">
            <div class="card-body">
                <div class="row proivder_hearder">
                    <div class="col-md-2">
                            <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive profile-user-img img-fluid img-circle" alt="User Image" style="width: 120px; height: 120px"/>

                    </div>

                    <div class="col-md-8" >
                        <h2 class="" style="font-family: 'Segoe UI">
                            <span class="text-capitalize" style="text-decoration: none" v-if="result.profile">
                             DR. {{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.profile.title) ? special : '' }}</span></span> <br>
                        </h2>
                        <p style="font-weight: bold; color: gray" v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</p>
                        <h6 style="font-weight: bold; color: gray;" v-if="result.years_of_experience">{{ result.years_of_experience }} Years Of Experience</h6>
                        <h6 style="font-weight: bold; color: gray;" v-if="result.medium_of_service == 1">Online</h6>
                        <h6 style="font-weight: bold; color: gray;" v-if="result.medium_of_service == 2">Home Service</h6>
                        <h6 style="font-weight: bold; color: gray;" v-if="result.medium_of_service == 3">Online & Home Service</h6>
                        <h6 style="font-weight: bold; color: gray;">{{ result.medical_organization }}<br><b v-if="result.profile">{{ result.profile.address }}</b> </h6>
                        <span></span>
                        <div style="margin-top: 0px" v-if="result.rating">
                            <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span>({{ result.rating.total_rating }} review)</span><br>
                        </div>

                            <p v-if="result.status == 0" style="color: red"><span class="fa fa-times"> Medical Registration Not Verified</span></p>
                                <p v-else style="color: green"><span class="fa fa-times"> Medical Registration Not Verified</span></p>

                        <div class="row">
                            <div class="review-button" data-target="#provider_review" data-toggle="modal">
                                <button class="btn btn-sm btn-primary"><span class="fa fa-star"></span><strong> Give Review</strong></button>
                                <button class="btn btn-sm btn-primary"><a v-if="result.profile" target="_blank" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.profile.address+'/?hl=en-US'"><span class="fa fa-map-marker"></span>
                                <strong style="color:white;">Get Directions</strong></a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
   <div class="row provider_tab">
    <div class="col-12">
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link active" href="#overview" data-toggle="tab">Overview</a></li>
                <li class="nav-item"><a class="nav-link" href="#services" data-toggle="tab" @click="Procedure()">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#patient_review" data-toggle="tab">Patient Review</a></li>
                <li class="nav-item"><a class="nav-link" href="#gallery" data-toggle="tab" v-if="result.provider_hospital">Hospital Photo Gallery</a></li>
            </ul>

        <div class="">
            <div class="tab-content">
                <div class="active tab-pane" id="overview"  style="min-height: 300px; background-color:white;">
                    <div class="row">
                        <div class="col-md-6" style="padding:25px; border-right: 1px solid #ccc">
                            <br>
                            <h5 class="text-left">Doctors Info</h5>
                            <div class="doc_table">
                                <table class="table responsive">
                                    <tr>
                                        <td class="name"><span class="fa fa-hospital-o"></span>  Hospital Name:</td>
                                        <td><span class="" id="val">{{ result.medical_organization}}</span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-map-marker"></span>  Hospital Address:</td>
                                        <td><span class="" id="val" v-if="result.profile">{{ result.profile.address}}</span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-phone"></span> Phone Number:</td>
                                        <td><span class="" id="val" v-if="result.profile">{{ result.profile.telephone}}</span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-user"></span> Medium</td>
                                        <td>
                                            <span class="" id="val" v-if="result.medium_of_service == 1">Online</span>
                                            <span class="" id="val" v-if="result.medium_of_service == 2">Home Service</span>
                                            <span class="" id="val" v-if="result.medium_of_service == 3">Online & Home Service</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-envelope"></span> Email</td>
                                        <td><span class="" id="val"><a  v-if="result.user" :href="'mailto:'+result.user.email">Send mail to doctor</a></span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-info-circle"></span> Doctors Bio</td>
                                        <td><span class="" id="val">{{ result.biography }}</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div style="padding: 5px 10px">
                                <br>
                                <h5 class="hd">Qualifications and Experience</h5>
                                <div class="qual_table">
                                    <table class="table table-responsive">
                                        <tr>
                                            <td class="name">Education</td>
                                            <td v-for="q in qualifications">
                                                <span class="prov-qual-span"> {{ q.medical_school }} -</span> <span id="val">Standford</span> <br>
                                                <span class="prov-qual-span"> {{ q.course_of_study}} -</span> <span id="val">Medicine</span> <br>
                                                <span class="prov-qual-span"> {{ q.year_of_graduation}}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">Language Spoken</td>
                                            <td >
                                                <div v-for="l in languages">
                                                <span style="font-size: 13px">{{l.name}}</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">Certifications</td>
                                            <td v-for="c in certifications">
                                                <span style="font-size: 13px">{{c.name}}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">Specialities</td>
                                            <td><span v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</span></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 20px;">
                            <div class="provider-action-button col-xs-6">
                                <p class="text-center"><a v-if="result.profile" v-bind:href="'tel:'+result.profile.telephone"><i class="fa fa-phone"></i> Contact Hospital</a>
                                <a v-else-if="result.telephone" v-bind:href="'tel:'+result.telephone"><i class="fa fa-phone"></i> Contact Hospital</a></p>
                            </div>

                            <div class="provider-appointment-button col-xs-6">
                                <p class="text-center"><a class="view-availability-btn" @click="ShowSchedule(result.user_id)" style="color: " id="show_hide"><i class="fa fa-calendar-times-o"></i>&nbsp; Book appointment</a></p>
                            </div>
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
                <!-- /.tab-pane -->
                <div class="tab-pane" id="services" style="min-height: 300px; background-color:white;">
                    <div class="row">
                        <div class="col-md-8" style="padding:25px;">
                            <div class="table-responsive">
                                <ul style="">
                                    <li v-if="result.services_and_procedures" v-for="(delivery,index) in procedure">{{ delivery }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- /.tab-pane -->
                <div class="tab-pane" id="patient_review"  style="min-height: 300px; background-color:white; padding:25px;">
                    <div class="row">
                                <table class="table table-hover">
                                        <tr>
                                          <th>S/N</th>
                                            <th width="50%">Review Messages</th>
                                            <th width="50%">rating</th>
                                        </tr>
                                        <tr v-if="result.reviews" v-for="(review,index) in result.reviews">
                                            <td>{{ index+1 }}</td>
                                            <td> {{ review.message}}</td>
                                            <td>
                                            <div style="margin-top: 0px">
                                                <span v-bind:class="(review.rating >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                                <span v-bind:class="(review.rating >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                                <span v-bind:class="(review.rating >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                                <span v-bind:class="(review.rating >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                                <span v-bind:class="(review.rating >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span><br>
                                            </div>
                                        </td>
                                        </tr>
                                    </table>

                            </div>
                </div>

                <div class="tab-pane " id="gallery"  style="min-height: 300px; background-color:white;">

                           <div class="col-md-12 pull-right " style="padding:20px;">
                            <ul class="">
                                    <div class='list-group'>
                                            <div class='col-sm-4 col-xs-6 col-md-3 col-lg-3'>
                                                <a class="fancybox" rel="gallery"  href="">
                                                    <img src="../assets/logo.png" class="img-responsive">
                                                </a>
                                            </div> <!-- col-6 / end -->
                                    </div>
                                      <div class='list-group'>
                                            <div class='col-sm-4 col-xs-6 col-md-3 col-lg-3'>
                                                <a class="fancybox" rel="gallery"  href="">
                                                    <img src="../assets/logo.png" class="img-responsive">
                                                </a>
                                            </div> <!-- col-6 / end -->
                                    </div>
                                </ul>
                            </div>
                  </div>
            </div>
        </div>
    </div>

    </div>
    <input type="hidden" name="searchKeywords" id="searchKeywords" class="Textbox autobox default" v-bind:value="result.services_and_procedures" autocomplete="off">
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
  @import url('../assets/index.css');
</style>
