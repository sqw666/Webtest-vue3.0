import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Html from '@/test/html.vue'
import Jstest from '@/test/jstest.vue'
import Vuetest from '@/test/vuetest.vue'

const routes = [{
        path: '/html',
        name: 'Html',
        component: Html,
        // children: [{
        //     // path: '/home',
        //     path: '/html',
        //     name: 'Html',
        //     component: Html
        // }]
    },
    {
        path: '/js',
        name: 'js',
        component: Jstest

    },
    {
        path: '/vuetest',
        name: 'vuetest',
        component: Vuetest

    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router