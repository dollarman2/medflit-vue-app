<template>
     <div class="row auth">
    <div class="col-md-10 col-md-offset-1">
        <div class="card">
            <div class="card-body">
                <div class="row proivder_hearder">
                    <div class="col-md-2">
                            <img src="../assets/logo.png" class="img-responsive profile-user-img img-fluid img-circle" alt="User Image" style="width: 120px; height: 120px"/>
                      
                    </div>

                    <div class="col-md-8" >
                        <h2 class="" style="font-family: 'Segoe UI">
                            <span class="text-capitalize">Dr Emmanuel Okoro,<small style="font-size: 15px"> Md</small></span> <br>
                        </h2>
                        <h3>general practice</h3> 
                        <h5>5 Years Experience</h5>

                        <h6><label for="">John hospital</label> </h6>
                        <div style="margin-top: 0px">
                            <div class='rating-star'>
                                <ul id='star'>
                                    <li class='stars' title='Poor' data-value='1'>
                                    <i class='fa fa-star fa-fw'></i>
                                    </li>
                                    <li class='stars' title='Fair' data-value='2'>
                                    <i class='fa fa-star fa-fw'></i>
                                    </li>
                                    <li class='stars' title='Good' data-value='3'>
                                    <i class='fa fa-star fa-fw'></i>
                                    </li>
                                    <li class='stars' title='Excellent' data-value='4'>
                                    <i class='fa fa-star fa-fw'></i>
                                    </li>
                                    <li class='stars' title='WOW!!!' data-value='5'>
                                    <i class='fa fa-star fa-fw'></i>
                                    </li>
                                </ul>
                            </div>
                            <span></span><br>
                        </div>

                            <p style="color: red"><span class="fa fa-times">Medical Registration Not Verified</span></p>
                      
                        <div class="row">
                            <div class="review-button" data-target="#provider_review" data-toggle="modal">
                                <button class="btn btn-sm btn-primary"><span class="fa fa-star"></span><strong> Give Review</strong></button>
                                <button class="btn btn-sm btn-primary"><a target="_blank" href=""><span class="fa fa-map-marker"></span>
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
                <li class="nav-item"><a class="nav-link" href="#services" data-toggle="tab">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#patient_review" data-toggle="tab">Patient Review</a></li>
                <li class="nav-item"><a class="nav-link" href="#gallery" data-toggle="tab">Hospital Photo Gallery</a></li>
            </ul>

        <div class="">
            <div class="tab-content">
                <div class="active tab-pane" id="overview"  style="min-height: 300px; background-color:white;">
                    <div class="row">
                        <div class="col-md-6" style="padding:25px; border-right: 1px solid #ccc">
                            <br>
                            <h5 class="text-left">Doctors Info</h5>
                            <div class="table-responsive">
                                <table class="table">
                                    <tr>
                                        <td class="name"><span class="fa fa-hospital-o"></span> &nbsp; Hospital Name:</td>
                                        <td><span class="" id="val">John hospital</span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-map-marker"></span> &nbsp; Hospital Address:</td>
                                        <td><span class="" id="val">28 ibrahime eletu street</span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-phone"></span>&nbsp; Phone Number:</td>
                                        <td><span class="" id="val">80944545454545</span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-user"></span>&nbsp; Medium</td>
                                        <td><span class="" id="val">online</span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-envelope"></span>&nbsp; Email</td>
                                        <td><span class="" id="val"><a href="">Send mail to doctor</a></span></td>
                                    </tr>
                                    <tr>
                                        <td class="name"><span class="fa fa-info-circle"></span>&nbsp; Doctors Bio</td>
                                        <td><span class="" id="val">my bio</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div style="padding: 5px 10px">
                                <br>
                                <h5 class="hd">Qualifications and Experience</h5>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tr>
                                            <td class="name">Education</td>
                                            <td>
                                                    <span class="prov-qual-span">  Medical School -</span> <span id="val">Standford</span> <br>
                                                    <span class="prov-qual-span"> Course -</span> <span id="val">Medicine</span> <br>
                                                    <span class="prov-qual-span"> Year of graduation</span> - <span id="val">2012</span>-*+****
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">Language Spoken</td>
                                            <td>
                                            <span style="font-size: 13px">English</span>,
                                             
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">Certifications</td>
                                            <td>
                                            <span style="font-size: 13px">NBE</span>,
                                              
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="name">Specialities</td>
                                            <td><span style="font-size: 13px"></span></td>
                                        </tr>
                                    </table>
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
                                        <li>pharmacy</li>
                                        <li>Lab testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.tab-pane -->
                <div class="tab-pane" id="patient_review"  style="min-height: 300px; background-color:white; padding:25px;">
                  
                       <table class="table responsive">
                           <tr>
                               <th width="50%">Review Messages</th>
                               <th width="50%">rating</th>
                           </tr>
                           <tr>
                               <td> <p>
                                      <br>
                                      <strong><i> </i></strong>
                                     </p></td>
                               <td> 
                              <div style="margin-top: 0px">
                                <div class="">
                                    <ul id='star'>
                                        <li class='stars' title='Poor' data-value='1'>
                                        <i class='fa fa-star fa-fw'></i>
                                        </li>
                                        <li class='stars' title='Fair' data-value='2'>
                                        <i class='fa fa-star fa-fw'></i>
                                        </li>
                                        <li class='stars' title='Good' data-value='3'>
                                        <i class='fa fa-star fa-fw'></i>
                                        </li>
                                        <li class='stars' title='Excellent' data-value='4'>
                                        <i class='fa fa-star fa-fw'></i>
                                        </li>
                                        <li class='stars' title='WOW!!!' data-value='5'>
                                        <i class='fa fa-star fa-fw'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div></td>
                           </tr>      
                       </table>

                </div>
                <div class="tab-pane" id="book_appointment"  style="min-height: 300px; background-color:white;">
                    <div class="row">
                        <div class="" style="margin: 20px">
                            <p class="text-center"><button class="view-availability-btn btn btn-primary" data-provider_id=""><i class="fa fa-calendar-times-o"></i>&nbsp; Book appointment</button></p>
                        </div>
                    </div>

                    <div class="Providerschedule1 col-md-8" style="display:none;"></div>
                        <h4 class="schedule-loader text-center">Loading availability...</h4>
                        <div class="provider-availability-div scheduler ">
                            <div class="schedule_list">
                                <div class="row">
                                    <div class="col-md-6">
                                        <table class="table text-center">
                                            <tr>
                                            <th><input type="radio" name="show_time" checked id="show_morning" value="show_morning"></th>
                                            <th><input type="radio" name="show_time" id="show_afternoon" value="show_afternoon"></th>
                                            <th><input type="radio" name="show_time" id="show_evening" value="show_evening"></th>
                                            </tr>
                                            <tr>
                                            <td>
                                                <div class="form-group">
                                                Morning
                                                </div>
                                            </td>
                                            <td>
                                            <div class="form-group">
                                                Afternoon
                                                </div>
                                            </td>
                                            <td>
                                            <div class="form-group">
                                                &nbsp;Evening
                                                </div>
                                            </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="col-md-6">
                                        <button class="btn next btn-flat btn-sm btn-success pull-right" style="margin-right: 20px;" data-provider_id="">Next</button>
                                        <button class="btn prev btn-flat btn-sm btn-success pull-right" style="margin-right: 5px;" data-provider_id="">Prev</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="Providerschedule1 col-md-12" style="display:none;"></div>
                                    <div class="col-md-12 display-schedule pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- /.tab-pane -->
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
    
</div>
</div>

</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
export default {
    
}
</script>

<style>
  @import url('../assets/index.css');
</style>