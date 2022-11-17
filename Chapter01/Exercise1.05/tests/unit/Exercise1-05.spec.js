import { shallowMount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-05.vue";
import { describe, it, expect } from "vitest";

describe("Exercise1-05.vue", () => {
  it("renders the list", () => {
    const wrapper = shallowMount(Exercise);
    const lis = wrapper.findAll("li");
    expect(lis[0].text()).toMatch("TV");
    expect(lis[1].text()).toMatch("Games");
    expect(lis[2].text()).toMatch("Sports");
  });
});
