import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays the company name", () => {
    const companyName = "Bobo Careers";
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch(companyName);
  });
});
