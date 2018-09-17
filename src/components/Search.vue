<template>
    <div class="row auth">

        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-7 col-md-offset-1">

            <div class="doctor-search" style="border-radius: 2px;">
                <form action="">
                    <div class="doctor-searching">
                        <div class="row">
                            <div class="form-group col-md-6 search" v-if="option == 1">
                                <span class="fa fa-search"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Doctor Search by City, Name, etc..." name="" id="search">
                                <div class="col-md-12 result" style="z-index: 6;background-color: #fefefe;color: #b2b3f2;"></div>
                            </div>

                            <div class="form-group col-md-10 search" v-if="option == 2">
                                <span class="fa fa-search"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Pharmacy Search by City, Name, etc..." name="" id="search" v-on:keyup="searchUser()">
                                <div class="col-md-12 result" style="z-index: 6;background-color: #fefefe;color: #b2b3f2;"></div>
                            </div>

                            <div class="form-group col-md-10 search" v-if="option == 3">
                                <span class="fa fa-search"></span>
                                <input class="form-control" type="text" v-model="search" placeholder="Find Hospital Search by City, Name, etc..." name="" id="search" v-on:keyup="searchUser()">
                                <div class="col-md-12 result" style="z-index: 6;background-color: #fefefe;color: #b2b3f2;"></div>
                            </div>

                            <div class="form-group col-md-3" v-if="option == 1">
                                <select name="" class="form-control" v-model="specialty">
                                    <option value="">--Select Speciality--</option>
                                    <option v-for="special in specialization" v-bind:value="special">{{ special }}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3" v-if="option == 1">
                                <select name="" class="form-control" v-model="plan">
                                    <option value="">--Select Plan--</option>
                                    <option value="Emergency">Emergency</option>
                                    <option value="Emergency">Emergency</option>
                                    <option value="Emergency">Emergency</option>
                                    <option value="Emergency">Emergency</option>
                                    <option value="Emergency">Emergency</option>
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
                    <div class="card-body provider-details-box">
                        <div class="row">
                            <div class="col-md-6">
                                <div style="margin: 0">
                                    <img src="../../static/img/slider/doctor.jpg" class="img-responsive doctor-avatar" alt="">
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="pull-right" >
                                    <div>
                                    <p class="doc-info">Medium: Online & Hospital</p>
                                    </div>

                                    <div class="provider-price-info">
                                        <p>Basic price of N3000 per Online Session</p>
                                    </div>

                                    <div class="provider-price-info">
                                        <p>Basic price of N24000 per Hospital Consultation</p>
                                    </div>

                                    <div class="provider-price-info">
                                        <p>Basic price of N30000 per Home Consultation</p>
                                    </div>

                                    <div>
                                        <p class="pull-right doc-photo-info">Royal Hospital(PHOTOS)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 class="provider_name">
                            <a href="">
                            <span class="text-capitalize" style="text-decoration: none">
                                Dr. Azeez Saka,</span><span><small>MD</small>
                                </span>
                            </a>
                        </h3>
                        <p style="font-weight: bold; color: gray">General Practice</p>

                        <h5 style="font-weight: bold; color: gray;">Royal Hospital International <br>72 Aina Street, Ojodu, Ikeja. </h5>

                        <span></span>
                        <div style="margin-top: 0px">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-o"></span>
                            <span>(1 review)</span><br>
                        </div>
                        <div class="row" style="margin-top: 20px;">
                            <div class="provider-action-button col-xs-6">
                                <p class="text-center"><a href="tel:"><i class="fa fa-phone"></i> Contact Hospital</a></p>
                            </div>

                            <div class="provider-appointment-button col-xs-6">
                                <p class="text-center"><a class="view-availability-btn" data-provider_id=""><i class="fa fa-calendar-times-o"></i>&nbsp; Book appointment</a></p>
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
                        <h5>Providers closeby</h5>
                    </div>

                    <div class="card-body providers-close-by">
                        <div class="providers-info">
                            <div class="row">
                                <div class="col-md-3">
                                    <img src="../../static/img/slider/doctor.jpg" class="img-responsive provider-avatar" alt="">
                                </div>
                                <div class="col-md-9 providers-inner-info">
                                    <p style=""><span style="color: #3c8dbc;">Dr. Wale Olaokun</span>, MD</p>
                                    <p>Emergency</p>
                                    <p><b>First Care Hospital</b></p>
                                    <p><b>13 Bamidele Eletu Avenue, Lagos, Nigeria</b></p>
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
                            <div class="providers-close-by">
                                <input type="radio" name="" value="" id="">&nbsp; Online
                            </div>

                            <div class="providers-close-by">
                                    <input type="radio" name="" value="" id="">&nbsp; Hospital
                            </div>

                            <div class="providers-close-by">
                                <input type="radio" name="" value="" id="">&nbsp; Home Service
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
                                <input type="checkbox" name="" value="" id="">&nbsp; Male
                            </div>

                            <div class="providers-close-by">
                                <input type="checkbox" name="" value="" id="">&nbsp; Female
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
                plan:'',
                type:'',
                option:'',
                search:'',
            }
        },
        mounted() {
            if(this.$route.params.id == 1){
              this.type = "Doctor";
            }else if(this.$route.params.id == 2){
              this.type = "Pharmacy";
            }else{
              this.type = "Hospital";
            }
            this.option = this.$route.params.id;
            this.getSpecialty();
        },
        methods: {
            searchUser(){
                let component = this;
                axios.get('http://localhost:8000/api/search_?search='+this.search+'&option='+this.option)
                    .then(function (response) {
                      console.log(response);
                      $('.result').html("<span style='color:#2fdab8;'>"+response.data+"</span>");
                    }, function (response) {
                    });
            },
            getSpecialty() {
                axios.get('http://127.0.0.1:8000/api/list').then(response => {
                    this.specialization = response.data.specialty;
                });
            },
        }
    }
</script>
<style>
  @import url('../assets/index.css');
</style>
