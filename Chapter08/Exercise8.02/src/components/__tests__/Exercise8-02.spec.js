import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Exercise from "../Exercise8-02.vue";

describe("Exercise8-02.vue", () => {
  it("should render message", () => {
    const messages = ["Hello, how are you?"];

    const wrapper = mount(Exercise, {
      data() {
        return {
          messages,
        };
      },
    });

    expect(wrapper.findAll(".message--item").length).toBe(1);
    expect(wrapper.find(".message--item").text()).toBe(messages[0]);
  });
});
