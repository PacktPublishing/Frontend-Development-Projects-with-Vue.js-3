import { shallowMount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-06.vue";
import { describe, it, expect } from "vitest";

describe("Exercise1-06.vue", () => {
  it("should render", () => {
    const wrapper = shallowMount(Exercise);

    expect(wrapper.find("h1").text()).toEqual(
      "Looping through array of objects"
    );
  });
});
