<template>
    <div class="search__">
        <div class="container">
            <div class="search-inner">
                <div class="card provider_details_card">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="provider_avatar">
                                <img v-if="result.profile" v-bind:src="'https://app.medflit.com/'+result.profile.profile_picture" class="img-responsive profile_img" alt="">
                                <img v-else src="images/img/evie_default_bg.jpeg" class="img-responsive profile_img" alt="">
                                <router-link :to="{ path: '/search/2/Lagos' }"><i id="bck" class="fas fa-arrow-left pull-right"></i> </router-link>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div class="pro-details">
                                <h3>{{ result.business_name }}</h3>
                                <h6 class=""><i class="fas fa-map-pin ic"></i>{{ result.address }}</h6>
                                <h6 v-if="result.status == 0" class="unverified"><i class="fas fa-thumbs-down"></i>&nbsp; Pharmacy registration not verified</h6>
                                <h6 v-else class="verified"><i class="fas fa-thumbs-down"></i>&nbsp; Pharmacy registration not verified</h6>

                                <div class="ratings" v-if="result.rating">
                                    <span v-bind:class="(result.rating.rating_count >= 1) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 2) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 3) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 4) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span v-bind:class="(result.rating.rating_count >= 5) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                    <span>({{ (result.rating.total_rating != '') ? result.rating.total_rating : 0  }} review)</span>
                                </div>
                                <div class="buttons">
                                    <span><a v-if="result.profile" target="_blank" :href="'https://www.google.com/maps/dir/'+direction+'/'+result.profile.address+'/?hl=en-US'" class="btn____ btn-login btn-sm"><i class="fas fa-map-marker"></i>&nbsp; Get Direction</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#overview">Overview</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#patient_review">Pharmacy review</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#gallery">Gallery</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content card provider_profile_card">
                    <div id="overview" class="container tab-pane active">
                        <div class="row">
                            <div class="col-md-8">
                                <h3>Registration Documents</h3>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <!-- <tr>
                                                <th><i class="fas fa-edit ic"></i>&nbsp; CAC Reg. No:</th>
                                                <td>AF1234</td>
                                            </tr> -->

                                            <tr>
                                                <th><i class="fas fa-edit ic"></i>&nbsp; Licence No:</th>
                                                <td  v-if="result.status == 0" class="unverified"> Not Confirmed <span class="fa fa-check"></span></td>
                                                <td  v-else class="verified"> Confirmed <span class="fa fa-check"></span></td>
                                            </tr>
                                            <tr>
                                                <th><i class="fas fa-user ic"></i>&nbsp; Pharmaceutical Reg. Bodies:</th>
                                                <td>Nigeria Pharmaceutical Groups</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3>Contacts</h3>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th><i class="fas fa-phone ic"></i>&nbsp; Telephone:</th>
                                                <td><span class="">{{ result.telephone }}</span></td>
                                            </tr>

                                            <tr>
                                                <th><i class="fas fa-envelope ic"></i>&nbsp; Email:</th>
                                                <td><span class=""><a v-if="result.user" :href="'mailto:'+result.user.email">Send Email to Pharmacy</a></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="services" class="container tab-pane fade" style="padding-bottom: 20px;">
                        <h3>Services</h3>
                        <div class="row">
                            <div class="col-md-6 col-xs-12 pro-details">
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Deliveries
                                        <span class="badge badge-success badge-pill" v-if="result.delivery_type" v-for="(delivery,index) in result.delivery_type"><i class="fas fa-check"></i>{{ delivery[index] }}&nbsp;</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Payment Modes
                                        <span class="badge badge-success badge-pill" v-if="result.payment_method" v-for="(delivery,index) in result.payment_method"><i class="fas fa-check"></i>{{ delivery[index] }}&nbsp;</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="patient_review" class="container tab-pane fade" style="padding-bottom: 20px;">
                        <h3>Pharmacy Review</h3>
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
                                <tr v-if="result.reviews" v-for="(review,index) in result.reviews">
                                  <td>{{ index+1 }}</td>
                                  <td> {{ review.message}}</td>
                                  <td>
                                    <div style="margin-top: 0px">
                                        <span v-bind:class="(review.rating >= 1) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                        <span v-bind:class="(review.rating >= 2) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                        <span v-bind:class="(review.rating >= 3) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                        <span v-bind:class="(review.rating >= 4) ? 'fas fa-star ratings' : 'fas fa-star'"></span>
                                        <span v-bind:class="(review.rating >= 5) ? 'fas fa-star ratings' : 'fas fa-star'"></span><br>
                                    </div>
                                  </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="gallery" class="container tab-pane fade" style="padding-bottom: 20px;">
                        <h3>Gallery</h3>
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
                deliveries:[],
                payment_method:[],
                direction:'',
            }
        },
        mounted() {
          this.getPharmacy();
          this.geoLocationInit();
        },
        methods: {
          getPharmacy(){
            let component = this;
              axios.get('https://app.medflit.com/api/pharmacy/'+this.$route.params.id)
                  .then(function (response) {
                    component.result = response.data.pharmacy;
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
