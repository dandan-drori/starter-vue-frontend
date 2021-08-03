import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import about from '@/views/about'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: home,
	},
	{
		path: '/about',
		component: about,
	},
]

const router = new VueRouter({
	routes,
})

export default router
