var Registration = function() {

    var LoadComponent = function() {
        $("#patient-pill").hide();
        $("#doctor-reg").hide();
        $("#pharmacy-reg").hide();
        $("#partner-reg").hide();
        $("#hospital-reg").hide();
        $("#city").hide();
    }

    var ShowPatientForm = function() {
        $("#patient-reg").show();
        $("#doctor-reg").hide();
        $("#pharmacy-reg").hide();
        $("#partner-reg").hide();
        $("#hospital-reg").hide();
    }

    var ShowDoctorForm = function() {
        $("#doctor-reg").show();
        $("#patient-reg").hide();
        $("#pharmacy-reg").hide();
        $("#partner-reg").hide();
        $("#hospital-reg").hide();
    }

    var ShowPharmacyForm = function() {
        $("#pharmacy-reg").show();
        $("#patient-reg").hide();
        $("#doctor-reg").hide();
        $("#partner-reg").hide();
        $("#hospital-reg").hide();
    }

    var ShowPartnerForm = function() {
        $("#partner-reg").show();
        $("#patient-reg").hide();
        $("#doctor-reg").hide();
        $("#pharmacy-reg").hide();
        $("#hospital-reg").hide();
    }

    var ShowHospitalForm = function() {
        $("#hospital-reg").show();
        $("#patient-reg").hide();
        $("#doctor-reg").hide();
        $("#pharmacy-reg").hide();
        $("#partner-reg").hide();
    }

    var HidePatientPill = function() {
        $("#patient-pill").hide();
        $("#doctor-pill").show();
        $("#pharmacy-pill").show();
        $("#partner-pill").show();
        $("#hospital-pill").show();
    }

    var HideDoctorPill = function() {
        $("#doctor-pill").hide();
        $("#patient-pill").show();
        $("#pharmacy-pill").show();
        $("#partner-pill").show();
        $("#hospital-pill").show();
    }

    var HidePharmacyPill = function() {
        $("#patient-pill").show();
        $("#doctor-pill").show();
        $("#pharmacy-pill").hide();
        $("#partner-pill").show();
        $("#hospital-pill").show();
    }

    var HideCompanyPill = function() {
        $("#patient-pill").show();
        $("#doctor-pill").show();
        $("#pharmacy-pill").show();
        $("#partner-pill").hide();
        $("#hospital-pill").show();
    }

    var HideHospitalPill = function() {
        $("#patient-pill").show();
        $("#doctor-pill").show();
        $("#pharmacy-pill").show();
        $("#partner-pill").show();
        $("#hospital-pill").hide();
    }

    var ShowCity = function() {
        $("#city").show();
        $("#state").hide();
    }

    var ShowState = function() {
        $("#state").show();
        $("#city").hide();
    }

    var ShowPatientDetails = function() {
        $("#intro-img").attr('src',"images/svg/patient-reg.svg");
        $("#intro").text("Medflit is a convenient and affordable telemedicine platform that allows you to talk to a board-certified doctor by phone or video.");
    }

    var ShowDoctorDetails = function() {
        $("#intro-img").attr('src',"images/svg/hospital_doctor.svg");
        $("#intro").text("This page is for doctors sign up as family medicine, dermatologists, cardiologists, and other medical specialists.");
    }

    var ShowPharmacyDetails = function() {
        $("#intro-img").attr('src',"images/svg/pharmacy-reg.png");
        $("#intro").text("If you are a pharmacy owner, this page is for you to register your pharmacy business and your pharmacist.");
    }

    var ShowCompanyDetails = function() {
        $("#intro-img").attr('src',"images/svg/company.svg");
        $("#intro").text("We welcome schools, companies, organizations to take advantage of telemedicine software and use it for their respective businesses. Kindly sign up here.");
    }

    var ShowHospitalDetails = function() {
        $("#intro-img").attr('src',"images/svg/hospital-reg.png");
        $("#intro").text("This page is for hospital administrators to sign up their hospitals and register their doctors for instant booking.");
    }

    return {
        init: function() {
            LoadComponent();

            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });

            $("#patient-pill").on('click', function(){
                $("#category").text("Patient");
                ShowPatientDetails();
                HidePatientPill();
                ShowPatientForm();
            });

            $("#doctor-pill").on('click', function(){
                $("#category").text("Doctor");
                ShowDoctorDetails();
                HideDoctorPill();
                ShowDoctorForm();
            });

            $("#pharmacy-pill").on('click', function(){
                $("#category").text("Pharmacy");
                ShowPharmacyDetails();
                HidePharmacyPill();
                ShowPharmacyForm();
            });

            $("#partner-pill").on('click', function(){
                $("#category").text("Company");
                ShowCompanyDetails();
                HideCompanyPill();
                ShowPartnerForm();
            });

            $("#hospital-pill").on('click', function(){
                $("#category").text("Hospital");
                ShowHospitalDetails();
                HideHospitalPill();
                ShowHospitalForm();
            });

            $("#back-btn").on('click', function(){
                ShowState();
            });

            $("#select-city").on('click', function() {
                ShowCity();
            });
        }
    }

}();

jQuery(document).ready(function() {
    Registration.init();
});