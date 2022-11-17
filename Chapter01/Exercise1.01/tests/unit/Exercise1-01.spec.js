import { shallowMount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-01.vue";
import { describe, it, expect } from "vitest";

describe("Exercise1-01.vue", () => {
  it("renders props.title when passed", () => {
    const wrapper = shallowMount(Exercise);
    expect(wrapper.text()).toMatch("My first component!");
  });
});
