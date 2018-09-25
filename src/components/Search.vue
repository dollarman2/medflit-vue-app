<template>
    <div class="row auth">

        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-7 col-md-offset-1">

            <div class="doctor-search" style="border-radius: 2px;">
                <form action="">
                    <div class="doctor-searching">
                        <div class="row">
                            <div class="form-group col-md-6 search" v-if="option == 1">
                                <span class="fa fa-search" @click="searchUser()"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Doctor Search by City, Name, etc..." name="" id="search">
                                <div class="col-md-12 result" style="z-index: 6;background-color: #fefefe;color: #b2b3f2;">
                                  <li v-for="result in results"><span v-if="result.profile">{{ result.profile.first_name + ' ' + result.profile.last_name }}</span><span v-else>{{ result.first_name + ' ' + result.last_name }}</span></li>
                                </div>
                            </div>

                            <div class="form-group col-md-10 search" v-if="option == 2">
                                <span class="fa fa-search"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Pharmacy Search by City, Name, etc..." name="" id="search" v-on:keyup="searchUser()">
                                <div class="col-md-12 result" style="z-index: 6;background-color: #fefefe;color: #b2b3f2;">
                                </div>
                            </div>

                            <div class="form-group col-md-10 search" v-if="option == 3">
                                <span class="fa fa-search"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Hospital Search by City, Name, etc..." name="" id="search" v-on:keyup="searchUser()">
                                <div class="col-md-12 result" style="z-index: 6;background-color: #fefefe;color: #b2b3f2;"></div>
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
            <div style="height: auto; background-color: white; border-radius: 2px;">
                <div class="card">
                    <div class="card-header doctor-details-header">
                        <h5>{{ type }}</h5>
                    </div>
                    <div class="card-body provider-details-box" v-if="option == 1" v-for="(result,index) in results">
                        <div class="row">
                            <div class="col-md-6">
                                <div style="margin: 0">
                                    <img v-if="result.profile" v-bind:src="'http://localhost:8000/'+result.profile.profile_picture" class="img-responsive doctor-avatar" alt="">
                                    <img v-else v-bind:src="'http://localhost:8000/'+result.profile_picture" class="img-responsive doctor-avatar" alt="">
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="pull-right" >
                                    <div>
                                    <p class="doc-info" v-if="result.medium_of_service == 1">Medium: Online</p>
                                    <p class="doc-info" v-if="result.medium_of_service == 2">Medium: Home Service</p>
                                    <p class="doc-info" v-if="result.medium_of_service == 3">Medium: Online & Home Service</p>
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
                                </div>
                            </div>
                        </div>
                        <h3 class="provider_name">
                            <a href="" v-if="result.profile">
                            <span class="text-capitalize" style="text-decoration: none">
                                {{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.profile.title) ? special : '' }}</span>
                                </span>
                            </a>
                            <a href="" v-else>
                            <span class="text-capitalize" style="text-decoration: none">
                                {{ result.first_name+' ' + result.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.title) ? special : '' }}</span>
                                </span>
                            </a>
                        </h3>
                        <p style="font-weight: bold; color: gray" v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</p>

                        <h5 style="font-weight: bold; color: gray;">{{ result.medical_organization }}<br><b v-if="result.profile">{{ result.profile.address }}</b><b v-else>{{ result.address }}</b> </h5>

                        <span></span>
                        <div style="margin-top: 0px" v-if="result.rating">
                            <span v-bind:class="(result.rating.rating_count >= 1) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 2) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 3) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 4) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span v-bind:class="(result.rating.rating_count >= 5) ? 'fa fa-star checked' : 'fa fa-star'"></span>
                            <span>(1 review)</span><br>
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
                                <p class="text-center"><a v-bind:href="'tel:'+result.telephone"><i class="fa fa-phone"></i> Contact Hospital</a></p>
                            </div>

                            <div class="provider-appointment-button col-xs-6">
                                <p class="text-center"><a class="view-availability-btn" href="https://app.medflit.com/login" target="_blank"><i class="fa fa-calendar-times-o"></i>&nbsp; Book appointment</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="details">
            <div class="col-md-3">
                <div class="card providers-background">
                    <div class="card-header doctor-details-header">
                        <h5>{{ type }} closeby</h5>
                    </div>

                    <div class="card-body providers-close-by" v-if="option == 1" v-for="(result,index) in near_results">
                        <div class="providers-info">
                            <div class="row">
                                <div class="col-md-3">
                                   <img v-bind:src="'http://localhost:8000/'+result.profile.profile_picture" class="img-responsive doctor-avatar" alt="">
                                </div>
                                <div class="col-md-9 providers-inner-info">
                                    <p style=""><span style="color: #3c8dbc;">{{ result.profile.first_name+' ' + result.profile.last_name }},<span v-for="(special,index) in classes" >{{ (index == result.title) ? special : '' }}</span></span></p>
                                    <p v-for="(special,index) in specialization" >{{ (index == result.specialty_id) ? special : '' }}</p>
                                    <p><b>{{ result.medical_organization }}</b></p>
                                    <p><b>{{ result.address }}</b></p>
                                    <p><b><a href="#"><i class="fa fa-map-marker" style="color: #3c8dbc;"> Get directions</i></a> (1.6 km Away)</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 20px">
                    <div class="card providers-background">
                        <div class="card-header doctor-details-header">
                            <div>
                                <h5>Medium of Service</h5>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="providers-close-by" v-for="(serv,index) in services">
                                <input type="radio" name="service"  @click="searchMeduim(index)">&nbsp; {{ serv }}
                            </div>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 20px">
                    <div class="card providers-background">
                        <div class="card-header doctor-details-header">
                            <div>
                                <h5>Gender</h5>
                            </div>
                        </div><!--end of card header-->

                        <div class="card-body">
                            <div class="providers-close-by">
                                <input type="radio" name="gender" @click="searchGender(1)">&nbsp; Male
                            </div>

                            <div class="providers-close-by">
                                <input type="radio" name="gender" @click="searchGender(2)">&nbsp; Female
                            </div>
                        </div><!--end of card body-->

                    </div> <!--end of card-->
                </div>

                <div style="margin-top: 20px">
                    <div class="card providers-background">
                        <div class="card-header doctor-details-header">
                            <div>
                                <h5>Country</h5>
                            </div>
                        </div><!--end of card header-->

                        <div class="card-body"><br>
                            <div class="form-group search">
                                <span class="fa fa-search"></span>
                                <input class="form-control" type="" placeholder="Find Doctor by Country ..." name="" value="">
                            </div>
                            <hr>
                            <div class="providers-close-by">
                            <h6 class="text-center">Select State</h6>
                                <div class="row">

                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="state-info">
                                            <p>Lagos</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="state-info">
                                            <p>Ogun</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="state-info">
                                            <p>Abuja</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="state-info">
                                            <p>Abuja</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="state-info">
                                            <p>Abuja</p>
                                        </div>
                                    </div>
                                    <!-- <div class="col-md-3">
                                        <div class="provider-price-info">
                                            <p>Nigeria</p>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                            <div class="providers-close-by">
                            <h6 class="text-center">Select City</h6>
                                <div class="row">

                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="lga-info">
                                            <p>Ikorodu</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="lga-info">
                                            <p>Ikeja</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="lga-info">
                                            <p>Yaba</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="lga-info">
                                            <p>Ajegunle</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3 col-xs-3">
                                        <div class="lga-info">
                                            <p>Oshodi</p>
                                        </div>
                                    </div>
                                    <!-- <div class="col-md-3">
                                        <div class="provider-price-info">
                                            <p>Nigeria</p>
                                        </div>
                                    </div> -->
                                </div>
                            </div>


                        </div><!--end of card body-->
                     </div> <!--end of card-->
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
    name: 'signup',
        data(){
            return {
                specialty:'',
                specialization:[],
                results:[],
                services:[],
                service: 0,
                gender: 0,
                near_results:[],
                classes:[],
                plans:[],
                plan:'',
                type:'',
                option:'',
                search:'',
                latval: '',
                lngval: '',
            }
        },
        mounted() {
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

        },
        methods: {
            searchUser(){
              let component = this;
                axios.get('http://localhost:8000/api/search_?search='+component.search+'&option='+component.option)
                    .then(function (response) {
                      component.results = response.data.doctors;
                      console.log(component.results);
                    }, function (error) {
                    });
            },
            searchPlanSpecialty(){
              let component = this;
                axios.get('http://localhost:8000/api/search_filter?search='+component.search+'&option='+component.option+'&specialty='+component.specialty+'&plan='+component.plan)
                    .then(function (response) {
                      component.results = response.data.doctors;
                      console.log(component.results);
                    }, function (error) {
                    });
            },
            searchGender(value){
              let component = this;
                axios.get('http://localhost:8000/api/search_filter?gender='+value+'&option='+component.option)
                    .then(function (response) {
                      component.results = response.data.doctors;
                      console.log(component.results);
                    }, function (error) {
                    });
            },
            searchMeduim(value){
              let component = this;
                axios.get('http://localhost:8000/api/search_filter?service='+value+'&option='+component.option)
                    .then(function (response) {
                      component.results = response.data.doctors;
                      console.log(component.results);
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
                  alert("static location");
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
            nearbyDoctors: function(lat,lng){
              let component = this;
                axios.get('http://localhost:8000/api/near_by_providers?lat='+lat+'&lng='+lng)
                    .then(function (response) {
                      component.near_results = response.data.providers;
                      console.log(component.near_results);
                    }, function (error) {
                    });
            },

            nearbyPharmacies(lat,lng){
              let component = this;
                axios.get('http://localhost:8000/api/near_by_pharmacy?lat='+lat+'&lng='+lng)
                    .then(function (response) {
                      component.near_results = response.data.pharmacies;
                      console.log(component.results);
                    }, function (error) {
                    });
            },

            nearbyHospitals(lat,lng){
              let component = this;
                axios.get('http://localhost:8000/api/near_by_hospital?lat='+lat+'&lng='+lng)
                    .then(function (response) {
                      component.near_results = response.data.hospitals;
                      console.log(component.results);
                    }, function (error) {
                    });
            },

            getSpecialties() {
                axios.get('http://127.0.0.1:8000/api/list').then(response => {
                    this.specialization = response.data.specialty;
                    this.plans = response.data.plan;
                    this.services = response.data.services;
                    this.classes = response.data.classAbb;
                });
            },
        }
    }
</script>
<style>
  @import url('../assets/index.css');
</style>
