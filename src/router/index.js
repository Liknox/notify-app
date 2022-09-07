import {createWebHashHistory, createRouter} from "vue-router"
import Home from "@/pages/Home.vue"
import NotFound from "@/pages/404.vue"
import NotifyPage from "@/pages/NotifyPage.vue"

const routes = [
	{
		path: "/",
		name: "Notify",
		component: NotifyPage,
	},
	{
		path: "/about",
		name: "about",
		component: Home,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
