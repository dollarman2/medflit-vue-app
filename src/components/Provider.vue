<template>
  <div>
    <div class="hero">
			<div class="hero__overlay hero__overlay--gradient"></div>
			<div class="hero__mask"></div>
			<div class="hero__inner">
				<div class="container">
					<div class="hero__content">
						<div class="hero__content__inner" id='navConverter'>
							<div class="ll">
								<h1 class="hero__title2">Are you a Provider?</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>

        <div class="steps landing__section more-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="ddd">
                            <img src="/static/images/svg/work-from-home.svg" alt="">
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <h1 class="hero__title3">Work from the comfort of your<span> home or workplace.</span></h1>
                        <p>Do you need an extra stream of cash on the side working a part-time job or full-time job? Medflit is here to give you that dream job you had desired. </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="steps landing__section more-pad">
            <div class="container more-pad">
                <h2>PARTNERING HOSPITALS</h2>
            </div>
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="card partner-card">
                            <img src="/static/images/img/delta-hosp.jpg" class="hosp-img" alt="">
                            <div>
                                <h4>Delta State Hospital</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="card partner-card">
                            <img src="/static/images/img/PH-Teaching-Hospital.jpg" class="hosp-img" alt="">
                            <div>
                                <h4>PH Teaching Hospital</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="card partner-card">
                            <img src="/static/images/img/National-University-Commission.jpg" class="hosp-img" alt="">
                            <div>
                                <h4>National University Comm.</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="card partner-card">
                            <img src="/static/images/img/Burns-hospital.jpg" class="hosp-img" alt="">
                            <div>
                                <h4>Ogun State Hospital</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="steps landing__section">
            <div class="container more-pad">
                <h2>HOW IT WORKS</h2>
            </div>
            <div class="container">
                <div class="steps__inner">
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/mobile.svg" class="step__image">
                        </div>
                        <p class="step__text text-center">Register online or download our app for free.</p>
                    </div>
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/edit-profile.svg" class="step__image">
                        </div>
                        <p class="step__text text-center">Complete your profile and upload necessary documents for account verification.</p>
                    </div>
                    <div class="step">
                        <div class="step__media">
                            <img src="/static/images/svg/profit.svg" class="step__image">
                        </div>
                        <p class="step__text text-center">Start earning by receiving patients' consultation request at your scheduled timings.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="steps landing__section">
            <div class="container more-pad">
                <h2>PROVIDER FAQ</h2>
            </div>
            <div class="container">
                <div id="accordion">
                    <div class="card">
                        <div class="card-header">
                            <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                I don't have a reliable internet service, can I still provide services to patient?
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" data-parent="#accordion">
                            <div class="card-body">
                                Yes, you can take consultations from your affiliated hospital or licensed clinics.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                What documents are needed for my account verification?
                            </a>
                        </div>
                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                For verification purposes, we require documents such as ; Your medical license, CV, and Degrees and other certificates obtained in your area of specialty.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                I'm I bound by some time frames or schedules?
                            </a>
                        </div>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                No, Patients will only request consultation with you during the available time slots pre-scheduled by you. You can always edit your schedule anytime you want.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                Which of the provider plans do I qualify for?
                            </a>
                        </div>
                        <div id="collapseFour" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Provider Plans are based on years of experience in area of specialty, starting from the basic plan to the premium plan.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                                How much will I earn per consultation?
                            </a>
                        </div>
                        <div id="collapseFive" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Your earnings are dependent on your plan. Medflit takes 30% of whatever you earn from each consultation while the rest is deposited into your Medflit Wallet which is created for you at Signup.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseSix">
                                Can I withdraw my earnings anytime I want?
                            </a>
                        </div>
                        <div id="collapseSix" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Yes, you can withdraw your earnings at anytime as long as the funds available in your Medflit wallet is above the required threshold. The funds can be withdrawn directly into your bank account.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseSeven">
                                We have questions that are not listed, how can you help?
                            </a>
                        </div>
                        <div id="collapseSeven" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                You can contact our customer service for any questions at anytime 24hrs a day, seven days a week.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
</script>
