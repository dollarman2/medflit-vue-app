<template>
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
