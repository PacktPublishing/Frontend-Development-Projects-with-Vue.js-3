import { shallowMount } from "@vue/test-utils";
import Exercise from "@/components/Exercise2-05.vue";
import { describe, it, expect } from "vitest";

describe("Exercise2-05.vue", () => {
  const wrapper = shallowMount(Exercise, {});

  it("blockquote condition exists", async () => {
    const blockquote = wrapper.find("blockquote");
    expect(blockquote.exists()).toBe(false);
  });
  it("async api fetches", async () => {
    await wrapper.vm.fetchAdvice();
    expect(wrapper.vm.quote).toContain(wrapper.vm.axiosResponse.slip.advice);
  });
});
