<template>
  <div class="">
    <div class="footer footer--dark">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div style="margin-top: 30px">
							<router-link :to="{ name: 'Home' }"><img src="/static/images/Medflit-LogoBlue.png" class="img-responsive" style="width: 90px; height: auto"></router-link>
						</div>
						<div class="contacts">
							<i class="fa fa-envelope">&nbsp;&nbsp;</i><a href="mailto: info@medflithealthresources.com"> info@medflithealthresources.com</a><br>
							<i class="fa fa-phone">&nbsp;&nbsp;</i><a href="tel:+2348135845010"> +234 813 584 5010</a><br>
							<i class="fa fa-map-marker">&nbsp;&nbsp;</i> 24, Prince Ibrahim Eletu Avenue, Osapa London, Lekki, Lagos, Nigeria.
						</div>
					</div>
					<div class="col-md-8">
						<div class="footer__inner">
							<div class="footer__data">
								<div class="row">
									<div class="footer__data__item col-6">
										<div class="footer__row">
											<h4 class="footer__heading">PATIENTS</h4>
										</div>
										<div class="footer__row">
											<router-link :to="{ name: 'Condition' }" class="footer__link">Condition</router-link>
										</div>
										<div class="footer__row">
											<router-link :to="{ name: 'Home' }" target="_blank" class="footer__link">Sign Up</router-link>
										</div>
										<div class="footer__row">
											<router-link :to="{ path: '/search/1/Lagos' }" class="footer__link">Search for a doctor</router-link>
										</div>
										<div class="footer__row">
											<router-link :to="{ path: '/search/2/Lagos' }" class="footer__link">Search for a pharmacy</router-link>
										</div>
									</div>

									<div class="footer__data__item col-6">
										<div class="footer__row">
											<h4 class="footer__heading">PROVIDER</h4>
										</div>
										<div class="footer__row">
											<a href="http://app.medflit.com/register" target="_blank" class="footer__link">How you earn</a>
										</div>
										<div class="footer__row">
											<router-link :to="{ name: 'Provider' }"  target="_blank" class="footer__link">Providers FAQ</router-link>
										</div>
										<div class="footer__row">
											<a href="#" target="_blank" class="footer__link">Partnering hospitals</a>
										</div>
										<div class="footer__row">
											<a href="http://app.medflit.com/register" class="footer__link">Become a provider</a>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="footer__data__item col-6">
										<div class="footer__row">
											<h4 class="footer__heading">PHARMACY</h4>
										</div>
										<div class="footer__row">
											<a href="https://app.medflit.com/register" target="_blank" class="footer__link">Register your pharmacy</a>
										</div>
										<div class="footer__row">
											<router-link :to="{ name: 'Pharmacy' }" class="footer__link">Pharmacy FAQ</router-link>
										</div>
										<div class="footer__row">
											<router-link :to="{ name: 'Home' }" class="footer__link">Partnering programs</router-link>
										</div>
										<div class="footer__row">
											<a href="https://app.medflit.com/register" target="_blank" class="footer__link">Refer a pharmacy</a>
										</div>
									</div>

									<div class="footer__data__item col-6">
										<div class="footer__row">
											<h4 class="footer__heading">PARTNERS</h4>
										</div>
										<div class="footer__row">
											<a href="https://app.medflit.com/register" target="_blank" class="footer__link">Join Us</a>
										</div>
										<div class="footer__row">
											<a href="https://app.medflit.com/login" target="_blank" class="footer__link">Health Checkup</a>
										</div>
										<div class="footer__row">
											<router-link :to="{ name: 'Home' }" class="footer__link">Our Clients</router-link>
										</div>
										<div class="footer__row">
											<router-link :to="{ name: 'Partner' }" class="footer__link">Partners</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer--dark2">
			<div class="container">
				<div class="text-center socials">
					<i class="fa fa-facebook">&nbsp;</i>
					<i class="fa fa-instagram">&nbsp;</i>
					<i class="fa fa-twitter">&nbsp;</i>
					<i class="fa fa-linkedin">&nbsp;</i>
				</div>
				<div class="cp" style="margin-top: 10px"><h6 class="text-center">© 2018 <a href="http://medflithealthresources.com" target="_blank" class="">Medflit Health Resources</a>.</h6></div>
			</div>
		</div>

		<div class="overlay2"></div>
  </div>
</template>
<script>
export default {
  name: 'FootNavbar'
}
</script>
</script>
