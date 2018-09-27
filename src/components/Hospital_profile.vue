<template>
 <div class="row auth">
    <div class="row">
    <div class="col-md-10 col-md-offset-1">
        <div class="card">
            <div class="card-body">
                <div class="row proivder_hearder">
                   <div class="col-md-2">
                            <img v-if="result.hospital_image" v-bind:src="'http://localhost:8000/'+result.hospital_image" class="img-responsive provider-avatar" alt="">
                                <img v-else src="../assets/logo.png" class="img-responsive provider-avatar" alt="">
                    </div>

                    <div class="col-md-8">
                        <h2><strong>{{ result.hospital_name }}</strong></h2>
                        <p>{{ result.hospital_address }}</p>
                        <div style="margin-top: 0px" v-if="result.rating">
                            <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span>({{ result.rating.total_rating }}review)</span><br>
                        </div>

                        <div class="row">
                            <div class="direction-button">
                                <button class="btn btn-sm btn-primary" ><a target="_blank" href="" style="color:white;">
                                    <span class="fa fa-map-marker"></span> &nbsp; Get Directions
                                </a></button>

                                <span class="select-pharmacy">
                                <button class="btn btn-sm btn-primary"><span class="fa fa-phone"></span>&nbsp; Call Hospital</button>
                                </span>
                            </div>
                            
                        </div>

            </div>
        </div>
    </div>
</div>
    
<div class="row provider_tab">
    
    <div class="col-md-12">
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link active" href="#overview" data-toggle="tab">Overview</a></li>
                <li class="nav-item"><a class="nav-link" href="#doctors" data-toggle="tab">Doctors <span v-if="result.hospital_provider"> {{ result.hospital_provider.length }}</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#feedback" data-toggle="tab">Feedback</a></li>
                <li class="nav-item"><a class="nav-link" href="#services" data-toggle="tab">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#centers" data-toggle="tab">Hospital Branch <span v-if="result.hospital_branch"> {{ result.hospital_branch.length }}</span></a></li>
            </ul>

        <div class="">
            <div class="tab-content">
                <div class="active tab-pane" id="overview"  style="min-height: 400px; background-color:white;">
                    <div class="row">
                        <div class="col-md-12" style="padding: 30px">
                            <h3>About {{ result.hospital_name}}</h3><br>
                            <div>
                            <p>{{ result.description}} <span><a href="#"> more...</a></span>.</p>
                            </div><br>

                            <div class="row">
                                <!-- <div class="col-md-3">
                                    <h5><u>Timings</u></h5>
                                    <h5>Mon - Sun</h5>
                                    <h6>12:00 AM - 11:59 PM</h6>
                                </div> -->
                                <div class="col-md-4">
                                    <h5><u>Services</u></h5>
                                    <ul style="list-style-type: none">
                                       
                                        <li v-if="result.services_and_procedures" v-for="(delivery,index) in result.services_and_procedures">
                                                  {{ delivery[index] }}</li>
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <h5><u>Photos</u></h5>
                                    <div class="row">                                       
                                            <div class="col-lg-3 col-md-6 col-sm-3 col-xs-3">
                                              <div class='' v-if="result.gallery" v-for="(gallery,index) in result.gallery">
                                                        <a  class="fancybox col-sm-4 col-xs-6 col-md-3 col-lg-3"  data-fancybox-group="gallery" v-bind:href="'http://localhost:8000/images/gallery/'+gallery.filename">
                                                                <img v-bind:src="'http://localhost:8000/images/gallery/'+gallery.resized_name" class="img-responsive">
                                                        </a> <!-- col-6 / end -->
                                                </div>
                                            </div><br>
                                      

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.tab-pane -->
                <div class="tab-pane fade" id="doctors" style="min-height: 400px; background-color:white;">
                    <div class="row">
                        <div class="col-md-8" style="padding: 30px">
                            <h3>Doctors in {{ result.hospital_name }}</h3><br>
                                <div class="panels-body provider-details-box" v-if="doctors" v-for="(result,index) in doctors">
                        <div class="row provider-item" id="load">
                            <div class="col-md-6">
                                <div style="margin: 0">
                                    <img v-if="result.profile" v-bind:src="'http://localhost:8000/'+result.profile.profile_picture" class="img-responsive provider-avatar" alt="">                                    
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="pull-right" >
                                    <div>
                                    <p class="doc-info" v-if="result.profile.medium_of_service == 1">Medium: Online</p>
                                    <p class="doc-info" v-if="result.profile.medium_of_service == 2">Medium: Home Service</p>
                                    <p class="doc-info" v-if="result.profile.medium_of_service == 3">Medium: Online & Home Service</p>
                                    </div>

                                    <div class="provider-price-info" v-if="result.price">
                                        <p>Basic price of N{{ result.price }} per Online Session</p>
                                    </div>

                                    <div class="provider-price-info" v-if="result.hospital_price">
                                        <p>Basic price of N{{ result.hospital_price }} per Hospital Consultation</p>
                                    </div>

                                    <div class="provider-price-info" v-if="result.home_service_price">
                                        <p>Basic price of N{{ result.home_service_price }} per Home Consultation</p>
                                    </div>
                                    <input type="hidden" id="date_ref" :value="time">
                                </div>
                            </div>
                        </div>
                        <h3 class="provider_name">
                            <router-link v-if="result.profile" :to="{ name: 'ProviderProfile',params:{ id: result.profile.user_id } }">
                            <span class="text-capitalize" style="text-decoration: none">
                                {{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.profile.title) ? special : '' }}</span>
                                </span>
                            </router-link>
                            <router-link :to="{ name: 'ProviderProfile',params:{ id: result.user_id } }" v-else>
                            <span class="text-capitalize" style="text-decoration: none">
                                {{ result.first_name+' ' + result.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.title) ? special : '' }}</span>
                                </span>
                            </router-link>
                        </h3>
                        <p style="font-weight: bold; color: gray" v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</p>
                        <h6 style="font-weight: bold; color: gray;">{{ result.years_of_experience }} Years Of Experience</h6>
                        <h6 style="font-weight: bold; color: gray;" v-if="result.medium_of_service == 1">Online</h6>
                        <h6 style="font-weight: bold; color: gray;" v-if="result.medium_of_service == 2">Home Service</h6>
                        <h6 style="font-weight: bold; color: gray;" v-if="result.medium_of_service == 3">Online & Home Service</h6>
                        <h6 style="font-weight: bold; color: gray;">{{ result.medical_organization }}<br><b v-if="result.profile">{{ result.profile.address }}</b><b v-else>{{ result.address }}</b> </h6>

                        <span></span>
                        <div style="margin-top: 0px" v-if="result.rating">
                            <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span>({{ result.total_rating }} review)</span><br>
                        </div>
                        <div class="row" style="margin-top: 20px;">
                            <div class="provider-action-button col-xs-6">
                                <p class="text-center"><a v-bind:href="'tel:'+result.profile.telephone"><i class="fa fa-phone"></i> Contact Hospital</a></p>
                            </div>

                            <div class="provider-appointment-button col-xs-6">
                                <a class="view-availability-btn" @click="ShowSchedule(result.user_id)" style="color: #007bff;" id="show_hide"><i class="fa fa-calendar-times-o"></i>&nbsp; Book appointment</a>
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
                        </div>
                    </div>
                </div>
                <!-- /.tab-pane -->
                <div class="tab-pane fade" id="feedback"  style="min-height: 400px; background-color:white;">
                    <div class="row">
                        <div class="col-md-8" style="padding: 5px 10px">

                        </div>
                    </div>
                </div>
                <!-- /.tab-pane -->
                <div class="tab-pane fade" id="services"  style="min-height: 400px; background-color:white;">
                    <div class="row">
                        <div class="col-md-12" style="padding: 30px">
                            <h3>Our Services</h3>
                            <ul style="">                                
                                <li v-if="result.services_and_procedures" v-for="(delivery,index) in result.services_and_procedures">{{ delivery[index] }}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="centers"  style="min-height: 400px; background-color:white;">
                    <div class="panels-body doctor-details-box" style="padding:10px;" v-if="hospitals" v-for="(result,index) in hospitals">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-12 col-xs-12 pharmacy-avatar-div">
                                <img v-bind:src="'http://localhost:8000/'+result.hospital_image" class="img-responsive provider-avatar" alt="">
                            </div>

                            <div class="col-lg-8 col-md-8">
                                <div style="padding-top: 10px">
                                    <router-link :to="{ name: 'HospitalProfile',params:{ id: result.slug } }">
                                        <h3 class="provider_name" style="font-family: 'Segoe UI">{{ result.hospital_name }}</h3>
                                    </router-link>

                                    <div style="margin-top: 0px" v-if="result.rating">
                                        <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span>({{ result.total_rating }} review)</span><br>
                                    </div>
                                    <p>{{ result.hospital_address }}</p>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-bottom: 5px" >
                                <div class="">
                                    <a :href="'tel:'+result.hospital_phone" class="btn btn-sm btn-primary pull-right"><i class="fa fa-phone"></i> Contact Hospital</a>
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
                counter:0
            }
        },
        mounted() {
            this.getHospital();
            this.myFunction();
            setTimeout(function() {
            $('.provider-availability-div').hide();
            $('.schedule-loader').hide();
            },2000);
            this.time2 = this.getTime(1);
            this.time3 = this.getTime(2);
            this.time4 = this.getTime(3);
        },
        methods: {
            
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
                return y +'-'+ m +'-'+ n;
            },
            TimeSlot(provider_id,date){
              let component = this;
                axios.get('http://localhost:8000/api/provider/get-provider-schedules?provider_id='+provider_id+'&date='+date)
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
              axios.get('http://localhost:8000/api/hospital/'+this.$route.params.id)
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
        }
    }
</script>
<style>
  @import url('../assets/index.css');
</style>