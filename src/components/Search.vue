<template>
    <div class="search__" style="background-color: #f0f0f5">
        <div class="container">
            <div class="search__inner">
                <div class="search_details">

                    <!--Provider Search Input Form-->
                    <div class="card search_area" v-if="option == 1">
                        <div class="row">
                            <div class="col-md-6">
                                <i class="fas fa-search search-icon" @click="searchUser()"></i>
                                <input type="text" class="input3"  v-model="search" id="search" placeholder="Search doctor by city, name etc...">
                            </div>
                            <div class="col-md-3">
                                <select name="" id="" class="select3" v-model="specialty" v-on:change="searchPlanSpecialty()">
                                    <option value="">--Select Speciality--</option>
                                    <option v-for="(special,index) in specialization" v-bind:value="index">{{ special }}</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <select name="" id="" class="select3" v-model="plan" v-on:change="searchPlanSpecialty()">
                                    <option value="">--Select Plan--</option>
                                    <option v-for="(plan,index) in plans" v-bind:value="index">{{ plan }}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!--Pharmacy Search Input Form-->
                    <div class="card search_area" v-if="option == 2">
                        <div class="row">
                            <div class="col-md-12">
                                <i class="fas fa-search search-icon"></i>
                                <input type="text" class="input3" name="" id='' placeholder="Search for pharmacy by city, name etc...">
                            </div>
                        </div>
                    </div>

                    <!--Hospital Search Input Form-->
                    <div class="card search_area" v-if="option == 3">
                        <div class="row">
                            <div class="col-md-12">
                                <i class="fas fa-search search-icon"></i>
                                <input type="text" class="input3" name="" id='' placeholder="Search for hospital by city, name etc...">
                            </div>
                        </div>
                    </div>

                    <!--Provider Search result-->
                    <div class="card provider_details_card" v-if="option == 1" v-for="(result,index) in (results.data) ? results.data : results">
                        <div class="row">
                            <div class="col-4">
                                <div class="">
                                  <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive pro_img" alt="">
                                  <img v-else v-bind:src="'https://app.medflit.com/'+result.profile_picture" class="img-responsive pro_img" alt="">
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
                                <h6><i class="fas fa-user-md ic"></i>&nbsp; <span v-for="(special,index) in specialization">{{ (index == result.specialty_id) ? special : '' }}</span></h6>
                                <h6 class="h6" v-if="result.years_of_experience">{{ result.years_of_experience }} Years Of Experience</h6>
                                <h6 v-if="result.medium_of_service == 1">Medium: Online</h6>
                                <h6 v-if="result.medium_of_service == 2">Medium: Home Service</h6>
                                <h6 v-if="result.medium_of_service == 3">Medium: Online & Home Service</h6>
                                <div class="sub_details">
                                    <h6 class=""><i class="fas fa-map-pin ic"></i> {{ result.medical_organization }}<br><b v-if="result.profile">{{ result.profile.address }}</b><b v-else>{{ result.address }}</b></h6>
                                </div>
                                <div class="" v-if="result.rating">
                                    <span v-bind:class="(result.rating.rating_count >= 1) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 2) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 3) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 4) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 5) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
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
                                <div class="provider-appointment-button buttons">
                                    <span><a v-if="result.profile" v-bind:href="'tel:'+result.profile.telephone" class="btn____ btn-login btn-sm"><i class="fas fa-phone"></i>&nbsp; Call Hospital</a>
                                    <a v-else-if="result.telephone" v-bind:href="'tel:'+result.telephone" class="btn____ btn-login btn-sm"><i class="fas fa-phone"></i>&nbsp; Call Hospital</a></span>
                                    <span><a @click="ShowSchedule(result.user_id)" class="view-availability-btn btn____ btn-register btn-sm" id="show_hide"><i class="fas fa-calendar"></i>&nbsp; Book Appointment</a></span>
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

                    <!--Pharmacy Search Result-->
                    <div class="card provider_details_card" v-if="option == 2" v-for="(result,index) in (results.data) ? results.data : results">
                        <div class="row">
                            <div class="col-md-2">
                                <div class="">
                                    <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive pro_img" alt="">
                                    <img v-else v-bind:src="'https://app.medflit.com/'+result.profile_picture" class="img-responsive pro_img" alt="">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="pharm-details">
                                    <h3>
                                      <router-link :to="{ name: 'PharmacyProfile',params:{ id: result.slug } }">{{ result.business_name }}</router-link>
                                    </h3>
                                    <div class="" v-if="result.rating">
                                        <span v-bind:class="(result.rating.rating_count >= 1) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 2) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 3) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 4) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                        <span v-bind:class="(result.rating.rating_count >= 5) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
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
                                        <h6 class=""><i class="fas fa-map-pin ic"></i> {{ result.address }}</h6>
                                    </div>
                                    <div class="buttons">
                                        <span><a v-bind:href="'tel:'+result.telephone" class="btn____ btn-register btn-sm"><i class="fas fa-phone"></i>&nbsp; Contact Pharmacy</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Hospital Search Result-->
                    <div class="card provider_details_card" v-if="option == 3" v-for="(result,index) in (results.data) ? results.data : results">
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
                                        <span class="reviews">(44 reviews)</span>
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
                    <vue-pagination :pagination="results" @paginate="searchUser()" :offset="4"></vue-pagination>
                </div>

                <div class="closeby_details">
                    <!--Provider Closeby-->
                    <div class="card provider_closeby_card" v-if="option == 1">
                        <div class="row doc_title">
                            Doctors Online Now
                        </div>
                        <hr>
                        <div v-for="(result,index) in near_results">
                        <div class="row">
                            <div class="col-4">
                                <div class="provider_avatar">
                                    <img v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive doc_img" alt="">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="doc_details">
                                    <router-link :to="{ name: 'ProviderProfile',params:{ id: result.slug } }">
                                    <h6 class="ic name">{{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.title) ? special : '' }}</span></h6>
                                    </router-link>
                                    <h6 class="spec"><i class="fas fa-user-md ic"></i>&nbsp; <span v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</span></h6>
                                    <h6 class="hosp">{{ result.medical_organization }}</h6>
                                    <a target="_blank" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.profile.address+'/?hl=en-US'" class="dir ic"><i class="fas fa-map-pin"></i>&nbsp; Get directions</a>
                                </div>
                            </div>
                        </div>
                        <hr>
                        </div>
                    </div>

                    <!--Pharmacy Closeby-->
                    <div class="card provider_closeby_card" v-if="option == 2">
                        <div class="row doc_title">
                            Pharmacy Closeby
                        </div>
                        <hr>
                        <div v-for="(result,index) in near_results">
                        <div class="row">
                            <div class="col-4">
                                <div class="provider_avatar">
                                    <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="mg-responsive doc_img" alt="">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="doc_details">
                                    <h6 class="ic name">{{ result.business_name }}</h6>
                                    <h6 class="hosp">{{ result.address }}</h6>
                                    <h6 class="dir ic"><a target="_blank" v-if="result.profile" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.profile.address+'/?hl=en-US'"><i class="fas fa-map-pin"></i>&nbsp; Get directions</a></h6>
                                </div>
                            </div>
                        </div>
                        <hr>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="provider_avatar">
                                    <img src="images/img/evie_default_bg.jpeg" class="img-responsive doc_img" alt="">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="doc_details">
                                    <h6 class="ic name">MedBoss Pharmacy</h6>
                                    <h6 class="hosp">40, Olayiwola Close, Epe, Lagos, Nigeria.</h6>
                                    <h6 class="dir ic"><i class="fas fa-map-pin"></i>&nbsp; Get directions</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Hospital Closeby-->
                    <div class="card provider_closeby_card" v-if="option == 3">
                        <div class="row doc_title">
                            Hospital Closeby
                        </div>
                        <hr>
                        <div>
                        <div class="row">
                            <div class="col-4">
                                <div class="provider_avatar">
                                    <img src="images/img/evie_default_bg.jpeg" class="img-responsive doc_img" alt="">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="doc_details">
                                    <h6 class="ic name">Dove Specialist Hospital</h6>
                                    <h6 class="hosp">40, Olayiwola Close, Epe, Lagos, Nigeria.</h6>
                                    <h6 class="dir ic"><i class="fas fa-map-pin"></i>&nbsp; Get directions</h6>
                                </div>
                            </div>
                        </div>
                        <hr>
                        </div>
                    </div>

                    <div class="card provider_closeby_card" v-if="option == 1">
                        <div class="row doc_title">
                            Medium of Service
                        </div>
                        <hr>
                        <div class="row mos__">
                            <div class="col-md-12" v-for="(serv,index) in services">
                                <input name="m_o_s" @click="searchMeduim(index)" type="radio" id="online" />
                                <label for="online">{{ serv }}</label>
                            </div>
                        </div>
                    </div>

                    <div class="card provider_closeby_card" v-if="option == 1">
                        <div class="row doc_title">
                            Gender
                        </div>
                        <hr>
                        <div class="row mos__">
                            <div class="col-md-12" @click="searchGender(1)">
                                <input name="gender" type="radio" id="male" />
                                <label for="male" >Male</label>
                            </div>
                            <div class="col-md-12" @click="searchGender(2)">
                                <input name="gender" type="radio" id="female" />
                                <label for="female">Female</label>
                            </div>
                        </div>
                    </div>

                    <div class="card provider_closeby_card" id="state">
                        <div class="row doc_title">
                            Select State
                        </div>
                        <hr>
                        <div class="row mos__">
                            <div class="state-info" v-for="(state,index) in states">
                                <p @click="getCities(state.id)"> {{ state.name }}
                                  <span class="state-count">{{ (Counters(items[index])) ? Counters(items[index]) : 0 }}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card provider_closeby_card" id="city">
                        <div class="row state-title">
                            <div class="col-6">
                                Select City
                            </div>
                            <div class="col-6" id="back-btn">
                                <i class="fas fa-arrow-left pull-right"></i>
                            </div>
                        </div>
                        <hr>
                        <div class="row mos__">
                            <div class="city-info" v-for="(city,index) in cities">
                                <p @click="getCitiesUsers(city.id)">
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
                if (n > 9){
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
            searchMeduim(value, VuejsPaginate){
              let component = this;
                axios.get('https://app.medflit.com/api/search_filter?service='+value+'&option='+component.option+'&page='+this.results.current_page)
                    .then(function (response) {
                      component.results = response.data.doctors;
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
