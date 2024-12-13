import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import CounterView from "@/views/CounterView.vue";
import TextView from "@/views/TextView.vue";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
	it("renders a home form", async () => {
		const router = createRouter({
			history: createWebHistory(),
			routes: [
				{
					path: "/",
					name: "Home",
					component: HomeView,
				},
			],
		});
		router.push("/");
		await router.isReady();

		const wrapper = shallowMount(HomeView, {
			global: {
				plugins: [router],
			},
		});

		const viewComponent = wrapper.findComponent(HomeView);

		// Verify that the HomeView component exists
		expect(viewComponent.exists()).toBe(true);

		// Verify that the div with the counter class exists
		expect(wrapper.find(".title").exists()).toBe(true);
		expect(wrapper.find(".sub-title").exists()).toBe(true);
	});
});

describe("TextView", () => {
	it("renders a text form", async () => {
		const router = createRouter({
			history: createWebHistory(),
			routes: [
				{
					path: "/text",
					name: "Text",
					component: TextView,
				},
			],
		});
		router.push("/text");
		await router.isReady();

		const wrapper = shallowMount(TextView, {
			global: {
				plugins: [router],
			},
		});

		const viewComponent = wrapper.findComponent(TextView);

		// Verify that the TextView component exists
		expect(viewComponent.exists()).toBe(true);
	});
});

describe("CounterView", () => {
	it("renders a counter form", async () => {
		const router = createRouter({
			history: createWebHistory(),
			routes: [
				{
					path: "/counter",
					name: "Counter",
					component: CounterView,
				},
			],
		});
		router.push("/counter");
		await router.isReady();

		const wrapper = shallowMount(CounterView, {
			global: {
				plugins: [router],
			},
		});

		const viewComponent = wrapper.findComponent(CounterView);

		// Verify that the HomeView component exists
		expect(viewComponent.exists()).toBe(true);
	});
});
