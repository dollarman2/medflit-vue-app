<template>
    <div class="row auth">
    <div class="row">
    <div class="col-md-10 col-md-offset-1">
        <div class="card">
            <div class="card-body">
                <div class="row proivder_hearder">
                             <div class="col-md-2">
                                <img src="../assets/logo.png" class="img-responsive profile-user-img img-fluid img-circle" alt="User Image" style="width: 120px; height: 120px"/>
                             </div>
                            <div class="col-md-8">
                                <h2 class="" style="font-family: 'Segoe UI">Jame pharmacy</h2>
                                <h5>John street lekki lagos</h5>
                               
                                <div style="margin-top: 0px ">
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
                                    <p style="color: red"><span class="fa fa-times"> Medical Registration Not Verified</span></p>
                                <div class="row">
                                        <button class="btn btn-sm btn-primary">
                                            <span class="fa fa-map-marker"></span> &nbsp; Get Directions
                                       </button>
                                        <button class="btn btn-sm btn-primary">&nbsp; Select Pharmacy</button>                                   
                                </div>

                            </div>
                   </div>
                </div>
            </div>

        <div class="row provider_tab">
            <div class="col-12">
                    <ul class="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#overview" data-toggle="tab">Overview</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services" data-toggle="tab">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#pharmacy_review" data-toggle="tab">Pharmacy Review</a></li>
                    <li class="nav-item"><a class="nav-link" href="#gallery" data-toggle="tab">Photo Gallery</a></li>
                    </ul>

                <div class="">
                    <div class="tab-content">
                        <div class="active tab-pane" id="overview"  style="min-height: 400px; background-color:white; padding: 25px;">
                            <div class="row">
                                <div class="col-md-8" style="padding: 5px 10px">
                                    <br>
                                    <h5>Registration Documents</h5>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <tr>
                                                <td class="name"><span class="fa fa-edit"></span> &nbsp;CAC Reg. Number:</td>
                                                <td>confirmed <span class="fa fa-check"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="name"><span class="fa fa-edit"></span> &nbsp;Licence Number:</td>
                                                <td>confirmed <span class="fa fa-check"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="name"><span class="fa fa-group"></span> &nbsp;Pharmaceutical Registration Bodies:</td>
                                                <td><span class="">Nigerian Pharmaceutical Groups <br>Nigerian Health Ministry</span></td>
                                            </tr>
                                            <tr>
                                                <td><h5>Contacts</h5></td>

                                            </tr>
                                            <tr>
                                                <td class="name"><span class="fa fa-phone"></span> &nbsp;Phone </td>
                                                <td><span class=""></span></td>
                                            </tr>
                                            <tr>
                                                <td class="name"><span class="fa fa-envelope"></span> &nbsp;Email</td>
                                                <td><span class=""><a href="mailto:">Send Email to Pharmacy</a></span></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.tab-pane -->
                        <div class="tab-pane fade" id="services" style="min-height: 400px; background-color:white; padding: 25px;">
                            <div class="row">
                                <div class="col-md-8" style="padding: 5px 10px">
                                    <br>
                                    <h5>Services</h5>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <tr>
                                                <td class="name">Deliveries</td>
                                                <td><span id="val">&nbsp;</span></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="name">Payment Modes</td>
                                            
                                                <td><span id="val">&nbsp;</span></td>
                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.tab-pane -->
                        <div class="tab-pane fade" id="pharmacy_review"  style="padding:25px;  min-height: 400px; background-color:white;">
                            <div class="row">
                                <table class="table responsive">
                                        <tr>
                                            <th width="50%">Review Messages</th>
                                            <th width="50%">rating</th>
                                        </tr>
                                        <tr>
                                            <td> <p>
                                                <br>
                                                <strong><i>                                           
                                                </i></strong>
                                                </p></td>
                                            <td> 
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
                                        </div></td>
                                        </tr>      
                                    </table>

                            </div>
                        </div>
                        <!-- /.tab-pane -->
                        <div class="tab-pane fade" id="gallery"  style="min-height: 400px; background-color:white;">
                            
                            <div class="col-md-12 pull-right " style="padding:20px;">
                            <ul class="">                    
                                    <div class='list-group'>
                                            <div  class="fancybox col-sm-4 col-xs-6 col-md-3 col-lg-3"  data-fancybox-group="gallery" href="../assets/logo.png">                                                                                   
                                                    <img src="../assets/logo.png" class="img-responsive">
                                            </div> <!-- col-6 / end -->
                                    </div> 
                                      <div class='list-group'>
                                            <div class="fancybox col-sm-4 col-xs-6 col-md-3 col-lg-3"  data-fancybox-group="gallery" href="../assets/logo.png">                                                                                    
                                                    <img src="../assets/logo.png" class="img-responsive">
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
