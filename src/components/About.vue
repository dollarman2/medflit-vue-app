<template>
<div>
        <div class="row my-container1">
		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-8" style="padding-bottom: 3%">
				<h2 style="padding-top: 18%; color: white;" class="text-center">Feeling ill?</h2>
				<h1 class="text-center" style="color: white;"><strong>Talk to a Doctor Now</strong></h1>
				<div class="form-group col-md-4 col-sm-4">
					<select class="form-control input-lg" v-model="option">
            <option value="">--Select Type--</option>
						<option value="1" :selected="1 == option ? 'true' : 'false'">Find Doctors</option>
						<option value="2" :selected="2 == option ? 'true' : 'false'">Find Pharmacies</option>
						<option value="3" :selected="3 == option  ? 'true' : 'false'">Find Hospitals</option>
					</select>
				</div>

				<div class="form-group col-md-6 col-sm-6 map">
					<span class="fa fa-map-marker"></span>
                    <input class="form-control input-lg" v-model="location" type="search" id="search" placeholder="Search by location..." required>

				</div>

				<div style="display: flex; justify-content: center;">
					<button @click="addMessage()" type="button" class="search-button input-lg" id="search_ref">Search</button>
				</div>
			</div>
			<div class="col-md-2" style="float: left"></div>
		</div>

		<div class="row providers-list" style="padding-bottom: 15%; padding-left: 50px">
			<div class="col-md-1"></div>
			<div class="col-md-10">
				<ul class="fa-ul">
            <li v-for="list in lists"><i class="fa-li fa fa-circle"></i>{{ list }}</li>
				</ul>
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
          return{
            lists:[],
            location:'',
            option:''
          }
        },
        mounted() {
            this.option = this.$route.params.id;
            // alert(this.option);
            console.log('Component mounted.');
            this.getList();
        },
        methods: {
          getList() {
              axios.get('http://127.0.0.1:8000/api/list').then(response => {
                  this.lists = response.data.list;
              });
          },

          addMessage() {
              var id = (this.option) ? this.option : 1;
              var location = (this.location) ? this.location : 'Lagos';
              this.$router.push('/search/'+id+'/'+location);
          }
        }
    }
</script>
<style>
  @import url('../assets/index.css');
</style>
