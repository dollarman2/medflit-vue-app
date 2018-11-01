<template>
  <div>
    <!-- Sidebar Holder -->
		<nav id="sidebar">
			<div id="dismiss">
				<i class="fa fa-arrow-left"></i>
			</div>

			<div class="sidebar-header">
				<!-- <h3>Bootstrap Sidebar</h3> -->
				<router-link :to="{ name: 'Home' }"><img src="/static/images/logo-white.png" style="width: 90px; height: auto"></router-link>
			</div>

			<ul class="list-unstyled components">
				<li>
					<router-link :to="{ name: 'Condition' }">
						<i class="fa fa-bars"></i>
						&nbsp;&nbsp;&nbsp;Conditions
					</router-link>
					<router-link :to="{ name: 'Home' }" data-toggle="collapse" aria-expanded="false">
						<i class="fa fa-file"></i>
						&nbsp;&nbsp;&nbsp;Solutions
					</router-link>
					<ul class="collapse list-unstyled" id="pageSubmenu">
						<li><router-link :to="{ name: 'Home' }">Patient</router-link></li>
						<li><router-link :to="{ name: 'Provider' }">Provider</router-link></li>
						<li><router-link :to="{ name: 'Pharmacy' }">Pharmacy</router-link></li>
						<li><router-link :to="{ name: 'Partner' }">Partners</router-link></li>
					</ul>
				</li>
				<li>
					<router-link :to="{ name: 'Partner' }">
						<i class="fa fa-paperclip"></i>
						&nbsp;&nbsp;&nbsp;FAQs
					</router-link>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-send"></i>
						&nbsp;&nbsp;&nbsp;Contact
					</a>
				</li>
			</ul>

			<ul class="list-unstyled CTAs">
				<li><a href="login.html" class="btn_ btn-login2">LOGIN</a></li>
				<li><a href="register.html" class="btn_ btn-register2">REGISTER</a></li>
			</ul>
		</nav>

		<!-- Page Content Holder -->
		<div id="content">
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navvy">
						<span id="logo"><router-link :to="{ name: 'Home' }"><img src="/static/images/Medflit-LogoBlue.png" class="img-responsive" style="width: 90px; height: auto"></router-link></span>
						<span>
							<button type="button" id="sidebarCollapse" class="btn btn-in navbar-btn pull-right reg">
								<i class="fa fa-align-left"></i>
							</button>
						</span>
						<span><a href="register.html" id="register" class="btn_ btn-register btn-sm reg">REGISTER</a></span>
						<span><a href="login.html" id="login" class="btn_ btn-login btn-sm reg" style="">LOGIN</a></span>
					</div>
				</div>
			</nav>
		</div>
  </div>
</template>
<script>
export default {
  name: 'TopNavbar'
}
</script>
