import { shallowMount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-12.vue";
import { describe, it, expect } from "vitest";

describe("Exercise1-12.vue", () => {
  it("renders props.title when passed", () => {
    const title = "CSS module component!";
    const subtitle = "The fourth exercise";
    const wrapper = shallowMount(Exercise, {});

    wrapper.setData({ subtitle: subtitle, title: title });

    expect(wrapper.find("h1").text()).toMatch(title);
    expect(wrapper.find("h2").text()).toMatch(subtitle);
  });
});
