import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";

describe("AboutView", () => {
	it("renders a heading", async () => {
		const router = createRouter({
			history: createWebHistory(),
			routes: [
				{
					path: "/about",
					name: "about",
					component: AboutView,
				},
			],
		});

		router.push("/about");
		await router.isReady();

		const wrapper = mount(AboutView, {
			global: {
				plugins: [router],
			},
		});

		expect(wrapper.find("h1").text()).toBe("Acerca de");
	});
});

describe("AboutView", () => {
	it("matches snapshot", () => {
		const wrapper = mount(AboutView);
		expect(wrapper.html()).toMatchSnapshot();
	});
});
