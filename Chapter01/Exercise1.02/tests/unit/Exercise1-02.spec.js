import { shallowMount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-02.vue";
import { describe, it, expect } from "vitest";

describe("Exercise1-02.vue", () => {
  it("renders props.title when passed", () => {
    const title = "My first component!";
    const wrapper = shallowMount(Exercise, {
      propsData: { title },
    });

    wrapper.setData({ isUppercase: false, title: title });

    expect(wrapper.text()).toMatch(title);
  });
});
