import { shallowMount } from "@vue/test-utils";
import Exercise from "@/components/Exercise2-03.vue";
import { describe, it, expect } from 'vitest'

describe("Exercise2-03.vue", () => {
  const wrapper = shallowMount(Exercise, {});

  it("watcher updates values", async () => {
    await wrapper.vm.updateDiscount();

    expect(wrapper.vm.oldDiscount).toEqual(5);
    expect(wrapper.vm.discount).toEqual(10);
  });
});
