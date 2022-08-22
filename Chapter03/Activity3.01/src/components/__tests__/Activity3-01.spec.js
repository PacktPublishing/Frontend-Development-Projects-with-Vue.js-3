import { shallowMount } from "@vue/test-utils";
import Activity from "@/components/Activity3-01.vue";
import { describe, it, expect } from 'vitest'

describe("Activity3-01.vue", () => {
  const wrapper = shallowMount(Activity, {});

  it("receives inputs", async () => {
    const textInput = wrapper.find("#fname");
    await textInput.setValue("fname");
    expect(wrapper.vm.fname).toEqual('fname');

    const textInput2 = wrapper.find("#lname");
    await textInput2.setValue("lname");
    expect(wrapper.vm.lname).toEqual('lname');
  });
});
