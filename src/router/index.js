import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Index'
import SignUp from '@/components/Search'
import About from '@/components/About'

Vue.use(Router)

// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Hello
    }, {
        path: '/search/:id/:location',
        name: 'search',
        component: SignUp
    }, {
        path: '/search',
        name: 'About',
        component: About
    }, {
        path: '/search/:id',
        name: 'Abouts',
        component: About
    }, {
        path: '*',
        component: Hello
    }]
})