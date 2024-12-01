import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Counter from "../views/CounterView.vue";
import Text from "../views/TextView.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/counter",
		name: "Counter",
		component: Counter,
	},
	{
		path: "/text",
		name: "Text",
		component: Text,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
