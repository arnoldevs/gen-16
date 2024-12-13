import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
	let store;

	beforeEach(() => {
		store = createStore({
			state: {
				count: 0,
			},
			mutations: {
				increment(state) {
					state.count++;
				},
				decrement(state) {
					state.count--;
				},
			},
			actions: {
				incrementByOne({ commit }) {
					commit("increment");
				},
				decrementByOne({ commit }) {
					commit("decrement");
				},
			},
		});
	});

	it("Verifies that an initial value is received in the counter", () => {
		const wrapper = shallowMount(Counter, {
			global: {
				plugins: [store],
				provide: {
					$route: {
						push: jest.fn(),
					},
				},
			},
		});

		expect(wrapper.vm.count).toBe(0);
		expect(wrapper.find(".sub-title").text()).toContain("The count is: 0");
	});

	it("Test the counter increment functionality", async () => {
		const wrapper = shallowMount(Counter, {
			global: {
				plugins: [store],
				provide: {
					$route: {
						push: jest.fn(),
					},
				},
			},
		});
		await wrapper.find("button:nth-child(1)").trigger("click");
		expect(wrapper.vm.count).toBe(1);
		expect(wrapper.find(".sub-title").text()).toContain("The count is: 1");
	});

	it("Test the counter decrement functionality", async () => {
		const wrapper = shallowMount(Counter, {
			global: {
				plugins: [store],
				provide: {
					$route: {
						push: jest.fn(),
					},
				},
			},
		});
		await wrapper.find("button:nth-child(2)").trigger("click");
		expect(wrapper.vm.count).toBe(-1);
		expect(wrapper.find(".sub-title").text()).toContain("The count is: -1");
	});
});
