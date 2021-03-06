import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Index'
import Search from '@/components/Search'
import Partner from '@/components/Partner'
import Provider from '@/components/Provider'
import Pharmacy from '@/components/Pharmacy'
import Condition from '@/components/Condition'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import ProviderProfile from '@/components/Provider_profile'
import PharmacyProfile from '@/components/Pharmacy_profile'
import HospitalProfile from '@/components/Hospital_profile'

Vue.use(Router)

// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
export default new Router({
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
        path: '/',
        name: 'Home',
        component: Hello
    }, {
        path: '/search/:id/:location',
        name: 'search',
        component: Search
    }, {
        path: '/partner',
        name: 'Partner',
        component: Partner
    }, {
        path: '/pharmacy',
        name: 'Pharmacy',
        component: Pharmacy
    }, {
        path: '/provider',
        name: 'Provider',
        component: Provider
    }, {
        path: '/condition',
        name: 'Condition',
        component: Condition
    }, {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }, {
        path: '/faq',
        name: 'Faq',
        component: Faq
    }, {
        path: '/doctor_profile/:id',
        name: 'ProviderProfile',
        component: ProviderProfile
    }, {
        path: '/pharmacy_profile/:id',
        name: 'PharmacyProfile',
        component: PharmacyProfile
    }, {
        path: '/hospital_profile/:id',
        name: 'HospitalProfile',
        component: HospitalProfile
    }, {
        path: '*',
        component: Hello
    }]
});