import { mount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-12.vue";
import { describe, it, expect, spyOn } from "vitest";

// Suppress window.alert errors
spyOn(window, "alert").mockReturnValue();

describe("Exercise1-12.vue", () => {
  const wrapper = mount(Exercise);

  it("anonymous loop outputs correctly", () => {
    expect(wrapper.findAll("li").length).toEqual(8);
  });
  it("deleted item is removed from array", () => {
    wrapper.setData({
      list: [1, 2, 3],
    });

    wrapper.vm.deleteItem(1);

    expect(wrapper.vm.list.length).toEqual(2);
  });
});
