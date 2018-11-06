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
								<h1 class="hero__title2">FAQs</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>

        <div class="steps landing__section">
            <div class="container more-pad">
                <h2>FAQs</h2>
            </div>
            <div class="container">
                <div id="accordion">
                    <div class="card">
                        <div class="card-header">
                            <a class="card-link" data-toggle="collapse" href="#collapseOne">What is Medfit?
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" data-parent="#accordion">
                            <div class="card-body">Medflit is an integrated telemedicine software that allows patients to speak with doctors at low cost and get medications from their nearest pharmacies.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">How can I know if Medflit can help me?
                            </a>
                        </div>
                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                            <div class="card-body">Medflit can help you if you are suffering from non-emergency or noncritical health conditions. Medflit can help you consult a doctor both online and at various hospitals, get prescriptions and receive your medications from pharmacies close to you.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">What are the frequent health conditions that Medflit can Treat?
                            </a>
                        </div>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body">See our <router-link :to="{ name: 'Condition' }">list of health conditions</router-link> that Medflit’s doctors can treat. If your health condition is not listed, you can contact us through a customer service.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">How do I sign up on my phone or computer?
                            </a>
                        </div>
                        <div id="collapseFour" class="collapse" data-parent="#accordion">
                            <div class="card-body"> You can sign up on your phone or computer using the Register buttons on the homepage, or simply click this link to open the Signup page on your browser to create an account with us.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFive">Do I need an account to use Medflit?
                            </a>
                        </div>
                        <div id="collapseFive" class="collapse" data-parent="#accordion">
                            <div class="card-body">Yes, you need an account to use Medflit. Your account serves as part of your medical records. Your information is secured and will not be shared with any parties except your direct providers.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseSix">I don’t have a phone or computer but how do I speak to a Doctor?
                            </a>
                        </div>
                        <div id="collapseSix" class="collapse" data-parent="#accordion">
                            <div class="card-body">You can speak with doctors without using your personal phone or computer by visiting your neighborhood pharmacies and ask if they are participating in Medflit partnership program.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseSeven">When and Where is Medflit Available?
                            </a>
                        </div>
                        <div id="collapseSeven" class="collapse" data-parent="#accordion">
                            <div class="card-body"> Medflit is available 24hrs a day / 7 days a week. Medflit is available only in Nigeria.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseEight">What is the office hour for Medflit?
                            </a>
                        </div>
                        <div id="collapseEight" class="collapse" data-parent="#accordion">
                            <div class="card-body">Our office hour is between 9am – 6pm but you can use our software to book appointment with doctors 24hrs a day.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseNine">How much does it cost to use Medflit?
                            </a>
                        </div>
                        <div id="collapseNine" class="collapse" data-parent="#accordion">
                            <div class="card-body">  Our price depends on the plan you choose. Starting from 1,000 Naira, you can start talking with doctors.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTen">Can I access Medflit on any devices?
                            </a>
                        </div>
                        <div id="collapseTen" class="collapse" data-parent="#accordion">
                            <div class="card-body"> Yes, you can access Medflit on any internet enabled computer, tablet or phone equipped with either android, iOS or windows operating system.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseEleven">Can I get a prescription through Medflit doctors?
                            </a>
                        </div>
                        <div id="collapseEleven" class="collapse" data-parent="#accordion">
                            <div class="card-body"> You, can get prescriptions through Medflit’s doctors. Our doctors do not prescribe control meds or narcotics.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwelve">I am an employer or organization what can Medflit do for us?
                            </a>
                        </div>
                        <div id="collapseTwelve" class="collapse" data-parent="#accordion">
                            <div class="card-body"> Medflit can help with employee health screening. We can also provide healthcare providers such as doctors and pharmacists for your employees.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapse13">Can Medflit keep all my information private and secured?
                            </a>
                        </div>
                        <div id="collapse13" class="collapse" data-parent="#accordion">
                            <div class="card-body">  Yes, your information is safe and secure with us. We take patients information very serious and confidential; we do not share the information with anyone except your direct providers. Our portal is safe for users.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapse14">Can I print or transfer all my medical records at any time?
                            </a>
                        </div>
                        <div id="collapse14" class="collapse" data-parent="#accordion">
                            <div class="card-body"> Yes, you can download, print and transfer your medical records at any time. We will need your permission to transfer your medical records to any of your preferred hospital or clinics.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapse15">I have phone but no camera can I still talk to doctor?
                            </a>
                        </div>
                        <div id="collapse15" class="collapse" data-parent="#accordion">
                            <div class="card-body">  Yes, you can speak with doctor through voice call and chatting app. You will only need a phone camera for video consultations
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapse16">How do I get my prescriptions from pharmacies?
                            </a>
                        </div>
                        <div id="collapse16" class="collapse" data-parent="#accordion">
                            <div class="card-body"> You can pick up prescriptions at your own preferred pharmacy store or we can have the medications delivered to your office or house within 2-6 hrs of placing the order.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapse16">I have question that is not listed, how can you help?
                            </a>
                        </div>
                        <div id="collapse16" class="collapse" data-parent="#accordion">
                            <div class="card-body"> You can contact our customer service for any questions at anytime 24hrs a day, seven days a week.
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
