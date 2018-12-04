<template>
  <div>
    <div class="hero">
      <div class="hero__overlay hero__overlay--gradient"></div>
      <div class="hero__mask"></div>
      <div class="hero__inner">
        <div class="container">
          <div class="hero__content">
            <div class="hero__content__inner" id="navConverter">
              <div class="ll">
                <h1 class="hero__title2">Are you a Pharmacy Owner?</h1>
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
              <img src="/static/images/svg/pharmacy-reg.png" alt style="width: 80%; height: auto">
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <h1 class="hero__title3">
              <span>Congratulations.</span>
            </h1>
            <p>Medflit has built a technology that allows digital prescriptions, med pick up and delivery to patients at their various preferred locations (homes or offices). Sign up now to start receiving countless orders from Medflit.</p>
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
            <p
              class="step__text text-center"
            >Complete your profile and upload necessary documents for account verification.</p>
          </div>
          <div class="step">
            <div class="step__media">
              <img src="/static/images/svg/profit.svg" class="step__image">
            </div>
            <p
              class="step__text text-center"
            >Start earning by receiving patients' prescriptions from providers.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="steps landing__section">
      <div class="container more-pad">
        <h2>PHARMACY FAQ</h2>
      </div>
      <div class="container">
        <div id="accordion" style="width: 90%; text-align:justify; margin-left: 10%;">
          <div class="card">
            <div class="card-header">
              <a
                class="card-link"
                data-toggle="collapse"
                href="#collapseOne"
              >HOW CAN I RECEIVE ORDERS?</a>
            </div>
            <div id="collapseOne" class="collapse show" data-parent="#accordion">
              <div
                class="card-body"
              >- Internet is required to use medflit.com either on your computer or your</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                class="collapsed card-link"
                data-toggle="collapse"
                href="#collapseTwo"
              >WHAT DOCUMENT(S) DO I NEED TO VERIFY MY ACCOUNT?</a>
            </div>
            <div id="collapseTwo" class="collapse" data-parent="#accordion">
              <div class="card-body">-License ID is required to verify pharmacy account.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                class="collapsed card-link"
                data-toggle="collapse"
                href="#collapseThree"
              >WHAT HOUR OF THE DAY DO I RECEIVE ORDERS FROM PATIENTS?</a>
            </div>
            <div id="collapseThree" class="collapse" data-parent="#accordion">
              <div class="card-body">-Orders are received 24hrs as long as you are online.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                class="collapsed card-link"
                data-toggle="collapse"
                href="#collapseFour"
              >HOW DO I ACTIVATE MY ACCOUNT?</a>
            </div>
            <div id="collapseFour" class="collapse" data-parent="#accordion">
              <div
                class="card-body"
              >-An account is paid for subscription monthly to keep pharmacy account activated.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                class="collapsed card-link"
                data-toggle="collapse"
                href="#collapseFive"
              >WHAT IS PHARMACY PARTNERSHIP SERVICE?</a>
            </div>
            <div id="collapseFive" class="collapse" data-parent="#accordion">
              <div
                class="card-body"
              >- Pharmacies are allowed to partner with medflit.com for patient to consult a doctor online in their stores at a subscribed fee.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                class="collapsed card-link"
                data-toggle="collapse"
                href="#collapseSix"
              >WHAT DO I GAIN FROM PHARMACY PARTNERSHIP SERVICE?</a>
            </div>
            <div id="collapseSix" class="collapse" data-parent="#accordion">
              <div
                class="card-body"
              >- 8% of consultation fee per patient gives to the pharmacy store.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                class="collapsed card-link"
                data-toggle="collapse"
                href="#collapseSeven"
              >WHAT IS THE REQUIREMENT FOR PHARMACY PARTNERSHIP?</a>
            </div>
            <div id="collapseSeven" class="collapse" data-parent="#accordion">
              <div
                class="card-body"
              >- Good internet service, well lighted environment, a computer.- Good internet service, well lighted environment, a computer.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
