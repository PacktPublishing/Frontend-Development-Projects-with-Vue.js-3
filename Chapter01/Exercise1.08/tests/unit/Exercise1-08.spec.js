import { mount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-08.vue";
import { describe, it, expect, vi } from "vitest";

describe("Exercise1-08.vue", () => {
  const wrapper = mount(Exercise);

  it("anonymous loop outputs correctly", () => {
    expect(wrapper.findAll("li").length).toEqual(5);
  });
  it("trigger alert", () => {
    const triggerSpy = vi.spyOn(wrapper.vm, 'triggerAlert')
    wrapper.findAll("button")[0].trigger("click");
    expect(triggerSpy).toBeCalled();
  });
});
