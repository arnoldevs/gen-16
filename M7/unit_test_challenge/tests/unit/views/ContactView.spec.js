import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import ContactView from "@/views/ContactView.vue";

describe("ContactView", () => {
	it("renders a contact form", async () => {
		const router = createRouter({
			history: createWebHistory(),
			routes: [
				{
					path: "/contact",
					name: "contact",
					component: ContactView,
				},
			],
		});
		router.push("/contact");
		await router.isReady();

		const wrapper = mount(ContactView, {
			global: {
				plugins: [router],
			},
		});

		// Asegúrate de que el formulario exista y tenga los elementos esperados
		expect(wrapper.find("form").exists()).toBe(true);
		expect(wrapper.find('input[type="text"]').exists()).toBe(true);
		expect(wrapper.find("textarea").exists()).toBe(true);
		expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
	});

	it("matches snapshot", () => {
		const wrapper = mount(ContactView);
		expect(wrapper.html()).toMatchSnapshot();
	});
});
