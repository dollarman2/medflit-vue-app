<template>
    <div class="row auth">

        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-7 col-md-offset-1">

            <div class="panel doctor-search">
                <form action="">
                    <div class="doctor-searching">
                        <div class="row">
                            <div class="form-group col-md-6 search" v-if="option == 1">
                                <span class="fa fa-search" @click="searchUser()"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Doctor Search by City, Name, etc..." name="" id="search">
                                <!-- <div class="col-md-12 result" style="z-index: 6;background-color: #fefefe;color: #b2b3f2;">
                                  <li v-for="result in results"><span v-if="result.profile">{{ result.profile.first_name + ' ' + result.profile.last_name }}</span><span v-else>{{ result.first_name + ' ' + result.last_name }}</span></li>
                                </div> -->
                            </div>

                            <div class="form-group col-md-10 search" v-if="option == 2">
                                <span class="fa fa-search" @click="searchUser()"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Pharmacy Search by City, Name, etc..." name="" id="search">
                            </div>

                            <div class="form-group col-md-10 search" v-if="option == 3">
                                <span class="fa fa-search" @click="searchUser()"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Hospital Search by City, Name, etc..." name="" id="search">
                            </div>

                            <div class="form-group col-md-3" v-if="option == 1">
                                <select name="" class="form-control" v-model="specialty" v-on:change="searchPlanSpecialty()">
                                    <option value="">--Select Speciality--</option>
                                    <option v-for="(special,index) in specialization" v-bind:value="index">{{ special }}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3" v-if="option == 1" v-on:change="searchPlanSpecialty()">
                                <select name="" class="form-control" v-model="plan">
                                    <option value="">--Select Plan--</option>
                                    <option v-for="(plan,index) in plans" v-bind:value="index">{{ plan }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div style="">
                <div class="panel">
                    <div class="panels-heading title-head">
                        <h6>{{ type }}</h6>
                    </div>
                    <div class="panels-body provider-details-box" v-if="option == 1" v-for="(result,index) in (results.data) ? results.data : results">
                        <div class="row provider-item" id="load">
                            <div class="col-md-6">
                                <div style="margin: 0">
                                    <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive provider-avatar" alt="">
                                    <img v-else v-bind:src="'https://app.medflit.com/'+result.profile_picture" class="img-responsive provider-avatar" alt="">
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="pull-right" >
                                    <div>
                                    <p class="doc-info" v-if="result.medium_of_service == 1">Medium: Online</p>
                                    <p class="doc-info" v-if="result.medium_of_service == 2">Medium: Home Service</p>
                                    <p class="doc-info" v-if="result.medium_of_service == 3">Medium: Online & Home Service</p>
                                    </div>

                                    <div class="doctor-price-info" v-if="result.price">
                                        <p>Basic price of N{{ result.price }} per Online Session</p>
                                    </div>

                                    <div class="doctor-price-info" v-if="result.hospital_price">
                                        <p>Basic price of N{{ result.hospital_price }} per Hospital Consultation</p>
                                    </div>

                                    <div class="doctor-price-info" v-if="result.home_service_price">
                                        <p>Basic price of N{{ result.home_service_price }} per Home Consultation</p>
                                    </div>
                                    <input type="hidden" id="date_ref" :value="time">
                                    <input type="hidden" id="date_ref" :value="time2">
                                    <input type="hidden" id="date_ref" :value="time3">
                                    <input type="hidden" id="date_ref" :value="time4">
                                </div>
                            </div>
                        </div>
                        <h3 class="provider-name">
                            <router-link v-if="result.profile" :to="{ name: 'ProviderProfile',params:{ id: result.slug } }">
                                <span class="text-capitalize" style="text-decoration: none; color: #1D4BB7;">
                                     {{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.profile.title) ? special : '' }}</span>
                                </span>
                            </router-link>
                            <router-link v-else :to="{ name: 'ProviderProfile',params:{ id: result.slug } }">
                                <span class="text-capitalize" style="text-decoration: none; color: #1D4BB7;">
                                     {{ result.first_name+' ' + result.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.title) ? special : '' }}</span>
                                </span>
                            </router-link>
                        </h3>

                        <div class="providers-details">
                            <p style="font-weight: bold; color: gray" v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</p>
                            <h6 style="font-weight: bold; color: gray;" v-if="result.years_of_experience">{{ result.years_of_experience }} Years Of Experience</h6>
                            <h6 style="color: gray;" v-if="result.medium_of_service == 1">Medium: Online</h6>
                            <h6 style="color: gray;" v-if="result.medium_of_service == 2">Medium: Home Service</h6>
                            <h6 style="color: gray;" v-if="result.medium_of_service == 3">Medium: Online & Home Service</h6>
                            <h6 style="font-weight: bold; color: gray;">{{ result.medical_organization }}<br><b v-if="result.profile">{{ result.profile.address }}</b><b v-else>{{ result.address }}</b> </h6>
                        </div>

                        <span></span>
                        <div style="margin-top: 0px" v-if="result.rating">
                            <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span>({{ result.rating.total_rating }} review)</span><br>
                        </div>
                        <div style="margin-top: 0px" v-else>
                            <span v-bind:class="(result.rating_count >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating_count >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating_count >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating_count >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating_count >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span>({{ result.total_rating }} review)</span><br>
                        </div>
                        <div class="row" style="margin-top: 20px;">
                            <div class="provider-action-button col-xs-6">
                                <p class="text-center"><a v-if="result.profile" v-bind:href="'tel:'+result.profile.telephone"><i class="fa fa-phone"></i> Contact Hospital</a>
                                <a v-else v-bind:href="'tel:'+result.telephone"><i class="fa fa-phone"></i> Contact Hospital</a></p>
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
                    <div class="panels-body doctor-details-box" v-if="option == 2" v-for="(result,index) in (results.data) ? results.data : results">
                        <div class="row">
                            <div class="col-md-2 pharmacy-avatar-div">
                                <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive provider-avatar" alt="">
                                <img v-else v-bind:src="'https://app.medflit.com/'+result.profile_picture" class="img-responsive provider-avatar" alt="">
                            </div>

                            <div class="col-md-8">
                                <div style="padding-top: 10px">
                                    <router-link :to="{ name: 'PharmacyProfile',params:{ id: result.slug } }">
                                        <h3 class="provider_name" style="font-family: 'Segoe UI">{{ result.business_name }}</h3>
                                    </router-link>
                                    <div style="margin-top: 0px" v-if="result.rating">
                                        <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                                        <span>({{ result.rating.total_rating }}review)</span><br>
                                    </div>
                                    <p>{{ result.address }}</p>

                                    <div class="">
                                        <a style="margin:2px;" class="btn btn-flat btn-primary btn-sm" v-bind:href="'tel:'+result.telephone"><i class="fa fa-phone"></i> Contact Pharmacy</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="panels-body doctor-details-box" style="padding:10px;" v-if="option == 3" v-for="(result,index) in (results.data) ? results.data : results">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-12 col-xs-12 pharmacy-avatar-div">
                                <img v-bind:src="'https://app.medflit.com/'+result.hospital_image" class="img-responsive provider-avatar" alt="">
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
                    <vue-pagination :pagination="results" @paginate="searchUser()" :offset="4"></vue-pagination>
                </div>
            </div>

        </div>

        <div class="col-md-3">

          <div class="panel doctor-search">
              <div class="panels-heading title-head">
                  <h6>{{ type }} closeby</h6>
              </div>

              <div class="panels-body providers-info" v-if="option == 1" v-for="(result,index) in near_results">
                <div class="row">
                    <div class="col-md-3">
                        <img v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive doctor-avatar" alt="">
                    </div>
                    <div class="col-md-9">
                        <p style=""><span style="color: #3c8dbc;">{{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.title) ? special : '' }}</span></span></p>
                        <p v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</p>
                        <p><b>{{ result.medical_organization }}</b></p>
                        <p><b>{{ result.address }}</b></p>
                        <p><b><a target="_blank" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.profile.address+'/?hl=en-US'"><i class="fa fa-map-marker" style="color: #3c8dbc;"> Get directions</i></a></b></p>
                    </div>
                </div>
              </div>
              <div class="panels-body providers-info" v-if="option == 2" v-for="(result,index) in near_results">
                  <div class="">
                      <div class="row">
                          <div class="col-md-3">
                              <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive doctor-avatar" alt="">
                          </div>
                          <div class="col-md-9">
                              <p><b>{{ result.business_name }}</b></p>
                              <p><b>{{ result.address }}</b></p>
                              <p><b><a target="_blank" v-if="result.profile" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.profile.address+'/?hl=en-US'"><i class="fa fa-map-marker" style="color: #3c8dbc;"> Get directions</i></a></b></p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="panels-body providers-info" v-if="option == 3" v-for="(result,index) in near_results">
                  <div class="">
                      <div class="row">
                          <div class="col-md-3">
                              <img v-bind:src="'https://app.medflit.com/'+result.hospital_image" class="img-responsive doctor-avatar" alt="">
                          </div>
                          <div class="col-md-9">
                              <p><b>{{ result.hospital_name }}</b></p>
                              <p><b>{{ result.address }}</b></p>
                              <p><b><a target="_blank" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.profile.address+'/?hl=en-US'"><i class="fa fa-map-marker" style="color: #3c8dbc;"> Get directions</i></a> </b></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div v-if="option == 1">
              <div class="panel">
                  <div class="panels-heading title-head">
                      <div>
                          <h6>Medium of Service</h6>
                      </div>
                  </div>

                  <div class="panels-body">
                      <div class="providers-close-by" v-for="(serv,index) in services">
                          <input type="radio" name="service"  @click="searchMeduim(index)">&nbsp; {{ serv }}
                      </div>
                  </div>
              </div>
          </div>

          <div v-if="option == 1">
              <div class="panel">
                  <div class="panels-heading title-head">
                      <div>
                          <h6>Gender</h6>
                      </div>
                  </div><!--end of panel heading-->

                  <div class="panels-body">
                      <div class="providers-close-by">
                          <input type="radio" name="gender" @click="searchGender(1)">&nbsp; Male
                      </div>

                      <div class="providers-close-by">
                          <input type="radio" name="gender" @click="searchGender(2)">&nbsp; Female
                      </div>
                  </div><!--end of card body-->

              </div> <!--end of panel-->
          </div>

          <div class="panel" id="state">
            <div class="panels-heading title-head">
              <div>
                <h6>Select State</h6>
              </div>
            </div>
            <div class="panels-body"><br>
                <div class="">
                    <div class="row">
                        <div class="" v-for="(state,index) in states">
                            <div class="state-info" @click="getCities(state.id)">
                                <p>
                                  {{ state.name }}
                                  <span class="state-count">{{ (Counters(items[index])) ? Counters(items[index]) : 0 }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end of panel body-->
          </div> <!--end of panel-->

          <div class="panel" id="city">
            <div class="panels-heading title-head">
              <div>
                <h6>Select City<span id="back-btn" class="fa fa-arrow-left pull-right"></span></h6>
              </div>
            </div>
            <div class="panels-body"><br>
              <div class="">
                <div class="row">
                    <div class="" v-for="(city,index) in cities">
                        <div class="city-info" @click="getCitiesUsers(city.id)">
                            <p>
                              {{ city.name }}
                              <span class="city-count">{{ (Counters(city_count[index])) ?Counters(city_count[index]) : 0 }}</span>
                            </p>
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
    import vuePagination from '../components/Extra/pagination.vue';
    export default {
    name: 'signup',
        data(){
            return {
                specialty:'',
                specialization:[],
                results:[],
                states:[],
                cities:[],
                services:[],
                service: 0,
                gender: 0,
                near_results:[],
                classes:[],
                plans:[],
                timeslots:[],
                timeslots2:[],
                timeslots3:[],
                timeslots4:[],
                items:[],
                city_count:[],
                plan:'',
                type:'',
                option:'',
                search:'',
                latval: '',
                lngval: '',
                time:'',
                time2:'',
                time3:'',
                time4:'',
                counter:0,
                direction:'',
                function_name:{}
            }
        },
        components:{
            'vue-pagination': vuePagination
        },
        mounted() {
            $('#city').hide();

            this.option = this.$route.params.id;
            this.getSpecialties();
            this.searchUser();
            if(this.$route.params.id == 1){
                this.type = "Doctor";
              }else if(this.$route.params.id == 2){
                this.type = "Pharmacy";
              }else{
                this.type = "Hospital";
              }
              this.geoLocationInit();
              this.myFunction();
              setTimeout(function() {
                $('.provider-availability-div').hide();
                $('.schedule-loader').hide();
              },2000);
              this.time2 = this.getTime(1);
              this.time3 = this.getTime(2);
              this.time4 = this.getTime(3);
              $("#back-btn").on('click', function(){
                $('#state').show();
                $('#city').hide();
              });
        },
        methods: {
            Counters(value){
              var result = 0;
              for(var prop in value) {
                if (value.hasOwnProperty(prop) || value != "") {
                // or Object.prototype.hasOwnProperty.call(obj, prop)
                  result++;
                }
                return result;
              }
            },
            ShowSchedule(value){
              if($('a').hasClass("view-availability-btn")){
                $('#scheduler'+value).show();
                $('a#show_hide').removeClass('view-availability-btn');
                $('a#show_hide').addClass('hide_availability');
                $('#scheduler'+value).find('.prev').attr("disabled",true);
                this.TimeSlot(value,this.time,this.time2,this.time3,this.time4);
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
              this.TimeSlot(value,this.time,this.time2,this.time3,this.time4);
            },
            previous(value){
              this.counter = this.counter - 1;
              if(this.counter < 1){
                $('#scheduler'+value).find('.prev').attr("disabled",true);
                this.myFunction();
                this.TimeSlot(value,this.time,this.time2,this.time3,this.time4);
              }else{
                var d = new Date(Date.now()+this.counter*24*60*60*1000);
                var n = d.getDate();
                var m = d.getMonth() + 1;
                var y = d.getFullYear();
                this.time = y +'-'+ m +'-'+ n;
                this.time2 = this.getTime(1 + this.counter);
                this.time3 = this.getTime(2 + this.counter);
                this.time4 = this.getTime(3 + this.counter);
                this.TimeSlot(value,this.time,this.time2,this.time3,this.time4);
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
                if (n > 10){
                  return y +'-'+ m +'-'+ n;
                }else{
                  return y +'-'+ m +'-0'+ n;
                }
            },
            TimeSlot(provider_id,date,date2,date3,date4){
              let component = this;
                axios.get('https://app.medflit.com/api/provider/get-provider-schedules?provider_id='+provider_id+'&date='+date)
                    .then(function (response) {
                      // alert(date2);
                      component.timeslots = response.data.schedules[date];
                      component.timeslots2 = response.data.schedules[date2];
                      component.timeslots3 = response.data.schedules[date3];
                      component.timeslots4 = response.data.schedules[date4];
                      console.log(component.timeslots2);
                    }, function (error) {
                    });
            },
            searchUser(){
              let component = this;
                // this.results.current_page = 1
                axios.get('https://app.medflit.com/api/search_?search='+component.search+'&option='+component.option+'&page='+this.results.current_page)
                    .then(function (response) {
                      if(response.data.doctors){
                          component.results = response.data.doctors;
                          component.items = response.data.count;
                          component.city_count = response.data.city;
                          // console.log(component.items[1].length + 'here');
                      }
                      else if (response.data.pharmacies){
                        component.results = response.data.pharmacies;
                        component.items = response.data.count;
                          component.city_count = response.data.city;
                      }
                      else{
                        component.results = response.data.hospitals;
                        component.items = response.data.count;
                          component.city_count = response.data.city;
                      }
                      setTimeout(function() {
                        $('.provider-availability-div').hide();
                        $('.schedule-loader').hide();
                      },2000);
                      console.log(component.results);
                    }, function (error) {
                    });
            },
            searchPlanSpecialty(){
              let component = this;
                axios.get('https://app.medflit.com/api/search_filter?search='+component.search+'&option='+component.option+'&specialty='+component.specialty+'&plan='+component.plan+'&page='+this.results.current_page)
                    .then(function (response) {
                      component.results = response.data.doctors;
                      component.items = response.data.count;
                      setTimeout(function() {
                        $('.provider-availability-div').hide();
                        $('.schedule-loader').hide();
                      },2000);
                    }, function (error) {
                    });
            },
            searchGender(value){
              let component = this;
                axios.get('https://app.medflit.com/api/search_filter?gender='+value+'&option='+component.option+'&page='+this.results.current_page)
                    .then(function (response) {
                      component.results = response.data.doctors;
                      component.items = response.data.count;
                      component.city_count = response.data.city;
                      setTimeout(function() {
                        $('.provider-availability-div').hide();
                        $('.schedule-loader').hide();
                      },2000);
                    }, function (error) {
                    });
            },
            searchMeduim(value){
              let component = this;
                axios.get('https://app.medflit.com/api/search_filter?service='+value+'&option='+component.option+'&page='+this.results.current_page)
                    .then(function (response) {
                      component.results = response.data.doctors;
                     component.items = response.data.count;
                          component.city_count = response.data.city;
                      setTimeout(function() {
                        $('.provider-availability-div').hide();
                        $('.schedule-loader').hide();
                      },2000);
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
                  this.nearByProviders(this.latval, this.lngval);
              },
              fail: function () {
                  this.latval = 9.0612;
                  this.lngval = 7.4224;
                  this.nearByProviders(this.latval, this.lngval);
              },
              nearByProviders:function (lat, lng) {
                if(this.option == 1){
                  this.nearbyDoctors(lat, lng);
                }else if(this.option == 2){
                  this.nearbyPharmacies(lat, lng);
                }else{
                  this.nearbyHospitals(lat, lng);
                }
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
            nearbyDoctors: function(lat,lng){
              let component = this;
                axios.get('https://app.medflit.com/api/near_by_providers?lat='+lat+'&lng='+lng)
                    .then(function (response) {
                      component.near_results = response.data.providers;
                      component.direction = component.GetAddress(lat,lng);
                      console.log(component.near_results);
                    }, function (error) {
                    });
            },

            nearbyPharmacies(lat,lng){
              let component = this;
                axios.get('https://app.medflit.com/api/near_by_pharmacy?lat='+lat+'&lng='+lng)
                    .then(function (response) {
                      component.near_results = response.data.pharmacies;
                      console.log(component.near_results);
                    }, function (error) {
                    });
            },

            nearbyHospitals(lat,lng){
              let component = this;
                axios.get('https://app.medflit.com/api/near_by_hospital?lat='+lat+'&lng='+lng)
                    .then(function (response) {
                      component.near_results = response.data.hospitals;
                      console.log(component.near_results);
                    }, function (error) {
                    });
            },

            getSpecialties() {
                axios.get('https://app.medflit.com/api/list').then(response => {
                    this.specialization = response.data.specialty;
                    this.plans = response.data.plan;
                    this.services = response.data.services;
                    this.classes = response.data.classAbb;
                    this.states = response.data.states;
                });
            },
            getCities(value){
              axios.get('https://app.medflit.com/api/city/'+value+'/'+this.option).then(response => {
                    $('#state').hide();
                    $('#city').show();
                    this.cities = response.data.cities;
                    if(response.data.doctors){
                        this.results = response.data.doctors;
                          this.city_count = response.data.city;
                    }
                    else if (response.data.pharmacies){
                      this.results = response.data.pharmacies;
                          this.city_count = response.data.city;
                    }
                    else{
                      this.results = response.data.hospitals;
                          this.city_count = response.data.city;
                    }
                    setTimeout(function() {
                        $('.provider-availability-div').hide();
                        $('.schedule-loader').hide();
                      },2000);
                    console.log(this.cities);
                });
            },

            getCitiesUsers(value){
              axios.get('https://app.medflit.com/api/cityuser/'+value+'/'+this.option).then(response => {
                    $('#state').hide();
                    $('#city').show();
                    if(response.data.doctors){
                        this.results = response.data.doctors;
                    }
                    else if (response.data.pharmacies){
                      this.results = response.data.pharmacies;
                    }
                    else{
                      this.results = response.data.hospitals;
                    }
                    setTimeout(function() {
                        $('.provider-availability-div').hide();
                        $('.schedule-loader').hide();
                      },2000);
                    console.log(this.cities);
                });
            }
        }
    }

</script>
<style>
  @import url('../assets/index.css');
</style>
