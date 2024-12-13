// Import mount instead of shallowMount to be able to access component events
import { mount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";

describe("Parent.vue", () => {
	it("receives text from Child component when button is clicked", async () => {
		const wrapper = mount(Parent);
		const childComponent = wrapper.findComponent(Child);

		expect(childComponent.exists()).toBe(true);

		const input = childComponent.find("input");
		await input.setValue("Test text");

		const button = childComponent.find("button");
		await button.trigger("click");

		expect(wrapper.vm.text).toBe("Test text");
		expect(wrapper.find(".sub-title").text()).toContain(
			"Text received from child: Test text",
		);
	});

	it("receives text from Child component when enter is pressed", async () => {
		const wrapper = mount(Parent);
		const childComponent = wrapper.findComponent(Child);

		expect(childComponent.exists()).toBe(true);

		const input = childComponent.find("input");
		await input.setValue("Test text");

		await input.trigger("keyup.enter");

		expect(wrapper.vm.text).toBe("Test text");
		expect(wrapper.find(".sub-title").text()).toContain(
			"Text received from child: Test text",
		);
	});
});
