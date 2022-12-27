import { shallowMount } from "@vue/test-utils";
import PizzaItem from "@/components/PizzaItem.vue";
import { describe, it, expect } from 'vitest'

describe("PizzaItem.vue", () => {
  const wrapper = shallowMount(PizzaItem, {});

  it("watcher updates values", async () => {
    await wrapper.vm.updateDiscount();

    expect(wrapper.vm.oldDiscount).toEqual(5);
    expect(wrapper.vm.discount).toEqual(10);
  });
});
